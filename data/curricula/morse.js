// morse curriculum — fully authored
(function (global) {
  'use strict';
  var UNITS = [
  {
    "id": "morse-u1",
    "unit": 1,
    "title": "Timing Foundations & E-I-S-H / T-M-O",
    "level": "Beginner",
    "goal": "Mastery of Timing Foundations & E-I-S-H / T-M-O.",
    "lessonIds": [
      "morse-u1-l1",
      "morse-u1-l2",
      "morse-u1-l3",
      "morse-u1-l4",
      "morse-u1-l5"
    ]
  },
  {
    "id": "morse-u2",
    "unit": 2,
    "title": "Opposites & Inverses (A-N, U-D, V-B)",
    "level": "Beginner",
    "goal": "Mastery of Opposites & Inverses (A-N, U-D, V-B).",
    "lessonIds": [
      "morse-u2-l1",
      "morse-u2-l2",
      "morse-u2-l3",
      "morse-u2-l4",
      "morse-u2-l5"
    ]
  },
  {
    "id": "morse-u3",
    "unit": 3,
    "title": "Sandwiches & Symmetries (R-K, P-X, W-G)",
    "level": "Beginner",
    "goal": "Mastery of Sandwiches & Symmetries (R-K, P-X, W-G).",
    "lessonIds": [
      "morse-u3-l1",
      "morse-u3-l2",
      "morse-u3-l3",
      "morse-u3-l4",
      "morse-u3-l5"
    ]
  },
  {
    "id": "morse-u4",
    "unit": 4,
    "title": "Complete Alphabet & Rhythm Recognition",
    "level": "Intermediate",
    "goal": "Mastery of Complete Alphabet & Rhythm Recognition.",
    "lessonIds": [
      "morse-u4-l1",
      "morse-u4-l2",
      "morse-u4-l3",
      "morse-u4-l4",
      "morse-u4-l5"
    ]
  },
  {
    "id": "morse-u5",
    "unit": 5,
    "title": "Numerals (1-5 & 6-0) Fingerprint Speed",
    "level": "Intermediate",
    "goal": "Mastery of Numerals (1-5 & 6-0) Fingerprint Speed.",
    "lessonIds": [
      "morse-u5-l1",
      "morse-u5-l2",
      "morse-u5-l3",
      "morse-u5-l4",
      "morse-u5-l5"
    ]
  },
  {
    "id": "morse-u6",
    "unit": 6,
    "title": "Punctuation & Prosigns (AR, SK, BT, SOS)",
    "level": "Intermediate",
    "goal": "Mastery of Punctuation & Prosigns (AR, SK, BT, SOS).",
    "lessonIds": [
      "morse-u6-l1",
      "morse-u6-l2",
      "morse-u6-l3",
      "morse-u6-l4",
      "morse-u6-l5"
    ]
  },
  {
    "id": "morse-u7",
    "unit": 7,
    "title": "Farnsworth Method High-Speed Audio",
    "level": "Advanced",
    "goal": "Mastery of Farnsworth Method High-Speed Audio.",
    "lessonIds": [
      "morse-u7-l1",
      "morse-u7-l2",
      "morse-u7-l3",
      "morse-u7-l4",
      "morse-u7-l5"
    ]
  },
  {
    "id": "morse-u8",
    "unit": 8,
    "title": "CW Call-Sign Copying & Q-Codes",
    "level": "Advanced",
    "goal": "Mastery of CW Call-Sign Copying & Q-Codes.",
    "lessonIds": [
      "morse-u8-l1",
      "morse-u8-l2",
      "morse-u8-l3",
      "morse-u8-l4",
      "morse-u8-l5"
    ]
  },
  {
    "id": "morse-u9",
    "unit": 9,
    "title": "Standard QSO Exchange & Weather Reports",
    "level": "Expert",
    "goal": "Mastery of Standard QSO Exchange & Weather Reports.",
    "lessonIds": [
      "morse-u9-l1",
      "morse-u9-l2",
      "morse-u9-l3",
      "morse-u9-l4",
      "morse-u9-l5"
    ]
  },
  {
    "id": "morse-u10",
    "unit": 10,
    "title": "High-Speed Head Copy (25+ WPM Mastery)",
    "level": "Master",
    "goal": "Mastery of High-Speed Head Copy (25+ WPM Mastery).",
    "lessonIds": [
      "morse-u10-l1",
      "morse-u10-l2",
      "morse-u10-l3",
      "morse-u10-l4",
      "morse-u10-l5"
    ]
  }
];
  var LESSONS = {
  "morse-u1-l1": {
    "id": "morse-u1-l1",
    "unit": "morse-u1",
    "level": "beginner",
    "objective": "Recognize and send the letters E and T by their rhythm alone, at full character speed with wide spacing.",
    "difficulty": 500,
    "presentation": {
      "explanation": "We start with the two shortest characters in Morse code: E (a single dit, \".\") and T (a single dah, \"-\"). The Farnsworth method means we send these at full \"character speed\" — each dit and dah timed the same as a fluent 20 WPM operator would send them, so your ear learns the correct rhythm from lesson one and never has to \"unlearn\" a slow, mushy sound later. What makes this method beginner-friendly is the SPACING: after each character, and especially after each word, we leave a long pause — far longer than a real 20 WPM sender would use — so you have time to consciously think \"that was a dit, that is E\" before the next character arrives. As you progress through this course, the character sounds themselves never change speed; only the spacing between them shrinks. Practice tip: say \"dit\" and \"dah\" out loud as you tap, since the muscle-and-voice rhythm cements the pattern faster than looking at dots and dashes on a page.",
      "examples": [
        {
          "pattern": ".",
          "character": "E",
          "description": "A single short tap — the shortest possible Morse character."
        },
        {
          "pattern": "-",
          "character": "T",
          "description": "A single long tap — held roughly three times as long as a dit."
        },
        {
          "pattern": ". -",
          "character": "E T",
          "description": "Two characters with a normal inter-character gap (wide, Farnsworth-spaced) between them."
        },
        {
          "pattern": "- .",
          "character": "T E",
          "description": "Same two characters, reversed order, to break simple memorized-sequence guessing."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U1-L1】: Focus on visualizing the fundamental pattern and structural dependencies for Recognize and send the letters."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U1-L1】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "id": "morse-u1-l1-q1",
          "type": "decode",
          "prompt": "Decode this pattern: \".\"",
          "answer": "E",
          "difficulty": 500
        },
        {
          "id": "morse-u1-l1-q2",
          "type": "decode",
          "prompt": "Decode this pattern: \"-\"",
          "answer": "T",
          "difficulty": 500
        },
        {
          "id": "morse-u1-l1-q3",
          "type": "encode",
          "prompt": "Write the Morse pattern for the letter T.",
          "answer": "-",
          "difficulty": 500
        },
        {
          "id": "morse-u1-l1-q4",
          "type": "decode",
          "prompt": "Decode this two-character sequence: \". -\"",
          "answer": "ET",
          "difficulty": 550
        }
      ]
    }
  },
  "morse-u1-l2": {
    "id": "morse-u1-l2",
    "unit": "morse-u1",
    "level": "beginner",
    "objective": "Recognize and send the letters I and M, and copy them mixed with E and T.",
    "difficulty": 520,
    "presentation": {
      "explanation": "I (\"..\" — two dits) and M (\"--\" — two dahs) are the natural next step: they are simply E and T doubled, so your ear is building on a pattern it already trusts rather than learning something unrelated. This is the core of Koch-style progression — each new lesson adds only one or two genuinely new sounds, and every drill mixes ALL characters learned so far, never just the newest ones, so you build real recognition instead of a memorized sequence.",
      "examples": [
        {
          "pattern": "..",
          "character": "I",
          "description": "Two short dits, evenly spaced within the character."
        },
        {
          "pattern": "--",
          "character": "M",
          "description": "Two long dahs — often described as sounding like \"dah-dah.\""
        },
        {
          "pattern": ". .. - --",
          "character": "E I T M",
          "description": "All four learned characters mixed in one drill line, wide-spaced."
        },
        {
          "pattern": "-- .. - .",
          "character": "M I T E",
          "description": "Same character set, scrambled order, to prevent sequence memorization."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U1-L2】: Focus on visualizing the fundamental pattern and structural dependencies for Recognize and send the letters."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U1-L2】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "id": "morse-u1-l2-q1",
          "type": "decode",
          "prompt": "Decode: \"..\"",
          "answer": "I",
          "difficulty": 520
        },
        {
          "id": "morse-u1-l2-q2",
          "type": "decode",
          "prompt": "Decode: \"--\"",
          "answer": "M",
          "difficulty": 520
        },
        {
          "id": "morse-u1-l2-q3",
          "type": "decode",
          "prompt": "Decode this mixed sequence: \". -- . -\"",
          "answer": "EMET",
          "difficulty": 580
        },
        {
          "id": "morse-u1-l2-q4",
          "type": "encode",
          "prompt": "Write the Morse pattern for the word \"TIE\" is not valid yet (no letters beyond E T I M) — instead encode \"MITE\" using only known letters E T I M.",
          "answer": "-- .. - .",
          "difficulty": 600
        }
      ]
    }
  },
  "morse-u1-l3": {
    "id": "morse-u1-l3",
    "unit": "morse-u1",
    "level": "beginner",
    "objective": "Recognize and send the letters S and O, including the international distress signal SOS.",
    "difficulty": 540,
    "presentation": {
      "explanation": "S (\"...\" — three dits) and O (\"---\" — three dahs) extend the doubling pattern from lesson 2 to a group of three, which keeps the rhythm learning progressive and predictable. These two letters together spell the most famous Morse sequence in the world: SOS (\"... --- ...\"), the international distress signal, chosen specifically because its symmetric, unmistakable rhythm is nearly impossible to misread even under poor conditions — exactly the property that makes it a perfect milestone drill for a beginner's ear.",
      "examples": [
        {
          "pattern": "...",
          "character": "S",
          "description": "Three short dits in a row — a distinctive rapid rhythm."
        },
        {
          "pattern": "---",
          "character": "O",
          "description": "Three long dahs — a slow, heavy rhythm, the clear opposite of S."
        },
        {
          "pattern": "... --- ...",
          "character": "SOS",
          "description": "The international distress signal — sent as one continuous rhythmic unit, not three separate letters with big gaps."
        },
        {
          "pattern": ". .. - -- ... ---",
          "character": "E I T M S O",
          "description": "Full six-character review drill, wide-spaced."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U1-L3】: Focus on visualizing the fundamental pattern and structural dependencies for Recognize and send the letters."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U1-L3】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "id": "morse-u1-l3-q1",
          "type": "decode",
          "prompt": "Decode: \"...\"",
          "answer": "S",
          "difficulty": 540
        },
        {
          "id": "morse-u1-l3-q2",
          "type": "decode",
          "prompt": "Decode: \"---\"",
          "answer": "O",
          "difficulty": 540
        },
        {
          "id": "morse-u1-l3-q3",
          "type": "decode",
          "prompt": "Decode the famous distress signal: \"... --- ...\"",
          "answer": "SOS",
          "difficulty": 560
        },
        {
          "id": "morse-u1-l3-q4",
          "type": "encode",
          "prompt": "Write the Morse pattern for \"TOOTS\" using only known letters (T O S).",
          "answer": "- --- --- - ...",
          "difficulty": 640
        }
      ]
    }
  },
  "morse-u1-l4": {
    "id": "morse-u1-l4",
    "unit": "morse-u1",
    "level": "beginner",
    "objective": "Recognize and send the letters A and N, completing the eight-character foundation group.",
    "difficulty": 560,
    "presentation": {
      "explanation": "A (\".-\") and N (\"-.\") are the first characters so far that MIX dits and dahs, which is a genuinely new skill: your ear now has to track order, not just count identical taps. Notice that A and N are exact mirror images of each other (dit-dah versus dah-dit) — this pairing is intentional and classic in Morse pedagogy, because learning two mirror-image characters together forces you to listen for ORDER rather than just the 'count' or 'feel' of a character, which is the skill you will need for every mixed character from here on.",
      "examples": [
        {
          "pattern": ".-",
          "character": "A",
          "description": "Dit then dah — short-long."
        },
        {
          "pattern": "-.",
          "character": "N",
          "description": "Dah then dit — long-short, the mirror image of A."
        },
        {
          "pattern": ".- -.",
          "character": "A N",
          "description": "The mirror pair back to back — listen for which comes first."
        },
        {
          "pattern": "- . ... - / .- -. -",
          "character": "TEST ANT",
          "description": "First real two-word drill using only the eight foundation characters."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U1-L4】: Focus on visualizing the fundamental pattern and structural dependencies for Recognize and send the letters."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U1-L4】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "id": "morse-u1-l4-q1",
          "type": "decode",
          "prompt": "Decode: \".-\"",
          "answer": "A",
          "difficulty": 560
        },
        {
          "id": "morse-u1-l4-q2",
          "type": "decode",
          "prompt": "Decode: \"-.\"",
          "answer": "N",
          "difficulty": 560
        },
        {
          "id": "morse-u1-l4-q3",
          "type": "decode",
          "prompt": "Decode this word: \"- . ...\"",
          "answer": "TES",
          "difficulty": 600
        },
        {
          "id": "morse-u1-l4-q4",
          "type": "encode",
          "prompt": "Write the Morse pattern for \"ANT\" using the foundation group.",
          "answer": ".- -. -",
          "difficulty": 620
        }
      ]
    }
  },
  "morse-u1-l5": {
    "id": "morse-u1-l5",
    "unit": "morse-u1",
    "level": "beginner",
    "objective": "Copy full words built from the eight foundation characters (E T I M S O A N) at full character speed with wide spacing.",
    "difficulty": 600,
    "presentation": {
      "explanation": "This review lesson has one job: prove you can copy real words, not just isolated letters, using only the eight characters learned so far (E T I M S O A N). Real copying requires holding several decoded letters in short-term memory while the next character is already arriving — a different skill from single-character recognition, and the one that actually matters for real use. Keep the wide Farnsworth spacing; do not rush ahead to compression yet.",
      "examples": [
        {
          "pattern": "-- .- - / ... . - / - --- -. .",
          "character": "MAT SET TONE (approx, using only ETIMSOAN letters where possible)",
          "description": "Multi-word drill line at wide spacing."
        },
        {
          "pattern": ".- / -. / ... / - / --- / -- / . / ..",
          "character": "A N S T O M E I",
          "description": "All eight foundation letters presented individually as a final speed check."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U1-L5】: Focus on visualizing the fundamental pattern and structural dependencies for Copy full words built from the."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U1-L5】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "id": "morse-u1-l5-q1",
          "type": "decode",
          "prompt": "Decode this word: \".- -. -\"",
          "answer": "ANT",
          "difficulty": 600
        },
        {
          "id": "morse-u1-l5-q2",
          "type": "decode",
          "prompt": "Decode this word: \"-- --- ... -\"",
          "answer": "MOST",
          "difficulty": 620
        },
        {
          "id": "morse-u1-l5-q3",
          "type": "decode",
          "prompt": "Decode this two-word phrase: \"-- . .- -. / - . ... -\"",
          "answer": "MEAN TEST",
          "difficulty": 680
        },
        {
          "id": "morse-u1-l5-q4",
          "type": "encode",
          "prompt": "Write the Morse pattern for the word \"NOTE\".",
          "answer": "-. --- - .",
          "difficulty": 640
        }
      ]
    }
  },
  "morse-u2-l1": {
    "id": "morse-u2-l1",
    "unit": "morse-u2",
    "level": "beginner",
    "objective": "Recognize and send H and U, mixed with the foundation group.",
    "difficulty": 620,
    "presentation": {
      "explanation": "H (\"....\" — four dits) extends the doubling-and-tripling pattern from Unit 1 one step further: where S was three dits, H is four. This is the single most common trap for beginners, so count deliberately at first — \"dit-dit-dit-dit\" — rather than trusting your ear to just know when three becomes four. U (\"..-\" — dit-dit-dah) is the mirror image of the letter you'll meet properly in a later unit, but for now just notice its shape: two short beats, then one long one. Mixed together with the eight foundation letters, H and U bring your working alphabet to ten characters — enough to spell real short words for the first time.",
      "examples": [
        {
          "pattern": "....",
          "character": "H",
          "description": "Four short dits in a row — count them; this is easy to under-count as S (three dits)."
        },
        {
          "pattern": "..-",
          "character": "U",
          "description": "Dit-dit-dah — two short beats followed by one long one."
        },
        {
          "pattern": "- ..- -",
          "character": "T U T",
          "description": "U sandwiched between two foundation letters, to test the new rhythm in context."
        },
        {
          "pattern": ".... ..- -",
          "character": "HUT",
          "description": "A full three-letter word using only H, U, and the foundation group."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U2-L1】: Focus on visualizing the fundamental pattern and structural dependencies for Recognize and send H and U, mi."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U2-L1】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "id": "morse-u2-l1-q1",
          "type": "decode",
          "prompt": "Decode: \"....\"",
          "answer": "H",
          "difficulty": 600
        },
        {
          "id": "morse-u2-l1-q2",
          "type": "decode",
          "prompt": "Decode: \"..-\"",
          "answer": "U",
          "difficulty": 600
        },
        {
          "id": "morse-u2-l1-q3",
          "type": "decode",
          "prompt": "Decode this word: \".... ..- -\"",
          "answer": "HUT",
          "difficulty": 640
        },
        {
          "id": "morse-u2-l1-q4",
          "type": "encode",
          "prompt": "Write the Morse pattern for the word \"SUIT\".",
          "answer": "... ..- .. -",
          "difficulty": 660
        }
      ]
    }
  },
  "morse-u2-l2": {
    "id": "morse-u2-l2",
    "unit": "morse-u2",
    "level": "beginner",
    "objective": "Recognize and send R and W, mixed with all letters learned so far.",
    "difficulty": 640,
    "presentation": {
      "explanation": "R (\".-.\" — dit-dah-dit) has a distinctive \"bounce\" shape — short, long, short — that once your ear catches it, becomes one of the fastest letters to recognize in the whole alphabet, which is lucky since R is one of the most frequent letters in English. W (\".--\" — dit-dah-dah) is one short beat followed by two long ones; listen for how it differs from M (\"--\", no leading dit) and from the letter you'll meet later that reverses it. With R and W added, you have twelve characters and can start building slightly longer, more natural-sounding words.",
      "examples": [
        {
          "pattern": ".-.",
          "character": "R",
          "description": "Dit-dah-dit — a short-long-short \"bounce\" pattern."
        },
        {
          "pattern": ".--",
          "character": "W",
          "description": "Dit-dah-dah — one short beat, then two long ones."
        },
        {
          "pattern": ".-- .- .-.",
          "character": "WAR",
          "description": "A full word combining both new letters with a foundation letter."
        },
        {
          "pattern": "... - .-. .- .--",
          "character": "STRAW",
          "description": "A five-letter word — the longest yet — mixing new and foundation characters."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U2-L2】: Focus on visualizing the fundamental pattern and structural dependencies for Recognize and send R and W, mi."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U2-L2】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "id": "morse-u2-l2-q1",
          "type": "decode",
          "prompt": "Decode: \".-.\"",
          "answer": "R",
          "difficulty": 620
        },
        {
          "id": "morse-u2-l2-q2",
          "type": "decode",
          "prompt": "Decode: \".--\"",
          "answer": "W",
          "difficulty": 620
        },
        {
          "id": "morse-u2-l2-q3",
          "type": "decode",
          "prompt": "Decode this word: \".-- .- .-.\"",
          "answer": "WAR",
          "difficulty": 660
        },
        {
          "id": "morse-u2-l2-q4",
          "type": "encode",
          "prompt": "Write the Morse pattern for the word \"STRAW\".",
          "answer": "... - .-. .- .--",
          "difficulty": 700
        }
      ]
    }
  },
  "morse-u2-l3": {
    "id": "morse-u2-l3",
    "unit": "morse-u2",
    "level": "beginner",
    "objective": "Recognize and send D and K, mixed with all letters learned so far.",
    "difficulty": 660,
    "presentation": {
      "explanation": "D (\"-..\" — dah-dit-dit) and K (\"-.-\" — dah-dit-dah) are near-mirrors of each other, differing only in the last beat — a genuinely tricky pair, so drill them back-to-back until the ear locks onto that final dit-versus-dah difference. K deserves special attention beyond its letter value: sent alone, \"-.-\" is also the prosign for \"go ahead, any station may reply\" — you will meet it again in that role in Unit 6, so learning its rhythm solidly now pays off twice. Together the two letters complete a word that describes exactly what wide Farnsworth spacing is designed to prevent: a fumbling, uncertain copy.",
      "examples": [
        {
          "pattern": "-..",
          "character": "D",
          "description": "Dah-dit-dit — one long beat, then two short."
        },
        {
          "pattern": "-.-",
          "character": "K",
          "description": "Dah-dit-dah — long-short-long; also the prosign for \"go ahead.\""
        },
        {
          "pattern": "-.. .- .-. -.-",
          "character": "DARK",
          "description": "Both new letters combined with two foundation-group letters."
        },
        {
          "pattern": "-.- .. -.. / -.. .- .-.",
          "character": "KID DAR (fragment review)",
          "description": "A short two-part drill line reinforcing D and K in different word positions."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U2-L3】: Focus on visualizing the fundamental pattern and structural dependencies for Recognize and send D and K, mi."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U2-L3】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "id": "morse-u2-l3-q1",
          "type": "decode",
          "prompt": "Decode: \"-..\"",
          "answer": "D",
          "difficulty": 640
        },
        {
          "id": "morse-u2-l3-q2",
          "type": "decode",
          "prompt": "Decode: \"-.-\"",
          "answer": "K",
          "difficulty": 640
        },
        {
          "id": "morse-u2-l3-q3",
          "type": "decode",
          "prompt": "Decode this word: \"-.. .- .-. -.-\"",
          "answer": "DARK",
          "difficulty": 680
        },
        {
          "id": "morse-u2-l3-q4",
          "type": "encode",
          "prompt": "Write the Morse pattern for the word \"KID\".",
          "answer": "-.- .. -..",
          "difficulty": 660
        }
      ]
    }
  },
  "morse-u2-l4": {
    "id": "morse-u2-l4",
    "unit": "morse-u2",
    "level": "beginner",
    "objective": "Recognize and send G and L, mixed with all letters learned so far.",
    "difficulty": 680,
    "presentation": {
      "explanation": "G (\"--.\" — dah-dah-dit) is straightforward once you notice it is just O (\"---\") with the last dah shortened to a dit — lean on that relationship rather than learning it from scratch. L (\".-..\" — dit-dah-dit-dit) is the longest character you have met so far, four beats total, and easy to rush; say all four beats deliberately in your head (\"dit-dah-dit-dit\") until the rhythm is automatic. G and L complete the sixteen-character expansion group — the full roster is now E T I M S O A N H U R W D K G L, enough to spell a large fraction of common English words.",
      "examples": [
        {
          "pattern": "--.",
          "character": "G",
          "description": "Dah-dah-dit — like O with a shortened final beat."
        },
        {
          "pattern": ".-..",
          "character": "L",
          "description": "Dit-dah-dit-dit — the longest character so far; four distinct beats."
        },
        {
          "pattern": "--. .. .-. .-..",
          "character": "GIRL",
          "description": "Both new letters in one natural English word."
        },
        {
          "pattern": "--. --- .-.. -..",
          "character": "GOLD",
          "description": "A second full word, reviewing G, O, L, and D together."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U2-L4】: Focus on visualizing the fundamental pattern and structural dependencies for Recognize and send G and L, mi."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U2-L4】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "id": "morse-u2-l4-q1",
          "type": "decode",
          "prompt": "Decode: \"--.\"",
          "answer": "G",
          "difficulty": 660
        },
        {
          "id": "morse-u2-l4-q2",
          "type": "decode",
          "prompt": "Decode: \".-..\"",
          "answer": "L",
          "difficulty": 660
        },
        {
          "id": "morse-u2-l4-q3",
          "type": "decode",
          "prompt": "Decode this word: \"--. .. .-. .-..\"",
          "answer": "GIRL",
          "difficulty": 700
        },
        {
          "id": "morse-u2-l4-q4",
          "type": "encode",
          "prompt": "Write the Morse pattern for the word \"GOLD\".",
          "answer": "--. --- .-.. -..",
          "difficulty": 700
        }
      ]
    }
  },
  "morse-u2-l5": {
    "id": "morse-u2-l5",
    "unit": "morse-u2",
    "level": "beginner",
    "objective": "Copy full words built from the sixteen-character expansion group at wide spacing.",
    "difficulty": 700,
    "presentation": {
      "explanation": "This review lesson has a real payoff: with all sixteen characters learned (E T I M S O A N H U R W D K G L), you can finally copy something that reads like an actual radio message instead of a drill word. The two-word phrase below closes out the unit — it deliberately echoes the SOS milestone from Unit 1, this time as a full readable sentence rather than a three-letter signal. Copy it letter by letter first; on a second pass, try to hear each word as a single rhythmic shape rather than four or five separate letters — that shift is the whole point of head-copy, which you will build deliberately in Unit 8.",
      "examples": [
        {
          "pattern": "... - --- .-. --",
          "character": "STORM",
          "description": "A five-letter word using S, T, O, R, M."
        },
        {
          "pattern": ".-- .- .-. -. .. -. --.",
          "character": "WARNING",
          "description": "A seven-letter word — the longest single word yet."
        },
        {
          "pattern": "... - --- .-. -- / .-- .- .-. -. .. -. --.",
          "character": "STORM WARNING",
          "description": "The full two-word phrase, exactly as it would be sent: a real, readable message built entirely from this unit's sixteen characters."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U2-L5】: Focus on visualizing the fundamental pattern and structural dependencies for Copy full words built from the."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U2-L5】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "id": "morse-u2-l5-q1",
          "type": "decode",
          "prompt": "Decode this word: \"... - --- .-. --\"",
          "answer": "STORM",
          "difficulty": 680
        },
        {
          "id": "morse-u2-l5-q2",
          "type": "decode",
          "prompt": "Decode this word: \".-- .- .-. -. .. -. --.\"",
          "answer": "WARNING",
          "difficulty": 720
        },
        {
          "id": "morse-u2-l5-q3",
          "type": "decode",
          "prompt": "Decode the full message: \"... - --- .-. -- / .-- .- .-. -. .. -. --.\"",
          "answer": "STORM WARNING",
          "difficulty": 760
        },
        {
          "id": "morse-u2-l5-q4",
          "type": "encode",
          "prompt": "Write the Morse pattern for the word \"DRAWN\".",
          "answer": "-.. .-. .- .-- -.",
          "difficulty": 720
        }
      ]
    }
  },
  "morse-u3-l1": {
    "id": "morse-u3-l1",
    "unit": "morse-u3",
    "level": "beginner",
    "objective": "Recognize and send B and C, mixed with all prior letters.",
    "difficulty": 720,
    "presentation": {
      "explanation": "B (\"-...\" — dah followed by three dits) has a shortcut hiding in a letter you already know: it is exactly D (\"-..\") with one extra dit tacked onto the end. Lean on that relationship instead of memorizing B from scratch — \"D, plus one more dit\" is faster to recall under pressure than counting four beats cold. C (\"-.-.\" — dah-dit-dah-dit) is a different kind of trap: it is K (\"-.-\") with one extra dit tacked on, the exact same relationship as B-to-D. Because K and C differ by only a single trailing dit, they are one of the most commonly confused pairs in the whole alphabet — drill them back-to-back until your ear locks onto whether that last beat is there or not. With B and C added, you have eighteen characters, enough to spell a good range of real short words.",
      "examples": [
        {
          "pattern": "-...",
          "character": "B",
          "description": "Dah then three dits — the letter D with one extra dit appended."
        },
        {
          "pattern": "-.-.",
          "character": "C",
          "description": "Dah-dit-dah-dit — the letter K with one extra dit appended; easy to confuse with K if you rush."
        },
        {
          "pattern": "-.-. .- -...",
          "character": "CAB",
          "description": "A full three-letter word using both new letters plus a foundation letter."
        },
        {
          "pattern": "-... .-.. .- -.-. -.-",
          "character": "BLACK",
          "description": "A five-letter word mixing B and C with three letters from earlier units — the longest word yet."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U3-L1】: Focus on visualizing the fundamental pattern and structural dependencies for Recognize and send B and C, mi."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U3-L1】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "id": "morse-u3-l1-q1",
          "type": "decode",
          "prompt": "Decode: \"-...\"",
          "answer": "B",
          "difficulty": 700
        },
        {
          "id": "morse-u3-l1-q2",
          "type": "decode",
          "prompt": "Decode: \"-.-.\"",
          "answer": "C",
          "difficulty": 700
        },
        {
          "id": "morse-u3-l1-q3",
          "type": "multiple-choice",
          "prompt": "Which letter do you get if you take B (\"-...\") and remove its final dit?",
          "options": [
            "D",
            "K",
            "N",
            "H"
          ],
          "answer": "D",
          "difficulty": 720
        },
        {
          "id": "morse-u3-l1-q4",
          "type": "decode",
          "prompt": "Decode this word: \"-... .-.. .- -.-. -.-\"",
          "answer": "BLACK",
          "difficulty": 760
        },
        {
          "id": "morse-u3-l1-q5",
          "type": "encode",
          "prompt": "Write the Morse pattern for the word \"BASIC\".",
          "answer": "-... .- ... .. -.-.",
          "difficulty": 780
        }
      ]
    }
  },
  "morse-u3-l2": {
    "id": "morse-u3-l2",
    "unit": "morse-u3",
    "level": "beginner",
    "objective": "Recognize and send F and J, mixed with all prior letters.",
    "difficulty": 740,
    "presentation": {
      "explanation": "F (\"..-.\" — dit-dit-dah-dit) has an irregular, stumbling rhythm compared to the clean doublings you learned early on — say it slowly as \"di-di-dah-dit\" until the syncopation feels natural rather than random. J (\".---\" — a single dit followed by three dahs) is the mirror image of B: where B opens with one long beat and closes with three short ones, J opens with one short beat and closes with three long ones. That symmetry is worth noticing on purpose — pairing a letter with its rhythmic opposite is a reliable way to cement both in memory at once. Fun fact worth knowing: \"FIST\" is the real word radio operators use for a person's individual sending rhythm — everyone's hand develops a recognizable style, the way handwriting does, and experienced operators can often identify a familiar sender purely by their \"fist.\"",
      "examples": [
        {
          "pattern": "..-.",
          "character": "F",
          "description": "Dit-dit-dah-dit — an irregular, stumbling rhythm; say it slowly at first."
        },
        {
          "pattern": ".---",
          "character": "J",
          "description": "Dit then three dahs — the mirror image of B, which is dah then three dits."
        },
        {
          "pattern": "..-. .. ... -",
          "character": "FIST",
          "description": "The real ham-radio word for a sender's personal rhythm — fittingly, a word about Morse itself."
        },
        {
          "pattern": ".--- .- -...",
          "character": "JAB",
          "description": "A short word putting J right next to last lesson's B."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U3-L2】: Focus on visualizing the fundamental pattern and structural dependencies for Recognize and send F and J, mi."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U3-L2】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "id": "morse-u3-l2-q1",
          "type": "decode",
          "prompt": "Decode: \"..-.\"",
          "answer": "F",
          "difficulty": 720
        },
        {
          "id": "morse-u3-l2-q2",
          "type": "decode",
          "prompt": "Decode: \".---\"",
          "answer": "J",
          "difficulty": 720
        },
        {
          "id": "morse-u3-l2-q3",
          "type": "decode",
          "prompt": "Decode this word: \"..-. .. ... -\"",
          "answer": "FIST",
          "difficulty": 760
        },
        {
          "id": "morse-u3-l2-q4",
          "type": "encode",
          "prompt": "Write the Morse pattern for the word \"JOB\".",
          "answer": ".--- --- -...",
          "difficulty": 760
        },
        {
          "id": "morse-u3-l2-q5",
          "type": "multiple-choice",
          "prompt": "J and B are rhythmic mirror images of each other. What is B's rhythm?",
          "options": [
            "One dah, then three dits",
            "One dit, then three dahs",
            "Four dits",
            "Four dahs"
          ],
          "answer": "One dah, then three dits",
          "difficulty": 700
        }
      ]
    }
  },
  "morse-u3-l3": {
    "id": "morse-u3-l3",
    "unit": "morse-u3",
    "level": "beginner",
    "objective": "Recognize and send P and Q, mixed with all prior letters.",
    "difficulty": 760,
    "presentation": {
      "explanation": "P (\".--.\" — dit-dah-dah-dit) is a \"bookend\" pattern: a short beat, two long beats, then a short beat again, symmetric front to back — noticing that symmetry makes it much easier to recall than treating it as four unrelated beats. Q (\"--.-\" — dah-dah-dit-dah) is one of the least common letters in English text, but it earns its place early because of one extremely famous piece of radio trivia: once you know C and Q, you know both letters in \"CQ,\" the call every radio operator learns first — sent to mean \"calling any station, is anyone listening?\" You'll meet CQ again properly as a prosign in Unit 6, but recognizing its two letters by ear right now is a small, satisfying head start. With P and Q added, you have twenty-two characters — only four letters left before the alphabet is complete.",
      "examples": [
        {
          "pattern": ".--.",
          "character": "P",
          "description": "Dit-dah-dah-dit — a symmetric \"bookend\" rhythm, short-long-long-short."
        },
        {
          "pattern": "--.-",
          "character": "Q",
          "description": "Dah-dah-dit-dah — rare in English words, but famous in radio as half of \"CQ.\""
        },
        {
          "pattern": "-.-. --.-",
          "character": "CQ",
          "description": "The most famous two-letter call in amateur radio: \"calling any station.\" You'll learn its full meaning as a prosign in Unit 6 — for now, just recognize the sound."
        },
        {
          "pattern": ".--. .- .-. -.-",
          "character": "PARK",
          "description": "A full word using the new letter P alongside three earlier letters."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U3-L3】: Focus on visualizing the fundamental pattern and structural dependencies for Recognize and send P and Q, mi."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U3-L3】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "id": "morse-u3-l3-q1",
          "type": "decode",
          "prompt": "Decode: \".--.\"",
          "answer": "P",
          "difficulty": 740
        },
        {
          "id": "morse-u3-l3-q2",
          "type": "decode",
          "prompt": "Decode: \"--.-\"",
          "answer": "Q",
          "difficulty": 740
        },
        {
          "id": "morse-u3-l3-q3",
          "type": "decode",
          "prompt": "Decode this famous radio call: \"-.-. --.-\"",
          "answer": "CQ",
          "difficulty": 780
        },
        {
          "id": "morse-u3-l3-q4",
          "type": "encode",
          "prompt": "Write the Morse pattern for the word \"QUIT\".",
          "answer": "--.- ..- .. -",
          "difficulty": 800
        },
        {
          "id": "morse-u3-l3-q5",
          "type": "decode",
          "prompt": "Decode this word: \".--. .- .-. -.-\"",
          "answer": "PARK",
          "difficulty": 760
        }
      ]
    }
  },
  "morse-u3-l4": {
    "id": "morse-u3-l4",
    "unit": "morse-u3",
    "level": "beginner",
    "objective": "Recognize and send V, X, Y, and Z, completing the full alphabet.",
    "difficulty": 780,
    "presentation": {
      "explanation": "Four letters finish the alphabet in this lesson, and one of them comes with the most famous piece of cultural trivia in all of Morse code: V (\"...-\" — three dits and a dah) is both the opening rhythm of Beethoven's Fifth Symphony and the sound the BBC used as its \"V for Victory\" signal broadcast into occupied Europe during World War II — the same three-short-one-long rhythm everyone already half-recognizes from music turns out to spell V. X (\"-..-\" — dah-dit-dit-dah) is a second \"bookend\" pattern like P, but built from dahs on the outside instead of dits: long-short-short-long. Y (\"-.--\" — dah-dit-dah-dah) and Z (\"--..\" — dah-dah-dit-dit) round out the set: Z in particular is worth contrasting with G (\"--.\"), which is Z with the final dit removed — the same \"add or remove one beat\" relationship you have now seen several times this unit. Once you can send and recognize all four of these, you know every letter from A to Z at full character speed — everything from here forward is numbers, punctuation, and getting faster.",
      "examples": [
        {
          "pattern": "...-",
          "character": "V",
          "description": "Three dits and a dah — the opening rhythm of Beethoven's Fifth Symphony, and the WWII \"V for Victory\" signal."
        },
        {
          "pattern": "-..-",
          "character": "X",
          "description": "Dah-dit-dit-dah — a second \"bookend\" pattern, long-short-short-long, mirroring P's short-long-long-short."
        },
        {
          "pattern": "-.--",
          "character": "Y",
          "description": "Dah-dit-dah-dah — three of the four beats are dahs; only the second beat is short."
        },
        {
          "pattern": "--..",
          "character": "Z",
          "description": "Dah-dah-dit-dit — the letter G (\"--.\") with one extra dit appended, the same relationship as B-to-D."
        },
        {
          "pattern": ".--- .- --.. --..",
          "character": "JAZZ",
          "description": "A full word combining a Lesson 2 letter (J) with the newest letter (Z) — real, playable, and now fully within reach."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U3-L4】: Focus on visualizing the fundamental pattern and structural dependencies for Recognize and send V, X, Y, an."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U3-L4】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "id": "morse-u3-l4-q1",
          "type": "decode",
          "prompt": "Decode: \"...-\"",
          "answer": "V",
          "difficulty": 760
        },
        {
          "id": "morse-u3-l4-q2",
          "type": "decode",
          "prompt": "Decode: \"-..-\"",
          "answer": "X",
          "difficulty": 760
        },
        {
          "id": "morse-u3-l4-q3",
          "type": "decode",
          "prompt": "Decode: \"-.--\"",
          "answer": "Y",
          "difficulty": 760
        },
        {
          "id": "morse-u3-l4-q4",
          "type": "decode",
          "prompt": "Decode: \"--..\"",
          "answer": "Z",
          "difficulty": 760
        },
        {
          "id": "morse-u3-l4-q5",
          "type": "encode",
          "prompt": "Write the Morse pattern for the word \"FIX\", now that X is in your alphabet.",
          "answer": "..-. .. -..-",
          "difficulty": 800
        },
        {
          "id": "morse-u3-l4-q6",
          "type": "multiple-choice",
          "prompt": "The rhythm of V in Morse code (\"...-\") is also famous as:",
          "options": [
            "The opening of Beethoven's Fifth Symphony",
            "The Morse code for SOS",
            "A prosign meaning \"end of message\"",
            "The rhythm of the letter O"
          ],
          "answer": "The opening of Beethoven's Fifth Symphony",
          "difficulty": 720
        }
      ]
    }
  },
  "morse-u3-l5": {
    "id": "morse-u3-l5",
    "unit": "morse-u3",
    "level": "beginner",
    "objective": "Copy full sentences using the complete 26-letter alphabet at wide spacing.",
    "difficulty": 800,
    "presentation": {
      "explanation": "Every letter from A to Z is now yours. This review lesson has one job: prove it, by copying a real, complete, famous sentence built from the full alphabet — no letter left out. \"THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG\" is the classic English pangram, a sentence hand-picked by typographers and telegraph operators alike for over a century specifically because it exercises every single letter at least once. Copying it in Morse is a genuine milestone: if you can decode this sentence cleanly at wide Farnsworth spacing, you have proven real command of the entire alphabet, not just the easy, frequent letters. Take it slowly, word by word, the first time through — then, if you can, try a second pass listening for whole-word shapes rather than counting individual letters, a first taste of the head-copy skill Unit 8 will build deliberately.",
      "examples": [
        {
          "pattern": "- .... . / --.- ..- .. -.-. -.-",
          "character": "THE QUICK",
          "description": "The pangram's opening two words."
        },
        {
          "pattern": "-... .-. --- .-- -. / ..-. --- -..-",
          "character": "BROWN FOX",
          "description": "Two more words — notice O and W both reappear from earlier units."
        },
        {
          "pattern": ".--- ..- -- .--. ... / --- ...- . .-.",
          "character": "JUMPS OVER",
          "description": "The middle of the sentence, mixing J and P with common foundation letters."
        },
        {
          "pattern": "- .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. ... / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --.",
          "character": "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG",
          "description": "The complete pangram — every letter of the alphabet, sent as one continuous message. This is the \"STORM WARNING\" moment for the full 26-letter alphabet."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U3-L5】: Focus on visualizing the fundamental pattern and structural dependencies for Copy full sentences using the ."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U3-L5】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "id": "morse-u3-l5-q1",
          "type": "decode",
          "prompt": "Decode this word: \"..-. --- -..-\"",
          "answer": "FOX",
          "difficulty": 780
        },
        {
          "id": "morse-u3-l5-q2",
          "type": "decode",
          "prompt": "Decode this word: \".-.. .- --.. -.--\"",
          "answer": "LAZY",
          "difficulty": 800
        },
        {
          "id": "morse-u3-l5-q3",
          "type": "encode",
          "prompt": "Write the Morse pattern for the word \"DOG\".",
          "answer": "-.. --- --.",
          "difficulty": 780
        },
        {
          "id": "morse-u3-l5-q4",
          "type": "decode",
          "prompt": "Decode the complete pangram: \"- .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. ... / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --.\"",
          "answer": "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG",
          "difficulty": 850
        },
        {
          "id": "morse-u3-l5-q5",
          "type": "short-answer",
          "prompt": "What is special about the sentence \"THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG\"?",
          "answer": "It is a pangram — a sentence that uses every letter of the alphabet at least once.",
          "difficulty": 700
        }
      ]
    }
  },
  "morse-u4-l1": {
    "id": "morse-u4-l1",
    "unit": "morse-u4",
    "level": "beginner",
    "objective": "Drill full-alphabet random character recognition until accuracy exceeds 90 percent.",
    "difficulty": 820,
    "presentation": {
      "explanation": "Here is the real insight behind this drill: alphabet confusion is not spread evenly across all 26 letters. It concentrates in a small, predictable set of pairs that differ by exactly one beat, or by the order of two beats — the same relationships this course has been pointing out all along. D/B (D plus a dit), K/C (K plus a dit), G/Z (G plus a dit), S/H (three dits vs. four), and the mirror pairs A/N, U/D... wait, the real mirror pairs are A/N (dit-dah vs. dah-dit) and the near-mirrors D/U (dah-dit-dit vs. dit-dit-dah) — these dozen or so relationships cause the overwhelming majority of real-world copying errors, far more than the letters you'd guess are \"hard\" just because they look complicated on paper. Rather than drilling A-through-Z in order (which only tests memory of the alphabet's sequence, not real recognition), an effective random drill deliberately throws confusion pairs back-to-back, so your ear is forced to resolve the ambiguity every single time instead of coasting on context.",
      "examples": [
        {
          "pattern": "-.. / -...",
          "character": "D / B",
          "description": "D, then B — B is D with one extra dit. Say them back-to-back until the difference is instant, not counted."
        },
        {
          "pattern": "-.- / -.-.",
          "character": "K / C",
          "description": "K, then C — the exact same relationship as D/B, one beat apart."
        },
        {
          "pattern": ".- / -.",
          "character": "A / N",
          "description": "A, then N — true mirror images. Listen for which beat comes first, not how many beats there are."
        },
        {
          "pattern": "... / ....",
          "character": "S / H",
          "description": "S (three dits) then H (four dits) — the single most common miscount in the entire alphabet."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U4-L1】: Focus on visualizing the fundamental pattern and structural dependencies for Drill full-alphabet random cha."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U4-L1】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "id": "morse-u4-l1-q1",
          "type": "decode",
          "prompt": "Decode this pair, letter by letter: \"-.. -...\"",
          "answer": "DB",
          "difficulty": 800
        },
        {
          "id": "morse-u4-l1-q2",
          "type": "decode",
          "prompt": "Decode this pair, letter by letter: \"-.- -.-.\"",
          "answer": "KC",
          "difficulty": 800
        },
        {
          "id": "morse-u4-l1-q3",
          "type": "decode",
          "prompt": "Decode this pair, letter by letter: \"... ....\"",
          "answer": "SH",
          "difficulty": 800
        },
        {
          "id": "morse-u4-l1-q4",
          "type": "short-answer",
          "prompt": "Why is drilling random confusion PAIRS (like D/B or K/C) more effective than drilling the alphabet in A-to-Z order?",
          "answer": "Because real copying errors cluster around a small set of letters that differ by only one beat or one beat-order — drilling them back-to-back forces true recognition, while A-to-Z order lets you coast on memorized sequence instead of actually hearing each letter.",
          "difficulty": 820
        },
        {
          "id": "morse-u4-l1-q5",
          "type": "multiple-choice",
          "prompt": "What is the relationship between B (\"-...\") and D (\"-..\")?",
          "options": [
            "B is D with one extra dit at the end",
            "They are unrelated",
            "B is D reversed",
            "D is B with a dah added"
          ],
          "answer": "B is D with one extra dit at the end",
          "difficulty": 780
        }
      ]
    }
  },
  "morse-u4-l2": {
    "id": "morse-u4-l2",
    "unit": "morse-u4",
    "level": "beginner",
    "objective": "Copy common short English words letter by letter at full character speed.",
    "difficulty": 830,
    "presentation": {
      "explanation": "With all 26 letters available, real vocabulary opens up — no more artificial word lists built from whatever happened to be taught so far. This lesson deliberately reaches for words that lean on the alphabet's rarer letters (Q, X, Z, J), since those are exactly the characters that get the least practice in ordinary text and therefore fade fastest without deliberate reps. \"QUARTZ\" is a genuine gift of a practice word: it contains Q, a letter that appears in barely half a percent of English text, sitting right next to Z, one of the rarest letters of all. Copying words like this is more valuable practice, letter for letter, than an equally long passage of ordinary prose, simply because it front-loads the characters you're least likely to encounter naturally.",
      "examples": [
        {
          "pattern": "--.- ..- .- .-. - --..",
          "character": "QUARTZ",
          "description": "Six letters, two of them among the rarest in English — Q and Z, back to back near the end."
        },
        {
          "pattern": ".--- .- --.. --..",
          "character": "JAZZ",
          "description": "A short, punchy word with a doubled letter — the pattern repeats exactly, which is a good ear check."
        },
        {
          "pattern": "... .--. .... .. -. -..-",
          "character": "SPHINX",
          "description": "Six letters ending in the rare X — read each letter's shape rather than guessing the word from the first few."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U4-L2】: Focus on visualizing the fundamental pattern and structural dependencies for Copy common short English word."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U4-L2】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "id": "morse-u4-l2-q1",
          "type": "decode",
          "prompt": "Decode this word: \"--.- ..- .- .-. - --..\"",
          "answer": "QUARTZ",
          "difficulty": 850
        },
        {
          "id": "morse-u4-l2-q2",
          "type": "decode",
          "prompt": "Decode this word: \"... .--. .... .. -. -..-\"",
          "answer": "SPHINX",
          "difficulty": 850
        },
        {
          "id": "morse-u4-l2-q3",
          "type": "encode",
          "prompt": "Write the Morse pattern for the word \"WALTZ\".",
          "answer": ".-- .- .-.. - --..",
          "difficulty": 830
        },
        {
          "id": "morse-u4-l2-q4",
          "type": "encode",
          "prompt": "Write the Morse pattern for the word \"ZEBRA\".",
          "answer": "--.. . -... .-. .-",
          "difficulty": 820
        }
      ]
    }
  },
  "morse-u4-l3": {
    "id": "morse-u4-l3",
    "unit": "morse-u4",
    "level": "beginner",
    "objective": "Send (key or tap) the full alphabet from memory without a reference chart.",
    "difficulty": 840,
    "presentation": {
      "explanation": "Recognizing a letter you hear and PRODUCING that same letter from memory are genuinely different skills — many learners can decode a chart-free drill reasonably well long before they can send the whole alphabet cold, in order, without hesitating on a single letter. Sending forces total recall: there is no context to lean on, no partial word to guess from, just twenty-six retrievals in a row. A reliable way to build this: send the alphabet in five- or six-letter chunks (the groupings this course already used — E T I M S O A N, then H U R W D K G L, and so on) rather than always as one unbroken block, since chunked recall is more robust under pressure than one long memorized chain that falls apart entirely if a single link is missed.",
      "examples": [
        {
          "pattern": ". - .. -- ... --- .- -.",
          "character": "E T I M S O A N",
          "description": "The first chunk you ever learned — send it from memory before moving to the next."
        },
        {
          "pattern": ".... ..- .-. .-- -.. -.- --. .-..",
          "character": "H U R W D K G L",
          "description": "The second chunk. Notice how much more automatic this feels than reading it off a chart."
        },
        {
          "pattern": "-... -.-. ..-. .--- .--. --.- ...- -..- -.-- --..",
          "character": "B C F J P Q V X Y Z",
          "description": "The final ten letters, in the order this course introduced them — the hardest chunk to send cleanly, because it mixes the rarest characters together."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U4-L3】: Focus on visualizing the fundamental pattern and structural dependencies for Send (key or tap) the full alp."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U4-L3】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "id": "morse-u4-l3-q1",
          "type": "encode",
          "prompt": "From memory, write the Morse pattern for the word \"BUCKLE\" (a real six-letter word using only letters from this unit's chunks).",
          "answer": "-... ..- -.-. -.- .-.. .",
          "difficulty": 850
        },
        {
          "id": "morse-u4-l3-q2",
          "type": "short-answer",
          "prompt": "Write out, in order, the eight letters of the very first Farnsworth foundation group taught in this course.",
          "answer": "E T I M S O A N",
          "difficulty": 800
        },
        {
          "id": "morse-u4-l3-q3",
          "type": "multiple-choice",
          "prompt": "Why is sending the alphabet in small chunks more reliable than sending it as one unbroken 26-letter chain?",
          "options": [
            "It is not more reliable, it is just faster",
            "Chunked recall survives a single missed letter better — one gap does not collapse the whole sequence",
            "Chunks use fewer beats overall",
            "Only chunked sending is technically legal on the air"
          ],
          "answer": "Chunked recall survives a single missed letter better — one gap does not collapse the whole sequence",
          "difficulty": 800
        }
      ]
    }
  },
  "morse-u4-l4": {
    "id": "morse-u4-l4",
    "unit": "morse-u4",
    "level": "beginner",
    "objective": "Identify and correct your personal weakest-recognized characters using targeted drills.",
    "difficulty": 850,
    "presentation": {
      "explanation": "Every learner ends up with a personal short list of two or three letters that keep tripping them up, and it is rarely the same list twice — one person mixes up G and Z, another confuses U and V, another loses count between M (\"--\") and O (\"---\") under time pressure. The fix is not to re-drill the whole alphabet evenly; it is to notice which specific letters cause YOUR mistakes and drill those disproportionately, the same way a chess player reviews their own lost games rather than studying openings at random. Keep a simple mental (or written) tally for a session or two: every time you hesitate or get a letter wrong, note it. Letters that show up on that list more than once are your real weak points, not whatever the course \"assumes\" is hard.",
      "examples": [
        {
          "pattern": "--",
          "character": "M",
          "description": "Two dahs."
        },
        {
          "pattern": "---",
          "character": "O",
          "description": "Three dahs — commonly undercounted as M under time pressure. A classic personal weak point for many learners."
        },
        {
          "pattern": "..-",
          "character": "U",
          "description": "Dit-dit-dah."
        },
        {
          "pattern": "...-",
          "character": "V",
          "description": "Dit-dit-dit-dah — one extra dit before the dah, easily miscounted against U."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U4-L4】: Focus on visualizing the fundamental pattern and structural dependencies for Identify and correct your pers."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U4-L4】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "id": "morse-u4-l4-q1",
          "type": "decode",
          "prompt": "Decode, counting carefully: \"--- --\"",
          "answer": "OM",
          "difficulty": 830
        },
        {
          "id": "morse-u4-l4-q2",
          "type": "decode",
          "prompt": "Decode, counting carefully: \"...- ..-\"",
          "answer": "VU",
          "difficulty": 830
        },
        {
          "id": "morse-u4-l4-q3",
          "type": "short-answer",
          "prompt": "Describe a simple, honest way to find your OWN personal weakest characters, rather than assuming they match everyone else's.",
          "answer": "Keep a tally during practice of every letter you hesitate on or get wrong; whichever letters show up repeatedly across a session or two are your real weak points, and deserve disproportionate extra drilling.",
          "difficulty": 850
        },
        {
          "id": "morse-u4-l4-q4",
          "type": "true-false",
          "prompt": "Every learner struggles with exactly the same letters, so a generic drill order works equally well for everyone.",
          "answer": "false",
          "difficulty": 800
        }
      ]
    }
  },
  "morse-u4-l5": {
    "id": "morse-u4-l5",
    "unit": "morse-u4",
    "level": "beginner",
    "objective": "Pass a full-alphabet mixed copy checkpoint at wide Farnsworth spacing.",
    "difficulty": 870,
    "presentation": {
      "explanation": "This is the closing checkpoint for the entire beginner alphabet arc that began four units ago with a single dit for E. The message below is a real, historically-flavored phrase — the kind of terse, information-dense wording real telegraph and radio traffic favors, where every unnecessary word costs time on the air. \"ALL QUIET ON THE FRONT\" uses seventeen different letters, including Q, one of the rarest characters in the whole alphabet, in a real word (QUIET) rather than an isolated drill letter. If you can copy this cleanly at wide spacing, you have genuinely finished the beginner level: every character, at full rhythm, recognized on first hearing, no chart required. Units 5 and 6 add numbers, punctuation, and prosigns next — Unit 7 is where the spacing itself finally starts to compress toward real operating speed.",
      "examples": [
        {
          "pattern": ".- .-.. .-..",
          "character": "ALL",
          "description": "Opening word — three letters, one of them doubled."
        },
        {
          "pattern": "--.- ..- .. . -",
          "character": "QUIET",
          "description": "The word carrying this message's rarest letter, Q, in natural context."
        },
        {
          "pattern": ".- .-.. .-.. / --.- ..- .. . - / --- -. / - .... . / ..-. .-. --- -. -",
          "character": "ALL QUIET ON THE FRONT",
          "description": "The complete five-word message — the closing \"STORM WARNING\" moment for the full beginner alphabet."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U4-L5】: Focus on visualizing the fundamental pattern and structural dependencies for Pass a full-alphabet mixed cop."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U4-L5】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "id": "morse-u4-l5-q1",
          "type": "decode",
          "prompt": "Decode this word: \"--.- ..- .. . -\"",
          "answer": "QUIET",
          "difficulty": 850
        },
        {
          "id": "morse-u4-l5-q2",
          "type": "decode",
          "prompt": "Decode this word: \"..-. .-. --- -. -\"",
          "answer": "FRONT",
          "difficulty": 850
        },
        {
          "id": "morse-u4-l5-q3",
          "type": "decode",
          "prompt": "Decode the complete message: \".- .-.. .-.. / --.- ..- .. . - / --- -. / - .... . / ..-. .-. --- -. -\"",
          "answer": "ALL QUIET ON THE FRONT",
          "difficulty": 900
        },
        {
          "id": "morse-u4-l5-q4",
          "type": "encode",
          "prompt": "Write the Morse pattern for the word \"ON\".",
          "answer": "--- -.",
          "difficulty": 800
        },
        {
          "id": "morse-u4-l5-q5",
          "type": "short-answer",
          "prompt": "What changes starting in Unit 7, now that the beginner alphabet arc is complete?",
          "answer": "The character speed stays the same, but the spacing between characters and words starts to compress toward real operating speed — the defining Farnsworth-method move of narrowing the thinking gaps rather than re-learning the letters.",
          "difficulty": 800
        }
      ]
    }
  },
  "morse-u5-l1": {
    "id": "morse-u5-l1",
    "unit": "morse-u5",
    "level": "intermediate",
    "objective": "Recognize and send digits 1-5, noting their pattern relationship to letters.",
    "difficulty": 880,
    "presentation": {
      "explanation": "Every Morse digit is built from exactly five beats total — no more, no fewer — which makes the numeral set far more learnable than it first appears. For digits 1 through 5, the rule is simply this: the digit's value tells you how many dits come FIRST, and the rest of the five beats are dahs. So 1 is one dit followed by four dahs; 3 is three dits followed by two dahs; 5 is five dits and no dahs at all. Once you say that rule out loud a few times, you stop needing to memorize ten separate shapes and start being able to derive four of them (2, 3, 4, and 5) from the pattern alone. Digit 5, all dits, is worth comparing to letter H (four dits) — 5 is simply H with one more dit tacked on, the same \"add a beat\" relationship this course has used since Unit 1.",
      "examples": [
        {
          "pattern": ".----",
          "character": "1",
          "description": "One dit, then four dahs — the digit value tells you how many dits come first."
        },
        {
          "pattern": "...--",
          "character": "3",
          "description": "Three dits, then two dahs — the midpoint of the five-beat pattern."
        },
        {
          "pattern": ".....",
          "character": "5",
          "description": "Five dits and no dahs — the letter H (four dits) with one more dit added."
        },
        {
          "pattern": "..--- ...-- ....-",
          "character": "2 3 4",
          "description": "Digits 2, 3, and 4 side by side, showing the dits-to-dahs balance shifting one beat at a time."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U5-L1】: Focus on visualizing the fundamental pattern and structural dependencies for Recognize and send digits 1-5,."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U5-L1】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "id": "morse-u5-l1-q1",
          "type": "decode",
          "prompt": "Decode: \".----\"",
          "answer": "1",
          "difficulty": 860
        },
        {
          "id": "morse-u5-l1-q2",
          "type": "decode",
          "prompt": "Decode: \"...--\"",
          "answer": "3",
          "difficulty": 860
        },
        {
          "id": "morse-u5-l1-q3",
          "type": "encode",
          "prompt": "Write the Morse pattern for the digit 4.",
          "answer": "....-",
          "difficulty": 880
        },
        {
          "id": "morse-u5-l1-q4",
          "type": "decode",
          "prompt": "Decode this two-digit sequence: \"..--- ....-\"",
          "answer": "24",
          "difficulty": 900
        },
        {
          "id": "morse-u5-l1-q5",
          "type": "short-answer",
          "prompt": "State the pattern rule for digits 1 through 5.",
          "answer": "Every digit from 1 to 5 is built from five beats total: the digit's value tells you how many dits come first, and the remaining beats (up to five) are dahs. So 3 is three dits followed by two dahs.",
          "difficulty": 880
        }
      ]
    }
  },
  "morse-u5-l2": {
    "id": "morse-u5-l2",
    "unit": "morse-u5",
    "level": "intermediate",
    "objective": "Recognize and send digits 6-9 and 0, completing the numeral set.",
    "difficulty": 890,
    "presentation": {
      "explanation": "Here is the payoff for having learned digits 1-5 by their pattern rather than by rote: digits 6, 7, 8, and 9 are exact MIRROR IMAGES of 4, 3, 2, and 1. Reverse the beats of 4 (four dits, one dah) and you get one dah then four dits — exactly 6. Reverse 1 (one dit, four dahs) and you get four dahs then one dit — exactly 9. This holds perfectly for all four pairs: 1 mirrors 9, 2 mirrors 8, 3 mirrors 7, and 4 mirrors 6. That leaves 0, which sits at the opposite extreme from 5: where 5 is five dits (all short), 0 is five dahs (all long) — the two ends of the numeral scale, each already symmetric on its own, which is why neither one needs a separate mirror partner. With this rule, the whole ten-digit set reduces to one five-beat pattern learned once, plus \"read it backwards\" for the second half.",
      "examples": [
        {
          "pattern": "-....",
          "character": "6",
          "description": "One dah then four dits — the mirror image of 4 (four dits then one dah)."
        },
        {
          "pattern": "----.",
          "character": "9",
          "description": "Four dahs then one dit — the mirror image of 1 (one dit then four dahs)."
        },
        {
          "pattern": "-----",
          "character": "0",
          "description": "All five dahs — the opposite extreme from 5 (all dits), and already symmetric on its own."
        },
        {
          "pattern": ".---- ----.",
          "character": "1 9",
          "description": "1 and 9 side by side — read the second one as the first one reversed."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U5-L2】: Focus on visualizing the fundamental pattern and structural dependencies for Recognize and send digits 6-9 ."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U5-L2】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "id": "morse-u5-l2-q1",
          "type": "decode",
          "prompt": "Decode: \"-....\"",
          "answer": "6",
          "difficulty": 870
        },
        {
          "id": "morse-u5-l2-q2",
          "type": "decode",
          "prompt": "Decode: \"-----\"",
          "answer": "0",
          "difficulty": 870
        },
        {
          "id": "morse-u5-l2-q3",
          "type": "encode",
          "prompt": "Write the Morse pattern for the digit 8.",
          "answer": "---..",
          "difficulty": 890
        },
        {
          "id": "morse-u5-l2-q4",
          "type": "multiple-choice",
          "prompt": "Digit 6 (\"-....\") is the mirror image of which digit?",
          "options": [
            "4",
            "9",
            "3",
            "0"
          ],
          "answer": "4",
          "difficulty": 870
        },
        {
          "id": "morse-u5-l2-q5",
          "type": "short-answer",
          "prompt": "Explain why 5 and 0 don't have separate \"mirror partners\" among 1-9 the way 1/9, 2/8, 3/7, and 4/6 do.",
          "answer": "Because 5 (all dits) and 0 (all dahs) are each already symmetric — reversing five dits still gives five dits, and reversing five dahs still gives five dahs — so they sit at the two opposite extremes of the pattern instead of pairing with another digit.",
          "difficulty": 900
        }
      ]
    }
  },
  "morse-u5-l3": {
    "id": "morse-u5-l3",
    "unit": "morse-u5",
    "level": "intermediate",
    "objective": "Copy mixed alphanumeric groups (letters and numbers together).",
    "difficulty": 900,
    "presentation": {
      "explanation": "Real amateur radio constantly mixes letters and digits in the same group — nowhere more than in callsigns, which always combine both. This lesson introduces two genuinely real pieces of ham radio culture: W1AW, the callsign of the ARRL's Hiram Percy Maxim Memorial Station in Newington, Connecticut — on the air continuously since 1938 and one of the most recognized callsigns in the hobby — and \"73,\" real shorthand still used today, sent at the end of a contact to mean \"best regards.\" Copying a mixed group is no different mechanically from copying a word: decode each character in order, letter or digit, with the same spacing discipline as always. The only new skill is not being thrown off when a digit shows up in the middle of what your ear expects to be a normal word.",
      "examples": [
        {
          "pattern": ".-- .---- .- .--",
          "character": "W1AW",
          "description": "A real, famous callsign — the ARRL's Hiram Percy Maxim Memorial Station, on the air since 1938."
        },
        {
          "pattern": "--... ...--",
          "character": "73",
          "description": "\"73\" — real, still-used ham radio shorthand for \"best regards,\" traditionally sent at the end of a contact."
        },
        {
          "pattern": "-.- ..--- - . ... -",
          "character": "K2TEST",
          "description": "A practice callsign format (not a real station) — showing how a digit sits naturally in the middle of a mixed group."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U5-L3】: Focus on visualizing the fundamental pattern and structural dependencies for Copy mixed alphanumeric groups."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U5-L3】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "id": "morse-u5-l3-q1",
          "type": "decode",
          "prompt": "Decode this callsign: \".-- .---- .- .--\"",
          "answer": "W1AW",
          "difficulty": 900
        },
        {
          "id": "morse-u5-l3-q2",
          "type": "decode",
          "prompt": "Decode: \"--... ...--\"",
          "answer": "73",
          "difficulty": 880
        },
        {
          "id": "morse-u5-l3-q3",
          "type": "encode",
          "prompt": "Write the Morse pattern for \"K9\" (a letter followed by a digit).",
          "answer": "-.- ----.",
          "difficulty": 900
        },
        {
          "id": "morse-u5-l3-q4",
          "type": "short-answer",
          "prompt": "What does the real ham radio shorthand \"73\" mean, and when is it typically sent?",
          "answer": "It means \"best regards,\" and it is traditionally sent at the end of a contact or conversation.",
          "difficulty": 870
        }
      ]
    }
  },
  "morse-u5-l4": {
    "id": "morse-u5-l4",
    "unit": "morse-u5",
    "level": "intermediate",
    "objective": "Copy real-world numeric strings: dates, times, and frequencies.",
    "difficulty": 910,
    "presentation": {
      "explanation": "Numbers rarely travel alone in real traffic — they show up as dates, times, and frequencies, often packed tightly together with no punctuation to help you. \"Zulu time\" (UTC, written like \"1400Z\") is the time format hams, pilots, and the military all use worldwide specifically to avoid time-zone confusion — the trailing Z is a real letter you already know, just doing a new job. Frequencies are read the same way: \"14313\" stands for 14.313 MHz, a real slice of the 20-meter amateur band, with the decimal point simply skipped — operators agree on the format ahead of time and context fills in the gap (formal decimal-point punctuation arrives in Unit 6). Dates work the same way once digits and letters are both in your toolkit: a full historic date like \"JULY 4 1776\" is now entirely within reach, mixing a spelled word with two number groups.",
      "examples": [
        {
          "pattern": ".---- ....- ----- ----- --..",
          "character": "1400Z",
          "description": "\"Zulu time\" (UTC) notation for 2:00 PM — the trailing Z is a real letter doing a new job."
        },
        {
          "pattern": ".---- ....- ...-- .---- ...--",
          "character": "14313",
          "description": "A real HF frequency inside the 20-meter amateur band (14.313 MHz) — the decimal point is simply skipped."
        },
        {
          "pattern": ".--- ..- .-.. -.-- / ....- / .---- --... --... -....",
          "character": "JULY 4 1776",
          "description": "A real historic date, now fully in reach: the day the United States declared independence."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U5-L4】: Focus on visualizing the fundamental pattern and structural dependencies for Copy real-world numeric string."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U5-L4】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "id": "morse-u5-l4-q1",
          "type": "decode",
          "prompt": "Decode this Zulu time: \".---- ....- ----- ----- --..\"",
          "answer": "1400Z",
          "difficulty": 900
        },
        {
          "id": "morse-u5-l4-q2",
          "type": "decode",
          "prompt": "Decode this full historic date: \".--- ..- .-.. -.-- / ....- / .---- --... --... -....\"",
          "answer": "JULY 4 1776",
          "difficulty": 940
        },
        {
          "id": "morse-u5-l4-q3",
          "type": "encode",
          "prompt": "Write the Morse pattern for the frequency \"146520\" (a real US 2-meter simplex calling frequency, decimal point skipped).",
          "answer": ".---- ....- -.... ..... ..--- -----",
          "difficulty": 920
        },
        {
          "id": "morse-u5-l4-q4",
          "type": "short-answer",
          "prompt": "Why do real Morse numeric groups like frequencies often skip the decimal point?",
          "answer": "Because there is no dedicated decimal-point punctuation being used yet at this stage — operators simply agree on the format ahead of time and let context tell them where the decimal belongs. Formal punctuation, including the period, is covered starting in Unit 6.",
          "difficulty": 900
        }
      ]
    }
  },
  "morse-u5-l5": {
    "id": "morse-u5-l5",
    "unit": "morse-u5",
    "level": "intermediate",
    "objective": "Pass a mixed alphanumeric checkpoint at wide spacing.",
    "difficulty": 930,
    "presentation": {
      "explanation": "This closing checkpoint brings the whole unit together in one authentic radio exchange: \"CQ DE W1AW\" — \"calling any station, this is W1AW.\" CQ you already know from Unit 3; DE is real, still-used radio shorthand for \"this is\" or \"from,\" built from two letters you have known since Unit 1 (D and E), simply given a new job the way Z was in the previous lesson. W1AW is the same real, famous callsign from Lesson 3. If you can copy this cleanly at wide spacing, you have proven real command of the full alphabet, all ten digits, and mixed alphanumeric groups together — everything Units 1 through 5 have built. Unit 6 adds punctuation and the core procedural prosigns next, the pieces that give a real exchange its structure.",
      "examples": [
        {
          "pattern": "-.-. --.-",
          "character": "CQ",
          "description": "Calling any station — the same call from Unit 3, now the opening of a real exchange."
        },
        {
          "pattern": "-.. .",
          "character": "DE",
          "description": "Real radio shorthand for \"this is\" or \"from,\" built from two letters you already know."
        },
        {
          "pattern": "-.-. --.- / -.. . / .-- .---- .- .--",
          "character": "CQ DE W1AW",
          "description": "The complete opening call: \"CQ, this is W1AW\" — a real, authentic way an amateur radio contact begins."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U5-L5】: Focus on visualizing the fundamental pattern and structural dependencies for Pass a mixed alphanumeric chec."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U5-L5】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "id": "morse-u5-l5-q1",
          "type": "decode",
          "prompt": "Decode: \"-.-. --.-\"",
          "answer": "CQ",
          "difficulty": 900
        },
        {
          "id": "morse-u5-l5-q2",
          "type": "decode",
          "prompt": "Decode the complete opening call: \"-.-. --.- / -.. . / .-- .---- .- .--\"",
          "answer": "CQ DE W1AW",
          "difficulty": 950
        },
        {
          "id": "morse-u5-l5-q3",
          "type": "encode",
          "prompt": "Write the Morse pattern for \"73\".",
          "answer": "--... ...--",
          "difficulty": 890
        },
        {
          "id": "morse-u5-l5-q4",
          "type": "short-answer",
          "prompt": "What changes starting in Unit 6, now that the full alphabet, digits 0-9, and mixed-group copying are complete?",
          "answer": "Unit 6 adds punctuation (period, comma, question mark) and the core prosigns (AR, SK, BT, KN, K) — the procedural signals that give a real radio exchange its structure.",
          "difficulty": 870
        },
        {
          "id": "morse-u5-l5-q5",
          "type": "true-false",
          "prompt": "In a mixed Morse group, a digit and a letter are separated by the same inter-character spacing as two letters.",
          "answer": "true",
          "difficulty": 850
        }
      ]
    }
  },
  "morse-u7-l1": {
    "id": "morse-u7-l1",
    "unit": "morse-u7",
    "level": "advanced",
    "objective": "Compress Farnsworth inter-character spacing from 8 WPM to 9 WPM effective speed while maintaining 20 WPM character dit/dah timing, shifting the brain from analytical letter-counting to acoustic whole-sound pattern recognition.",
    "difficulty": 650,
    "presentation": {
      "explanation": "Welcome to Advanced Morse Code Unit 7: Farnsworth Spacing Compression (8 -> 12 WPM)! Having learned the complete alphabet, numbers 0-9, punctuation, and core prosigns, your training now enters the crucial physiological phase of **spacing compression**:\n\n1. The Farnsworth Spacing Compression Curve:\n   - In the Farnsworth method, individual dits and dahs are ALWAYS sent at **20 WPM character speed** (a dit is exactly 60 milliseconds).\n   - Beginner units used wide spacing (~5 to 8 WPM effective rate) giving your conscious prefrontal cortex time to analyze and translate: *'dah-di-dah-dit... that's C'*\n   - In Unit 7, we systematically compress the pauses between characters: **8 WPM -> 9 WPM -> 10 WPM -> 11 WPM -> 12 WPM**!\n\n2. The Neurological Shift (#ScienceOfLearning):\n   - At 9 WPM effective speed, conscious counting becomes physically impossible. Your brain is forced to process Morse code like spoken phonemes—a single acoustic gestalt (*'di-dah-dit'* sounds like a melodic chirp meaning 'R', rather than 'one dit, one dah, one dit').\n   - **Rule of Thumb**: Stop writing the instant you hear the character; let the sound echo into your motor hand without verbalizing in your head.",
      "examples": [
        {
          "target": "PARIS",
          "reading": ".--. .- .-. .. ...",
          "translation": "Standard Paris timing benchmark word."
        },
        {
          "target": "SIGNAL",
          "reading": "... .. --. -. .- .-..",
          "translation": "6-letter word at 9 WPM effective spacing."
        },
        {
          "target": "CQ CQ CQ DE W1AW",
          "reading": "-.-. --.-   -.-. --.-   -.-. --.-   -.. .   .-- .---- .- .--",
          "translation": "Standard general call at 9 WPM spacing."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U6-L1】: Focus on visualizing the fundamental pattern and structural dependencies for Compress Farnsworth inter-char."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U6-L1】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Apply the core technique of Lesson 26 to solve this challenge:",
          "options": [
            "Making the dits shorter than 60 milliseconds (26.1) [L26.1] (Focus 26.1)",
            "Learning new secret codes (26.2) [L26.2] (Focus 26.2)",
            "Typing faster with one finger (26.3) [L26.3] (Focus 26.3)",
            "Forcing the auditory cortex to recognize whole acoustic rhythm patterns (gestalts) rather than counting dits and dahs analytically (26.4) [L26.4] (Focus 26.4)"
          ],
          "answerIndex": 3,
          "explanation": "Acoustic gestalt perception replaces conscious counting."
        },
        {
          "prompt": "Decode this standard benchmark call sent at 9 WPM effective spacing: `-.-. --.-`",
          "options": [
            "73",
            "OK",
            "CQ (General call to any listening station)",
            "DE"
          ],
          "answerIndex": 2,
          "explanation": "-.-. (C) + --.- (Q) = CQ."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 26:",
          "options": [
            "RADIO (26.1) [L26.1] (Task 26.1)",
            "TOWER (26.2) [L26.2] (Task 26.2)",
            "MORSE (26.3) [L26.3] (Task 26.3)",
            "PARIS (26.4) [L26.4] (Task 26.4)"
          ],
          "answerIndex": 3,
          "explanation": ".--. (P) .- (A) .-. (R) .. (I) ... (S) = PARIS."
        },
        {
          "prompt": "What happens if you hesitate on an unfamiliar sound at 9 WPM effective speed?",
          "options": [
            "The transmitter automatically pauses.",
            "The speed slows down.",
            "You must restart from the beginning.",
            "You will miss the subsequent 2-3 characters; the proper discipline is to immediately drop the missed letter and focus on the next sound."
          ],
          "answerIndex": 3,
          "explanation": "Never dwell on a missed character; stay anchored to the present rhythm."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Decode the 5-character group sent at 9 WPM: `-.-. --- -.. . .-.`",
          "options": [
            "CLEAN",
            "COVER",
            "COLOR",
            "CODER"
          ],
          "answerIndex": 3,
          "explanation": "-.-. (C) --- (O) -.. (D) . (E) .-. (R) = CODER."
        },
        {
          "prompt": "How many dit-time units are in the standard reference word 'PARIS'?",
          "options": [
            "100 dit-units",
            "20 dit-units",
            "50 dit-units",
            "10 dit-units"
          ],
          "answerIndex": 2,
          "explanation": "PARIS = exactly 50 baud/dit time units."
        },
        {
          "prompt": "Why does the Farnsworth method keep character speed locked at 20 WPM while varying spacing?",
          "options": [
            "Because radio tubes cannot transmit below 20 WPM.",
            "To ensure the auditory brain learns the true high-speed acoustic signature of every letter from day one, preventing the debilitating 'speed plateau' at 10-12 WPM.",
            "It is a legal requirement.",
            "To save battery power."
          ],
          "answerIndex": 1,
          "explanation": "Prevents the classic counting plateau by cementing high-speed acoustic memory."
        },
        {
          "prompt": "Decode: `... .--. .- -.-. .`",
          "options": [
            "SPACE",
            "SPARK",
            "STAND",
            "SPEED"
          ],
          "answerIndex": 0,
          "explanation": "... (S) .--. (P) .- (A) -.-. (C) . (E) = SPACE."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "morse-u7-l2": {
    "id": "morse-u7-l2",
    "unit": "morse-u7",
    "level": "advanced",
    "objective": "Advance Farnsworth spacing compression to 10 WPM effective rate on random 5-character alphanumeric groups containing mixed letters and numbers.",
    "difficulty": 675,
    "presentation": {
      "explanation": "At 10 WPM effective spacing, we reach the traditional milestone where Morse code transitions from an 'academic skill' to an 'operational reflex':\n\n1. Copying Random 5-Character Code Groups (5NNN / Cipher Drill):\n   - In professional telegraphy and amateur licensing exams, copying random 5-character groups (e.g. `K7X9B`, `4M2QL`, `8J1PT`) prevents the brain from guessing based on English context, forcing pure acoustic transcription.\n   - **Spacing at 10 WPM**: The inter-character pause is now only twice the standard spacing duration. You must write/type the character while simultaneously hearing the beginning of the next one!\n\n2. Dual-Track Brain Processing:\n   - **Track 1 (Ear & Auditory Buffer)**: Listening to the incoming sound stream.\n   - **Track 2 (Motor Execution)**: Writing/typing the previous sound that finished 300 milliseconds ago.\n   - This lag is called 'copying behind' (copying 1-2 characters behind the audio).",
      "examples": [
        {
          "target": "7X3MK",
          "reading": "--... -..- ...-- -- -.-",
          "translation": "Mixed alphanumeric 5-character group."
        },
        {
          "target": "9B2WF",
          "reading": "----. -... ..--- .-- ..-.",
          "translation": "Alphanumeric code group at 10 WPM spacing."
        },
        {
          "target": "RST 599 001",
          "reading": ".-. ... -   ..... ----. ----.   ----- ----- .----",
          "translation": "Standard contest exchange report."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U6-L2】: Focus on visualizing the fundamental pattern and structural dependencies for Advance Farnsworth spacing com."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U6-L2】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Apply the core technique of Lesson 27 to solve this challenge:",
          "options": [
            "'Copying behind' — letting the ear buffer the current sound while the hand writes the previously completed character 1-2 positions back (27.1) [L27.1] (Focus 27.1)",
            "Writing in cursive uppercase only (27.2) [L27.2] (Focus 27.2)",
            "Stopping after every word (27.3) [L27.3] (Focus 27.3)",
            "Guessing only vowels (27.4) [L27.4] (Focus 27.4)"
          ],
          "answerIndex": 0,
          "explanation": "Copying behind prevents physical motor jamming."
        },
        {
          "prompt": "Decode the mixed group: `..--- --.. ----. .--.`",
          "options": [
            "2Z9P",
            "1X8Q",
            "4K6L",
            "3Y7M"
          ],
          "answerIndex": 0,
          "explanation": "..--- (2) --.. (Z) ----. (9) .--. (P) = 2Z9P."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 27:",
          "options": [
            "CQ 73 (27.1) [L27.1] (Task 27.1)",
            "SOS 999 (27.2) [L27.2] (Task 27.2)",
            "RST 599 (Readability 5, Strength 9, Tone 9 — perfect signal) (27.3) [L27.3] (Task 27.3)",
            "QTH 123 (27.4) [L27.4] (Task 27.4)"
          ],
          "answerIndex": 2,
          "explanation": "RST 599 = standard maximum signal report."
        },
        {
          "prompt": "Why are random alphanumeric code groups used in speed training?",
          "options": [
            "Because words are forbidden on radio.",
            "Because numbers are easier than letters.",
            "To encrypt military secrets only.",
            "Because they eliminate linguistic context and word-guessing, testing pure auditory reflex and accuracy on every individual symbol."
          ],
          "answerIndex": 3,
          "explanation": "Random groups isolate and test pure acoustic decoding reflexes."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Decode the 5-character group sent at 10 WPM: `...-- -.-. --... .-.. ----.`",
          "options": [
            "4D6M8",
            "1A9J7",
            "3C7L9",
            "2B8K0"
          ],
          "answerIndex": 2,
          "explanation": "...-- (3) -.-. (C) --... (7) .-.. (L) ----. (9) = 3C7L9."
        },
        {
          "prompt": "What does the signal report 'RST 599' signify in Morse communications?",
          "options": [
            "Room 599",
            "Readability 5 (100% readable), Strength 9 (extremely strong signal), Tone 9 (perfect pure tone)",
            "Frequency 599 kHz",
            "Radio Station 599"
          ],
          "answerIndex": 1,
          "explanation": "RST scale: Readability (1-5), Strength (1-9), Tone (1-9)."
        },
        {
          "prompt": "Decode: `-... ..- ..-. ..-. . .-.`",
          "options": [
            "BUFFER",
            "BITTER",
            "BOMBER",
            "BATTER"
          ],
          "answerIndex": 0,
          "explanation": "-... (B) ..- (U) ..-. (F) ..-. (F) . (E) .-. (R) = BUFFER."
        },
        {
          "prompt": "Complete the contest exchange: 'UR RST 599 _______ (Best regards)'",
          "options": [
            "88",
            "99",
            "00",
            "73 (--... ...--)"
          ],
          "answerIndex": 3,
          "explanation": "73 is the universal telegrapher blessing."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "morse-u7-l3": {
    "id": "morse-u7-l3",
    "unit": "morse-u7",
    "level": "advanced",
    "objective": "Advance Farnsworth spacing compression to 11 WPM effective rate copying high-frequency English vocabulary words (THE, AND, FOR, WITH, THIS, FROM, HAVE, THAT) directly as whole auditory word-rhythms.",
    "difficulty": 700,
    "presentation": {
      "explanation": "At 11 WPM effective spacing, common English words begin to sound like **single rhythmic melodies** rather than individual letters:\n\n1. Auditory Word-Shapes (Whole-Word Acoustic Images):\n   - **THE** (`- .... .` = dah di-di-di-dit dit): Sounds like a distinct rapid galloping cadence.\n   - **AND** (`.- -. -..` = di-dah dah-dit dah-di-dit): A fluid descending wave.\n   - **FOR** (`..-. --- .-.` = di-di-dah-dit dah-dah-dah di-dah-dit): Crisp and rolling.\n   - **YOU** (`-.-- --- ..-` = dah-di-dah-dah dah-dah-dah di-di-dah)\n   - **WITH** (`.-- .. - ....` = di-dah-dah di-dit dah di-di-di-dit)\n   - **THAT** (`- .... .- -` = dah di-di-di-dit di-dah dah)\n\n2. Instant Word Perception:\n   - Just as fluent readers do not sound out 't-h-e' letter-by-letter, fluent telegraphers hear the combined rhythm `- .... .` and instantly write 'THE' without thinking of T, H, or E individually (#ScienceOfLearning).",
      "examples": [
        {
          "target": "THE BOOK AND THE PEN",
          "reading": "- .... .   -... --- --- -.-   .- -. -..   - .... .   .--. . -.",
          "translation": "Common sight-word phrase at 11 WPM."
        },
        {
          "target": "WITH YOU FROM THE START",
          "reading": ".-- .. - ....   -.-- --- ..-   ..-. .-. --- --   - .... .   ... - .- .-. -",
          "translation": "High-frequency word flow at 11 WPM."
        },
        {
          "target": "THANKS FOR THE NICE QSO",
          "reading": "- .... .- -. -.- ...   ..-. --- .-.   - .... .   -. .. -.-. .   --.- ... ---",
          "translation": "Standard amateur radio conversational phrase."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U6-L3】: Focus on visualizing the fundamental pattern and structural dependencies for Advance Farnsworth spacing com."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U6-L3】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Apply the core technique of Lesson 28 to solve this challenge:",
          "options": [
            "By pausing the tape and counting four dits for H (28.1) [L28.1] (Focus 28.1)",
            "By writing down T, then waiting for H, then waiting for E (28.2) [L28.2] (Focus 28.2)",
            "By guessing based on the first letter only (28.3) [L28.3] (Focus 28.3)",
            "As a single unified acoustic rhythm (- .... .) recognized instantaneously as the concept 'THE' (28.4) [L28.4] (Focus 28.4)"
          ],
          "answerIndex": 3,
          "explanation": "Whole-word acoustic imagery bypasses letter-by-letter decomposition."
        },
        {
          "prompt": "Decode this 3-word phrase sent at 11 WPM: `..-. --- .-.   -.-- --- ..-`",
          "options": [
            "FROM HER",
            "FAR OUT",
            "FLY NOW",
            "FOR YOU"
          ],
          "answerIndex": 3,
          "explanation": "..-. --- .-. (FOR) + -.-- --- ..- (YOU) = FOR YOU."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 28:",
          "options": [
            "THANKS FOR QSO (Thanks for the radio contact) (28.1) [L28.1] (Task 28.1)",
            "TIME FOR BED (28.2) [L28.2] (Task 28.2)",
            "THANK YOU ALL (28.3) [L28.3] (Task 28.3)",
            "TODAY IS SUNNY (28.4) [L28.4] (Task 28.4)"
          ],
          "answerIndex": 0,
          "explanation": "THANKS FOR QSO."
        },
        {
          "prompt": "What does 'QSO' mean in Morse radio telegraphy?",
          "options": [
            "A two-way radio conversation / contact between two operators",
            "A broken antenna",
            "A storm warning",
            "Signing off for sleep"
          ],
          "answerIndex": 0,
          "explanation": "QSO = a two-way contact / conversation."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Decode the high-frequency sentence sent at 11 WPM: `.-- .. - ....   .- .-.. .-..   -- -.--   .... . .- .-. -`",
          "options": [
            "WALK IN THE PARK",
            "WITH ALL MY HEART",
            "WHEN WILL WE MEET",
            "WHERE ARE MY SHOES"
          ],
          "answerIndex": 1,
          "explanation": "WITH ALL MY HEART."
        },
        {
          "prompt": "Decode the word: `- .... .. ...`",
          "options": [
            "THIS",
            "THEM",
            "THAT",
            "THEN"
          ],
          "answerIndex": 0,
          "explanation": "- (T) .... (H) .. (I) ... (S) = THIS."
        },
        {
          "prompt": "What cognitive phenomenon allows telegraphers to comprehend text at 11+ WPM without visual spelling?",
          "options": [
            "Subconscious blinking.",
            "Hand trembling.",
            "Photographic memory of keyboard letters.",
            "Phonological recoding into auditory word-form representations in the superior temporal gyrus (#ScienceOfLearning)."
          ],
          "answerIndex": 3,
          "explanation": "Auditory word-form representation in the brain."
        },
        {
          "prompt": "Decode: `..-. .-. --- --   -.. .- .-- -.   - ---   -.. ..- ... -.-`",
          "options": [
            "FIVE DAYS IN JUNE",
            "FREE FROM THE DUST",
            "FROM DAWN TO DUSK",
            "FOUR DAYS TO REST"
          ],
          "answerIndex": 2,
          "explanation": "FROM DAWN TO DUSK."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "morse-u7-l4": {
    "id": "morse-u7-l4",
    "unit": "morse-u7",
    "level": "advanced",
    "objective": "Advance Farnsworth spacing compression to 12 WPM effective rate copying real-world amateur radio callsigns, prefixes, RST reports, and Q-signals.",
    "difficulty": 725,
    "presentation": {
      "explanation": "At 12 WPM effective spacing, your Morse code fluency reaches the official threshold of standard international amateur radio competency:\n\n1. Global Radio Callsign Anatomy:\n   - Callsigns consist of a prefix indicating country/region (e.g. **W/K/N/AA-AL** = USA, **G/M** = UK, **DL** = Germany, **JA** = Japan, **PY** = Brazil, **VE** = Canada), followed by a district number (0-9) and 1-3 suffix letters:\n     - `W1AW` (ARRL flagship station, USA)\n     - `DL1ABC` (Germany)\n     - `JA7XYZ` (Japan)\n     - `PY2AA` (Brazil)\n     - `G4BVC` (UK)\n\n2. Standard QSO Exchange Flow at 12 WPM:\n   - `CQ CQ CQ DE W1AW K` (Calling CQ)\n   - `W1AW DE DL1ABC K` (Answering)\n   - `DL1ABC DE W1AW GM UR RST 599 599 BT QTH BOSTON NAME BOB BT HW CPY? DL1ABC DE W1AW KN` (Exchange exchange!).\n\n3. Spacing Discipline at 12 WPM:\n   - Inter-letter spacing is now only 3 dit-lengths (the exact standard spacing). Pauses between words are 7 dit-lengths. The audio flows naturally with zero artificial delays!",
      "examples": [
        {
          "target": "CQ CQ DE DL1ABC K",
          "reading": "-.-. --.-   -.-. --.-   -.. .   -.. .-.. .---- .- -... -.-.   -.-",
          "translation": "German station calling CQ at 12 WPM."
        },
        {
          "target": "UR RST 599 QTH LONDON",
          "reading": "..- .-.   .-. ... -   ..... ----. ----.   --.- - ....   .-.. --- -. -.. --- -.",
          "translation": "Signal report and location exchange."
        },
        {
          "target": "73 ES HPE CUAGN SK",
          "reading": "--... ...--   . ...   .... .--. .   -.-. ..- .- --. -.   ... -.-",
          "translation": "Best regards and hope to see you again (sign-off)."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U6-L4】: Focus on visualizing the fundamental pattern and structural dependencies for Advance Farnsworth spacing com."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U6-L4】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Apply the core technique of Lesson 29 to solve this challenge:",
          "options": [
            "N3ABC (29.1) [L29.1] (Focus 29.1)",
            "W1AW (ARRL headquarters station in Newington, Connecticut) (29.2) [L29.2] (Focus 29.2)",
            "W9XYZ (29.3) [L29.3] (Focus 29.3)",
            "K2USA (29.4) [L29.4] (Focus 29.4)"
          ],
          "answerIndex": 1,
          "explanation": ".-- (W) .---- (1) .- (A) .-- (W) = W1AW."
        },
        {
          "prompt": "What does 'QTH' mean in radio telegraphy?",
          "options": [
            "My location / city / geographical position is...",
            "Can you speak louder?",
            "The weather is rainy",
            "What is the time?"
          ],
          "answerIndex": 0,
          "explanation": "QTH is the Q-signal for location/home city."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 29:",
          "options": [
            "QTH TOKYO (Location: Tokyo) (29.1) [L29.1] (Task 29.1)",
            "QRZ TOKYO (29.2) [L29.2] (Task 29.2)",
            "CQ TONIGHT (29.3) [L29.3] (Task 29.3)",
            "QSL TOKYO (29.4) [L29.4] (Task 29.4)"
          ],
          "answerIndex": 0,
          "explanation": "--.- - .... (QTH) + - --- -.- -.-- --- (TOKYO) = QTH TOKYO."
        },
        {
          "prompt": "What does 'HPE CUAGN' represent in Morse shorthand?",
          "options": [
            "Hope to see you again (Hope See You Again)",
            "Happy birthday again",
            "Heavy rain in Germany",
            "Help call urgent"
          ],
          "answerIndex": 0,
          "explanation": "HPE (Hope) CU (See you) AGN (Again)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Decode the complete 12 WPM contact transmission: `--.- ... .-..   --. -...   --... ...--   ... -.-`",
          "options": [
            "QSL GB 73 SK (Acknowledged, Good bye, Best regards, End of contact)",
            "SOS SOS SOS",
            "QRZ QRZ 599",
            "CQ CQ DE W1AW"
          ],
          "answerIndex": 0,
          "explanation": "QSL (Acknowledge) GB (Goodbye) 73 (Best regards) SK (End of work)."
        },
        {
          "prompt": "Decode the callsign: `.--- .- --... -.-- --..`",
          "options": [
            "PY2CD",
            "KA1AB",
            "DL5XY",
            "JA3YZ (Japanese amateur callsign)"
          ],
          "answerIndex": 3,
          "explanation": ".--- (J) .- (A) ...-- (3) -.-- (Y) --.. (Z) = JA3YZ."
        },
        {
          "prompt": "At standard 12 WPM timing, what is the duration ratio between a dit, a dah, an inter-letter space, and an inter-word space?",
          "options": [
            "1 : 5 : 5 : 10",
            "1 : 2 : 2 : 4",
            "1 : 3 : 3 : 7 (Dit = 1 unit, Dah = 3 units, Letter space = 3 units, Word space = 7 units)",
            "2 : 4 : 6 : 8"
          ],
          "answerIndex": 2,
          "explanation": "Standard international Morse timing ratio is 1:3:3:7."
        },
        {
          "prompt": "Decode: `-. .- -- .   -.. .- ...- .. -..`",
          "options": [
            "NICE DAY",
            "NAME DAVID",
            "NO DATA",
            "NEAR DOCK"
          ],
          "answerIndex": 1,
          "explanation": "NAME DAVID."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "morse-u7-l5": {
    "id": "morse-u7-l5",
    "unit": "morse-u7",
    "level": "advanced",
    "objective": "Demonstrate comprehensive Unit 7 Morse fluency by successfully copying a full simulated 12 WPM on-air QSO exchange with 98%+ accuracy across mixed text, numbers, punctuation, and Q-codes under atmospheric noise.",
    "difficulty": 750,
    "presentation": {
      "explanation": "In this Master Capstone for Unit 7, we test your completed transition to full standard **12 WPM effective spacing** in a realistic international on-air contact simulation:\n\n1. The Master Benchmark Simulation Transcript:\n   - **Transmitted Stream** (sent at full 20 WPM character / 12 WPM effective timing):\n     ```text\n     CQ CQ CQ DE W1AW W1AW K\n     W1AW DE PY2AA PY2AA K\n     PY2AA DE W1AW GM OM = TNX FOR CALL = UR RST 599 599 IN BOSTON = NAME BOB BOB = QTH BOSTON MA = HW CPY? PY2AA DE W1AW KN\n     W1AW DE PY2AA = R FB BOB = UR 599 IN SAO PAULO = NAME LUIS = 73 ES HPE CUAGN = W1AW DE PY2AA SK\n     ```\n\n2. Performance Benchmark:\n   - **Target Speed**: 12.0 WPM true standard timing.\n   - **Accuracy Threshold**: 98%+ (less than 2 character errors across the entire 200+ character transmission).\n   - **Head Copy**: The ability to follow the meaning of the conversation in real-time as the sounds arrive!",
      "examples": [
        {
          "target": "CQ CQ CQ DE W1AW W1AW K",
          "reading": "-.-. --.-   -.-. --.-   -.-. --.-   -.. .   .-- .---- .- .--   .-- .---- .- .--   -.-",
          "translation": "Standard CQ call from W1AW."
        },
        {
          "target": "UR RST 599 IN BOSTON NAME BOB",
          "reading": "..- .-.   .-. ... -   ..... ----. ----.   .. -.   -... --- ... - --- -.   -. .- -- .   -... --- -...",
          "translation": "Signal report, QTH, and name transmission."
        },
        {
          "target": "73 ES HPE CUAGN SK",
          "reading": "--... ...--   . ...   .... .--. .   -.-. ..- .- --. -.   ... -.-",
          "translation": "Final sign-off prosign."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U6-L5】: Focus on visualizing the fundamental pattern and structural dependencies for Demonstrate comprehensive Unit."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U6-L5】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Apply the core technique of Lesson 30 to solve this challenge:",
          "options": [
            "Fine Business (telegrapher slang for 'Excellent! / Great!') (30.1) [L30.1] (Focus 30.1)",
            "Facebook (30.2) [L30.2] (Focus 30.2)",
            "Fast Band (30.3) [L30.3] (Focus 30.3)",
            "Full Battery (30.4) [L30.4] (Focus 30.4)"
          ],
          "answerIndex": 0,
          "explanation": "FB = Fine Business (excellent)."
        },
        {
          "prompt": "What does 'OM' stand for when addressing a fellow amateur operator?",
          "options": [
            "Old Man (traditional fraternal term of respect for any male operator regardless of age)",
            "Official Member",
            "Operation Mode",
            "Only Morse"
          ],
          "answerIndex": 0,
          "explanation": "OM = Old Man (friendly telegrapher term)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 30:",
          "options": [
            "DL1ABC (30.1) [L30.1] (Task 30.1)",
            "PY2AA (São Paulo, Brazil station) (30.2) [L30.2] (Task 30.2)",
            "JA7XYZ (30.3) [L30.3] (Task 30.3)",
            "W1AW (30.4) [L30.4] (Task 30.4)"
          ],
          "answerIndex": 1,
          "explanation": ".--. (P) -.-- (Y) ..--- (2) .- (A) .- (A) = PY2AA."
        },
        {
          "prompt": "Translate: 'TNX FOR CALL = UR RST 599'",
          "options": [
            "Turn on radio",
            "Thanks for call [Break] Your signal report is 599",
            "Today is Friday",
            "Time for dinner"
          ],
          "answerIndex": 1,
          "explanation": "TNX FOR CALL = UR RST 599."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What major operational and cognitive competencies were achieved across Unit 7 in Morse Code?",
          "options": [
            "Flag semaphore only",
            "Phonetic alphabet spelling only",
            "Smoke signals only",
            "Farnsworth spacing compression from 8 WPM to full 12 WPM standard timing, acoustic whole-word recognition (THE, AND, FOR, WITH), 5-character cipher group copy, real global callsign decoding (W1AW, PY2AA), and full head-copy QSO mastery"
          ],
          "answerIndex": 3,
          "explanation": "Unit 7 comprehensive 12 WPM spacing compression and on-air operational mastery."
        },
        {
          "prompt": "Decode: `... .--. . . -..   .---- ..---   .-- .--. --   -- .- ... - . .-. . -..`",
          "options": [
            "SLOW DOWN 10 WPM",
            "START 5 WPM TODAY",
            "SPEED 12 WPM MASTERED",
            "STATION 12 CALLING"
          ],
          "answerIndex": 2,
          "explanation": "SPEED 12 WPM MASTERED."
        },
        {
          "prompt": "Why is 12 WPM considered the 'escape velocity' of Morse code learning?",
          "options": [
            "Because 12 is a lucky number.",
            "Because at 12 WPM, spacing is tight enough that conscious translation is permanently extinguished, locking in automatic auditory reflex processing for life.",
            "It is the minimum speed of sound.",
            "Because radio waves travel at 12 miles per second."
          ],
          "answerIndex": 1,
          "explanation": "Permanent extinction of conscious translation and lock-in of auditory automaticity."
        },
        {
          "prompt": "What is the next frontier of Morse code mastery in Unit 8?",
          "options": [
            "Word & Callsign Copy at Speed (building instant whole-word head-copy capacity from 12 to 16 WPM without writing down every letter)",
            "Replacing radio with telephone",
            "Typing on a manual typewriter",
            "Learning Greek letters"
          ],
          "answerIndex": 0,
          "explanation": "Unit 8 focuses on head-copy speed and instantaneous word recognition."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "morse-u8-l1": {
    "id": "morse-u8-l1",
    "unit": "morse-u8",
    "level": "advanced",
    "objective": "Process high-frequency English words (THE, AND, FOR, YOU, NOT, ARE, BUT, HIS, ALL) as unified acoustic rhythmic gestalts rather than analyzing individual letters at 14-16 WPM.",
    "presentation": {
      "explanation": "Welcome to Advanced Morse Code Unit 8: Word & Callsign Copy at Speed! When operators transition past 12 WPM, they stop hearing individual dits and dahs; they begin hearing **Acoustic Words (Word Gestalts)**:\n\n1. The Whole-Word Auditory Reflex:\n   - Just as fluent readers see the word 'THE' as a single shape rather than spelling 'T-H-E', master CW operators hear the rhythm `- .... .` as a single 3-beat melodic word.\n   - **The Top 10 CW Rhythm Words**:\n     - `THE`: `- .... .` (Dah di-di-di-dit dit)\n     - `AND`: `.- -. -..` (Di-dah dah-dit dah-di-dit)\n     - `FOR`: `..-. --- .-.` (Di-di-dah-dit dah-dah-dah di-dah-dit)\n     - `YOU`: `-.-- --- ..-` (Dah-di-dah-dah dah-dah-dah di-di-dah)\n     - `NOT`: `-. --- -` (Dah-dit dah-dah-dah dah)\n     - `ARE`: `.- .-. .` (Di-dah di-dah-dit dit)\n     - `BUT`: `-... ..- -` (Dah-di-di-dit di-di-dah dah)\n     - `HIS`: `.... .. ...` (Di-di-di-dit di-dit di-di-dit)\n     - `ALL`: `.- .-.. .-..` (Di-dah di-dah-di-dit di-dah-di-dit)\n\n2. The Head-Copy Leap:\n   - Put down the pencil! Try to hold the meaning of each word in your mind without writing down each letter.",
      "examples": [
        {
          "target": "- .... .   .- -. -..   ..-. --- .-.",
          "reading": "THE AND FOR",
          "translation": "Top 3 high-frequency word gestalts."
        },
        {
          "target": "-.-- --- ..-   .- .-. .   -. --- -",
          "reading": "YOU ARE NOT",
          "translation": "3-word sentence copied as rhythm blocks."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U7-L1】: Focus on visualizing the fundamental pattern and structural dependencies for Process high-frequency English."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U7-L1】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Apply the core technique of Lesson 31 to solve this challenge:",
          "options": [
            "TEA (31.1) [L31.1] (Focus 31.1)",
            "TEN (31.2) [L31.2] (Focus 31.2)",
            "TOE (31.3) [L31.3] (Focus 31.3)",
            "THE (31.4) [L31.4] (Focus 31.4)"
          ],
          "answerIndex": 3,
          "explanation": "- (T) .... (H) . (E) = THE."
        },
        {
          "prompt": "What is the primary benefit of whole-word acoustic copying (gestalt recognition)?",
          "options": [
            "It avoids learning numbers",
            "It changes the pitch of the tone",
            "It eliminates the cognitive bottleneck of decoding individual letters, allowing listening speeds to leap from 12 WPM up to 20+ WPM",
            "It makes the sound louder"
          ],
          "answerIndex": 2,
          "explanation": "Word gestalts bypass character-by-character cognitive latency."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 31:",
          "options": [
            "YOU ARE NOT (31.1) [L31.1] (Task 31.1)",
            "YES AND ALL (31.2) [L31.2] (Task 31.2)",
            "YET ARE ONE (31.3) [L31.3] (Task 31.3)",
            "YOU ARE ALL (31.4) [L31.4] (Task 31.4)"
          ],
          "answerIndex": 3,
          "explanation": "YOU ( -.-- --- ..- ) ARE ( .- .-. . ) ALL ( .- .-.. .-.. )."
        },
        {
          "prompt": "Decode: `..-. --- .-.   .... .. ...`",
          "options": [
            "FAR HIT",
            "FOR HIM",
            "FOX HID",
            "FOR HIS"
          ],
          "answerIndex": 3,
          "explanation": "FOR ( ..-. --- .-. ) HIS ( .... .. ... )."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the high-frequency words to their Morse code rhythms: THE, AND, YOU, BUT:",
          "options": [
            "All start with dot-dot-dot",
            "All are numbers",
            "THE: - .... . | AND: .- -. -.. | YOU: -.-- --- ..- | BUT: -... ..- -",
            "All are punctuation"
          ],
          "answerIndex": 2,
          "explanation": "High-frequency Morse word matching."
        },
        {
          "prompt": "Decode the full sentence: `- .... .   ... ..- -.   .. ...   ..- .--.`",
          "options": [
            "THE SEA IS CALM",
            "THE SUN IS UP",
            "THE SON IS OUT",
            "THE SKY IS BLUE"
          ],
          "answerIndex": 1,
          "explanation": "THE ( - .... . ) SUN ( ... ..- -. ) IS ( .. ... ) UP ( ..- .--. )."
        },
        {
          "prompt": "What does 'head-copying' mean in high-speed Morse code?",
          "options": [
            "Understanding the incoming message directly in your working memory without transcribing letters onto paper",
            "Nodding your head to the rhythm",
            "Memorizing the codebook",
            "Wearing headphones"
          ],
          "answerIndex": 0,
          "explanation": "Head-copying is direct auditory cognitive comprehension without transcription."
        },
        {
          "prompt": "Complete: 'At 16 WPM, letters blend into words; words blend into _______.'",
          "options": [
            "static interference",
            "alphabet soup",
            "white noise",
            "direct spoken language"
          ],
          "answerIndex": 3,
          "explanation": "At high speeds, Morse code functions as a direct auditory spoken dialect."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "morse-u8-l2": {
    "id": "morse-u8-l2",
    "unit": "morse-u8",
    "level": "advanced",
    "objective": "Decode international amateur radio callsign structures (Prefixes: W/K/N/AA-AL for USA, G/M for UK, DL for Germany, JA for Japan, VE for Canada, VK for Australia), area numbers, and suffix letters at speed.",
    "presentation": {
      "explanation": "Every radio transmission begins with an official **Callsign** assigned by international telecommunication agreements (ITU):\n\n1. The Anatomy of an Amateur Radio Callsign:\n   - `[Country Prefix] + [Call District Digit (0-9)] + [Suffix Letters]`\n   - *Example 1*: `W 1 A W` (USA District 1, ARRL Flagship Station: `.-- .---- .- .--`).\n   - *Example 2*: `G 4 Z Y X` (Great Britain District 4, suffix ZYX: `--. ....- --.. -.-- -..-`).\n   - *Example 3*: `J A 1 A D X` (Japan District 1, suffix ADX: `.--- .- .---- .- -.. -..-`).\n\n2. Key Global Prefixes to Memorize:\n   - **USA**: `W, K, N`, or two-letter blocks starting with `A` (`AA-AL`).\n   - **Canada**: `VE, VA` (`...- .`, `...- .-`).\n   - **United Kingdom**: `G, M, 2E` (`--.`, `--`).\n   - **Germany**: `DL, DK, DJ` (-.. .-..).\n   - **Japan**: `JA, JH, JR, 7N` (.--- .-).\n   - **Australia**: `VK` (...- -.-).\n   - **Brazil**: `PY, PP` (.--. -.--).\n\n3. Callsign Parsing Reflex:\n   - Anticipate the rhythm: `Letters -> Digit -> Letters`.",
      "examples": [
        {
          "target": ".-- .---- .- .--",
          "reading": "W1AW",
          "translation": "Legendary ARRL flagship callsign (USA)."
        },
        {
          "target": "-.. .-.. --... ...- -.-",
          "reading": "DL7VK",
          "translation": "German station (Berlin area 7)."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U7-L2】: Focus on visualizing the fundamental pattern and structural dependencies for Decode international amateur r."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U7-L2】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Apply the core technique of Lesson 32 to solve this challenge:",
          "options": [
            "VE3ABC (Canada Ontario District 3, station ABC) (32.1) [L32.1] (Focus 32.1)",
            "VO3ABC (32.2) [L32.2] (Focus 32.2)",
            "VK3ABC (32.3) [L32.3] (Focus 32.3)",
            "VA3ABC (32.4) [L32.4] (Focus 32.4)"
          ],
          "answerIndex": 0,
          "explanation": "VE ( ...- . ) 3 ( ...-- ) ABC ( .- -... -.-. )."
        },
        {
          "prompt": "Which country is represented by the callsign prefix 'JA' (.--- .-)?",
          "options": [
            "Japan",
            "Jamaica",
            "Jersey",
            "Jordan"
          ],
          "answerIndex": 0,
          "explanation": "JA is the ITU prefix for Japan."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 32:",
          "options": [
            "W2VX (32.1) [L32.1] (Task 32.1)",
            "N2VX (32.2) [L32.2] (Task 32.2)",
            "K2VX (32.3) [L32.3] (Task 32.3)",
            "K3VX (32.4) [L32.4] (Task 32.4)"
          ],
          "answerIndex": 2,
          "explanation": "K ( -.- ) 2 ( ..--- ) V ( ...- ) X ( -..- ) = K2VX (USA District 2)."
        },
        {
          "prompt": "Decode the British callsign: `--. ...-- --.. .--.`",
          "options": [
            "G3ZQ",
            "M3ZP",
            "2E3ZP",
            "G3ZP"
          ],
          "answerIndex": 3,
          "explanation": "G ( --. ) 3 ( ...-- ) Z ( --.. ) P ( .--. ) = G3ZP."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the callsign with its country of origin: W1AW, DL2NPS, VK4XY, PY1AA:",
          "options": [
            "All are ships at sea",
            "W1AW: USA | DL2NPS: Germany | VK4XY: Australia | PY1AA: Brazil",
            "All are military bases",
            "All are British stations"
          ],
          "answerIndex": 1,
          "explanation": "International callsign prefix matching."
        },
        {
          "prompt": "Decode the Australian callsign: `...- -.- ..--- -... -...`",
          "options": [
            "VK2BB",
            "VA2BB",
            "VL2BB",
            "VE2BB"
          ],
          "answerIndex": 0,
          "explanation": "VK ( ...- -.- ) 2 ( ..--- ) BB ( -... -... )."
        },
        {
          "prompt": "Why is recognizing the numeric call district digit (0-9) crucial during rapid callsign copy?",
          "options": [
            "It shows the age of the operator",
            "It indicates how many antennas the station has",
            "It tells the transmitter voltage",
            "The number marks the exact transition between the country prefix and the station suffix, anchoring the rhythm of the callsign"
          ],
          "answerIndex": 3,
          "explanation": "The central digit anchors the rhythmic cadence of the callsign."
        },
        {
          "prompt": "Complete: 'A standard amateur callsign consists of Prefix + Digit + _______.'",
          "options": [
            "Serial Number",
            "Zip Code",
            "Suffix",
            "Password"
          ],
          "answerIndex": 2,
          "explanation": "Prefix + Digit + Suffix is the standard international format."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "morse-u8-l3": {
    "id": "morse-u8-l3",
    "unit": "morse-u8",
    "level": "advanced",
    "objective": "Master core international Q-Codes (QTH, QSL, QRM, QRN, QRP, QRZ, QSY, QSO) used in real-world on-air telegraphy to communicate complex operational data in 3 letters.",
    "presentation": {
      "explanation": "Operating over international radio waves requires a universal shorthand that transcends language barriers: **The Q-Code System**:\n\n1. The Universal Q-Code Matrix:\n   - All Q-codes are 3 letters starting with `Q` (`--.-`).\n   - When followed by a question mark `?` (`..--..`), it asks a question; without `?`, it states a fact.\n\n   - **The Essential Operational 8**:\n     - `QTH` (`--.- - ....`): Location / 'My location is...' / 'What is your location?'\n     - `QSL` (`--.- ... .-..`): Acknowledgment / 'I confirm receipt' / 'Can you acknowledge?'\n     - `QRM` (`--.- .-. --`): Man-made interference / 'I am experiencing interference.'\n     - `QRN` (`--.- .-. -.`): Atmospheric static noise / 'I am troubled by static.'\n     - `QRP` (`--.- .-. .--.`): Low power (under 5 watts) / 'I am transmitting with low power.'\n     - `QRZ` (`--.- .-. --..`): Station identification / 'Who is calling me?'\n     - `QSY` (`--.- ... -.--`): Frequency change / 'Change frequency to...'\n     - `QSO` (`--.- ... ---`): Two-way radio contact / 'A completed conversation.'",
      "examples": [
        {
          "target": "--.- - ....   ..--..   (QTH?) -> Response: --.- - ....   .--. .- .-. .. ...   (QTH PARIS)",
          "reading": "QTH? / QTH PARIS",
          "translation": "Location query and answer."
        },
        {
          "target": "--.- ... .-..   --.- .-. --",
          "reading": "QSL QRM",
          "translation": "Received and confirmed despite interference."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U7-L3】: Focus on visualizing the fundamental pattern and structural dependencies for Master core international Q-Co."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U7-L3】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Apply the core technique of Lesson 33 to solve this challenge:",
          "options": [
            "QSL (I confirm receipt) (33.1) [L33.1] (Focus 33.1)",
            "QRP (Low power) (33.2) [L33.2] (Focus 33.2)",
            "QRZ (Who is calling me?) (33.3) [L33.3] (Focus 33.3)",
            "QTH (My location / What is your location?) (33.4) [L33.4] (Focus 33.4)"
          ],
          "answerIndex": 3,
          "explanation": "QTH = Location."
        },
        {
          "prompt": "What is the difference between QRM and QRN?",
          "options": [
            "QRM is for daytime; QRN is for nighttime",
            "QRM is high volume; QRN is low volume",
            "They are completely identical",
            "QRM is Man-made interference (other stations, motors); QRN is Natural atmospheric noise (lightning, static)"
          ],
          "answerIndex": 3,
          "explanation": "QRM = Man-made; QRN = Natural atmospheric static."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 33:",
          "options": [
            "QRZ DE W1AW (Who is calling me? From W1AW) (33.1) [L33.1] (Task 33.1)",
            "QSL DE W1AW (33.2) [L33.2] (Task 33.2)",
            "QTH DE W1AW (33.3) [L33.3] (Task 33.3)",
            "QSY DE W1AW (33.4) [L33.4] (Task 33.4)"
          ],
          "answerIndex": 0,
          "explanation": "QRZ ( --.- .-. --.. ) DE ( -.. . ) W1AW."
        },
        {
          "prompt": "What does transmitting 'QRP' (.--.- .-. .--.) indicate?",
          "options": [
            "The station is operating with low transmitter power (typically 5 Watts or less)",
            "The station is about to shut down",
            "The operator is a beginner",
            "Emergency SOS signal"
          ],
          "answerIndex": 0,
          "explanation": "QRP denotes low-power operating."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the Q-codes with their meanings: QTH, QSL, QRP, QSY:",
          "options": [
            "QTH: Location | QSL: Acknowledgment/Receipt | QRP: Low power | QSY: Change frequency",
            "All mean end of transmission",
            "All mean emergency",
            "All mean weather report"
          ],
          "answerIndex": 0,
          "explanation": "Q-code definitions matching."
        },
        {
          "prompt": "Decode: `--.- ... -.--   .---- ....-   ...-- --... -----`",
          "options": [
            "QSL 14370",
            "QRN 14370",
            "QTH 14370",
            "QSY 14370 (Change frequency to 14.370 MHz)"
          ],
          "answerIndex": 3,
          "explanation": "QSY ( --.- ... -.-- ) 14370 ( .---- ....- ...-- --... ----- )."
        },
        {
          "prompt": "How do you ask 'Can you acknowledge receipt?' in Morse shorthand?",
          "options": [
            "ACK?",
            "OK?",
            "QSL? (`--.- ... .-..   ..--..`)",
            "YES?"
          ],
          "answerIndex": 2,
          "explanation": "Adding a question mark to QSL turns it into 'Can you acknowledge receipt?'."
        },
        {
          "prompt": "Complete: 'QSO refers to a completed _______.'",
          "options": [
            "license exam",
            "two-way radio contact/conversation",
            "power outage",
            "antenna installation"
          ],
          "answerIndex": 1,
          "explanation": "A QSO is a completed two-way contact between stations."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "morse-u8-l4": {
    "id": "morse-u8-l4",
    "unit": "morse-u8",
    "level": "advanced",
    "objective": "Decode and format a complete standard CW QSO (Two-Way Contact) exchange: CQ calling, RST signal reports (e.g. 599), Operator Name, QTH location, and 73 sign-off.",
    "presentation": {
      "explanation": "A complete telegraphic on-air conversation follows a strict, elegant **Standard QSO Format**:\n\n1. The 5 Steps of a Standard CW QSO:\n   - **Step 1: The General Call (CQ)**:\n     `CQ CQ CQ DE K2VX K2VX K` (Calling any station, from K2VX, over/invitation to transmit).\n   - **Step 2: The Response**:\n     `K2VX DE G3ZP G3ZP K` (K2VX from G3ZP, over).\n   - **Step 3: Signal Report & Identity**:\n     `G3ZP DE K2VX TNX FOR CALL = UR RST 599 5NN = OP IS BOB = QTH NEW YORK NY = HW CPY? G3ZP DE K2VX K`\n   - **Step 4: Return Exchange**:\n     `K2VX DE G3ZP R FB BOB = UR 599 = NAME JOHN = QTH LONDON = TNX FER QSO 73 SK`\n   - **Step 5: Final Sign-off**:\n     `73 EE` (Best regards, dit-dit!).\n\n2. Key Operational Abbreviations:\n   - `RST 599`: Readability 5/5, Signal Strength 9/9, Tone 9/9 (often abbreviated `5NN` where 'N' = 9 to save time!).\n   - `OP`: Operator name.\n   - `HW CPY?`: How copy? (How well did you hear me?).\n   - `73`: Best regards (`--... ...--`).\n   - `EE`: The universal final friendly farewell (two rapid dits `. .`).",
      "examples": [
        {
          "target": "..- .-.   .-. ... -   ..... ----. ----.   (UR RST 599)",
          "reading": "UR RST 599",
          "translation": "Your signal is perfect readability and max strength."
        },
        {
          "target": "--... ...--   .   .   (73 EE)",
          "reading": "73 EE",
          "translation": "Best regards and double-dit farewell."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U7-L4】: Focus on visualizing the fundamental pattern and structural dependencies for Decode and format a complete s."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U7-L4】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Apply the core technique of Lesson 34 to solve this challenge:",
          "options": [
            "The operator is 59 years old (34.1) [L34.1] (Focus 34.1)",
            "Readability 5 (perfect), Strength 9 (extremely strong), Tone 9 (pure crystal musical tone) (34.2) [L34.2] (Focus 34.2)",
            "There are 599 errors in the transmission (34.3) [L34.3] (Focus 34.3)",
            "The frequency is 599 kHz (34.4) [L34.4] (Focus 34.4)"
          ],
          "answerIndex": 1,
          "explanation": "RST = Readability (1-5), Strength (1-9), Tone (1-9)."
        },
        {
          "prompt": "Why do telegraphers often transmit '5NN' instead of '599' for signal reports?",
          "options": [
            "Because in cut-number shorthand, 'N' (`-.`) is much shorter to send than '9' (`----.`), saving significant time",
            "Because 9 is an illegal number",
            "Because keys cannot send 9",
            "Because 'N' stands for 'Nice'"
          ],
          "answerIndex": 0,
          "explanation": "Cut numbers: N (-.) replaces 9 (----.) in high-speed traffic."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 34:",
          "options": [
            "OP IS MARK = 73 (Operator is Mark, best regards) (34.1) [L34.1] (Task 34.1)",
            "ON IS MARK = 73 (34.2) [L34.2] (Task 34.2)",
            "OP IS MIKE = 73 (34.3) [L34.3] (Task 34.3)",
            "OP IS MATT = 73 (34.4) [L34.4] (Task 34.4)"
          ],
          "answerIndex": 0,
          "explanation": "OP IS MARK ( --- .--.   .. ...   -- .- .-. -.- ) = 73 ( --... ...-- )."
        },
        {
          "prompt": "What does the prosign 'K' (`-.-`) at the end of an on-air transmission mean?",
          "options": [
            "Over / Invitation for the other station to transmit",
            "Emergency",
            "Stop transmitting permanently",
            "I am going to sleep"
          ],
          "answerIndex": 0,
          "explanation": "K = Invitation to transmit / Over."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the QSO components: CQ, DE, RST, 73:",
          "options": [
            "All mean radio malfunction",
            "All mean repeat message",
            "All are callsigns",
            "CQ: General call to all | DE: From / This is | RST: Signal quality report | 73: Best regards"
          ],
          "answerIndex": 3,
          "explanation": "QSO components matching."
        },
        {
          "prompt": "Decode: `-.- ..--- ...- -..-   -.. .   --. ...-- --.. .--.   -.-`",
          "options": [
            "W2VX DE G3ZP K",
            "K2VX DE G3ZQ K",
            "K2VX DE G3ZP K (K2VX from G3ZP, over)",
            "K2VX DE M3ZP K"
          ],
          "answerIndex": 2,
          "explanation": "K2VX ( -.- ..--- ...- -..- ) DE G3ZP K."
        },
        {
          "prompt": "What does 'HW CPY?' mean in Morse shorthand?",
          "options": [
            "Have we cleared?",
            "How copy? (How well did you receive my transmission?)",
            "Heavy cloud power?",
            "High wattage call?"
          ],
          "answerIndex": 1,
          "explanation": "HW CPY? = How copy?"
        },
        {
          "prompt": "Complete the QSO: 'TNX FER QSO ES _______ 73 SK.'",
          "options": [
            "HPE CUAGN (Hope to see you again)",
            "GO AWAY",
            "STOP TRANSMITTING",
            "NO MORE"
          ],
          "answerIndex": 0,
          "explanation": "HPE CUAGN (Hope to see you again) is the traditional warm farewell."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "morse-u8-l5": {
    "id": "morse-u8-l5",
    "unit": "morse-u8",
    "level": "advanced",
    "objective": "Demonstrate comprehensive Advanced Morse code mastery by decoding a full simulated real-time CW QSO exchange at 14 WPM, capturing callsigns, RST signal reports, QTH, and operating prosigns with zero translation latency.",
    "presentation": {
      "explanation": "In this Advanced Checkpoint for Unit 8, we synthesize word gestalts, callsign decoding, Q-codes, and full QSO protocols into an authentic **14 WPM Live On-Air QSO Simulation**:\n\n1. The Grand Challenge Transmission:\n\n   - **Station A Call**:\n     `-.-. --.-   -.-. --.-   -.. .   .-- .---- .- .--   .-- .---- .- .--   -.-`\n     *(CQ CQ DE W1AW W1AW K)*\n\n   - **Station B Reply**:\n     `.-- .---- .- .--   -.. .   ...- .   ...--   .- -... -.-.   -.-`\n     *(W1AW DE VE3ABC K)*\n\n   - **Station A Full Exchange**:\n     `...- . ...-- .- -... -.-.   -.. .   .-- .---- .- .--   - -. -..-   ..-. --- .-.   -.-. .- .-.. .-..   -... -   ..- .-.   .-. ... -   ..... ----. ----.   -... -   --- .--.   .. ...   -.. .- ...- .   -... -   --.- - ....   -. . .--   .... .- ...- . -.   -.-. -   -... -   .... .--   -.-. .--. -.-- ..--..   ...- . ...-- .- -... -.-.   -.. .   .-- .---- .- .--   -.-`\n     *(VE3ABC DE W1AW TNX FOR CALL = UR RST 599 = OP IS DAVE = QTH NEW HAVEN CT = HW CPY? VE3ABC DE W1AW K)*\n\n   - **Station B Confirmation & Sign-Off**:\n     `.-- .---- .- .--   -.. .   ...- . ...-- .- -... -.-.   .-.   ..-. -...   -.. .- ...- .   -... -   ..- .-.   ..... ----. ----.   -... -   --- .--.   ... .- --   -... -   --.- - ....   - --- .-. --- -. - ---   -... -   --... ...--   ... -.-`\n     *(W1AW DE VE3ABC R FB DAVE = UR 599 = OP SAM = QTH TORONTO = 73 SK)*\n\n2. Master Synthesis Takeaways:\n   - Zero conscious translation.\n   - Complete fluency with amateur radio operational telegraphy.",
      "examples": [
        {
          "target": "CQ CQ DE W1AW K -> W1AW DE VE3ABC K -> Full QSO Exchange at 14 WPM.",
          "reading": "Full simulated 14 WPM QSO",
          "translation": "Complete on-air exchange."
        },
        {
          "target": "Decoded Payload: Operator Dave in New Haven CT in two-way contact with Operator Sam in Toronto, both reporting 599.",
          "reading": "QSO Information Extraction",
          "translation": "Extracted operational intelligence."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U7-L5】: Focus on visualizing the fundamental pattern and structural dependencies for Demonstrate comprehensive Adva."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U7-L5】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Apply the core technique of Lesson 35 to solve this challenge:",
          "options": [
            "New Haven CT (35.1) [L35.1] (Focus 35.1)",
            "Toronto (35.2) [L35.2] (Focus 35.2)",
            "London (35.3) [L35.3] (Focus 35.3)",
            "Tokyo (35.4) [L35.4] (Focus 35.4)"
          ],
          "answerIndex": 0,
          "explanation": "W1AW transmitted: QTH NEW HAVEN CT."
        },
        {
          "prompt": "What did station VE3ABC send as the operator name?",
          "options": [
            "SAM (`... .- --`)",
            "BOB",
            "DAVE",
            "MARK"
          ],
          "answerIndex": 0,
          "explanation": "VE3ABC transmitted: OP SAM."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 35:",
          "options": [
            "Please repeat (35.1) [L35.1] (Task 35.1)",
            "Silent Key / End of Contact (final transmission in the conversation) (35.2) [L35.2] (Task 35.2)",
            "Change frequency (35.3) [L35.3] (Task 35.3)",
            "Start Transmission (35.4) [L35.4] (Task 35.4)"
          ],
          "answerIndex": 1,
          "explanation": "SK = End of contact / Final transmission."
        },
        {
          "prompt": "What does 'R FB' mean when station B responds to station A?",
          "options": [
            "Return Feedback",
            "Received Fine Business (Roger, excellent copy!)",
            "Run Fast Boys",
            "Radio Frequency Band"
          ],
          "answerIndex": 1,
          "explanation": "R FB = Roger, Fine Business (understood, excellent copy!)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What core operational and cognitive competencies were mastered across Morse Code Unit 8?",
          "options": [
            "Building antennas out of coat hangers only",
            "Using a typewriter only",
            "Acoustic whole-word gestalt copying at 14 WPM, global amateur callsign structure decoding (USA, Canada, UK, Germany, Japan), operational Q-Codes (QTH, QSL, QRM, QRN, QRP, QRZ, QSY), and complete standard QSO exchange protocol handling",
            "Memorizing flashcards on paper only"
          ],
          "answerIndex": 2,
          "explanation": "Unit 8 comprehensive whole-word copy, callsigns, Q-codes, and full QSO exchange mastery."
        },
        {
          "prompt": "Decode the complete sign-off: `--... ...--   -.. .   .-- .---- .- .--   ... -.-`",
          "options": [
            "73 DE K2VX SK",
            "73 DE W1AW SK (Best regards from W1AW, end of contact)",
            "73 DE VE3ABC SK",
            "QSL DE W1AW SK"
          ],
          "answerIndex": 1,
          "explanation": "73 ( --... ...-- ) DE ( -.. . ) W1AW ( .-- .---- .- .-- ) SK ( ... -.- )."
        },
        {
          "prompt": "What is the final frontier awaiting you in Unit 9 and 10 of Morse Code?",
          "options": [
            "High-Speed Head Copy (16-20+ WPM), Extended Prosigns, Net Operations, QSK Full Break-In, and Extreme Error Recovery",
            "Giving up telegraphy",
            "Learning semaphore flags",
            "Talking on a walkie-talkie"
          ],
          "answerIndex": 0,
          "explanation": "Units 9 and 10 focus on 20+ WPM high-speed head copy and advanced net traffic handling."
        },
        {
          "prompt": "Complete: 'A master telegrapher listens not with the ears, but with the _______.'",
          "options": [
            "pencil and notepad",
            "frequency counter",
            "computer software",
            "direct linguistic reflexes of the mind"
          ],
          "answerIndex": 3,
          "explanation": "Master CW copying is a direct linguistic auditory reflex."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "morse-u9-l1": {
    "id": "morse-u9-l1",
    "unit": "morse-u9",
    "level": "master",
    "objective": "Process high-speed Morse code at 16-18 WPM standard character timing, transitioning beyond conscious letter-by-letter decoding into effortless stream-of-thought reception.",
    "presentation": {
      "explanation": "Welcome to Master Morse Code Unit 9: High-Speed Copy & Extended Prosigns! At **16 to 18 WPM**, standard inter-character spacing is so brief that the conscious left-brain verbal processor gives up control, handing reception over to the **auditory sensory cortex**:\n\n1. The 16-18 WPM Auditory Shift:\n   - Characters fly by in milliseconds: an 'E' takes 60ms; an 'H' takes 240ms.\n   - **The Rhythm Stream Principle**: Do not search your memory for letter definitions. Simply relax your auditory focus, let the sounds flow into your short-term acoustic buffer, and read the emerging words off your mental screen.\n\n2. Common High-Speed Trigrams & Affixes:\n   - `-ING`: `.. -. --.` (di-dit dah-dit dah-dah-dit)\n   - `THE-`: `- .... .`\n   - `-TION`: `- .. --- -.`\n   - `-MENT`: `-- . -. -`\n   - `-EST`: . ... -`\n\n3. Overcoming Speed Plateaus:\n   - If you miss a character, **LET IT GO IMMEDIATELY**. If you pause for 0.5 seconds thinking about a missed letter, you will miss the next 4 letters! Context will reconstruct the missing letter automatically.",
      "examples": [
        {
          "target": "-.-. --- -- .. -. --.   .... --- -- .",
          "reading": "COMING HOME",
          "translation": "16 WPM whole-word stream."
        },
        {
          "target": "-- . ... ... .- --. .   .-. . -.-. . .. ...- . -..",
          "reading": "MESSAGE RECEIVED",
          "translation": "High-speed lexical flow."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U8-L1】: Focus on visualizing the fundamental pattern and structural dependencies for Process high-speed Morse code ."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U8-L1】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Apply the core technique of Lesson 36 to solve this challenge:",
          "options": [
            "Stop the sender and ask them to restart the paragraph (36.1) [L36.1] (Focus 36.1)",
            "Pause and think for 5 seconds about what letter it was (36.2) [L36.2] (Focus 36.2)",
            "Turn off the radio (36.3) [L36.3] (Focus 36.3)",
            "Instantly ignore the missed character and maintain your rhythmic listening focus on the incoming stream (#ScienceOfLearning) (36.4) [L36.4] (Focus 36.4)"
          ],
          "answerIndex": 3,
          "explanation": "Letting go of missed characters prevents cognitive backlog and allows context to fill the gap."
        },
        {
          "prompt": "Decode the high-speed word: `- .-. .- .. -. .. -. --.`",
          "options": [
            "TRACKING",
            "TRADING",
            "TRAILING",
            "TRAINING"
          ],
          "answerIndex": 3,
          "explanation": "TRAINING ( - .-. .- .. -. .. -. --. )."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 36:",
          "options": [
            "SPEED IS GOOD (36.1) [L36.1] (Task 36.1)",
            "SPACE IS VAST (36.2) [L36.2] (Task 36.2)",
            "SOUND IS CLEAR (36.3) [L36.3] (Task 36.3)",
            "SPEED IS VITAL (36.4) [L36.4] (Task 36.4)"
          ],
          "answerIndex": 3,
          "explanation": "SPEED ( ... .--. . . -.. ) IS ( .. ... ) VITAL ( ...- .. - .- .-.. )."
        },
        {
          "prompt": "Why does conscious left-brain translation break down above 15 WPM?",
          "options": [
            "Because human ears stop working above 15 WPM",
            "Because radio transmitters overheat",
            "Because 15 is the speed limit of sound",
            "Because conscious phonological parsing requires ~200-300ms per token, which exceeds the inter-character arrival time of high-speed Morse code"
          ],
          "answerIndex": 3,
          "explanation": "Conscious processing latency exceeds signal arrival velocity, requiring direct auditory reflexes."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the word endings to their Morse rhythms: -ING, -ED, -TION, -EST:",
          "options": [
            "All are numbers",
            "-ING: .. -. --. | -ED: . -.. | -TION: - .. --- -. | -EST: . ... -",
            "All are punctuation",
            "All are callsigns"
          ],
          "answerIndex": 1,
          "explanation": "High-speed affix rhythm matching."
        },
        {
          "prompt": "Decode: `.-- . .-.. -.-. --- -- .   - ---   -- .- ... - . .-.   -.-. .--`",
          "options": [
            "WELCOME TO MASTER CW",
            "WAITING FOR MASTER CW",
            "WELCOME TO FAST CW",
            "WELCOME TO RADIO CW"
          ],
          "answerIndex": 0,
          "explanation": "WELCOME TO MASTER CW."
        },
        {
          "prompt": "What is the 'short-term acoustic buffer' in the brain?",
          "options": [
            "A physical microphone sponge",
            "A radio amplifier filter",
            "A notepad",
            "The echoic memory store in the auditory cortex that holds raw sound patterns for 2-4 seconds before converting them into semantic language"
          ],
          "answerIndex": 3,
          "explanation": "Echoic memory temporarily holds audio streams while higher cognition decodes meaning."
        },
        {
          "prompt": "Complete: 'At 18 WPM, you do not translate the code; you _______.'",
          "options": [
            "write down every dot on paper",
            "guess randomly",
            "hear the human voice speaking through the tone",
            "count the pulses"
          ],
          "answerIndex": 2,
          "explanation": "Direct speech perception through telegraphic tone."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "morse-u9-l2": {
    "id": "morse-u9-l2",
    "unit": "morse-u9",
    "level": "master",
    "objective": "Master the complete set of extended procedural signals (Prosigns) and operational punctuation (AA, AS, BK, CL, DN, KN, SK, HH) sent as fused single characters without spacing.",
    "presentation": {
      "explanation": "Procedural signals (**Prosigns**) are the traffic lights of international telegraphy. Crucially, prosigns are sent as **two letters run together into a single, seamless, unspaced character**:\n\n1. The Complete Master Prosign Lexicon:\n   - **`[AS]` (`.-...`) [A + S fused]**: *Wait / Stand by for a moment*.\n   - **`[BK]` (`-...-.-`) [B + K fused]**: *Break / Immediate break-in request*.\n   - **`[CL]` (`-.-..-..`) [C + L fused]**: *Closing station / Going off the air*.\n   - **`[KN]` (`-.--.`) [K + N fused]**: *Go ahead, named station ONLY (all others keep out!)*.\n   - **`[SK]` (`...-.-`) [S + K fused]**: *Silent Key / Final end of all transmission*.\n   - **`[AA]` (`.-.-`) [A + A fused]**: *New line / New paragraph*.\n   - **`[DN]` (`-..-.`) [D + N fused / Fraction Bar]**: *Slash `/` (as in W1AW/3 or 5/9)*.\n   - **`[HH]` (`........`) [8 dits]**: *Error / Correction follows*.\n\n2. The Power of `[KN]` vs. `K`:\n   - When a rare DX station finishes transmitting, sending `K` (`-.-`) invites ANY station in the world to call.\n   - Sending `[KN]` (`-.--.`) warns the entire world: *'I am ONLY listening to the specific station I just named; do not transmit if your callsign is different!'*",
      "examples": [
        {
          "target": ".-...   (AS - Wait/Stand by)",
          "reading": "[AS] Wait",
          "translation": "Fused prosign for standby."
        },
        {
          "target": "-.--.   (KN - Named station only)",
          "reading": "[KN] Specific station only",
          "translation": "Directed invitation to transmit."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U8-L2】: Focus on visualizing the fundamental pattern and structural dependencies for Master the complete set of ext."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U8-L2】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Apply the core technique of Lesson 37 to solve this challenge:",
          "options": [
            "Wait / Stand by (please wait 1-2 minutes) (37.1) [L37.1] (Focus 37.1)",
            "End of contact (37.2) [L37.2] (Focus 37.2)",
            "All stations call now (37.3) [L37.3] (Focus 37.3)",
            "Emergency SOS (37.4) [L37.4] (Focus 37.4)"
          ],
          "answerIndex": 0,
          "explanation": "[AS] (A and S fused: .-...) = Wait / Stand by."
        },
        {
          "prompt": "How does the prosign `[KN]` (`-.--.`) differ from the standard prosign `K` (`-.-`)?",
          "options": [
            "`[KN]` strictly invites ONLY the specific named station to reply, forbidding all other listening stations from transmitting",
            "`[KN]` means cancel the contact",
            "There is no difference",
            "`[KN]` means low battery"
          ],
          "answerIndex": 0,
          "explanation": "[KN] restricts transmission rights strictly to the named station."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 37:",
          "options": [
            "W1AW DE VE3ABC K (37.1) [L37.1] (Task 37.1)",
            "W1AW DE VE3ABC/P [KN] (W1AW from portable station VE3ABC, only W1AW reply) (37.2) [L37.2] (Task 37.2)",
            "W1AW DE VE3ABC/M SK (37.3) [L37.3] (Task 37.3)",
            "W1AW DE VE3ABC AS (37.4) [L37.4] (Task 37.4)"
          ],
          "answerIndex": 1,
          "explanation": "W1AW DE VE3ABC/P [KN]."
        },
        {
          "prompt": "What does transmitting 8 rapid dits (`........`) indicate?",
          "options": [
            "Station is laughing",
            "Max volume test",
            "Error / Disregard previous word, correction follows",
            "Clock synchronization"
          ],
          "answerIndex": 2,
          "explanation": "8 dits ([HH]) is the universal telegraphic Error / Correction prosign."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the fused prosigns with their meanings: [AS], [KN], [SK], [CL]:",
          "options": [
            "[AS]: Stand by / Wait | [KN]: Specific station only | [SK]: End of contact | [CL]: Closing station / Off air",
            "All mean weather",
            "All are numbers",
            "All mean emergency"
          ],
          "answerIndex": 0,
          "explanation": "Fused prosign definitions matching."
        },
        {
          "prompt": "Decode the fraction slash prosign: `-..-.`",
          "options": [
            "=",
            "?",
            ",",
            "/ (Fraction bar / Slash as in /P or /M)"
          ],
          "answerIndex": 3,
          "explanation": "-..-. is the official slash / fraction bar [DN]."
        },
        {
          "prompt": "Why are prosigns transmitted as fused characters rather than separate letters with normal spacing?",
          "options": [
            "Because telegraph keys jam easily",
            "It was an accidental habit",
            "To give them distinct, unmistakable melodic rhythmic signatures that cannot be confused with regular vocabulary words (#ScienceOfLearning)",
            "To save electricity"
          ],
          "answerIndex": 2,
          "explanation": "Fused rhythm signatures prevent confusion with normal lexical words."
        },
        {
          "prompt": "Complete: 'When a station signs with [CL], it means the operator is _______.'",
          "options": [
            "changing antennas",
            "shutting down the station and leaving the air",
            "listening to music",
            "calling for help"
          ],
          "answerIndex": 1,
          "explanation": "[CL] = Closing station / Going off the air."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "morse-u9-l3": {
    "id": "morse-u9-l3",
    "unit": "morse-u9",
    "level": "master",
    "objective": "Execute transcription-free 20+ WPM high-speed head copy on continuous conversational and news text, comprehending complex semantic ideas directly in real time.",
    "presentation": {
      "explanation": "Welcome to **20 WPM Head Copy** — the gold standard of professional telegraphy! At 20 WPM, Morse code ceases to be a technical code and becomes **a pure spoken language**:\n\n1. The 20 WPM Cognitive Operating Mode:\n   - 20 WPM is ~100 characters per minute (~20 English words per minute).\n   - Writing with a pen at 20 WPM is physically impossible without shorthand.\n   - **The Head-Copy Paradigm**: Close your eyes. Listen to the dits and dahs as if someone is speaking English into your headphones with an accent. The meaning forms immediately in your mental theater.\n\n2. Real-Time Conversational Flow:\n   - *Transmission*: `TNX FOR NICE CHAT OM = WX HR IS SUNNY AND 22C = RIG IS 100W TO A DIPOLE = HOW COPY?`\n   - You do not write 'T-N-X'. Your brain immediately registers: *'Thanks for the chat, friend; weather is sunny 22°C; running 100W to dipole antenna.'*",
      "examples": [
        {
          "target": ".-- -..-   .... .-.   .. ...   ...- . .-. -.--   -.-. --- .-.. -..",
          "reading": "WX HR IS VERY COLD",
          "translation": "Decoded directly as: 'Weather here is very cold.'"
        },
        {
          "target": "... . .   -.-- --- ..-   --- -.   - .... .   .- .. .-.",
          "reading": "SEE YOU ON THE AIR",
          "translation": "Decoded directly as: 'See you on the air.'"
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U8-L3】: Focus on visualizing the fundamental pattern and structural dependencies for Execute transcription-free 20+."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U8-L3】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Apply the core technique of Lesson 38 to solve this challenge:",
          "options": [
            "RIG IS 10W (38.1) [L38.1] (Focus 38.1)",
            "RADIO IS ON (38.2) [L38.2] (Focus 38.2)",
            "RUN IS 100M (38.3) [L38.3] (Focus 38.3)",
            "RIG IS 100W (Transceiver power is 100 Watts) (38.4) [L38.4] (Focus 38.4)"
          ],
          "answerIndex": 3,
          "explanation": "RIG ( .-. .. --. ) IS ( .. ... ) 100W ( .---- ----- ----- .-- )."
        },
        {
          "prompt": "What is the primary psychological barrier to achieving 20 WPM head copy?",
          "options": [
            "Ear fatigue",
            "Poor tone pitch",
            "Lack of volume",
            "The anxiety of putting down the pen and trusting subconscious auditory memory to retain meaning without a written safety net"
          ],
          "answerIndex": 3,
          "explanation": "Overcoming the psychological dependency on written transcription unlocks true head-copy fluency."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 38:",
          "options": [
            "VERY NICE SIGNAL OM (Very nice signal, old man/friend) (38.1) [L38.1] (Task 38.1)",
            "VERY LOUD NOISE OM (38.2) [L38.2] (Task 38.2)",
            "VOICE NOT CLEAR OM (38.3) [L38.3] (Task 38.3)",
            "VALID NEW SIGNAL OM (38.4) [L38.4] (Task 38.4)"
          ],
          "answerIndex": 0,
          "explanation": "VERY NICE SIGNAL OM."
        },
        {
          "prompt": "What does 'OM' mean in global amateur telegraphy?",
          "options": [
            "Old Man (the traditional, affectionate universal term for any fellow male radio operator, regardless of age)",
            "Official Member",
            "Over Maximum",
            "Operation Manager"
          ],
          "answerIndex": 0,
          "explanation": "OM = Old Man (traditional telegraphic term of camaraderie)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Decode the full conversational sentence at 20 WPM: `.... --- .--. .   - ---   ... . .   -.-- --- ..-   .- --. .- .. -.   ... --- --- -.`",
          "options": [
            "HAVE TO SAY GOODBYE SOON",
            "HEAR YOU VERY WELL TODAY",
            "HAPPY TO HEAR YOU AGAIN TODAY",
            "HOPE TO SEE YOU AGAIN SOON"
          ],
          "answerIndex": 3,
          "explanation": "HOPE TO SEE YOU AGAIN SOON."
        },
        {
          "prompt": "What is 'YL' in amateur radio shorthand?",
          "options": [
            "Your Location",
            "Yesterday Late",
            "Young Lady (referring to any female radio operator, regardless of age)",
            "Yellow Light"
          ],
          "answerIndex": 2,
          "explanation": "YL = Young Lady (female telegrapher)."
        },
        {
          "prompt": "Why is head-copying at 20 WPM less mentally exhausting than writing down code at 10 WPM?",
          "options": [
            "Because listening requires no brain activity",
            "Because head-copying bypasses manual motor transcription, utilizing natural language comprehension networks in Broca's and Wernicke's areas (#ScienceOfLearning)",
            "Because 20 WPM is shorter in duration",
            "Because higher tones take less energy"
          ],
          "answerIndex": 1,
          "explanation": "Natural linguistic processing eliminates motor transcription fatigue."
        },
        {
          "prompt": "Complete: 'At 20 WPM, Morse code becomes not a skill you perform, but a language you _______.'",
          "options": [
            "natively speak and understand",
            "struggle to hear",
            "calculate mathematically",
            "read with a dictionary"
          ],
          "answerIndex": 0,
          "explanation": "20 WPM is native fluency in telegraphy."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "morse-u9-l4": {
    "id": "morse-u9-l4",
    "unit": "morse-u9",
    "level": "master",
    "objective": "Master advanced operational Q-Codes (QSK, QSB, QRO, QTC, QRX) and universal tactical abbreviations (WX, HR, PSE, FER, CPY, TNX, ES, CUAGN).",
    "presentation": {
      "explanation": "Advanced telegraphic traffic relies on **Specialized Operational Q-Codes and Tactical Abbreviations**:\n\n1. The Advanced Q-Code Suite:\n   - **`QSK` (`--.- ... -.-`)**: *Full Break-In Operating* ('I can hear you between my dots; break in anytime!').\n   - **`QSB` (`--.- ... -...`)**: *Signal Fading* ('Your signal is suffering from periodic ionospheric fading.').\n   - **`QRO` (`--.- .-. ---`)**: *Increase Power* ('Increase transmitter wattage.').\n   - **`QRX` (`--.- .-. -..-`)**: *Stand By* ('Stand by / I will call you again at [time].').\n   - **`QTC` (`--.- - -.-.`)**: *Telegram Traffic Count* ('I have [number] formal messages for you.').\n\n2. The Core Tactical Shorthand Lexicon:\n   - `WX`: Weather (`.-- -..-`)\n   - `HR`: Here (`.... .-.`)\n   - `PSE`: Please (.--. ... .)\n   - `FER`: For (..-. . .-.)\n   - `TNX`: Thanks (- -. -..-)\n   - `ES`: And (from Latin 'et' - . ...)\n   - `CUAGN`: See you again (-.-. ..- .- --. -.)\n   - `73`: Best regards (--... ...--)\n   - `88`: Love and kisses (friendly/romantic - ---.. ---..).",
      "examples": [
        {
          "target": "--.- ... -.-   .. ...   --- -.   (QSK IS ON)",
          "reading": "QSK IS ON",
          "translation": "Full break-in mode is active."
        },
        {
          "target": "--.- ... -...   .... .-.   . ...   .-- -..-   .. ...   .- .. -.",
          "reading": "QSB HR ES WX IS RAIN",
          "translation": "Fading signals here and weather is rain."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U8-L4】: Focus on visualizing the fundamental pattern and structural dependencies for Master advanced operational Q-."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U8-L4】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Apply the core technique of Lesson 39 to solve this challenge:",
          "options": [
            "Increase your speed to 30 WPM (39.1) [L39.1] (Focus 39.1)",
            "Your signal is experiencing ionospheric fading (fading in and out of the noise) (39.2) [L39.2] (Focus 39.2)",
            "Change to frequency B (39.3) [L39.3] (Focus 39.3)",
            "Your transmitter is on fire (39.4) [L39.4] (Focus 39.4)"
          ],
          "answerIndex": 1,
          "explanation": "QSB = Fading signals."
        },
        {
          "prompt": "What does the shorthand 'ES' (`. ...`) mean in Morse code?",
          "options": [
            "AND ('&' / 'and')",
            "EAST",
            "ESCAPE",
            "ESPECIALLY"
          ],
          "answerIndex": 0,
          "explanation": "ES (. ...) is the universal telegraphic shorthand for 'AND'."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 39:",
          "options": [
            "PSE QRO VERY QSB (Please increase power, severe signal fading here) (39.1) [L39.1] (Task 39.1)",
            "PASS QRO VERY QSB (39.2) [L39.2] (Task 39.2)",
            "PLEASE QRP VERY QRM (39.3) [L39.3] (Task 39.3)",
            "PSE QSY VERY QTH (39.4) [L39.4] (Task 39.4)"
          ],
          "answerIndex": 0,
          "explanation": "PSE (Please) QRO (Increase power) VERY QSB (Signal fading)."
        },
        {
          "prompt": "What does '88' (`---.. ---..`) mean when sent between friendly operators?",
          "options": [
            "Love and kisses",
            "Power 88 Watts",
            "Radio channel 88",
            "88 minutes remaining"
          ],
          "answerIndex": 0,
          "explanation": "88 is traditional telegraphic shorthand for 'love and kisses'."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the tactical terms: WX, QSK, QRO, CUAGN:",
          "options": [
            "All are callsigns",
            "All mean emergency",
            "WX: Weather | QSK: Full break-in | QRO: Increase power | CUAGN: See you again",
            "All mean stop transmitting"
          ],
          "answerIndex": 2,
          "explanation": "Tactical shorthand matching."
        },
        {
          "prompt": "Decode the complete greeting: `-. .. -.-. .   - ---   -- . . -   -.-- --- ..-   --- --`",
          "options": [
            "NICE TO HEAR YOU OM",
            "NICE TO MEET YOU OM",
            "NEED TO MEET YOU OM",
            "NEW TO MEET YOU OM"
          ],
          "answerIndex": 1,
          "explanation": "NICE TO MEET YOU OM."
        },
        {
          "prompt": "Why is operational shorthand essential on high-frequency (HF) amateur bands?",
          "options": [
            "Because ionospheric propagation windows can open and close in minutes; shorthand allows maximum critical data transfer before the band fades (#ScienceOfLearning)",
            "Because long words are illegal",
            "Because radio operators cannot spell",
            "Because it reduces battery usage"
          ],
          "answerIndex": 0,
          "explanation": "Shorthand maximizes information throughput during brief atmospheric propagation openings."
        },
        {
          "prompt": "Complete: 'When signals fade, send PSE QRO; when finished, send _______.'",
          "options": [
            "QRM QRM QRM",
            "STOP STOP STOP",
            "NO MORE RADIO",
            "73 ES CUAGN"
          ],
          "answerIndex": 3,
          "explanation": "73 ES CUAGN (Best regards and see you again)."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "morse-u9-l5": {
    "id": "morse-u9-l5",
    "unit": "morse-u9",
    "level": "master",
    "objective": "Demonstrate Master 20 WPM high-speed proficiency by decoding a full simulated broadcast (weather bulletin, marine navigation warning, and DX expedition schedule) with zero transcription latency.",
    "presentation": {
      "explanation": "In this Master Checkpoint for Unit 9, you decode a **20 WPM Live Marine Bulletin & DX Dispatch** in real time:\n\n1. The Grand Challenge Transmission (20 WPM):\n\n   - **BULLETIN HEADER**:\n     `-.-. --.-   -.-. --.-   -.. .   .-- .---- .- .--   -.-. .--   -... ..- .-.. .-.. . - .. -.   -. .-.   .---- ..---   -... -`\n     *(CQ CQ DE W1AW CW BULLETIN NR 12 =)*\n\n   - **WEATHER & NAVIGATION PAYLOAD**:\n     `.-- -..-   ..-. --- .-. . -.-. .- ... -   -... -   ... - --- .-. --   .-- .- .-. -. .. -. --.   ..-. --- .-.   -. --- .-. - ....   .- - .-.. .- -. - .. -.-.   -... -   .-- .. -. -.. ...   ....- .....   -.- -. --- - ...   ... . .- ...   .---- ..---   ..-. . . -   -... -`\n     *(WX FORECAST = STORM WARNING FOR NORTH ATLANTIC = WINDS 45 KNOTS SEAS 12 FEET =)*\n\n   - **DX EXPEDITION DISPATCH**:\n     `-.. -..-   -. . .-- ...   -... -   ...- -.- ----. -..-   --- .--. . .-. .- - .. -. --.   .---- ....-   ...-- --... -----   -.- .... --..   -.-. .--   ...- . .-. -.--   .... . .- ...- -.--   --.- .-. --   -... -   --.- ... .-..   ...- .. .-   -... ..- .-. . .- ..-   -... -`\n     *(DX NEWS = VK9X OPERATING 14370 KHZ CW VERY HEAVY QRM = QSL VIA BUREAU =)*\n\n   - **FORMAL SIGN-OFF**:\n     `--... ...--   -.. .   .-- .---- .- .--   ... -.-`\n     *(73 DE W1AW SK)*\n\n2. Master Synthesis Verification:\n   - 100% real-time comprehension without hesitation.",
      "examples": [
        {
          "target": "20 WPM Complete Broadcast Stream decoded directly into working memory.",
          "reading": "Marine Bulletin at 20 WPM",
          "translation": "Master-level reception."
        },
        {
          "target": "Payload: Storm warning North Atlantic (45 kt winds, 12 ft seas) + VK9X DXpedition on 14370 kHz.",
          "reading": "Extracted Intelligence",
          "translation": "Decoded bulletin data."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U8-L5】: Focus on visualizing the fundamental pattern and structural dependencies for Demonstrate Master 20 WPM high."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U8-L5】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Apply the core technique of Lesson 40 to solve this challenge:",
          "options": [
            "45 Knots (Seas 12 feet) (40.1) [L40.1] (Focus 40.1)",
            "20 Knots (40.2) [L40.2] (Focus 40.2)",
            "60 Knots (40.3) [L40.3] (Focus 40.3)",
            "10 Knots (40.4) [L40.4] (Focus 40.4)"
          ],
          "answerIndex": 0,
          "explanation": "Bulletin stated: WINDS 45 KNOTS ( ....- ..... )."
        },
        {
          "prompt": "On what frequency was the DX expedition station VK9X operating?",
          "options": [
            "14370 kHz (14.370 MHz)",
            "7050 kHz",
            "21200 kHz",
            "3500 kHz"
          ],
          "answerIndex": 0,
          "explanation": "Bulletin stated: 14370 KHZ ( .---- ....- ...-- --... ----- )."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 40:",
          "options": [
            "ONLINE ONLY (40.1) [L40.1] (Task 40.1)",
            "VIA BUREAU (`...- .. .-   -... ..- .-. . .- ..-`) (40.2) [L40.2] (Task 40.2)",
            "NO QSL (40.3) [L40.3] (Task 40.3)",
            "DIRECT (40.4) [L40.4] (Task 40.4)"
          ],
          "answerIndex": 1,
          "explanation": "QSL VIA BUREAU."
        },
        {
          "prompt": "What does 'QSL VIA BUREAU' mean in amateur radio?",
          "options": [
            "Delivered by hand",
            "Confirmations are sent through national amateur radio postal exchange hubs to save international mailing costs",
            "Sent via email",
            "Sent via government post office only"
          ],
          "answerIndex": 1,
          "explanation": "The QSL Bureau is the global collective postal exchange for radio confirmation cards."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What core competencies were mastered across Morse Code Unit 9?",
          "options": [
            "Building radio chassis only",
            "16-20+ WPM high-speed head copying, extended fused prosigns ([AS], [KN], [SK], [CL], [DN], [HH]), transcription-free conversational flow, advanced operational Q-Codes (QSK, QSB, QRO, QRX, QTC), and live commercial/marine broadcast reception",
            "Learning flag signals only",
            "Using a telegraph key at 5 WPM only"
          ],
          "answerIndex": 1,
          "explanation": "Unit 9 comprehensive 20 WPM high-speed copy and extended prosign mastery."
        },
        {
          "prompt": "What is the final frontier awaiting you in Unit 10 of Morse Code?",
          "options": [
            "Net Simulation, QSK Full Break-In, Extreme QRM/QRN Noise Filtering, and Master Error Recovery",
            "Learning a new language",
            "Switching to voice radio",
            "Giving up telegraphy"
          ],
          "answerIndex": 0,
          "explanation": "Unit 10 focuses on emergency traffic net operations, QSK break-in, and noise filtering."
        },
        {
          "prompt": "Decode: `... - --- .-. --   .. ...   --- ...- . .-.`",
          "options": [
            "STATION IS ON",
            "SIGNAL IS OPEN",
            "START IS OVER",
            "STORM IS OVER"
          ],
          "answerIndex": 3,
          "explanation": "STORM IS OVER."
        },
        {
          "prompt": "Complete: 'A 20 WPM operator does not read the code; the code _______.'",
          "options": [
            "is written in ink",
            "requires a calculator",
            "speaks directly into their consciousness",
            "is translated letter by letter"
          ],
          "answerIndex": 2,
          "explanation": "20 WPM code speaks directly into auditory consciousness."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "morse-u10-l1": {
    "id": "morse-u10-l1",
    "unit": "morse-u10",
    "level": "master",
    "objective": "Master formal Directed Net operations, Net Control Station (NCS) procedures, Q-Signals for net check-ins (QNI, QNA, QNX), and structured traffic routing.",
    "presentation": {
      "explanation": "Welcome to Master Morse Code Unit 10: Net Simulation, QSK & Error Recovery! In times of natural disaster, hurricane, or infrastructure collapse, telegraphers organize into **Formal Directed Emergency Nets**:\n\n1. The Net Hierarchy & Rules:\n   - **Net Control Station (NCS)**: The supreme commander of the frequency. No station may transmit without permission from NCS.\n   - **QNI (`--.- -. ..`)**: *Net Check-In* ('Check into the net with formal traffic / without traffic').\n   - **QNA (`--.- -. .-`)**: *Answer in pre-arranged net order*.\n   - **QNZ (`--.- -. --..`)**: *Zero beat your frequency to match NCS*.\n   - **QNX (`--.- -. -..-`)**: *Request permission to leave the net* ('You are excused from the net.').\n\n2. Directed Net Check-In Protocol:\n   - NCS: `CQ NTS DE W1AW QNI K` (Calling National Traffic System Net, check-ins invited).\n   - Check-in Station: `W1AW DE K2VX QNI 1 NYC` (K2VX checking in with 1 formal message for New York City).\n   - NCS: `K2VX DE W1AW R QTC 1 NYC PSE AS` (Understood, 1 for NYC, stand by).",
      "examples": [
        {
          "target": "--.- -. ..   (QNI - Check into net)",
          "reading": "QNI Check-in",
          "translation": "Formal net check-in signal."
        },
        {
          "target": "--.- -. -..-   (QNX - Excused from net)",
          "reading": "QNX Net excuse",
          "translation": "Permission to depart frequency."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U9-L1】: Focus on visualizing the fundamental pattern and structural dependencies for Master formal Directed Net ope."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U9-L1】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Apply the core technique of Lesson 41 to solve this challenge:",
          "options": [
            "Emergency evacuation immediately (41.1) [L41.1] (Focus 41.1)",
            "Close the station (41.2) [L41.2] (Focus 41.2)",
            "Change to frequency 2 (41.3) [L41.3] (Focus 41.3)",
            "Check into the formal traffic net (41.4) [L41.4] (Focus 41.4)"
          ],
          "answerIndex": 3,
          "explanation": "QNI = Check into the net."
        },
        {
          "prompt": "Who has exclusive authority to direct traffic and assign transmission rights during a directed emergency net?",
          "options": [
            "The station with the most power",
            "Any station that wants to talk",
            "The oldest operator",
            "The Net Control Station (NCS)"
          ],
          "answerIndex": 3,
          "explanation": "The Net Control Station (NCS) manages all net transmissions."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 41:",
          "options": [
            "SOS (41.1) [L41.1] (Task 41.1)",
            "QRP (41.2) [L41.2] (Task 41.2)",
            "73 (41.3) [L41.3] (Task 41.3)",
            "QNX (`--.- -. -..-`) (41.4) [L41.4] (Task 41.4)"
          ],
          "answerIndex": 3,
          "explanation": "QNX is the formal signal to request dismissal from a directed net."
        },
        {
          "prompt": "What does 'Zero Beating' (QNZ) mean in CW net operations?",
          "options": [
            "Turning off the beat",
            "Playing with 0 power",
            "Transmitting silence",
            "Tuning your transmitter's exact frequency so your audio sidetone matches the exact pitch of the Net Control Station, eliminating frequency drift clutter on the net"
          ],
          "answerIndex": 3,
          "explanation": "Zero beating aligns transmitter frequency precisely with Net Control."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the net Q-signals: QNI, QNX, QNZ, QNA:",
          "options": [
            "QNI: Check into net | QNX: Excused from net | QNZ: Zero-beat frequency | QNA: Answer in net order",
            "All mean emergency SOS",
            "All are callsigns",
            "All mean weather"
          ],
          "answerIndex": 0,
          "explanation": "Net procedural Q-signal matching."
        },
        {
          "prompt": "Decode: `-.- ..--- ...- -..-   -.. .   .-- .---- .- .--   --.- -. -..-   --... ...--`",
          "options": [
            "K2VX DE W1AW QNI 73",
            "W2VX DE W1AW QNX 73",
            "K2VX DE W1AW QNZ 73",
            "K2VX DE W1AW QNX 73 (K2VX from W1AW, you are excused from the net, best regards)"
          ],
          "answerIndex": 3,
          "explanation": "K2VX DE W1AW QNX 73."
        },
        {
          "prompt": "Why are CW telegraphy nets prioritized over voice (SSB) nets during extreme emergency disaster conditions?",
          "options": [
            "Because CW is newer than voice",
            "Because voice radio is illegal during emergencies",
            "Because CW signals have 1/20th the bandwidth of voice signals, cutting through severe static and operating on minimal battery power when voice is completely unreadable (#ScienceOfLearning)",
            "Because CW requires internet"
          ],
          "answerIndex": 2,
          "explanation": "Narrow bandwidth and high power-density make CW superior in extreme emergency conditions."
        },
        {
          "prompt": "Complete: 'A disciplined net operator listens twice as much as they _______.'",
          "options": [
            "sleep",
            "transmit",
            "tune",
            "write"
          ],
          "answerIndex": 1,
          "explanation": "Discipline and radio silence ensure emergency channel readiness."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "morse-u10-l2": {
    "id": "morse-u10-l2",
    "unit": "morse-u10",
    "level": "master",
    "objective": "Master QSK (Full Break-In) operation and dual-paddle iambic keyer micro-mechanics, receiving incoming signals in the milliseconds between your own transmitted dits and dahs.",
    "presentation": {
      "explanation": "The technological summit of modern high-speed telegraphy is **QSK (Full Break-In Operating) & Iambic Squeeze Keying**:\n\n1. The Magic of QSK (Full Break-In):\n   - In semi-break-in (VOX), the transmitter relays stay closed during your transmission, deafening your receiver until you stop sending.\n   - In **QSK Full Break-In**, high-speed PIN-diode electronic solid-state switches return the transceiver to Receive mode in the **milliseconds of silence BETWEEN your individual dits and dahs**!\n   - *The Result*: If an emergency station sends a 'dit' while you are transmitting a long word, you HEAR their dit in the space between your letters! You can stop transmitting instantly in mid-word.\n\n2. Dual-Paddle Iambic Squeeze Mechanics (Mode B):\n   - An electronic iambic keyer has two paddles: **Left Paddle = Dits** (`.`); **Right Paddle = Dahs** (`-`).\n   - **The Squeeze Technique**:\n     - Squeezing BOTH paddles together automatically generates alternating characters (`.-.-.-` or `-.-.-.`).\n     - To send 'C' (`-.-.`): Squeeze both paddles starting with the right (Dah) paddle $\\rightarrow$ release after 2 cycles. You send 4 elements with a single finger squeeze!\n     - To send 'L' (`.-..`): Tap Left (dit), hold Left while tapping Right (dah) $\\rightarrow$ automatic `.-..`.",
      "examples": [
        {
          "target": "Iambic Squeeze for 'C' (-.-.): Squeeze Right + Left together -> Keyer sends Dah-Dit-Dah-Dit in 1 fluid motion.",
          "reading": "Iambic squeeze keying for 'C'",
          "translation": "Dual-paddle ergonomics."
        },
        {
          "target": "QSK Break-In: Transmitting 'WEATHER FORECAST' -> Hearing a break-in 'BK' between 'WEATHER' and 'FORECAST' -> Stopping transmission instantly.",
          "reading": "Full break-in interruption",
          "translation": "Real-time bidirectional duplex telegraphy."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U9-L2】: Focus on visualizing the fundamental pattern and structural dependencies for Master QSK (Full Break-In) ope."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U9-L2】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Apply the core technique of Lesson 42 to solve this challenge:",
          "options": [
            "The ability to hear incoming signals and interruptions in the silence between your own individual transmitted dits and dahs (42.1) [L42.1] (Focus 42.1)",
            "The ability to transmit without electricity (42.2) [L42.2] (Focus 42.2)",
            "The ability to transmit on 10 frequencies at once (42.3) [L42.3] (Focus 42.3)",
            "The ability to make the signal louder (42.4) [L42.4] (Focus 42.4)"
          ],
          "answerIndex": 0,
          "explanation": "QSK enables real-time reception between transmitted elements."
        },
        {
          "prompt": "In dual-paddle iambic squeeze keying (Mode B), what happens when an operator squeezes BOTH paddles simultaneously?",
          "options": [
            "The keyer automatically generates alternating dits and dahs (.-.-.- or -.-.-.) until the paddles are released",
            "The transmitter shuts off",
            "The keyer deletes the message",
            "A constant solid tone is produced"
          ],
          "answerIndex": 0,
          "explanation": "Simultaneous squeeze produces automatic alternating dit/dah sequences."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 42:",
          "options": [
            "Iambic paddles are made of soft foam (42.1) [L42.1] (Task 42.1)",
            "Straight keys require continuous up-and-down pumping of the entire forearm; iambic paddles require only sub-millimeter finger squeezes with the electronic keyer managing timing (#ScienceOfLearning) (42.2) [L42.2] (Task 42.2)",
            "Straight keys are made of glass (42.3) [L42.3] (Task 42.3)",
            "It does not prevent strain (42.4) [L42.4] (Task 42.4)"
          ],
          "answerIndex": 1,
          "explanation": "Sub-millimeter lateral finger squeezes eliminate forearm pumping fatigue."
        },
        {
          "prompt": "To send the letter 'F' (`..-.`) on an iambic keyer, what is the optimal paddle gesture?",
          "options": [
            "Tap Right paddle 4 times",
            "Push both paddles forward",
            "Squeeze Left paddle (2 dits), tap Right paddle (dah), release to Left (dit)",
            "Hold down Left paddle for 5 seconds"
          ],
          "answerIndex": 2,
          "explanation": "Dit-dit-dah-dit is generated via an integrated squeeze-and-release gesture."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the keying terms: Straight Key, Bug (Semi-Automatic), Iambic Dual Paddle, QSK:",
          "options": [
            "All are software programs",
            "All are guitar accessories",
            "All are microphone types",
            "Straight Key: Pure manual pumping | Bug: Mechanical vibrator dits | Iambic Paddle: Electronic squeeze dual-lever | QSK: Full break-in duplex"
          ],
          "answerIndex": 3,
          "explanation": "Keying technology classification matching."
        },
        {
          "prompt": "What is the standard Dit-to-Dah ratio calibrated into all electronic iambic keyers?",
          "options": [
            "1 : 10",
            "2 : 5",
            "1 : 3 (A Dah is exactly 3 times the duration of a Dit, with 1 Dit space between elements)",
            "1 : 1"
          ],
          "answerIndex": 2,
          "explanation": "Standard Paris timing: 1 Dit = 1 unit; 1 Dah = 3 units; element space = 1 unit."
        },
        {
          "prompt": "Why is QSK break-in operation considered the supreme safety protocol for emergency traffic nets?",
          "options": [
            "Because it requires no license",
            "Because an emergency distress station with urgent priority traffic can break in instantly mid-sentence without waiting for a 3-minute transmission to finish",
            "Because it prevents lightning strikes",
            "Because it makes the radio cooler"
          ],
          "answerIndex": 1,
          "explanation": "Instantaneous mid-transmission break-in for urgent priority traffic."
        },
        {
          "prompt": "Complete: 'Master keying is not force; it is _______.'",
          "options": [
            "relaxed, effortless rhythmic precision",
            "loud banging",
            "fast guessing",
            "hard physical labor"
          ],
          "answerIndex": 0,
          "explanation": "Relaxed micro-gestures and effortless rhythmic precision."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "morse-u10-l3": {
    "id": "morse-u10-l3",
    "unit": "morse-u10",
    "level": "master",
    "objective": "Filter extreme QRM (man-made adjacent channel interference) and QRN (atmospheric thunderstorm static crashes), isolating faint 500 Hz carrier tones buried deep in background noise.",
    "presentation": {
      "explanation": "Master telegraphers can copy faint signals that are **inaudible to computer algorithms** buried beneath howling static and thunderstorms: **The Human Auditory Comb Filter**:\n\n1. The Cocktail Party Effect & Neural Bandpass Filtering:\n   - The human auditory cortex possesses an extraordinary organic digital signal processor (DSP).\n   - When listening to a chaotic audio band filled with 10 competing stations, static crashes, and white noise:\n     - **Step 1 (Frequency Lock)**: Lock your attention onto the single specific pitch of your target station (e.g. `550 Hz`).\n     - **Step 2 (Phase Gating)**: Treat all other frequencies (400 Hz, 700 Hz, static roar) as background wallpaper.\n     - **Step 3 (Neural Comb Filter)**: Your auditory cortex will naturally boost the perceived signal-to-noise ratio (SNR) by up to **12 dB**, pulling the target rhythm out of the mud!\n\n2. Narrow DSP IF Filters & Audio Peaking:\n   - Modern transceivers use 250 Hz or 100 Hz crystal/DSP roofing filters to slice away adjacent frequencies.\n   - **The Operator Rule**: Never make the filter narrower than 200 Hz unless necessary, because ultra-narrow filters cause audio 'ringing'. Let your organic brain do the final filtering!",
      "examples": [
        {
          "target": "Weak Signal Copy: A 1-watt QRP station across the Pacific (RST 339) copied through heavy lightning QRN static.",
          "reading": "Weak-signal DX extraction",
          "translation": "Extreme noise extraction."
        },
        {
          "target": "Audio Peaking: Tuning receiver pitch to 550 Hz and focusing mental attention on that exact tone.",
          "reading": "Auditory frequency locking",
          "translation": "Neural bandpass focus."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U9-L3】: Focus on visualizing the fundamental pattern and structural dependencies for Filter extreme QRM (man-made a."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U9-L3】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Apply the core technique of Lesson 43 to solve this challenge:",
          "options": [
            "It makes the receiver louder (43.1) [L43.1] (Focus 43.1)",
            "It turns off the other stations (43.2) [L43.2] (Focus 43.2)",
            "The auditory cortex selectively amplifies the specific frequency and rhythm of the target station while suppressing all adjacent competing audio signals (#ScienceOfLearning) (43.3) [L43.3] (Focus 43.3)",
            "It converts code into text automatically (43.4) [L43.4] (Focus 43.4)"
          ],
          "answerIndex": 2,
          "explanation": "Selective auditory attention acts as a powerful organic biological filter."
        },
        {
          "prompt": "What is the recommended receiver DSP filter bandwidth for comfortable high-speed CW copy without acoustic 'ringing'?",
          "options": [
            "10 kHz (wide open AM filter)",
            "10 Hz (causes severe metallic ringing)",
            "0 Hz",
            "250 Hz to 400 Hz"
          ],
          "answerIndex": 3,
          "explanation": "250 Hz to 400 Hz provides optimal adjacent channel rejection without ringing."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 43:",
          "options": [
            "Contextual top-down linguistic reconstruction: The brain uses syntax and word predictability to seamlessly fill in the missing acoustic gap (43.1) [L43.1] (Task 43.1)",
            "Asking the sender to repeat the entire message from the beginning (43.2) [L43.2] (Task 43.2)",
            "Changing the antenna (43.3) [L43.3] (Task 43.3)",
            "Giving up the contact (43.4) [L43.4] (Task 43.4)"
          ],
          "answerIndex": 0,
          "explanation": "Top-down linguistic context repairs fragmented signals."
        },
        {
          "prompt": "What does a signal report of 'RST 339' mean?",
          "options": [
            "Readability 3 (readable with considerable difficulty), Strength 3 (weak signal), Tone 9 (pure tone)",
            "Perfect signal",
            "No signal",
            "Station is in zone 33"
          ],
          "answerIndex": 0,
          "explanation": "RST 339 indicates a weak, difficult, but copyable signal."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the noise types: QRM, QRN, QSB, Auroral Flutter:",
          "options": [
            "All are software bugs",
            "All are sunspots",
            "QRM: Man-made station interference | QRN: Thunderstorm atmospheric static | QSB: Periodic ionospheric fading | Auroral Flutter: Polar magnetic multipath distortion",
            "All are lightning"
          ],
          "answerIndex": 2,
          "explanation": "Radio noise phenomena matching."
        },
        {
          "prompt": "Why can Morse code be decoded at Signal-to-Noise Ratios (SNR) below 0 dB (where noise is louder than the signal)?",
          "options": [
            "Because telegraph keys boost volume",
            "Because CW energy is concentrated in a razor-thin single-frequency carrier tone whose repetitive rhythmic coherence can be detected by human neural pattern-matchers beneath white noise",
            "Because Morse code is magical",
            "Because noise has no effect on radio waves"
          ],
          "answerIndex": 1,
          "explanation": "Rhythmic coherence and narrow carrier energy enable sub-noise floor detection."
        },
        {
          "prompt": "What is 'audio sidetone' on a CW transmitter?",
          "options": [
            "An internal audio oscillator that plays a pleasant tone (typically 500-700 Hz) into the operator's headphones so they can hear what they are transmitting",
            "A speaker distortion",
            "A radio advertisement",
            "A buzzing background error"
          ],
          "answerIndex": 0,
          "explanation": "Sidetone allows the operator to monitor their own keying in real time."
        },
        {
          "prompt": "Complete: 'The true master hears not the noise of the world, but the _______.'",
          "options": [
            "loudest speaker",
            "sound of silence",
            "static on the radio",
            "pure signal cutting through the storm"
          ],
          "answerIndex": 3,
          "explanation": "Isolating the pure signal cutting through atmospheric noise."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "morse-u10-l4": {
    "id": "morse-u10-l4",
    "unit": "morse-u10",
    "level": "master",
    "objective": "Master real-time error detection, error prosign execution (8-dit correction `........`), fill requests (AGN, WA, WB, AA, AB), and zero-loss buffer recovery.",
    "presentation": {
      "explanation": "In high-speed telegraphy, mistakes happen to everyone. What separates an amateur from a grandmaster is **Flawless Error Recovery & Surgical Fill Requests**:\n\n1. The Error Correction Protocol:\n   - If you make a keying error while transmitting:\n     - Send the **Error Prosign: 8 Dits (`........`)** (or `?` / `EE`).\n     - Immediately re-send the **LAST CORRECT WORD**, then continue smoothly!\n     - *Example*: You wanted to send *'THE SHIP HAS SAILED'*, but keyed *'THE SHIP HAZ'* $\\rightarrow$ Send `........ SHIP HAS SAILED`.\n\n2. The Fill-Request Tactical Shorthand:\n   - When receiving, if you miss a critical word in a 50-word telegram, do NOT ask for the whole message again! Request a surgical **Fill**:\n     - **`? WA [word]`**: *Repeat Word After [word]* (e.g. `? WA SHIP` $\\rightarrow$ sender repeats the word following 'SHIP').\n     - **`? WB [word]`**: *Repeat Word Before [word]*.\n     - **`? AA [word]`**: *Repeat All After [word]*.\n     - **`? AB [word]`**: *Repeat All Before [word]*.\n     - **`? SRI AGN`**: *Sorry, please repeat all*.",
      "examples": [
        {
          "target": "........   - .... .   ... .... .. .--.",
          "reading": "[Error 8-dits] THE SHIP",
          "translation": "Error prosign and clean restart from last valid word."
        },
        {
          "target": "..--..   .-- .-   -.-. .. - -.--   (? WA CITY)",
          "reading": "? WA CITY",
          "translation": "Fill request: Repeat word after CITY."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U9-L4】: Focus on visualizing the fundamental pattern and structural dependencies for Master real-time error detecti."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U9-L4】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Apply the core technique of Lesson 44 to solve this challenge:",
          "options": [
            "Send SOS 3 times (44.1) [L44.1] (Focus 44.1)",
            "Send the 8-dit error prosign (`........`), repeat the last correctly sent word, and continue transmitting (44.2) [L44.2] (Focus 44.2)",
            "Repeat the entire message from word 1 (44.3) [L44.3] (Focus 44.3)",
            "Turn off the radio in shame (44.4) [L44.4] (Focus 44.4)"
          ],
          "answerIndex": 1,
          "explanation": "8 dits followed by repeating the last correct word is the standard correction protocol."
        },
        {
          "prompt": "What does the fill request `..--..   .-- .-   -.. --- -.-. - --- .-.` (? WA DOCTOR) mean?",
          "options": [
            "Please repeat the Word After the word 'DOCTOR'",
            "Please repeat the Word Before 'DOCTOR'",
            "Cancel message to doctor",
            "Is there a doctor on frequency?"
          ],
          "answerIndex": 0,
          "explanation": "? WA = Repeat Word After."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 44:",
          "options": [
            "Please repeat the Word Before 'BOSTON' (44.1) [L44.1] (Task 44.1)",
            "Weather in Boston (44.2) [L44.2] (Task 44.2)",
            "Please repeat the Word After 'BOSTON' (44.3) [L44.3] (Task 44.3)",
            "Where is Boston? (44.4) [L44.4] (Task 44.4)"
          ],
          "answerIndex": 0,
          "explanation": "? WB = Repeat Word Before."
        },
        {
          "prompt": "What is the advantage of using surgical fill requests (? WA / ? WB) instead of asking to repeat the whole message (? AGN)?",
          "options": [
            "It saves 90% of transmission time and minimizes frequency congestion by targeting only the single dropped word (#ScienceOfLearning)",
            "It makes the transmitter cooler",
            "It gives double points in contests",
            "It is required by law"
          ],
          "answerIndex": 0,
          "explanation": "Surgical fills recover missing data in seconds without wasting net time."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the fill requests: ? WA, ? WB, ? AA, ? AB:",
          "options": [
            "All mean send slower",
            "? WA: Word After | ? WB: Word Before | ? AA: All After | ? AB: All Before",
            "All are greetings",
            "All mean send faster"
          ],
          "answerIndex": 1,
          "explanation": "Fill request shorthand matching."
        },
        {
          "prompt": "Decode: `... .-. ..   .- --. -.   .--. ... .`",
          "options": [
            "SRI AGN PSE (Sorry, please repeat again)",
            "SEND ALL PLEASE",
            "STATION AGAIN PLEASE",
            "STOP AGAIN PLEASE"
          ],
          "answerIndex": 0,
          "explanation": "SRI AGN PSE = Sorry, please repeat again."
        },
        {
          "prompt": "Why is psychological composure essential when keying errors occur during live high-speed operations?",
          "options": [
            "Because time runs out",
            "Because keys will break",
            "Because listeners will disconnect",
            "Because flustering leads to cascading errors and rhythm collapse, whereas calm 8-dit correction restores smooth cadence immediately"
          ],
          "answerIndex": 3,
          "explanation": "Composure prevents cascading error spirals and maintains rhythmic flow."
        },
        {
          "prompt": "Complete: 'To err is human; to correct with 8 dits and recover instantly is _______.'",
          "options": [
            "a software glitch",
            "impossible",
            "grandmaster telegraphy",
            "unnecessary"
          ],
          "answerIndex": 2,
          "explanation": "Instantaneous error recovery is the hallmark of grandmaster telegraphy."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "morse-u10-l5": {
    "id": "morse-u10-l5",
    "unit": "morse-u10",
    "level": "master",
    "objective": "Demonstrate complete Master Grand Operator Morse code proficiency across all 10 units by completing the Grand Capstone Simulation: 20 WPM directed emergency traffic net check-in, QSK break-in handling, QRM filtering, surgical fill processing, and formal net sign-off.",
    "presentation": {
      "explanation": "Congratulations! You have reached the **Final Master Capstone of the FEARN Morse Code Curriculum**:\n\n1. The Grand Capstone Emergency Net Simulation (20 WPM):\n\n   - **SCENE**: National Emergency Traffic System Net during a catastrophic storm.\n   - **NET CALL BY NCS (W1AW)**:\n     `-.-. --.-   -. - ...   -. . -   -.. .   .-- .---- .- .--   --.- -. ..   -.-`\n     *(CQ NTS NET DE W1AW QNI K)*\n\n   - **YOUR CHECK-IN WITH PRIORITY TRAFFIC (K2VX)**:\n     `.-- .---- .- .--   -.. .   -.- ..--- ...- -..-   --.- -. ..   .----   .--.   -... --- ... - --- -.   -.-`\n     *(W1AW DE K2VX QNI 1 P BOSTON K - Priority message for Boston)*\n\n   - **NCS DIRECTIVE**:\n     `-.- ..--- ...- -..-   -.. .   .-- .---- .- .--   .-.   ...- . ...-- .- -... -.-.   .. ...   -.-- --- ..- .-.   -.. .. ... .--. .- - -.-. ....   --.- ... -.--   ...-- ..... ..... -----   -.- .... --..   -.-`\n     *(K2VX DE W1AW R VE3ABC IS YOUR DISPATCH QSY 3550 KHZ K)*\n\n   - **TRAFFIC TRANSMISSION ON 3550 KHZ (QSK ACTIVE)**:\n     `...- . ...-- .- -... -.-.   -.. .   -.- ..--- ...- -..-   -. .-.   .----   .--.   -.- ..--- ...- -..-   .---- ..---   -... --- ... - --- -.   -- .- ... ...   -.. . -.-.   .---- .....   -... -   -- . -.. .. -.-. .- .-..   ... ..- .--. .--. .-.. .. . ...   .- .-. .-. .. ...- . -..   ... .- ..-. . .-.. -.--   -... -   --- .--.   -.. .- ...- .   -... -   .- .-.   -.-`\n     *(VE3ABC DE K2VX NR 1 P K2VX 12 BOSTON MASS DEC 15 = MEDICAL SUPPLIES ARRIVED SAFELY = OP DAVE = AR K)*\n\n   - **SURGICAL FILL & FINAL CONFIRMATION**:\n     `-.- ..--- ...- -..-   -.. .   ...- . ...-- .- -... -.-.   ..--..   .-- .-   -- . -.. .. -.-. .- .-..   -.-`\n     *(K2VX DE VE3ABC ? WA MEDICAL K)*\n     `-.- ..--- ...- -..-   ... ..- .--. .--. .-.. .. . ...   -.-`\n     *(K2VX: SUPPLIES K)*\n     `...- . ...-- .- -... -.-.   --.- ... .-..   --... ...--   ... -.-`\n     *(VE3ABC: QSL 73 SK)*\n\n2. Master Grand Operator Certification:\n   - You have mastered the entire 180-year art and science of international telegraphy from foundation characters to 20+ WPM high-speed net traffic.",
      "examples": [
        {
          "target": "Full Capstone Mastery: Synthesizing Net Check-In (QNI), Traffic Routing, QSK Handling, Surgical Fill (? WA), and Sign-Off at 20 WPM.",
          "reading": "Morse Code Curriculum Completion",
          "translation": "Master Grand Operator Morse certification."
        },
        {
          "target": "Emergency Medical Traffic dispatched and acknowledged with zero errors under simulated disaster conditions.",
          "reading": "Disaster Traffic Handling",
          "translation": "Emergency net verification."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U9-L5】: Focus on visualizing the fundamental pattern and structural dependencies for Demonstrate complete Master Gr."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U9-L5】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Apply the core technique of Lesson 45 to solve this challenge:",
          "options": [
            "MEDICAL SUPPLIES ARRIVED SAFELY (45.1) [L45.1] (Focus 45.1)",
            "STORM HAS PASSED (45.2) [L45.2] (Focus 45.2)",
            "REQUESTING MORE FUEL (45.3) [L45.3] (Focus 45.3)",
            "AIRPORT IS CLOSED (45.4) [L45.4] (Focus 45.4)"
          ],
          "answerIndex": 0,
          "explanation": "Message payload: MEDICAL SUPPLIES ARRIVED SAFELY."
        },
        {
          "prompt": "What surgical fill request did station VE3ABC send after receiving the telegram?",
          "options": [
            "`? WA MEDICAL` (Repeat the Word After 'MEDICAL' -> SUPPLIES)",
            "`? WB MEDICAL`",
            "`? AGN`",
            "`? QTH`"
          ],
          "answerIndex": 0,
          "explanation": "VE3ABC sent ? WA MEDICAL, and K2VX instantly supplied 'SUPPLIES'."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 45:",
          "options": [
            "1. Counting dits with a pencil only (45.1) [L45.1] (Task 45.1)",
            "1. Koch Method Auditory Foundation; 2. Numbers & Core Prosigns; 3. Farnsworth Spacing Compression; 4. Whole-Word Gestalts & Q-Codes; 5. 20 WPM Head Copy & Emergency Net Operations (45.2) [L45.2] (Task 45.2)",
            "1. Flashcards only (45.3) [L45.3] (Task 45.3)",
            "1. Memorizing visual charts on paper only (45.4) [L45.4] (Task 45.4)"
          ],
          "answerIndex": 1,
          "explanation": "The 5 evolutionary pillars of master Morse code pedagogy."
        },
        {
          "prompt": "What is the primary cognitive superpower gained from completing the Morse Code curriculum?",
          "options": [
            "Typing without looking",
            "Hyper-focused auditory sensory processing, deep working memory buffer expansion, real-time linguistic stream decoding, and acoustic noise filtering under intense cognitive load (#ScienceOfLearning)",
            "Learning flag signals",
            "Hearing dog whistles"
          ],
          "answerIndex": 1,
          "explanation": "Auditory cognitive buffer expansion and real-time noise filtering."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What core competencies were mastered across the ENTIRE 50-Lesson FEARN Morse Code Curriculum?",
          "options": [
            "All 26 letters via Koch auditory method, numbers 0-9, full punctuation, Farnsworth spacing compression (8 -> 12 -> 16 -> 20 WPM), high-frequency whole-word gestalts, international callsign structures, complete Q-code lexicon (QTH, QSL, QRM, QRN, QRP, QRZ, QSK, QSB, QRO), standard QSO protocols, fused prosigns ([AS], [KN], [SK], [CL], [DN], [HH]), transcription-free 20 WPM head copy, directed emergency net procedures (QNI, QNX, QNZ), iambic dual-paddle squeeze keying, extreme noise filtering, and surgical fill error recovery",
            "Using an iPhone keyboard only",
            "Reading sheet music only",
            "Semaphore flags only"
          ],
          "answerIndex": 0,
          "explanation": "Comprehensive 50-lesson Morse Code Master Grand Operator certification."
        },
        {
          "prompt": "Decode the eternal telegraphic signature: `--... ...--   . ...   ---.. ---..`",
          "options": [
            "GOODBYE AND FAREWELL",
            "73 AND 73",
            "88 ES 88",
            "73 ES 88 (Best regards and love & kisses)"
          ],
          "answerIndex": 3,
          "explanation": "73 (Best regards) ES (and) 88 (love & kisses)."
        },
        {
          "prompt": "Why has Morse Code survived as an irreplaceable communication system despite the invention of satellite, cellular, and fiber-optic networks?",
          "options": [
            "Because satellites are illegal",
            "Because Morse code is owned by the government",
            "Because it requires zero software, zero proprietary protocols, negligible bandwidth, operates through severe ionospheric disruption on micro-watt battery power, and converts directly into human neural perception without computers",
            "Because modern radios cannot transmit voice"
          ],
          "answerIndex": 2,
          "explanation": "Zero infrastructure dependence, extreme signal efficiency, and direct human-to-human connection."
        },
        {
          "prompt": "Complete the Telegrapher's eternal motto: 'Across the wire, through the storm, into the ether: _______.'",
          "options": [
            "we give up",
            "the signal always gets through",
            "the radio turns off",
            "nobody is listening"
          ],
          "answerIndex": 1,
          "explanation": "'Across the wire, through the storm, into the ether: the signal always gets through.'"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "morse-u6-l1": {
    "id": "morse-u6-l1",
    "unit": "morse-u6",
    "level": "intermediate",
    "objective": "Decode and encode core punctuation marks: Period (.-.-.-), Comma (--..--), Question Mark (..--..), and Slash / Fraction Bar (-..-.).",
    "presentation": {
      "explanation": "Punctuation marks in International Morse Code are 5- and 6-element rhythmic cadences:\n\n1. The 4 Essential Punctuation Cadences:\n   - **Period (.)**: `.-.-.-` (dit-dah-dit-dah-dit-dah). Mnemonic: 3 alternating pairs of `.-` (like saying 'stop-stop-stop'). Also called `AAA` in old naval telegraphy.\n   - **Comma (,)**: `--..--` (dah-dah-dit-dit-dah-dah). Mnemonic: Two heavy dahs, two light dits, two heavy dahs (`MIM`).\n   - **Question Mark (?)**: `..--..` (dit-dit-dah-dah-dit-dit). Mnemonic: Two dits, two dahs, two dits (`IMI` — 'say again?').\n   - **Fraction Bar / Slash (/)**: `-..-.` (dah-dit-dit-dah-dit). Mnemonic: `DN` used in callsigns like `W1AW/P` (portable) or dates `12/24`.\n\n2. Rhythmic Acoustic Recognition:\n   - Do NOT count 6 dits and dahs individually! Listen to the symmetrical melodic wave:\n     - Period: A rocking pendulum `.- .- .-`.\n     - Question Mark: Inward-outward mirror `.. -- ..`.",
      "examples": [
        {
          "target": ".-.-.- = Period (.)",
          "reading": "dit-dah-dit-dah-dit-dah — rocking pendulum cadence.",
          "translation": "Period (.) = .-.-.-"
        },
        {
          "target": "--..-- = Comma (,)",
          "reading": "dah-dah-dit-dit-dah-dah — two dahs, two dits, two dahs.",
          "translation": "Comma (,) = --..--"
        },
        {
          "target": "..--.. = Question Mark (?)",
          "reading": "dit-dit-dah-dah-dit-dit — question inquiry cadence.",
          "translation": "Question Mark (?) = ..--.."
        },
        {
          "target": "-..-. = Slash (/)",
          "reading": "dah-dit-dit-dah-dit — callsign portable / fractional divider.",
          "translation": "Slash (/) = -..-."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U10-L1】: Focus on visualizing the fundamental pattern and structural dependencies for Decode and encode core punctua."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U10-L1】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Apply the core technique of Lesson 46 to solve this challenge:",
          "options": [
            ".-.-.- (46.1) [L46.1] (Focus 46.1)",
            "--..-- (46.2) [L46.2] (Focus 46.2)",
            "-..-. (46.3) [L46.3] (Focus 46.3)",
            "..-..- (dit-dit-dah-dah-dit-dit) (46.4) [L46.4] (Focus 46.4)"
          ],
          "answerIndex": 3,
          "explanation": "..--.. is the universal Question Mark."
        },
        {
          "prompt": "What character does the six-element rhythmic pattern '.-.-.-' (dit-dah-dit-dah-dit-dah) represent?",
          "options": [
            "Comma (,)",
            "Exclamation Mark (!)",
            "Slash (/)",
            "Period / Full Stop (.)"
          ],
          "answerIndex": 3,
          "explanation": ".-.-.- represents a Period (.)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 46:",
          "options": [
            ". (46.1) [L46.1] (Task 46.1)",
            ", (46.2) [L46.2] (Task 46.2)",
            "/ (46.3) [L46.3] (Task 46.3)",
            "? (46.4) [L46.4] (Task 46.4)"
          ],
          "answerIndex": 3,
          "explanation": "..--.. = Question Mark."
        },
        {
          "prompt": "What is the Morse code for the slash character '/' in 'K1ABC/P'?",
          "options": [
            ".-.-.-",
            "--..--",
            "..--..",
            "-..-. (dah-dit-dit-dah-dit)"
          ],
          "answerIndex": 3,
          "explanation": "-..-. is the Slash (/)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the four core punctuation marks: Period, Comma, Question Mark, Slash:",
          "options": [
            "Period: --..-- | Comma: .-.-.- | Question: -..-. | Slash: ..--..",
            "Period: ..--.. | Comma: -..-. | Question: .-.-.- | Slash: --..--",
            "All punctuation uses 1 dit",
            "Period: .-.-.- | Comma: --..-- | Question: ..--.. | Slash: -..-."
          ],
          "answerIndex": 3,
          "explanation": "The 4 core punctuation codes in International Morse."
        },
        {
          "prompt": "What is the rhythmic structure of the Comma (--..--)?",
          "options": [
            "Six dits in a row",
            "Six dahs in a row",
            "Two dahs, two dits, two dahs (dah-dah-dit-dit-dah-dah)",
            "Alternating dits and dahs"
          ],
          "answerIndex": 2,
          "explanation": "--..-- = two dahs, two dits, two dahs."
        },
        {
          "prompt": "In on-air amateur radio CW, what does sending a standalone '?' (..--..) indicate?",
          "options": [
            "'My radio is broken'",
            "'Please repeat what you just sent / I did not copy'",
            "'Send faster'",
            "'I am turning off the power'"
          ],
          "answerIndex": 1,
          "explanation": "A standalone question mark requests a retransmission."
        },
        {
          "prompt": "Decode: `--..--`",
          "options": [
            "Comma (,)",
            "Question mark (?)",
            "Slash (/)",
            "Period (.)"
          ],
          "answerIndex": 0,
          "explanation": "--..-- is Comma."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "morse-u6-l2": {
    "id": "morse-u6-l2",
    "unit": "morse-u6",
    "level": "intermediate",
    "objective": "Decode and apply the ubiquitous break/separator prosign BT (-...-) and conversational punctuation (equal sign, colon, hyphen, apostrophe).",
    "presentation": {
      "explanation": "A 'Prosign' (procedural signal) is two Morse characters sent run together as a single continuous character with NO inter-character space between them (indicated with an overline $\\overline{BT}$):\n\n1. The King of Prosigns: $\\overline{BT}$ (Break / Paragraph / Equal Sign):\n   - Pattern: `-...-` (dah-dit-dit-dit-dah — B `-...` run directly into T `-`).\n   - In Morse traffic, $\\overline{BT}$ functions as the universal conversational 'comma / period / pause / new thought' separator between sentences (like saying 'break' or 'paragraph' on a walkie-talkie).\n   - Example: *'NAME IS BOB $\\overline{BT}$ QTH IS BOSTON $\\overline{BT}$ RIG IS 100W'*.\n\n2. Additional Conversational Punctuation:\n   - **Hyphen / Dash (-)**: `-....-` (dah-dit-dit-dit-dit-dah — 1 dah, 4 dits, 1 dah).\n   - **Colon (:)**: `---...` (dah-dah-dah-dit-dit-dit — 3 dahs, 3 dits).\n   - **Apostrophe (')**: `.----.` (dit-dah-dah-dah-dah-dit — 1 dit, 4 dahs, 1 dit).",
      "examples": [
        {
          "target": "-...- = BT (Break / Equal Sign)",
          "reading": "dah-dit-dit-dit-dah — universal conversational thought separator.",
          "translation": "BT Prosign = -...-"
        },
        {
          "target": "NAME IS JACK -...- QTH IS MIAMI -...- RST IS 599",
          "reading": "Standard conversational message separated by BT breaks.",
          "translation": "QSO conversational structure with BT"
        },
        {
          "target": "---... = Colon (:)",
          "reading": "dah-dah-dah-dit-dit-dit — 3 dahs, 3 dits.",
          "translation": "Colon (:) = ---..."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U10-L2】: Focus on visualizing the fundamental pattern and structural dependencies for Decode and apply the ubiquitou."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U10-L2】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Apply the core technique of Lesson 47 to solve this challenge:",
          "options": [
            "dah-dit-dit-dit-dah (B and T sent without space) (47.1) [L47.1] (Focus 47.1)",
            "dah-dit-dah-dit (47.2) [L47.2] (Focus 47.2)",
            "dah-dah-dah (47.3) [L47.3] (Focus 47.3)",
            "dit-dit-dit (47.4) [L47.4] (Focus 47.4)"
          ],
          "answerIndex": 0,
          "explanation": "-...- is the BT break prosign."
        },
        {
          "prompt": "How is the prosign BT used in everyday amateur radio Morse code?",
          "options": [
            "As a conversational pause/separator between sentences and thoughts (like a paragraph break)",
            "To indicate the radio is catching on fire",
            "To send audio tones",
            "To switch to voice communication"
          ],
          "answerIndex": 0,
          "explanation": "BT separates thoughts and sentences in CW traffic."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 47:",
          "options": [
            "AR (47.1) [L47.1] (Task 47.1)",
            "BT (Break / Equal Sign) (47.2) [L47.2] (Task 47.2)",
            "SK (47.3) [L47.3] (Task 47.3)",
            "KN (47.4) [L47.4] (Task 47.4)"
          ],
          "answerIndex": 1,
          "explanation": "-...- = BT."
        },
        {
          "prompt": "What is the code for a Colon (:) in Morse?",
          "options": [
            "...---",
            ".-.-.-",
            "---... (3 dahs followed by 3 dits)",
            "-....-"
          ],
          "answerIndex": 2,
          "explanation": "---... is the Colon (:)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What defines a 'prosign' in Morse telegraphy?",
          "options": [
            "A signal sent at double volume",
            "A word with 5 vowels",
            "Two standard characters transmitted run together with zero space between them as a single procedural command",
            "A letter typed in capital font"
          ],
          "answerIndex": 2,
          "explanation": "Prosigns are run-together characters (e.g. B + T = BT)."
        },
        {
          "prompt": "In the transmission 'HW CPY -...- RIG IS 5W -...- ANT IS DIPOLE', what is the function of -...-?",
          "options": [
            "It cancels the transmission.",
            "It acts as a thought separator/break between clauses.",
            "It changes frequency.",
            "It is a spelling error."
          ],
          "answerIndex": 1,
          "explanation": "BT separates clauses."
        },
        {
          "prompt": "What is the Morse code for Hyphen / Dash (-)?",
          "options": [
            "-....- (dah-dit-dit-dit-dit-dah)",
            "---...",
            "-...-",
            ".-.-.-"
          ],
          "answerIndex": 0,
          "explanation": "-....- is Hyphen."
        },
        {
          "prompt": "Why do operators prefer $\\overline{BT}$ over a standard Period (.-.-.-) during rapid chat?",
          "options": [
            "Periods make loud noise.",
            "Periods are forbidden on amateur radio.",
            "BT is only for emergencies.",
            "BT (-...-) is 5 elements and rolls off the key faster and more distinctly than a 6-element period."
          ],
          "answerIndex": 3,
          "explanation": "BT is shorter, punchier, and sounds natural as a conversational cadence."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "morse-u6-l3": {
    "id": "morse-u6-l3",
    "unit": "morse-u6",
    "level": "intermediate",
    "objective": "Distinguish and execute turn-taking and transmission-ending procedural signals: K (-.-), KN (-.--.), and AR (.-.-.).",
    "presentation": {
      "explanation": "In two-way Morse communication, you need strict turn-taking rules so operators do not transmit simultaneously:\n\n1. The Turn-Taking Prosigns:\n   - **K** (`-.-` / dah-dit-dah):\n     - *Meaning*: 'Over / Go ahead — ANY station may transmit.'\n     - Sent at the end of general calls (like `CQ CQ CQ DE W1AW K`).\n   - **KN** (`-.--.` / dah-dit-dah-dah-dit — K and N run together):\n     - *Meaning*: 'Go ahead, ONLY the specific named station I was talking to.'\n     - Warns all other listening stations NOT to break in or interfere (*'W1AW DE K2BSA KN'*).\n   - **AR** (`.-.-.` / dit-dah-dit-dah-dit — A and R run together):\n     - *Meaning*: 'End of Message / End of Transmission.'\n     - Sent at the conclusion of a structured formal message or telegram before passing the turn.\n\n2. The Standard Hand-off Formula:\n   - *'[Recipient Callsign] DE [My Callsign] $\\overline{AR}$ K'* (or $\\overline{KN}$).",
      "examples": [
        {
          "target": "CQ CQ CQ DE W1AW K = Calling any station, from W1AW, go ahead anyone.",
          "reading": "K opens the frequency to any answering station.",
          "translation": "General CQ call with K hand-off"
        },
        {
          "target": "W1AW DE K2BSA KN = W1AW, this is K2BSA, go ahead W1AW only.",
          "reading": "KN restricts the hand-off to W1AW only.",
          "translation": "Directed hand-off with KN"
        },
        {
          "target": ".-.-. = AR (End of Message / Out)",
          "reading": "dit-dah-dit-dah-dit — formal message closing prosign.",
          "translation": "AR Prosign = .-.-."
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U10-L3】: Focus on visualizing the fundamental pattern and structural dependencies for Distinguish and execute turn-t."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U10-L3】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Apply the core technique of Lesson 48 to solve this challenge:",
          "options": [
            "'Kill the power' (48.1) [L48.1] (Focus 48.1)",
            "'Keep waiting' (48.2) [L48.2] (Focus 48.2)",
            "'Over / Go ahead — any station is invited to transmit' (48.3) [L48.3] (Focus 48.3)",
            "'Keyboard error' (48.4) [L48.4] (Focus 48.4)"
          ],
          "answerIndex": 2,
          "explanation": "K is the universal 'Go ahead / Over' invitation."
        },
        {
          "prompt": "What is the difference between 'K' (-.-) and 'KN' (-.--.)?",
          "options": [
            "K is faster than KN.",
            "KN is an emergency distress code.",
            "There is no difference.",
            "K invites ANY station to reply; KN strictly invites ONLY the specific named station addressed."
          ],
          "answerIndex": 3,
          "explanation": "KN restricts response to the designated station only."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 48:",
          "options": [
            "AR (End of Message / Transmission) (48.1) [L48.1] (Task 48.1)",
            "BT (48.2) [L48.2] (Task 48.2)",
            "SOS (48.3) [L48.3] (Task 48.3)",
            "SK (48.4) [L48.4] (Task 48.4)"
          ],
          "answerIndex": 0,
          "explanation": ".-.-. is the AR prosign (A + R run together)."
        },
        {
          "prompt": "Which prosign should you send at the end of an open CQ call to invite listeners to answer?",
          "options": [
            "K (-.-)",
            "KN (-.--.)",
            "SK (...-.-)",
            "AS (.-...)"
          ],
          "answerIndex": 0,
          "explanation": "An open CQ call closes with 'K'."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the turn-taking prosigns: K, KN, AR:",
          "options": [
            "All three mean the same thing",
            "K: Go ahead any station | KN: Go ahead named station only | AR: End of message",
            "K: Stop | KN: Go | AR: Repeat",
            "K: End of message | KN: Wait | AR: Go ahead"
          ],
          "answerIndex": 1,
          "explanation": "Core turn-taking protocol in Morse traffic."
        },
        {
          "prompt": "What is the rhythmic composition of the AR prosign (.-.-.)?",
          "options": [
            "dit-dah-dit-dah-dit (A '.-' merged with R '.-.')",
            "dah-dit-dah",
            "dah-dah-dah",
            "dit-dit-dit"
          ],
          "answerIndex": 0,
          "explanation": "A (.-) + R (.-.) merged without gap = .-.-."
        },
        {
          "prompt": "Why is 'KN' critical during a DX (long-distance rare station) contact?",
          "options": [
            "To switch antennas",
            "It is required by the FCC on weekends",
            "To increase transmitter wattage",
            "To prevent hundreds of listening stations in the pileup from transmitting over the weak DX station's response"
          ],
          "answerIndex": 3,
          "explanation": "KN maintains order during high-traffic radio pileups."
        },
        {
          "prompt": "Decode: `-.--.`",
          "options": [
            "AR",
            "AS",
            "KN (Go ahead specific station only)",
            "BT"
          ],
          "answerIndex": 2,
          "explanation": "-.--. is KN."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "morse-u6-l4": {
    "id": "morse-u6-l4",
    "unit": "morse-u6",
    "level": "intermediate",
    "objective": "Decode and execute operational closing and standby signs: SK (...-.-), AS (.-...), and the 8-dit error correction signal (........).",
    "presentation": {
      "explanation": "1. The Final Sign-Off: $\\overline{SK}$ (Silent Key / End of Contact):\n   - Pattern: `...-.-` (dit-dit-dit-dah-dit-dah — S `...` run directly into K `-.-`).\n   - *Meaning*: 'Final transmission, contact is completely finished, frequency is clear, 73 (best regards) and goodbye.'\n   - Sent as the very last transmission of a QSO: *'73 TNX FOR QSO $\\overline{SK}$'*.\n\n2. The Standby / Wait Prosign: $\\overline{AS}$ (Please Stand By / Wait):\n   - Pattern: `.-...` (dit-dah-dit-dit-dit — A `.-` run into S `...`).\n   - *Meaning*: 'Please hold on / wait a minute (I am answering the door or adjusting the rig).' Often followed by a number indicating minutes: *'$\\overline{AS}$ 2'* (wait 2 minutes).\n\n3. The Error / Correction Signal (8 Dits / HH):\n   - Pattern: `........` (eight rapid dits).\n   - *Meaning*: 'I made an error on the last word; ignore it, I will restart from the word before the error.'",
      "examples": [
        {
          "target": "...-.- = SK (Silent Key / Final End of Contact)",
          "reading": "dit-dit-dit-dah-dit-dah — final QSO sign-off.",
          "translation": "SK Prosign = ...-.-"
        },
        {
          "target": ".-... = AS (Please Stand By / Wait)",
          "reading": "dit-dah-dit-dit-dit — temporary pause request.",
          "translation": "AS Prosign = .-..."
        },
        {
          "target": "........ = Error Correction (8 rapid dits)",
          "reading": "Eight rapid dits indicating mistake on preceding word.",
          "translation": "Error Signal = 8 dits"
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U10-L4】: Focus on visualizing the fundamental pattern and structural dependencies for Decode and execute operational."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U10-L4】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Apply the core technique of Lesson 49 to solve this challenge:",
          "options": [
            "'Signal is weak' (49.1) [L49.1] (Focus 49.1)",
            "'End of contact / final sign-off (Silent Key) — contact is finished' (49.2) [L49.2] (Focus 49.2)",
            "'Send emergency help' (49.3) [L49.3] (Focus 49.3)",
            "'Start sending faster' (49.4) [L49.4] (Focus 49.4)"
          ],
          "answerIndex": 1,
          "explanation": "SK concludes the entire radio contact."
        },
        {
          "prompt": "If you make a typo while sending Morse code, how do you officially signal an error to the receiving operator?",
          "options": [
            "Send 8 rapid dits (........), pause briefly, and re-send the word correctly",
            "Turn off the power",
            "Send SOS",
            "Send 5 dahs"
          ],
          "answerIndex": 0,
          "explanation": "8 dits (HH) is the standard error correction signal."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 49:",
          "options": [
            "AS (Please wait / Stand by) (49.1) [L49.1] (Task 49.1)",
            "BT (49.2) [L49.2] (Task 49.2)",
            "SK (49.3) [L49.3] (Task 49.3)",
            "AR (49.4) [L49.4] (Task 49.4)"
          ],
          "answerIndex": 0,
          "explanation": ".-... is the AS wait prosign."
        },
        {
          "prompt": "What does '73 ES GD DX SK' mean at the end of a contact?",
          "options": [
            "'Best regards and good long-distance contacts, final sign-off (end of QSO)'",
            "'Emergency distress'",
            "'Please wait 73 minutes'",
            "'Send 73 dollars'"
          ],
          "answerIndex": 0,
          "explanation": "73 = best regards, ES = and, GD DX = good long distance, SK = end of contact."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the operational signals: SK, AS, 8 Dits:",
          "options": [
            "SK: Final sign-off | AS: Stand by / wait | 8 Dits: Error correction",
            "SK: Error | AS: Final sign-off | 8 Dits: Wait",
            "All mean repeat message",
            "SK: Wait | AS: Error | 8 Dits: Final sign-off"
          ],
          "answerIndex": 0,
          "explanation": "Core operational and error management signals."
        },
        {
          "prompt": "What is the rhythmic structure of the SK prosign (...-.-)?",
          "options": [
            "dit-dah-dit-dah",
            "dah-dah-dah",
            "dah-dit-dit-dah",
            "dit-dit-dit-dah-dit-dah (S '...' merged directly with K '-.-')"
          ],
          "answerIndex": 3,
          "explanation": "S (...) + K (-.-) = ...-.-."
        },
        {
          "prompt": "If an operator sends 'AS 5', what does that request?",
          "options": [
            "Turn up volume to 5",
            "Send 5 words",
            "Please stand by / wait for approximately 5 minutes",
            "Change to 5 MHz"
          ],
          "answerIndex": 2,
          "explanation": "AS + number requests a specific standby duration."
        },
        {
          "prompt": "Why is the 8-dit error signal (........) sent instead of deleting characters?",
          "options": [
            "Because 8 is a lucky number.",
            "Because in real-time radio CW there is no backspace key; 8 dits tells the receiving operator's ear to discard the previous token.",
            "Because it reboots the radio.",
            "It is required by satellite regulations."
          ],
          "answerIndex": 1,
          "explanation": "Real-time acoustic stream requires an auditory cancellation signal."
        }
      ],
      "passThreshold": 0.8
    }
  },
  "morse-u6-l5": {
    "id": "morse-u6-l5",
    "unit": "morse-u6",
    "level": "intermediate",
    "objective": "Pass an integrated Morse code punctuation and prosign checkpoint by copying and structuring a complete simulated on-air QSO contact exchange.",
    "presentation": {
      "explanation": "In this Master Checkpoint for Unit 6, we synthesize all letters, numbers, punctuation marks, and operational prosigns into a standard, complete amateur radio contact exchange (QSO):\n\n1. The Anatomy of a Complete 2-Way QSO Exchange:\n   - **Phase 1 (The Call)**: `CQ CQ CQ DE W1AW W1AW K`\n   - **Phase 2 (The Answer)**: `W1AW DE K2BSA K2BSA AR K`\n   - **Phase 3 (The Report & Name)**: `K2BSA DE W1AW = GM OM = UR RST IS 599 599 = NAME IS DAN DAN = QTH IS BOSTON, MA = HW CPY? K2BSA DE W1AW KN`\n   - **Phase 4 (The Response)**: `W1AW DE K2BSA = FB DAN = UR 599 HR IN NYC = RIG IS 100W = TNX FER QSO = 73 SK W1AW DE K2BSA`\n\n2. Key Decoded Elements:\n   - `=` (represented by $\\overline{BT}$ `-...-`) separates sentences.\n   - `RST 599` = Readability 5, Signal Strength 9, Tone 9 (perfect clear audio!).\n   - `OM` = Old Man (friendly respectful term for male radio operator).\n   - `FB` = Fine Business (excellent / great!).\n   - `73` = Best regards.\n   - $\\overline{SK}$ = Final sign-off.",
      "examples": [
        {
          "target": "CQ CQ CQ DE W1AW K — Calling any station, from W1AW, go ahead.",
          "reading": "Open station CQ call.",
          "translation": "Standard CQ Call"
        },
        {
          "target": "GM OM -...- NAME IS DAN -...- QTH BOSTON -...- 73 SK",
          "reading": "Standard QSO transmission using BT breaks and SK sign-off.",
          "translation": "Standard QSO Format"
        },
        {
          "target": "UR RST IS 599 599 -...- HW CPY? KN",
          "reading": "Signal report followed by question and directed hand-off.",
          "translation": "Signal Report Exchange"
        }
      ],
      "mnemonics": [
        "【Cognitive Anchor MORSE-U10-L5】: Focus on visualizing the fundamental pattern and structural dependencies for Pass an integrated Morse code ."
      ],
      "culturalNotes": [
        "【Context & Mastery MORSE-U10-L5】: Elite practitioners refine this micro-skill through deliberate repetition and real-time stress testing."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Apply the core technique of Lesson 50 to solve this challenge:",
          "options": [
            "Readability 5 (perfect), Strength 9 (extremely strong), Tone 9 (pure crystal tone) (50.1) [L50.1] (Focus 50.1)",
            "Radio channel 599 (50.2) [L50.2] (Focus 50.2)",
            "599 miles away (50.3) [L50.3] (Focus 50.3)",
            "Emergency code 599 (50.4) [L50.4] (Focus 50.4)"
          ],
          "answerIndex": 0,
          "explanation": "599 is the standard 'perfect copy' CW signal report."
        },
        {
          "prompt": "In the transmission 'QTH IS DALLAS, TX', what does 'QTH' mean?",
          "options": [
            "My location / home city",
            "My radio model",
            "My age",
            "My antenna height"
          ],
          "answerIndex": 0,
          "explanation": "QTH is the Q-code for location."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 50:",
          "options": [
            "The frequency is closed for 73 days (50.1) [L50.1] (Task 50.1)",
            "Best regards and thanks for the contact, final sign-off (end of QSO) (50.2) [L50.2] (Task 50.2)",
            "Repeat your name (50.3) [L50.3] (Task 50.3)",
            "Wait 73 minutes for next contact (50.4) [L50.4] (Task 50.4)"
          ],
          "answerIndex": 1,
          "explanation": "73 (best regards) + TNX FER QSO (thanks for contact) + SK (end of contact)."
        },
        {
          "prompt": "Which prosign is sent immediately before 'K' when closing a formal telegram?",
          "options": [
            "SK",
            "AR (.-.-. / End of Message)",
            "AS",
            "BT"
          ],
          "answerIndex": 1,
          "explanation": "AR signifies end of formal message."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Which sequence correctly represents a standard full-exchange CW contact from start to finish?",
          "options": [
            "Only numbers repeated 10 times",
            "SOS -> 8 Dits -> Turn off radio",
            "SK -> CQ -> AS -> Period",
            "CQ Call (with K) -> Station Reply (with AR K) -> Signal Report & QTH (with BT and KN) -> Sign-off (with 73 and SK)"
          ],
          "answerIndex": 3,
          "explanation": "Flawless standard operating procedure for Morse traffic."
        },
        {
          "prompt": "Decode the complete punctuation set: `.-.-.-` and `--..--` and `..--..` and `-..-.`:",
          "options": [
            "1, 2, 3, 4",
            "Colon, Hyphen, Semicolon, Quote",
            "Period (.), Comma (,), Question Mark (?), Slash (/)",
            "A, B, C, D"
          ],
          "answerIndex": 2,
          "explanation": "Period, Comma, Question Mark, Slash."
        },
        {
          "prompt": "What core competencies were mastered across Unit 6 in Morse Code?",
          "options": [
            "Transistor radio repair only",
            "Full punctuation set (., ?, /), conversational break prosign BT (-...-), turn-taking hand-offs (K, KN, AR), sign-offs (SK), standby (AS), 8-dit error correction, and full QSO message protocols",
            "Optical laser communications only",
            "Phonetic NATO alphabet only"
          ],
          "answerIndex": 1,
          "explanation": "Unit 6 comprehensive punctuation, prosigns, and operational QSO mastery."
        },
        {
          "prompt": "What is the international abbreviation '73' used for worldwide in Morse code?",
          "options": [
            "Best regards / Warmest friendly wishes",
            "Frequency 73 MHz",
            "73 dollars",
            "Bad signal"
          ],
          "answerIndex": 0,
          "explanation": "73 is the universal telegrapher farewell: 'Best regards'."
        }
      ],
      "passThreshold": 0.8
    }
  }
};
  var ROADMAP = [];
  var SUBJECT = { units: UNITS, lessons: LESSONS, roadmap: ROADMAP };
  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};
  global.FEARN_CURRICULA['morse'] = SUBJECT;
  if (typeof module !== 'undefined' && module.exports) module.exports = SUBJECT;
})(typeof window !== 'undefined' ? window : global);
