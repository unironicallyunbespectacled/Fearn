// FEARN Curriculum Data — songwriting
(function (global) {
  'use strict';
  var UNITS = [
    {
        "id": "songwriting-u1",
        "unit": 1,
        "title": "Song Architecture: Verse-Chorus-Bridge Blueprint",
        "level": "Beginner",
        "goal": "Mastery of Song Architecture: Verse-Chorus-Bridge Blueprint.",
        "lessonIds": [
            "songwriting-u1-l1",
            "songwriting-u1-l2",
            "songwriting-u1-l3",
            "songwriting-u1-l4",
            "songwriting-u1-l5"
        ]
    },
    {
        "id": "songwriting-u2",
        "unit": 2,
        "title": "Hook Writing, Catchy Motifs & Earworms",
        "level": "Beginner",
        "goal": "Mastery of Hook Writing, Catchy Motifs & Earworms.",
        "lessonIds": [
            "songwriting-u2-l1",
            "songwriting-u2-l2",
            "songwriting-u2-l3",
            "songwriting-u2-l4",
            "songwriting-u2-l5"
        ]
    },
    {
        "id": "songwriting-u3",
        "unit": 3,
        "title": "Rhyme Schemes: Perfect, Slant & Assonance",
        "level": "Intermediate",
        "goal": "Mastery of Rhyme Schemes: Perfect, Slant & Assonance.",
        "lessonIds": [
            "songwriting-u3-l1",
            "songwriting-u3-l2",
            "songwriting-u3-l3",
            "songwriting-u3-l4",
            "songwriting-u3-l5"
        ]
    },
    {
        "id": "songwriting-u4",
        "unit": 4,
        "title": "Lyric Imagery, Metaphor & Sensory Detail",
        "level": "Intermediate",
        "goal": "Mastery of Lyric Imagery, Metaphor & Sensory Detail.",
        "lessonIds": [
            "songwriting-u4-l1",
            "songwriting-u4-l2",
            "songwriting-u4-l3",
            "songwriting-u4-l4",
            "songwriting-u4-l5"
        ]
    },
    {
        "id": "songwriting-u5",
        "unit": 5,
        "title": "Prosody & Meter: Aligning Words with Rhythmic Stress",
        "level": "Intermediate",
        "goal": "Mastery of Prosody & Meter: Aligning Words with Rhythmic Stress.",
        "lessonIds": [
            "songwriting-u5-l1",
            "songwriting-u5-l2",
            "songwriting-u5-l3",
            "songwriting-u5-l4",
            "songwriting-u5-l5"
        ]
    },
    {
        "id": "songwriting-u6",
        "unit": 6,
        "title": "Harmonic Chord Progressions & Modal Shifts",
        "level": "Advanced",
        "goal": "Mastery of Harmonic Chord Progressions & Modal Shifts.",
        "lessonIds": [
            "songwriting-u6-l1",
            "songwriting-u6-l2",
            "songwriting-u6-l3",
            "songwriting-u6-l4",
            "songwriting-u6-l5"
        ]
    },
    {
        "id": "songwriting-u7",
        "unit": 7,
        "title": "Vocal Melody Phrasing & Dynamic Climax",
        "level": "Advanced",
        "goal": "Mastery of Vocal Melody Phrasing & Dynamic Climax.",
        "lessonIds": [
            "songwriting-u7-l1",
            "songwriting-u7-l2",
            "songwriting-u7-l3",
            "songwriting-u7-l4",
            "songwriting-u7-l5"
        ]
    },
    {
        "id": "songwriting-u8",
        "unit": 8,
        "title": "Full Track Arrangement & Industry Demo Polish",
        "level": "Master",
        "goal": "Mastery of Full Track Arrangement & Industry Demo Polish.",
        "lessonIds": [
            "songwriting-u8-l1",
            "songwriting-u8-l2",
            "songwriting-u8-l3",
            "songwriting-u8-l4",
            "songwriting-u8-l5"
        ]
    }
];
  var LESSONS = {
  "songwriting-u1-l1": {
    "id": "songwriting-u1-l1",
    "unit": "songwriting-u1",
    "level": "beginner",
    "objective": "Identify perfect rhymes versus near (slant) rhymes in a given lyric passage.",
    "presentation": {
      "explanation": "A perfect rhyme matches the ending sound exactly, from the last stressed vowel all the way to the end of the word: night and light both land on the identical '-ight' sound. A slant rhyme (also called a near rhyme) only partially matches — usually sharing the vowel sound but not the final consonant, or vice versa — close enough for the ear to feel a connection without it being a precise echo. Take 'home' and 'alone': both carry the same long-O vowel, but one ends in 'm' and the other in 'n' — a slant rhyme, and one of the most widely used slant pairs in popular songwriting. Neither type is 'better' on its own — perfect rhyme gives a lyric a tight, satisfying click; slant rhyme gives it more room to breathe and sound like natural speech instead of a nursery rhyme. Most working songwriters use both deliberately within the same song, reaching for perfect rhyme when they want a hook to land hard, and slant rhyme when they want a line to feel conversational.",
      "examples": [
        {
          "problem": "behind / find (from \"The five-fifteen bus is always behind, / I've counted the cracks in the sidewalk I find.\")",
          "answer": "Perfect rhyme",
          "description": "Identical ending sound from the stressed vowel onward: \"-ind\" in both words."
        },
        {
          "problem": "booth / proof (from \"The diner light hums over an empty booth, / Waiting on a coffee and a little proof.\")",
          "answer": "Slant rhyme",
          "description": "Shares the \"oo\" vowel sound but the final consonants differ (th vs. f) — close enough to feel connected, not identical."
        },
        {
          "problem": "home / alone",
          "answer": "Slant rhyme",
          "description": "Same vowel sound, different final consonant (m vs. n) — a classic, widely used slant pair in popular songwriting."
        },
        {
          "problem": "night / light",
          "answer": "Perfect rhyme",
          "description": "Both end in the identical \"-ight\" sound — about as perfect as rhyme gets."
        }
      ],
      "mnemonics": [
        "Verse-Chorus-Verse-Chorus-Bridge-Chorus (ABABCB) is the golden architecture of modern emotional resonance."
      ],
      "culturalNotes": [
        "Tin Pan Alley and the Brill Building established the craft of professional collaborative songwriting in America."
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "id": "songwriting-u1-l1-q1",
          "type": "multiple-choice",
          "prompt": "Which pair is a perfect rhyme?",
          "options": [
            "heart / hurt (Identify perfect rhymes versus near slant rhymes in a given lyric passage)",
            "home / alone (Identify perfect rhymes versus near slant rhymes in a given lyric passage)",
            "night / light (Identify perfect rhymes versus near slant rhymes in a given lyric passage)",
            "man / again (Identify perfect rhymes versus near slant rhymes in a given lyric passage)"
          ],
          "answer": "night / light",
          "difficulty": 500,
          "answerIndex": 0
        },
        {
          "id": "songwriting-u1-l1-q2",
          "type": "multiple-choice",
          "prompt": "Which pair is a slant (near) rhyme?",
          "options": [
            "rain / train (Identify perfect rhymes versus near slant rhymes in a given lyric passage)",
            "flame / name (Identify perfect rhymes versus near slant rhymes in a given lyric passage)",
            "booth / proof (Identify perfect rhymes versus near slant rhymes in a given lyric passage)",
            "gone / dawn (Identify perfect rhymes versus near slant rhymes in a given lyric passage)"
          ],
          "answer": "booth / proof",
          "difficulty": 500,
          "answerIndex": 0
        },
        {
          "id": "songwriting-u1-l1-q3",
          "type": "multiple-choice",
          "prompt": "What defines a perfect rhyme?",
          "options": [
            "The words start with the same letter (Identify perfect rhymes versus near slant rhymes in a given lyric passage)",
            "The ending sound is identical from the stressed vowel onward (Identify perfect rhymes versus near slant rhymes in a given lyric passage)",
            "The words have the same number of syllables (Identify perfect rhymes versus near slant rhymes in a given lyric passage)",
            "The words are both one syllable (Identify perfect rhymes versus near slant rhymes in a given lyric passage)"
          ],
          "answer": "The ending sound is identical from the stressed vowel onward",
          "difficulty": 500,
          "answerIndex": 0
        },
        {
          "id": "songwriting-u1-l1-q4",
          "type": "short-answer",
          "prompt": "Write one original perfect-rhyme pair (two words) and one original slant-rhyme pair — they do not need to be from a full lyric.",
          "answer": "Any two words sharing an identical ending sound from the stressed vowel onward count as a perfect rhyme pair (e.g. \"sky/high\"); any two words sharing only part of that ending sound — usually the vowel but not the final consonant, or vice versa — count as a slant rhyme pair (e.g. \"shape/rain\").",
          "difficulty": 510
        }
      ]
    },
    "title": "Unit 1, Lesson 1"
  },
  "songwriting-u1-l2": {
    "id": "songwriting-u1-l2",
    "unit": "songwriting-u1",
    "level": "beginner",
    "objective": "Label the rhyme scheme (AABB, ABAB, ABCB) of a given verse.",
    "presentation": {
      "explanation": "Rhyme scheme notation assigns a letter to each line based on which lines rhyme with which: the first line is A, the next line is also A if it rhymes with the first, or a new letter (B) if it introduces a fresh rhyme sound, and so on. AABB means rhyming couplets back to back (line 1 rhymes with line 2, line 3 rhymes with line 4) — it feels tight and sing-songy, almost like it's driving forward on rails. ABAB means alternating rhyme (line 1 rhymes with line 3, line 2 rhymes with line 4) — it feels more like a conversation weaving forward, and is common in narrative verses that need to develop across four lines. ABCB rhymes only lines 2 and 4, leaving lines 1 and 3 free — the most common pattern in folk and ballad-style verses, because it hands you two unrhymed lines to develop an idea in plain language before the rhyme lands, which often feels more natural and closer to spoken storytelling than forcing every line into a rhyme pair.",
      "examples": [
        {
          "problem": "AABB: \"The subway busker plays an old guitar, / His case is empty but his dream's not far, / The trains keep coming, people rushing through, / He plays like someone, someday, might just do.\"",
          "answer": "AABB",
          "description": "Line 1 rhymes with line 2 (guitar/far), line 3 rhymes with line 4 (through/do) — rhyming couplets back to back."
        },
        {
          "problem": "ABAB: \"The lighthouse keeper counts the waves at night, / The fog rolls in before the ships can see, / He trims the wick and checks the beam is right, / And waits for dawn to set the harbor free.\"",
          "answer": "ABAB",
          "description": "Line 1 rhymes with line 3 (night/right), line 2 rhymes with line 4 (see/free) — alternating rhyme."
        },
        {
          "problem": "ABCB: \"The screen door slams before the storm arrives, / The porch light flickers, holding on, / Somewhere a dog begins to howl, / And then, like that, the day is gone.\"",
          "answer": "ABCB",
          "description": "Only line 2 rhymes with line 4 (on/gone) — lines 1 and 3 are free, unrhymed."
        }
      ],
      "mnemonics": [
        "The chorus is your emotional thesis; make your melodic hook rhythmically distinct and dynamically elevated."
      ],
      "culturalNotes": [
        "Folk traditions and the Great American Songbook showcase the timeless power of storytelling and modal harmony."
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "id": "songwriting-u1-l2-q1",
          "type": "multiple-choice",
          "prompt": "In the scheme ABAB, which lines rhyme with each other?",
          "options": [
            "Lines 1 and 2, and lines 3 and 4 (Label the rhyme scheme AABB)",
            "Lines 1 and 3, and lines 2 and 4 (Label the rhyme scheme AABB)",
            "Only lines 2 and 4 (Label the rhyme scheme AABB)",
            "All four lines rhyme with each other (Label the rhyme scheme AABB)"
          ],
          "answer": "Lines 1 and 3, and lines 2 and 4",
          "difficulty": 510,
          "answerIndex": 0
        },
        {
          "id": "songwriting-u1-l2-q2",
          "type": "multiple-choice",
          "prompt": "In the scheme ABCB, how many of the four lines actually rhyme with another line?",
          "options": [
            "All four (Label the rhyme scheme AABB)",
            "Three (Label the rhyme scheme AABB)",
            "Two (Label the rhyme scheme AABB)",
            "None (Label the rhyme scheme AABB)"
          ],
          "answer": "Two (lines 2 and 4)",
          "difficulty": 510,
          "answerIndex": 0
        },
        {
          "id": "songwriting-u1-l2-q3",
          "type": "short-answer",
          "prompt": "Label the rhyme scheme of this verse: \"The subway busker plays an old guitar, / His case is empty but his dream's not far, / The trains keep coming, people rushing through, / He plays like someone, someday, might just do.\"",
          "answer": "AABB — line 1 rhymes with line 2 (guitar/far), and line 3 rhymes with line 4 (through/do).",
          "difficulty": 520
        },
        {
          "id": "songwriting-u1-l2-q4",
          "type": "multiple-choice",
          "prompt": "Which rhyme scheme is most associated with folk/ballad-style verses because it leaves two lines \"free\" before landing a rhyme?",
          "options": [
            "AABB (Label the rhyme scheme AABB)",
            "ABAB (Label the rhyme scheme AABB)",
            "ABCB (Label the rhyme scheme AABB)",
            "AAAA (Label the rhyme scheme AABB)"
          ],
          "answer": "ABCB",
          "difficulty": 510,
          "answerIndex": 0
        }
      ]
    },
    "title": "Unit 1, Lesson 2: Label the rhyme scheme (AABB"
  },
  "songwriting-u1-l3": {
    "id": "songwriting-u1-l3",
    "unit": "songwriting-u1",
    "level": "beginner",
    "objective": "Write a four-line verse using a specified rhyme scheme without forcing awkward word choices.",
    "presentation": {
      "explanation": "The core craft challenge of this lesson: a rhyme should never sound like you bent the sentence just to hit it. The tell-tale sign of a 'forced' rhyme is inverted or unnatural word order — nobody says 'to the store I did go' outside of a rhyme scramble — or reaching for an obscure word purely because it rhymes and jamming it somewhere it doesn't belong meaning-wise. The fix: write the line's meaning first, in plain, natural phrasing, then look for a rhyme-word that already fits naturally at the end of that sentence — don't reverse-engineer the sentence around a rhyme you already picked. If nothing natural rhymes with your line-ending word, it's almost always easier to rephrase the whole line around a different, more rhyme-friendly ending word than to force the original one.",
      "examples": [
        {
          "problem": "Forced: \"Into the store then walked I slow\"",
          "answer": "Awkward inverted word order just to end on a rhyme-friendly word",
          "description": "Nobody talks like this — the sentence was bent backwards to manufacture a rhyme."
        },
        {
          "problem": "Natural: \"I walked slow into the store\"",
          "answer": "Same idea, natural word order",
          "description": "If this line needs to rhyme with something, the fix is choosing a different natural ending, not inverting the grammar."
        },
        {
          "problem": "\"The porch light flickers, holding on\" needs a matching B-rhyme next line",
          "answer": "\"...and then the day is gone\" (not \"...upon the lawn, a swan\")",
          "description": "\"gone\" rhymes naturally and fits the plain meaning; reaching for \"swan\" just because it rhymes would derail the image entirely."
        }
      ],
      "mnemonics": [
        "Prosody: Align lyrical stressed syllables with the strong musical beats of the bar (e.g., beats 1 and 3 in 4/4)."
      ],
      "culturalNotes": [
        "Motown's songwriting teams (Holland-Dozier-Holland) revolutionized pop production with irresistible rhythm and melodic hooks."
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "id": "songwriting-u1-l3-q1",
          "type": "multiple-choice",
          "prompt": "What is the clearest sign a rhyme has been \"forced\"?",
          "options": [
            "It uses a one-syllable word (Write a fourline verse using a specified rhyme scheme without forcing awkward word choices)",
            "The word order is inverted or unnatural just to land on the rhyme (Write a fourline verse using a specified rhyme scheme without forcing awkward word choices)",
            "It rhymes perfectly instead of using slant rhyme (Write a fourline verse using a specified rhyme scheme without forcing awkward word choices)",
            "The line is short (Write a fourline verse using a specified rhyme scheme without forcing awkward word choices)"
          ],
          "answer": "The word order is inverted or unnatural just to land on the rhyme",
          "difficulty": 520,
          "answerIndex": 0
        },
        {
          "id": "songwriting-u1-l3-q2",
          "type": "multiple-choice",
          "prompt": "What is the recommended fix when nothing natural rhymes with your line-ending word?",
          "options": [
            "Force an obscure word in anyway (Write a fourline verse using a specified rhyme scheme without forcing awkward word choices)",
            "Invert the sentence's grammar (Write a fourline verse using a specified rhyme scheme without forcing awkward word choices)",
            "Rephrase the line around a different, more rhyme-friendly ending word (Write a fourline verse using a specified rhyme scheme without forcing awkward word choices)",
            "Give up on rhyme entirely for the whole song (Write a fourline verse using a specified rhyme scheme without forcing awkward word choices)"
          ],
          "answer": "Rephrase the line around a different, more rhyme-friendly ending word",
          "difficulty": 520,
          "answerIndex": 0
        },
        {
          "id": "songwriting-u1-l3-q3",
          "type": "short-answer",
          "prompt": "Write an original four-line verse using the AABB rhyme scheme, about any concrete scene of your choosing (a place, not an abstract feeling). Make sure no line uses inverted word order to force a rhyme.",
          "answer": "Any four-line verse where line 1 rhymes with line 2, line 3 rhymes with line 4, all four lines use natural spoken word order, and the verse describes a concrete, specific scene rather than a vague abstract feeling.",
          "difficulty": 530
        },
        {
          "id": "songwriting-u1-l3-q4",
          "type": "short-answer",
          "prompt": "Write an original four-line verse using the ABCB rhyme scheme (only lines 2 and 4 need to rhyme).",
          "answer": "Any four-line verse where lines 2 and 4 share a rhyme, lines 1 and 3 do not need to rhyme with anything, and all lines use natural spoken word order.",
          "difficulty": 530
        }
      ]
    },
    "title": "Unit 1, Lesson 3"
  },
  "songwriting-u1-l4": {
    "id": "songwriting-u1-l4",
    "unit": "songwriting-u1",
    "level": "beginner",
    "objective": "Use slant rhyme deliberately to avoid a cliche perfect-rhyme pairing.",
    "presentation": {
      "explanation": "Some perfect rhyme pairs are so overused in songs that landing on them instantly signals 'I didn't try very hard' to a listener who's heard thousands of songs: heart/start, fire/desire, love/above, night/light, cry/why. This doesn't mean never use them — sometimes the obvious rhyme genuinely is the right word — but a skilled writer treats them as a warning sign worth pausing on, and slant rhyme is the escape hatch: swapping a worn-out perfect rhyme for a fresher slant rhyme that still connects but doesn't feel prewritten. Instead of 'my heart / a new start' (an extremely common pairing), try 'my heart / the dark' — a slant rhyme that keeps the emotional weight of 'heart' but avoids the predictable landing. The real test isn't 'is this technically a rhyme' — it's 'does this still sound like a fresh sentence, or does it sound like the fill-in-the-blank ending a listener could finish for you before you sing it.'",
      "examples": [
        {
          "problem": "Cliche perfect pair: \"heart\" / \"start\"",
          "answer": "Extremely common — signals a listener has heard this exact pairing many times before",
          "description": "Not wrong, but a flag worth pausing on."
        },
        {
          "problem": "Slant-rhyme alternative: \"heart\" / \"dark\"",
          "answer": "Fresher — connects loosely without being the expected fill-in-the-blank pair",
          "description": "Keeps the emotional weight of \"heart\" but avoids the predictable \"start\" landing."
        },
        {
          "problem": "Cliche perfect pair: \"fire\" / \"desire\"",
          "answer": "One of the most overused pairs in popular song",
          "description": "Worth actively avoiding unless there is a specific reason it is exactly the right word."
        },
        {
          "problem": "Slant-rhyme alternative: \"fire\" / \"higher\"",
          "answer": "Still connects, less predictable than \"desire\"",
          "description": "Swaps the expected partner for one that still resolves the line but surprises the ear slightly."
        }
      ],
      "mnemonics": [
        "The Bridge provides harmonic departure and emotional perspective shift before the final triumphant chorus climax."
      ],
      "culturalNotes": [
        "Nashville's 'three chords and the truth' philosophy emphasizes authentic vulnerability and narrative punch."
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "id": "songwriting-u1-l4-q1",
          "type": "multiple-choice",
          "prompt": "Why might a songwriter deliberately avoid the pair \"love / above\"?",
          "options": [
            "They don't actually rhyme (Use slant rhyme deliberately to avoid a cliche perfectrhyme pairing)",
            "It is one of the most overused pairings in popular song and can sound predictable (Use slant rhyme deliberately to avoid a cliche perfectrhyme pairing)",
            "It is grammatically incorrect (Use slant rhyme deliberately to avoid a cliche perfectrhyme pairing)",
            "Slant rhymes are always required by rule (Use slant rhyme deliberately to avoid a cliche perfectrhyme pairing)"
          ],
          "answer": "It is one of the most overused pairings in popular song and can sound predictable",
          "difficulty": 530,
          "answerIndex": 0
        },
        {
          "id": "songwriting-u1-l4-q2",
          "type": "short-answer",
          "prompt": "Take the cliche pair \"cry / why\" and propose one slant-rhyme alternative to \"cry\" that feels fresher.",
          "answer": "Any slant rhyme for \"cry\" that avoids the exact expected \"why\" pairing works, for example \"cry\" / \"time\" or \"cry\" / \"light\" — the key is the word still connects loosely by sound without being the immediately predictable partner.",
          "difficulty": 540
        },
        {
          "id": "songwriting-u1-l4-q3",
          "type": "multiple-choice",
          "prompt": "What is the actual test for whether a rhyme is too predictable, according to this lesson?",
          "options": [
            "Whether it is a perfect rhyme technically (Use slant rhyme deliberately to avoid a cliche perfectrhyme pairing)",
            "Whether a listener could guess the ending word before you sing it (Use slant rhyme deliberately to avoid a cliche perfectrhyme pairing)",
            "Whether the words share the same number of letters (Use slant rhyme deliberately to avoid a cliche perfectrhyme pairing)",
            "Whether it is a one-syllable word (Use slant rhyme deliberately to avoid a cliche perfectrhyme pairing)"
          ],
          "answer": "Whether a listener could guess the ending word before you sing it",
          "difficulty": 530,
          "answerIndex": 0
        }
      ]
    },
    "title": "Unit 1, Lesson 4"
  },
  "songwriting-u1-l5": {
    "id": "songwriting-u1-l5",
    "unit": "songwriting-u1",
    "level": "beginner",
    "objective": "Pass a rhyme-scheme identification and writing checkpoint.",
    "presentation": {
      "explanation": "This checkpoint combines all four skills from the unit at once, the way they actually get used together in real lyric writing from Unit 2 onward: identifying perfect versus slant rhyme, labeling a verse's rhyme scheme, writing a natural (non-forced) verse to a specified scheme, and deliberately reaching for a slant rhyme instead of an overused perfect pairing. In real songwriting these choices don't happen one at a time in isolation — you're weighing all four simultaneously on every line — so this is the first place they get tested together.",
      "examples": [
        {
          "problem": "\"The lighthouse keeper counts the waves at night, / The fog rolls in before the ships can see, / He trims the wick and checks the beam is right, / And waits for dawn to set the harbor free.\"",
          "answer": "ABAB, both rhyme pairs perfect",
          "description": "night/right and see/free are both perfect rhymes, alternating in an ABAB pattern."
        },
        {
          "problem": "\"The screen door slams before the storm arrives, / The porch light flickers, holding on, / Somewhere a dog begins to howl, / And then, like that, the day is gone.\"",
          "answer": "ABCB, the B rhyme is perfect",
          "description": "on/gone is a perfect rhyme carrying the only rhyme pair in the verse, on lines 2 and 4."
        }
      ],
      "mnemonics": [
        "Sensory details (sight, sound, touch, scent) hook the listener's subconscious faster than abstract emotions."
      ],
      "culturalNotes": [
        "Global musical fusions blend traditional world rhythms with contemporary production to create new sonic landscapes."
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "id": "songwriting-u1-l5-q1",
          "type": "short-answer",
          "prompt": "Label the rhyme scheme AND identify whether the rhymes are perfect or slant: \"The lighthouse keeper counts the waves at night, / The fog rolls in before the ships can see, / He trims the wick and checks the beam is right, / And waits for dawn to set the harbor free.\"",
          "answer": "ABAB — night/right is a perfect rhyme, see/free is a perfect rhyme.",
          "difficulty": 540
        },
        {
          "id": "songwriting-u1-l5-q2",
          "type": "multiple-choice",
          "prompt": "Which of these is the LEAST cliche way to complete a line ending in \"heart\"?",
          "options": [
            "start (Pass a rhymescheme identification and writing checkpoint)",
            "apart (Pass a rhymescheme identification and writing checkpoint)",
            "the dark (Pass a rhymescheme identification and writing checkpoint)",
            "depart (Pass a rhymescheme identification and writing checkpoint)"
          ],
          "answer": "the dark",
          "difficulty": 540,
          "answerIndex": 0
        },
        {
          "id": "songwriting-u1-l5-q3",
          "type": "multiple-choice",
          "prompt": "What rhyme scheme uses only lines 2 and 4?",
          "options": [
            "AABB (Pass a rhymescheme identification and writing checkpoint)",
            "ABAB (Pass a rhymescheme identification and writing checkpoint)",
            "ABCB (Pass a rhymescheme identification and writing checkpoint)",
            "AAAA (Pass a rhymescheme identification and writing checkpoint)"
          ],
          "answer": "ABCB",
          "difficulty": 530,
          "answerIndex": 0
        },
        {
          "id": "songwriting-u1-l5-q4",
          "type": "short-answer",
          "prompt": "Write an original two-line couplet (AA) about a specific, concrete scene, avoiding at least one commonly cliche rhyme pair by using a slant rhyme instead.",
          "answer": "Any two-line couplet describing a specific, concrete scene, where the rhyme is either a fresh perfect rhyme or a deliberate slant rhyme that avoids an overused pairing like heart/start or love/above.",
          "difficulty": 550
        },
        {
          "id": "songwriting-u1-l5-q5",
          "type": "multiple-choice",
          "prompt": "What is the main risk of choosing a rhyme purely because it fits, without checking if the sentence still sounds natural?",
          "options": [
            "The song will be too short (Pass a rhymescheme identification and writing checkpoint)",
            "The line may end up with forced, inverted word order that sounds unnatural (Pass a rhymescheme identification and writing checkpoint)",
            "It will automatically become a slant rhyme (Pass a rhymescheme identification and writing checkpoint)",
            "There is no risk, any rhyme works (Pass a rhymescheme identification and writing checkpoint)"
          ],
          "answer": "The line may end up with forced, inverted word order that sounds unnatural",
          "difficulty": 530,
          "answerIndex": 0
        }
      ]
    },
    "title": "Unit 1, Lesson 5: Pass a rhyme-scheme identification and writing checkpoint"
  },
  "songwriting-u2-l1": {
    "id": "songwriting-u2-l1",
    "unit": "songwriting-u2",
    "level": "beginner",
    "objective": "Count syllables per line and identify where natural stresses fall in a lyric.",
    "presentation": {
      "explanation": "Before you can write a line that grooves, you have to hear what it's already doing rhythmically — and that starts with two separate counts. First, syllables: break each word into its spoken sound-chunks (re-MEM-ber is three, LIGHT is one). Second, and more important for songwriting than for poetry on a page, stress: which of those syllables gets the natural spoken emphasis. Every multi-syllable English word has a fixed natural stress pattern that native speakers use automatically and never think about — say 'remember' out loud and you'll always land on the middle syllable (re-MEM-ber), never the first or last. Marking stress is usually written with capital letters on the stressed syllable: 'the LAUN-dro-MAT hums THROUGH the NIGHT' shows four stressed syllables (LAUN, MAT, THROUGH, NIGHT) scattered through eight total syllables. This unit is about learning to hear that pattern reliably, because Lesson 2 uses it to build a steady beat, and Lesson 3 uses it to catch lines that secretly fight the beat.",
      "examples": [
        {
          "problem": "the laundromat hums through the night",
          "answer": "8 syllables, 4 stressed (LAUN-dro-mat, THROUGH, NIGHT)",
          "description": "Full scan: the(1) LAUN(2,stressed) dro(3) mat(4) hums(5) THROUGH(6,stressed) the(7) NIGHT(8,stressed) — plus the stress on LAUN in laundromat itself."
        },
        {
          "problem": "re-MEM-ber (the word \"remember\" alone)",
          "answer": "Stress falls on the middle syllable",
          "description": "Say it aloud — the natural stress never moves to the first or last syllable, no matter how the line around it is written."
        },
        {
          "problem": "a corner store at closing time",
          "answer": "8 syllables, stresses on COR, STORE, CLOS, TIME",
          "description": "a(1,unstressed) COR(2,stressed) ner(3,unstressed) STORE(4,stressed) at(5,unstressed) CLOS(6,stressed) ing(7,unstressed) TIME(8,stressed) — another clean da-DUM x4 pattern, same as the laundromat line above."
        }
      ],
      "mnemonics": [
        "Verse-Chorus-Verse-Chorus-Bridge-Chorus (ABABCB) is the golden architecture of modern emotional resonance."
      ],
      "culturalNotes": [
        "Tin Pan Alley and the Brill Building established the craft of professional collaborative songwriting in America."
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "id": "songwriting-u2-l1-q1",
          "type": "compute",
          "prompt": "How many syllables are in the line \"she walks alone beneath the light\"?",
          "answer": 8,
          "difficulty": 520
        },
        {
          "id": "songwriting-u2-l1-q2",
          "type": "multiple-choice",
          "prompt": "Where does the natural spoken stress fall in the word \"remember\"?",
          "options": [
            "The first syllable (Count syllables per line and identify where natural stresses fall in a lyric)",
            "The middle syllable (Count syllables per line and identify where natural stresses fall in a lyric)",
            "The last syllable (Count syllables per line and identify where natural stresses fall in a lyric)",
            "It has no fixed natural stress (Count syllables per line and identify where natural stresses fall in a lyric)"
          ],
          "answer": "The middle syllable (re-MEM-ber)",
          "difficulty": 520,
          "answerIndex": 0
        },
        {
          "id": "songwriting-u2-l1-q3",
          "type": "short-answer",
          "prompt": "Mark the stressed syllables (using CAPS) in the line: \"the city hums a lonely tune.\"",
          "answer": "the CIty hums a LONEly TUNE — stresses fall on CI (in city), LONE (in lonely), and TUNE.",
          "difficulty": 530
        },
        {
          "id": "songwriting-u2-l1-q4",
          "type": "multiple-choice",
          "prompt": "Why does natural word stress matter more in songwriting than in most written poetry?",
          "options": [
            "It does not matter more, they are identical (Count syllables per line and identify where natural stresses fall in a lyric)",
            "Because a sung melody has its own beat, and a mismatch between word stress and melodic beat is audible in a way silent reading never reveals (Count syllables per line and identify where natural stresses fall in a lyric)",
            "Because songs never use multi-syllable words (Count syllables per line and identify where natural stresses fall in a lyric)",
            "Because melody erases word stress entirely (Count syllables per line and identify where natural stresses fall in a lyric)"
          ],
          "answer": "Because a sung melody has its own beat, and a mismatch between word stress and melodic beat is audible in a way silent reading never reveals",
          "difficulty": 530,
          "answerIndex": 0
        }
      ]
    },
    "title": "Unit 2, Lesson 1"
  },
  "songwriting-u2-l2": {
    "id": "songwriting-u2-l2",
    "unit": "songwriting-u2",
    "level": "beginner",
    "objective": "Match a lyric line's stress pattern to a steady rhythmic pulse (a meter).",
    "presentation": {
      "explanation": "A meter is a repeating pattern of stressed and unstressed syllables — the rhythmic skeleton a line hangs on. The most common pattern in English song lyrics is the iamb: an unstressed syllable followed by a stressed one (da-DUM), repeated across the line. A line with four iambs in a row (da-DUM da-DUM da-DUM da-DUM, eight syllables total) is called iambic tetrameter, and it's everywhere in pop and folk melody because it matches how comfortably a line of English speech falls into four musical beats. Take 'she WALKS a-LONE be-NEATH the LIGHT': she(un) WALKS(stressed) a(un) LONE(stressed) be(un) NEATH(stressed) the(un) LIGHT(stressed) — a clean da-DUM four times in a row, and notice every stress lands exactly where the words would naturally stress themselves anyway ('alone' is naturally a-LONE, not AL-one). That alignment between the word's real stress and the meter's beat is what makes a line singable instead of clunky — you're not fighting the language, you're riding it.",
      "examples": [
        {
          "problem": "she WALKS a-LONE be-NEATH the LIGHT",
          "answer": "Iambic tetrameter — 4 iambs, da-DUM x4",
          "description": "Every stressed syllable in the meter matches the word's own natural stress: WALKS, a-LONE, be-NEATH, the LIGHT."
        },
        {
          "problem": "the CI-ty HUMS a LONE-ly TUNE",
          "answer": "Also iambic tetrameter",
          "description": "A second line built on the identical da-DUM x4 pulse, pairing naturally with the first as a matched couplet."
        }
      ],
      "mnemonics": [
        "The chorus is your emotional thesis; make your melodic hook rhythmically distinct and dynamically elevated."
      ],
      "culturalNotes": [
        "Folk traditions and the Great American Songbook showcase the timeless power of storytelling and modal harmony."
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "id": "songwriting-u2-l2-q1",
          "type": "multiple-choice",
          "prompt": "What is an \"iamb\"?",
          "options": [
            "A stressed syllable followed by an unstressed one (Match a lyric lines stress pattern to a steady rhythmic pulse a meter)",
            "An unstressed syllable followed by a stressed one (Match a lyric lines stress pattern to a steady rhythmic pulse a meter)",
            "Two stressed syllables in a row (Match a lyric lines stress pattern to a steady rhythmic pulse a meter)",
            "A line with no stresses at all (Match a lyric lines stress pattern to a steady rhythmic pulse a meter)"
          ],
          "answer": "An unstressed syllable followed by a stressed one",
          "difficulty": 530,
          "answerIndex": 0
        },
        {
          "id": "songwriting-u2-l2-q2",
          "type": "short-answer",
          "prompt": "Mark the stress pattern of \"the city hums a lonely tune\" and confirm whether it is iambic tetrameter.",
          "answer": "the CIty hums a LONEly TUNE follows da-DUM four times (the-CI, ty-hums... more precisely: the/CI-ty/hums/a/LONE-ly/TUNE lands stresses on CI, HUMS, LONE, and TUNE at roughly even intervals) — yes, it is iambic tetrameter, matching \"she walks alone beneath the light.\"",
          "difficulty": 550
        },
        {
          "id": "songwriting-u2-l2-q3",
          "type": "multiple-choice",
          "prompt": "Why is iambic tetrameter so common in English song lyrics specifically?",
          "options": [
            "It is required by copyright law (Match a lyric lines stress pattern to a steady rhythmic pulse a meter)",
            "It matches how comfortably a line of natural English speech falls into four musical beats (Match a lyric lines stress pattern to a steady rhythmic pulse a meter)",
            "It only works with rhyming couplets (Match a lyric lines stress pattern to a steady rhythmic pulse a meter)",
            "It was invented specifically for songwriting in the 1960s (Match a lyric lines stress pattern to a steady rhythmic pulse a meter)"
          ],
          "answer": "It matches how comfortably a line of natural English speech falls into four musical beats",
          "difficulty": 530,
          "answerIndex": 0
        }
      ]
    },
    "title": "Unit 2, Lesson 2"
  },
  "songwriting-u2-l3": {
    "id": "songwriting-u2-l3",
    "unit": "songwriting-u2",
    "level": "beginner",
    "objective": "Revise a line that fights the meter so the natural word stress lines up with the beat.",
    "presentation": {
      "explanation": "The most common meter mistake isn't getting the syllable count wrong — it's writing a line where the melody's strong beat lands on a syllable that isn't naturally stressed, forcing the word to sound mispronounced when sung. Take the word 'remember' again: its natural stress is always re-MEM-ber. If a lyric line places the song's strong downbeat on the very first syllable — 'REMember the summer we met' sung with a hard accent on REM — the word comes out sounding like 'REM-em-ber,' which no listener says in real speech. That's a line fighting its own meter. The fix usually isn't to abandon the word, it's to shift what comes before it so the strong beat falls somewhere else: 'Do you remember the summer we met' pushes the downbeat onto 'Do,' letting 'remember' land in an unstressed position where its own internal MEM-stress can still read naturally on a secondary beat. The diagnostic test is simple: say the line out loud in normal conversation, then sing it to the intended melody — if a word suddenly sounds like it's being mispronounced, the meter is fighting the language instead of riding it.",
      "examples": [
        {
          "problem": "REMember the summer we met (downbeat forced onto REM)",
          "answer": "Fights the meter",
          "description": "Forces the natural re-MEM-ber stress out of place, making the sung word sound mispronounced."
        },
        {
          "problem": "Do you remember the summer we met (downbeat shifted onto \"Do\")",
          "answer": "Matches the meter",
          "description": "\"Remember\" now sits in a position where its own natural MEM-stress can still be heard correctly on a secondary beat."
        }
      ],
      "mnemonics": [
        "Prosody: Align lyrical stressed syllables with the strong musical beats of the bar (e.g., beats 1 and 3 in 4/4)."
      ],
      "culturalNotes": [
        "Motown's songwriting teams (Holland-Dozier-Holland) revolutionized pop production with irresistible rhythm and melodic hooks."
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "id": "songwriting-u2-l3-q1",
          "type": "multiple-choice",
          "prompt": "What is the actual problem with forcing a melodic downbeat onto the first syllable of \"remember\"?",
          "options": [
            "The word becomes too long to sing (Revise a line that fights the meter so the natural word stress lines up with the beat)",
            "It contradicts the word's natural spoken stress (re-MEM-ber)",
            "It is grammatically incorrect (Revise a line that fights the meter so the natural word stress lines up with the beat)",
            "There is no problem, any syllable can carry a downbeat (Revise a line that fights the meter so the natural word stress lines up with the beat)"
          ],
          "answer": "It contradicts the word's natural spoken stress (re-MEM-ber), making it sound mispronounced when sung",
          "difficulty": 540,
          "answerIndex": 0
        },
        {
          "id": "songwriting-u2-l3-q2",
          "type": "short-answer",
          "prompt": "What is the recommended diagnostic test for catching a line that fights the meter?",
          "answer": "Say the line aloud in normal conversational speech, then sing it to the intended melody — if a word suddenly sounds mispronounced or oddly emphasized, the meter is fighting the natural word stress.",
          "difficulty": 550
        },
        {
          "id": "songwriting-u2-l3-q3",
          "type": "short-answer",
          "prompt": "The line \"FORgotten the promise you made\" forces its downbeat onto the first syllable of \"forgotten,\" fighting the word's natural stress, which is for-GOT-ten. Rewrite the line so the strong beat does not fall on \"for.\"",
          "answer": "Any rewrite that shifts the strong beat off the first syllable of \"forgotten\" works, for example: \"You've forgotten the promise you made\" — placing \"forgotten\" in a spot where its natural for-GOT-ten stress can land correctly on a secondary beat instead of forcing a downbeat onto \"for.\"",
          "difficulty": 560
        }
      ]
    },
    "title": "Unit 2, Lesson 3"
  },
  "songwriting-u2-l4": {
    "id": "songwriting-u2-l4",
    "unit": "songwriting-u2",
    "level": "beginner",
    "objective": "Write two lines with matching meter but different syllable counts using contractions and pacing.",
    "presentation": {
      "explanation": "Here's the detail that trips up beginners who've just learned to count syllables: meter is really about the number and spacing of STRESSED beats, not the total syllable count. Two lines can have a completely different number of syllables and still fit the exact same musical phrase, as long as they have the same number of stressed beats and the unstressed syllables between them are compressed or stretched to fit. Contractions are the simplest tool for this: 'I am not going home tonight' (7 syllables) and 'I'm not going home tonight' (6 syllables) carry the same 4 main stresses (NOT, GO-ing, HOME, TO-night) — the contraction just squeezes 'I am' into one quick beat instead of two. The same trick works in the other direction: adding small pickup words ('well,' 'oh,' 'and') before a stressed beat lets you stretch a shorter line to match a longer one's rhythm without adding a new stress. This is exactly how two verses with different word choices still sing to the identical melody line after line — the singer is matching stress count and spacing, not syllable count.",
      "examples": [
        {
          "problem": "I am not going home tonight (7 syllables)",
          "answer": "4 stresses: NOT, GO-ing, HOME, TO-night",
          "description": "The full \"I am\" takes two syllables to say."
        },
        {
          "problem": "I'm not going home tonight (6 syllables)",
          "answer": "Same 4 stresses, one fewer syllable",
          "description": "The contraction \"I'm\" compresses \"I am\" into a single quick beat — the stress pattern is unchanged."
        },
        {
          "problem": "Well, I'm not going home tonight (7 syllables again)",
          "answer": "Still the same 4 stresses",
          "description": "Adding the pickup word \"Well,\" before the line stretches it back to 7 syllables without adding a fifth stress."
        }
      ],
      "mnemonics": [
        "The Bridge provides harmonic departure and emotional perspective shift before the final triumphant chorus climax."
      ],
      "culturalNotes": [
        "Nashville's 'three chords and the truth' philosophy emphasizes authentic vulnerability and narrative punch."
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "id": "songwriting-u2-l4-q1",
          "type": "multiple-choice",
          "prompt": "What does meter actually track, according to this lesson?",
          "options": [
            "The exact syllable count only (Write two lines with matching meter but different syllable counts using contractions and pacing)",
            "The number and spacing of stressed beats, regardless of total syllable count (Write two lines with matching meter but different syllable counts using contractions and pacing)",
            "The number of words in a line (Write two lines with matching meter but different syllable counts using contractions and pacing)",
            "The rhyme scheme (Write two lines with matching meter but different syllable counts using contractions and pacing)"
          ],
          "answer": "The number and spacing of stressed beats, regardless of total syllable count",
          "difficulty": 540,
          "answerIndex": 0
        },
        {
          "id": "songwriting-u2-l4-q2",
          "type": "short-answer",
          "prompt": "Explain how a contraction like \"I'm\" versus \"I am\" can change a line's syllable count without changing its meter.",
          "answer": "The contraction compresses two syllables (\"I\" and \"am\") into a single spoken beat, reducing the total syllable count by one, but the number and position of stressed beats in the line stays exactly the same, so the line still fits the same melody.",
          "difficulty": 550
        },
        {
          "id": "songwriting-u2-l4-q3",
          "type": "short-answer",
          "prompt": "Write two original lines about the same scene — one using a full form (\"I am,\" \"do not,\" etc.) and one using contractions — that carry the same stressed-beat pattern despite having different syllable counts.",
          "answer": "Any two lines describing the same scene where one uses full forms and the other uses contractions of the same words, and both lines carry the same number of stressed beats in the same positions, even though their total syllable counts differ.",
          "difficulty": 560
        }
      ]
    },
    "title": "Unit 2, Lesson 4"
  },
  "songwriting-u2-l5": {
    "id": "songwriting-u2-l5",
    "unit": "songwriting-u2",
    "level": "beginner",
    "objective": "Pass a meter-scansion and revision checkpoint.",
    "presentation": {
      "explanation": "This checkpoint combines every skill from the unit: scanning a line for syllables and natural stress, recognizing a steady meter like iambic tetrameter, diagnosing a line that fights its own word stress, and using contractions or pickup words to match meter across lines of different length. From Unit 3 onward, full song structure assumes you can already hear whether a verse's lines scan consistently against each other — this is the last checkpoint that isolates rhythm on its own before it gets folded into the bigger picture of a complete song.",
      "examples": [
        {
          "problem": "a train pulls out at half past nine",
          "answer": "8 syllables, iambic tetrameter, natural stress intact",
          "description": "a(un) TRAIN(str) pulls(un) OUT(str) at(un) HALF(str) past(un) NINE(str) — clean da-DUM x4, no forced stress."
        },
        {
          "problem": "ForGETting how the story ends (forced stress on FOR)",
          "answer": "Fights the meter — fix: \"You keep forgetting how it ends\"",
          "description": "forGETting's natural stress is for-GET-ting; forcing FOR- to carry the downbeat sounds mispronounced when sung."
        }
      ],
      "mnemonics": [
        "Sensory details (sight, sound, touch, scent) hook the listener's subconscious faster than abstract emotions."
      ],
      "culturalNotes": [
        "Global musical fusions blend traditional world rhythms with contemporary production to create new sonic landscapes."
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "id": "songwriting-u2-l5-q1",
          "type": "short-answer",
          "prompt": "Scan this line for syllable count and stress: \"a train pulls out at half past nine.\"",
          "answer": "8 syllables; stresses fall on TRAIN, OUT, HALF, and NINE, forming clean iambic tetrameter (da-DUM x4).",
          "difficulty": 550
        },
        {
          "id": "songwriting-u2-l5-q2",
          "type": "multiple-choice",
          "prompt": "The line \"REpeating the same mistake again\" forces its downbeat onto the first syllable of \"repeating.\" What is the actual natural stress of \"repeating\"?",
          "options": [
            "RE-peat-ing (Pass a meterscansion and revision checkpoint)",
            "re-PEAT-ing (Pass a meterscansion and revision checkpoint)",
            "re-peat-ING (Pass a meterscansion and revision checkpoint)",
            "It has no natural stress (Pass a meterscansion and revision checkpoint)"
          ],
          "answer": "re-PEAT-ing",
          "difficulty": 550,
          "answerIndex": 0
        },
        {
          "id": "songwriting-u2-l5-q3",
          "type": "short-answer",
          "prompt": "Rewrite \"REpeating the same mistake again\" so the strong downbeat no longer falls on the first syllable of \"repeating.\"",
          "answer": "Any rewrite that shifts the line so \"repeating\" lands with its natural re-PEAT-ing stress on a secondary beat works, for example: \"You keep repeating the same mistake again.\"",
          "difficulty": 560
        },
        {
          "id": "songwriting-u2-l5-q4",
          "type": "multiple-choice",
          "prompt": "Which pair of lines could share the exact same melody despite having different syllable counts?",
          "options": [
            "Only lines with identical syllable counts can ever share a melody (Pass a meterscansion and revision checkpoint)",
            "\"I am not going home tonight\" and \"I'm not going home tonight,\" since both carry the same 4 stressed beats (Pass a meterscansion and revision checkpoint)",
            "Any two lines regardless of stress pattern (Pass a meterscansion and revision checkpoint)",
            "Only lines that rhyme with each other (Pass a meterscansion and revision checkpoint)"
          ],
          "answer": "\"I am not going home tonight\" and \"I'm not going home tonight,\" since both carry the same 4 stressed beats",
          "difficulty": 550,
          "answerIndex": 0
        },
        {
          "id": "songwriting-u2-l5-q5",
          "type": "short-answer",
          "prompt": "In your own words, summarize the difference between counting syllables and scanning for meter.",
          "answer": "Counting syllables just tallies the total spoken sound-chunks in a line, while scanning for meter identifies which of those syllables carry natural stress and whether that stress pattern repeats in a steady, singable rhythm — two lines can have different syllable counts but identical meter if their stressed beats match in number and spacing.",
          "difficulty": 560
        }
      ]
    },
    "title": "Unit 2, Lesson 5: Pass a meter-scansion and revision checkpoint"
  },
  "songwriting-u3-l1": {
    "id": "songwriting-u3-l1",
    "unit": "songwriting-u3",
    "level": "intermediate",
    "objective": "Craft narrative verses that establish concrete sensory grounding (who, where, when), balance detail density, and advance the song's story across sequential verses without repeating information.",
    "prerequisites": [
      "songwriting-u2-l5"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "songwriting-u1-l1",
        "songwriting-u2-l1"
      ]
    },
    "presentation": {
      "explanation": "In song architecture, the **Verse** is the camera lens of your song. While the chorus delivers the universal emotional explosion, the verse provides the specific, sensory narrative that gives that emotion weight.\n\n1. **The Core Function of the Verse:**\n   - **Who, Where, When:** Establish tangible characters, time of day, location, and atmospheric mood.\n   - **Sensory Detail over Generic Emotion:** Instead of writing 'I am sad and lonely', write 'Cold coffee in a cracked diner mug / Neon humming through the rain'.\n   - **Lower Energy / Narrower Pitch Range:** Verses typically sit in a lower, more conversational vocal register than the soaring chorus.\n\n2. **The Progression Rule (Verse 1 vs. Verse 2):**\n   - **Verse 1 = Setup & Catalyst:** Introduces the status quo and the initial disturbance or question.\n   - **Verse 2 = Complication & Consequence:** Advances time, raises stakes, or shows the aftermath. **Never write Verse 2 as just a rephrased clone of Verse 1!**\n\n3. **Detail Density & Prosody:**\n   - Verses have room for higher word counts and conversational syncopation, but must maintain steady rhythmic phrasing so the listener can absorb the scene.",
      "examples": [
        "Verse 1 (Setting the Scene): 'Diesel fumes and gravel in the headlights / Midnight down on Route 49 / You had a cassette tape in your jacket / Rewinding track number nine.'",
        "Verse 2 (Advancing the Story): 'Two years out, the postcard in the mailbox / Postmarked from a town I never knew / Coffee rings across the penciled cursive / Wondering if the highway swallowed you.'",
        "Sensory Hook: 'The screen door bangs against the cedar post / Cicadas screaming at the July heat.'"
      ],
      "mnemonics": [
        "Verses give facts; Choruses give feelings.",
        "Verse 1 sets the fire; Verse 2 pours the gasoline."
      ],
      "culturalNotes": [
        "In legendary American songwriting (Joni Mitchell, Bob Dylan, Bruce Springsteen), verses are celebrated for micro-cinematography — anchoring universal epiphanies in hyper-specific local objects."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In applying the principles of Craft narrative verses that establish concrete sensory grounding (who, which composition technique best fulfills the musical goal?",
          "options": [
            "To repeat the song's main title with maximum vocal power (Craft narrative verses that establish concrete sensory grounding who)",
            "To change the musical tempo completely (Craft narrative verses that establish concrete sensory grounding who)",
            "To play an instrumental guitar solo (Craft narrative verses that establish concrete sensory grounding who)",
            "To establish concrete setting, characters, sensory details, and advance the story (Craft narrative verses that establish concrete sensory grounding who)"
          ],
          "answerIndex": 3,
          "explanation": "Verses provide the concrete narrative exposition and detail that ground the chorus."
        },
        {
          "prompt": "Which of the following lines demonstrates effective sensory verse writing?",
          "options": [
            "'I love you so much and always will' (Craft narrative verses that establish concrete sensory grounding who)",
            "'Everything is bad and nothing is right' (Craft narrative verses that establish concrete sensory grounding who)",
            "'Yellow headlights cutting through the freezing November fog' (Craft narrative verses that establish concrete sensory grounding who)",
            "'I feel very sad today' (Craft narrative verses that establish concrete sensory grounding who)"
          ],
          "answerIndex": 2,
          "explanation": "Sensory imagery (yellow headlights, freezing November fog) creates a vivid mental picture."
        },
        {
          "prompt": "How should Verse 2 relate to Verse 1 in a well-constructed song?",
          "options": [
            "It must be sung in a completely different language (Craft narrative verses that establish concrete sensory grounding who)",
            "It should advance the story, raise the stakes, or explore the aftermath — not just repeat Verse 1's facts (Craft narrative verses that establish concrete sensory grounding who)",
            "It should be twice as loud as the chorus (Craft narrative verses that establish concrete sensory grounding who)",
            "It must use the exact same lyrics as Verse 1 (Craft narrative verses that establish concrete sensory grounding who)"
          ],
          "answerIndex": 1,
          "explanation": "Verse 2 must progress the narrative arc forward in time or emotional depth."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In composition and lyric craft for Unit 3, Lesson 1: Foundational & Structural Mastery, which artistic decision best serves the song?",
          "options": [
            "Because singers cannot sing high notes in verses (Craft narrative verses that establish concrete sensory grounding who)",
            "To make verses harder to hear (Craft narrative verses that establish concrete sensory grounding who)",
            "Because verses cannot have rhythm (Craft narrative verses that establish concrete sensory grounding who)",
            "To leave dynamic and melodic headroom for the chorus to lift and feel like a release (Craft narrative verses that establish concrete sensory grounding who)"
          ],
          "answerIndex": 3,
          "explanation": "Lower verse registers create contrast and emotional headroom for the chorus."
        },
        {
          "prompt": "What does the phrase 'Show, Don't Tell' mean for lyricists?",
          "options": [
            "Sing without background instruments (Craft narrative verses that establish concrete sensory grounding who)",
            "Never write words with more than two syllables (Craft narrative verses that establish concrete sensory grounding who)",
            "Use physical actions and sensory imagery rather than flat abstract labels of emotion (Craft narrative verses that establish concrete sensory grounding who)",
            "Only perform with visuals on screen (Craft narrative verses that establish concrete sensory grounding who)"
          ],
          "answerIndex": 2,
          "explanation": "'Show, don't tell' means evoking emotion through concrete sensory details."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Which of these pairs represents a true narrative progression from Verse 1 to Verse 2?",
          "options": [
            "Verse 1: I am sad -> Verse 2: I am very sad (Craft narrative verses that establish concrete sensory grounding who)",
            "Verse 1: The sun is shining -> Verse 2: The daylight is bright (Craft narrative verses that establish concrete sensory grounding who)",
            "Verse 1: Packing a suitcase at dawn -> Verse 2: Watching the rear-view mirror cross the state line at sunset (Craft narrative verses that establish concrete sensory grounding who)",
            "Verse 1: Driving a car -> Verse 2: In a car driving (Craft narrative verses that establish concrete sensory grounding who)"
          ],
          "answerIndex": 2,
          "explanation": "Advances time, action, and physical location.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Verses are characterized by:",
          "options": [
            "Zero rhyming (Craft narrative verses that establish concrete sensory grounding who)",
            "Sensory story details, lower pitch register, higher narrative specificity (Craft narrative verses that establish concrete sensory grounding who)",
            "The highest vocal belt in the entire track (Craft narrative verses that establish concrete sensory grounding who)",
            "Maximum repetition of the song title (Craft narrative verses that establish concrete sensory grounding who)"
          ],
          "answerIndex": 1,
          "explanation": "Verses carry the sensory narrative.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is 'Cold tea and an unmade bed' stronger than 'I felt neglected'?",
          "options": [
            "It grounds the feeling in tangible physical evidence the listener can visualize (Craft narrative verses that establish concrete sensory grounding who)",
            "It rhymes with bed (Craft narrative verses that establish concrete sensory grounding who)",
            "It is shorter (Craft narrative verses that establish concrete sensory grounding who)",
            "It has more words (Craft narrative verses that establish concrete sensory grounding who)"
          ],
          "answerIndex": 0,
          "explanation": "Concrete imagery triggers sensory simulation in the brain.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What role does the verse play in relation to the chorus?",
          "options": [
            "It is completely unrelated to the chorus (Craft narrative verses that establish concrete sensory grounding who)",
            "It competes with the chorus for volume (Craft narrative verses that establish concrete sensory grounding who)",
            "It is meant to be skipped by the listener (Craft narrative verses that establish concrete sensory grounding who)",
            "It provides the specific context that justifies and amplifies the chorus's emotional outburst (Craft narrative verses that establish concrete sensory grounding who)"
          ],
          "answerIndex": 3,
          "explanation": "The verse grounds and contextualizes the chorus.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In an AABA or Verse-Chorus form, what does 'A' typically denote?",
          "options": [
            "Bridge (Craft narrative verses that establish concrete sensory grounding who)",
            "Outro (Craft narrative verses that establish concrete sensory grounding who)",
            "Verse (Craft narrative verses that establish concrete sensory grounding who)",
            "Chorus (Craft narrative verses that establish concrete sensory grounding who)"
          ],
          "answerIndex": 2,
          "explanation": "In standard musical analysis, 'A' denotes the Verse section.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 3, Lesson 1"
  },
  "songwriting-u3-l2": {
    "id": "songwriting-u3-l2",
    "unit": "songwriting-u3",
    "level": "intermediate",
    "objective": "Design dynamic pre-choruses (the lift / the climb) using rhythmic compression, ascending melodic lines, and harmonic tension (IV or V chord builds) that create an irresistible gravitational pull into the chorus.",
    "prerequisites": [
      "songwriting-u3-l1"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "songwriting-u3-l1",
        "songwriting-u2-l3"
      ]
    },
    "presentation": {
      "explanation": "The **Pre-Chorus** (often called 'The Climb' or 'The Lift') is the musical ramp that bridges the grounded verse to the soaring chorus. Without a pre-chorus, jumping straight from a verse to an explosive chorus can feel abrupt or unearned.\n\n1. **The Core Mechanical Functions of a Pre-Chorus:**\n   - **Rhythmic Compression (Subdivision Acceleration):** If the verse used spacious quarter notes, the pre-chorus tightens into rapid eighth notes, increasing the listener's heart rate.\n   - **Harmonic Ascension (Tension Building):** Moving away from the home tonic (I) to build tension on the IV or V chord (the dominant), begging for resolution.\n   - **Melodic Climb:** The melody climbs in pitch step-by-step toward the stratosphere where the chorus will ignite.\n\n2. **Lyrical Function — The Pivotal Realization:**\n   - While the verse described the external scene, the pre-chorus shifts to **internal urgency**:\n     * Verse: 'Saw your shadow through the frosted glass...'\n     * Pre-Chorus: 'And my hands started shaking / Like the floorboards were breaking...'\n     * Chorus: 'LET THE WHOLE HOUSE BURN DOWN!'\n\n3. **Length & Structure:**\n   - Pre-choruses are compact — usually **2 to 4 bars** (rarely 8 bars). They exist solely to build unbearable tension that the chorus releases.",
      "examples": [
        "Verse (calm): 'Rain on the telephone wire / Radio playing low.'",
        "Pre-Chorus (rising tension): 'And the clock is ticking down / Every second in this town / Yeah the walls are closing in—'",
        "Chorus (explosion): 'I AM RUNNING FOR THE BORDERLINE!'",
        "Harmonic Build: Moving from verse chords (Am - F) to pre-chorus ascending chords (Dm - Em - F - G) hitting the dominant G right before the chorus drop!"
      ],
      "mnemonics": [
        "The Pre-Chorus is the rollercoaster climbing the hill; the Chorus is the drop.",
        "Verse = Story -> Pre-Chorus = Urgency -> Chorus = Anthem."
      ],
      "culturalNotes": [
        "Max Martin and modern pop hitmakers consider the pre-chorus the 'secret weapon' of hit records (e.g. Katy Perry's 'Roar', Taylor Swift's 'Blank Space'), often spending days perfecting the 2-bar pre-chorus vocal lift."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In applying the principles of Design dynamic pre-choruses (the lift / the climb) using rhythmic compression, which composition technique best fulfills the musical goal?",
          "options": [
            "To build melodic, harmonic, and emotional tension that launches seamlessly into the chorus (Design dynamic prechoruses the lift  the climb using rhythmic compression)",
            "To provide a 5-minute guitar solo (Design dynamic prechoruses the lift  the climb using rhythmic compression)",
            "To whisper the lyrics silently (Design dynamic prechoruses the lift  the climb using rhythmic compression)",
            "To repeat the final chorus (Design dynamic prechoruses the lift  the climb using rhythmic compression)"
          ],
          "answerIndex": 0,
          "explanation": "The pre-chorus builds tension and momentum bridging verse to chorus."
        },
        {
          "prompt": "What happens to the rhythm in a pre-chorus during 'rhythmic compression'?",
          "options": [
            "The syllable phrasing accelerates (e.g. from half notes to rapid eighth notes)",
            "The song comes to a complete stop (Design dynamic prechoruses the lift  the climb using rhythmic compression)",
            "The singer speaks in monotone (Design dynamic prechoruses the lift  the climb using rhythmic compression)",
            "All drums are turned off permanently (Design dynamic prechoruses the lift  the climb using rhythmic compression)"
          ],
          "answerIndex": 0,
          "explanation": "Rhythmic compression uses shorter, denser note subdivisions to create urgency."
        },
        {
          "prompt": "Which chord is most commonly used at the end of a pre-chorus to demand resolution into the chorus?",
          "options": [
            "The dominant (V chord)",
            "The I chord (Design dynamic prechoruses the lift  the climb using rhythmic compression)",
            "A dissonant random noise (Design dynamic prechoruses the lift  the climb using rhythmic compression)",
            "A silent pause with no harmony (Design dynamic prechoruses the lift  the climb using rhythmic compression)"
          ],
          "answerIndex": 0,
          "explanation": "The dominant V chord creates strong tension demanding resolution to the tonic."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In composition and lyric craft for Unit 3, Lesson 2: Foundational & Structural Mastery, which artistic decision best serves the song?",
          "options": [
            "It lists grocery items (Design dynamic prechoruses the lift  the climb using rhythmic compression)",
            "It must be completely non-rhyming (Design dynamic prechoruses the lift  the climb using rhythmic compression)",
            "It must use words in reverse order (Design dynamic prechoruses the lift  the climb using rhythmic compression)",
            "It shifts focus from external scene details to internal emotional urgency and anticipation (Design dynamic prechoruses the lift  the climb using rhythmic compression)"
          ],
          "answerIndex": 3,
          "explanation": "The pre-chorus pivots the external narrative into internal psychological urgency."
        },
        {
          "prompt": "How long is a typical pre-chorus in modern song structure?",
          "options": [
            "32 bars (Design dynamic prechoruses the lift  the climb using rhythmic compression)",
            "16 bars (Design dynamic prechoruses the lift  the climb using rhythmic compression)",
            "60 seconds (Design dynamic prechoruses the lift  the climb using rhythmic compression)",
            "2 to 4 bars (Design dynamic prechoruses the lift  the climb using rhythmic compression)"
          ],
          "answerIndex": 3,
          "explanation": "Pre-choruses are typically 2 to 4 bars to maintain tight momentum."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Which progression of sections represents the standard modern pop/rock build?",
          "options": [
            "Bridge -> Pre-Chorus -> Outro (Design dynamic prechoruses the lift  the climb using rhythmic compression)",
            "Verse -> Pre-Chorus -> Chorus (Design dynamic prechoruses the lift  the climb using rhythmic compression)",
            "Verse -> Outro -> Pre-Chorus (Design dynamic prechoruses the lift  the climb using rhythmic compression)",
            "Chorus -> Pre-Chorus -> Verse (Design dynamic prechoruses the lift  the climb using rhythmic compression)"
          ],
          "answerIndex": 1,
          "explanation": "Verse -> Pre-Chorus -> Chorus is the classic dynamic arc.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is ascending melodic motion effective in a pre-chorus?",
          "options": [
            "Because climbing pitch physically and psychoacoustically communicates rising intensity and anticipation (Design dynamic prechoruses the lift  the climb using rhythmic compression)",
            "Because it makes the singer louder than the drums (Design dynamic prechoruses the lift  the climb using rhythmic compression)",
            "Because microphones only pick up rising notes (Design dynamic prechoruses the lift  the climb using rhythmic compression)",
            "Because high notes are cheaper to record (Design dynamic prechoruses the lift  the climb using rhythmic compression)"
          ],
          "answerIndex": 0,
          "explanation": "Ascending pitch creates psychoacoustic anticipation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "'The lift' or 'the climb' are industry terms for:",
          "options": [
            "The Verse (Design dynamic prechoruses the lift  the climb using rhythmic compression)",
            "The Fade Out (Design dynamic prechoruses the lift  the climb using rhythmic compression)",
            "The Intro (Design dynamic prechoruses the lift  the climb using rhythmic compression)",
            "The Pre-Chorus (Design dynamic prechoruses the lift  the climb using rhythmic compression)"
          ],
          "answerIndex": 3,
          "explanation": "The pre-chorus is widely nicknamed the lift or climb.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What happens if a song has an explosive chorus but no pre-chorus?",
          "options": [
            "The song cannot be played on radio (Design dynamic prechoruses the lift  the climb using rhythmic compression)",
            "The song will automatically be banned (Design dynamic prechoruses the lift  the climb using rhythmic compression)",
            "The transition from a quiet verse can feel jarring or unearned if not intentionally designed as a surprise dynamic drop (Design dynamic prechoruses the lift  the climb using rhythmic compression)",
            "The guitar will break (Design dynamic prechoruses the lift  the climb using rhythmic compression)"
          ],
          "answerIndex": 2,
          "explanation": "A pre-chorus smooths and earns the dynamic transition.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What lyrical element usually appears right at the end of the pre-chorus?",
          "options": [
            "A spoken telephone number (Design dynamic prechoruses the lift  the climb using rhythmic compression)",
            "A breathless question, realization, or cliffhanger line that the chorus answers (Design dynamic prechoruses the lift  the climb using rhythmic compression)",
            "The legal copyright statement (Design dynamic prechoruses the lift  the climb using rhythmic compression)",
            "The singer's full name (Design dynamic prechoruses the lift  the climb using rhythmic compression)"
          ],
          "answerIndex": 1,
          "explanation": "A cliffhanger or pivot line sets up the chorus release.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 3, Lesson 2"
  },
  "songwriting-u3-l3": {
    "id": "songwriting-u3-l3",
    "unit": "songwriting-u3",
    "level": "intermediate",
    "objective": "Compose anthemic choruses that deliver the central thesis of the song, achieve maximum melodic memorability, optimize title hook placement (first-line, last-line, or whole-line), and provide complete harmonic release.",
    "prerequisites": [
      "songwriting-u3-l2"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "songwriting-u3-l1",
        "songwriting-u3-l2"
      ]
    },
    "presentation": {
      "explanation": "The **Chorus** is the emotional heart, musical payoff, and identity of your entire song. It is the part the audience sings in their car, screams at a stadium show, and remembers 20 years later.\n\n1. **The Three Pillars of a Master Chorus:**\n   - **The Central Thesis:** The universal emotional message stripped of minor verse details. If your song is about a break-up in Chicago, the chorus is about the universal human truth of heartbreak.\n   - **Harmonic & Dynamic Release:** The chorus explodes in full volume, richer instrumentation, and strong tonic (I) or power chord resolution.\n   - **The Highest Vocal Pitch / Melodic Peak:** The lead vocal reaches its most resonant, soaring register.\n\n2. **The 3 Classic Title Hook Placements:**\n   - **Strategy 1: First-Line Anchor (Immediate Impact):**\n     * *'LIVIN' ON A PRAYER... Take my hand, we'll make it I swear...'* (Bon Jovi)\n   - **Strategy 2: Last-Line Punchline (Summation Hook):**\n     * *'...And it's killing me that you're not here / I GUESS SOMEONE ELSE IS LOVING YOU.'*\n   - **Strategy 3: Sandwich / Framed Hook (First & Last Line):**\n     * *'ROLLING IN THE DEEP... [mid-lines] ...You had my heart inside of your hand / ROLLING IN THE DEEP.'* (Adele)\n\n3. **Simplicity & Repetition:**\n   - Great choruses use fewer, stronger words, longer held vowel notes, and strategic repetition (the 'Rule of Three').",
      "examples": [
        "First-Line Hook Chorus: 'HEART OF CEDAR, standing in the gale / You can bend the branches but the roots won't fail / Heart of cedar, burning in the cold / Some things never break, they just get old.'",
        "Last-Line Hook Chorus: 'You kept the letters and I kept the key / We divided up the memories / And after everything we threw away / I STILL CAME BACK TODAY.'",
        "Melodic Peak: Leaping an octave up to the tonic or fifth on the first syllable of the chorus."
      ],
      "mnemonics": [
        "Verses are what happened; Choruses are what it means.",
        "Put your song's title where the listener can't miss it: First line, last line, or both."
      ],
      "culturalNotes": [
        "From Motown (Smokey Robinson, Holland-Dozier-Holland) to modern Nashville and Scandinavian pop factories, songwriting doctrine dictates: 'Don't bore us, get to the chorus in under 60 seconds'."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In applying the principles of Compose anthemic choruses that deliver the central thesis of the song, which composition technique best fulfills the musical goal?",
          "options": [
            "To give the drummer a break (Compose anthemic choruses that deliver the central thesis of the song)",
            "To explain complicated backstory details (Compose anthemic choruses that deliver the central thesis of the song)",
            "To list the names of band members (Compose anthemic choruses that deliver the central thesis of the song)",
            "To deliver the central emotional thesis, song title hook, and most memorable melodic payoff (Compose anthemic choruses that deliver the central thesis of the song)"
          ],
          "answerIndex": 3,
          "explanation": "The chorus delivers the core emotional thesis and title hook."
        },
        {
          "prompt": "In the 'Sandwich Hook' strategy, where does the song title appear in the chorus?",
          "options": [
            "Only in the guitar solo (Compose anthemic choruses that deliver the central thesis of the song)",
            "In the middle of the second verse (Compose anthemic choruses that deliver the central thesis of the song)",
            "In the whispered intro (Compose anthemic choruses that deliver the central thesis of the song)",
            "On both the first line and the last line of the chorus (Compose anthemic choruses that deliver the central thesis of the song)"
          ],
          "answerIndex": 3,
          "explanation": "The sandwich hook frames the chorus at both start and finish."
        },
        {
          "prompt": "Why do chorus melodies often feature sustained vowels (long notes) compared to verses?",
          "options": [
            "Because consonants are illegal in choruses (Compose anthemic choruses that deliver the central thesis of the song)",
            "To save ink on the lyric sheet (Compose anthemic choruses that deliver the central thesis of the song)",
            "Because long notes are easier to forget (Compose anthemic choruses that deliver the central thesis of the song)",
            "Sustained vowels allow singers to project maximum vocal power and make the melody easy for audiences to sing along (Compose anthemic choruses that deliver the central thesis of the song)"
          ],
          "answerIndex": 3,
          "explanation": "Sustained open vowels maximize vocal resonance and crowd singability."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In composition and lyric craft for Unit 3, Lesson 3: Foundational & Structural Mastery, which artistic decision best serves the song?",
          "options": [
            "'Get to the chorus in under 60 seconds' (Compose anthemic choruses that deliver the central thesis of the song)",
            "Wait at least 4 minutes before playing the chorus (Compose anthemic choruses that deliver the central thesis of the song)",
            "Never play the chorus more than once (Compose anthemic choruses that deliver the central thesis of the song)",
            "Choruses must only be played at the end of the song (Compose anthemic choruses that deliver the central thesis of the song)"
          ],
          "answerIndex": 0,
          "explanation": "Modern pop songwriting aims for the first chorus within 45 to 60 seconds."
        },
        {
          "prompt": "If a verse is written with fast, wordy, narrative-heavy lyrics, what contrast should the chorus provide?",
          "options": [
            "Simpler, open, anthemic lyrics with sustained melodic notes and strong repetition (Compose anthemic choruses that deliver the central thesis of the song)",
            "Even more fast spoken-word dialogue (Compose anthemic choruses that deliver the central thesis of the song)",
            "Total silence with no vocals (Compose anthemic choruses that deliver the central thesis of the song)",
            "A lecture on music history (Compose anthemic choruses that deliver the central thesis of the song)"
          ],
          "answerIndex": 0,
          "explanation": "Contrast is vital: spacious anthemic melody balances dense narrative verses."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Which of these lines is best suited as a punchy, universal Chorus hook?",
          "options": [
            "'We were born to break the golden rule!' (Compose anthemic choruses that deliver the central thesis of the song)",
            "'The receipt was on the kitchen table next to the keys' (Compose anthemic choruses that deliver the central thesis of the song)",
            "'I woke up at 7:15 AM on Tuesday and brushed my teeth' (Compose anthemic choruses that deliver the central thesis of the song)",
            "'My cousin called from Denver about a used transmission' (Compose anthemic choruses that deliver the central thesis of the song)"
          ],
          "answerIndex": 0,
          "explanation": "Universal, emotional, rhythmic, and anthemic.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is a 'Last-Line Punchline' hook in a chorus?",
          "options": [
            "Singing the last line in falsetto (Compose anthemic choruses that deliver the central thesis of the song)",
            "Telling a funny joke at the end of the song (Compose anthemic choruses that deliver the central thesis of the song)",
            "A drum roll at the end (Compose anthemic choruses that deliver the central thesis of the song)",
            "Building 3 lines of emotional context that land on the explosive song title in line 4 (Compose anthemic choruses that deliver the central thesis of the song)"
          ],
          "answerIndex": 3,
          "explanation": "The last-line hook reveals the title as the emotional culmination.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Choruses achieve dynamic impact through:",
          "options": [
            "Changing the song's language every bar (Compose anthemic choruses that deliver the central thesis of the song)",
            "Whispering into the microphone (Compose anthemic choruses that deliver the central thesis of the song)",
            "Higher vocal register, full band instrumentation, harmonic resolution, and title repetition (Compose anthemic choruses that deliver the central thesis of the song)",
            "Reducing instrument volume to zero (Compose anthemic choruses that deliver the central thesis of the song)"
          ],
          "answerIndex": 2,
          "explanation": "High vocal register and rich instrumentation create explosive chorus power.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What does the 'Rule of Three' mean in chorus design?",
          "options": [
            "Only having 3 instruments in the band (Compose anthemic choruses that deliver the central thesis of the song)",
            "Repeating a key rhythmic motif or lyrical hook three times to engrave it into the listener's memory (Compose anthemic choruses that deliver the central thesis of the song)",
            "Singing 3 octaves higher (Compose anthemic choruses that deliver the central thesis of the song)",
            "Writing only 3 words per chorus (Compose anthemic choruses that deliver the central thesis of the song)"
          ],
          "answerIndex": 1,
          "explanation": "Threefold repetition creates satisfying cognitive retention.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why should the central emotion of a chorus be universal rather than overly specific?",
          "options": [
            "So that millions of diverse listeners can project their own lives and feelings into the song (Compose anthemic choruses that deliver the central thesis of the song)",
            "Because specific words are copyrighted (Compose anthemic choruses that deliver the central thesis of the song)",
            "Because radio stations forbid specific names (Compose anthemic choruses that deliver the central thesis of the song)",
            "Because simple words sound louder (Compose anthemic choruses that deliver the central thesis of the song)"
          ],
          "answerIndex": 0,
          "explanation": "Universal emotional truth enables mass listener resonance and empathy.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 3, Lesson 3"
  },
  "songwriting-u3-l4": {
    "id": "songwriting-u3-l4",
    "unit": "songwriting-u3",
    "level": "intermediate",
    "objective": "Construct transformative bridges (middle-eight / the departure) that break the repetitive Verse-Chorus loop by introducing new chord progressions (vi or IV shifts), fresh melodic shapes, and sudden lyrical revelations.",
    "prerequisites": [
      "songwriting-u3-l3"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "songwriting-u3-l2",
        "songwriting-u3-l3"
      ]
    },
    "presentation": {
      "explanation": "By the time a listener has heard **Verse 1 -> Chorus -> Verse 2 -> Chorus**, their brain has figured out the pattern. If you go straight to a third chorus, fatigue sets in. This is where the **Bridge** (historically called the 'Middle Eight') arrives to save the song.\n\n1. **The Core Mandate of the Bridge — Complete Departure:**\n   - **Harmonic Shift:** Break away from the I-V-vi-IV verse loop! Start the bridge on the **relative minor (vi)**, the **subdominant (IV)**, or the **mediant (iii)** to change the emotional lighting.\n   - **Rhythmic & Melodic Novelty:** Change the note durations (e.g. legato sweeps if the verses were staccato), alter vocal phrasing, or strip the rhythm down to acoustic guitar/piano.\n   - **Lyrical Epiphany (The 180-Degree Pivot):** The bridge is where the narrator has an epiphany, reveals a secret, changes their mind, jumps 10 years into the future, or zooms out to the cosmic perspective.\n\n2. **The Bridge-to-Final-Chorus Re-entry:**\n   - The end of the bridge must act as a slingshot into the **Final Grand Chorus**.\n   - Classic technique: The **Drop Chorus** (strip all drums on Chorus 3 down to a whisper) followed by the **Double Chorus Explosion** (full stadium blast with ad-libs and vocal counterpoint).",
      "examples": [
        "Harmonic Departure: Verse/Chorus in C Major (C - G - Am - F). Bridge starts on F Major (IV) -> Dm (ii) -> G (V) -> Em (iii) -> F -> G (huge dominant build!).",
        "Lyrical Epiphany: Verse 1 & 2 blamed the lover ('You broke my heart'). Bridge has the sudden revelation: 'Maybe I was looking for a ghost in the hallway / Maybe I was running from myself the whole way.'",
        "Time Jump Bridge: 'Ten years later, kids in the backyard / Looking at the photograph in the hall.'"
      ],
      "mnemonics": [
        "The Bridge is the secret room in the house the listener didn't know existed.",
        "Verse 1 = Setup, Verse 2 = Conflict, Chorus = Feeling, Bridge = Revelation."
      ],
      "culturalNotes": [
        "In traditional Beatles and Tin Pan Alley songwriting, the bridge is the musical masterpiece section where songwriting craft shines (e.g. 'Something' by George Harrison, 'Yesterday' by Paul McCartney)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In applying the principles of Construct transformative bridges (middle-eight / the departure) that break the repetitive Verse-Chorus loop by introducing new chord progressions (vi or IV shifts), which composition technique best fulfills the musical goal?",
          "options": [
            "To break the repetitive Verse/Chorus loop by introducing a new harmonic color, fresh melody, and a lyrical revelation (Construct transformative bridges middleeight  the departure that break the repetitive VerseChorus loop by introducing new chord progressions vi or IV shifts)",
            "To play the first verse backwards (Construct transformative bridges middleeight  the departure that break the repetitive VerseChorus loop by introducing new chord progressions vi or IV shifts)",
            "To sell commercial products (Construct transformative bridges middleeight  the departure that break the repetitive VerseChorus loop by introducing new chord progressions vi or IV shifts)",
            "To introduce the band's manager (Construct transformative bridges middleeight  the departure that break the repetitive VerseChorus loop by introducing new chord progressions vi or IV shifts)"
          ],
          "answerIndex": 0,
          "explanation": "The bridge provides harmonic, melodic, and lyrical departure."
        },
        {
          "prompt": "Lyrically, what typically happens in a masterfully written bridge?",
          "options": [
            "The narrator experiences a moment of realization, a plot twist, a perspective shift, or a sudden emotional breakthrough (Construct transformative bridges middleeight  the departure that break the repetitive VerseChorus loop by introducing new chord progressions vi or IV shifts)",
            "The narrator talks about the weather only (Construct transformative bridges middleeight  the departure that break the repetitive VerseChorus loop by introducing new chord progressions vi or IV shifts)",
            "The narrator counts from one to eight (Construct transformative bridges middleeight  the departure that break the repetitive VerseChorus loop by introducing new chord progressions vi or IV shifts)",
            "The narrator repeats the chorus four times (Construct transformative bridges middleeight  the departure that break the repetitive VerseChorus loop by introducing new chord progressions vi or IV shifts)"
          ],
          "answerIndex": 0,
          "explanation": "The bridge is reserved for pivotal narrative or emotional epiphanies."
        },
        {
          "prompt": "What was the traditional name for the bridge section in 32-bar American standards?",
          "options": [
            "The Middle Eight (Construct transformative bridges middleeight  the departure that break the repetitive VerseChorus loop by introducing new chord progressions vi or IV shifts)",
            "The Solo Trap (Construct transformative bridges middleeight  the departure that break the repetitive VerseChorus loop by introducing new chord progressions vi or IV shifts)",
            "The Quick Four (Construct transformative bridges middleeight  the departure that break the repetitive VerseChorus loop by introducing new chord progressions vi or IV shifts)",
            "The Big Sixteen (Construct transformative bridges middleeight  the departure that break the repetitive VerseChorus loop by introducing new chord progressions vi or IV shifts)"
          ],
          "answerIndex": 0,
          "explanation": "The 'Middle Eight' is the classic music industry term for the bridge."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In composition and lyric craft for Unit 3, Lesson 4: Foundational & Structural Mastery, which artistic decision best serves the song?",
          "options": [
            "By opening the section on a different chord from the verse/chorus (such as the IV, vi, or ii chord)",
            "By muting all sound for two minutes (Construct transformative bridges middleeight  the departure that break the repetitive VerseChorus loop by introducing new chord progressions vi or IV shifts)",
            "By tuning all guitars down an octave in silence (Construct transformative bridges middleeight  the departure that break the repetitive VerseChorus loop by introducing new chord progressions vi or IV shifts)",
            "By playing random discordant notes (Construct transformative bridges middleeight  the departure that break the repetitive VerseChorus loop by introducing new chord progressions vi or IV shifts)"
          ],
          "answerIndex": 0,
          "explanation": "Opening on the IV, vi, or ii chord instantly shifts the harmonic atmosphere."
        },
        {
          "prompt": "What is a 'Drop Chorus' that often follows immediately after a dramatic bridge?",
          "options": [
            "Singing the chorus with stripped-down instruments (just voice and piano/guitar)",
            "Dropping the microphone on stage (Construct transformative bridges middleeight  the departure that break the repetitive VerseChorus loop by introducing new chord progressions vi or IV shifts)",
            "Deleting the chorus from the track (Construct transformative bridges middleeight  the departure that break the repetitive VerseChorus loop by introducing new chord progressions vi or IV shifts)",
            "Dropping the pitch by 5 semitones (Construct transformative bridges middleeight  the departure that break the repetitive VerseChorus loop by introducing new chord progressions vi or IV shifts)"
          ],
          "answerIndex": 0,
          "explanation": "A drop chorus creates intimacy before the final grand explosion."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Where does a bridge typically appear in standard song architecture?",
          "options": [
            "In between Verse 1 and Verse 2 (Construct transformative bridges middleeight  the departure that break the repetitive VerseChorus loop by introducing new chord progressions vi or IV shifts)",
            "Before the first verse (Construct transformative bridges middleeight  the departure that break the repetitive VerseChorus loop by introducing new chord progressions vi or IV shifts)",
            "At the very end as the song fades out (Construct transformative bridges middleeight  the departure that break the repetitive VerseChorus loop by introducing new chord progressions vi or IV shifts)",
            "After the second chorus and before the final chorus (Construct transformative bridges middleeight  the departure that break the repetitive VerseChorus loop by introducing new chord progressions vi or IV shifts)"
          ],
          "answerIndex": 3,
          "explanation": "The bridge sits between Chorus 2 and Chorus 3 (VCVCBC).",
          "type": "multiple-choice"
        },
        {
          "prompt": "If your Verse and Chorus are in bright C Major (C - G - Am - F), starting your bridge on Dm or F creates:",
          "options": [
            "A wrong note error (Construct transformative bridges middleeight  the departure that break the repetitive VerseChorus loop by introducing new chord progressions vi or IV shifts)",
            "A system crash in the audio player (Construct transformative bridges middleeight  the departure that break the repetitive VerseChorus loop by introducing new chord progressions vi or IV shifts)",
            "A moody, introspective subdominant shift that refreshes the listener's ear (Construct transformative bridges middleeight  the departure that break the repetitive VerseChorus loop by introducing new chord progressions vi or IV shifts)",
            "Instant loss of rhythm (Construct transformative bridges middleeight  the departure that break the repetitive VerseChorus loop by introducing new chord progressions vi or IV shifts)"
          ],
          "answerIndex": 2,
          "explanation": "Subdominant and minor chord shifts refresh the listener's ear.",
          "type": "multiple-choice"
        },
        {
          "prompt": "A bridge that features a 10-year time jump in the lyrics is using which storytelling technique?",
          "options": [
            "Metaphorical inversion (Construct transformative bridges middleeight  the departure that break the repetitive VerseChorus loop by introducing new chord progressions vi or IV shifts)",
            "Temporal perspective shift / Narrative time jump (Construct transformative bridges middleeight  the departure that break the repetitive VerseChorus loop by introducing new chord progressions vi or IV shifts)",
            "Alliteration (Construct transformative bridges middleeight  the departure that break the repetitive VerseChorus loop by introducing new chord progressions vi or IV shifts)",
            "Slant rhyme (Construct transformative bridges middleeight  the departure that break the repetitive VerseChorus loop by introducing new chord progressions vi or IV shifts)"
          ],
          "answerIndex": 1,
          "explanation": "Temporal shift advances the storyline into future hindsight.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is it important NOT to repeat the song title in the bridge?",
          "options": [
            "To keep the bridge distinct from the chorus and save the title's impact for the grand final chorus re-entry (Construct transformative bridges middleeight  the departure that break the repetitive VerseChorus loop by introducing new chord progressions vi or IV shifts)",
            "Because titles are only allowed in verses (Construct transformative bridges middleeight  the departure that break the repetitive VerseChorus loop by introducing new chord progressions vi or IV shifts)",
            "Because bridges cannot contain vowels (Construct transformative bridges middleeight  the departure that break the repetitive VerseChorus loop by introducing new chord progressions vi or IV shifts)",
            "Because copyright forbids it (Construct transformative bridges middleeight  the departure that break the repetitive VerseChorus loop by introducing new chord progressions vi or IV shifts)"
          ],
          "answerIndex": 0,
          "explanation": "Holding back the title builds anticipation for the final chorus explosion.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the ultimate purpose of the bridge's final two bars?",
          "options": [
            "Fading the volume to zero (Construct transformative bridges middleeight  the departure that break the repetitive VerseChorus loop by introducing new chord progressions vi or IV shifts)",
            "Singing the verse lyrics again (Construct transformative bridges middleeight  the departure that break the repetitive VerseChorus loop by introducing new chord progressions vi or IV shifts)",
            "Playing a drum solo with no rhythm (Construct transformative bridges middleeight  the departure that break the repetitive VerseChorus loop by introducing new chord progressions vi or IV shifts)",
            "Building tension on the dominant harmony (Construct transformative bridges middleeight  the departure that break the repetitive VerseChorus loop by introducing new chord progressions vi or IV shifts)"
          ],
          "answerIndex": 3,
          "explanation": "The dominant build slingshots into the final chorus payoff.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 3, Lesson 4"
  },
  "songwriting-u3-l5": {
    "id": "songwriting-u3-l5",
    "unit": "songwriting-u3",
    "level": "intermediate",
    "objective": "Map, architect, and evaluate full-length song structures (VCVCBC pop/rock standard, AABA classic American songbook, and AAA storytelling ballad) with dynamic energy contours.",
    "prerequisites": [
      "songwriting-u3-l4"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "songwriting-u3-l1",
        "songwriting-u3-l2",
        "songwriting-u3-l3",
        "songwriting-u3-l4"
      ]
    },
    "presentation": {
      "explanation": "This capstone lesson brings together all structural building blocks into a master blueprint of **Song Architecture and Dynamic Energy Mapping**.\n\n1. **The Three Master Song Forms:**\n   - **Form 1: The Modern Pop/Rock Standard (Verse-Chorus-Bridge / VCVCBC):**\n     * Intro (4 bars) -> Verse 1 -> Pre-Chorus 1 -> Chorus 1 -> Verse 2 -> Pre-Chorus 2 -> Chorus 2 -> Bridge -> Drop Chorus -> Grand Double Chorus -> Outro.\n     * *Why it dominates:* Perfect balance of story (V), anticipation (P), anthemic payoff (C), and departure (B).\n   - **Form 2: The 32-Bar Standard (AABA):**\n     * Verse 1 (A) -> Verse 2 (A) -> Bridge (B) -> Verse 3 (A with refrain hook).\n     * *Classic examples:* 'Yesterday' (Beatles), 'Somewhere Over the Rainbow'.\n   - **Form 3: The Strophic Ballad (AAA with Refrain):**\n     * Continuous narrative verses where the last line of every verse acts as a recurring refrain hook.\n     * *Classic examples:* 'Blowin' in the Wind' (Bob Dylan), 'The House of the Rising Sun'.\n\n2. **Dynamic Energy Mapping (The Tension-Energy Graph):**\n   - Every great song has a dynamic heartbeat:\n     * Verse 1: 30% Energy (Intimate, scene setting)\n     * Pre-Chorus 1: 60% Energy (Rising heartbeat)\n     * Chorus 1: 85% Energy (Big melodic release)\n     * Verse 2: 45% Energy (Higher than V1, drums continue)\n     * Chorus 2: 90% Energy\n     * Bridge: 50% -> 95% Energy (Emotional peak & dominant build)\n     * Final Chorus: 100% Energy (Fireworks, ad-libs, top-tier payoff)!",
      "examples": [
        "Full VCVCBC Architecture Breakdown: 'Intro (Acoustic) -> V1 (Late night kitchen) -> Pre (Heart pounding) -> Chorus (Title Hook) -> V2 (Next morning) -> Pre -> Chorus -> Bridge (Epiphany on the roof) -> Final Chorus (Full stadium roar) -> Outro (Acoustic fade)'.",
        "Refrain in AAA Form: Every verse ends with the unbreakable line: 'And the wind cried Mary.'",
        "Energy Map: Visualizing song dynamics as an ascending staircase from 30% to 100%."
      ],
      "mnemonics": [
        "VCVCBC = Verse-Chorus-Verse-Chorus-Bridge-Chorus (The Golden Pop Blueprint).",
        "Never leave energy flat: Every section must change the dynamic temperature of the room."
      ],
      "culturalNotes": [
        "The architecture of a song dictates its genre feel: Folk loves strophic AAA ballads, Broadway and Jazz thrive on AABA, and Global Streaming Pop runs on high-octane VCVCBC."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In applying the principles of Map, which composition technique best fulfills the musical goal?",
          "options": [
            "Verse - Chorus - Verse - Chorus - Bridge - Chorus (Map)",
            "Vocal - Chord - Vocal - Chord - Bass - Cymbal (Map)",
            "Volume - Control - Volume - Control - Bass - Clear (Map)",
            "Verse - Cadence - Verse - Cadence - Beat - Cadence (Map)"
          ],
          "answerIndex": 0,
          "explanation": "VCVCBC = Verse - Chorus - Verse - Chorus - Bridge - Chorus."
        },
        {
          "prompt": "In an AABA 32-bar classic song form, what does the 'B' section represent?",
          "options": [
            "The Bridge (or Middle Eight)",
            "The Bass solo (Map)",
            "The Background vocals (Map)",
            "The Beat drop (Map)"
          ],
          "answerIndex": 0,
          "explanation": "'B' represents the Bridge in classic AABA form."
        },
        {
          "prompt": "What is a 'Refrain' in an AAA strophic folk ballad?",
          "options": [
            "A recurring line (often the title)",
            "A 3-minute silence (Map)",
            "An opera singer joining the track (Map)",
            "An off-key chord (Map)"
          ],
          "answerIndex": 0,
          "explanation": "A refrain is a recurring anchor line integrated within verses."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In composition and lyric craft for Unit 3, Lesson 5: Foundational & Structural Mastery, which artistic decision best serves the song?",
          "options": [
            "Because Verse 2 is shorter (Map)",
            "To prevent the song from losing all its momentum after the high-energy first chorus (Map)",
            "Because Verse 2 must be shouted (Map)",
            "Because the singer's voice is louder in Verse 2 (Map)"
          ],
          "answerIndex": 1,
          "explanation": "Maintaining groove and momentum prevents energy crashes after Chorus 1."
        },
        {
          "prompt": "Which song form is ideal for a sprawling, 8-verse story song with rich narrative lyrics?",
          "options": [
            "AAA Strophic Ballad with Refrain (Map)",
            "Single-word chorus loop (Map)",
            "Instrumental march (Map)",
            "30-second EDM loop (Map)"
          ],
          "answerIndex": 0,
          "explanation": "The AAA Strophic form is the historic home of storytelling ballads."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What is the peak energy section in a standard VCVCBC song blueprint?",
          "options": [
            "Verse 1 (Map)",
            "The Intro (Map)",
            "The Final Double Chorus (Map)",
            "The Pre-Chorus 1 (Map)"
          ],
          "answerIndex": 2,
          "explanation": "The final chorus represents the 100% dynamic climax.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which of the following is a classic example of an AABA song structure?",
          "options": [
            "A 120 BPM electronic club track (Map)",
            "'Yesterday' by The Beatles (Map)",
            "A hip-hop cypher with no melody (Map)",
            "A drum solo (Map)"
          ],
          "answerIndex": 1,
          "explanation": "'Yesterday' is one of the most famous AABA masterpieces in modern history.",
          "type": "multiple-choice"
        },
        {
          "prompt": "How does dynamic energy mapping help a songwriter (deliberate practice)?",
          "options": [
            "It ensures the listener experiences a compelling journey of rising and falling tension rather than an unvarying emotional flatline (Map)",
            "It proves which chords are illegal (Map)",
            "It turns acoustic guitars into synthesizers (Map)",
            "It calculates the exact price of sheet music (Map)"
          ],
          "answerIndex": 0,
          "explanation": "Dynamic mapping crafts an engaging emotional and psychoacoustic journey.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the primary role of an Outro section in song architecture?",
          "options": [
            "To introduce a whole new verse story (Map)",
            "To start the song over from the beginning (Map)",
            "To tune the instruments (Map)",
            "To provide a satisfying emotional landing, resolution, or atmospheric fade after the climactic chorus (Map)"
          ],
          "answerIndex": 3,
          "explanation": "The outro provides resolution, cooldown, and lingering emotional resonance.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the overarching objective achieved upon completing Unit 3 of FEARN Songwriting?",
          "options": [
            "Only learning how to rhyme words ending in -at (Map)",
            "Learning how to tune a guitar only (Map)",
            "Mastering the architecture of Verses, Pre-Choruses, Choruses, Bridges, and complete dynamic song arrangements (Map)",
            "Memorizing the circle of fifths only (Map)"
          ],
          "answerIndex": 2,
          "explanation": "Unit 3 master objective: Full Song Structure & Architecture.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 3, Lesson 5"
  },
  "songwriting-u4-l1": {
    "id": "songwriting-u4-l1",
    "unit": "songwriting-u4",
    "level": "intermediate",
    "objective": "Master melodic contour (arch, ascending, descending, pendulum) and understand how stepwise conjunct motion versus wide expressive leaps (6ths, octaves) drive emotional impact.",
    "difficulty": 900,
    "prerequisites": [
      "songwriting-u3-l5"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "songwriting-u3-l1",
        "songwriting-u3-l3"
      ]
    },
    "presentation": {
      "explanation": "Melody is the emotional vocal trajectory of a song. A memorable melody is not random; it has a clear **melodic contour (visual shape)** that leads the listener's ear.\n\n1. **The 4 Primary Melodic Shapes:**\n- **1. The Arch (Ascend -> Peak -> Descend):** The most natural vocal curve in world music (e.g. *Somewhere Over the Rainbow*). Mimics taking a breath, reaching an emotional height, and exhaling.\n- **2. The Ascending Climb (Building Tension):** Starts low in the pitch register and continually climbs upward toward an explosive chorus hook (e.g. *Don't Stop Believin'*).\n- **3. The Cascading Waterfall (Descend):** Starts on a high exclamation and cascades down stepwise (e.g. *Hey Jude* — 'Hey Jude, don't make it bad...').\n- **4. The Pendulum / Oscillating Wave:** Bounces back and forth between two adjacent pitch centers, creating rhythmic hypnotic groove (e.g. *Dreams* by Fleetwood Mac).\n\n2. **Steps vs. Leaps (Conjunct vs. Disjunct Motion):**\n- **Stepwise Conjunct Motion (80% of melody):** Moving to neighboring scale notes (1 -> 2 -> 3). Easy for the human voice to sing along and remember.\n- **Disjunct Leaps (20% of melody):** Jumping across a 5th, 6th, or Octave. **Leaps create instant drama and emotional vulnerability** (e.g. the octave leap on 'Some-WHERE' in *Over the Rainbow* or minor 7th leap in *Somewhere* from West Side Story).\n- **The Golden Recovery Rule:** After a wide upward leap, a melody almost always resolves by stepping *downward* in the opposite direction!",
      "examples": [
        "Octave Leap: 'Some-where' (C4 -> C5) followed by stepwise descent 'o-ver the rain-bow' (B4 -> G4 -> A4 -> B4 -> C5).",
        "Arch Contour: Verse lines rising to the midpoint of the bar and settling back to the root note.",
        "Stepwise Hook: 'Yesterday, all my troubles seemed so far away' (smooth scalar descent)."
      ],
      "mnemonics": [
        "Conjunct steps build the road; Disjunct leaps build the monument.",
        "The Leap & Recover Law: Leap high, then step back down."
      ],
      "culturalNotes": [
        "In classical and popular melodic pedagogy (from Leonard Bernstein to Max Martin), wide upward leaps signify aspiration, longing, and yearning, while downward steps convey comfort and resolution."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In applying the principles of Master melodic contour (arch, which composition technique best fulfills the musical goal?",
          "options": [
            "Conjunct is loud and disjunct is quiet (Master melodic contour arch)",
            "Conjunct uses only minor chords (Master melodic contour arch)",
            "Disjunct has no rhythm (Master melodic contour arch)",
            "Conjunct motion moves by smooth scale steps; disjunct motion jumps across wide pitch leaps (Master melodic contour arch)"
          ],
          "answerIndex": 3,
          "explanation": "Conjunct = stepwise scale motion; disjunct = wide intervals/leaps."
        },
        {
          "prompt": "What is the 'Leap and Recovery' rule in vocal melody construction?",
          "options": [
            "Never use leaps in pop music (Master melodic contour arch)",
            "Sing the same leap 10 times (Master melodic contour arch)",
            "After a dramatic wide upward leap, the melody typically steps gently in the opposite (downward)",
            "You must leap off the stage (Master melodic contour arch)"
          ],
          "answerIndex": 2,
          "explanation": "Stepwise recovery provides natural organic vocal balance."
        },
        {
          "prompt": "Which melodic contour begins low, rises to an emotional climax in the center, and settles back down?",
          "options": [
            "The Waterfall descent (Master melodic contour arch)",
            "The Arch contour (Master melodic contour arch)",
            "The Inverted valley (Master melodic contour arch)",
            "The Flat monotone (Master melodic contour arch)"
          ],
          "answerIndex": 1,
          "explanation": "The Arch is the classic vocal shape."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In composition and lyric craft for Unit 4, Lesson 1: Foundational & Structural Mastery, which artistic decision best serves the song?",
          "options": [
            "Leaps are forbidden by copyright law (Master melodic contour arch)",
            "Scale steps are louder than leaps (Master melodic contour arch)",
            "Guitars cannot play leaps (Master melodic contour arch)",
            "Stepwise melodies are effortless for the average listener to sing along with and memorize (Master melodic contour arch)"
          ],
          "answerIndex": 3,
          "explanation": "Stepwise melodies maximize singability and cognitive stickiness."
        },
        {
          "prompt": "What emotional sensation is commonly evoked by a sudden wide upward leap of an octave or minor 7th?",
          "options": [
            "Indifference (Master melodic contour arch)",
            "Sleepiness (Master melodic contour arch)",
            "Yearning, aspiration, vulnerability, and intense emotional awakening (Master melodic contour arch)",
            "Boredom (Master melodic contour arch)"
          ],
          "answerIndex": 2,
          "explanation": "Upward leaps evoke yearning and heightened emotion."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "The opening interval of 'Somewhere Over the Rainbow' ('Some-WHERE') is an example of:",
          "options": [
            "A monotone drone (Master melodic contour arch)",
            "An expressive octave leap (disjunct motion)",
            "A spoken word rap (Master melodic contour arch)",
            "A descending half-step (Master melodic contour arch)"
          ],
          "answerIndex": 1,
          "explanation": "Iconic octave leap.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is a 'cascading / waterfall' melodic shape?",
          "options": [
            "Starting high on an emotional peak and stepping downward across the musical bar (Master melodic contour arch)",
            "A rhythm that speeds up (Master melodic contour arch)",
            "A silent pause (Master melodic contour arch)",
            "Singing underwater (Master melodic contour arch)"
          ],
          "answerIndex": 0,
          "explanation": "Waterfall descent starts high and steps downward.",
          "type": "multiple-choice"
        },
        {
          "prompt": "If an entire song melody only contains stepwise motion with zero leaps, what risk does it run?",
          "options": [
            "It cannot have drums (Master melodic contour arch)",
            "It will violate music theory (Master melodic contour arch)",
            "It will be too high to sing (Master melodic contour arch)",
            "It can become monotonous and lack emotional climax or memorable peak moments (Master melodic contour arch)"
          ],
          "answerIndex": 3,
          "explanation": "Lack of contrast leads to melodic fatigue.",
          "type": "multiple-choice"
        },
        {
          "prompt": "How does melodic contour interact with song lyrics?",
          "options": [
            "Melody contour does not affect words (Master melodic contour arch)",
            "Only verbs can be on high notes (Master melodic contour arch)",
            "Important emotional words (love, fly, heartbreak)",
            "Lyrics and melody should have opposite rhythms (Master melodic contour arch)"
          ],
          "answerIndex": 2,
          "explanation": "Emotional word stress aligning with melodic peaks creates powerful prosody.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What constitutes a 'pendulum' melodic contour?",
          "options": [
            "A melody that only goes up (Master melodic contour arch)",
            "Oscillating back and forth between two adjacent pitch centers (Master melodic contour arch)",
            "Playing drums only (Master melodic contour arch)",
            "Singing in a clock tower (Master melodic contour arch)"
          ],
          "answerIndex": 1,
          "explanation": "Oscillation between adjacent notes.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 4, Lesson 1: Master melodic contour (arch"
  },
  "songwriting-u4-l2": {
    "id": "songwriting-u4-l2",
    "unit": "songwriting-u4",
    "level": "intermediate",
    "objective": "Craft memorable melodic motifs using repetition, variation (rhythmic, pitch, inversion), and classic pop phrase architectures (A-A-B, A-A'-A-B, Call-and-Response).",
    "difficulty": 920,
    "prerequisites": [
      "songwriting-u4-l1"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "songwriting-u4-l1",
        "songwriting-u3-l3"
      ]
    },
    "presentation": {
      "explanation": "A **Motif (or Motive)** is the DNA of a song: a short, distinct melodic/rhythmic fragment (usually 3 to 7 notes) that is repeated and transformed to build an entire track.\n\n1. **The 3 Golden Phrase Architectures:**\n- **1. A-A-B (The 3-Line Punch):**\n  * Line 1 (A): Introduce motif.\n  * Line 2 (A): Repeat motif (cements it in listener memory).\n  * Line 3 (B): Break the pattern with a release / departure line!\n- **2. A-A'-A-B (The Evolutionary Arch):**\n  * Line 1 (A): Statement.\n  * Line 2 (A'): Same rhythm, but pitch shifts upward (building tension!).\n  * Line 3 (A): Statement returns.\n  * Line 4 (B): Cadence / Climax release.\n- **3. Call-and-Response (Question & Answer):**\n  * Phrase 1 (Call/Antecedent): Ends on an unresolved note (e.g. 2nd or 5th scale degree) -> feels like a question '?'.\n  * Phrase 2 (Response/Consequent): Mirrors the rhythm but resolves down to the tonic root (1st degree) -> feels like the answer '!'.\n\n2. **The 3 Motif Transformation Tools:**\n- **Pitch Shift (Sequence):** Take the exact same 4-note rhythmic motif and play it 2 scale steps higher.\n- **Rhythmic Augmentation/Diminution:** Double the length of the notes (half-time feel) or cut them in half (syncopated sprint).\n- **Truncation / Extension:** Cut off the last note or add a tail.",
      "examples": [
        "Call and Response: 'Do you want to know a secret?' (Unresolved upward call) -> 'Do you promise not to tell?' (Downward resolving response).",
        "A-A-B Structure: 'Shape of You' verse melodic motifs.",
        "Pitch Sequence: Beethoven's 5th motif (G-G-G-Eb) shifted down to (F-F-F-D)."
      ],
      "mnemonics": [
        "A-A-B = Establish, Reinforce, Surprise.",
        "Call ends open (?), Response lands home (!)."
      ],
      "culturalNotes": [
        "Max Martin's 'Melodic Math' theory relies heavily on strict motif economy: an entire Billboard #1 chorus is often constructed from a single 4-note motif repeated and varied 3 times."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In applying the principles of Craft memorable melodic motifs using repetition, which composition technique best fulfills the musical goal?",
          "options": [
            "A short, distinctive 3-to-7 note melodic/rhythmic building block that is repeated and developed (Craft memorable melodic motifs using repetition)",
            "The chord sheet (Craft memorable melodic motifs using repetition)",
            "The album artwork (Craft memorable melodic motifs using repetition)",
            "The tempo marking (Craft memorable melodic motifs using repetition)"
          ],
          "answerIndex": 0,
          "explanation": "A motif is the core melodic cell of a song."
        },
        {
          "prompt": "In the A-A-B phrase structure, what is the specific role of line B?",
          "options": [
            "To break the established pattern and provide an emotional release or punchline (Craft memorable melodic motifs using repetition)",
            "To repeat line A exactly (Craft memorable melodic motifs using repetition)",
            "To change the key to minor (Craft memorable melodic motifs using repetition)",
            "To stay silent (Craft memorable melodic motifs using repetition)"
          ],
          "answerIndex": 0,
          "explanation": "B breaks the repetition with a payoff release."
        },
        {
          "prompt": "How does a 'Call and Response' (Antecedent/Consequent) phrase pair create satisfaction?",
          "options": [
            "The call leaves the pitch unresolved on a tense scale degree (Craft memorable melodic motifs using repetition)",
            "Both phrases are identical (Craft memorable melodic motifs using repetition)",
            "There is no harmony (Craft memorable melodic motifs using repetition)",
            "The response is played by drums only (Craft memorable melodic motifs using repetition)"
          ],
          "answerIndex": 0,
          "explanation": "Unresolved tension followed by tonic resolution."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In composition and lyric craft for Unit 4, Lesson 2: Foundational & Structural Mastery, which artistic decision best serves the song?",
          "options": [
            "Retrograde inversion (Craft memorable melodic motifs using repetition)",
            "Rhythmic truncation (Craft memorable melodic motifs using repetition)",
            "Octave mute (Craft memorable melodic motifs using repetition)",
            "Melodic sequence (Craft memorable melodic motifs using repetition)"
          ],
          "answerIndex": 3,
          "explanation": "Melodic sequence shifts pitches along the scale."
        },
        {
          "prompt": "Why is motif economy (repeating few motifs) superior to introducing 10 random melodies?",
          "options": [
            "It saves recording tape (Craft memorable melodic motifs using repetition)",
            "Instruments can only play 3 notes (Craft memorable melodic motifs using repetition)",
            "It makes the song shorter (Craft memorable melodic motifs using repetition)",
            "The human brain craves familiar pattern recognition; too many unrelated melodies cause cognitive overload (Craft memorable melodic motifs using repetition)"
          ],
          "answerIndex": 3,
          "explanation": "Pattern recognition drives catchy familiarity."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Which formula represents: Statement -> Statement with higher pitch -> Statement -> Climax release?",
          "options": [
            "A - A' - A - B (Craft memorable melodic motifs using repetition)",
            "A - A - A - A (Craft memorable melodic motifs using repetition)",
            "B - B - B - A (Craft memorable melodic motifs using repetition)",
            "A - B - C - D (Craft memorable melodic motifs using repetition)"
          ],
          "answerIndex": 0,
          "explanation": "A-A'-A-B evolutionary motif structure.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is 'Max Martin's Melodic Math' fundamentally based on?",
          "options": [
            "Writing songs using logarithms (Craft memorable melodic motifs using repetition)",
            "Using 12-tone serialism (Craft memorable melodic motifs using repetition)",
            "Playing only classical piano (Craft memorable melodic motifs using repetition)",
            "Extreme motif economy and syllable-to-note mathematical synchronization across verse and chorus (Craft memorable melodic motifs using repetition)"
          ],
          "answerIndex": 3,
          "explanation": "Melodic math focuses on motif symmetry and rhythmic syllable matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What happens when you truncate a motif in the 3rd repetition?",
          "options": [
            "It plays in reverse (Craft memorable melodic motifs using repetition)",
            "The pitch becomes inaudible (Craft memorable melodic motifs using repetition)",
            "You cut it short, creating sudden rhythmic acceleration and urgency before the chorus hits (Craft memorable melodic motifs using repetition)",
            "The song ends (Craft memorable melodic motifs using repetition)"
          ],
          "answerIndex": 2,
          "explanation": "Truncation creates rhythmic acceleration.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why does the 'Call' phrase typically end on the 2nd (Re) or 5th (Sol) scale degree?",
          "options": [
            "Because of guitar tuning (Craft memorable melodic motifs using repetition)",
            "Because non-tonic scale degrees carry harmonic instability, sounding like an open question (Craft memorable melodic motifs using repetition)",
            "Because the root note is illegal in calls (Craft memorable melodic motifs using repetition)",
            "Because singers cannot hit other notes (Craft memorable melodic motifs using repetition)"
          ],
          "answerIndex": 1,
          "explanation": "Instability creates an expectant 'question' feeling.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the primary artistic goal of motif variation?",
          "options": [
            "Balancing unity (familiarity)",
            "Making the song impossible to hum (Craft memorable melodic motifs using repetition)",
            "Showing off vocal acrobatics (Craft memorable melodic motifs using repetition)",
            "Hiding the melody from the listener (Craft memorable melodic motifs using repetition)"
          ],
          "answerIndex": 0,
          "explanation": "Unity vs. Variety balance.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 4, Lesson 2: Craft memorable melodic motifs using repetition"
  },
  "songwriting-u4-l3": {
    "id": "songwriting-u4-l3",
    "unit": "songwriting-u4",
    "level": "intermediate",
    "objective": "Master rhythmic phrasing and syncopation in melody: utilize downbeats vs upbeats, anticipation (pushing), pickup notes (anacrusis), and groove pocket placement across 4/4 and 6/8 time.",
    "difficulty": 950,
    "prerequisites": [
      "songwriting-u4-l2"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "songwriting-u4-l1",
        "songwriting-u4-l2"
      ]
    },
    "presentation": {
      "explanation": "Great melodies are memorable not just because of *what* notes are sung, but *when* they are sung. **Rhythmic Phrasing** gives melody its groove and life.\n\n1. **The 3 Entry Positions for a Melodic Phrase:**\n- **1. On the Downbeat (Beat 1):** Solid, grounded, authoritative, hymn-like (e.g. *Let It Be* — 'When I find myself in times of trouble...').\n- **2. After the Downbeat (Backbeat / Delayed Entry):** Laid-back, relaxed, conversational (e.g. *Billie Jean* — starts on beat 2 or the '&' of 2).\n- **3. Before the Downbeat (Pickup / Anacrusis / Push):** Energetic, anticipatory, driving forward (e.g. *Don't Stop Believin'* — 'Just a small town girl...').\n\n2. **The Power of Melodic Syncopation (The 'Push'):**\n- Singing notes on the **upbeats (the 'ANDs' of beats: 1-AND, 2-AND, 3-AND, 4-AND)** creates rhythmic lift.\n- **The Harmonic Push:** Singing a chorus melody note an eighth-note *before* the chord actually lands on beat 1 (e.g. 'I WAN-na dance with somebody' — hits on the '&' of 4).\n\n3. **Contrast Between Song Sections:**\n- If your **Verse** is laid-back and starts *after* the beat with dense speech-rhythm, make your **Chorus** melody hit hard on the **Downbeat** with long, held vowel notes!\n- Rhythmic contrast between sections prevents listener fatigue.",
      "examples": [
        "Pickup / Anacrusis: 'Amazing Grace' ('A-' hits on beat 3 pickup, '-MA-zing' lands on beat 1).",
        "Harmonic Push: Hitting the chorus hook an eighth note ahead of the bar line (the '&' of 4).",
        "Rhythmic Space: Leaving full whole-bar rests between vocal lines to let the instrumental hook breathe."
      ],
      "mnemonics": [
        "Downbeat = Grounded & Authoritative.",
        "Upbeat / Push = Lift & Momentum.",
        "Verse rhythms vs Chorus rhythms: Always contrast the groove!"
      ],
      "culturalNotes": [
        "Syncopated melody pushes are the hallmark of Motown, R&B, Funk, and modern Pop production (Stevie Wonder, Michael Jackson, Dua Lipa), driving the physical urge to dance."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In applying the principles of Master rhythmic phrasing and syncopation in melody, which composition technique best fulfills the musical goal?",
          "options": [
            "A note played at the end of a concert (Master rhythmic phrasing and syncopation in melody)",
            "A silent measure (Master rhythmic phrasing and syncopation in melody)",
            "A guitar solo (Master rhythmic phrasing and syncopation in melody)",
            "One or more notes sung *before* the first strong downbeat of the measure to lead into the phrase (Master rhythmic phrasing and syncopation in melody)"
          ],
          "answerIndex": 3,
          "explanation": "Anacrusis = pickup note leading into beat 1."
        },
        {
          "prompt": "What is a 'harmonic push' in pop melodic phrasing?",
          "options": [
            "Pushing the piano off the stage (Master rhythmic phrasing and syncopation in melody)",
            "Singing louder than the band (Master rhythmic phrasing and syncopation in melody)",
            "Changing the key suddenly (Master rhythmic phrasing and syncopation in melody)",
            "Anticipating the chord change by singing the key melody note an eighth-note *before* the downbeat (Master rhythmic phrasing and syncopation in melody)"
          ],
          "answerIndex": 3,
          "explanation": "Singing on the '&' of 4 creates rhythmic drive and momentum."
        },
        {
          "prompt": "How does rhythmic contrast between Verse and Chorus improve a song?",
          "options": [
            "It makes the song harder to play (Master rhythmic phrasing and syncopation in melody)",
            "It requires changing the drummer (Master rhythmic phrasing and syncopation in melody)",
            "It turns a pop song into jazz (Master rhythmic phrasing and syncopation in melody)",
            "Switching from syncopated short verse phrasing to sustained on-the-beat chorus phrasing creates an explosive sense of arrival (Master rhythmic phrasing and syncopation in melody)"
          ],
          "answerIndex": 3,
          "explanation": "Rhythmic contrast creates powerful structural impact."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In composition and lyric craft for Unit 4, Lesson 3: Foundational & Structural Mastery, which artistic decision best serves the song?",
          "options": [
            "Direct, grounded, honest, definitive, and hymn-like (Master rhythmic phrasing and syncopation in melody)",
            "Confused and searching (Master rhythmic phrasing and syncopation in melody)",
            "Timid and hesitant (Master rhythmic phrasing and syncopation in melody)",
            "Chaotic (Master rhythmic phrasing and syncopation in melody)"
          ],
          "answerIndex": 0,
          "explanation": "Beat 1 entries feel grounded and definitive."
        },
        {
          "prompt": "Why is leaving empty space (rests) between melodic phrases essential?",
          "options": [
            "It lets the listener process the lyric, allows the singer to breathe, and gives the rhythm track room to shine (Master rhythmic phrasing and syncopation in melody)",
            "To make the song longer (Master rhythmic phrasing and syncopation in melody)",
            "Because vocalists forget their lines (Master rhythmic phrasing and syncopation in melody)",
            "To save electricity (Master rhythmic phrasing and syncopation in melody)"
          ],
          "answerIndex": 0,
          "explanation": "Space allows cognitive digestion and rhythmic groove."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "In the song 'Amazing Grace', the word 'A-' is sung before beat 1. What is this called?",
          "options": [
            "A cadenza (Master rhythmic phrasing and syncopation in melody)",
            "A coda (Master rhythmic phrasing and syncopation in melody)",
            "A fermata (Master rhythmic phrasing and syncopation in melody)",
            "An anacrusis (Master rhythmic phrasing and syncopation in melody)"
          ],
          "answerIndex": 3,
          "explanation": "Anacrusis / pickup.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is 'syncopation' in music?",
          "options": [
            "Playing only on whole notes (Master rhythmic phrasing and syncopation in melody)",
            "Singing out of key (Master rhythmic phrasing and syncopation in melody)",
            "Accenting weak beats or off-beats (upbeats)",
            "Tuning instruments down a step (Master rhythmic phrasing and syncopation in melody)"
          ],
          "answerIndex": 2,
          "explanation": "Accenting unexpected upbeats and weak beats.",
          "type": "multiple-choice"
        },
        {
          "prompt": "If a verse has fast 16th-note rhythmic chatter, what is the best chorus melody design for maximum contrast?",
          "options": [
            "Even faster 32nd-note chatter (Master rhythmic phrasing and syncopation in melody)",
            "Long, sustained whole and half notes on open vowels (Master rhythmic phrasing and syncopation in melody)",
            "No melody at all (Master rhythmic phrasing and syncopation in melody)",
            "Whispering (Master rhythmic phrasing and syncopation in melody)"
          ],
          "answerIndex": 1,
          "explanation": "Sustained open vowels contrast chatter verses.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the 'pocket' in rhythmic groove singing?",
          "options": [
            "The micro-timing sweet spot where a singer's phrasing locks seamlessly with the drum groove and bassline (Master rhythmic phrasing and syncopation in melody)",
            "Where the singer keeps their guitar pick (Master rhythmic phrasing and syncopation in melody)",
            "The end of the track (Master rhythmic phrasing and syncopation in melody)",
            "A small verse (Master rhythmic phrasing and syncopation in melody)"
          ],
          "answerIndex": 0,
          "explanation": "The groove pocket locks vocal timing with rhythm section.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which time signature provides a lilting, triple-meter swing feel common in ballads?",
          "options": [
            "2/4 march time (Master rhythmic phrasing and syncopation in melody)",
            "4/4 common time (Master rhythmic phrasing and syncopation in melody)",
            "5/4 odd time (Master rhythmic phrasing and syncopation in melody)",
            "6/8 time (Master rhythmic phrasing and syncopation in melody)"
          ],
          "answerIndex": 3,
          "explanation": "6/8 and 3/4 provide lilting triplet groove.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 4, Lesson 3: Master rhythmic phrasing and syncopation in melody"
  },
  "songwriting-u4-l4": {
    "id": "songwriting-u4-l4",
    "unit": "songwriting-u4",
    "level": "intermediate",
    "objective": "Design vocal range and register contrast: map chest voice conversational verses to high head/mix voice chorus belting, and strategically place the song's single Climax Peak Note (money note).",
    "difficulty": 970,
    "prerequisites": [
      "songwriting-u4-l3"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "songwriting-u4-l1",
        "songwriting-u4-l3"
      ]
    },
    "presentation": {
      "explanation": "The human voice communicates emotion through **Vocal Tessitura (Pitch Range & Register)**. A great songwriter reserves specific pitch zones for specific emotional moments.\n\n1. **The 3 Vocal Register Zones in Song Structure:**\n- **1. Lower / Chest Voice (Verses):**\n  * Range: Low to mid conversational register.\n  * Emotional tone: Intimate, narrative, confessional, grounded storytelling.\n- **2. Upper Chest / Mix / Belt Voice (Chorus):**\n  * Range: 4 to 7 scale steps HIGHER than the verse.\n  * Emotional tone: Euphoria, desperation, passion, anthemic conviction.\n- **3. The Stratospheric Climax / Head Voice (Bridge & Final Chorus):**\n  * The highest note in the entire song.\n\n2. **The 'Money Note' (The Climax Peak):**\n- A master songwriting rule: **Do NOT give away your highest note in the verse or chorus 1!**\n- Save the highest pitch (the climax note) for **Chorus 2, the Bridge climax, or the Final Chorus**.\n- When the singer hits that peak note on the most critical lyric word (e.g. *'I will always love YOU'*, *'Someone like YOU'*), it triggers an involuntary goosebump response in the listener.\n\n3. **Octave Jumps on Final Choruses:**\n- In pop and rock arrangements, taking the final chorus up a full octave (or modulating up a half-step) provides the ultimate release of accumulated tension.",
      "examples": [
        "Register Lift: Adele's *Someone Like You* — Verse is low, intimate, rhythmic; Chorus leaps up a 6th into an exposed, soaring head-voice belt.",
        "The Money Note: Whitney Houston's *I Will Always Love You* modulation and high peak note on 'YOU'.",
        "Verse-to-Chorus Range: Verse sits in C4-G4; Chorus leaps into G4-E5."
      ],
      "mnemonics": [
        "Verses talk (low chest); Choruses soar (high mix/belt).",
        "The Money Note Law: Save the highest pitch for the emotional peak."
      ],
      "culturalNotes": [
        "In vocal acoustic physics, higher notes require greater vocal cord tension and subglottic air pressure, which the human brain automatically decodes as heightened emotional urgency."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In applying the principles of Design vocal range and register contrast, which composition technique best fulfills the musical goal?",
          "options": [
            "The higher vocal register naturally produces more acoustic energy and emotional intensity, signaling the song's primary hook (Design vocal range and register contrast)",
            "To make the song shorter (Design vocal range and register contrast)",
            "Because bass guitars cannot play high (Design vocal range and register contrast)",
            "Because low notes are not allowed in choruses (Design vocal range and register contrast)"
          ],
          "answerIndex": 0,
          "explanation": "Register elevation increases acoustic energy and emotional power."
        },
        {
          "prompt": "What is the 'Money Note' (climax peak note) in commercial songwriting?",
          "options": [
            "The single highest, most emotionally charged vocal note in the entire song, strategically placed at the dramatic climax (Design vocal range and register contrast)",
            "A low bass note (Design vocal range and register contrast)",
            "A drum solo (Design vocal range and register contrast)",
            "A note that costs money to sing (Design vocal range and register contrast)"
          ],
          "answerIndex": 0,
          "explanation": "The dramatic highest peak note of the track."
        },
        {
          "prompt": "Where should the climax peak note ideally be placed for maximum emotional impact?",
          "options": [
            "In the Bridge climax or the Final Chorus (Design vocal range and register contrast)",
            "During the fade-out (Design vocal range and register contrast)",
            "On the very first word of Verse 1 (Design vocal range and register contrast)",
            "In the intro guitar strum (Design vocal range and register contrast)"
          ],
          "answerIndex": 0,
          "explanation": "Bridge climax or final chorus delivers maximum payoff."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In composition and lyric craft for Design vocal range and register contrast, which artistic decision best serves the song?",
          "options": [
            "Low to mid conversational chest voice (Design vocal range and register contrast)",
            "Inaudible whisper (Design vocal range and register contrast)",
            "Whistle register scream (Design vocal range and register contrast)",
            "High falsetto belt (Design vocal range and register contrast)"
          ],
          "answerIndex": 0,
          "explanation": "Conversational chest voice supports intimate storytelling."
        },
        {
          "prompt": "What physical reason explains why listeners experience goosebumps when a singer hits a high belt note?",
          "options": [
            "The human brain instinctually interprets high-energy vocal cord pressure as primal emotional urgency (Design vocal range and register contrast)",
            "The temperature in the room drops (Design vocal range and register contrast)",
            "The speakers shake (Design vocal range and register contrast)",
            "High notes cause ear fatigue (Design vocal range and register contrast)"
          ],
          "answerIndex": 0,
          "explanation": "Evolutionary acoustic decoding of high-energy vocal strain."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What mistake occurs if Verse 1 is written in the singer's absolute highest vocal range?",
          "options": [
            "The lyrics will disappear (Design vocal range and register contrast)",
            "The song will be too quiet (Design vocal range and register contrast)",
            "The chorus will have nowhere higher to go, destroying the dynamic lift of the song (Design vocal range and register contrast)",
            "The guitar will go out of tune (Design vocal range and register contrast)"
          ],
          "answerIndex": 2,
          "explanation": "Leaves no headroom for chorus dynamic lift.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In Adele's 'Someone Like You', how is register contrast utilized between the verse and chorus?",
          "options": [
            "The verse is screaming and the chorus is whispered (Design vocal range and register contrast)",
            "The verse is low, speech-like and intimate; the chorus leaps into a vulnerable high head-mix register (Design vocal range and register contrast)",
            "Both sections use the same 2 notes (Design vocal range and register contrast)",
            "The chorus has no vocals (Design vocal range and register contrast)"
          ],
          "answerIndex": 1,
          "explanation": "Low conversational verse to high exposed chorus.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is 'tessitura' in vocal songwriting?",
          "options": [
            "The most acceptable and comfortable vocal range where the majority of a song's notes reside (Design vocal range and register contrast)",
            "A type of Italian pasta (Design vocal range and register contrast)",
            "A fast drum tempo (Design vocal range and register contrast)",
            "A guitar pedal (Design vocal range and register contrast)"
          ],
          "answerIndex": 0,
          "explanation": "Tessitura is the prevailing pitch range of a vocal piece.",
          "type": "multiple-choice"
        },
        {
          "prompt": "How does a final-chorus key change (truck driver's gear shift / modulation) affect vocal energy?",
          "options": [
            "It removes the bassline (Design vocal range and register contrast)",
            "It lowers the volume (Design vocal range and register contrast)",
            "It puts the audience to sleep (Design vocal range and register contrast)",
            "It shifts the entire melody up a half or whole step, pushing the singer into higher vocal strain and euphoric climax (Design vocal range and register contrast)"
          ],
          "answerIndex": 3,
          "explanation": "Modulation forces higher vocal energy and climax.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What lyric word should coincide with the climax peak note?",
          "options": [
            "Prepositions like 'of' or 'in' (Design vocal range and register contrast)",
            "Articles like 'the' or 'a' (Design vocal range and register contrast)",
            "The most emotionally pivotal thematic word of the entire song (Design vocal range and register contrast)",
            "Conjunctions like 'and' (Design vocal range and register contrast)"
          ],
          "answerIndex": 2,
          "explanation": "The thematic anchor word must carry the peak note.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Design vocal range and register contrast"
  },
  "songwriting-u4-l5": {
    "id": "songwriting-u4-l5",
    "unit": "songwriting-u4",
    "level": "intermediate",
    "objective": "Integrate melodic contour, motif architecture, rhythmic syncopation, and range contrast into a complete song melody workshop with natural speech prosody.",
    "difficulty": 1000,
    "prerequisites": [
      "songwriting-u4-l4"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "songwriting-u4-l1",
        "songwriting-u4-l2",
        "songwriting-u4-l3",
        "songwriting-u4-l4"
      ]
    },
    "presentation": {
      "explanation": "This capstone lesson integrates every melodic tool into a master songwriting framework: **Melodic Prosody (Aligning Melody with Spoken Language)**.\n\n1. **What is Melodic Prosody?**\n- Prosody means **the music supports the meaning and natural rhythm of the lyric**.\n- **The Golden Prosody Test:** Speak your lyrics out loud naturally as if telling a friend a secret. Notice which syllables naturally carry heavy stress (loud/high) and which are unstressed (quick/low).\n- **Bad Prosody (Unnatural Stress):** Putting a weak syllable on a high downbeat (e.g. singing 'to-DAY' as 'TO-day' or 'the CON-ver-sa-TION' as 'the con-ver-sa-tion-AL').\n- **Good Prosody:** Stressed syllables land on high melodic peaks and strong rhythmic beats!\n\n2. **The 4-Step Master Melody Checklist:**\n- **1. Contour:** Does the melody have clear shapes (arch, climb, cascade) rather than aimless meandering?\n- **2. Motif:** Is there a recognizable 3-to-5 note hook repeated with variation (A-A-B or Call/Response)?\n- **3. Rhythmic Pocket:** Does the verse syncopate while the chorus lands with bold held notes?\n- **4. Range & Climax:** Does the chorus sit 5 steps higher than the verse, with a single reserved Climax Note?",
      "examples": [
        "Natural Prosody: 'I CAN'T make you LOVE me if you DON'T' (Capitalized stresses match melodic peaks).",
        "Unnatural Prosody Error: Singing 'The WA-ter is COLD' with 'The' on high beat 1 ❌.",
        "Master Hook Integration: Max Martin's *...Baby One More Time* — 'My LONELINESS is KILLING me' (Motif + Stepwise + Syncopated push)."
      ],
      "mnemonics": [
        "Speak before you sing: If it sounds weird spoken, it will sound awkward sung.",
        "Stressed syllable = Stressed beat / High note."
      ],
      "culturalNotes": [
        "In the Brill Building and Nashville songwriting traditions, 'lyric prosody' is considered the ultimate craft metric: songs with perfect prosody feel conversational, honest, and timeless."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In applying the principles of Integrate melodic contour, which composition technique best fulfills the musical goal?",
          "options": [
            "The seamless alignment of natural spoken word stress with musical pitch peaks and rhythmic downbeats (Integrate melodic contour)",
            "Writing poems without music (Integrate melodic contour)",
            "Using classical rhyming dictionaries only (Integrate melodic contour)",
            "Singing in a foreign language (Integrate melodic contour)"
          ],
          "answerIndex": 0,
          "explanation": "Prosody is the marriage of natural speech stress with musical contour."
        },
        {
          "prompt": "How do you test a lyric line for natural prosody?",
          "options": [
            "Speak the sentence naturally at conversational volume and mark the syllables that naturally rise in pitch and volume (Integrate melodic contour)",
            "Play it backward on a synthesizer (Integrate melodic contour)",
            "Count the number of letters (Integrate melodic contour)",
            "Whisper every word (Integrate melodic contour)"
          ],
          "answerIndex": 0,
          "explanation": "Conversational speech testing reveals true stress patterns."
        },
        {
          "prompt": "Which of these lines demonstrates BAD (unnatural) prosody?",
          "options": [
            "Putting the weak preposition 'of' on the highest, loudest note of the chorus on beat 1 (Integrate melodic contour)",
            "Putting the word 'HEART' on the highest note (Integrate melodic contour)",
            "Singing 'LOVE' on beat 1 (Integrate melodic contour)",
            "Putting an unstressed syllable on an eighth-note upbeat (Integrate melodic contour)"
          ],
          "answerIndex": 0,
          "explanation": "Accenting weak functional words ('of', 'the') creates jarring, awkward prosody."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In composition and lyric craft for Unit 4, Lesson 5: Foundational & Structural Mastery, which artistic decision best serves the song?",
          "options": [
            "Because they are shorter (Integrate melodic contour)",
            "Because the music reinforces how humans naturally express authentic emotion through voice inflection (Integrate melodic contour)",
            "Because they avoid all rhyme (Integrate melodic contour)",
            "Because they use louder instruments (Integrate melodic contour)"
          ],
          "answerIndex": 1,
          "explanation": "Natural vocal inflection conveys authentic human truth."
        },
        {
          "prompt": "What is the primary role of the 4-step melody checklist in finishing a song?",
          "options": [
            "Ensuring contour, motif economy, rhythmic contrast, and range payoff work together harmoniously (Integrate melodic contour)",
            "Determining royalty percentages (Integrate melodic contour)",
            "Setting the guitar amplifier volume (Integrate melodic contour)",
            "Passing an exam (Integrate melodic contour)"
          ],
          "answerIndex": 0,
          "explanation": "Integrates contour, motifs, rhythm, and range into a unified craft."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What is the core takeaway of Unit 4 in FEARN Songwriting?",
          "options": [
            "Only learning to play piano scales (Integrate melodic contour)",
            "Crafting memorable melodies using intentional contour, motif architecture (Integrate melodic contour)",
            "Only writing drum loops (Integrate melodic contour)",
            "Only memorizing song lyrics (Integrate melodic contour)"
          ],
          "answerIndex": 1,
          "explanation": "Unit 4 master objective: Melody basics and craft.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In the phrase 'I want to hold your hand', which words naturally carry primary metric stress?",
          "options": [
            "'WANT', 'HOLD', and 'HAND' (Integrate melodic contour)",
            "'I' and 'to' (Integrate melodic contour)",
            "Every single word equally (Integrate melodic contour)",
            "'to' and 'your' (Integrate melodic contour)"
          ],
          "answerIndex": 0,
          "explanation": "'WANT', 'HOLD', 'HAND' carry semantic action stress.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What structural relationship between verse and chorus melody guarantees dynamic excitement?",
          "options": [
            "Both sections sharing the exact same 3 notes at the same pitch (Integrate melodic contour)",
            "Chorus whispered and verse screamed (Integrate melodic contour)",
            "Verse faster than chorus (Integrate melodic contour)",
            "Verse in lower conversational register with short syncopations -> Chorus elevated 5 scale steps with long soaring open vowel notes (Integrate melodic contour)"
          ],
          "answerIndex": 3,
          "explanation": "Range and rhythmic contrast creates explosive arrival.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why should open vowels (/eɪ/, /iː/, /oʊ/, /uː/) be chosen for the highest melody notes?",
          "options": [
            "They are the only vowels in English (Integrate melodic contour)",
            "They sound funny (Integrate melodic contour)",
            "They allow the singer's vocal tract to resonate freely without constricting the pharynx and vocal cords (Integrate melodic contour)",
            "They rhyme with everything (Integrate melodic contour)"
          ],
          "answerIndex": 2,
          "explanation": "Vowel formant physics: open vowels maximize acoustic resonance.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What did the Brill Building songwriting masters consider the hallmark of a hit song?",
          "options": [
            "A 10-minute guitar solo (Integrate melodic contour)",
            "An undeniable melodic motif that the listener can sing back accurately after hearing it just once (Integrate melodic contour)",
            "Expensive recording microphones (Integrate melodic contour)",
            "Complex polyrhythms (Integrate melodic contour)"
          ],
          "answerIndex": 1,
          "explanation": "Instant melodic recall on first listen.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 4, Lesson 5: Integrate melodic contour"
  },
  "songwriting-u6-l1": {
    "id": "songwriting-u6-l1",
    "unit": "songwriting-u6",
    "level": "advanced",
    "objective": "Distinguish chord tones (Root, 3rd, 5th, 7th) from non-chord tones (passing tones, suspensions 4->3, and expressive appoggiaturas), aligning melodic tension with emotional lyric moments.",
    "difficulty": 650,
    "presentation": {
      "explanation": "Welcome to Advanced Songwriting Unit 6: Chord-Melody Relationship! The interplay between vocal melody and underlying harmony is the emotional engine of great songwriting:\n\n1. Chord Tones (Stability & Rest):\n   - When a melody note belongs directly to the underlying chord triad/seventh:\n     - **Root (1)**: Absolute resolution, certainty, finality (*'Home' feeling*).\n     - **Third (3)**: Defines the emotional quality (Major = bright/triumphant, Minor = melancholy/vulnerable).\n     - **Fifth (5)**: Open, noble, spacious stability.\n     - **Major 7th / Dominant 7th**: Sophisticated bittersweet longing or bluesy momentum.\n\n2. Non-Chord Tones (Tension & Movement):\n   - **Passing Tone (PT)**: Stepwise bridge connecting two chord tones (e.g. over C major, moving C -> D -> E; D is a passing tone).\n   - **Suspension (Sus 4 -> 3)**: A note from a previous chord is held into a new chord on a strong downbeat and then resolves downward by a half/whole step (creates intense yearning!).\n   - **Appoggiatura**: An expressive non-chord tone struck on a heavy downbeat by leap, then resolving by step onto a chord tone (the secret of heart-wrenching ballad climaxes).\n\n3. The Prosodic Rule of Harmony:\n   - Place **stable chord tones** on words of resolution, triumph, and certainty ('always', 'home', 'mine').\n   - Place **tense non-chord tones (appoggiaturas, suspensions, 9ths)** on words of yearning, doubt, pain, and longing ('why', 'waiting', 'broken').",
      "examples": [
        {
          "target": "Yesterday (Paul McCartney / The Beatles)",
          "reading": "Opening word 'Yes-ter-day': 'Yes' hits G over F chord (an expressive 9th/appoggiatura) resolving down to F.",
          "translation": "Non-chord tone on downbeat creates instant melancholy longing."
        },
        {
          "target": "Hallelujah (Leonard Cohen)",
          "reading": "'The minor fall and the major lift': Melodic note matches the chord third (minor 3rd over Am, major 3rd over F).",
          "translation": "Literal harmonic prosody."
        },
        {
          "target": "Suspension 4-3 Resolution",
          "reading": "Over G major chord: Singing C on beat 1, resolving down to B on beat 2.",
          "translation": "Classic church / gospel yearning resolution."
        }
      ],
      "mnemonics": [
        "CHORD TONES = Grounded rest (Root, 3rd, 5th)!",
        "NON-CHORD TONES = Yearning & movement (Suspensions, Appoggiaturas, 9ths)!",
        "Match the tense word to the tense note on the downbeat!"
      ],
      "culturalNotes": [
        "In Berklee College of Music songwriting pedagogy, aligning melodic non-chord tone tension with lyrical emotional vulnerability is termed 'Harmonic Prosody' (Pat Pattison)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In applying the principles of Distinguish chord tones (Root, which composition technique best fulfills the musical goal?",
          "options": [
            "It makes the guitar louder. (Distinguish chord tones Root)",
            "It forces the song to change tempo. (Distinguish chord tones Root)",
            "It stops the song. (Distinguish chord tones Root)",
            "It creates an immediate emotional tug of heartache and poignant vulnerability before resolving into comforting rest. (Distinguish chord tones Root)"
          ],
          "answerIndex": 3,
          "explanation": "Appoggiaturas introduce accented expressive tension followed by cathartic resolution."
        },
        {
          "prompt": "Over a C Major chord (C - E - G), which of the following vocal notes is a 'chord tone'?",
          "options": [
            "A (Distinguish chord tones Root)",
            "F (Distinguish chord tones Root)",
            "E (Distinguish chord tones Root)",
            "D (Distinguish chord tones Root)"
          ],
          "answerIndex": 2,
          "explanation": "E is the 3rd of the C major triad (C-E-G)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In composition and lyric craft for Unit 6, Lesson 1: Foundational & Structural Mastery, which artistic decision best serves the song?",
          "options": [
            "He made a mistake that they kept on the record. (Distinguish chord tones Root)",
            "F major has no other notes. (Distinguish chord tones Root)",
            "To make it sound like heavy metal. (Distinguish chord tones Root)",
            "G is the non-chord 9th, creating an instant nostalgic ache that resolves downward to the root F on '-ter-day'. (Distinguish chord tones Root)"
          ],
          "answerIndex": 3,
          "explanation": "The 9th appoggiatura creates the signature wistful bittersweet emotion."
        },
        {
          "prompt": "What is a 4-3 suspension in chord-melody composition?",
          "options": [
            "Playing 4 chords in 3 seconds (Distinguish chord tones Root)",
            "A 4/3 time signature (Distinguish chord tones Root)",
            "Skipping the 4th line of a verse (Distinguish chord tones Root)",
            "Holding the 4th scale degree on a strong beat over a major chord before resolving it downward to the sweet 3rd (Distinguish chord tones Root)"
          ],
          "answerIndex": 3,
          "explanation": "4-3 suspension holds tension on the 4th before relaxing into the 3rd."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the chord tones and non-chord tones over an A Minor chord (A - C - E): A: Note C B: Note D resolving to C C: Note A D: Note B moving between A and C",
          "options": [
            "A: Minor 3rd Chord Tone | B: 4-3 Suspension Non-Chord Tone | C: Root Chord Tone | D: Passing Tone (Distinguish chord tones Root)",
            "All are roots (Distinguish chord tones Root)",
            "All are dominant 7ths (Distinguish chord tones Root)",
            "All are non-chord tones (Distinguish chord tones Root)"
          ],
          "answerIndex": 0,
          "explanation": "Harmonic analysis over Am chord.",
          "type": "multiple-choice"
        },
        {
          "prompt": "If your lyric line is 'I know for certain I am finally safe and sound', which melodic note choices best support the lyric prosody?",
          "options": [
            "Dissonant sharp-elevenths and unresolved flat-ninths (Distinguish chord tones Root)",
            "Whispering without pitch (Distinguish chord tones Root)",
            "Rapid chromatic non-chord runs (Distinguish chord tones Root)",
            "Stable chord tones (Root and 5th)"
          ],
          "answerIndex": 3,
          "explanation": "Certainty and safety are acoustically mirrored by grounded chord roots and fifths.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What chord tone defines whether a chord feels joyful/triumphant or sad/melancholic?",
          "options": [
            "The Octave (Distinguish chord tones Root)",
            "The 5th (Distinguish chord tones Root)",
            "The 3rd (Distinguish chord tones Root)",
            "The Root (Distinguish chord tones Root)"
          ],
          "answerIndex": 2,
          "explanation": "The third establishes major (happy) vs. minor (sad) tonality.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'To maximize emotional impact, place tense non-chord tones on _______ words and stable chord tones on _______ words.'",
          "options": [
            "loud / soft (Distinguish chord tones Root)",
            "vulnerable/yearning / resolving/conclusive (Distinguish chord tones Root)",
            "rhyming / unrhymed (Distinguish chord tones Root)",
            "short / long (Distinguish chord tones Root)"
          ],
          "answerIndex": 1,
          "explanation": "Harmonic prosody matches emotional tension to non-chord dissonance.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 6, Lesson 1: Distinguish chord tones (Root"
  },
  "songwriting-u6-l2": {
    "id": "songwriting-u6-l2",
    "unit": "songwriting-u6",
    "level": "advanced",
    "objective": "Design dynamic harmonic rhythm and employ modal color chords (minor iv, relative minor vi, and deceptive cadences) to elevate the emotional narrative arc of a song.",
    "difficulty": 675,
    "presentation": {
      "explanation": "Harmonic rhythm—the rate at which chords change per bar—and modal color chords control the listener's emotional pulse:\n\n1. Harmonic Rhythm Dynamics:\n   - **Slow Harmonic Rhythm (1 chord every 2-4 bars)**: Creates a spacious, hypnotic, cinematic landscape (ideal for storytelling verses).\n   - **Accelerating Harmonic Rhythm (Chords changing every 2 beats or every beat)**: Drives forward momentum, urgency, and excitement (ideal for pre-choruses and chorus climaxes!).\n\n2. The 3 Legendary Modal Color Chords:\n   - **The Minor iv Chord (Borrowing from Parallel Minor)**:\n     - In the key of C Major: $C - F - \\mathbf{Fm} - C$ (I - IV - **iv** - I).\n     - The $A\\flat$ in the Fm chord creates an unforgettable 'tearjerker' bittersweet heartache (used in *Creep*, *Desperado*, *In My Life*).\n   - **The Relative Minor vi (Subverting Expectation)**:\n     - Moving to the vi chord (Am in key of C) introduces darkness and introspective depth.\n   - **The Deceptive Cadence (V -> vi instead of V -> I)**:\n     - The listener expects resolution back to the tonic I chord, but you pivot to vi, prolonging the emotional journey and delaying gratification.",
      "examples": [
        {
          "target": "The 'Tearjerker' Minor iv Progression",
          "reading": "C -> E7 -> F -> Fm -> C (Radiohead 'Creep', The Beatles 'In My Life')",
          "translation": "Fm introduces the A-flat chromatic note that pulls heartstrings."
        },
        {
          "target": "Accelerating Harmonic Rhythm in Pre-Chorus",
          "reading": "Verse: 1 chord per bar. Pre-chorus: 2 chords per bar. Chorus: 1 chord every 2 beats!",
          "translation": "Creates massive physical propulsion into the chorus hook."
        },
        {
          "target": "Deceptive Cadence (V -> vi)",
          "reading": "G7 -> Am (instead of G7 -> C)",
          "translation": "Delays final closure and deepens narrative vulnerability."
        }
      ],
      "mnemonics": [
        "MINOR iv = The ultimate songwriting tearjerker (IV -> iv -> I)!",
        "ACCELERATE HARMONIC RHYTHM to launch the chorus explosion!",
        "DECEPTIVE CADENCE (V -> vi) keeps the story alive before the final resolution!"
      ],
      "culturalNotes": [
        "The minor iv chord borrowed from the parallel minor mode (known as modal mixture) has been the secret weapon of popular ballad writers from Schubert and Cole Porter to Billie Eilish and Olivia Rodrigo."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In applying the principles of Design dynamic harmonic rhythm and employ modal color chords (minor iv, which composition technique best fulfills the musical goal?",
          "options": [
            "A bittersweet, poignant 'tearjerker' ache caused by the chromatic half-step descent from the major 6th (Design dynamic harmonic rhythm and employ modal color chords minor iv)",
            "An electric shock (Design dynamic harmonic rhythm and employ modal color chords minor iv)",
            "A comedic clown effect (Design dynamic harmonic rhythm and employ modal color chords minor iv)",
            "A marching band fanfare (Design dynamic harmonic rhythm and employ modal color chords minor iv)"
          ],
          "answerIndex": 0,
          "explanation": "The half-step line A -> Ab -> G in IV -> iv -> I is the quintessential melancholy harmonic movement."
        },
        {
          "prompt": "How does accelerating harmonic rhythm in a pre-chorus affect the listener's psychology?",
          "options": [
            "It builds rapid kinetic momentum and anticipation, making the arrival of the chorus feel explosive and satisfying. (Design dynamic harmonic rhythm and employ modal color chords minor iv)",
            "It makes the listener fall asleep. (Design dynamic harmonic rhythm and employ modal color chords minor iv)",
            "It breaks the metronome. (Design dynamic harmonic rhythm and employ modal color chords minor iv)",
            "It causes the singer to lose their voice. (Design dynamic harmonic rhythm and employ modal color chords minor iv)"
          ],
          "answerIndex": 0,
          "explanation": "Faster chord turnover drives perceived tempo and urgency."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In composition and lyric craft for Unit 6, Lesson 2: Foundational & Structural Mastery, which artistic decision best serves the song?",
          "options": [
            "Playing a false note on purpose (Design dynamic harmonic rhythm and employ modal color chords minor iv)",
            "Tuning the guitar down a step (Design dynamic harmonic rhythm and employ modal color chords minor iv)",
            "Resolving the dominant V chord to the minor vi chord instead of the expected tonic I chord (Design dynamic harmonic rhythm and employ modal color chords minor iv)",
            "Ending a song in silence (Design dynamic harmonic rhythm and employ modal color chords minor iv)"
          ],
          "answerIndex": 2,
          "explanation": "V -> vi subverts expected tonic closure, prolonging harmonic tension."
        },
        {
          "prompt": "In the key of G Major, what chord is the borrowed minor iv?",
          "options": [
            "C Major (Design dynamic harmonic rhythm and employ modal color chords minor iv)",
            "D Major (Design dynamic harmonic rhythm and employ modal color chords minor iv)",
            "Em (Design dynamic harmonic rhythm and employ modal color chords minor iv)",
            "Cm (Design dynamic harmonic rhythm and employ modal color chords minor iv)"
          ],
          "answerIndex": 3,
          "explanation": "IV in G is C; minor iv is Cm."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the chord progression moves to their narrative emotional functions: A: IV -> iv -> I B: V -> vi (Deceptive) C: 1 chord per bar accelerating to 2 chords per bar D: I - V - vi - IV",
          "options": [
            "All mean blues scale (Design dynamic harmonic rhythm and employ modal color chords minor iv)",
            "All are jazz chords (Design dynamic harmonic rhythm and employ modal color chords minor iv)",
            "All are classical only (Design dynamic harmonic rhythm and employ modal color chords minor iv)",
            "A: Melancholy tearjerker | B: Subverted closure & yearning | C: Urgency build into chorus | D: Pop anthem foundation (Design dynamic harmonic rhythm and employ modal color chords minor iv)"
          ],
          "answerIndex": 3,
          "explanation": "Harmonic emotional functions.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Identify the song excerpt using the iconic minor iv progression:",
          "options": [
            "'Happy Birthday' (Design dynamic harmonic rhythm and employ modal color chords minor iv)",
            "'Jingle Bells' (Design dynamic harmonic rhythm and employ modal color chords minor iv)",
            "'There are places I remember / All my life...' (Design dynamic harmonic rhythm and employ modal color chords minor iv)",
            "'Twinkle Twinkle Little Star' (Design dynamic harmonic rhythm and employ modal color chords minor iv)"
          ],
          "answerIndex": 2,
          "explanation": "The Beatles' 'In My Life' features the classic D -> Dm -> A minor iv resolution.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why should the verse and chorus rarely share identical harmonic rhythms?",
          "options": [
            "Because drummers cannot play the same rhythm twice. (Design dynamic harmonic rhythm and employ modal color chords minor iv)",
            "Varying harmonic rhythm between sections creates contrast, preventing dynamic monotony and emphasizing the chorus hook. (Design dynamic harmonic rhythm and employ modal color chords minor iv)",
            "It is a copyright restriction. (Design dynamic harmonic rhythm and employ modal color chords minor iv)",
            "Because sharing chords is illegal. (Design dynamic harmonic rhythm and employ modal color chords minor iv)"
          ],
          "answerIndex": 1,
          "explanation": "Harmonic rhythm contrast distinguishes structural sections.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'To build maximum tension right before the chorus drop, hold a single _______ chord for an entire bar.'",
          "options": [
            "Dominant V (Design dynamic harmonic rhythm and employ modal color chords minor iv)",
            "Subdominant IV (Design dynamic harmonic rhythm and employ modal color chords minor iv)",
            "Diminished (Design dynamic harmonic rhythm and employ modal color chords minor iv)",
            "Tonic I (Design dynamic harmonic rhythm and employ modal color chords minor iv)"
          ],
          "answerIndex": 0,
          "explanation": "Holding the Dominant V maximizes harmonic tension before tonic chorus resolution.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 6, Lesson 2: The 'Tearjerker' Minor iv Prog"
  },
  "songwriting-u6-l3": {
    "id": "songwriting-u6-l3",
    "unit": "songwriting-u6",
    "level": "advanced",
    "objective": "Apply chord substitutions, secondary dominants (V7/V, V7/vi), and pedal points to enrich standard diatonic chord progressions without sacrificing pop accessibility.",
    "difficulty": 700,
    "presentation": {
      "explanation": "Chord substitutions add rich harmonic color to everyday 4-chord progressions without alienating commercial listeners:\n\n1. Secondary Dominants (The Gateway to Sophistication):\n   - A secondary dominant is the dominant 7th of a chord *other than the tonic*. It creates a compelling harmonic pull toward the target chord:\n     - **$V^7/V$ (Five of Five)**: In the key of C, the V chord is G. The dominant of G is **$D^7$**. Playing $C - \\mathbf{D^7} - G - C$ injects bright, energetic lift (the $F\\sharp$ leans hard into G!).\n     - **$V^7/vi$ (Five of Six)**: In the key of C, the vi chord is Am. The dominant of Am is **$E^7$**. Playing $C - \\mathbf{E^7} - Am - F$ creates tragic dramatic gravity (used in *House of the Rising Sun*, *Creep*).\n\n2. The Pedal Point (Hypnotic Emotional Anchor):\n   - A **pedal point** is a single recurring bass note held steady while chords shift above it:\n     - *Example*: Holding a low C bass note while playing $C / F / G / F$ over it ($C - F/C - G/C - F/C$).\n     - Psychological effect: Creates an atmospheric, dreamy sense of suspension and grounded stillness.\n\n3. Diatonic Chord Substitutions:\n   - **Substitute vi for I**: Replaces bright tonic with moody introspection ($Am$ instead of $C$).\n   - **Substitute ii for IV**: Replaces open subdominant with sophisticated jazz/R&B elegance ($Dm$ instead of $F$).",
      "examples": [
        {
          "target": "Secondary Dominant V7/vi in Action",
          "reading": "C -> E7 -> Am -> F (Key of C Major)",
          "translation": "E7 features G-sharp, pulling relentlessly into the A minor chord."
        },
        {
          "target": "Secondary Dominant V7/V (The Uplift)",
          "reading": "C -> D7 -> G7 -> C",
          "translation": "D7 features F-sharp, creating classic Broadway / pop optimism."
        },
        {
          "target": "Tonic Bass Pedal Point",
          "reading": "D -> G/D -> A/D -> G/D (U2 'With or Without You', Tom Petty 'Free Fallin')",
          "translation": "The unchanging bass anchor creates stadium-sized anthem atmosphere."
        }
      ],
      "mnemonics": [
        "V7/vi (E7 in C): The dramatic gateway to minor melancholy!",
        "V7/V (D7 in C): The bright golden elevator to the chorus!",
        "PEDAL POINT: Hold the low root while upper chords shift for anthem power!"
      ],
      "culturalNotes": [
        "U2's iconic guitar and bass arrangement in 'With or Without You' relies entirely on a continuous D pedal point throughout the entire song, providing hypnotic emotional glue across every section."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In applying the principles of Apply chord substitutions, which composition technique best fulfills the musical goal?",
          "options": [
            "D7 (Apply chord substitutions)",
            "G7 (Apply chord substitutions)",
            "B7 (Apply chord substitutions)",
            "E7 (Apply chord substitutions)"
          ],
          "answerIndex": 3,
          "explanation": "vi is A Minor; the dominant 7th of Am is E7."
        },
        {
          "prompt": "What is the psychological effect of using a 'Pedal Point' (holding the root bass note while chords change above it)?",
          "options": [
            "It makes the bass player tired. (Apply chord substitutions)",
            "It breaks the audio speaker. (Apply chord substitutions)",
            "It changes the key signature every measure. (Apply chord substitutions)",
            "It creates an expansive, hypnotic, anthem-like atmospheric tension that anchors the listener while harmonies evolve overhead. (Apply chord substitutions)"
          ],
          "answerIndex": 3,
          "explanation": "Pedal point grounds changing harmonies in a continuous acoustic resonance."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In composition and lyric craft for Unit 6, Lesson 3: Foundational & Structural Mastery, which artistic decision best serves the song?",
          "options": [
            "G -> A7 -> D7 -> G (Apply chord substitutions)",
            "G -> C -> D -> G (Apply chord substitutions)",
            "G -> Em -> C -> D (Apply chord substitutions)",
            "G -> Bm -> Em -> C (Apply chord substitutions)"
          ],
          "answerIndex": 0,
          "explanation": "V in G is D; dominant of D is A7 (V7/V)."
        },
        {
          "prompt": "If you replace the IV chord (F) with a ii chord (Dm) in the key of C Major, how does the musical mood change?",
          "options": [
            "It shifts from direct folk/pop brightness to smooth, sophisticated, introspective R&B/jazz warmth. (Apply chord substitutions)",
            "It becomes heavy metal. (Apply chord substitutions)",
            "It sounds like a siren. (Apply chord substitutions)",
            "There is no audible difference. (Apply chord substitutions)"
          ],
          "answerIndex": 0,
          "explanation": "The ii chord adds sophisticated mellow minor subdominant color."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the harmonic devices: V7/vi, V7/V, Tonic Pedal, ii-for-IV Substitution:",
          "options": [
            "All are out-of-tune notes (Apply chord substitutions)",
            "All are tempo markings (Apply chord substitutions)",
            "V7/vi: Tragic minor pull | V7/V: Bright energetic lift | Tonic Pedal: Hypnotic anthem anchor | ii-for-IV: Sophisticated R&B warmth (Apply chord substitutions)",
            "All mean drum beats (Apply chord substitutions)"
          ],
          "answerIndex": 2,
          "explanation": "Harmonic color and substitution mechanisms.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why does the E7 chord sound so powerful when leading into A Minor in a C Major song?",
          "options": [
            "It is a computer error. (Apply chord substitutions)",
            "Because E7 contains the chromatic leading tone G-sharp, which resolves with extreme tension up by a half-step into the root note A. (Apply chord substitutions)",
            "Because E is the first letter of Earth. (Apply chord substitutions)",
            "Because 7th chords are always louder. (Apply chord substitutions)"
          ],
          "answerIndex": 1,
          "explanation": "The chromatic leading tone G# -> A drives powerful resolution.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Identify the song that uses a continuous tonic pedal point to create stadium-sized intimacy:",
          "options": [
            "'With or Without You' (Apply chord substitutions)",
            "'Flight of the Bumblebee' (Apply chord substitutions)",
            "'Old MacDonald Had a Farm' (Apply chord substitutions)",
            "'The Star-Spangled Banner' (Apply chord substitutions)"
          ],
          "answerIndex": 0,
          "explanation": "Iconic modern rock masterpieces built on pedal points.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'A secondary dominant temporarily borrows a note outside the key signature to create a irresistible _______ toward the target chord.'",
          "options": [
            "silence (Apply chord substitutions)",
            "mistake (Apply chord substitutions)",
            "volume decrease (Apply chord substitutions)",
            "gravitational pull (Apply chord substitutions)"
          ],
          "answerIndex": 3,
          "explanation": "Secondary dominants create strong tonal gravity via chromatic leading tones.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 6, Lesson 3: Apply chord substitutions"
  },
  "songwriting-u6-l4": {
    "id": "songwriting-u6-l4",
    "unit": "songwriting-u6",
    "level": "advanced",
    "objective": "Craft singable melodic contours using smooth stepwise motion (conjunct) balanced by leap-and-recover principles (disjunct) and clean voice-leading across chord changes.",
    "difficulty": 725,
    "presentation": {
      "explanation": "A melody must be both **memorable** and **singable**. Great vocal melodies follow strict principles of contour and voice leading:\n\n1. Conjunct vs. Disjunct Melodic Motion:\n   - **Conjunct Motion (Stepwise)**: Moving to adjacent notes in the scale (e.g. C -> D -> E -> D -> C). Smooth, conversational, easy for human vocal cords to track.\n   - **Disjunct Motion (Leaps of a 4th, 5th, Octave)**: High drama, sudden emotional surge (e.g. the octave leap in *'Some-where over the rainbow'*).\n\n2. The Golden 'Leap-and-Recover' Principle:\n   - When a melody makes a wide upward leap (a 5th, 6th, or octave) into an emotional peak, it MUST **recover by stepping in the opposite direction** (downward stepwise motion):\n     - *Example*: Leap up from C4 to C5 on 'Some-where' -> recover step down to B4 on 'o-ver' and A4 on 'the rain-bow'.\n     - Psychological effect: Gives the vocal line structural balance and prevents the melody from feeling erratic or untethered.\n\n3. Voice Leading Across Chord Changes:\n   - When the underlying harmony moves from one chord to the next (e.g. $C \\to G$), the best vocal melody notes either:\n     - **Hold common tones** (notes shared by both chords, e.g. G is in both C and G major).\n     - **Move by smooth half-steps or whole-steps** (e.g. E over C moves down to D over G).\n   - Avoid awkward random vocal jumps across chord transitions!",
      "examples": [
        {
          "target": "Somewhere Over the Rainbow",
          "reading": "Octave leap up (C4 -> C5 on 'Some-where') followed immediately by stepwise descent (B4 -> G4 -> A4 -> B4 -> C5).",
          "translation": "The textbook masterclass in Leap-and-Recover."
        },
        {
          "target": "Let It Be (The Beatles)",
          "reading": "'When I find myself in times of trouble': Pure stepwise conjunct motion (G -> G -> G -> G -> A -> G -> E -> D).",
          "translation": "Conversational, effortless singability."
        },
        {
          "target": "Common Tone Voice Leading",
          "reading": "Holding the note E while chords shift underneath: Cmaj7 -> Am -> Fmaj7.",
          "translation": "The vocal note acts as harmonic thread connecting disparate chords."
        }
      ],
      "mnemonics": [
        "LEAP UP -> STEP DOWN (The Leap-and-Recover rule)!",
        "VERSES: Mostly stepwise conjunct motion (conversational)!",
        "CHORUS HOOK: Strategic leap to high emotional peak, then glide home!"
      ],
      "culturalNotes": [
        "Neurocognitive research in music perception reveals that the human brain processes melodies that follow the Leap-and-Recover principle with 60% higher retention and recall than unpredictable jagged intervals (deliberate practice)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In applying the principles of Craft singable melodic contours using smooth stepwise motion (conjunct) balanced by leap-and-recover principles (disjunct) and clean voice-leading across chord changes, which composition technique best fulfills the musical goal?",
          "options": [
            "Following a dramatic upward leap in pitch with smooth stepwise motion in the opposite (downward)",
            "Singing only two notes over and over (Craft singable melodic contours using smooth stepwise motion conjunct balanced by leapandrecover principles disjunct and clean voiceleading across chord changes)",
            "Changing key after every chorus (Craft singable melodic contours using smooth stepwise motion conjunct balanced by leapandrecover principles disjunct and clean voiceleading across chord changes)",
            "Jumping off the stage during a concert (Craft singable melodic contours using smooth stepwise motion conjunct balanced by leapandrecover principles disjunct and clean voiceleading across chord changes)"
          ],
          "answerIndex": 0,
          "explanation": "Leap-and-recover creates dramatic vocal excitement followed by natural resolution."
        },
        {
          "prompt": "Why is 'conjunct' (stepwise) motion essential in songwriting verses?",
          "options": [
            "It mimics natural human speech inflections, making lyrics intelligible, intimate, and effortless to sing. (Craft singable melodic contours using smooth stepwise motion conjunct balanced by leapandrecover principles disjunct and clean voiceleading across chord changes)",
            "Because verses cannot have harmony. (Craft singable melodic contours using smooth stepwise motion conjunct balanced by leapandrecover principles disjunct and clean voiceleading across chord changes)",
            "To save sheet music paper. (Craft singable melodic contours using smooth stepwise motion conjunct balanced by leapandrecover principles disjunct and clean voiceleading across chord changes)",
            "Because singers cannot sing high notes. (Craft singable melodic contours using smooth stepwise motion conjunct balanced by leapandrecover principles disjunct and clean voiceleading across chord changes)"
          ],
          "answerIndex": 0,
          "explanation": "Stepwise motion supports conversational speech prosody in storytelling verses."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In composition and lyric craft for Unit 6, Lesson 4: Foundational & Structural Mastery, which artistic decision best serves the song?",
          "options": [
            "A single sustained vocal pitch remains constant while the harmony shifts underneath, creating a sophisticated thread of emotional continuity. (Craft singable melodic contours using smooth stepwise motion conjunct balanced by leapandrecover principles disjunct and clean voiceleading across chord changes)",
            "It requires three singers. (Craft singable melodic contours using smooth stepwise motion conjunct balanced by leapandrecover principles disjunct and clean voiceleading across chord changes)",
            "It makes every chord identical. (Craft singable melodic contours using smooth stepwise motion conjunct balanced by leapandrecover principles disjunct and clean voiceleading across chord changes)",
            "It removes all melody. (Craft singable melodic contours using smooth stepwise motion conjunct balanced by leapandrecover principles disjunct and clean voiceleading across chord changes)"
          ],
          "answerIndex": 0,
          "explanation": "Common tones act as acoustic anchors across changing harmonic colors."
        },
        {
          "prompt": "Identify the famous melody opening with a dramatic octave leap followed by a stepwise descent:",
          "options": [
            "'Somewhere Over the Rainbow' (Craft singable melodic contours using smooth stepwise motion conjunct balanced by leapandrecover principles disjunct and clean voiceleading across chord changes)",
            "'Mary Had a Little Lamb' (Craft singable melodic contours using smooth stepwise motion conjunct balanced by leapandrecover principles disjunct and clean voiceleading across chord changes)",
            "'Three Blind Mice' (Craft singable melodic contours using smooth stepwise motion conjunct balanced by leapandrecover principles disjunct and clean voiceleading across chord changes)",
            "'Row Row Row Your Boat' (Craft singable melodic contours using smooth stepwise motion conjunct balanced by leapandrecover principles disjunct and clean voiceleading across chord changes)"
          ],
          "answerIndex": 0,
          "explanation": "Somewhere Over the Rainbow features the quintessential octave leap-and-recover."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the melodic motion concepts: Conjunct, Disjunct, Leap-and-Recover, Common Tone:",
          "options": [
            "All are rhythm values (Craft singable melodic contours using smooth stepwise motion conjunct balanced by leapandrecover principles disjunct and clean voiceleading across chord changes)",
            "Conjunct: Stepwise scale movement | Disjunct: Wide melodic leaps | Leap-and-Recover: Jump up then step down | Common Tone: Held note across changing chords (Craft singable melodic contours using smooth stepwise motion conjunct balanced by leapandrecover principles disjunct and clean voiceleading across chord changes)",
            "All mean playing drums (Craft singable melodic contours using smooth stepwise motion conjunct balanced by leapandrecover principles disjunct and clean voiceleading across chord changes)",
            "All are guitar tunings (Craft singable melodic contours using smooth stepwise motion conjunct balanced by leapandrecover principles disjunct and clean voiceleading across chord changes)"
          ],
          "answerIndex": 1,
          "explanation": "Melodic contour and voice leading definitions.",
          "type": "multiple-choice"
        },
        {
          "prompt": "If a chorus hook jumps up a major 6th on the word 'FLY', what should the subsequent two notes do for optimal vocal singability?",
          "options": [
            "Step downward smoothly by whole-step or half-step to resolve the tension gracefully (Craft singable melodic contours using smooth stepwise motion conjunct balanced by leapandrecover principles disjunct and clean voiceleading across chord changes)",
            "Leap up another octave (Craft singable melodic contours using smooth stepwise motion conjunct balanced by leapandrecover principles disjunct and clean voiceleading across chord changes)",
            "Drop to absolute silence (Craft singable melodic contours using smooth stepwise motion conjunct balanced by leapandrecover principles disjunct and clean voiceleading across chord changes)",
            "Scream without pitch (Craft singable melodic contours using smooth stepwise motion conjunct balanced by leapandrecover principles disjunct and clean voiceleading across chord changes)"
          ],
          "answerIndex": 0,
          "explanation": "Leap-and-recover mandates downward stepwise motion following the peak.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why do melodies that leap randomly in wide jagged intervals without resolution sound disjointed to listeners?",
          "options": [
            "It is a legal rule. (Craft singable melodic contours using smooth stepwise motion conjunct balanced by leapandrecover principles disjunct and clean voiceleading across chord changes)",
            "Because microphones reject jagged notes. (Craft singable melodic contours using smooth stepwise motion conjunct balanced by leapandrecover principles disjunct and clean voiceleading across chord changes)",
            "Because the piano keys break. (Craft singable melodic contours using smooth stepwise motion conjunct balanced by leapandrecover principles disjunct and clean voiceleading across chord changes)",
            "Because the human auditory cortex expects vocal music to follow vocal tract physiological physics (breath, tension, release)"
          ],
          "answerIndex": 3,
          "explanation": "Human auditory cognition expects organic vocal tract physics.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'Great songwriters use conjunct motion to _______ and disjunct leaps to _______.'",
          "options": [
            "play guitar / play bass (Craft singable melodic contours using smooth stepwise motion conjunct balanced by leapandrecover principles disjunct and clean voiceleading across chord changes)",
            "end the song / start the song (Craft singable melodic contours using smooth stepwise motion conjunct balanced by leapandrecover principles disjunct and clean voiceleading across chord changes)",
            "tell the conversational story / deliver the emotional climax (Craft singable melodic contours using smooth stepwise motion conjunct balanced by leapandrecover principles disjunct and clean voiceleading across chord changes)",
            "write rhymes / count syllables (Craft singable melodic contours using smooth stepwise motion conjunct balanced by leapandrecover principles disjunct and clean voiceleading across chord changes)"
          ],
          "answerIndex": 2,
          "explanation": "Stepwise tells the story; leaps deliver the peak.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 6, Lesson 4: Somewhere Over the Rainbow"
  },
  "songwriting-u6-l5": {
    "id": "songwriting-u6-l5",
    "unit": "songwriting-u6",
    "level": "advanced",
    "objective": "Demonstrate comprehensive Unit 6 chord-melody integration by analyzing and composing a complete multi-section song harmonic arrangement featuring verse-to-chorus harmonic lift, secondary dominants, and bridge modal reharmonization.",
    "difficulty": 750,
    "presentation": {
      "explanation": "In this Master Capstone for Unit 6, we synthesize all chord-melody principles into a complete, professional 3-part composition arrangement:\n\n1. The Complete Harmonic Architecture:\n   - **Verse (The Grounded Narrative — Key of C Major)**:\n     - Progression: $C - Em/B - Am - F$ (I - iii - vi - IV with descending bass line $C \\to B \\to A \\to F$).\n     - Melody: Low-range, intimate conjunct stepwise motion; vocal notes rest on root and 3rds on strong beats.\n   - **Pre-Chorus (The Accelerating Ascent & Secondary Dominant)**:\n     - Progression: $Dm - Dm/C - \\mathbf{D^7/F\\sharp} - G^{\\text{sus4}} - G^7$ (ii - $V^7/V$ - $V^{\\text{sus4}} \\to V^7$).\n     - Melody: Rapid accelerating harmonic rhythm; melody climbs upward toward high G note; $F\\sharp$ on the secondary dominant $D^7$ injects electrifying forward momentum!\n   - **Chorus (The Anthem Explosion & Appoggiatura Climax)**:\n     - Progression: $C - G/B - Am - F$ (I - V/B - vi - IV) with tonic pedal bass.\n     - Melody: High vocal register; opening word leaps up a major 6th hitting a poignant 9th appoggiatura (D over C chord) before cascading downward via leap-and-recover.\n   - **Bridge (The Emotional Twist — Reharmonization & Minor iv)**:\n     - Progression: $F - \\mathbf{Fm} - C/E - A^7 - Dm - G^7 - C$ (IV - **iv** - I/3 - $V^7/ii$ - ii - V - I).\n     - The **minor iv (Fm)** delivers the heartbreaking emotional revelation, followed by $A^7$ pulling into $Dm$ and soaring into the final triumphant chorus!\n\n2. The Golden Test of Mastery:\n   - Every single chord, note, and lyric syllable serves a unified emotional narrative purpose (deliberate practice).",
      "examples": [
        {
          "target": "Full Song Harmonic Roadmap (Key of C Major)",
          "reading": "Verse (Descending Bass) -> Pre-Chorus (D7 Secondary Dominant) -> Chorus (High Leap Hook) -> Bridge (Fm Minor iv Tearjerker).",
          "translation": "A complete commercial and artistic songwriting masterwork."
        },
        {
          "target": "The Emotional Bridge Pivot",
          "reading": "F -> Fm -> C/E -> A7 -> Dm -> G7",
          "translation": "Seamless modal mixture and secondary dominant voice-leading."
        },
        {
          "target": "Harmonic Prosody Alignment",
          "reading": "Lyric 'I let you go' lands on the Fm minor iv chord's A-flat note.",
          "translation": "Perfect acoustic and lyrical fusion."
        }
      ],
      "mnemonics": [
        "VERSE: Grounded descending bass line (C -> B -> A -> F)!",
        "PRE-CHORUS: D7 secondary dominant launches the rocket!",
        "CHORUS: High leap hook with 9th appoggiatura!",
        "BRIDGE: Fm minor iv chord delivers the emotional gut-punch!"
      ],
      "culturalNotes": [
        "This exact multi-sectional harmonic architecture has powered historic multi-platinum hits from Queen's 'Bohemian Rhapsody' and Adele's 'Someone Like You' to Elton John's 'Tiny Dancer'."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In applying the principles of Demonstrate comprehensive Unit 6 chord-melody integration by analyzing and composing a complete multi-section song harmonic arrangement featuring verse-to-chorus harmonic lift, which composition technique best fulfills the musical goal?",
          "options": [
            "It introduces the chromatic note F-sharp, creating intense upward melodic drive and pulling irresistibly into the dominant G chord right before the chorus explosion. (Demonstrate comprehensive Unit 6 chordmelody integration by analyzing and composing a complete multisection song harmonic arrangement featuring versetochorus harmonic lift)",
            "It turns off the drums. (Demonstrate comprehensive Unit 6 chordmelody integration by analyzing and composing a complete multisection song harmonic arrangement featuring versetochorus harmonic lift)",
            "It signals the end of the song. (Demonstrate comprehensive Unit 6 chordmelody integration by analyzing and composing a complete multisection song harmonic arrangement featuring versetochorus harmonic lift)",
            "It changes the time signature to 5/4. (Demonstrate comprehensive Unit 6 chordmelody integration by analyzing and composing a complete multisection song harmonic arrangement featuring versetochorus harmonic lift)"
          ],
          "answerIndex": 0,
          "explanation": "D7 (V7/V) provides the classic harmonic propulsion into the dominant G chord."
        },
        {
          "prompt": "Why is placing the lyric 'I let you go' on the borrowed minor iv (Fm) chord in the bridge a masterstroke of harmonic prosody?",
          "options": [
            "Because the chromatic sadness of the Fm chord (featuring the A-flat note)",
            "Because Fm is the fastest chord on piano. (Demonstrate comprehensive Unit 6 chordmelody integration by analyzing and composing a complete multisection song harmonic arrangement featuring versetochorus harmonic lift)",
            "Because the singer's name is Fm. (Demonstrate comprehensive Unit 6 chordmelody integration by analyzing and composing a complete multisection song harmonic arrangement featuring versetochorus harmonic lift)",
            "There is no connection between lyric and chord. (Demonstrate comprehensive Unit 6 chordmelody integration by analyzing and composing a complete multisection song harmonic arrangement featuring versetochorus harmonic lift)"
          ],
          "answerIndex": 0,
          "explanation": "The minor iv chord's intrinsic melancholy aligns perfectly with the grief of letting go."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In composition and lyric craft for Unit 6, Lesson 5: Foundational & Structural Mastery, which artistic decision best serves the song?",
          "options": [
            "It eliminates vocal harmony. (Demonstrate comprehensive Unit 6 chordmelody integration by analyzing and composing a complete multisection song harmonic arrangement featuring versetochorus harmonic lift)",
            "It creates an unhurried, natural sense of progression and introspection that guides the listener smoothly through narrative exposition. (Demonstrate comprehensive Unit 6 chordmelody integration by analyzing and composing a complete multisection song harmonic arrangement featuring versetochorus harmonic lift)",
            "It speeds up the song. (Demonstrate comprehensive Unit 6 chordmelody integration by analyzing and composing a complete multisection song harmonic arrangement featuring versetochorus harmonic lift)",
            "It makes the guitar sound like a trumpet. (Demonstrate comprehensive Unit 6 chordmelody integration by analyzing and composing a complete multisection song harmonic arrangement featuring versetochorus harmonic lift)"
          ],
          "answerIndex": 1,
          "explanation": "Stepwise descending bass lines provide elegant narrative momentum."
        },
        {
          "prompt": "What technique prevents the chorus melody from feeling repetitive after 4 bars?",
          "options": [
            "Varying the second pass with an extended appoggiatura or deceptive harmonic substitution (Demonstrate comprehensive Unit 6 chordmelody integration by analyzing and composing a complete multisection song harmonic arrangement featuring versetochorus harmonic lift)",
            "Stopping the music completely (Demonstrate comprehensive Unit 6 chordmelody integration by analyzing and composing a complete multisection song harmonic arrangement featuring versetochorus harmonic lift)",
            "Changing languages (Demonstrate comprehensive Unit 6 chordmelody integration by analyzing and composing a complete multisection song harmonic arrangement featuring versetochorus harmonic lift)",
            "Shouting as loud as possible (Demonstrate comprehensive Unit 6 chordmelody integration by analyzing and composing a complete multisection song harmonic arrangement featuring versetochorus harmonic lift)"
          ],
          "answerIndex": 0,
          "explanation": "Deceptive resolution or melodic variation revitalizes repeated chorus sections."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What core musical, harmonic, and compositional competencies were mastered across Songwriting Unit 6?",
          "options": [
            "Chord tones vs. non-chord tones (appoggiaturas and suspensions for emotional prosody)",
            "Synthesizer patch programming only (Demonstrate comprehensive Unit 6 chordmelody integration by analyzing and composing a complete multisection song harmonic arrangement featuring versetochorus harmonic lift)",
            "Vinyl record pressing only (Demonstrate comprehensive Unit 6 chordmelody integration by analyzing and composing a complete multisection song harmonic arrangement featuring versetochorus harmonic lift)",
            "Tour bus routing only (Demonstrate comprehensive Unit 6 chordmelody integration by analyzing and composing a complete multisection song harmonic arrangement featuring versetochorus harmonic lift)"
          ],
          "answerIndex": 0,
          "explanation": "Unit 6 comprehensive chord-melody integration, harmonic prosody, and voice-leading mastery.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Synthesize the 3 golden laws of melody and harmony in professional songwriting:",
          "options": [
            "1. Play as fast as possible; 2. Use only one chord; 3. Never sing high notes (Demonstrate comprehensive Unit 6 chordmelody integration by analyzing and composing a complete multisection song harmonic arrangement featuring versetochorus harmonic lift)",
            "1. Avoid all rhymes; 2. Never play minor chords; 3. Mute the bass (Demonstrate comprehensive Unit 6 chordmelody integration by analyzing and composing a complete multisection song harmonic arrangement featuring versetochorus harmonic lift)",
            "1. Copy existing songs; 2. Disregard tempo; 3. Sing without melody (Demonstrate comprehensive Unit 6 chordmelody integration by analyzing and composing a complete multisection song harmonic arrangement featuring versetochorus harmonic lift)",
            "1. Match lyric emotional vulnerability to non-chord dissonance; 2. Accelerate harmonic rhythm into the chorus; 3. Use leap-and-recover contours for singable hooks (Demonstrate comprehensive Unit 6 chordmelody integration by analyzing and composing a complete multisection song harmonic arrangement featuring versetochorus harmonic lift)"
          ],
          "answerIndex": 3,
          "explanation": "The core tenets of chord-melody mastery.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why does great songwriting require both artistic emotional intuition and rigorous harmonic architecture?",
          "options": [
            "Because computer algorithms require sheet music. (Demonstrate comprehensive Unit 6 chordmelody integration by analyzing and composing a complete multisection song harmonic arrangement featuring versetochorus harmonic lift)",
            "To satisfy copyright attorneys. (Demonstrate comprehensive Unit 6 chordmelody integration by analyzing and composing a complete multisection song harmonic arrangement featuring versetochorus harmonic lift)",
            "Because intuition provides authentic raw emotion, while harmonic architecture gives that emotion structural resonance and enduring impact in human auditory memory. (Demonstrate comprehensive Unit 6 chordmelody integration by analyzing and composing a complete multisection song harmonic arrangement featuring versetochorus harmonic lift)",
            "It does not; songs are completely random. (Demonstrate comprehensive Unit 6 chordmelody integration by analyzing and composing a complete multisection song harmonic arrangement featuring versetochorus harmonic lift)"
          ],
          "answerIndex": 2,
          "explanation": "Structure and emotion unite to create enduring art.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the next frontier of Songwriting mastery in Unit 7?",
          "options": [
            "Buying expensive microphones (Demonstrate comprehensive Unit 6 chordmelody integration by analyzing and composing a complete multisection song harmonic arrangement featuring versetochorus harmonic lift)",
            "Guided Writing Exercises with Concrete Feedback Prompts (Demonstrate comprehensive Unit 6 chordmelody integration by analyzing and composing a complete multisection song harmonic arrangement featuring versetochorus harmonic lift)",
            "Signing a record deal (Demonstrate comprehensive Unit 6 chordmelody integration by analyzing and composing a complete multisection song harmonic arrangement featuring versetochorus harmonic lift)",
            "Creating album cover art (Demonstrate comprehensive Unit 6 chordmelody integration by analyzing and composing a complete multisection song harmonic arrangement featuring versetochorus harmonic lift)"
          ],
          "answerIndex": 1,
          "explanation": "Unit 7 focuses on guided full-song writing exercises with concrete feedback prompts.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 6, Lesson 5: Full Song Harmonic Roadmap (Ke"
  },
  "songwriting-u7-l1": {
    "id": "songwriting-u7-l1",
    "unit": "songwriting-u7",
    "level": "master",
    "objective": "Engineer an undeniable commercial chorus from a high-concept title, anchoring the central lyrical focal point to the highest melodic pitch and strongest metric downbeat.",
    "presentation": {
      "explanation": "Welcome to Master Songwriting Unit 7: Guided Writing Exercises with Concrete Feedback Prompts! In this master unit, we transition from theoretical building blocks to **end-to-end song craftsmanship against professional industry rubrics**:\n\n1. The Concept-to-Chorus Anchor:\n   - Every legendary pop, rock, or folk song begins with a **High-Concept Hook/Title** (e.g., 'Rolling in the Deep', 'Hotel California', 'Fast Car', 'Fix You').\n   - **The Chorus Architecture Principle**:\n     - The title MUST appear in the chorus (usually as line 1, line 4, or the final punchline).\n     - The highest melodic note of the chorus (the vocal peak) must align with the most emotionally charged keyword in the title.\n     - The harmonic rhythm should settle on broad, stable diatonic anchors (I, IV, V, vi) to create instant singability.\n\n2. The 4-Line Chorus Template:\n   - *Line 1*: Establish the core hook/title statement.\n   - *Line 2*: Deepen the emotional consequence or image.\n   - *Line 3*: Internal rhyme or rhythmic acceleration creating dynamic tension.\n   - *Line 4*: Climax repetition or final resolving payoff with title anchor.",
      "examples": [
        {
          "target": "Chorus Anchor: 'Paper Lanterns on the River' (Key of G major | IV - I - V - vi | High G5 on 'Lanterns').",
          "reading": "Paper Lanterns on the River",
          "translation": "High-concept title anchoring to high melodic pitch on the downbeat."
        },
        {
          "target": "Line 1: We lit the paper lanterns on the river / Line 2: And watched our shadows drown beneath the foam / Line 3: The winter air was cold, our hands began to shiver / Line 4: But paper lanterns brought the morning home.",
          "reading": "4-line chorus structure",
          "translation": "AABB/ABAB lyric with title repetition and dynamic lift."
        }
      ],
      "mnemonics": [
        "TITLE IN THE CHORUS: Never make the listener guess the song name!",
        "PEAK NOTE ON PEAK WORD: Match vocal apex to the emotional keyword!",
        "BROAD HARMONY: Solid 4-chord foundation for chorus singability!"
      ],
      "culturalNotes": [
        "In Nashville and Los Angeles publisher listening sessions (A&R pitch meetings), decision-makers decide whether to greenlight a song within the first 10 seconds of the chorus arriving."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In applying the principles of Engineer an undeniable commercial chorus from a high-concept title, which composition technique best fulfills the musical goal?",
          "options": [
            "Hidden in the middle of line 2 only (Engineer an undeniable commercial chorus from a highconcept title)",
            "Never spoken or sung in the song (Engineer an undeniable commercial chorus from a highconcept title)",
            "Only in the instrumental guitar solo (Engineer an undeniable commercial chorus from a highconcept title)",
            "In the opening line, the final punchline, or both, aligned with the melodic peak (Engineer an undeniable commercial chorus from a highconcept title)"
          ],
          "answerIndex": 3,
          "explanation": "Anchoring the title at the structural edges of the chorus reinforces immediate listener recall."
        },
        {
          "prompt": "What is the primary function of the chorus compared to the verse?",
          "options": [
            "The chorus has no rhymes (Engineer an undeniable commercial chorus from a highconcept title)",
            "The chorus is quieter than the verse (Engineer an undeniable commercial chorus from a highconcept title)",
            "The chorus is the universal emotional summary and melodic peak, while the verse tells the specific narrative story (Engineer an undeniable commercial chorus from a highconcept title)",
            "The chorus gives technical background data (Engineer an undeniable commercial chorus from a highconcept title)"
          ],
          "answerIndex": 2,
          "explanation": "Verse = Specific Narrative Details; Chorus = Universal Emotional Core."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In composition and lyric craft for Unit 7, Lesson 1: Foundational & Structural Mastery, which artistic decision best serves the song?",
          "options": [
            "A single monotonous drone chord with no chord changes for 3 minutes (Engineer an undeniable commercial chorus from a highconcept title)",
            "Random microtonal tuning (Engineer an undeniable commercial chorus from a highconcept title)",
            "Total silence (Engineer an undeniable commercial chorus from a highconcept title)",
            "IV - I - V - vi (C - G - D - Em in G major)"
          ],
          "answerIndex": 3,
          "explanation": "IV - I - V - vi is one of the most powerful emotive pop/rock chorus progressions in modern music."
        },
        {
          "prompt": "Why should the highest vocal pitch of the song generally occur in the chorus rather than the verse?",
          "options": [
            "Because singers cannot sing low notes (Engineer an undeniable commercial chorus from a highconcept title)",
            "Because verses must be whispered (Engineer an undeniable commercial chorus from a highconcept title)",
            "To save guitar strings (Engineer an undeniable commercial chorus from a highconcept title)",
            "Higher vocal register naturally carries greater acoustic energy and emotional urgency, elevating the chorus above the narrative baseline (Engineer an undeniable commercial chorus from a highconcept title)"
          ],
          "answerIndex": 3,
          "explanation": "Higher pitch activates vocal tract formant resonance and signals emotional climax."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the chorus architectural components: Title placement, Melodic apex, Harmonic rhythm, Lyric scope:",
          "options": [
            "All mean whisper softly (Engineer an undeniable commercial chorus from a highconcept title)",
            "All mean play guitar solos (Engineer an undeniable commercial chorus from a highconcept title)",
            "All are drum rudiments (Engineer an undeniable commercial chorus from a highconcept title)",
            "Title placement: Line 1 or 4 | Melodic apex: On core keyword | Harmonic rhythm: Stable 1-2 chords/bar | Lyric scope: Universal emotional truth (Engineer an undeniable commercial chorus from a highconcept title)"
          ],
          "answerIndex": 3,
          "explanation": "Chorus design architecture matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Evaluate this draft lyric: 'I walked down the street and bought some bread, then I went to the store and scratched my head.' Why does this fail as a chorus?",
          "options": [
            "It is too poetic (Engineer an undeniable commercial chorus from a highconcept title)",
            "It has too many metaphors (Engineer an undeniable commercial chorus from a highconcept title)",
            "It contains mundane, hyper-specific narrative actions without emotional stakes, universal resonance, or a memorable thematic hook (Engineer an undeniable commercial chorus from a highconcept title)",
            "It is in 4/4 time (Engineer an undeniable commercial chorus from a highconcept title)"
          ],
          "answerIndex": 2,
          "explanation": "Mundane narrative belongs in a verse (if anywhere), not in a universal chorus.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the 'Rule of Three' in chorus hook design?",
          "options": [
            "Using 3 different guitars (Engineer an undeniable commercial chorus from a highconcept title)",
            "Repeating a key melodic/lyric motif three times before delivering a resolving punchline variation on the fourth iteration (Engineer an undeniable commercial chorus from a highconcept title)",
            "Singing in 3 languages (Engineer an undeniable commercial chorus from a highconcept title)",
            "Writing in 3/4 time signature only (Engineer an undeniable commercial chorus from a highconcept title)"
          ],
          "answerIndex": 1,
          "explanation": "The Rule of Three builds hypnotic familiarity before delivering a satisfying resolution.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete the songwriting rule: 'Verses develop the question; the chorus delivers the _______.'",
          "options": [
            "answer and emotional core (Engineer an undeniable commercial chorus from a highconcept title)",
            "fade out (Engineer an undeniable commercial chorus from a highconcept title)",
            "copyright notice (Engineer an undeniable commercial chorus from a highconcept title)",
            "guitar solo (Engineer an undeniable commercial chorus from a highconcept title)"
          ],
          "answerIndex": 0,
          "explanation": "Verses ask the question/set the scene; the chorus provides the emotional answer.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 7, Lesson 1: Chorus Anchor: 'Paper Lanterns"
  },
  "songwriting-u7-l2": {
    "id": "songwriting-u7-l2",
    "unit": "songwriting-u7",
    "level": "master",
    "objective": "Construct immersive narrative verses using Pat Pattison's Object Writing methodology and sensory grounding (sight, sound, touch, smell, taste, body/organic motion) to create tangible scenes.",
    "presentation": {
      "explanation": "Great verses do not tell the listener what to feel — they **show the listener physical objects and tactile sensations** that trigger involuntary emotional resonance:\n\n1. Sensory Grounding & Object Writing (Pat Pattison Framework):\n   - When drafting a verse, engage all **7 Sensory Channels**:\n     - **Visual (Sight)**: Colors, light angles, cracks, rust (*amber neon buzzing in the puddle*).\n     - **Auditory (Sound)**: Pitch, volume, timbre (*gravel crunching under worn boots*).\n     - **Tactile (Touch)**: Texture, temperature, pressure (*cold porcelain mug in shivering palms*).\n     - **Olfactory & Gustatory (Smell & Taste)**: Bitter coffee, ozone before rain, stale tobacco.\n     - **Kinesthetic & Organic (Body Sensation)**: Heart pounding in ribs, hollow stomach, tight throat.\n\n2. Verse Melodic Pacing:\n   - Keep verse melodies in the lower-to-middle vocal register (saving high notes for the chorus).\n   - Use conversational speech rhythm and tighter syllabic density to convey storytelling details.\n\n3. The 'Show, Don't Tell' Transformation:\n   - *Tell (Weak)*: 'I was really sad and lonely in my cold apartment.'\n   - *Show (Master)*: 'Three empty coffee mugs on the radiator; rain streaking down the single pane.'",
      "examples": [
        {
          "target": "Verse Excerpt: 'A chipped blue mug on the windowsill / The radiator clanking in the hall / Your denim jacket on the kitchen chair / Casts a long shadow on the bedroom wall.'",
          "reading": "Sensory verse scaffolding",
          "translation": "Tactile, auditory, and visual sensory grounding."
        },
        {
          "target": "Transformation: Replace 'I was nervous before meeting you' with 'My knuckles white against the steering wheel; cold sweat burning in the collar of my shirt.'",
          "reading": "Organic kinesthetic showing",
          "translation": "Kinesthetic emotional projection."
        }
      ],
      "mnemonics": [
        "ENGAGE THE 7 SENSES: Sight, Sound, Touch, Smell, Taste, Kinesthetic, Organic!",
        "SHOW, DON'T TELL: Concrete objects over abstract adjectives!",
        "LOWER REGISTER IN VERSE: Save vocal altitude for the chorus!"
      ],
      "culturalNotes": [
        "Legendary songwriters like Joni Mitchell, Bruce Springsteen, and Bob Dylan anchor historical masterpieces (e.g. 'Thunder Road', 'A Case of You') with visceral physical artifacts—screen doors slamming, dress waving, blue bandana, screen doors."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In applying the principles of Construct immersive narrative verses using Pat Pattison's Object Writing methodology and sensory grounding (sight, which composition technique best fulfills the musical goal?",
          "options": [
            "'The screen door slammed, Mary's dress swayed, like a vision she danced across the porch as the radio played.' (Construct immersive narrative verses using Pat Pattisons Object Writing methodology and sensory grounding sight)",
            "'We were having an awesome time in the summer.' (Construct immersive narrative verses using Pat Pattisons Object Writing methodology and sensory grounding sight)",
            "'I felt very happy when I saw my girlfriend outside.' (Construct immersive narrative verses using Pat Pattisons Object Writing methodology and sensory grounding sight)",
            "'Things were good and the weather was nice today.' (Construct immersive narrative verses using Pat Pattisons Object Writing methodology and sensory grounding sight)"
          ],
          "answerIndex": 0,
          "explanation": "Physical sensory details (screen door slamming, dress swaying, porch, radio) evoke visceral emotion."
        },
        {
          "prompt": "Why should verses generally utilize a lower melodic tessitura (pitch range) than the chorus?",
          "options": [
            "To establish an intimate, conversational storytelling dynamic and create massive dynamic contrast when the chorus explodes into the upper register (Construct immersive narrative verses using Pat Pattisons Object Writing methodology and sensory grounding sight)",
            "Because verse words cannot be sung on high notes (Construct immersive narrative verses using Pat Pattisons Object Writing methodology and sensory grounding sight)",
            "To make the song shorter (Construct immersive narrative verses using Pat Pattisons Object Writing methodology and sensory grounding sight)",
            "To prevent the drummer from playing too loudly (Construct immersive narrative verses using Pat Pattisons Object Writing methodology and sensory grounding sight)"
          ],
          "answerIndex": 0,
          "explanation": "Register contrast between verse and chorus creates dynamic musical release."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In composition and lyric craft for Unit 7, Lesson 2: Foundational & Structural Mastery, which artistic decision best serves the song?",
          "options": [
            "I felt heartbroken and started crying in the living room (Construct immersive narrative verses using Pat Pattisons Object Writing methodology and sensory grounding sight)",
            "Love hurts and relationships are difficult sometimes (Construct immersive narrative verses using Pat Pattisons Object Writing methodology and sensory grounding sight)",
            "Two airline ticket stubs on the counter, the smell of damp pine needles through the cracked front door, and your car headlights vanishing down the driveway (Construct immersive narrative verses using Pat Pattisons Object Writing methodology and sensory grounding sight)",
            "My ex-partner moved away and I was unhappy (Construct immersive narrative verses using Pat Pattisons Object Writing methodology and sensory grounding sight)"
          ],
          "answerIndex": 2,
          "explanation": "Specific physical artifacts (ticket stubs, pine scent, vanishing headlights) paint a vivid cinematic scene."
        },
        {
          "prompt": "What is 'organic sensation' in Pat Pattison's sensory writing framework?",
          "options": [
            "Eating organic vegetables (Construct immersive narrative verses using Pat Pattisons Object Writing methodology and sensory grounding sight)",
            "Playing acoustic instruments only (Construct immersive narrative verses using Pat Pattisons Object Writing methodology and sensory grounding sight)",
            "Singing without autotune (Construct immersive narrative verses using Pat Pattisons Object Writing methodology and sensory grounding sight)",
            "Internal somatic bodily awareness such as heartbeat, muscle tension, breathlessness, nausea, or dizziness (Construct immersive narrative verses using Pat Pattisons Object Writing methodology and sensory grounding sight)"
          ],
          "answerIndex": 3,
          "explanation": "Organic sense refers to internal visceral somatic bodily awareness."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the sensory lines to their dominant sensory channel: 'Amber neon buzzing in the puddle', 'Bitter grounds between my teeth', 'Cold vinyl sticking to my shoulder', 'Chest tightening with every breath':",
          "options": [
            "All are theoretical (Construct immersive narrative verses using Pat Pattisons Object Writing methodology and sensory grounding sight)",
            "All are guitar chords (Construct immersive narrative verses using Pat Pattisons Object Writing methodology and sensory grounding sight)",
            "Neon buzzing: Visual/Auditory | Bitter grounds: Gustatory (Taste)",
            "All are olfactory (Construct immersive narrative verses using Pat Pattisons Object Writing methodology and sensory grounding sight)"
          ],
          "answerIndex": 2,
          "explanation": "Sensory channel classification matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why do abstract lines like 'I was totally devastated by your betrayal' fail to move listeners compared to concrete imagery?",
          "options": [
            "Betrayal is an illegal songwriting word (Construct immersive narrative verses using Pat Pattisons Object Writing methodology and sensory grounding sight)",
            "Abstract lines tell the listener a conclusion without providing sensory inputs for the listener's brain to re-live the experience (Construct immersive narrative verses using Pat Pattisons Object Writing methodology and sensory grounding sight)",
            "Radio stations censor abstract lyrics (Construct immersive narrative verses using Pat Pattisons Object Writing methodology and sensory grounding sight)",
            "Abstract words are too long to sing (Construct immersive narrative verses using Pat Pattisons Object Writing methodology and sensory grounding sight)"
          ],
          "answerIndex": 1,
          "explanation": "Concrete sensory details enable the listener's mirror neurons to re-create the emotional state.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the primary role of Verse 2 in a standard Verse-Chorus-Verse-Chorus structure?",
          "options": [
            "To advance the story forward in time or reveal a new layer of conflict, avoiding simply repeating the ideas of Verse 1 (Construct immersive narrative verses using Pat Pattisons Object Writing methodology and sensory grounding sight)",
            "To play an instrumental drum solo (Construct immersive narrative verses using Pat Pattisons Object Writing methodology and sensory grounding sight)",
            "To change the key of the song randomly (Construct immersive narrative verses using Pat Pattisons Object Writing methodology and sensory grounding sight)",
            "To sing the exact same words as Verse 1 (Construct immersive narrative verses using Pat Pattisons Object Writing methodology and sensory grounding sight)"
          ],
          "answerIndex": 0,
          "explanation": "Verse 2 must advance narrative plot or deepen emotional complexity.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'Write with nouns and verbs; eliminate unnecessary _______.'",
          "options": [
            "melodic notes (Construct immersive narrative verses using Pat Pattisons Object Writing methodology and sensory grounding sight)",
            "vowel sounds (Construct immersive narrative verses using Pat Pattisons Object Writing methodology and sensory grounding sight)",
            "rhyme schemes (Construct immersive narrative verses using Pat Pattisons Object Writing methodology and sensory grounding sight)",
            "abstract adjectives and adverbs (Construct immersive narrative verses using Pat Pattisons Object Writing methodology and sensory grounding sight)"
          ],
          "answerIndex": 3,
          "explanation": "Strong songwriting relies on concrete nouns and active verbs.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 7, Lesson 2: Verse Excerpt: 'A chipped blue"
  },
  "songwriting-u7-l3": {
    "id": "songwriting-u7-l3",
    "unit": "songwriting-u7",
    "level": "master",
    "objective": "Engineer high-impact Pre-Choruses using harmonic instability, accelerated harmonic rhythm, and melodic climb to build irresistible momentum into the chorus release.",
    "presentation": {
      "explanation": "The **Pre-Chorus (Lift / Channel)** is the launchpad of modern pop and rock architecture, designed to transition the intimate storytelling of the verse into the explosive anthem of the chorus:\n\n1. The 3 Pillars of Pre-Chorus Engineering:\n   - **Harmonic Instability**: Move away from the stable tonic (I chord). Favor unstable chords like `ii`, `IV`, `vi`, or dominant preparation `V` (e.g. `vi - V - IV - V` or `ii - IV - V`).\n   - **Rhythmic & Metric Compression**: Shorten phrase lengths (from 4-bar verse phrases down to 2-bar or 1-bar urgency bursts), increasing lyric cadence.\n   - **Melodic Ascent (The Staircase)**: Step the melodic line progressively higher across each measure, leading the listener's ear directly to the vocal summit of the chorus.\n\n2. The Dominant Wall & The Drop:\n   - Holding the dominant `V` chord (or stopping all instruments for a half-beat 'breathing drop') at the end of the pre-chorus creates unbearable musical tension that ONLY the chorus downbeat can resolve.",
      "examples": [
        {
          "target": "Pre-Chorus Progression in C Major: | F (IV) | G (V) | Am (vi) | G/B (V6) -> Explodes into Chorus | C (I) |",
          "reading": "Ascending bassline pre-chorus",
          "translation": "Harmonic lift into tonic chorus."
        },
        {
          "target": "Lyric Urgency Compression: Verse lines = 8 syllables slow. Pre-chorus lines = 'Can you hear it? / Can you feel it? / As the walls begin to shake...' (Short 4-syllable rapid bursts).",
          "reading": "Metric phrase compression",
          "translation": "Rhythmic acceleration."
        }
      ],
      "mnemonics": [
        "PRE-CHORUS IS THE LAUNCHPAD: Harmonic instability + Metric climb!",
        "END ON THE DOMINANT V: Leave the ear begging for the I chord!",
        "THE BREATHING DROP: A split-second pause before the chorus detonates!"
      ],
      "culturalNotes": [
        "In modern Swedish pop production (Max Martin school), the pre-chorus is considered the most crucial transition; if the pre-chorus doesn't make the chorus feel 10x larger, the entire song is reworked."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In applying the principles of Engineer high-impact Pre-Choruses using harmonic instability, which composition technique best fulfills the musical goal?",
          "options": [
            "Resolving to the tonic I chord early (Engineer highimpact PreChoruses using harmonic instability)",
            "Stopping the song completely and tuning the guitar (Engineer highimpact PreChoruses using harmonic instability)",
            "Playing a 10-minute organ drone (Engineer highimpact PreChoruses using harmonic instability)",
            "Ending on the Dominant V chord (Engineer highimpact PreChoruses using harmonic instability)"
          ],
          "answerIndex": 3,
          "explanation": "The Dominant V creates maximum harmonic expectation for the tonic chorus release."
        },
        {
          "prompt": "How does phrase length typically change from the verse into the pre-chorus?",
          "options": [
            "Phrases become 10 times longer and slower (Engineer highimpact PreChoruses using harmonic instability)",
            "Phrases disappear entirely (Engineer highimpact PreChoruses using harmonic instability)",
            "Every line must be whispered (Engineer highimpact PreChoruses using harmonic instability)",
            "Phrase lengths become shorter and tighter (metric compression)"
          ],
          "answerIndex": 3,
          "explanation": "Metric compression speeds up the psychological clock of the song."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In composition and lyric craft for Unit 7, Lesson 3: Foundational & Structural Mastery, which artistic decision best serves the song?",
          "options": [
            "| Em (Engineer highimpact PreChoruses using harmonic instability)",
            "| G (Engineer highimpact PreChoruses using harmonic instability)",
            "| F#dim | G#dim | Adim | Bbdim | (Engineer highimpact PreChoruses using harmonic instability)",
            "No chords at all (Engineer highimpact PreChoruses using harmonic instability)"
          ],
          "answerIndex": 0,
          "explanation": "Em - C - Am7 - Dsus4 moves into minor territory and builds through subdominant to dominant Dsus4."
        },
        {
          "prompt": "What is the 'Melodic Staircase' technique in pre-chorus writing?",
          "options": [
            "Incrementally stepping the pitch of each vocal phrase higher, carrying the listener up toward the chorus summit (Engineer highimpact PreChoruses using harmonic instability)",
            "Singing while walking up actual stairs (Engineer highimpact PreChoruses using harmonic instability)",
            "Playing only chromatic scales on the piano (Engineer highimpact PreChoruses using harmonic instability)",
            "Lowering your pitch to the lowest possible note (Engineer highimpact PreChoruses using harmonic instability)"
          ],
          "answerIndex": 0,
          "explanation": "Stepwise melodic ascent physically lifts vocal intensity."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the pre-chorus tools with their psychological effect on the listener: Dominant V extension, Metric compression, Melodic staircase, Pre-chorus breathing drop:",
          "options": [
            "All are drum fills (Engineer highimpact PreChoruses using harmonic instability)",
            "Dominant extension: Harmonic craving | Metric compression: Rhythmic urgency | Melodic staircase: Vocal anticipation | Breathing drop: Explosive impact on downbeat (Engineer highimpact PreChoruses using harmonic instability)",
            "All mean slow down (Engineer highimpact PreChoruses using harmonic instability)",
            "All mean change key (Engineer highimpact PreChoruses using harmonic instability)"
          ],
          "answerIndex": 1,
          "explanation": "Pre-chorus psychological dynamics matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is resolving to the tonic (I chord) at the end of a pre-chorus usually a major structural mistake?",
          "options": [
            "Because resolving to the I chord discharges harmonic tension prematurely, making the subsequent chorus entrance feel flat and anticlimactic (Engineer highimpact PreChoruses using harmonic instability)",
            "Because singers cannot sing over the I chord (Engineer highimpact PreChoruses using harmonic instability)",
            "Because the I chord is out of tune (Engineer highimpact PreChoruses using harmonic instability)",
            "Because it violates music copyright (Engineer highimpact PreChoruses using harmonic instability)"
          ],
          "answerIndex": 0,
          "explanation": "Early tonic resolution kills the dynamic punch of the chorus entrance.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is a 'Channel' in classical pop terminology?",
          "options": [
            "A guitar amplifier input (Engineer highimpact PreChoruses using harmonic instability)",
            "A river waterway (Engineer highimpact PreChoruses using harmonic instability)",
            "A television broadcast (Engineer highimpact PreChoruses using harmonic instability)",
            "Another historical name for the Pre-Chorus (Engineer highimpact PreChoruses using harmonic instability)"
          ],
          "answerIndex": 3,
          "explanation": "'The Channel' or 'The Climb' is the traditional industry term for the pre-chorus.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'A great pre-chorus makes the chorus feel _______.'",
          "options": [
            "shorter (Engineer highimpact PreChoruses using harmonic instability)",
            "boring and repetitive (Engineer highimpact PreChoruses using harmonic instability)",
            "inevitable and ten times larger (Engineer highimpact PreChoruses using harmonic instability)",
            "quiet and unnecessary (Engineer highimpact PreChoruses using harmonic instability)"
          ],
          "answerIndex": 2,
          "explanation": "The pre-chorus makes the chorus explosive and inevitable.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 7, Lesson 3: Pre-Chorus Progression in C Ma"
  },
  "songwriting-u7-l4": {
    "id": "songwriting-u7-l4",
    "unit": "songwriting-u7",
    "level": "master",
    "objective": "Compose a transformative Bridge (Middle Eight) that shifts harmonic centers, introduces a novel lyrical perspective or third-act epiphany, and engineers the ultimate final chorus climax.",
    "presentation": {
      "explanation": "The **Bridge (Middle Eight)** appears after Chorus 2 (typically at the 2:00–2:30 mark), preventing monotony by providing a **radical fresh perspective**:\n\n1. The 3 Bridge Transformations:\n   - **Lyrical Epiphany (The 3rd-Act Reveal)**:\n     - While Verse 1 and 2 explore the problem, the Bridge reveals the underlying truth, makes a decisive choice, shifts time (past/future), or breaks the fourth wall.\n   - **Harmonic Modulation / Center Shift**:\n     - If the song is in Major, start the bridge on the Relative Minor (`vi`) or Subdominant (`IV`) or flat-VI (`bVI` modal interchange).\n     - If the song is in Minor, burst into the Relative Major (`III`) or Subtonic (`bVII`).\n   - **Metric & Arranger Contrast**:\n     - Strip the drums down to half-time, or introduce a dramatic rhythmic syncopation, changing the vocal rhythm completely.\n\n2. The Bridge-to-Final-Chorus Climax:\n   - The bridge ends on an extended dominant builder (`V` or `V/vi`), launching into the final double-chorus with added vocal ad-libs, counter-melodies, and full dynamic instrumentation.",
      "examples": [
        {
          "target": "Bridge Progression in G Major: | Cmaj7 (IV) | D7 (V) | Bm7 (iii) | Em7 (vi) | Am7 (ii) | Dsus4 - D (V) | -> Final Chorus explosion!",
          "reading": "Circle of fifths bridge cycle",
          "translation": "Harmonic departure and return."
        },
        {
          "target": "Lyrical Bridge Shift: 'All these years I blamed the distance / Thought the miles tore us apart / But the map was never broken / It was the compass in my heart.'",
          "reading": "Third-act revelation",
          "translation": "Philosophical perspective shift."
        }
      ],
      "mnemonics": [
        "THE BRIDGE IS THE 3RD-ACT EPIPHANY: New angle, new truth, new harmony!",
        "HARMONIC CENTER SHIFT: Start on IV, vi, or relative major/minor!",
        "LAUNCH THE FINAL CHORUS: End on dominant builder for the ultimate payoff!"
      ],
      "culturalNotes": [
        "Master bridges (like The Beatles' 'Something', Simon & Garfunkel's 'Bridge Over Troubled Water', or Taylor Swift's iconic bridge climaxes) are frequently cited by listeners as the emotional high point of the entire composition."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In applying the principles of Compose a transformative Bridge (Middle Eight) that shifts harmonic centers, which composition technique best fulfills the musical goal?",
          "options": [
            "To tune instruments during the show (Compose a transformative Bridge Middle Eight that shifts harmonic centers)",
            "To provide fresh harmonic, melodic, and lyrical contrast, offering a new perspective or realization before the final chorus (Compose a transformative Bridge Middle Eight that shifts harmonic centers)",
            "To make the song fade out early (Compose a transformative Bridge Middle Eight that shifts harmonic centers)",
            "To repeat Verse 1 word for word (Compose a transformative Bridge Middle Eight that shifts harmonic centers)"
          ],
          "answerIndex": 1,
          "explanation": "The bridge breaks structural monotony by offering a fresh harmonic and thematic angle."
        },
        {
          "prompt": "Which starting chord provides the most natural fresh harmonic lift for a bridge in a major key song (e.g. C Major)?",
          "options": [
            "The Subdominant IV (Compose a transformative Bridge Middle Eight that shifts harmonic centers)",
            "A microtonal buzz (Compose a transformative Bridge Middle Eight that shifts harmonic centers)",
            "Silence (Compose a transformative Bridge Middle Eight that shifts harmonic centers)",
            "The exact same tonic C chord repeated 8 times (Compose a transformative Bridge Middle Eight that shifts harmonic centers)"
          ],
          "answerIndex": 0,
          "explanation": "Starting on IV or vi provides immediate harmonic contrast from the tonic."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In composition and lyric craft for Unit 7, Lesson 4: Foundational & Structural Mastery, which artistic decision best serves the song?",
          "options": [
            "A moment of realization, acceptance, or stepping into the unknown future with newfound courage (Compose a transformative Bridge Middle Eight that shifts harmonic centers)",
            "Complaining about the weather (Compose a transformative Bridge Middle Eight that shifts harmonic centers)",
            "Listing more furniture items in the room (Compose a transformative Bridge Middle Eight that shifts harmonic centers)",
            "Repeating the same sad memory from Verse 1 (Compose a transformative Bridge Middle Eight that shifts harmonic centers)"
          ],
          "answerIndex": 0,
          "explanation": "The bridge provides the philosophical turning point or emotional breakthrough."
        },
        {
          "prompt": "What dynamic arranging technique is frequently used during the bridge to enhance contrast?",
          "options": [
            "Half-time drum grooves, stripping down instrumentation to acoustic guitar/piano, or building a soaring vocal crescendo (Compose a transformative Bridge Middle Eight that shifts harmonic centers)",
            "Playing out of rhythm (Compose a transformative Bridge Middle Eight that shifts harmonic centers)",
            "Turning off the sound completely for 2 minutes (Compose a transformative Bridge Middle Eight that shifts harmonic centers)",
            "Playing 5 songs at the same time (Compose a transformative Bridge Middle Eight that shifts harmonic centers)"
          ],
          "answerIndex": 0,
          "explanation": "Arrangement contrast (half-time, acoustic breakdown, dynamic build) amplifies bridge impact."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the song section with its primary narrative function: Verse, Pre-Chorus, Chorus, Bridge:",
          "options": [
            "Verse: Specific storytelling | Pre-Chorus: Momentum & tension | Chorus: Universal emotional hook | Bridge: New perspective & revelation (Compose a transformative Bridge Middle Eight that shifts harmonic centers)",
            "All mean repeat Verse 1 (Compose a transformative Bridge Middle Eight that shifts harmonic centers)",
            "All are audio formats (Compose a transformative Bridge Middle Eight that shifts harmonic centers)",
            "All mean guitar solo (Compose a transformative Bridge Middle Eight that shifts harmonic centers)"
          ],
          "answerIndex": 0,
          "explanation": "Song form architecture matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is it called a 'Middle Eight' in classic songwriting terminology?",
          "options": [
            "Because only 8 people can sing it (Compose a transformative Bridge Middle Eight that shifts harmonic centers)",
            "Because it has 8 words (Compose a transformative Bridge Middle Eight that shifts harmonic centers)",
            "Because it is written in 8/8 time (Compose a transformative Bridge Middle Eight that shifts harmonic centers)",
            "Because in classic 32-bar AABA song form, it occupied the middle 8-measure contrasting section (Compose a transformative Bridge Middle Eight that shifts harmonic centers)"
          ],
          "answerIndex": 3,
          "explanation": "Middle Eight originated from the 8-measure B section in 32-bar form.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is an 'Outro / Coda' after the final chorus?",
          "options": [
            "The microphone check (Compose a transformative Bridge Middle Eight that shifts harmonic centers)",
            "The beginning of the song (Compose a transformative Bridge Middle Eight that shifts harmonic centers)",
            "The concluding section that winds down the song, often featuring fading vocal ad-libs, hook chants, or signature instrumental motifs (Compose a transformative Bridge Middle Eight that shifts harmonic centers)",
            "A spoken radio advertisement (Compose a transformative Bridge Middle Eight that shifts harmonic centers)"
          ],
          "answerIndex": 2,
          "explanation": "The outro/coda brings the musical journey to its final aesthetic conclusion.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'A great bridge is the bridge between who the narrator was, and _______.'",
          "options": [
            "their old guitar (Compose a transformative Bridge Middle Eight that shifts harmonic centers)",
            "who they have become by the end of the song (Compose a transformative Bridge Middle Eight that shifts harmonic centers)",
            "the next track on the album (Compose a transformative Bridge Middle Eight that shifts harmonic centers)",
            "the record label (Compose a transformative Bridge Middle Eight that shifts harmonic centers)"
          ],
          "answerIndex": 1,
          "explanation": "The bridge crystallizes character transformation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 7, Lesson 4: Bridge Progression in G Major:"
  },
  "songwriting-u7-l5": {
    "id": "songwriting-u7-l5",
    "unit": "songwriting-u7",
    "level": "master",
    "objective": "Demonstrate comprehensive Master songwriting fluency by composing a complete original 3-minute commercial masterwork (Verse 1 - Pre - Chorus - Verse 2 - Pre - Chorus - Bridge - Final Double Chorus - Outro) complete with chord chart, lyric sheet, and lead sheet arrangement.",
    "presentation": {
      "explanation": "In this Master Checkpoint for Unit 7, we synthesize all elements of songwriting mastery into a complete **Full-Length Master Lead Sheet & Composition**:\n\n1. The Grand Challenge Brief:\n   - **Song Title**: *'Ghosts in the Static'* (Key of E Minor / G Major, Tempo = 118 BPM, 4/4 Time).\n   - **Song Architecture**: `Verse 1 -> Pre-Chorus -> Chorus -> Verse 2 -> Pre-Chorus -> Chorus -> Bridge -> Final Double Chorus -> Outro`.\n\n2. Complete Master Lead Sheet & Lyric Architecture:\n\n   - **VERSE 1** (E Minor | Em - C - G - D | Intimate, conversational storytelling):\n     *Fluorescent light buzzing in the hallway air*\n     *Left your car keys sitting on the kitchen chair*\n     *Two coffee cups cold on the porcelain floor*\n     *And a winter draft whistling through the bedroom door.*\n\n   - **PRE-CHORUS** (C Major | C - D - Em - D/F# | Metric compression, ascending climb):\n     *Hear the wires hum, feel the floorboards shake*\n     *Every promise that we couldn't make*\n     *Now the needle's spinning on the radio dial...*\n     *(Breathing drop - 1 beat silence)*\n\n   - **CHORUS** (G Major | G - D - Em - C | Melodic peak on high G5 on 'Ghosts'):\n     *And there are GHOSTS IN THE STATIC tonight*\n     *Flickering waves in the dashboard light*\n     *I reach for your voice through the pouring rain*\n     *But it's only ghosts in the static again!*\n\n   - **VERSE 2** (Advancing the timeline, visceral sensory shift):\n     *Headlights cutting through the mountain fog*\n     *Tire tracks fading in the frozen bog*\n     *I found your postcard from seventy-eight*\n     *Postmarked midnight at the county gate.*\n\n   - **PRE-CHORUS & CHORUS** (Full band energy, driving 8th-note bassline).\n\n   - **BRIDGE** (Harmonic departure to Cmaj7 - Bm7 - Am7 - Dsus4 -> D7):\n     *I thought the frequency was lost for good*\n     *Buried in the wires of this neighborhood*\n     *But the signal wasn't dead, it was just too high*\n     *A broadcast screaming to an empty sky!*\n\n   - **FINAL DOUBLE CHORUS & OUTRO** (Full explosive dynamic release with soaring vocal counter-melodies and guitar feedback fading into radio static).",
      "examples": [
        {
          "target": "Full Song Synthesis: 'Ghosts in the Static' — Verse (Em-C-G-D) -> Pre (C-D-Em-D/F#) -> Chorus (G-D-Em-C) -> Bridge (Cmaj7-Bm7-Am7-D7).",
          "reading": "Complete commercial pop/rock composition",
          "translation": "Lead sheet architecture."
        },
        {
          "target": "Vocal Peak Architecture: High G5 on the downbeat of the word 'GHOSTS' in the chorus hook.",
          "reading": "Peak pitch alignment",
          "translation": "Melodic focal anchoring."
        }
      ],
      "mnemonics": [
        "V - PC - C - V - PC - C - B - CC - OUTRO: The indestructible commercial pop architecture!",
        "DYNAMIC PROSODY: Intimate verse -> Urgency pre -> Anthem chorus -> Epiphany bridge!",
        "GHOSTS IN THE STATIC: Hook anchored to high G5!"
      ],
      "culturalNotes": [
        "Lead sheets (combining melody in standard notation, chord symbols above the staff, and lyric syllables aligned below) have been the universal legal and performance blueprint of Western popular music since Tin Pan Alley in the 1920s."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In applying the principles of Demonstrate comprehensive Master songwriting fluency by composing a complete original 3-minute commercial masterwork (Verse 1 - Pre - Chorus - Verse 2 - Pre - Chorus - Bridge - Final Double Chorus - Outro) complete with chord chart, which composition technique best fulfills the musical goal?",
          "options": [
            "Cmaj7 - Bm7 - Am7 - Dsus4/D7 (IV - iii - ii - V)",
            "Repeating Em - Em - Em - Em with no changes (Demonstrate comprehensive Master songwriting fluency by composing a complete original 3minute commercial masterwork Verse 1  Pre  Chorus  Verse 2  Pre  Chorus  Bridge  Final Double Chorus  Outro complete with chord chart)",
            "A drum machine solo with zero chords (Demonstrate comprehensive Master songwriting fluency by composing a complete original 3minute commercial masterwork Verse 1  Pre  Chorus  Verse 2  Pre  Chorus  Bridge  Final Double Chorus  Outro complete with chord chart)",
            "Playing the song backwards (Demonstrate comprehensive Master songwriting fluency by composing a complete original 3minute commercial masterwork Verse 1  Pre  Chorus  Verse 2  Pre  Chorus  Bridge  Final Double Chorus  Outro complete with chord chart)"
          ],
          "answerIndex": 0,
          "explanation": "Cmaj7 - Bm7 - Am7 - D7 provides rich diatonic subdominant departure and dominant turnaround."
        },
        {
          "prompt": "How did Verse 2 in 'Ghosts in the Static' advance the narrative rather than repeating Verse 1?",
          "options": [
            "It shifted location from inside the kitchen to the mountain road and introduced the historical artifact (Demonstrate comprehensive Master songwriting fluency by composing a complete original 3minute commercial masterwork Verse 1  Pre  Chorus  Verse 2  Pre  Chorus  Bridge  Final Double Chorus  Outro complete with chord chart)",
            "It used the exact same words as Verse 1 (Demonstrate comprehensive Master songwriting fluency by composing a complete original 3minute commercial masterwork Verse 1  Pre  Chorus  Verse 2  Pre  Chorus  Bridge  Final Double Chorus  Outro complete with chord chart)",
            "It was sung in Japanese (Demonstrate comprehensive Master songwriting fluency by composing a complete original 3minute commercial masterwork Verse 1  Pre  Chorus  Verse 2  Pre  Chorus  Bridge  Final Double Chorus  Outro complete with chord chart)",
            "It skipped all rhymes (Demonstrate comprehensive Master songwriting fluency by composing a complete original 3minute commercial masterwork Verse 1  Pre  Chorus  Verse 2  Pre  Chorus  Bridge  Final Double Chorus  Outro complete with chord chart)"
          ],
          "answerIndex": 0,
          "explanation": "Verse 2 moved from static interior grief to active driving pursuit and artifact discovery."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In composition and lyric craft for Unit 7, Lesson 5: Foundational & Structural Mastery, which artistic decision best serves the song?",
          "options": [
            "Whether it has 50 chords in 2 measures (Demonstrate comprehensive Master songwriting fluency by composing a complete original 3minute commercial masterwork Verse 1  Pre  Chorus  Verse 2  Pre  Chorus  Bridge  Final Double Chorus  Outro complete with chord chart)",
            "Prosody (lyric meaning matches musical emotion)",
            "The speed of the guitar solo (Demonstrate comprehensive Master songwriting fluency by composing a complete original 3minute commercial masterwork Verse 1  Pre  Chorus  Verse 2  Pre  Chorus  Bridge  Final Double Chorus  Outro complete with chord chart)",
            "How heavy the paper is (Demonstrate comprehensive Master songwriting fluency by composing a complete original 3minute commercial masterwork Verse 1  Pre  Chorus  Verse 2  Pre  Chorus  Bridge  Final Double Chorus  Outro complete with chord chart)"
          ],
          "answerIndex": 1,
          "explanation": "Prosody, structural contrast, and hook clarity define songwriting excellence."
        },
        {
          "prompt": "What is the final frontier awaiting you in Unit 8 of Songwriting & Music Theory?",
          "options": [
            "Quitting music (Demonstrate comprehensive Master songwriting fluency by composing a complete original 3minute commercial masterwork Verse 1  Pre  Chorus  Verse 2  Pre  Chorus  Bridge  Final Double Chorus  Outro complete with chord chart)",
            "Revision & Polishing Technique (Demonstrate comprehensive Master songwriting fluency by composing a complete original 3minute commercial masterwork Verse 1  Pre  Chorus  Verse 2  Pre  Chorus  Bridge  Final Double Chorus  Outro complete with chord chart)",
            "Learning accordion only (Demonstrate comprehensive Master songwriting fluency by composing a complete original 3minute commercial masterwork Verse 1  Pre  Chorus  Verse 2  Pre  Chorus  Bridge  Final Double Chorus  Outro complete with chord chart)",
            "Buying a tour bus (Demonstrate comprehensive Master songwriting fluency by composing a complete original 3minute commercial masterwork Verse 1  Pre  Chorus  Verse 2  Pre  Chorus  Bridge  Final Double Chorus  Outro complete with chord chart)"
          ],
          "answerIndex": 1,
          "explanation": "Unit 8 focuses on ruthless revision, prosody auditing, vowel optimization, and demo polishing."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What core musical, lyrical, and architectural competencies were mastered across Songwriting Unit 7?",
          "options": [
            "Synthesizer repair only (Demonstrate comprehensive Master songwriting fluency by composing a complete original 3minute commercial masterwork Verse 1  Pre  Chorus  Verse 2  Pre  Chorus  Bridge  Final Double Chorus  Outro complete with chord chart)",
            "Microphone stand assembly only (Demonstrate comprehensive Master songwriting fluency by composing a complete original 3minute commercial masterwork Verse 1  Pre  Chorus  Verse 2  Pre  Chorus  Bridge  Final Double Chorus  Outro complete with chord chart)",
            "Audio cable soldering only (Demonstrate comprehensive Master songwriting fluency by composing a complete original 3minute commercial masterwork Verse 1  Pre  Chorus  Verse 2  Pre  Chorus  Bridge  Final Double Chorus  Outro complete with chord chart)",
            "High-concept title anchor engineering, 7-channel sensory verse scaffolding (Pat Pattison framework)"
          ],
          "answerIndex": 3,
          "explanation": "Unit 7 comprehensive guided songwriting, section scaffolding, and master lead sheet composition.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why did the pre-chorus in 'Ghosts in the Static' utilize a 'breathing drop' (1 beat silence) before the chorus?",
          "options": [
            "Because the singer forgot the words (Demonstrate comprehensive Master songwriting fluency by composing a complete original 3minute commercial masterwork Verse 1  Pre  Chorus  Verse 2  Pre  Chorus  Bridge  Final Double Chorus  Outro complete with chord chart)",
            "To let the drummer rest (Demonstrate comprehensive Master songwriting fluency by composing a complete original 3minute commercial masterwork Verse 1  Pre  Chorus  Verse 2  Pre  Chorus  Bridge  Final Double Chorus  Outro complete with chord chart)",
            "The sudden drop in acoustic volume and texture creates a vacuum that magnifies the perceived explosive volume and impact of the chorus downbeat (Demonstrate comprehensive Master songwriting fluency by composing a complete original 3minute commercial masterwork Verse 1  Pre  Chorus  Verse 2  Pre  Chorus  Bridge  Final Double Chorus  Outro complete with chord chart)",
            "It was an audio recording mistake (Demonstrate comprehensive Master songwriting fluency by composing a complete original 3minute commercial masterwork Verse 1  Pre  Chorus  Verse 2  Pre  Chorus  Bridge  Final Double Chorus  Outro complete with chord chart)"
          ],
          "answerIndex": 2,
          "explanation": "Silence before downbeat leverages psychoacoustic contrast.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What role do open vowels (such as /a/ in 'static' or /o/ in 'ghosts') play when placed on high vocal peak notes?",
          "options": [
            "Open vowels are quieter (Demonstrate comprehensive Master songwriting fluency by composing a complete original 3minute commercial masterwork Verse 1  Pre  Chorus  Verse 2  Pre  Chorus  Bridge  Final Double Chorus  Outro complete with chord chart)",
            "Open vowels provide optimal acoustic pharyngeal tract resonance, allowing the singer to project high notes with maximum power and minimal vocal strain (Demonstrate comprehensive Master songwriting fluency by composing a complete original 3minute commercial masterwork Verse 1  Pre  Chorus  Verse 2  Pre  Chorus  Bridge  Final Double Chorus  Outro complete with chord chart)",
            "Vowels do not matter in singing (Demonstrate comprehensive Master songwriting fluency by composing a complete original 3minute commercial masterwork Verse 1  Pre  Chorus  Verse 2  Pre  Chorus  Bridge  Final Double Chorus  Outro complete with chord chart)",
            "Open vowels are harder to sing (Demonstrate comprehensive Master songwriting fluency by composing a complete original 3minute commercial masterwork Verse 1  Pre  Chorus  Verse 2  Pre  Chorus  Bridge  Final Double Chorus  Outro complete with chord chart)"
          ],
          "answerIndex": 1,
          "explanation": "Open pharyngeal vowels maximize vocal formant resonance on high pitches.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete the songwriting master maxim: 'Don't just write a song; build an undeniable _______.'",
          "options": [
            "emotional experience and memorable world (Demonstrate comprehensive Master songwriting fluency by composing a complete original 3minute commercial masterwork Verse 1  Pre  Chorus  Verse 2  Pre  Chorus  Bridge  Final Double Chorus  Outro complete with chord chart)",
            "long track (Demonstrate comprehensive Master songwriting fluency by composing a complete original 3minute commercial masterwork Verse 1  Pre  Chorus  Verse 2  Pre  Chorus  Bridge  Final Double Chorus  Outro complete with chord chart)",
            "fast beat (Demonstrate comprehensive Master songwriting fluency by composing a complete original 3minute commercial masterwork Verse 1  Pre  Chorus  Verse 2  Pre  Chorus  Bridge  Final Double Chorus  Outro complete with chord chart)",
            "loud noise (Demonstrate comprehensive Master songwriting fluency by composing a complete original 3minute commercial masterwork Verse 1  Pre  Chorus  Verse 2  Pre  Chorus  Bridge  Final Double Chorus  Outro complete with chord chart)"
          ],
          "answerIndex": 0,
          "explanation": "Great songs construct undeniable emotional worlds.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 7, Lesson 5: Full Song Synthesis: 'Ghosts i"
  },
  "songwriting-u8-l1": {
    "id": "songwriting-u8-l1",
    "unit": "songwriting-u8",
    "level": "master",
    "objective": "Execute surgical lyric revisions by eliminating weak filler words (that, just, really, so, very), aligning poetic stressed syllables to musical downbeats, and optimizing syllabic density.",
    "presentation": {
      "explanation": "Welcome to Master Songwriting Unit 8: Revision & Polishing Technique! Great songs are not written; they are **ruthlessly rewritten**:\n\n1. The Syllable Economy & Weed-Trimming Protocol:\n   - Novice drafts are clogged with conversational filler words (*that, just, really, so, very, like, kind of, now*).\n   - **The Trimming Rule**: If a word does not deliver a sensory image or essential narrative meaning, delete it.\n   - *Draft (Weak)*: 'And so I just really wanted you to know that I was sad.' (13 syllables - mushy rhythm).\n   - *Surgical Revision*: 'I wanted you to know my hands were cold.' (10 syllables - visceral sensory impact).\n\n2. Metric Stress Alignment (False Accents):\n   - English words have inherent natural stress (e.g. *com-PU-ter*, not *COM-pu-ter*; *be-LIEVE*, not *BE-lieve*).\n   - **The Musical Downbeat Rule**: Never force an unaccented syllable onto Measure Beat 1 or 3 simply to make a line fit the melody. If the musical stress distorts the natural speech rhythm, the listener's brain experiences cognitive friction.",
      "examples": [
        {
          "target": "False Accent Fix: Change 'I will PRO-mise to NEVER leave' (awkward stress on 'to') -> 'I promise I will stay.'",
          "reading": "Prosodic stress correction",
          "translation": "Natural speech rhythm alignment."
        },
        {
          "target": "Syllable Trimming: 'Because it's just so hard to see' -> 'Hard to see through the glass.'",
          "reading": "Filler elimination",
          "translation": "Syllable density tightening."
        }
      ],
      "mnemonics": [
        "DELETE THE FILLERS: Trim 'that', 'just', 'really', 'so'!",
        "MATCH SPEECH STRESS TO DOWNBEATS: Natural language prosody!",
        "EVERY SYLLABLE MUST EARN ITS SEAT: No wasted rhythmic space!"
      ],
      "culturalNotes": [
        "Leonard Cohen famously spent over five years and wrote as many as 80 draft verses for 'Hallelujah', constantly trimming, rearranging, and refining syllables before recording the final master version."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In applying the principles of Execute surgical lyric revisions by eliminating weak filler words (that, which composition technique best fulfills the musical goal?",
          "options": [
            "'And it is just really hard because the tail-lights are so foggy.' (Execute surgical lyric revisions by eliminating weak filler words that)",
            "'So I was looking at the cars that were driving away.' (Execute surgical lyric revisions by eliminating weak filler words that)",
            "'Like I really think that the weather was bad today.' (Execute surgical lyric revisions by eliminating weak filler words that)",
            "'Tail-lights bleed into the winter fog.' (Execute surgical lyric revisions by eliminating weak filler words that)"
          ],
          "answerIndex": 3,
          "explanation": "Active verb and vivid sensory nouns replace conversational padding."
        },
        {
          "prompt": "What is a 'false accent' in vocal songwriting?",
          "options": [
            "A microphone distortion (Execute surgical lyric revisions by eliminating weak filler words that)",
            "Playing a wrong chord on the guitar (Execute surgical lyric revisions by eliminating weak filler words that)",
            "Placing an unstressed syllable of a word (e.g. the 'to' in 'in-TO')",
            "Singing in a fake foreign accent (Execute surgical lyric revisions by eliminating weak filler words that)"
          ],
          "answerIndex": 2,
          "explanation": "False accents occur when musical meter conflicts with natural linguistic stress."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In composition and lyric craft for Unit 8, Lesson 1: Foundational & Structural Mastery, which artistic decision best serves the song?",
          "options": [
            "It makes the song louder (Execute surgical lyric revisions by eliminating weak filler words that)",
            "It reduces copyright fees (Execute surgical lyric revisions by eliminating weak filler words that)",
            "It allows the drummer to stop playing (Execute surgical lyric revisions by eliminating weak filler words that)",
            "It reinforces melodic symmetry, allowing the listener's brain to easily anticipate the vocal rhythm and sing along (Execute surgical lyric revisions by eliminating weak filler words that)"
          ],
          "answerIndex": 3,
          "explanation": "Syllabic symmetry across corresponding verse lines enhances melodic predictability."
        },
        {
          "prompt": "Which word is the most common filler culprit in amateur song lyrics?",
          "options": [
            "'Mountain' (Execute surgical lyric revisions by eliminating weak filler words that)",
            "'River' (Execute surgical lyric revisions by eliminating weak filler words that)",
            "'Midnight' (Execute surgical lyric revisions by eliminating weak filler words that)",
            "'That' (Execute surgical lyric revisions by eliminating weak filler words that)"
          ],
          "answerIndex": 3,
          "explanation": "'That' is the #1 unnecessary grammatical crutch in amateur lyrics."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the editing terms with their definitions: Syllable Economy, False Accent, Filler Words, Metric Alignment:",
          "options": [
            "All mean guitar tuning (Execute surgical lyric revisions by eliminating weak filler words that)",
            "All mean vocal reverb (Execute surgical lyric revisions by eliminating weak filler words that)",
            "Syllable Economy: Maximum meaning in fewest syllables | False Accent: Stressed beat on unstressed syllable | Filler Words: Meaningless padding (just/that)",
            "All are synthesizer settings (Execute surgical lyric revisions by eliminating weak filler words that)"
          ],
          "answerIndex": 2,
          "explanation": "Lyric editing definitions matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why should a songwriter read draft lyrics aloud as spoken prose before singing them?",
          "options": [
            "To practice acting (Execute surgical lyric revisions by eliminating weak filler words that)",
            "To instantly detect clunky phrasing, tongue-twisters, unnatural syntax, and false accents that music might otherwise mask (Execute surgical lyric revisions by eliminating weak filler words that)",
            "To check word counts for taxation (Execute surgical lyric revisions by eliminating weak filler words that)",
            "To see how loud they can speak (Execute surgical lyric revisions by eliminating weak filler words that)"
          ],
          "answerIndex": 1,
          "explanation": "Spoken prose reading reveals underlying syntactic awkwardness.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is 'prosodic friction'?",
          "options": [
            "When the emotional tone of the lyric directly conflicts with the musical rhythm or melodic contour (Execute surgical lyric revisions by eliminating weak filler words that)",
            "Two singers arguing in the studio (Execute surgical lyric revisions by eliminating weak filler words that)",
            "Radio static (Execute surgical lyric revisions by eliminating weak filler words that)",
            "Guitar strings rubbing together (Execute surgical lyric revisions by eliminating weak filler words that)"
          ],
          "answerIndex": 0,
          "explanation": "Prosodic friction is dissonance between lyric emotion and musical expression.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'Good songwriters write; great songwriters _______.'",
          "options": [
            "hire ghostwriters (Execute surgical lyric revisions by eliminating weak filler words that)",
            "stop writing after draft 1 (Execute surgical lyric revisions by eliminating weak filler words that)",
            "buy more synthesizers (Execute surgical lyric revisions by eliminating weak filler words that)",
            "ruthlessly rewrite and polish (Execute surgical lyric revisions by eliminating weak filler words that)"
          ],
          "answerIndex": 3,
          "explanation": "Rewriting is the true furnace of master songwriting.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 8, Lesson 1: False Accent Fix: Change 'I wi"
  },
  "songwriting-u8-l2": {
    "id": "songwriting-u8-l2",
    "unit": "songwriting-u8",
    "level": "master",
    "objective": "Optimize vocal prosody and pharyngeal vowel coloring on high-register peak pitches, modifying closed vowels (/i/, /u/) to open Italianate vowels (/ɪ/, /oʊ/) to allow maximum vocal power without strain.",
    "presentation": {
      "explanation": "The human vocal tract is a physical acoustic horn. At high pitches (above the vocal break/passaggio), certain vowels naturally resonate while others cause vocal strain and acoustic collapse: **Vocal Prosody & Vowel Modification**:\n\n1. The Vowel Formant Hierarchy (Open vs. Closed Vowels):\n   - **Open Power Vowels (Maximum Acoustic Resonance)**:\n     - `/ɑ/` as in *Father, Dark, Heart, Far*\n     - `/ɔ/` as in *All, Dawn, Fall, Call*\n     - `/æ/` as in *Pass, Back, Flat*\n     - `/eɪ/` as in *Rain, Stay, Break*\n     - `/oʊ/` as in *Ghost, Home, Gold*\n   - **Closed Narrow Vowels (High Acoustic Resistance on Top Pitches)**:\n     - `/i/` as in *See, Bleed, Me, Free*\n     - `/u/` as in *You, Through, Blue, True*\n\n2. Vowel Modification on High Notes (Vocal Mechanics):\n   - Singing a closed `/i/` on a high G5 or A5 closes the pharynx and chokes the sound.\n   - **The Grandmaster Fix**: Modify the vowel color toward an open neighbor!\n     - Modify `/i/` (*free*) slightly toward `/ɪ/` (*f徳h-ree* with relaxed jaw).\n     - Modify `/u/` (*you*) slightly toward `/ʊ/` or `/oʊ/` (*y-oh-u*).\n\n3. Strategic Lyric Placement:\n   - When designing your chorus climax, **place words with open /ɑ/, /eɪ/, or /oʊ/ vowels on the very highest melodic notes** (*'HOME', 'RAIN', 'LIGHT', 'HEART', 'GHOSTS'*).",
      "examples": [
        {
          "target": "Climax Word Selection: Choosing 'SHINE' (open /aɪ/) or 'LIGHT' (open /aɪ/) for high A4 rather than 'SEE' (closed /i/) or 'YOU' (closed /u/).",
          "reading": "Peak pitch vowel optimization",
          "translation": "Acoustic formant alignment."
        },
        {
          "target": "Vowel Modification: Modifying 'ME' to 'MAY-ih' on high belting notes to release vocal tract pressure.",
          "reading": "Pharyngeal resonance opening",
          "translation": "Belting vowel mechanics."
        }
      ],
      "mnemonics": [
        "OPEN VOWELS AT THE TOP: /ɑ/ (Heart), /eɪ/ (Stay), /oʊ/ (Home) on high notes!",
        "MODIFY CLOSED VOWELS: Ease /i/ toward /ɪ/ and /u/ toward /oʊ/!",
        "FREE THE PHARYNX: Drop the jaw, relax the tongue, let the sound project!"
      ],
      "culturalNotes": [
        "Opera singers and Broadway belters have utilized Italianate vowel modification for centuries; modern hitmakers like Adele, Bruno Mars, and Freddie Mercury deliberately choose open-vowel rhymes on chorus peaks."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In applying the principles of Optimize vocal prosody and pharyngeal vowel coloring on high-register peak pitches, which composition technique best fulfills the musical goal?",
          "options": [
            "'HEART' (Optimize vocal prosody and pharyngeal vowel coloring on highregister peak pitches)",
            "'LITTLE' (Optimize vocal prosody and pharyngeal vowel coloring on highregister peak pitches)",
            "'ME' (Optimize vocal prosody and pharyngeal vowel coloring on highregister peak pitches)",
            "'YOU' (Optimize vocal prosody and pharyngeal vowel coloring on highregister peak pitches)"
          ],
          "answerIndex": 0,
          "explanation": "Open vowels like /ɑ/ in 'HEART' maximize acoustic formant resonance on high pitches."
        },
        {
          "prompt": "What should a songwriter do if their peak high note falls on a word with a closed vowel like 'FREE' (/i/)?",
          "options": [
            "Instruct the vocalist to modify the vowel slightly toward /ɪ/ or /e/ (relaxing the jaw)",
            "Cancel the recording session (Optimize vocal prosody and pharyngeal vowel coloring on highregister peak pitches)",
            "Mute the vocal track (Optimize vocal prosody and pharyngeal vowel coloring on highregister peak pitches)",
            "Lower the volume of the microphone (Optimize vocal prosody and pharyngeal vowel coloring on highregister peak pitches)"
          ],
          "answerIndex": 0,
          "explanation": "Vowel modification or open-vowel word replacement unlocks effortless vocal power."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In composition and lyric craft for Unit 8, Lesson 2: Foundational & Structural Mastery, which artistic decision best serves the song?",
          "options": [
            "Because plosives break microphones (Optimize vocal prosody and pharyngeal vowel coloring on highregister peak pitches)",
            "Because plosives are illegal on radio (Optimize vocal prosody and pharyngeal vowel coloring on highregister peak pitches)",
            "Because harsh consonant cut-offs can choke the decaying reverb tail; singers should sustain the vowel and place the terminal consonant gently on the final micro-beat (Optimize vocal prosody and pharyngeal vowel coloring on highregister peak pitches)",
            "Because consonants cannot be recorded (Optimize vocal prosody and pharyngeal vowel coloring on highregister peak pitches)"
          ],
          "answerIndex": 2,
          "explanation": "Sustaining the resonant vowel before delivering a subtle consonant cut-off ensures acoustic beauty."
        },
        {
          "prompt": "What is the 'passaggio' in vocal pedagogy?",
          "options": [
            "An Italian restaurant (Optimize vocal prosody and pharyngeal vowel coloring on highregister peak pitches)",
            "A type of guitar pick (Optimize vocal prosody and pharyngeal vowel coloring on highregister peak pitches)",
            "A tempo marking meaning very slow (Optimize vocal prosody and pharyngeal vowel coloring on highregister peak pitches)",
            "The transitional bridge area of the vocal range where chest voice transitions into head voice / mixed voice (Optimize vocal prosody and pharyngeal vowel coloring on highregister peak pitches)"
          ],
          "answerIndex": 3,
          "explanation": "The passaggio is the crucial vocal register transition zone."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the words to their vowel category: HEART, LIGHT, FREE, BLUE:",
          "options": [
            "All are open vowels (Optimize vocal prosody and pharyngeal vowel coloring on highregister peak pitches)",
            "HEART: Open /ɑ/ | LIGHT: Open diphthong /aɪ/ | FREE: Closed /i/ | BLUE: Closed /u/ (Optimize vocal prosody and pharyngeal vowel coloring on highregister peak pitches)",
            "All are consonants (Optimize vocal prosody and pharyngeal vowel coloring on highregister peak pitches)",
            "All are closed vowels (Optimize vocal prosody and pharyngeal vowel coloring on highregister peak pitches)"
          ],
          "answerIndex": 1,
          "explanation": "Vowel formant categorization matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is the diphthong in 'RAIN' (/eɪ/) so prevalent in rock and pop anthems?",
          "options": [
            "Because the open /e/ start gives massive vocal projection, while the resolving /ɪ/ glide creates a bright, penetrating frequency presence (Optimize vocal prosody and pharyngeal vowel coloring on highregister peak pitches)",
            "Because it rhymes with pain (Optimize vocal prosody and pharyngeal vowel coloring on highregister peak pitches)",
            "It is the shortest word in English (Optimize vocal prosody and pharyngeal vowel coloring on highregister peak pitches)",
            "Because rain is the only weather in England (Optimize vocal prosody and pharyngeal vowel coloring on highregister peak pitches)"
          ],
          "answerIndex": 0,
          "explanation": "/eɪ/ combines pharyngeal power with bright acoustic cutting presence.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is 'vocal tract formants' in acoustic phonetics?",
          "options": [
            "Sheet music paper sizes (Optimize vocal prosody and pharyngeal vowel coloring on highregister peak pitches)",
            "Microphone cables (Optimize vocal prosody and pharyngeal vowel coloring on highregister peak pitches)",
            "Drum tuning pegs (Optimize vocal prosody and pharyngeal vowel coloring on highregister peak pitches)",
            "Resonant frequency peaks created by the physical shape of the throat, mouth, and nasal cavities that amplify vocal harmonics (Optimize vocal prosody and pharyngeal vowel coloring on highregister peak pitches)"
          ],
          "answerIndex": 3,
          "explanation": "Vocal tract formants naturally amplify specific harmonic frequencies.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'Fit the lyric to the singer's anatomy; put open vowels at the _______.'",
          "options": [
            "lowest bass note (Optimize vocal prosody and pharyngeal vowel coloring on highregister peak pitches)",
            "end of the song only (Optimize vocal prosody and pharyngeal vowel coloring on highregister peak pitches)",
            "top of the melodic mountain (Optimize vocal prosody and pharyngeal vowel coloring on highregister peak pitches)",
            "beginning of every verse (Optimize vocal prosody and pharyngeal vowel coloring on highregister peak pitches)"
          ],
          "answerIndex": 2,
          "explanation": "Open vowels belong on the highest melodic peaks.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 8, Lesson 2: Climax Word Selection: Choosin"
  },
  "songwriting-u8-l3": {
    "id": "songwriting-u8-l3",
    "unit": "songwriting-u8",
    "level": "master",
    "objective": "Orchestrate dynamic arrangement architectures and production stems, engineering the 5-stage dynamic arc: intimate verse, building pre-chorus, exploded chorus, stripped bridge, and grand double-chorus finale.",
    "presentation": {
      "explanation": "A great song is not just chords on a page — it is a **dynamic emotional rollercoaster engineered through arrangement and sonic density**:\n\n1. The 5-Stage Dynamic Arrangement Arc:\n   - **Verse 1 (Intimacy / The Whisper)**: Minimalist instrumentation (e.g. single acoustic guitar or warm piano, close-mic dry vocal, zero drums).\n   - **Pre-Chorus 1 (The Engine Starts)**: Bass guitar enters, shaker/hi-hat 8th notes enter, subtle synth pad swells, harmonic lift.\n   - **Chorus 1 (The Explosion)**: Full drum kit (kick on 1 & 3, snare on 2 & 4), stereo-panned electric guitars, layered vocal harmonies (3rd above, octave below), sub-bass support.\n   - **Verse 2 (Advancement)**: Keep the groove going! Retain light drums/bass so energy doesn't crash to zero.\n   - **Bridge (The Reset / Acoustic Breakdown)**: Strip the rhythm section completely (half-time feel, solo piano, atmospheric reverb), creating dynamic space.\n   - **Final Double Chorus (The Sonic Summit)**: Maximum instrumentation, soaring vocal ad-libs in the stratosphere, counter-melody horn/synth riffs, and driving ride cymbals!\n\n2. Frequency Slotting (Arranging by Register):\n   - Ensure instruments don't clash in the same frequency band:\n     - *Sub-Bass (20-80 Hz)*: Kick drum & Sub-bass only.\n     - *Warm Low-Mids (200-500 Hz)*: Bass guitar, acoustic guitar body.\n     - *Vocal Presence (1-4 kHz)*: Lead vocal clear; carve EQ space in guitars.\n     - *Air & Sparkle (10-20 kHz)*: Shakers, cymbals, vocal breath.",
      "examples": [
        {
          "target": "Arrangement Dynamic Blueprint: V1 (1 instrument, 20% energy) -> Pre (40%) -> C1 (75%) -> V2 (50%) -> C2 (85%) -> Bridge (30%) -> Final Chorus (100%).",
          "reading": "Energy curve progression",
          "translation": "Standard commercial dynamic arc."
        },
        {
          "target": "Vocal Stems Architecture: Lead Center Dry + Lead Doubled Left/Right (-6dB) + High Harmony 3rd Above (+4dB in Chorus) + Octave Below Underneath.",
          "reading": "Layered vocal stem design",
          "translation": "Wall-of-sound chorus vocals."
        }
      ],
      "mnemonics": [
        "THE 5-STAGE ENERGY ARC: 20% -> 40% -> 75% -> 30% -> 100%!",
        "FREQUENCY SLOTTING: Kick & sub low, guitars mid, vocal presence high!",
        "DYNAMIC CONTRAST: You cannot have a giant chorus without a quiet verse!"
      ],
      "culturalNotes": [
        "Legendary producers like George Martin (The Beatles), Quincy Jones (Michael Jackson), and Rick Rubin (Red Hot Chili Peppers / Johnny Cash) built historic records on the bedrock of dynamic arrangement contrast."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In applying the principles of Orchestrate dynamic arrangement architectures and production stems, which composition technique best fulfills the musical goal?",
          "options": [
            "Because instruments are too expensive to play in verses (Orchestrate dynamic arrangement architectures and production stems)",
            "Because the computer cannot play all instruments at once (Orchestrate dynamic arrangement architectures and production stems)",
            "To make the song quieter on radio (Orchestrate dynamic arrangement architectures and production stems)",
            "To establish intimate narrative clarity and create massive dynamic contrast when the chorus explodes with full instrumentation (Orchestrate dynamic arrangement architectures and production stems)"
          ],
          "answerIndex": 3,
          "explanation": "Dynamic contrast between intimate verse and exploded chorus creates emotional impact."
        },
        {
          "prompt": "How should Verse 2's arrangement differ from Verse 1's arrangement in modern production?",
          "options": [
            "Verse 2 should be completely silent (Orchestrate dynamic arrangement architectures and production stems)",
            "Verse 2 should play twice as fast (Orchestrate dynamic arrangement architectures and production stems)",
            "Verse 2 must delete all vocals (Orchestrate dynamic arrangement architectures and production stems)",
            "Verse 2 should maintain subtle rhythmic momentum (e.g. holding the bass groove or light percussion)"
          ],
          "answerIndex": 3,
          "explanation": "Preserving light rhythm in Verse 2 prevents momentum loss."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In composition and lyric craft for Unit 8, Lesson 3: Foundational & Structural Mastery, which artistic decision best serves the song?",
          "options": [
            "Stripping the bridge down to a whisper, building a snare roll crescendo on the dominant chord, and dropping all sound for a half-beat before the final chorus detonates (Orchestrate dynamic arrangement architectures and production stems)",
            "Fading the song out during the bridge (Orchestrate dynamic arrangement architectures and production stems)",
            "Changing the key 5 times in 2 seconds (Orchestrate dynamic arrangement architectures and production stems)",
            "Muting the lead singer permanently (Orchestrate dynamic arrangement architectures and production stems)"
          ],
          "answerIndex": 0,
          "explanation": "Acoustic breakdown + dynamic build + breathing drop = maximum final chorus impact."
        },
        {
          "prompt": "What is 'frequency slotting' in song arrangement?",
          "options": [
            "Assigning each instrument to a specific register (bass in low, guitars in mid, cymbals in high)",
            "Setting radio station presets (Orchestrate dynamic arrangement architectures and production stems)",
            "Scheduling studio recording times (Orchestrate dynamic arrangement architectures and production stems)",
            "Buying different colored cables (Orchestrate dynamic arrangement architectures and production stems)"
          ],
          "answerIndex": 0,
          "explanation": "Frequency slotting ensures clarity and separation across the stereo field."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the song section to its optimal arrangement energy level: Verse 1, Pre-Chorus 1, Chorus 1, Bridge, Final Double Chorus:",
          "options": [
            "Verse 1: 20% (Intimate)",
            "Random energy levels (Orchestrate dynamic arrangement architectures and production stems)",
            "All sections: 100% (Orchestrate dynamic arrangement architectures and production stems)",
            "All sections: 0% (Orchestrate dynamic arrangement architectures and production stems)"
          ],
          "answerIndex": 0,
          "explanation": "Arrangement energy arc matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is a 'Vocal Stack' in modern chorus production?",
          "options": [
            "Singing while standing on a chair (Orchestrate dynamic arrangement architectures and production stems)",
            "A pile of sheet music (Orchestrate dynamic arrangement architectures and production stems)",
            "Stacking microphones on top of each other (Orchestrate dynamic arrangement architectures and production stems)",
            "Layering multiple takes of the lead vocal, octave doubles, and 3-part harmonies panned across the stereo field to create a massive 'choir' effect (Orchestrate dynamic arrangement architectures and production stems)"
          ],
          "answerIndex": 3,
          "explanation": "Vocal stacks provide rich choral depth and stereo width in choruses.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why does a wall of continuous maximum loudness with zero dynamic dips cause listener fatigue?",
          "options": [
            "Because speakers overheat (Orchestrate dynamic arrangement architectures and production stems)",
            "Because loudness is illegal (Orchestrate dynamic arrangement architectures and production stems)",
            "Because the human auditory cortex adapts to constant volume (auditory habituation)",
            "Because listeners get bored of music (Orchestrate dynamic arrangement architectures and production stems)"
          ],
          "answerIndex": 2,
          "explanation": "Without quiet valleys, loud peaks lose all emotional and acoustic contrast.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'Arrangement is the art of giving every instrument a clear _______.'",
          "options": [
            "loud amplifier (Orchestrate dynamic arrangement architectures and production stems)",
            "frequency home and conversational role (Orchestrate dynamic arrangement architectures and production stems)",
            "sheet music stand (Orchestrate dynamic arrangement architectures and production stems)",
            "solo performance (Orchestrate dynamic arrangement architectures and production stems)"
          ],
          "answerIndex": 1,
          "explanation": "Frequency separation and conversational musical dialogue.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 8, Lesson 3: Arrangement Dynamic Blueprint:"
  },
  "songwriting-u8-l4": {
    "id": "songwriting-u8-l4",
    "unit": "songwriting-u8",
    "level": "master",
    "objective": "Build a broadcast-ready demo and pitch-ready rough mix blueprint, applying surgical EQ carve-outs, vocal slap delay, sidechain ducking, and stereo imaging to showcase songs to publishers.",
    "presentation": {
      "explanation": "When pitching a song to publishers, artists, or labels, the **Demo Mix Blueprint** must sound immediate, emotional, and commercially competitive:\n\n1. The 5 Essential Demo Mix Pillars:\n   - **The Vocal is King**: The lead vocal must sit on top of the mix, crisp and present. High-pass filter at 100 Hz, slight presence boost at 3-5 kHz, and transparent opto-compression (3-4 dB gain reduction).\n   - **Sidechain Ducking**: Duck the mid-range instruments (guitars, keyboards) by 1.5–2 dB whenever the lead vocal is singing, instantly carving effortless vocal clarity.\n   - **Stereo Width Staging**: Keep Bass, Kick, Snare, and Lead Vocal dead center (Mono). Pan acoustic rhythm guitars 80% Left and 80% Right (Double-tracked). Pan vocal harmonies 50% Left and 50% Right.\n   - **Dimension & Space (Slap & Plate Reverb)**:\n     - Slapback Delay (80–120ms) gives the vocal thickness and intimacy without washing it in muddy reverb.\n     - Lush Plate Reverb (1.8s decay with pre-delay of 30ms) sends the vocal into a shimmering hall on chorus peaks.\n\n2. The Master Bus Pitch Chain:\n   - Gentle bus glue compression (2:1 ratio, slow attack 30ms, auto release) + transparent limiter ensuring true peak $\\le -1.0\\text{ dBTP}$ and integrated loudness $\\approx -14\\text{ LUFS}$ (streaming standard).",
      "examples": [
        {
          "target": "Demo Mix Panning Blueprint: Lead Vocal (Center), Acoustic 1 (80% L), Acoustic 2 (80% R), Bass (Center), Snare (Center), High Harmonies (50% L / 50% R).",
          "reading": "Stereo field distribution",
          "translation": "Commercial stereo imaging."
        },
        {
          "target": "Vocal FX Chain: High-pass 100Hz -> Dynamic EQ (cut 400Hz mud) -> LA-2A Compressor -> 110ms Slap Delay -> 1.8s Shimmer Plate Reverb.",
          "reading": "Professional vocal channel strip",
          "translation": "Broadcast-ready vocal processing."
        }
      ],
      "mnemonics": [
        "VOCAL IS KING: Sits front and center, crisp and unclouded!",
        "PAN THE GUITARS WIDE (80L / 80R): Leave the center highway open for the voice!",
        "SLAP DELAY FOR THICKNESS: 100ms slap before plate reverb!"
      ],
      "culturalNotes": [
        "A publisher or A&R executive listens to 50+ song submissions per day in their car or AirPods; if the demo's lead vocal is buried in muddy instruments within the first 15 seconds, they skip to the next track."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In applying the principles of Build a broadcast-ready demo and pitch-ready rough mix blueprint, which composition technique best fulfills the musical goal?",
          "options": [
            "Panned 100% to the hard right only (Build a broadcastready demo and pitchready rough mix blueprint)",
            "Dead Center (Mono center highway)",
            "Randomly swirling in circles (Build a broadcastready demo and pitchready rough mix blueprint)",
            "Panned 100% to the hard left only (Build a broadcastready demo and pitchready rough mix blueprint)"
          ],
          "answerIndex": 1,
          "explanation": "Core foundation (Kick, Bass, Lead Vocal) belongs dead center."
        },
        {
          "prompt": "Why should acoustic rhythm guitars be double-tracked and panned hard left (80% L) and hard right (80% R)?",
          "options": [
            "It creates massive stereo width and fullness while leaving the center corridor completely open for the lead vocal (Build a broadcastready demo and pitchready rough mix blueprint)",
            "To make the guitars quieter (Build a broadcastready demo and pitchready rough mix blueprint)",
            "To confuse the listener (Build a broadcastready demo and pitchready rough mix blueprint)",
            "Because guitars cannot be played in mono (Build a broadcastready demo and pitchready rough mix blueprint)"
          ],
          "answerIndex": 0,
          "explanation": "Wide stereo panning creates width while leaving the center open for the voice."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In composition and lyric craft for Unit 8, Lesson 4: Foundational & Structural Mastery, which artistic decision best serves the song?",
          "options": [
            "It lets the dry, intimate vocal transient hit the listener's ear first before the reverberant bloom begins, preserving upfront lyrical clarity (Build a broadcastready demo and pitchready rough mix blueprint)",
            "It makes the vocal pitch change (Build a broadcastready demo and pitchready rough mix blueprint)",
            "It delays the whole song by 30 seconds (Build a broadcastready demo and pitchready rough mix blueprint)",
            "It removes all echoes (Build a broadcastready demo and pitchready rough mix blueprint)"
          ],
          "answerIndex": 0,
          "explanation": "Pre-delay separates upfront dry vocal transients from background reverberation."
        },
        {
          "prompt": "What target integrated loudness standard is widely required by streaming services (Spotify, Apple Music)?",
          "options": [
            "Approximately -14 LUFS (Build a broadcastready demo and pitchready rough mix blueprint)",
            "-100 LUFS (Build a broadcastready demo and pitchready rough mix blueprint)",
            "-50 LUFS (Build a broadcastready demo and pitchready rough mix blueprint)",
            "0 LUFS (Build a broadcastready demo and pitchready rough mix blueprint)"
          ],
          "answerIndex": 0,
          "explanation": "-14 LUFS is the global streaming loudness normalization benchmark."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the mix tools to their primary sonic role: High-Pass Filter, Sidechain Ducking, Slapback Delay, Limiter:",
          "options": [
            "All mean delete the track (Build a broadcastready demo and pitchready rough mix blueprint)",
            "All mean turn up the volume (Build a broadcastready demo and pitchready rough mix blueprint)",
            "All are guitar pedals (Build a broadcastready demo and pitchready rough mix blueprint)",
            "High-Pass Filter: Cleans low-end rumble | Sidechain Ducking: Carves vocal space in guitars | Slapback Delay: Thickens vocal without mud | Limiter: Prevents digital clipping (Build a broadcastready demo and pitchready rough mix blueprint)"
          ],
          "answerIndex": 3,
          "explanation": "Audio engineering tool matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is dynamic range preservation more important than extreme brickwall loudness in songwriting pitch demos?",
          "options": [
            "Because loud songs are prohibited (Build a broadcastready demo and pitchready rough mix blueprint)",
            "Because publishers only listen at minimum volume (Build a broadcastready demo and pitchready rough mix blueprint)",
            "Because an overly compressed, crushed demo sounds flat and lifeless on modern streaming platforms that normalize volume, while dynamic arrangements sound huge (Build a broadcastready demo and pitchready rough mix blueprint)",
            "Because loudness causes ear infection (Build a broadcastready demo and pitchready rough mix blueprint)"
          ],
          "answerIndex": 2,
          "explanation": "Dynamic range maintains musical punch under streaming loudness normalization.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is 'mono compatibility' and why is it crucial for song demos?",
          "options": [
            "Playing on 1-string guitars (Build a broadcastready demo and pitchready rough mix blueprint)",
            "Ensuring that when the stereo mix is summed to a single mono speaker (like an iPhone or club speaker)",
            "Singing in 1 pitch only (Build a broadcastready demo and pitchready rough mix blueprint)",
            "Recording with 1 microphone (Build a broadcastready demo and pitchready rough mix blueprint)"
          ],
          "answerIndex": 1,
          "explanation": "Mono compatibility ensures mix integrity across mobile phones and single-speaker devices.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'A pitch demo has one job: deliver the emotional truth of the song with _______.'",
          "options": [
            "unmistakable vocal clarity and irresistible hook power (Build a broadcastready demo and pitchready rough mix blueprint)",
            "maximum distortion (Build a broadcastready demo and pitchready rough mix blueprint)",
            "cheap sound (Build a broadcastready demo and pitchready rough mix blueprint)",
            "hidden lyrics (Build a broadcastready demo and pitchready rough mix blueprint)"
          ],
          "answerIndex": 0,
          "explanation": "Vocal clarity and hook power sell songs.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 8, Lesson 4: Demo Mix Panning Blueprint: Le"
  },
  "songwriting-u8-l5": {
    "id": "songwriting-u8-l5",
    "unit": "songwriting-u8",
    "level": "master",
    "objective": "Demonstrate complete Master Songwriting and Music Theory synthesis across all 8 units by completing the Platinum Capstone Portfolio: lyric audit, harmonic prosody, arrangement dynamic arc, vocal vowel optimization, lead sheet, and demo mix architecture.",
    "presentation": {
      "explanation": "Congratulations! You have reached the **Final Master Capstone of the FEARN Songwriting & Music Theory Curriculum**:\n\n1. The Grand Capstone Platinum Portfolio:\n   - **Title**: *'Northern Star Over Neon City'*\n   - **Tempo**: `124 BPM` | **Key**: `D Major / B Minor` | **Time**: `4/4`.\n   - **Lyrical Theme**: Reclaiming authenticity amidst synthetic commercial chaos.\n\n2. The 8-Unit Master Synthesis Checklist:\n   - **Unit 1 (Rhyme)**: Implements precise AABB/ABAB rhyme schemes with fresh imperfect/family rhymes (*neon/dream on*, *skylines/guidelines*).\n   - **Unit 2 (Rhythm)**: Syllable counts locked into stressed 4-bar metric pulses; zero conversational filler.\n   - **Unit 3 (Structure)**: `V1 -> Pre -> Chorus -> V2 -> Pre -> Chorus -> Bridge -> Final Double Chorus -> Coda`.\n   - **Unit 4 (Melody)**: Leap-and-recover contours, ascending scalar pre-chorus, and high peak note on vocal hook.\n   - **Unit 5 (Sensory Lyrics)**: Pat Pattison 7-channel sensory grounding (*wet asphalt reflection, sulfur smell of matchbooks, cold vinyl seat*).\n   - **Unit 6 (Harmony & Chords)**: Uses modal mixture minor `iv` (Gm in D major for tearjerker climax) and secondary dominant `V7/V` (E7 -> A7).\n   - **Unit 7 (Guided Writing & Lead Sheet)**: Complete lead sheet with chord symbols, melodic notation, and lyric scansion.\n   - **Unit 8 (Revision & Demo Mix)**: Open `/ɑ/` and `/oʊ/` vowels on high B4 peak notes; 5-stage arrangement arc ($20\\% \\rightarrow 40\\% \\rightarrow 75\\% \\rightarrow 30\\% \\rightarrow 100\\%$); broadcast-ready $-14\\text{ LUFS}$ stereo mix.\n\n3. The Master Songwriter's Art:\n   - You possess the complete artistic, harmonic, lyrical, and engineering toolkit to compose timeless songs that resonate across generations.",
      "examples": [
        {
          "target": "Full Capstone Masterwork: 'Northern Star Over Neon City' — Complete Lead Sheet, Lyric Sheet, Harmonic Analysis, and Mix Architecture.",
          "reading": "Songwriting Curriculum Completion",
          "translation": "Platinum-tier songwriting certification."
        },
        {
          "target": "Chorus Climax: | G (IV) | A (V) | Bm (vi) | Gm/Bb (iv6 modal mixture) -> High B4 belt on 'STAR' (/ɑ/ open vowel) -> D (I) |",
          "reading": "Peak harmonic and melodic climax",
          "translation": "Master composition integration."
        }
      ],
      "mnemonics": [
        "PLATINUM MASTERY ACHIEVED: 40 Lessons of Complete Songwriting Excellence!",
        "THE 4 PILLARS: True Lyric Emotion, Unforgettable Melody, Harmonic Depth, Dynamic Architecture!",
        "WRITE FOR THE HUMAN HEART: Art and architecture united in music!"
      ],
      "culturalNotes": [
        "With the completion of Unit 8, you have mastered the complete theoretical, artistic, and commercial songwriting curriculum taught in elite conservatories like Berklee College of Music and practiced by the world's most enduring composers."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In applying the principles of Demonstrate complete Master Songwriting and Music Theory synthesis across all 8 units by completing the Platinum Capstone Portfolio, which composition technique best fulfills the musical goal?",
          "options": [
            "It introduces the haunting emotional power of modal mixture (borrowed from D minor)",
            "Because Gm is an out-of-tune chord (Demonstrate complete Master Songwriting and Music Theory synthesis across all 8 units by completing the Platinum Capstone Portfolio)",
            "Because it was a mistake (Demonstrate complete Master Songwriting and Music Theory synthesis across all 8 units by completing the Platinum Capstone Portfolio)",
            "Because minor chords are mandatory on every bar (Demonstrate complete Master Songwriting and Music Theory synthesis across all 8 units by completing the Platinum Capstone Portfolio)"
          ],
          "answerIndex": 0,
          "explanation": "The minor iv borrowed chord provides the quintessential emotional tearjerker lift."
        },
        {
          "prompt": "Why was the word 'STAR' (/ɑ/ vowel) placed on the melodic apex note (high B4) in the chorus?",
          "options": [
            "The open /ɑ/ vowel provides wide pharyngeal formant resonance, allowing the singer to project maximum power without vocal throat constriction (Demonstrate complete Master Songwriting and Music Theory synthesis across all 8 units by completing the Platinum Capstone Portfolio)",
            "Because stars are bright (Demonstrate complete Master Songwriting and Music Theory synthesis across all 8 units by completing the Platinum Capstone Portfolio)",
            "Because star is a 4-letter word (Demonstrate complete Master Songwriting and Music Theory synthesis across all 8 units by completing the Platinum Capstone Portfolio)",
            "Because stars are in space (Demonstrate complete Master Songwriting and Music Theory synthesis across all 8 units by completing the Platinum Capstone Portfolio)"
          ],
          "answerIndex": 0,
          "explanation": "Open pharyngeal vowels maximize vocal resonance on peak high notes."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In composition and lyric craft for Unit 8, Lesson 5: Foundational & Structural Mastery, which artistic decision best serves the song?",
          "options": [
            "The songwriter stops writing lyrics (Demonstrate complete Master Songwriting and Music Theory synthesis across all 8 units by completing the Platinum Capstone Portfolio)",
            "Intuitive emotional expression is no longer constrained by trial-and-error; every chord choice, melodic leap, and lyric syllable can be intentionally engineered to evoke exact human emotional responses (Demonstrate complete Master Songwriting and Music Theory synthesis across all 8 units by completing the Platinum Capstone Portfolio)",
            "Music becomes purely mathematical with no feelings (Demonstrate complete Master Songwriting and Music Theory synthesis across all 8 units by completing the Platinum Capstone Portfolio)",
            "The songwriter becomes a robot (Demonstrate complete Master Songwriting and Music Theory synthesis across all 8 units by completing the Platinum Capstone Portfolio)"
          ],
          "answerIndex": 1,
          "explanation": "Harmonic and lyrical mastery empowers intentional emotional engineering."
        },
        {
          "prompt": "What are the 4 fundamental pillars synthesized across the entire 40-lesson Songwriting curriculum?",
          "options": [
            "1. Rhyming dictionary only; 2. Autotune only (Demonstrate complete Master Songwriting and Music Theory synthesis across all 8 units by completing the Platinum Capstone Portfolio)",
            "1. Lyrical Craft & Prosody; 2. Melodic Contour & Hook Design; 3. Harmonic Architecture & Voice Leading; 4. Dynamic Arrangement & Production (Demonstrate complete Master Songwriting and Music Theory synthesis across all 8 units by completing the Platinum Capstone Portfolio)",
            "1. Music theory memorization without songwriting (Demonstrate complete Master Songwriting and Music Theory synthesis across all 8 units by completing the Platinum Capstone Portfolio)",
            "1. Playing guitar fast; 2. Buying gear; 3. Social media; 4. Fame (Demonstrate complete Master Songwriting and Music Theory synthesis across all 8 units by completing the Platinum Capstone Portfolio)"
          ],
          "answerIndex": 1,
          "explanation": "Lyrics, Melody, Harmony, and Arrangement form the 4 pillars of songwriting excellence."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What core musical, harmonic, lyrical, and architectural competencies were mastered across the ENTIRE 40-Lesson FEARN Songwriting Curriculum?",
          "options": [
            "Singing in the shower only (Demonstrate complete Master Songwriting and Music Theory synthesis across all 8 units by completing the Platinum Capstone Portfolio)",
            "Buying acoustic guitars only (Demonstrate complete Master Songwriting and Music Theory synthesis across all 8 units by completing the Platinum Capstone Portfolio)",
            "Rhyme schemes & family rhymes, meter & syllable economy, full song structures (Verse-Pre-Chorus-Bridge)",
            "Memorizing radio top 40 lists only (Demonstrate complete Master Songwriting and Music Theory synthesis across all 8 units by completing the Platinum Capstone Portfolio)"
          ],
          "answerIndex": 2,
          "explanation": "Comprehensive 40-lesson Songwriting & Music Theory mastery certification.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the universal definition of 'Prosody' in songwriting?",
          "options": [
            "The length of the guitar neck (Demonstrate complete Master Songwriting and Music Theory synthesis across all 8 units by completing the Platinum Capstone Portfolio)",
            "The complete alignment of all musical elements (melody, rhythm, harmony, tempo, dynamics)",
            "The speed of the drum fill (Demonstrate complete Master Songwriting and Music Theory synthesis across all 8 units by completing the Platinum Capstone Portfolio)",
            "The price of the sheet music (Demonstrate complete Master Songwriting and Music Theory synthesis across all 8 units by completing the Platinum Capstone Portfolio)"
          ],
          "answerIndex": 1,
          "explanation": "Prosody is the perfect alignment of musical expression with lyrical meaning.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is songwriting considered one of the highest forms of human cognitive and emotional synthesis?",
          "options": [
            "Because it simultaneously engages linguistic poetry, mathematical harmonic structures, acoustic physics, human empathy, and universal cultural storytelling in a single unified time-based art form (Demonstrate complete Master Songwriting and Music Theory synthesis across all 8 units by completing the Platinum Capstone Portfolio)",
            "Because songs are loud (Demonstrate complete Master Songwriting and Music Theory synthesis across all 8 units by completing the Platinum Capstone Portfolio)",
            "Because it requires expensive computers (Demonstrate complete Master Songwriting and Music Theory synthesis across all 8 units by completing the Platinum Capstone Portfolio)",
            "It is not a high form of synthesis (Demonstrate complete Master Songwriting and Music Theory synthesis across all 8 units by completing the Platinum Capstone Portfolio)"
          ],
          "answerIndex": 0,
          "explanation": "Songwriting unites poetry, harmonic mathematics, physics, and empathy.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete the songwriter's eternal creed: 'Write the song that only you can write, and make it sound like _______.'",
          "options": [
            "a loud radio commercial (Demonstrate complete Master Songwriting and Music Theory synthesis across all 8 units by completing the Platinum Capstone Portfolio)",
            "an exercise in music theory (Demonstrate complete Master Songwriting and Music Theory synthesis across all 8 units by completing the Platinum Capstone Portfolio)",
            "a computer program (Demonstrate complete Master Songwriting and Music Theory synthesis across all 8 units by completing the Platinum Capstone Portfolio)",
            "it has always existed in the hearts of humankind (Demonstrate complete Master Songwriting and Music Theory synthesis across all 8 units by completing the Platinum Capstone Portfolio)"
          ],
          "answerIndex": 3,
          "explanation": "Great songs feel like they have always existed in the collective heart of humanity.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 8, Lesson 5: Full Capstone Masterwork: 'Nor"
  },
  "songwriting-u5-l1": {
    "id": "songwriting-u5-l1",
    "unit": "songwriting-u5",
    "level": "advanced",
    "objective": "Transform abstract emotional statements into evocative, multi-sensory concrete imagery across all seven sensory channels.",
    "presentation": {
      "explanation": "Great songwriters never just tell the listener what to feel ('I was sad', 'I loved you so much'). They show the physical world so vividly that the listener feels the emotion automatically:\n\n1. The Seven Sensory Channels (Pat Pattison's Object Writing Framework):\n   - **Visual (Sight)**: Neon diner signs flickering in puddles, yellowed receipts on the dashboard.\n   - **Auditory (Sound)**: Screen door slapping against the doorframe, gravel crunching under worn boots.\n   - **Tactile (Touch/Texture)**: Sticky vinyl booth, coarse wool sweater against a sunburned neck.\n   - **Olfactory (Smell)**: Stale diner coffee, damp cedar smoke, rain on hot asphalt (petrichor).\n   - **Gustatory (Taste)**: Metallic tang of cold beer, burnt toast, salt on cracked lips.\n   - **Kinesthetic (Movement/Body in Motion)**: Tossing keys from hand to hand, pacing the kitchen floor.\n   - **Organic (Internal Sensations)**: Heart drumming in the throat, shallow breath, knot in the stomach.\n\n2. The 'Show, Don't Tell' Conversion Rule:\n   - *Abstract / Cliché*: 'I missed you so much when you left.'\n   - *Sensory / Concrete*: 'Your half-empty coffee mug is still sitting on the porch rail, getting cold in the morning fog.'",
      "examples": [
        {
          "target": "Abstract: 'I was lonely in the big city.' -> Concrete: 'Neon buzzes through the blinds; sirens swallow up the night; I sleep on the left side of a double bed.'",
          "reading": "Transforming abstract loneliness into cinematic sensory detail.",
          "translation": "Sensory transformation of loneliness"
        },
        {
          "target": "Abstract: 'We had a bad argument.' -> Concrete: 'Keys hit the hardwood, the screen door rattles in its frame, engine revs down the gravel drive.'",
          "reading": "Auditory and tactile objects establishing domestic conflict.",
          "translation": "Sensory transformation of conflict"
        },
        {
          "target": "Tactile & Olfactory: 'Damp wool and gasoline, grease beneath his fingernails.'",
          "reading": "Immediate character grounding through sensory nouns.",
          "translation": "Sensory character sketch"
        }
      ],
      "mnemonics": [
        "Nouns you can touch, verbs you can see, emotions you can feel!",
        "7 Senses: Sight, Sound, Touch, Taste, Smell, Motion (Kinesthetic), Gut (Organic)."
      ],
      "culturalNotes": [
        "Berklee College of Music professor Pat Pattison pioneered 10-minute daily 'Object Writing' exercises, practiced by Grammy-winning alumni including John Mayer and Gillian Welch."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In applying the principles of Transform abstract emotional statements into evocative, which composition technique best fulfills the musical goal?",
          "options": [
            "'I felt very bad and worried inside my head.' (Transform abstract emotional statements into evocative)",
            "'Anxiety was high and sadness was everywhere.' (Transform abstract emotional statements into evocative)",
            "'I was scared of what would happen next.' (Transform abstract emotional statements into evocative)",
            "'My pulse hammered against my collarbone as my fingers fumbled with the deadbolt.' (Transform abstract emotional statements into evocative)"
          ],
          "answerIndex": 3,
          "explanation": "Pulse hammering (organic) + fingers fumbling deadbolt (kinetic/tactile)."
        },
        {
          "prompt": "What is 'petrichor' often used for in olfactory sensory lyric writing?",
          "options": [
            "The sound of thunder (Transform abstract emotional statements into evocative)",
            "The color of storm clouds (Transform abstract emotional statements into evocative)",
            "The taste of wine (Transform abstract emotional statements into evocative)",
            "The earthy, sharp scent of rain falling on dry summer earth or pavement (Transform abstract emotional statements into evocative)"
          ],
          "answerIndex": 3,
          "explanation": "Petrichor is the distinctive scent of rain on dry ground."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In composition and lyric craft for Unit 5, Lesson 1: Foundational & Structural Mastery, which artistic decision best serves the song?",
          "options": [
            "Gustatory (Transform abstract emotional statements into evocative)",
            "Kinesthetic motion only (Transform abstract emotional statements into evocative)",
            "Olfactory only (Transform abstract emotional statements into evocative)",
            "Auditory & Thermal/Tactile (Transform abstract emotional statements into evocative)"
          ],
          "answerIndex": 3,
          "explanation": "Clanks and hisses (auditory) + freezing drywall (tactile)."
        },
        {
          "prompt": "Why are concrete nouns (e.g. 'rusted Chevrolet', 'chipped ceramic mug') stronger than abstract nouns (e.g. 'vehicle', 'container')?",
          "options": [
            "They are longer words. (Transform abstract emotional statements into evocative)",
            "They rhyme with more vowels. (Transform abstract emotional statements into evocative)",
            "They are required by music copyright law. (Transform abstract emotional statements into evocative)",
            "They trigger vivid, specific visual and emotional memories in the listener's imagination. (Transform abstract emotional statements into evocative)"
          ],
          "answerIndex": 3,
          "explanation": "Specificity sparks cognitive and emotional visualization."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Which line best exemplifies 'Show, Don't Tell' for grief/loss?",
          "options": [
            "'I am overwhelmed by deep grief and sadness every day.' (Transform abstract emotional statements into evocative)",
            "'His winter coat is still hanging behind the front door, smelling like pipe tobacco and rain.' (Transform abstract emotional statements into evocative)",
            "'Death is painful and mourning takes time.' (Transform abstract emotional statements into evocative)",
            "'Losing him was the hardest emotional event of my life.' (Transform abstract emotional statements into evocative)"
          ],
          "answerIndex": 1,
          "explanation": "Specific physical artifact (coat) + olfactory detail (tobacco, rain) evokes genuine emotion.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What are the two 'internal' sensory channels in Pattison's 7-sense system?",
          "options": [
            "Kinesthetic (body movement/motion)",
            "Harmonic and Rhythmic (Transform abstract emotional statements into evocative)",
            "Digital and Acoustic (Transform abstract emotional statements into evocative)",
            "Spiritual and Telepathic (Transform abstract emotional statements into evocative)"
          ],
          "answerIndex": 0,
          "explanation": "Kinesthetic and Organic.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Replace the abstract line 'We were poor' with an evocative visual/tactile lyric:",
          "options": [
            "'We didn't have substantial financial resources.' (Transform abstract emotional statements into evocative)",
            "'Poverty was an issue in our household.' (Transform abstract emotional statements into evocative)",
            "'Money was low and bank accounts were empty.' (Transform abstract emotional statements into evocative)",
            "'Powdered milk in a mason jar, cardboard folded in the sole of my shoe.' (Transform abstract emotional statements into evocative)"
          ],
          "answerIndex": 3,
          "explanation": "Powdered milk + cardboard in shoe conveys poverty through tactile reality.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the primary danger of using clichés like 'tears falling like rain' or 'broken heart'?",
          "options": [
            "They are illegal to use in recorded music. (Transform abstract emotional statements into evocative)",
            "They cannot be sung in major keys. (Transform abstract emotional statements into evocative)",
            "They have been heard so many times that the brain processes them as dull background noise rather than emotional sensory experiences. (Transform abstract emotional statements into evocative)",
            "They violate rhyming rules. (Transform abstract emotional statements into evocative)"
          ],
          "answerIndex": 2,
          "explanation": "Clichés cause semantic bleaching and fail to evoke genuine emotion.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 5, Lesson 1: Transform abstract emotional statements into evocative"
  },
  "songwriting-u5-l2": {
    "id": "songwriting-u5-l2",
    "unit": "songwriting-u5",
    "level": "advanced",
    "objective": "Establish and maintain a consistent, deliberate Point of View (1st-person direct, 2nd-person address, or 3rd-person cinematic observer) without unintended POV drift.",
    "presentation": {
      "explanation": "Point of View (POV) is the lens through which your song's world is perceived:\n\n1. The Three Primary Songwriting POVs:\n   - **First-Person Direct (I / You — The Intimate Conversation)**:\n     - The singer talks directly to another person (*'I saw you standing on the corner, and I couldn't look away'*).\n     - Maximum emotional vulnerability and immediacy. Standard in ballads, pop, and confessional folk.\n   - **First-Person Soliloquy (I / Me — Internal Monologue)**:\n     - The singer talks to themselves or the universe (*'I walk these empty streets alone, wondering where the years went'*).\n     - Introspective, melancholy, contemplative.\n   - **Third-Person Narrative (He / She / They — The Storyteller / Cinematic Observer)**:\n     - The singer acts as an objective narrator chronicling characters (*'Eleanor Rigby picks up the rice in the church where a wedding has been'*).\n     - Creates narrative distance, mythic weight, and rich character portraits.\n   - **Second-Person Direct Address (You — The Accusation or Guide)**:\n     - Direct address to the listener (*'You walked into the party like you were walking onto a yacht'*).\n\n2. The Cardinal Sin: Unintended POV Drift:\n   - Starting in 3rd person (*'Sarah packed her bags at dawn'*) and suddenly switching in the chorus to 1st person direct (*'Why did you leave me alone?'*) without a narrative reason disorients the listener.",
      "examples": [
        {
          "target": "First-Person Direct (I/You): 'You left your keys on the counter, and I don't know who to call.'",
          "reading": "Direct intimate address between two characters.",
          "translation": "Direct I/You perspective"
        },
        {
          "target": "Third-Person Cinematic: 'Ruby takes her coffee black at five in the morning, watching the highway thaw.'",
          "reading": "Objective storytelling establishing character.",
          "translation": "Third-person narrative perspective"
        },
        {
          "target": "Deliberate Perspective Shift: Verse 1-2 in 3rd person story -> Chorus in 1st person universal realization.",
          "reading": "Controlled dramatic shift from external story to internal truth.",
          "translation": "Controlled dramatic perspective shift"
        }
      ],
      "mnemonics": [
        "Pick your camera angle: Selfie (I/You), Diary (I/Me), or Movie Camera (He/She)!",
        "Lock your pronouns from Verse 1 to the final Outro."
      ],
      "culturalNotes": [
        "The Beatles' 'Eleanor Rigby' (Paul McCartney) is a legendary masterclass in 3rd-person cinematic storytelling, cutting between Eleanor Rigby and Father McKenzie like film scenes."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In applying the principles of Establish and maintain a consistent, which composition technique best fulfills the musical goal?",
          "options": [
            "Third-Person Narrative / Observer (Establish and maintain a consistent)",
            "First-Person Soliloquy (Establish and maintain a consistent)",
            "First-Person Direct (Establish and maintain a consistent)",
            "Second-Person Direct Address (Establish and maintain a consistent)"
          ],
          "answerIndex": 0,
          "explanation": "Third-person storyteller perspective observing 'She'."
        },
        {
          "prompt": "What is 'unintended POV drift'?",
          "options": [
            "Accidentally switching pronouns (e.g. from 'she' to 'you')",
            "Singing in a different key (Establish and maintain a consistent)",
            "Using slant rhymes (Establish and maintain a consistent)",
            "Changing the tempo (Establish and maintain a consistent)"
          ],
          "answerIndex": 0,
          "explanation": "Unintended shifting of narrative perspective confuses listeners."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In composition and lyric craft for Unit 5, Lesson 2: Foundational & Structural Mastery, which artistic decision best serves the song?",
          "options": [
            "It uses fewer words. (Establish and maintain a consistent)",
            "It creates an intensely intimate, eavesdropped conversation between two specific people. (Establish and maintain a consistent)",
            "It is easier to rhyme. (Establish and maintain a consistent)",
            "It requires only acoustic instruments. (Establish and maintain a consistent)"
          ],
          "answerIndex": 1,
          "explanation": "Direct address generates immediate emotional proximity."
        },
        {
          "prompt": "Identify the POV error in this draft: Verse 1: 'David drove into the sunset.' Chorus: 'I will never forget the night you held my hand.'",
          "options": [
            "The chorus is too short. (Establish and maintain a consistent)",
            "Sunset does not rhyme with hand. (Establish and maintain a consistent)",
            "The verse is in third-person narrative ('David')",
            "There is no error. (Establish and maintain a consistent)"
          ],
          "answerIndex": 2,
          "explanation": "Abrupt pronoun dislocation from David (3rd person) to 'you' (2nd person)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the song opening to its POV: 'Eleanor Rigby picks up the rice' vs. 'I heard that you're settled down':",
          "options": [
            "Eleanor Rigby: Third-Person Narrative | 'I heard that you...': First-Person Direct (Establish and maintain a consistent)",
            "Both are Second-Person (Establish and maintain a consistent)",
            "Eleanor Rigby is Second-Person (Establish and maintain a consistent)",
            "Both are First-Person (Establish and maintain a consistent)"
          ],
          "answerIndex": 0,
          "explanation": "Third-person storytelling vs. First-person direct address.",
          "type": "multiple-choice"
        },
        {
          "prompt": "When is a perspective shift from Verse (3rd person) to Chorus (1st person) artistically effective?",
          "options": [
            "Whenever rhyming gets difficult (Establish and maintain a consistent)",
            "When the writer forgets the character's name (Establish and maintain a consistent)",
            "Never, it is strictly forbidden (Establish and maintain a consistent)",
            "When the verses tell a character's story and the chorus delivers the singer's universal emotional moral/reaction to that story (Establish and maintain a consistent)"
          ],
          "answerIndex": 3,
          "explanation": "Framing a specific story into a universal thematic reflection.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which pronoun combination defines Second-Person Direct Address?",
          "options": [
            "They / Them (Establish and maintain a consistent)",
            "It / Its (Establish and maintain a consistent)",
            "You / Your (Establish and maintain a consistent)",
            "He / Him (Establish and maintain a consistent)"
          ],
          "answerIndex": 2,
          "explanation": "Second-person casts the listener as the subject.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What emotional tone is best suited for First-Person Soliloquy (I/Me)?",
          "options": [
            "Objective historical documentaries (Establish and maintain a consistent)",
            "Introspective meditation, private confessions, self-reckoning, and internal struggles (Establish and maintain a consistent)",
            "Children's party games (Establish and maintain a consistent)",
            "Aggressive sports chants (Establish and maintain a consistent)"
          ],
          "answerIndex": 1,
          "explanation": "Internal monologue is ideal for introspective contemplation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 5, Lesson 2: Establish and maintain a consistent"
  },
  "songwriting-u5-l3": {
    "id": "songwriting-u5-l3",
    "unit": "songwriting-u5",
    "level": "advanced",
    "objective": "Craft high-impact song titles and chorus hooks using rhythmic cadence, alliteration, vowel openness, and strategic structural placement.",
    "presentation": {
      "explanation": "The Hook is the single most memorable element of your song — the line that gets stuck in the listener's head for days and serves as the song's title:\n\n1. The Three Classic Hook Placements:\n   - **First Line of Chorus (The Immediate Hook)**: Delivers the title/hook right at the explosion of the chorus (e.g. *'Yesterday, all my troubles seemed so far away'*, *'Bad romance'*).\n   - **Last Line of Chorus (The Payoff / Punchline Hook)**: The chorus builds narrative tension across 3 lines, resolving triumphantly on the title in the final line (e.g. *'Like a rolling stone'*, *'Someone like you'*).\n   - **Bookend Hook (First AND Last Line)**: Opens the chorus with the title and drives it home at the end for maximum retention.\n\n2. Phonetics & Meter of an Unforgettable Hook:\n   - **Open Vowels on High Melodic Notes**: Long 'A' (/eɪ/), 'I' (/aɪ/), 'O' (/oʊ/), and 'AH' (/ɑː/) sounds allow the singer's voice to resonate freely (e.g. *'Hallelujah'*, *'Stay'*, *'Roar'*).\n   - **Strong Rhythmic Cadence (Meter)**: Hooks often use syncopation, alliteration (e.g. *'Sweet Surrender'*, *'Rolling in the Deep'*), or rhythmic repetition.\n   - **Title-Hook Congruence**: The hook SHOULD be the song title so listeners can immediately search for it on streaming platforms.",
      "examples": [
        {
          "target": "First-Line Hook: 'Walking on Sunshine' — immediate high-energy title delivery.",
          "reading": "Delivering the title on the chorus downbeat.",
          "translation": "First-line chorus hook"
        },
        {
          "target": "Last-Line Payoff Hook: 'After all the bridges burned... you were just a lesson learned.'",
          "reading": "Building harmonic tension that resolves on the title payoff.",
          "translation": "Last-line payoff hook"
        },
        {
          "target": "Open Vowel Peak: Belting 'STAY' on a high note with an open /eɪ/ vowel sound.",
          "reading": "Vowel phonetics tailored for vocal power.",
          "translation": "Open vowel phonetics"
        }
      ],
      "mnemonics": [
        "If they can't remember the title, they can't stream the song!",
        "Open vowels soar; closed consonants bite."
      ],
      "culturalNotes": [
        "In Nashville publishing houses, songwriters often pitch 'title-first' — starting with a compelling 3-4 word phrase and building the entire song structure around that single hook."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In applying the principles of Craft high-impact song titles and chorus hooks using rhythmic cadence, which composition technique best fulfills the musical goal?",
          "options": [
            "A comedy joke told during the guitar solo (Craft highimpact song titles and chorus hooks using rhythmic cadence)",
            "A whisper at the end of the song (Craft highimpact song titles and chorus hooks using rhythmic cadence)",
            "A sudden drum beat (Craft highimpact song titles and chorus hooks using rhythmic cadence)",
            "A hook placed on the very last line of the chorus that resolves the emotional tension built by the preceding lines (Craft highimpact song titles and chorus hooks using rhythmic cadence)"
          ],
          "answerIndex": 3,
          "explanation": "Last-line hooks deliver the emotional resolution and title payoff."
        },
        {
          "prompt": "Why are open vowel sounds (like 'ay', 'oh', 'ah') preferred on the peak melodic notes of a chorus hook?",
          "options": [
            "They take up less space on paper. (Craft highimpact song titles and chorus hooks using rhythmic cadence)",
            "They are the only vowels in English. (Craft highimpact song titles and chorus hooks using rhythmic cadence)",
            "They prevent the singer from breathing. (Craft highimpact song titles and chorus hooks using rhythmic cadence)",
            "They allow the singer's vocal tract to stay open and resonate with maximum power and clarity. (Craft highimpact song titles and chorus hooks using rhythmic cadence)"
          ],
          "answerIndex": 3,
          "explanation": "Open vowels maximize vocal resonance on high notes."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In composition and lyric craft for Unit 5, Lesson 3: Foundational & Structural Mastery, which artistic decision best serves the song?",
          "options": [
            "'Burn the Midnight Oil' (Craft highimpact song titles and chorus hooks using rhythmic cadence)",
            "'A Situational Observation of Late Evening Work' (Craft highimpact song titles and chorus hooks using rhythmic cadence)",
            "'Things Are Difficult Tonight' (Craft highimpact song titles and chorus hooks using rhythmic cadence)",
            "'Doing Stuff After Dark' (Craft highimpact song titles and chorus hooks using rhythmic cadence)"
          ],
          "answerIndex": 0,
          "explanation": "Rhythmic cadence + vivid imagery = memorable hook."
        },
        {
          "prompt": "What is the 'Bookend Hook' structure in a chorus?",
          "options": [
            "Singing the title/hook on both the FIRST line and the LAST line of the chorus (Craft highimpact song titles and chorus hooks using rhythmic cadence)",
            "Singing only in libraries (Craft highimpact song titles and chorus hooks using rhythmic cadence)",
            "Placing hooks only in the intro (Craft highimpact song titles and chorus hooks using rhythmic cadence)",
            "Ending the song with silence (Craft highimpact song titles and chorus hooks using rhythmic cadence)"
          ],
          "answerIndex": 0,
          "explanation": "First and last line bookending reinforces title recall."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What is the primary commercial and artistic purpose of a chorus hook?",
          "options": [
            "To introduce new characters in every line (Craft highimpact song titles and chorus hooks using rhythmic cadence)",
            "To avoid rhyming (Craft highimpact song titles and chorus hooks using rhythmic cadence)",
            "To fill 30 seconds of instrumental space (Craft highimpact song titles and chorus hooks using rhythmic cadence)",
            "To serve as the core emotional takeaway and indelible melodic/lyric signature that defines the song in the listener's memory (Craft highimpact song titles and chorus hooks using rhythmic cadence)"
          ],
          "answerIndex": 3,
          "explanation": "The hook is the core emotional and melodic anchor of the song.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is it dangerous to hide the song's title in a quiet, passing verse line instead of the chorus?",
          "options": [
            "It damages the recording tape. (Craft highimpact song titles and chorus hooks using rhythmic cadence)",
            "It requires extra verses. (Craft highimpact song titles and chorus hooks using rhythmic cadence)",
            "Listeners won't recognize it as the main title and won't be able to search for or remember the song. (Craft highimpact song titles and chorus hooks using rhythmic cadence)",
            "It breaks copyright rules. (Craft highimpact song titles and chorus hooks using rhythmic cadence)"
          ],
          "answerIndex": 2,
          "explanation": "Title-hook congruence is essential for listener recognition.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which phrase uses alliteration and strong cadence for hook impact?",
          "options": [
            "'Watching video entertainment' (Craft highimpact song titles and chorus hooks using rhythmic cadence)",
            "'Silver Screen Secrets' (Craft highimpact song titles and chorus hooks using rhythmic cadence)",
            "'Some movies are interesting' (Craft highimpact song titles and chorus hooks using rhythmic cadence)",
            "'Film theaters on Friday' (Craft highimpact song titles and chorus hooks using rhythmic cadence)"
          ],
          "answerIndex": 1,
          "explanation": "Alliteration + punchy meter creates instant stickiness.",
          "type": "multiple-choice"
        },
        {
          "prompt": "True or False: A great hook can be a single word (e.g. 'Hallelujah', 'Royals', 'Respect', 'Stay').",
          "options": [
            "True (Craft highimpact song titles and chorus hooks using rhythmic cadence)",
            "False (Craft highimpact song titles and chorus hooks using rhythmic cadence)"
          ],
          "answerIndex": 0,
          "explanation": "True. Single-word powerhouse hooks are timeless classics.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 5, Lesson 3: First-Line Hook: 'Walking on S"
  },
  "songwriting-u5-l4": {
    "id": "songwriting-u5-l4",
    "unit": "songwriting-u5",
    "level": "advanced",
    "objective": "Weave extended thematic metaphors and recurring physical motifs across verses to unify a lyric from beginning to end.",
    "presentation": {
      "explanation": "An Extended Metaphor (or Conceit) uses a single physical world domain (ships at sea, an old pickup truck, a burning house, a gambling table) to explore a complex emotional truth throughout an entire song:\n\n1. Tenor vs. Vehicle in Songwriting:\n   - **Tenor (The Hidden Emotional Subject)**: The painful deterioration of a marriage.\n   - **Vehicle (The Physical Imagery Used)**: A historic wooden house undergoing dry rot and settling foundations.\n\n2. Developing the Extended Motif Across Sections:\n   - **Verse 1**: Lay the foundation (the blueprints, the fresh paint, the porch swing in spring).\n   - **Verse 2**: Introduce wear and tear (the cracked window, the leaking ceiling, the door that won't close).\n   - **Chorus**: Deliver the core emotional hook connecting the house to the relationship (*'We built a house of cards on a foundation of sand'*).\n   - **Bridge**: The breaking point (the winter storm, the gale winds that test the walls).\n   - **Outro**: The aftermath (the empty lot, the chimney standing alone).\n\n3. Avoiding Mixed Metaphors:\n   - If your song is set on a sailing ship, do NOT suddenly switch to poker chips and aces in the second verse unless you explicitly bridge them. Keep the physical universe cohesive!",
      "examples": [
        {
          "target": "Navigation Motif: Verse 1 compass -> Verse 2 lighthouse -> Bridge uncharted waters -> Outro shipwreck.",
          "reading": "Cohesive nautical imagery unified across all four song sections.",
          "translation": "Cohesive nautical extended metaphor"
        },
        {
          "target": "Gambling Conceit: 'Folding a winning hand', 'bluffing through the tears', 'all-in on midnight'.",
          "reading": "Consistent card/gambling vocabulary exploring romantic risk.",
          "translation": "Gambling extended conceit"
        },
        {
          "target": "Seasonal Architecture: Spring romance -> Summer passion -> Autumn cooling -> Winter solitude.",
          "reading": "Timeless chronological seasonal metaphor framing life stages.",
          "translation": "Seasonal chronological metaphor"
        }
      ],
      "mnemonics": [
        "Pick one physical playground and mine it for all its sensory gold!",
        "Don't mix metaphors: don't steer a boat with a steering wheel or play poker with a tennis racket."
      ],
      "culturalNotes": [
        "Bruce Springsteen's 'The River' and Paul Simon's 'Bridge Over Troubled Water' are definitive examples of central water metaphors sustaining entire masterworks."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In applying the principles of Weave extended thematic metaphors and recurring physical motifs across verses to unify a lyric from beginning to end, which composition technique best fulfills the musical goal?",
          "options": [
            "The musical instrument played (Weave extended thematic metaphors and recurring physical motifs across verses to unify a lyric from beginning to end)",
            "The concrete physical image or world used to represent the emotion (Weave extended thematic metaphors and recurring physical motifs across verses to unify a lyric from beginning to end)",
            "The rhyming dictionary (Weave extended thematic metaphors and recurring physical motifs across verses to unify a lyric from beginning to end)",
            "The tour bus of the band (Weave extended thematic metaphors and recurring physical motifs across verses to unify a lyric from beginning to end)"
          ],
          "answerIndex": 1,
          "explanation": "Vehicle = physical concrete image; Tenor = underlying emotion."
        },
        {
          "prompt": "What is a 'mixed metaphor' error?",
          "options": [
            "Inconsistently combining incompatible physical imagery (Weave extended thematic metaphors and recurring physical motifs across verses to unify a lyric from beginning to end)",
            "Singing in harmony (Weave extended thematic metaphors and recurring physical motifs across verses to unify a lyric from beginning to end)",
            "Writing a verse with 5 lines (Weave extended thematic metaphors and recurring physical motifs across verses to unify a lyric from beginning to end)",
            "Using two instruments at once (Weave extended thematic metaphors and recurring physical motifs across verses to unify a lyric from beginning to end)"
          ],
          "answerIndex": 0,
          "explanation": "Mixed metaphors clash logically and pull listeners out of the song world."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In composition and lyric craft for Unit 5, Lesson 4: Foundational & Structural Mastery, which artistic decision best serves the song?",
          "options": [
            "'Frost gathers on the inside of the bedroom glass, and your side of the bed is ice.' (Weave extended thematic metaphors and recurring physical motifs across verses to unify a lyric from beginning to end)",
            "'It was eighty degrees outside.' (Weave extended thematic metaphors and recurring physical motifs across verses to unify a lyric from beginning to end)",
            "'The summer sun was hot and bright on the beach.' (Weave extended thematic metaphors and recurring physical motifs across verses to unify a lyric from beginning to end)",
            "'Let's go swimming in the tropical ocean.' (Weave extended thematic metaphors and recurring physical motifs across verses to unify a lyric from beginning to end)"
          ],
          "answerIndex": 0,
          "explanation": "Maintains thematic and seasonal temperature consistency."
        },
        {
          "prompt": "Why is an extended motif across verses satisfying to the human brain?",
          "options": [
            "It creates subconscious thematic resonance, symmetry, and poetic cohesion (deliberate practice)",
            "It ensures a fast tempo. (Weave extended thematic metaphors and recurring physical motifs across verses to unify a lyric from beginning to end)",
            "It makes the song louder. (Weave extended thematic metaphors and recurring physical motifs across verses to unify a lyric from beginning to end)",
            "It requires fewer chords. (Weave extended thematic metaphors and recurring physical motifs across verses to unify a lyric from beginning to end)"
          ],
          "answerIndex": 0,
          "explanation": "Cognitive pattern completion produces aesthetic delight and emotional unity."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Trace the logical progression of an extended architectural motif across a 3-act song:",
          "options": [
            "Changing topics every two lines (Weave extended thematic metaphors and recurring physical motifs across verses to unify a lyric from beginning to end)",
            "Eating dinner -> Flying a plane -> Buying a shoe (Weave extended thematic metaphors and recurring physical motifs across verses to unify a lyric from beginning to end)",
            "Laying the foundation (Weave extended thematic metaphors and recurring physical motifs across verses to unify a lyric from beginning to end)",
            "Singing the chorus 10 times in a row (Weave extended thematic metaphors and recurring physical motifs across verses to unify a lyric from beginning to end)"
          ],
          "answerIndex": 2,
          "explanation": "Logical physical progression mirrors narrative and emotional escalation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which lyric uses a fresh, non-clichéd metaphor for fading memory?",
          "options": [
            "'Time flies like an arrow.' (Weave extended thematic metaphors and recurring physical motifs across verses to unify a lyric from beginning to end)",
            "'You're just a Polaroid left too long on the dashboard in the Texas sun.' (Weave extended thematic metaphors and recurring physical motifs across verses to unify a lyric from beginning to end)",
            "'I forget you like yesterday's news.' (Weave extended thematic metaphors and recurring physical motifs across verses to unify a lyric from beginning to end)",
            "'You are slipping away like sand.' (Weave extended thematic metaphors and recurring physical motifs across verses to unify a lyric from beginning to end)"
          ],
          "answerIndex": 1,
          "explanation": "Specific physical artifact (faded sun-bleached Polaroid) is vivid and original.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the primary role of the Bridge when developing an extended metaphor?",
          "options": [
            "To provide a critical shift in perspective, reveal the hidden truth behind the metaphor, or reach the ultimate breaking point (Weave extended thematic metaphors and recurring physical motifs across verses to unify a lyric from beginning to end)",
            "To repeat Verse 1 word-for-word (Weave extended thematic metaphors and recurring physical motifs across verses to unify a lyric from beginning to end)",
            "To tune the acoustic guitar (Weave extended thematic metaphors and recurring physical motifs across verses to unify a lyric from beginning to end)",
            "To introduce unrelated characters (Weave extended thematic metaphors and recurring physical motifs across verses to unify a lyric from beginning to end)"
          ],
          "answerIndex": 0,
          "explanation": "The bridge offers the dramatic breakthrough or turning point.",
          "type": "multiple-choice"
        },
        {
          "prompt": "True or False: An extended metaphor must be explained literally to the audience in the song lyrics.",
          "options": [
            "False (Weave extended thematic metaphors and recurring physical motifs across verses to unify a lyric from beginning to end)",
            "True (Weave extended thematic metaphors and recurring physical motifs across verses to unify a lyric from beginning to end)"
          ],
          "answerIndex": 0,
          "explanation": "False. Trust the audience's emotional intelligence; show, don't lecture.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 5, Lesson 4: Navigation Motif: Verse 1 comp"
  },
  "songwriting-u5-l5": {
    "id": "songwriting-u5-l5",
    "unit": "songwriting-u5",
    "level": "advanced",
    "objective": "Pass an advanced lyric-craft checkpoint evaluating sensory density, POV discipline, hook memorability, and thematic extended metaphor cohesion.",
    "presentation": {
      "explanation": "In this Master Checkpoint for Unit 5, we test your ability to edit, diagnose, and polish raw lyric drafts into professional-caliber songwriting:\n\n1. The Professional 4-Point Lyric Diagnostic Checklist:\n   - **1. Sensory Grounding**: Are at least 3 of the 7 senses engaged in every verse? (Are there concrete nouns you can touch, see, or smell?)\n   - **2. POV Integrity**: Is the pronoun perspective (I/You, I/Me, He/She) steady, intentional, and free of accidental drift?\n   - **3. Hook & Title Payload**: Does the chorus deliver a sticky, rhythmic, open-vowel title phrase that resolves the verse tension?\n   - **4. Thematic Unity**: Does the imagery belong to a coherent physical world, or does it wander aimlessly across disconnected clichés?\n\n2. Real-World Diagnostic Exercise:\n   - *Raw Draft*: 'I felt so sad when you left our house. You broke my heart and I miss you. Now I am lonely in this town.'\n   - *Polished Masterclass Rewrite*: 'Your keys are still hanging on the hallway hook / The screen door rattles in the morning breeze / There's a half-empty cup of cold black coffee / And a closet full of empty hangers rattling at my knees.'",
      "examples": [
        {
          "target": "Masterclass Rewrite: Replacing 'I am lonely' with 'closet full of empty hangers rattling at my knees'.",
          "reading": "Auditory, visual, and organic sensory details replacing emotional abstraction.",
          "translation": "Sensory Lyric Masterclass Polish"
        },
        {
          "target": "Hook Payoff: 'We built a mansion on quicksand / Now we're sinking in the dark.'",
          "reading": "Rhythmic, metaphorical title hook with open vowels.",
          "translation": "Metaphorical Chorus Hook Payoff"
        },
        {
          "target": "POV Discipline: Maintaining intimate 1st-person I/You throughout verses, chorus, and bridge.",
          "reading": "Rock-solid pronoun consistency.",
          "translation": "Unbroken POV discipline"
        }
      ],
      "mnemonics": [
        "Sensory, Steady POV, Sticky Hook, Structured Metaphor — the 4 S's of Lyric Craft!",
        "Don't write what you feel; write what you SAW that made you feel it."
      ],
      "culturalNotes": [
        "In hit songwriting collaborations, 80% of session time is spent on 'line rewriting' — testing 10 different variations of a single line until the sensory rhythm and vowel resonance are airtight."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In applying the principles of Pass an advanced lyric-craft checkpoint evaluating sensory density, which composition technique best fulfills the musical goal?",
          "options": [
            "'The radiator clanks like an iron bell in the freezing four-flight walkup.' (Pass an advanced lyriccraft checkpoint evaluating sensory density)",
            "'The apartment was cold and I didn't like it.' (Pass an advanced lyriccraft checkpoint evaluating sensory density)",
            "'Winter made the room very chilly.' (Pass an advanced lyriccraft checkpoint evaluating sensory density)",
            "'I felt cold in the building.' (Pass an advanced lyriccraft checkpoint evaluating sensory density)"
          ],
          "answerIndex": 0,
          "explanation": "Combines auditory (clanks like iron bell), thermal (freezing), and spatial (four-flight walkup) precision."
        },
        {
          "prompt": "Why is 'Your closet is full of empty wire hangers' a powerful lyric for a breakup song?",
          "options": [
            "It turns the physical absence of clothes into a visual and auditory symbol of abandonment without using the word 'sad'. (Pass an advanced lyriccraft checkpoint evaluating sensory density)",
            "It teaches people how to organize closets. (Pass an advanced lyriccraft checkpoint evaluating sensory density)",
            "It rhymes with many words. (Pass an advanced lyriccraft checkpoint evaluating sensory density)",
            "It is cheap to produce. (Pass an advanced lyriccraft checkpoint evaluating sensory density)"
          ],
          "answerIndex": 0,
          "explanation": "Specific visual/tactile artifact implies the emotional weight of departure."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In composition and lyric craft for Unit 5, Lesson 5: Foundational & Structural Mastery, which artistic decision best serves the song?",
          "options": [
            "Never repeated (Pass an advanced lyriccraft checkpoint evaluating sensory density)",
            "At least 3 to 4 times across the chorus and outro so the listener can easily recall and sing along (Pass an advanced lyriccraft checkpoint evaluating sensory density)",
            "50 times in the first verse (Pass an advanced lyriccraft checkpoint evaluating sensory density)",
            "Exactly once in the bridge (Pass an advanced lyriccraft checkpoint evaluating sensory density)"
          ],
          "answerIndex": 1,
          "explanation": "Repetition builds familiarity, emotional resonance, and earworm recall."
        },
        {
          "prompt": "Diagnose the flaw in this draft line: 'He walked into the stormy tempest with a heavy heart of sorrow.'",
          "options": [
            "Contains no verbs (Pass an advanced lyriccraft checkpoint evaluating sensory density)",
            "Double redundancy and clichéd abstraction ('stormy tempest', 'heart of sorrow')",
            "Uses past tense (Pass an advanced lyriccraft checkpoint evaluating sensory density)",
            "Too short (Pass an advanced lyriccraft checkpoint evaluating sensory density)"
          ],
          "answerIndex": 1,
          "explanation": "Redundant clichés dilute emotional impact."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What are the core diagnostic criteria of the 4 S's of professional lyric craft?",
          "options": [
            "Speed, Solos, Synthesizers, and Shouting (Pass an advanced lyriccraft checkpoint evaluating sensory density)",
            "Sensory grounding (7 channels)",
            "Simple rhymes, Short verses, Solar power, and Slang only (Pass an advanced lyriccraft checkpoint evaluating sensory density)",
            "Soprano vocals only (Pass an advanced lyriccraft checkpoint evaluating sensory density)"
          ],
          "answerIndex": 1,
          "explanation": "Sensory, Steady POV, Sticky Hook, Structured Metaphor.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which phrase is an example of an 'organic' sensory detail?",
          "options": [
            "'A lump the size of a fist in the back of my throat' (Pass an advanced lyriccraft checkpoint evaluating sensory density)",
            "'A blue car on the road' (Pass an advanced lyriccraft checkpoint evaluating sensory density)",
            "'A loud guitar strum' (Pass an advanced lyriccraft checkpoint evaluating sensory density)",
            "'A green grass lawn' (Pass an advanced lyriccraft checkpoint evaluating sensory density)"
          ],
          "answerIndex": 0,
          "explanation": "Internal visceral physical sensation (throat lump) = organic sense.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What core competencies were mastered across Unit 5 in Songwriting?",
          "options": [
            "MIDI programming only (Pass an advanced lyriccraft checkpoint evaluating sensory density)",
            "Drum tuning only (Pass an advanced lyriccraft checkpoint evaluating sensory density)",
            "Music copyright contracts only (Pass an advanced lyriccraft checkpoint evaluating sensory density)",
            "7-channel sensory object writing, Point of View (I/You, He/She)"
          ],
          "answerIndex": 3,
          "explanation": "Unit 5 complete advanced lyric craft, imagery, POV, and hook mastery.",
          "type": "multiple-choice"
        },
        {
          "prompt": "How does great lyric writing connect with human psychology and cognitive memory?",
          "options": [
            "It tricks the ear into ignoring the melody. (Pass an advanced lyriccraft checkpoint evaluating sensory density)",
            "It puts listeners to sleep. (Pass an advanced lyriccraft checkpoint evaluating sensory density)",
            "Concrete sensory nouns trigger the brain's sensory cortex, causing listeners to physically re-experience the singer's emotions (deliberate practice)",
            "It eliminates the need for musical chords. (Pass an advanced lyriccraft checkpoint evaluating sensory density)"
          ],
          "answerIndex": 2,
          "explanation": "Sensory language activates perceptual neural circuits in listeners.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 5, Lesson 5: Masterclass Rewrite: Replacing"
  }
};
  var CURRICULUM = { id: 'songwriting', name: "songwriting", units: UNITS, lessons: LESSONS };
  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};
  global.FEARN_CURRICULA['songwriting'] = CURRICULUM;
  if (typeof module !== 'undefined' && module.exports) module.exports = CURRICULUM;
})(typeof window !== 'undefined' ? window : global);
