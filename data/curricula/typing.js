// FEARN Curriculum Data — typing
(function (global) {
  'use strict';
  var UNITS = [
  {
    "id": "typing-u1",
    "unit": 1,
    "title": "Home Row Mastery (ASDF JKL;)",
    "level": "Beginner",
    "goal": "Mastery of Home Row Mastery (ASDF JKL;).",
    "lessonIds": [
      "typing-u1-l1",
      "typing-u1-l2",
      "typing-u1-l3",
      "typing-u1-l4",
      "typing-u1-l5"
    ]
  },
  {
    "id": "typing-u2",
    "unit": 2,
    "title": "Top Row Reach (QWERTY UIOP)",
    "level": "Beginner",
    "goal": "Mastery of Top Row Reach (QWERTY UIOP).",
    "lessonIds": [
      "typing-u2-l1",
      "typing-u2-l2",
      "typing-u2-l3",
      "typing-u2-l4",
      "typing-u2-l5"
    ]
  },
  {
    "id": "typing-u3",
    "unit": 3,
    "title": "Bottom Row Reach (ZXCVBNM,./)",
    "level": "Beginner",
    "goal": "Mastery of Bottom Row Reach (ZXCVBNM,./).",
    "lessonIds": [
      "typing-u3-l1",
      "typing-u3-l2",
      "typing-u3-l3",
      "typing-u3-l4",
      "typing-u3-l5"
    ]
  },
  {
    "id": "typing-u4",
    "unit": 4,
    "title": "Shift Key Capitalization & Punctuation",
    "level": "Intermediate",
    "goal": "Mastery of Shift Key Capitalization & Punctuation.",
    "lessonIds": [
      "typing-u4-l1",
      "typing-u4-l2",
      "typing-u4-l3",
      "typing-u4-l4",
      "typing-u4-l5"
    ]
  },
  {
    "id": "typing-u5",
    "unit": 5,
    "title": "Number Row & Symbol Precision (!@#$)",
    "level": "Intermediate",
    "goal": "Mastery of Number Row & Symbol Precision (!@#$).",
    "lessonIds": [
      "typing-u5-l1",
      "typing-u5-l2",
      "typing-u5-l3",
      "typing-u5-l4",
      "typing-u5-l5"
    ]
  },
  {
    "id": "typing-u6",
    "unit": 6,
    "title": "Common Bigrams, Trigrams & Speed Bursts",
    "level": "Intermediate",
    "goal": "Mastery of Common Bigrams, Trigrams & Speed Bursts.",
    "lessonIds": [
      "typing-u6-l1",
      "typing-u6-l2",
      "typing-u6-l3",
      "typing-u6-l4",
      "typing-u6-l5"
    ]
  },
  {
    "id": "typing-u7",
    "unit": 7,
    "title": "Code Syntax Typing (HTML, CSS, JS, Python)",
    "level": "Advanced",
    "goal": "Mastery of Code Syntax Typing (HTML, CSS, JS, Python).",
    "lessonIds": [
      "typing-u7-l1",
      "typing-u7-l2",
      "typing-u7-l3",
      "typing-u7-l4",
      "typing-u7-l5"
    ]
  },
  {
    "id": "typing-u8",
    "unit": 8,
    "title": "Prose & Literature Flow Endurance",
    "level": "Advanced",
    "goal": "Mastery of Prose & Literature Flow Endurance.",
    "lessonIds": [
      "typing-u8-l1",
      "typing-u8-l2",
      "typing-u8-l3",
      "typing-u8-l4",
      "typing-u8-l5"
    ]
  },
  {
    "id": "typing-u9",
    "unit": 9,
    "title": "Peak Speed Sprint (100+ WPM Elite)",
    "level": "Master",
    "goal": "Mastery of Peak Speed Sprint (100+ WPM Elite).",
    "lessonIds": [
      "typing-u9-l1",
      "typing-u9-l2",
      "typing-u9-l3",
      "typing-u9-l4",
      "typing-u9-l5"
    ]
  }
];
  var LESSONS = {
  "typing-u1-l1": {
    "id": "typing-u1-l1",
    "unit": "typing-u1",
    "level": "beginner",
    "objective": "Place fingers correctly on the home row and type ASDF and JKL; without looking down.",
    "presentation": {
      "explanation": "Basecamp is the eight keys under your resting fingers: A S D F for the left hand, J K L ; for the right, thumbs floating over the space bar. Set your hands down and find the two small raised bumps under your left F and right J — those are trail markers, cut into the plastic specifically so climbers (your fingers) can find home in total darkness without ever looking down. From here, every finger claims exactly one key and never wanders from it at rest: left pinky on A, ring on S, middle on D, index on F; right index on J, middle on K, ring on L, pinky on semicolon. The whole discipline of touch typing is built on this one habit — if your eyes are on the keyboard, you're climbing blind and slow; if your fingers can feel their way home, you're climbing fast and safe. Rest your fingertips on the eight keys right now, close your eyes, and press each one in order without peeking. That's the entire basecamp.",
      "examples": [
        {
          "passage": "asdf jkl;",
          "focus": "The pure basecamp: left hand across A S D F, right hand across J K L ;, no other keys involved."
        },
        {
          "passage": "aaa sss ddd fff",
          "focus": "Left-hand isolation — each finger presses its own key three times before moving on, building independent finger strength."
        },
        {
          "passage": "jjj kkk lll ;;;",
          "focus": "Right-hand isolation — same drill mirrored, including the pinky stretch to semicolon, the row's trickiest key."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "typing-u1-l1-q1",
          "type": "type-check",
          "prompt": "Basecamp check #1 — rest your fingers on home row and type this exactly: asdf jkl;",
          "answer": "asdf jkl;",
          "difficulty": 500
        },
        {
          "id": "typing-u1-l1-q2",
          "type": "multiple-choice",
          "prompt": "Which finger rests on the D key?",
          "options": [
            "Left index",
            "Left middle",
            "Left ring",
            "Left pinky"
          ],
          "answer": "Left middle",
          "difficulty": 500
        },
        {
          "id": "typing-u1-l1-q3",
          "type": "multiple-choice",
          "prompt": "What are the F and J bumps for?",
          "options": [
            "Decoration",
            "Letting your fingers find home row by feel, without looking down",
            "Marking which hand types faster",
            "Nothing, they are a manufacturing accident"
          ],
          "answer": "Letting your fingers find home row by feel, without looking down",
          "difficulty": 500
        },
        {
          "id": "typing-u1-l1-q4",
          "type": "type-check",
          "prompt": "Basecamp check #2 — type the right-hand isolation drill exactly: jjj kkk lll ;;;",
          "answer": "jjj kkk lll ;;;",
          "difficulty": 500
        }
      ]
    },
    "title": "Unit 1, Lesson 1: Foundational & Structural Mastery"
  },
  "typing-u1-l2": {
    "id": "typing-u1-l2",
    "unit": "typing-u1",
    "level": "beginner",
    "objective": "Type short home-row-only words with correct finger-to-key mapping.",
    "presentation": {
      "explanation": "Seven keys — A S D F J K L, no reaches beyond them yet — is a surprisingly livable neighborhood of English. Real words hide inside basecamp: dad, sad, lad, ask, flask, salad, and the pleasantly weird alfalfa (a crop word that happens to spell entirely in home-row letters — a, l, f, a, l, f, a). Typing real words instead of random letter drills matters because your fingers start building a different kind of memory: not 'D key, then A key, then D key' one press at a time, but the whole shape of the word 'dad' as a single fluid motion, the way you already say it as one sound instead of three. Keep your wrists low and relaxed, strike each key with a light tap instead of a stab, and let your pinky and ring fingers — usually the weakest, laziest typers of the bunch — pull their full share on 'a', 'l', and semicolon.",
      "examples": [
        {
          "passage": "dad sad lad",
          "focus": "Three short home-row words, left-hand heavy, building word-shape memory instead of letter-by-letter memory."
        },
        {
          "passage": "ask flask",
          "focus": "Introduces the right-hand K and left-hand F together in one word — an early cross-hand coordination test."
        },
        {
          "passage": "alfalfa",
          "focus": "A whole seven-letter real word using only A, L, F — proof that basecamp alone can already type something meaningful."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "typing-u1-l2-q1",
          "type": "type-check",
          "prompt": "Type this home-row word exactly: salad",
          "answer": "salad",
          "difficulty": 510
        },
        {
          "id": "typing-u1-l2-q2",
          "type": "type-check",
          "prompt": "Type this short home-row phrase exactly: dad and lad",
          "answer": "dad and lad",
          "difficulty": 510
        },
        {
          "id": "typing-u1-l2-q3",
          "type": "multiple-choice",
          "prompt": "Which of these is a real English word typeable using only home-row letters A S D F J K L?",
          "options": [
            "alfalfa",
            "bread",
            "yellow",
            "quick"
          ],
          "answer": "alfalfa",
          "difficulty": 510
        },
        {
          "id": "typing-u1-l2-q4",
          "type": "type-check",
          "prompt": "Type this exactly: ask a lad",
          "answer": "ask a lad",
          "difficulty": 510
        }
      ]
    },
    "title": "Unit 1, Lesson 2: Foundational & Structural Mastery"
  },
  "typing-u1-l3": {
    "id": "typing-u1-l3",
    "unit": "typing-u1",
    "level": "beginner",
    "objective": "Build home-row muscle memory to 15+ WPM with under 5 percent error rate.",
    "presentation": {
      "explanation": "Speed on basecamp isn't about typing faster — it's about typing smoother. Climbers who rush a familiar route stumble; climbers who move at one calm, unbroken pace cover the same ground quicker and don't fall. The same is true here: a jerky burst-then-pause rhythm (fast, fast, STOP, fix a mistake, fast, fast, STOP) is almost always slower start-to-finish than a steady, even pace, because every pause and every backspace costs far more time than the letter would have taken to type correctly the first time. Fifteen words per minute sounds slow, but at the home-row stage it's a meaningful milestone — it means your fingers are starting to move ahead of your conscious thought, striking the next key while you're still 'reading' the current one. Two rules get you there: keep your eyes on the source text, never the keyboard, and when you make an error, don't panic-correct mid-word — finish the word, then fix it. The live Adaptive Speed Drill below this lesson clocks your real WPM and accuracy on rotating passages, so you can watch this milestone happen for real.",
      "examples": [
        {
          "passage": "a lad",
          "focus": "Deliberately trivial two-word passage — the goal here is rhythm, not challenge: type it five times in a row at one unbroken pace."
        },
        {
          "passage": "a sad lad asks",
          "focus": "A slightly longer phrase to practice not pausing between words — the space bar reach should feel as automatic as any letter key."
        },
        {
          "passage": "add a flask",
          "focus": "Doubled letters (dd) test whether you can strike the same key twice in a row without hesitating, a common speed bottleneck."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "typing-u1-l3-q1",
          "type": "multiple-choice",
          "prompt": "Which typing habit costs more overall time: a steady, unbroken pace with occasional small errors, or a fast-stop-fix-fast rhythm?",
          "options": [
            "The fast-stop-fix rhythm is always faster",
            "A steady, unbroken pace, because pauses and corrections cost more time than they save",
            "Speed and rhythm make no difference to total time",
            "Looking at the keyboard is always faster regardless of rhythm"
          ],
          "answer": "A steady, unbroken pace, because pauses and corrections cost more time than they save",
          "difficulty": 520
        },
        {
          "id": "typing-u1-l3-q2",
          "type": "type-check",
          "prompt": "Type this at a steady, unbroken pace: add a flask",
          "answer": "add a flask",
          "difficulty": 520
        },
        {
          "id": "typing-u1-l3-q3",
          "type": "multiple-choice",
          "prompt": "What should you do if you notice you've mistyped a letter in the middle of a word?",
          "options": [
            "Stop immediately and fix that one letter before continuing",
            "Restart the whole passage from the beginning",
            "Finish typing the word, then correct it",
            "Ignore it forever"
          ],
          "answer": "Finish typing the word, then correct it",
          "difficulty": 520
        },
        {
          "id": "typing-u1-l3-q4",
          "type": "type-check",
          "prompt": "Type this exactly: a sad lad asks",
          "answer": "a sad lad asks",
          "difficulty": 520
        }
      ]
    },
    "title": "Unit 1, Lesson 3: Foundational & Structural Mastery"
  },
  "typing-u1-l4": {
    "id": "typing-u1-l4",
    "unit": "typing-u1",
    "level": "beginner",
    "objective": "Return to home row automatically after any reach, without visual confirmation.",
    "presentation": {
      "explanation": "Every keystroke that isn't already on basecamp — even the thumb's short hop down to the space bar between words — is a reach, and every reach has to end the same way: snapping straight back to the exact home-row key that finger owns, with zero delay and zero glance downward. This is the 'return reflex,' and it's the single habit that makes every later unit (top row, bottom row, numbers) possible, because it means home row is always your finger's known, stable base of operations no matter how far it just traveled. Test it on yourself right now: type the word 'lad', and pay close attention to what your right thumb does immediately after — does it hover near the space bar, or does it snap fully back down? A thumb that lingers is a thumb that's about to slow down every single word that follows it. Build the reflex by exaggerating it at first: after every space bar press, consciously feel all four resting fingertips settle back onto A S D F and J K L; before you type the next letter. It will feel slow and deliberate now. It becomes instant later — that trade is the entire point of this lesson.",
      "examples": [
        {
          "passage": "lad flask ask",
          "focus": "Three home-row words separated by spaces — after each space-bar press, consciously confirm all eight fingers have returned to basecamp before continuing."
        },
        {
          "passage": "dad sad lad ask",
          "focus": "A slightly longer chain to practice the return reflex across multiple consecutive space-bar reaches without losing the habit partway through."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "typing-u1-l4-q1",
          "type": "multiple-choice",
          "prompt": "What is the \"return reflex\"?",
          "options": [
            "Pressing backspace after every mistake",
            "Automatically snapping fingers back to their home-row key after any reach, including the space bar",
            "Looking at the keyboard before every keystroke",
            "Typing the same word twice to confirm accuracy"
          ],
          "answer": "Automatically snapping fingers back to their home-row key after any reach, including the space bar",
          "difficulty": 530
        },
        {
          "id": "typing-u1-l4-q2",
          "type": "type-check",
          "prompt": "Type this, paying attention to your thumb snapping back after each space: dad sad lad ask",
          "answer": "dad sad lad ask",
          "difficulty": 530
        },
        {
          "id": "typing-u1-l4-q3",
          "type": "multiple-choice",
          "prompt": "Why does the return reflex matter for later units (top row, bottom row)?",
          "options": [
            "It doesn't — it only matters for home row",
            "It keeps home row a stable, reliable base every finger can return to no matter how far it just reached",
            "It makes the keyboard physically easier to see",
            "It only helps with number keys"
          ],
          "answer": "It keeps home row a stable, reliable base every finger can return to no matter how far it just reached",
          "difficulty": 530
        }
      ]
    },
    "title": "Unit 1, Lesson 4: Foundational & Structural Mastery"
  },
  "typing-u1-l5": {
    "id": "typing-u1-l5",
    "unit": "typing-u1",
    "level": "beginner",
    "objective": "Pass a home-row-only speed and accuracy checkpoint.",
    "presentation": {
      "explanation": "Basecamp is fully established. This checkpoint mixes everything from the unit — finger placement, home-row-only real words, steady rhythm, and the return reflex — into one final pass before Unit 2 sends you reaching up to the top row for the first time. There's no new technique here, only the demand that the last four lessons' habits hold up together, under a little more length and a little less hand-holding. Read every passage fully before you start typing it, keep your eyes off the keyboard, and let any small errors go until the word is finished rather than stopping to fix them mid-word.",
      "examples": [
        {
          "passage": "a sad lad asks for a flask",
          "focus": "Combines multiple home-row words with several space-bar return-reflex reps in a single passage."
        },
        {
          "passage": "add a salad; ask a lad",
          "focus": "Introduces the semicolon reach (right pinky) inside a full home-row-only sentence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "typing-u1-l5-q1",
          "type": "type-check",
          "prompt": "Boss check #1 — type exactly: a sad lad asks for a flask",
          "answer": "a sad lad asks for a flask",
          "difficulty": 540
        },
        {
          "id": "typing-u1-l5-q2",
          "type": "type-check",
          "prompt": "Boss check #2 — type exactly: add a salad; ask a lad",
          "answer": "add a salad; ask a lad",
          "difficulty": 540
        },
        {
          "id": "typing-u1-l5-q3",
          "type": "multiple-choice",
          "prompt": "Which finger types the semicolon key?",
          "options": [
            "Right index",
            "Right middle",
            "Right ring",
            "Right pinky"
          ],
          "answer": "Right pinky",
          "difficulty": 540
        },
        {
          "id": "typing-u1-l5-q4",
          "type": "multiple-choice",
          "prompt": "What is the main goal of Unit 1 as a whole?",
          "options": [
            "Typing as fast as possible regardless of accuracy",
            "Memorizing the QWERTY key layout by sight",
            "Establishing home row as an automatic, reliable base you never need to look at",
            "Learning the top and bottom rows early"
          ],
          "answer": "Establishing home row as an automatic, reliable base you never need to look at",
          "difficulty": 540
        },
        {
          "id": "typing-u1-l5-q5",
          "type": "short-answer",
          "prompt": "In one or two sentences, explain the \"return reflex\" and why it matters before moving on to reaches beyond home row.",
          "answer": "The return reflex is automatically snapping every finger back to its home-row key after any reach, including the space bar, so home row stays a stable, reliable base no matter how far a finger just traveled — without it, later reaches to the top and bottom rows would have nothing steady to return to.",
          "difficulty": 550
        }
      ]
    },
    "title": "Unit 1, Lesson 5: Foundational & Structural Mastery"
  },
  "typing-u2-l1": {
    "id": "typing-u2-l1",
    "unit": "typing-u2",
    "level": "beginner",
    "objective": "Reach from home row to the top row keys Q W E R with correct fingers.",
    "presentation": {
      "explanation": "Basecamp is secure — now the climb up the left face begins. Each left-hand finger reaches straight up from its home key to claim exactly one new key: left pinky reaches from A up to Q, left ring from S up to W, left middle from D up to E. The index finger is the outlier — it doesn't reach straight up from F, it reaches up and slightly LEFT to claim R, fanning out because the index finger is already responsible for the widest territory of any finger on the hand. The rule that makes this climbable at all is the same return reflex from Basecamp: reach up, strike the key, snap immediately back down to home row before the next letter. A finger that lingers on the top row loses its bearings for the next reach, the way a climber who doesn't return to a stable stance between moves gets shaky fast.",
      "examples": [
        {
          "passage": "qqq www eee rrr",
          "focus": "Pure top-row isolation for the four new keys — reach up, strike, snap back to home row between each triplet."
        },
        {
          "passage": "dear",
          "focus": "A real word combining a fresh reach (e, r) with home-row letters (d, a) — the first proof this climb pays off."
        },
        {
          "passage": "wear a",
          "focus": "Introduces w in a real short phrase, testing the return reflex across a space-bar reach too."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "typing-u2-l1-q1",
          "type": "type-check",
          "prompt": "Reach check #1 — type exactly: qqq www eee rrr",
          "answer": "qqq www eee rrr",
          "difficulty": 550
        },
        {
          "id": "typing-u2-l1-q2",
          "type": "multiple-choice",
          "prompt": "Which finger reaches up from D to strike E?",
          "options": [
            "Left index",
            "Left middle",
            "Left ring",
            "Left pinky"
          ],
          "answer": "Left middle",
          "difficulty": 550
        },
        {
          "id": "typing-u2-l1-q3",
          "type": "type-check",
          "prompt": "Reach check #2 — type exactly: dear",
          "answer": "dear",
          "difficulty": 550
        },
        {
          "id": "typing-u2-l1-q4",
          "type": "multiple-choice",
          "prompt": "Why does the left index finger reach up-and-left to R instead of straight up from F?",
          "options": [
            "It is a typo in the keyboard layout",
            "The index finger covers the widest territory of any finger, so its reaches fan out rather than stay in a single column",
            "R is not actually typed by the index finger",
            "It only applies to left-handed typists"
          ],
          "answer": "The index finger covers the widest territory of any finger, so its reaches fan out rather than stay in a single column",
          "difficulty": 550
        }
      ]
    },
    "title": "Unit 2, Lesson 1: Foundational & Structural Mastery"
  },
  "typing-u2-l2": {
    "id": "typing-u2-l2",
    "unit": "typing-u2",
    "level": "beginner",
    "objective": "Reach from home row to the top row keys T Y U I with correct fingers.",
    "presentation": {
      "explanation": "The climb crosses to the mountain's center ridge. T and Y sit side by side at the very middle of the keyboard, and they're claimed by the two index fingers reaching toward each other from opposite hands — left index up-and-right from F to T, right index up-and-left from J to Y — meeting almost nose-to-nose at the top of the climb. U is also a right-index reach, but a more direct one, straight up from J. I belongs to the right middle finger, straight up from K, mirroring how E belonged to the left middle finger in the last lesson. Notice the pattern forming: index fingers do double duty (R and T on the left, Y and U on the right) because they're the strongest, most mobile fingers, while ring and pinky stick to a single reach each. Once T Y U I are solid, words like quiet and write become reachable — the first real payoff of combining both hands' new reaches in a single word.",
      "examples": [
        {
          "passage": "ttt yyy uuu iii",
          "focus": "Top-row isolation for the four new keys, split evenly between the two index fingers and the right middle finger."
        },
        {
          "passage": "quiet",
          "focus": "A five-letter word using q (Unit 2 lesson 1), u, i, e, t — every new-ish key from this unit and the last working together."
        },
        {
          "passage": "write",
          "focus": "w, r, i, t, e — another word proving the left and right index reaches combine naturally with the rest of the top row."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "typing-u2-l2-q1",
          "type": "type-check",
          "prompt": "Reach check #1 — type exactly: ttt yyy uuu iii",
          "answer": "ttt yyy uuu iii",
          "difficulty": 555
        },
        {
          "id": "typing-u2-l2-q2",
          "type": "multiple-choice",
          "prompt": "Which two keys does the LEFT index finger cover between Units 1 and 2 so far?",
          "options": [
            "F and G",
            "R and T",
            "E and I",
            "Q and W"
          ],
          "answer": "R and T",
          "difficulty": 555
        },
        {
          "id": "typing-u2-l2-q3",
          "type": "type-check",
          "prompt": "Reach check #2 — type exactly: quiet",
          "answer": "quiet",
          "difficulty": 555
        },
        {
          "id": "typing-u2-l2-q4",
          "type": "type-check",
          "prompt": "Reach check #3 — type exactly: write",
          "answer": "write",
          "difficulty": 555
        },
        {
          "id": "typing-u2-l2-q5",
          "type": "multiple-choice",
          "prompt": "Which finger types I?",
          "options": [
            "Right index",
            "Right middle",
            "Right ring",
            "Right pinky"
          ],
          "answer": "Right middle",
          "difficulty": 550
        }
      ]
    },
    "title": "Unit 2, Lesson 2: Foundational & Structural Mastery"
  },
  "typing-u2-l3": {
    "id": "typing-u2-l3",
    "unit": "typing-u2",
    "level": "beginner",
    "objective": "Reach from home row to O P and type mixed home-plus-top-row words.",
    "presentation": {
      "explanation": "Two keys left on the summit ridge: O, claimed by the right ring finger reaching up from L, and P, claimed by the right pinky reaching up and further right — the longest single reach of the whole top row, since P sits past the edge of the home-row footprint entirely. With O and P in place, the full top row is now open territory, and real vocabulary opens up fast: spare, adopt, trade, quote — words that pull letters from across both hands and both rows in a single flowing motion. This is also the first lesson where it's worth typing a short multi-word phrase instead of isolated words, because stringing reaches together across several words in a row — without a mid-sentence pause to 'find' the next key — is exactly the skill Unit 2's final checkpoint will demand.",
      "examples": [
        {
          "passage": "ooo ppp",
          "focus": "Isolation for the final two top-row keys — P is the longest reach on the row, so give the pinky extra care here."
        },
        {
          "passage": "spare a",
          "focus": "A real word (spare) plus a return-reflex space-bar rep."
        },
        {
          "passage": "a trader wrote a quote for a rare opal",
          "focus": "A full phrase using every top-row letter taught so far (q w e r t y u i o p) woven through home-row words."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "typing-u2-l3-q1",
          "type": "type-check",
          "prompt": "Reach check #1 — type exactly: ooo ppp",
          "answer": "ooo ppp",
          "difficulty": 560
        },
        {
          "id": "typing-u2-l3-q2",
          "type": "multiple-choice",
          "prompt": "Which finger reaches to P, the longest single reach on the top row?",
          "options": [
            "Right index",
            "Right middle",
            "Right ring",
            "Right pinky"
          ],
          "answer": "Right pinky",
          "difficulty": 560
        },
        {
          "id": "typing-u2-l3-q3",
          "type": "type-check",
          "prompt": "Reach check #2 — type exactly: adopt",
          "answer": "adopt",
          "difficulty": 560
        },
        {
          "id": "typing-u2-l3-q4",
          "type": "type-check",
          "prompt": "Reach check #3 — type exactly: a trader wrote a quote for a rare opal",
          "answer": "a trader wrote a quote for a rare opal",
          "difficulty": 570
        },
        {
          "id": "typing-u2-l3-q5",
          "type": "multiple-choice",
          "prompt": "True or false: after Lesson 3, every key on the top row (Q through P) has now been introduced.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True",
          "difficulty": 555
        }
      ]
    },
    "title": "Unit 2, Lesson 3: Foundational & Structural Mastery"
  },
  "typing-u2-l4": {
    "id": "typing-u2-l4",
    "unit": "typing-u2",
    "level": "beginner",
    "objective": "Type full sentences using only home row and top row letters.",
    "presentation": {
      "explanation": "The whole upper mountain face — home row plus the entire top row — is now climbable, so this lesson trades isolated words for full sentences, the real terrain typing exists to cross. Two habits matter more here than at any point so far. First, don't let your eyes drop to the keyboard to 'check' a reach you already know how to make — trust the finger, not the eye. Second, treat the space bar between words as just another reach with its own return reflex, not a pause to catch your breath; a fluent typist's thumb taps space at the exact same steady rhythm as every letter key around it. Read each full sentence once before you start so you're not discovering the words as you type them — that single read-through is what lets your hands move at a steady pace instead of a stop-and-go crawl.",
      "examples": [
        {
          "passage": "a wise trader saw a rare opal for sale",
          "focus": "A full sentence using only home-row and top-row letters, testing sustained rhythm across nine words."
        },
        {
          "passage": "jake quietly typed a letter",
          "focus": "A second full sentence leaning on the right-hand reaches (j, q, u, y, p) alongside familiar home-row words."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "typing-u2-l4-q1",
          "type": "type-check",
          "prompt": "Sentence check #1 — type exactly: a wise trader saw a rare opal for sale",
          "answer": "a wise trader saw a rare opal for sale",
          "difficulty": 580
        },
        {
          "id": "typing-u2-l4-q2",
          "type": "type-check",
          "prompt": "Sentence check #2 — type exactly: jake quietly typed a letter",
          "answer": "jake quietly typed a letter",
          "difficulty": 580
        },
        {
          "id": "typing-u2-l4-q3",
          "type": "multiple-choice",
          "prompt": "According to this lesson, how should the space bar be treated?",
          "options": [
            "As a pause to rest between words",
            "As just another reach with its own steady, unhesitating rhythm",
            "As optional if the next word starts with a vowel",
            "As a key that should be struck slower than letter keys"
          ],
          "answer": "As just another reach with its own steady, unhesitating rhythm",
          "difficulty": 560
        },
        {
          "id": "typing-u2-l4-q4",
          "type": "multiple-choice",
          "prompt": "Why does this lesson recommend reading a full sentence once before typing it?",
          "options": [
            "To memorize it and type from memory instead",
            "So your hands move at a steady pace instead of discovering the words as you go, which causes stop-and-go typing",
            "It is not actually recommended",
            "To check for spelling errors in the passage itself"
          ],
          "answer": "So your hands move at a steady pace instead of discovering the words as you go, which causes stop-and-go typing",
          "difficulty": 560
        }
      ]
    },
    "title": "Unit 2, Lesson 4: Foundational & Structural Mastery"
  },
  "typing-u2-l5": {
    "id": "typing-u2-l5",
    "unit": "typing-u2",
    "level": "beginner",
    "objective": "Pass a home-and-top-row speed and accuracy checkpoint.",
    "presentation": {
      "explanation": "The upper mountain face is fully mapped. This checkpoint is the summit push for everything Unit 2 covered — all ten top-row keys, the fan-out index reaches to R and T and Y and U, the long pinky stretch to P, and full sustained sentences that never break rhythm at the space bar. There's no new technique waiting here, only the demand that every reach from the last four lessons holds up together, at a slightly higher pace than any single lesson asked for on its own. Beyond this checkpoint, Unit 3 heads down the mountain's other face to the bottom row — the last unclimbed territory before the full alphabet is open.",
      "examples": [
        {
          "passage": "a trader wore a quiet coat and sold a rare jewel",
          "focus": "Long combined passage mixing home row and every top-row key at once (note: uses only letters taught through this unit)."
        },
        {
          "passage": "write a quote for a rare opal",
          "focus": "A shorter, faster-paced passage for a timed speed rep."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "typing-u2-l5-q1",
          "type": "type-check",
          "prompt": "Summit check #1 — type exactly: write a quote for a rare opal",
          "answer": "write a quote for a rare opal",
          "difficulty": 590
        },
        {
          "id": "typing-u2-l5-q2",
          "type": "type-check",
          "prompt": "Summit check #2 — type exactly: a wise trader saw a rare opal for sale",
          "answer": "a wise trader saw a rare opal for sale",
          "difficulty": 590
        },
        {
          "id": "typing-u2-l5-q3",
          "type": "multiple-choice",
          "prompt": "Which finger types both R and T?",
          "options": [
            "Left index",
            "Left middle",
            "Right index",
            "Left ring"
          ],
          "answer": "Left index",
          "difficulty": 570
        },
        {
          "id": "typing-u2-l5-q4",
          "type": "multiple-choice",
          "prompt": "What is the main goal of Unit 2 as a whole?",
          "options": [
            "Learning number and symbol keys",
            "Extending home row up to the full top row while keeping the return reflex intact",
            "Learning the bottom row",
            "Reaching 100+ WPM"
          ],
          "answer": "Extending home row up to the full top row while keeping the return reflex intact",
          "difficulty": 570
        },
        {
          "id": "typing-u2-l5-q5",
          "type": "short-answer",
          "prompt": "Name the two top-row keys reached by the left index finger and the two reached by the right index finger.",
          "answer": "The left index finger reaches R and T; the right index finger reaches Y and U.",
          "difficulty": 580
        }
      ]
    },
    "title": "Unit 2, Lesson 5: Foundational & Structural Mastery"
  },
  "typing-u3-l1": {
    "id": "typing-u3-l1",
    "unit": "typing-u3",
    "level": "beginner",
    "objective": "Reach from home row to the row's own missing keys, G and H, with correct fingers.",
    "presentation": {
      "explanation": "Basecamp had a blind spot: G and H sit directly on home row itself, in the flat gap between F and J, but Unit 1 skipped straight past them to keep that first lesson to a clean, memorable 8 keys. Time to close the gap. Unlike every reach so far, this one isn't up or down — it's sideways, along the row you're already resting on. The left index finger, already anchored on F, stretches one key right to claim G. The right index finger, already anchored on J, stretches one key left to claim H. Both fingers do this the same way: without lifting off home row, just leaning the fingertip inward toward the keyboard's center, then snapping back to F or J immediately after. It's the shortest reach in the entire curriculum, but it's easy to skip in your head precisely because it doesn't feel like 'reaching' the way climbing to the top or bottom row does — which is exactly why it gets missed if you don't drill it deliberately, the way this lesson does now.",
      "examples": [
        {
          "passage": "ggg hhh",
          "focus": "Pure isolation for the two new keys — left index leans right to G, right index leans left to H, snapping back to F/J each time."
        },
        {
          "passage": "high",
          "focus": "A real word using both new keys plus letters already known (i from top row) — h, i, g, h."
        },
        {
          "passage": "the light of day",
          "focus": "A full home-row-completion sentence: every word uses only letters taught through this lesson (home row, top row, and now g/h) — no bottom-row letters yet."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "typing-u3-l1-q1",
          "type": "type-check",
          "prompt": "Home-row-completion check #1 — type exactly: ggg hhh",
          "answer": "ggg hhh",
          "difficulty": 590
        },
        {
          "id": "typing-u3-l1-q2",
          "type": "multiple-choice",
          "prompt": "Which finger reaches to G?",
          "options": [
            "Left index",
            "Left middle",
            "Right index",
            "Left pinky"
          ],
          "answer": "Left index",
          "difficulty": 590
        },
        {
          "id": "typing-u3-l1-q3",
          "type": "type-check",
          "prompt": "Home-row-completion check #2 — type exactly: high",
          "answer": "high",
          "difficulty": 590
        },
        {
          "id": "typing-u3-l1-q4",
          "type": "multiple-choice",
          "prompt": "Why is the reach to G and H easy to under-drill compared to a top- or bottom-row reach?",
          "options": [
            "It is physically impossible to get wrong",
            "It stays on home row itself (a sideways lean, not an up/down reach), so it does not feel like \"reaching\" the way climbing a row does",
            "G and H are never used in real English words",
            "It requires looking at the keyboard every time"
          ],
          "answer": "It stays on home row itself (a sideways lean, not an up/down reach), so it does not feel like \"reaching\" the way climbing a row does",
          "difficulty": 590
        },
        {
          "id": "typing-u3-l1-q5",
          "type": "type-check",
          "prompt": "Home-row-completion check #3 — type exactly: the light of day",
          "answer": "the light of day",
          "difficulty": 600
        }
      ]
    },
    "title": "Unit 3, Lesson 1: Foundational & Structural Mastery"
  },
  "typing-u3-l2": {
    "id": "typing-u3-l2",
    "unit": "typing-u3",
    "level": "beginner",
    "objective": "Reach from home row to bottom row keys Z X C with correct fingers.",
    "presentation": {
      "explanation": "With basecamp's own footprint complete, the descent begins: the climb from Unit 2 reverses, and the same three left-hand fingers that reached straight UP to Q W E now reach straight DOWN to Z X C. Left pinky drops from A to Z, left ring drops from S to X, left middle drops from D to C — a mirror image of Unit 2 Lesson 1's upward reach, just aimed at the mountain's lower face instead of its upper one. The return reflex matters even more here than on the way up, because a finger that lingers on the bottom row has the furthest distance of any reach to travel back home. With Z, X, and C open, real vocabulary already grows fast: 'exact' and 'size' each unlock a problem letter (x and z) inside an otherwise-familiar word.",
      "examples": [
        {
          "passage": "zzz xxx ccc",
          "focus": "Bottom-row isolation for the three new left-hand keys — reach straight down, strike, snap back to home row."
        },
        {
          "passage": "exact",
          "focus": "A real word putting the new X to work alongside already-known letters."
        },
        {
          "passage": "a cat chased a lizard",
          "focus": "A full sentence using Z, X, C alongside every letter taught so far — no V B N M yet, those arrive next lesson."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "typing-u3-l2-q1",
          "type": "type-check",
          "prompt": "Descent check #1 — type exactly: zzz xxx ccc",
          "answer": "zzz xxx ccc",
          "difficulty": 600
        },
        {
          "id": "typing-u3-l2-q2",
          "type": "multiple-choice",
          "prompt": "Which finger reaches down from S to strike X?",
          "options": [
            "Left pinky",
            "Left ring",
            "Left middle",
            "Left index"
          ],
          "answer": "Left ring",
          "difficulty": 600
        },
        {
          "id": "typing-u3-l2-q3",
          "type": "type-check",
          "prompt": "Descent check #2 — type exactly: exact",
          "answer": "exact",
          "difficulty": 600
        },
        {
          "id": "typing-u3-l2-q4",
          "type": "type-check",
          "prompt": "Descent check #3 — type exactly: a cat chased a lizard",
          "answer": "a cat chased a lizard",
          "difficulty": 610
        },
        {
          "id": "typing-u3-l2-q5",
          "type": "multiple-choice",
          "prompt": "Which finger reaches down from A to strike Z?",
          "options": [
            "Left pinky",
            "Left ring",
            "Left middle",
            "Left index"
          ],
          "answer": "Left pinky",
          "difficulty": 590
        }
      ]
    },
    "title": "Unit 3, Lesson 2: Foundational & Structural Mastery"
  },
  "typing-u3-l3": {
    "id": "typing-u3-l3",
    "unit": "typing-u3",
    "level": "beginner",
    "objective": "Reach from home row to bottom row keys V B N M with correct fingers.",
    "presentation": {
      "explanation": "The final ledge. V and B both belong to the left index finger — already the hardest-working finger on the hand, since it also covers R and T from the top row. V is a near-straight reach down from F; B is a bigger stretch further down and slightly right, borrowed territory from the same column as G and T. On the right hand, N and M both belong to the right index finger, mirroring the left: N reaches down-left from J (in the same column as H and Y), and M reaches down from J's neighboring column (the same one as U). With this lesson, all 26 letters of the alphabet are finally open — which is exactly why its checkpoint includes a sentence that uses every single one of them at least once.",
      "examples": [
        {
          "passage": "vvv bbb nnn mmm",
          "focus": "Bottom-row isolation for the final four keys — two more reaches for each index finger, the hand's busiest workers."
        },
        {
          "passage": "a big van",
          "focus": "A short real phrase putting V and B to work."
        },
        {
          "passage": "the quick brown fox jumps over a lazy dog",
          "focus": "The classic pangram — the first sentence in this curriculum that can use every letter of the alphabet, now that V B N M are open."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "typing-u3-l3-q1",
          "type": "type-check",
          "prompt": "Final ledge check #1 — type exactly: vvv bbb nnn mmm",
          "answer": "vvv bbb nnn mmm",
          "difficulty": 610
        },
        {
          "id": "typing-u3-l3-q2",
          "type": "multiple-choice",
          "prompt": "Which finger reaches to both N and M?",
          "options": [
            "Right index",
            "Right middle",
            "Right ring",
            "Right pinky"
          ],
          "answer": "Right index",
          "difficulty": 610
        },
        {
          "id": "typing-u3-l3-q3",
          "type": "type-check",
          "prompt": "Final ledge check #2 — type exactly: a big van",
          "answer": "a big van",
          "difficulty": 600
        },
        {
          "id": "typing-u3-l3-q4",
          "type": "multiple-choice",
          "prompt": "Which finger is responsible for FOUR different keys once R, T, V, and B are all counted?",
          "options": [
            "Left index",
            "Left middle",
            "Right index",
            "Left ring"
          ],
          "answer": "Left index",
          "difficulty": 610
        },
        {
          "id": "typing-u3-l3-q5",
          "type": "type-check",
          "prompt": "Final ledge check #3 — type exactly: the quick brown fox jumps over a lazy dog",
          "answer": "the quick brown fox jumps over a lazy dog",
          "difficulty": 620
        }
      ]
    },
    "title": "Unit 3, Lesson 3: Foundational & Structural Mastery"
  },
  "typing-u3-l4": {
    "id": "typing-u3-l4",
    "unit": "typing-u3",
    "level": "beginner",
    "objective": "Type full-alphabet sentences using all three rows at 25+ WPM with under 5 percent error rate.",
    "presentation": {
      "explanation": "Every key on the keyboard is now home territory, so this lesson is entirely about fluency instead of new reaches: typing full sentences drawn from all three rows at a real, measured speed target for the first time — 25 words per minute, with fewer than 1 error in every 20 words typed. The habits that get you there are the same ones built lesson by lesson since Unit 1: read the passage once before typing so your hands move at a steady pace instead of discovering words as you go, let the return reflex snap every finger home after every reach no matter which row it came from, and never stop mid-word to fix a small error — finish the word first. The pangram from the last lesson is worth re-typing here specifically for speed, since it's a genuinely representative full-alphabet passage rather than an artificial drill.",
      "examples": [
        {
          "passage": "the quick brown fox jumps over a lazy dog",
          "focus": "The pangram again, this time timed — every letter of the alphabet in one flowing sentence, a real speed benchmark."
        },
        {
          "passage": "a big van chased a lizard past the high garden gate",
          "focus": "A second full-alphabet-style sentence combining vocabulary from every unit so far."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "typing-u3-l4-q1",
          "type": "type-check",
          "prompt": "Speed check #1 — type exactly: the quick brown fox jumps over a lazy dog",
          "answer": "the quick brown fox jumps over a lazy dog",
          "difficulty": 630
        },
        {
          "id": "typing-u3-l4-q2",
          "type": "type-check",
          "prompt": "Speed check #2 — type exactly: a big van chased a lizard past the high garden gate",
          "answer": "a big van chased a lizard past the high garden gate",
          "difficulty": 640
        },
        {
          "id": "typing-u3-l4-q3",
          "type": "multiple-choice",
          "prompt": "What is this unit's WPM benchmark?",
          "options": [
            "15+ WPM",
            "25+ WPM",
            "50+ WPM",
            "100+ WPM"
          ],
          "answer": "25+ WPM",
          "difficulty": 610
        },
        {
          "id": "typing-u3-l4-q4",
          "type": "multiple-choice",
          "prompt": "What should you do the first time you see a new passage, before typing it?",
          "options": [
            "Start typing immediately for the fastest possible time",
            "Read it once fully so your hands move at a steady pace instead of discovering words as you type",
            "Type it backwards first as a warm-up",
            "Skip to the last word first"
          ],
          "answer": "Read it once fully so your hands move at a steady pace instead of discovering words as you type",
          "difficulty": 610
        }
      ]
    },
    "title": "Unit 3, Lesson 4: Foundational & Structural Mastery"
  },
  "typing-u3-l5": {
    "id": "typing-u3-l5",
    "unit": "typing-u3",
    "level": "beginner",
    "objective": "Pass a full-alphabet speed and accuracy checkpoint.",
    "presentation": {
      "explanation": "The whole mountain — home row, its own completed footprint at G and H, the top row, and the bottom row — is fully climbed. This checkpoint mixes everything from the unit: the sideways reach to G and H, the downward reaches to Z X C and V B N M, finger-assignment recall across all three rows, and a full-alphabet speed passage at the 25+ WPM benchmark. There's no new technique waiting here, only the demand that every reach from Units 1 through 3 holds up together. Beyond this checkpoint, Unit 4 leaves the letter keys behind entirely and heads to the numbers and symbols row.",
      "examples": [
        {
          "passage": "the quick brown fox jumps over a lazy dog",
          "focus": "The full pangram, one more time, as the unit's signature fluency test."
        },
        {
          "passage": "a high garden gate; a big van; a lazy fox",
          "focus": "A varied passage mixing punctuation, G/H, bottom-row letters, and earlier vocabulary in one pass."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "typing-u3-l5-q1",
          "type": "type-check",
          "prompt": "Summit check #1 — type exactly: the quick brown fox jumps over a lazy dog",
          "answer": "the quick brown fox jumps over a lazy dog",
          "difficulty": 640
        },
        {
          "id": "typing-u3-l5-q2",
          "type": "type-check",
          "prompt": "Summit check #2 — type exactly: a high garden gate; a big van; a lazy fox",
          "answer": "a high garden gate; a big van; a lazy fox",
          "difficulty": 650
        },
        {
          "id": "typing-u3-l5-q3",
          "type": "multiple-choice",
          "prompt": "Which finger reaches to H?",
          "options": [
            "Left index",
            "Right index",
            "Right middle",
            "Right pinky"
          ],
          "answer": "Right index",
          "difficulty": 610
        },
        {
          "id": "typing-u3-l5-q4",
          "type": "multiple-choice",
          "prompt": "What is the main goal of Unit 3 as a whole?",
          "options": [
            "Learning the numbers row",
            "Completing home row with G/H and opening the bottom row so all 26 letters are reachable",
            "Reaching 100+ WPM",
            "Learning punctuation-heavy typing"
          ],
          "answer": "Completing home row with G/H and opening the bottom row so all 26 letters are reachable",
          "difficulty": 610
        },
        {
          "id": "typing-u3-l5-q5",
          "type": "short-answer",
          "prompt": "Explain in one or two sentences why G and H were taught separately from the rest of Unit 3's bottom-row keys instead of grouped with Z X C V B N M.",
          "answer": "G and H physically sit on home row itself, directly between F and J, so reaching them is a sideways lean rather than an up- or down-row reach like Z X C V B N M — they complete home row's own footprint rather than being part of the descent to the bottom row.",
          "difficulty": 630
        }
      ]
    },
    "title": "Unit 3, Lesson 5: Foundational & Structural Mastery"
  },
  "typing-u4-l1": {
    "id": "typing-u4-l1",
    "unit": "typing-u4",
    "level": "intermediate",
    "objective": "Master touch typing on the left-hand number row (1, 2, 3, 4, 5) using strict finger assignments without glancing at the physical keyboard.",
    "difficulty": 900,
    "prerequisites": [
      "typing-u3-l5"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "typing-u1-l1",
        "typing-u2-l1"
      ]
    },
    "presentation": {
      "explanation": "Reaching up from the home row to the number row is the longest reach on a standard QWERTY keyboard. Because the distance is two full rows up from home base, **maintaining your anchor finger (F or J) is critical** so your hand never gets lost in space.\n\n1. **Left-Hand Finger Assignments (Strict Muscle Memory):**\n   - **Left Pinky (A):** Reaches up and slightly left to **1**.\n   - **Left Ring (S):** Reaches up to **2**.\n   - **Left Middle (D):** Reaches up to **3**.\n   - **Left Index (F):** Reaches up to **4** and stretches slightly right to **5**.\n\n2. **The Golden Anchor Technique:**\n   - When your left index reaches up to strike **4** or **5**, keep your pinky floating lightly above **A** or your thumb resting on the spacebar. **Never lift your entire forearm off the desk!**\n   - Immediately after striking the number, snap the finger back to its home row position (**A-S-D-F**).\n\n3. **Why Touch Typing Numbers Matters:**\n   - Looking down at the keyboard to find numbers breaks your reading flow, causes visual disorientation, and drops your effective WPM by over 50%.",
      "examples": [
        "Left hand 1-2-3-4-5 reach drill: 'a1a s2s d3d f4f f5f'",
        "Mixed word and number combinations: 'feed 45 deer / 12 fast cats / 34 red cars / 15 safe doors'",
        "Snap-back technique: Strike 4 with left index -> immediately return index to the F bump."
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which biomechanical finger motion or rhythmic keystroke technique ensures peak speed and zero strain?",
          "options": [
            "Left Middle Finger",
            "Left Thumb",
            "Right Index Finger",
            "Left Index Finger"
          ],
          "answerIndex": 3,
          "explanation": "The left index finger reaches up to 4 and stretches right to 5."
        },
        {
          "prompt": "Which finger is assigned to strike the number '1'?",
          "options": [
            "Left Index Finger",
            "Left Thumb",
            "Left Pinky Finger",
            "Left Ring Finger"
          ],
          "answerIndex": 2,
          "explanation": "The left pinky controls the '1' key."
        },
        {
          "prompt": "What is the 'snap-back' rule when typing numbers?",
          "options": [
            "Press the spacebar with both thumbs",
            "Immediately return the striking finger to its home row key after pressing the number",
            "Look down to confirm the key was hit",
            "Leave all fingers on the number row permanently"
          ],
          "answerIndex": 1,
          "explanation": "Snapping back to home row maintains keyboard orientation without looking."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 16:",
          "options": [
            "Left Index Finger",
            "Left Ring Finger",
            "Right Middle Finger",
            "Left Middle Finger"
          ],
          "answerIndex": 3,
          "explanation": "Left middle finger controls '3' (above E/D)."
        },
        {
          "prompt": "Which finger strikes the number '2'?",
          "options": [
            "Left Index Finger",
            "Left Middle Finger",
            "Left Ring Finger",
            "Left Pinky"
          ],
          "answerIndex": 2,
          "explanation": "Left ring finger controls '2' (above W/S)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the left-hand fingers to their correct numbers:",
          "options": [
            "Pinky=5, Ring=4, Middle=3, Index=2 and 1",
            "Pinky=1, Ring=2, Middle=3, Index=4 and 5",
            "Index=1, Middle=2, Ring=3, Pinky=4 and 5",
            "Thumb=1, Index=2, Middle=3, Ring=4, Pinky=5"
          ],
          "answerIndex": 1,
          "explanation": "1=Pinky, 2=Ring, 3=Middle, 4 & 5=Index.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why should you never look down at the keyboard when typing numbers?",
          "options": [
            "Looking down breaks visual focus on the screen, disrupts rhythmic typing flow, and slows WPM",
            "Looking down increases typing speed",
            "It is forbidden by computer manufacturers",
            "Keyboards will turn off if you look at them"
          ],
          "answerIndex": 0,
          "explanation": "Blind touch typing preserves cognitive focus and continuous motor rhythm.",
          "type": "multiple-choice"
        },
        {
          "prompt": "To type '45', which finger(s) do you use?",
          "options": [
            "Right index finger",
            "Left pinky for 4, left ring for 5",
            "Left middle finger for 4, left index for 5",
            "Left index finger for both"
          ],
          "answerIndex": 3,
          "explanation": "The left index finger types both 4 and 5.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the primary anchor key for the left hand?",
          "options": [
            "The 'Caps Lock' key",
            "The '1' key",
            "The 'F' key with its raised tactile bump",
            "The 'Space' bar"
          ],
          "answerIndex": 2,
          "explanation": "The 'F' key bump is the tactile homing anchor.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In typing drills, what does 'd3d' practice?",
          "options": [
            "Deleting the letter D",
            "Reaching from D to 3 and snapping back to D with the left middle finger",
            "Double-spacing",
            "Pressing 3 with the thumb"
          ],
          "answerIndex": 1,
          "explanation": "D-to-3 extension and recovery drill.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 4, Lesson 1: Foundational & Structural Mastery"
  },
  "typing-u4-l2": {
    "id": "typing-u4-l2",
    "unit": "typing-u4",
    "level": "intermediate",
    "objective": "Master touch typing on the right-hand number row (6, 7, 8, 9, 0, -, =) using precise finger assignments and the J tactile anchor.",
    "difficulty": 920,
    "prerequisites": [
      "typing-u4-l1"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "typing-u4-l1",
        "typing-u1-l2"
      ]
    },
    "presentation": {
      "explanation": "The right hand is responsible for the upper half of the number row (6 through 0) plus the hyphen/minus (-) and equals (=) keys.\n\n1. **Right-Hand Finger Assignments:**\n   - **Right Index (J):** Reaches up and slightly left to **6**, and up to **7**.\n   - **Right Middle (K):** Reaches up to **8**.\n   - **Right Ring (L):** Reaches up to **9**.\n   - **Right Pinky (;):** Reaches up to **0**, **-** (minus/hyphen), and **=** (equals).\n\n2. **The J-Anchor Pivot:**\n   - When your right index stretches left to hit **6**, keep your right pinky resting near **;** so your hand maintains its coordinate grid.\n   - The index finger covers two columns (**6 and 7**), exactly like the left index covers **4 and 5**.\n\n3. **Full Number Row Coordination (1 to 0):**\n   - Left hand: 1 (pinky), 2 (ring), 3 (middle), 4 & 5 (index).\n   - Right hand: 6 & 7 (index), 8 (middle), 9 (ring), 0, -, = (pinky).",
      "examples": [
        "Right hand reach drill: 'j6j j7j k8k l9l ;0; ;-;'",
        "Ten-digit full sequence: '12345 67890 / 2026 / 1984 / 500-250 = 250'",
        "Hyphen drill: 'well-known / twenty-five / user-friendly'"
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which biomechanical finger motion or rhythmic keystroke technique ensures peak speed and zero strain?",
          "options": [
            "Right Index Finger",
            "Right Middle Finger",
            "Right Thumb",
            "Left Index Finger"
          ],
          "answerIndex": 0,
          "explanation": "The right index finger controls both 6 and 7."
        },
        {
          "prompt": "Which finger is assigned to the '0' (zero) and '-' (hyphen) keys?",
          "options": [
            "Right Pinky Finger",
            "Right Ring Finger",
            "Right Index Finger",
            "Right Middle Finger"
          ],
          "answerIndex": 0,
          "explanation": "The right pinky controls 0, -, and =."
        },
        {
          "prompt": "Which finger strikes the number '8'?",
          "options": [
            "Right Middle Finger",
            "Right Index Finger",
            "Left Middle Finger",
            "Right Ring Finger"
          ],
          "answerIndex": 0,
          "explanation": "Right middle finger controls 8 (above I/K)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 17:",
          "options": [
            "Right Pinky",
            "Right Middle Finger",
            "Right Index Finger",
            "Right Ring Finger"
          ],
          "answerIndex": 3,
          "explanation": "Right ring finger controls 9 (above O/L)."
        },
        {
          "prompt": "In typing the year '2026', what is the correct finger sequence?",
          "options": [
            "Left Index for all",
            "Right Index for all",
            "Left Pinky -> Left Ring -> Left Middle -> Right Pinky",
            "Left Ring (2) -> Right Pinky (0) -> Left Ring (2) -> Right Index"
          ],
          "answerIndex": 3,
          "explanation": "2 (Left Ring), 0 (Right Pinky), 2 (Left Ring), 6 (Right Index)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the right-hand fingers to their correct numbers:",
          "options": [
            "Index=6 & 7, Middle=8, Ring=9, Pinky=0, -, =",
            "Thumb=6, Index=7, Middle=8, Ring=9, Pinky=0",
            "Index=8, Middle=7, Ring=6, Pinky=9",
            "Index=0, Middle=9, Ring=8, Pinky=7 & 6"
          ],
          "answerIndex": 0,
          "explanation": "6/7=Index, 8=Middle, 9=Ring, 0/-//=Pinky.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which finger types the hyphen / minus sign '-'?",
          "options": [
            "Right Index",
            "Left Pinky",
            "Right Thumb",
            "Right Pinky"
          ],
          "answerIndex": 3,
          "explanation": "Right pinky reaches up-right to '-'.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the primary anchor key for the right hand?",
          "options": [
            "The '0' key",
            "The 'K' key",
            "The 'J' key with its raised tactile bump",
            "The 'Enter' key"
          ],
          "answerIndex": 2,
          "explanation": "The 'J' key bump is the tactile anchor.",
          "type": "multiple-choice"
        },
        {
          "prompt": "To type '7890', what is the finger order?",
          "options": [
            "Right Index for all four",
            "Right Index (7) -> Right Middle (8) -> Right Ring (9) -> Right Pinky",
            "Right Pinky -> Ring -> Middle -> Index",
            "Left hand fingers"
          ],
          "answerIndex": 1,
          "explanation": "Sequential flow: Index -> Middle -> Ring -> Pinky.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is the number row staggered to the left on mechanical and standard keyboards?",
          "options": [
            "Historical legacy of mechanical typewriter linkages, requiring diagonal finger reaches",
            "To save space",
            "To make typing harder",
            "Because numbers take more power"
          ],
          "answerIndex": 0,
          "explanation": "Historical mechanical linkage stagger.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 4, Lesson 2: Foundational & Structural Mastery"
  },
  "typing-u4-l3": {
    "id": "typing-u4-l3",
    "unit": "typing-u4",
    "level": "intermediate",
    "objective": "Type shifted left-hand symbols (!, @, #, $, %) accurately by anchoring the Right Shift key with the right pinky while reaching with the left hand.",
    "difficulty": 950,
    "prerequisites": [
      "typing-u4-l2"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "typing-u4-l1",
        "typing-u4-l2"
      ]
    },
    "presentation": {
      "explanation": "To type symbols on the number row, you must master the **Opposite-Hand Shift Rule**.\n\n1. **The Opposite-Hand Shift Law:**\n   - When typing a symbol with your **LEFT hand** (!, @, #, $, %), you MUST hold down **RIGHT SHIFT** with your **RIGHT PINKY**.\n   - **Never try to press Left Shift and a left-hand number simultaneously with the same hand!** Contorting one hand to hold Shift and reach up strains the wrist tendons and destroys accuracy.\n\n2. **Left-Hand Symbol Map:**\n   - **! (Exclamation):** Hold Right Shift + Left Pinky (1)\n   - **@ (At sign):** Hold Right Shift + Left Ring (2)\n   - **# (Hash/Pound):** Hold Right Shift + Left Middle (3)\n   - **$ (Dollar sign):** Hold Right Shift + Left Index (4)\n   - **% (Percent):** Hold Right Shift + Left Index (5)\n\n3. **Practical Symbol Typing:**\n   - Prices: *$45.00* (Right Shift + 4 -> 4 -> 5 -> . -> 0 -> 0)\n   - Emails: *user@domain.com* (Right Shift + 2 for @)\n   - Discounts: *25% off!* (Right Shift + 5 for %, Right Shift + 1 for !).",
      "examples": [
        "Shift-Left drill: 'Hold Right Shift: ! @ # $ %'",
        "Real-world strings: '$50.00 / 100% / #1 / user@test.com / Wow!'",
        "Two-handed coordination: Right pinky holds Shift -> Left index strikes 4 ($) -> release both simultaneously."
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which biomechanical finger motion or rhythmic keystroke technique ensures peak speed and zero strain?",
          "options": [
            "Left Shift with your Left Thumb",
            "Left Shift with your Left Pinky",
            "Caps Lock",
            "Right Shift with your Right Pinky"
          ],
          "answerIndex": 3,
          "explanation": "Left-hand keys always pair with the opposite (Right) Shift key."
        },
        {
          "prompt": "Which finger combination produces the '@' symbol?",
          "options": [
            "Left Shift + Left Index on 2",
            "Right Shift + Left Pinky on 1",
            "Left Thumb on Space",
            "Right Shift (Right Pinky) + Left Ring Finger on 2"
          ],
          "answerIndex": 3,
          "explanation": "Right Shift + Left Ring on 2 produces '@'."
        },
        {
          "prompt": "Why should you never use the same hand to hold Shift and press a letter/number on that same hand?",
          "options": [
            "The computer will lock up",
            "Shift will not register",
            "The keys will jam",
            "It twists the wrist, strains the tendons, and degrades touch typing ergonomics"
          ],
          "answerIndex": 3,
          "explanation": "Opposite-shift preserves neutral wrist alignment and finger independence."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 18:",
          "options": [
            "Left Middle Finger on 3",
            "Left Index Finger",
            "Left Pinky",
            "Right Middle Finger"
          ],
          "answerIndex": 0,
          "explanation": "Left middle finger strikes 3 (with Right Shift) for #."
        },
        {
          "prompt": "Which finger produces the '%' (percent) symbol?",
          "options": [
            "Left Index Finger on 5",
            "Left Ring Finger",
            "Left Middle Finger",
            "Right Index Finger"
          ],
          "answerIndex": 0,
          "explanation": "Left index finger strikes 5 (with Right Shift) for %."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the symbols to their number keys:",
          "options": [
            "! = 2, @ = 1, # = 4, $ = 3, % = 5",
            "! = Q, @ = W, # = E, $ = R, % = T",
            "! = 5, @ = 4, # = 3, $ = 2, % = 1",
            "! = 1, @ = 2, # = 3, $ = 4, % = 5"
          ],
          "answerIndex": 3,
          "explanation": "Shift + 1=!, 2=@, 3=#, 4=$, 5=%.",
          "type": "multiple-choice"
        },
        {
          "prompt": "To type 'Great deal! Only $15 (50% off!)', what role does Right Shift play?",
          "options": [
            "It is held for the entire sentence",
            "It replaces the spacebar",
            "It is held by the right pinky whenever !, $, or % is typed",
            "It is never used"
          ],
          "answerIndex": 2,
          "explanation": "Right Shift activates left-hand symbols (!, $, %).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which finger strikes the '!' (exclamation mark)?",
          "options": [
            "Left Index",
            "Left Pinky on 1",
            "Left Thumb",
            "Right Pinky"
          ],
          "answerIndex": 1,
          "explanation": "Left pinky strikes 1 for !.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What does the '@' symbol represent historically?",
          "options": [
            "'At the rate of' in commercial accounting, now the universal email/handle delimiter",
            "Ampersand",
            "Arrow",
            "Asterisk"
          ],
          "answerIndex": 0,
          "explanation": "Commercial 'at' accounting symbol, adapted by Ray Tomlinson for email in 1971.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the primary posture rule for the wrists while typing symbols?",
          "options": [
            "Rest palms heavily on the desk",
            "Bend wrists 90 degrees downward",
            "Type with one finger only",
            "Keep wrists straight and floating in a neutral position, avoiding hard resting on desk edges"
          ],
          "answerIndex": 3,
          "explanation": "Neutral wrist posture prevents repetitive strain injury.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 4, Lesson 3: Foundational & Structural Mastery"
  },
  "typing-u4-l4": {
    "id": "typing-u4-l4",
    "unit": "typing-u4",
    "level": "intermediate",
    "objective": "Type shifted right-hand symbols (^, &, *, (, ), _, +) using Left Shift anchored by the left pinky, focusing on programming operators, brackets, and parentheses.",
    "difficulty": 970,
    "prerequisites": [
      "typing-u4-l3"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "typing-u4-l2",
        "typing-u4-l3"
      ]
    },
    "presentation": {
      "explanation": "For the right-hand symbols (^, &, *, (, ), _, +), the Opposite-Hand Shift Law flips: **Anchor LEFT SHIFT with your LEFT PINKY** while your right hand reaches up.\n\n1. **Right-Hand Symbol Map:**\n   - **^ (Caret/Exponent):** Hold Left Shift + Right Index (6)\n   - **& (Ampersand/And):** Hold Left Shift + Right Index (7)\n   - **\\* (Asterisk/Multiply):** Hold Left Shift + Right Middle (8)\n   - **( (Open Parenthesis):** Hold Left Shift + Right Ring (9)\n   - **) (Close Parenthesis):** Hold Left Shift + Right Pinky (0)\n   - **_ (Underscore):** Hold Left Shift + Right Pinky (-)\n   - **+ (Plus Sign):** Hold Left Shift + Right Pinky (=)\n\n2. **The Parentheses & Math Pairings:**\n   - Typing `(10 + 5) * 2 = 30`:\n     * `(` = Left Shift + Right Ring (9)\n     * `)` = Left Shift + Right Pinky (0)\n     * `*` = Left Shift + Right Middle (8)\n     * `+` = Left Shift + Right Pinky (=)\n\n3. **The Underscore (`_`) in Programming:**\n   - Underscores (`snake_case`, `file_name.js`) require Left Shift + Right Pinky on the hyphen key.",
      "examples": [
        "Shift-Right drill: 'Hold Left Shift: ^ & * ( ) _ +'",
        "Math & Code strings: '(x + y) * (a - b) / total_count = 100 & valid'",
        "Parentheses rhythm: Open paren (ring 9) -> type content -> close paren (pinky 0)."
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which biomechanical finger motion or rhythmic keystroke technique ensures peak speed and zero strain?",
          "options": [
            "Left Pinky on Left Shift + Right Ring Finger on 9",
            "Left Index on Shift + Right Index on 9",
            "Right Thumb on Space",
            "Right Pinky on Right Shift + Right Ring Finger on 9"
          ],
          "answerIndex": 0,
          "explanation": "Opposite Shift: Left Pinky (Left Shift) + Right Ring on 9."
        },
        {
          "prompt": "Which finger strikes the closing parenthesis ')' (Shift + 0)?",
          "options": [
            "Right Pinky Finger on 0",
            "Right Middle Finger",
            "Right Index Finger",
            "Right Ring Finger"
          ],
          "answerIndex": 0,
          "explanation": "Right pinky strikes 0 for ')'."
        },
        {
          "prompt": "Which finger strikes the asterisk '*' (Shift + 8)?",
          "options": [
            "Right Middle Finger on 8",
            "Left Middle Finger",
            "Right Index Finger",
            "Right Ring Finger"
          ],
          "answerIndex": 0,
          "explanation": "Right middle finger strikes 8 for '*'."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 19:",
          "options": [
            "Right Index Finger on 7",
            "Left Index Finger",
            "Right Middle Finger",
            "Right Ring Finger"
          ],
          "answerIndex": 0,
          "explanation": "Right index finger strikes 7 for '&'."
        },
        {
          "prompt": "How do you type an underscore '_' in snake_case variable names?",
          "options": [
            "Left Pinky on Left Shift + Right Pinky on the hyphen key",
            "Right Pinky only",
            "Caps Lock + minus",
            "Spacebar twice"
          ],
          "answerIndex": 0,
          "explanation": "Left Shift + Right Pinky on the hyphen key produces '_'."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the symbols to their number keys:",
          "options": [
            "^ = 0, & = 9, * = 8, ( = 7, ) = 6",
            "^ = 7, & = 6, * = 9, ( = 8, ) = 0",
            "^ = 6, & = 7, * = 8, ( = 9, ) = 0, _ = -, + = =",
            "^ = 1, & = 2, * = 3, ( = 4, ) = 5"
          ],
          "answerIndex": 2,
          "explanation": "Shift + 6=^, 7=&, 8=*, 9=(, 0=), -=_, =+.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which finger combination produces '(x + y)'?",
          "options": [
            "Caps lock only",
            "Left Shift held for ( and +, Right Shift held for ) with appropriate strike fingers",
            "One hand only",
            "Typing with thumbs"
          ],
          "answerIndex": 1,
          "explanation": "Opposite shift coordination across parentheses and operators.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What does the ampersand '&' represent etymologically?",
          "options": [
            "A ligature of the Latin word 'et' meaning 'and'",
            "An ancient Egyptian hieroglyph",
            "A musical treble clef",
            "An abbreviation for apple"
          ],
          "answerIndex": 0,
          "explanation": "& is the historic typographical ligature for Latin 'et' (and).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which key produces the plus sign '+' when shifted?",
          "options": [
            "The letter 'P'",
            "The minus key '-'",
            "The zero key '0'",
            "The equals key '='"
          ],
          "answerIndex": 3,
          "explanation": "Shift + '=' produces '+'.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the primary goal of mastering shifted symbols by touch?",
          "options": [
            "Winning typing games only",
            "Increasing monitor brightness",
            "Eliminating pauses when typing equations, code, dates, and formatted prose",
            "Changing keyboard color"
          ],
          "answerIndex": 2,
          "explanation": "Fluency in symbols eliminates cognitive interruptions during technical typing.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 4, Lesson 4: Foundational & Structural Mastery"
  },
  "typing-u4-l5": {
    "id": "typing-u4-l5",
    "unit": "typing-u4",
    "level": "intermediate",
    "objective": "Integrate numbers (0–9), punctuation, and symbols (!, @, #, $, %, ^, &, *, (, ), _, +, -) into fluid 60+ WPM mixed alphanumeric typing with 98%+ accuracy.",
    "difficulty": 1000,
    "prerequisites": [
      "typing-u4-l4"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "typing-u4-l1",
        "typing-u4-l2",
        "typing-u4-l3",
        "typing-u4-l4"
      ]
    },
    "presentation": {
      "explanation": "This capstone lesson brings together all 4 rows of the QWERTY keyboard: Home row, Top row, Bottom row, and the complete Numbers & Symbols row.\n\n1. **The Alphanumeric Mastery Test:**\n   - True touch typing mastery is measured not on simple words like 'the dog ran', but on **complex real-world text**:\n     * URLs: `https://fearn.app/user_profile?id=4920&auth=true`\n     * Financials: `In Q3 2026, revenue rose by 18.5% (+$4.2M), totaling $27,150,000.`\n     * Passwords: `K9#m$7!pL2&w`\n     * Mathematics: `f(x) = (2 * x^2) + (14 / y) - 5`\n\n2. **The 3 Rules of Speed Under Complexity:**\n   - **1. Rhythm over Rush:** When numbers and symbols appear, maintain a steady metronome pulse rather than speeding up on letters and slamming the brakes on symbols.\n   - **2. Clean Opposite Shift:** Press Shift *before* the number key and release *after* — never rush the simultaneous tap.\n   - **3. Immediate Anchor Recovery:** The moment a number or symbol is pressed, your hands snap back to the F and J bumps.",
      "examples": [
        "Financial drill: 'Total sales: $148,250 (up 22% from $121,500 in 2025).'",
        "Code drill: 'function calculate_tax(price, rate = 0.15) { return price * (1 + rate); }'",
        "Alphanumeric sprint: 'Room #402: 3 beds, 2 baths, $1,850/mo (Call: 555-0198).'"
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which biomechanical finger motion or rhythmic keystroke technique ensures peak speed and zero strain?",
          "options": [
            "Maintain a steady rhythm, use opposite-hand Shift, and trust finger muscle memory without looking down",
            "Stop and look at each symbol before pressing it",
            "Type with only one hand",
            "Use Caps Lock for all symbols"
          ],
          "answerIndex": 0,
          "explanation": "Steady rhythm, opposite-hand shift, and blind touch typing maximize accuracy."
        },
        {
          "prompt": "What is the correct finger execution for '$100'?",
          "options": [
            "Right Shift (Right Pinky) + Left Index (4) -> Left Pinky (1) -> Right Pinky (0) -> Right Pinky",
            "Left Shift + Left Index (4) -> Left Index (1) -> Left Index",
            "Right Index for all",
            "Left Thumb on Shift"
          ],
          "answerIndex": 0,
          "explanation": "$ (Right Shift + Left Index) -> 1 (Left Pinky) -> 0 -> 0 (Right Pinky)."
        },
        {
          "prompt": "What is the key to typing 'user_name_2026' without pausing?",
          "options": [
            "Smooth transition between letters and Left Shift + Right Pinky on '_' followed by number row reach",
            "Deleting the underscores",
            "Looking down at the keyboard for numbers only",
            "Pressing Space instead of underscore"
          ],
          "answerIndex": 0,
          "explanation": "Fluid coordination between letter home row, Shift, and number row."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 20:",
          "options": [
            "0 times",
            "3 times (for '(', '+', and '*')",
            "5 times",
            "1 time"
          ],
          "answerIndex": 1,
          "explanation": "'(' (9), '+' (=), and '*' (8) all reside on the right hand and use Left Shift."
        },
        {
          "prompt": "What should you do if you make a typo on a symbol?",
          "options": [
            "Strike Backspace with your Right Pinky, re-anchor on J, and re-type the key with correct finger mechanics",
            "Ignore the mistake permanently",
            "Hit the keyboard with your fist",
            "Restart the entire computer"
          ],
          "answerIndex": 0,
          "explanation": "Quick backspace with right pinky and instant re-anchoring on J."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Type this string mentally: 'Room #102: $450/mo (Call 555-0198!)'. Which fingers execute '#', '$', '(', and ')'?",
          "options": [
            "# = Right Index, $ = Right Middle, ( = Left Ring, ) = Left Pinky",
            "# = Left Middle (3), $ = Left Index (4), ( = Right Ring (9), ) = Right Pinky",
            "# = Left Pinky, $ = Left Ring, ( = Right Middle, ) = Right Index",
            "All are typed with Left Index"
          ],
          "answerIndex": 1,
          "explanation": "Correct mechanical mapping across all 4 symbol positions.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the main cause of speed loss during alphanumeric typing?",
          "options": [
            "Hesitation and looking down at the keyboard due to lack of confident number-row muscle memory",
            "Using a mechanical keyboard",
            "Screen refresh rate",
            "Typing too softly"
          ],
          "answerIndex": 0,
          "explanation": "Visual searching and hesitation are the primary bottlenecks in technical typing.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What does achieving 98%+ accuracy on numbers and symbols indicate?",
          "options": [
            "Luck",
            "That you only typed letters",
            "That your keyboard is broken",
            "Full spatial mastery of the entire 4-row keyboard without visual dependence"
          ],
          "answerIndex": 3,
          "explanation": "Full 4-row blind keyboard spatial mastery.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In competitive typing, what is the standard word length formula used to calculate WPM?",
          "options": [
            "10 characters equals 1 word",
            "Each word counts as 1 word regardless of length",
            "5 characters (including spaces and punctuation) equals 1 standard word",
            "1 character equals 1 word"
          ],
          "answerIndex": 2,
          "explanation": "Standard international typing measurement: 5 keystrokes = 1 word.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the primary objective of completing Unit 4 in FEARN Typing?",
          "options": [
            "Only typing with the left hand",
            "Mastering the full numbers (0-9) and symbols (!@#$%^&*_+=) row by touch without looking down",
            "Learning mouse shortcuts",
            "Memorizing the home row only"
          ],
          "answerIndex": 1,
          "explanation": "Unit 4 master objective: Full Numbers & Symbols Row Mastery.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 4, Lesson 5: Foundational & Structural Mastery"
  },
  "typing-u6-l1": {
    "id": "typing-u6-l1",
    "unit": "typing-u6",
    "level": "advanced",
    "objective": "Master touch-typing all forms of brackets: parentheses (), square brackets [], and curly braces {} with correct finger allocation and opposite-shift mechanics.",
    "presentation": {
      "explanation": "Welcome to Advanced Touch Typing Unit 6: Punctuation-Heavy & Code-Style Typing! In modern programming, mathematics, and structured writing, brackets enclose data structures and function arguments. Master these exact reach pathways:\n\n1. Parentheses: **(** and **)**:\n   - **(** (Open Parenthesis): Left Pinky on **Shift** + Right Ring/Middle on **9** (top row).\n   - **)** (Close Parenthesis): Left Pinky on **Shift** + Right Pinky/Ring on **0** (top row).\n\n2. Square Brackets: **[** and **]**:\n   - **[** (Open Square Bracket): Right Pinky reaches up-right past the P key to the **[** key (no shift needed!).\n   - **]** (Close Square Bracket): Right Pinky reaches further right to the **]** key.\n\n3. Curly Braces: **{** and **}**:\n   - **{** (Open Curly Brace): Left Pinky on **Shift** + Right Pinky on **[** key.\n   - **}** (Close Curly Brace): Left Pinky on **Shift** + Right Pinky on **]** key.\n\n4. Neuromuscular Anchor Principle:\n   - Because brackets require right-pinky lateral extension, keep your **right index finger lightly anchoring the J home key** to ensure you snap back instantly without losing your spatial center.",
      "examples": [
        {
          "target": "function calculate(total, tax) { return [total, total * tax]; }",
          "reading": "function calculate(total, tax) { return [total, total * tax]; }",
          "translation": "Function with parentheses, braces, and brackets."
        },
        {
          "target": "const items = ['alpha', 'beta', (x + y) * 2];",
          "reading": "const items = ['alpha', 'beta', (x + y) * 2];",
          "translation": "Array with bracket and parenthesis grouping."
        },
        {
          "target": "if (isValid && (user.age >= 18)) { accessGranted(); }",
          "reading": "if (isValid && (user.age >= 18)) { accessGranted(); }",
          "translation": "Conditional block with nested parentheses and braces."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which biomechanical finger motion or rhythmic keystroke technique ensures peak speed and zero strain?",
          "options": [
            "Left index finger",
            "Left pinky on Shift",
            "Right thumb",
            "Right pinky reaching up-right past P"
          ],
          "answerIndex": 3,
          "explanation": "Open square bracket '[' is struck by the right pinky directly to the right of P."
        },
        {
          "prompt": "How do you type the open curly brace '{'?",
          "options": [
            "Press Alt + 7",
            "Caps Lock + Left pinky",
            "Left pinky holds Shift + Right pinky strikes the '[' key",
            "Right pinky holds Shift + Left index strikes 9"
          ],
          "answerIndex": 2,
          "explanation": "Opposite-shift: Left Shift + Right pinky on '[' = '{'."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 21:",
          "options": [
            "[ ] { }",
            "[ ] { }",
            "{ } [ ]",
            "[] {} () [[]] {{}}"
          ],
          "answerIndex": 3,
          "explanation": "Parentheses -> square brackets -> curly braces sequence."
        },
        {
          "prompt": "Why is keeping the right index on 'J' important while typing brackets?",
          "options": [
            "It speeds up the CPU.",
            "It makes the spacebar bigger.",
            "It turns on auto-indent.",
            "It acts as a physical spatial anchor so your hand does not drift off the home row during pinky extension."
          ],
          "answerIndex": 3,
          "explanation": "Anchor finger preserves tactile orientation during extreme reaches."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the bracket characters with their exact finger combinations: ( ), [ ], { }:",
          "options": [
            ": Left Shift + Right 9/0 | [ ]: Right Pinky alone | { }: Left Shift + Right Pinky [ / ]",
            "All use Right Thumb",
            "All require Caps Lock",
            "All use Left Index"
          ],
          "answerIndex": 0,
          "explanation": "Accurate bracket touch typing mechanics.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Identify the code snippet containing all three bracket types correctly typed:",
          "options": [
            "const data = users 10 + 2;",
            "const data = (( users ));",
            "const data = [[ users ]];",
            "const data = { users: [ { id: (10 + 2) } ] };"
          ],
          "answerIndex": 3,
          "explanation": "Correct integration of braces {}, brackets [], and parentheses ().",
          "type": "multiple-choice"
        },
        {
          "prompt": "What common mistake occurs when novice typists reach for curly braces '{' and '}'?",
          "options": [
            "Using the mouse instead.",
            "Holding both Shift keys at once.",
            "Looking down at the keyboard and moving the entire wrist rather than stretching only the pinky from an anchored home row.",
            "Pressing the spacebar with the pinky."
          ],
          "answerIndex": 2,
          "explanation": "Wrist displacement and looking down are common reach flaws.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete the bracket pairing: 'function test' _______ (parentheses) ' ' _______ (braces)",
          "options": [
            "<> /",
            "/ {}",
            "{} / []",
            "[] /"
          ],
          "answerIndex": 1,
          "explanation": "function test() {} syntax.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 6, Lesson 1: Foundational & Structural Mastery (function calculate(total, tax))"
  },
  "typing-u6-l2": {
    "id": "typing-u6-l2",
    "unit": "typing-u6",
    "level": "advanced",
    "objective": "Achieve rapid touch-typing accuracy on all mathematical, logical, and boolean operator symbols (+, -, *, /, =, <, >, %, &, |, !, ^, ~).",
    "presentation": {
      "explanation": "Math, boolean logic, and bitwise operators form the grammatical spine of programming code and spreadsheet formulas:\n\n1. Mathematical Operators:\n   - **+** (Plus): Left Pinky on **Shift** + Right Pinky on **=** key.\n   - **-** (Minus/Hyphen): Right Pinky reaches up-right to the key next to 0 (no Shift).\n   - ***** (Asterisk/Multiply): Left Pinky on **Shift** + Right Middle on **8**.\n   - **/** (Forward Slash/Divide): Right Pinky/Ring reaches down to the **/** key next to Shift.\n   - **=** (Equals): Right Pinky reaches up-right to the **=** key next to - (no Shift).\n\n2. Relational & Boolean Operators:\n   - **<** (Less Than): Left Pinky on **Shift** + Right Middle on **,** (comma).\n   - **>** (Greater Than): Left Pinky on **Shift** + Right Ring on **.** (period).\n   - **!** (Exclamation/Not): Right Pinky on **Shift** + Left Pinky on **1**.\n   - **&** (Ampersand/And): Left Pinky on **Shift** + Right Index on **7**.\n   - **|** (Pipe/Or): Left Pinky on **Shift** + Right Pinky on **\\** (above Enter).\n   - **%** (Modulo/Percent): Right Pinky on **Shift** + Left Index on **5**.\n   - **^** (Caret/XOR): Right Pinky on **Shift** + Left Index on **6**.\n   - **~** (Tilde): Right Pinky on **Shift** + Left Pinky on **`** (top left).",
      "examples": [
        {
          "target": "const isValid = (count >= 10 && total <= 100) || !hasError;",
          "reading": "const isValid = (count >= 10 && total <= 100) || !hasError;",
          "translation": "Boolean logic expression with &&, ||, >=, <=, and !."
        },
        {
          "target": "let percentage = (score * 100) / maxPoints + 5.0;",
          "reading": "let percentage = (score * 100) / maxPoints + 5.0;",
          "translation": "Math formula with *, /, +, and =."
        },
        {
          "target": "if ((a != b) && (x % 2 === 0)) { value ^= mask; }",
          "reading": "if ((a != b) && (x % 2 === 0)) { value ^= mask; }",
          "translation": "Modulo, inequality, strict equality, and bitwise XOR."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which biomechanical finger motion or rhythmic keystroke technique ensures peak speed and zero strain?",
          "options": [
            "Right pinky holds Shift + Left pinky strikes 1",
            "Right index strikes 1",
            "Left pinky holds Shift + Left pinky strikes 1",
            "Caps Lock + 1"
          ],
          "answerIndex": 0,
          "explanation": "Opposite-shift rule: Right Shift + Left Pinky on 1 = '!'."
        },
        {
          "prompt": "Which keys produce '<' and '>'?",
          "options": [
            "Left Shift + comma (<) and period",
            "Left Shift + M and N",
            "Direct press without Shift",
            "Right Shift + 1 and 2"
          ],
          "answerIndex": 0,
          "explanation": "Shift + Comma = '<'; Shift + Period = '>'."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 22:",
          "options": [
            "+ = - * / < >",
            "! & | % + -",
            "+ - * / = < > ! & | %",
            "* / = < > +"
          ],
          "answerIndex": 2,
          "explanation": "Math and logic operator sequence."
        },
        {
          "prompt": "What symbol is produced by Left Shift + Right Pinky on the '=' key?",
          "options": [
            "-",
            "=",
            "_",
            "+"
          ],
          "answerIndex": 3,
          "explanation": "Shift + '=' produces '+'."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the operator symbols to their Shift combinations: !, &, +, <, |:",
          "options": [
            "All use Caps Lock",
            "All use Right Shift",
            "All are on the number pad only",
            "!: Right Shift+1 | &: Left Shift+7 | +: Left Shift+= | <: Left Shift+, | |: Left Shift+\\"
          ],
          "answerIndex": 3,
          "explanation": "Operator shift mechanics.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the result of typing: (x >= y) && (total != 0)?",
          "options": [
            "A math equation without variables",
            "A file path",
            "A boolean conditional testing if x is greater than/equal to y AND total is not equal to zero",
            "A syntax error"
          ],
          "answerIndex": 2,
          "explanation": "Standard boolean logic statement.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is the opposite-shift rule critical when typing symbols like '!' and '&'?",
          "options": [
            "It makes numbers larger.",
            "It prevents hand strain and awkward contortion, keeping both hands balanced across the keyboard.",
            "It disables autocorrect.",
            "It increases keyboard volume."
          ],
          "answerIndex": 1,
          "explanation": "Opposite-shift ensures ergonomic hand posture.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'To check if a number is even, use: (n _______ 2 === 0)'",
          "options": [
            "%",
            "^",
            "~",
            "+"
          ],
          "answerIndex": 0,
          "explanation": "Modulo operator %.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 6, Lesson 2: Foundational & Structural Mastery (const isValid = (count >= 10 &)"
  },
  "typing-u6-l3": {
    "id": "typing-u6-l3",
    "unit": "typing-u6",
    "level": "advanced",
    "objective": "Master quotes (' \"), colons/semicolons (: ;), slashes (/ \\), and underscores (_) with rapid pinky dexterity and absolute tactile confidence.",
    "presentation": {
      "explanation": "Quotation marks, colons, slashes, and underscores are used continuously in string declarations, URLs, file paths, and identifier names:\n\n1. Single & Double Quotation Marks:\n   - **'** (Single Quote / Apostrophe): Right Pinky strikes the key directly right of semicolon **;** (no Shift).\n   - **\"** (Double Quote): Left Pinky on **Shift** + Right Pinky on **'** key.\n\n2. Semicolons & Colons:\n   - **;** (Semicolon): Right Pinky resting directly on the home key **;**!\n   - **:** (Colon): Left Pinky on **Shift** + Right Pinky on **;**.\n\n3. Forward Slash & Backslash:\n   - **/** (Forward Slash / URLs / Division): Right Pinky/Ring strikes the bottom-right **/** key.\n   - **\\** (Backslash / Escape Characters): Right Pinky reaches above Enter to **\\** (or top right on ANSI keyboards).\n\n4. Underscores (snake_case):\n   - **_** (Underscore): Left Pinky on **Shift** + Right Pinky on **-** (hyphen key next to 0).",
      "examples": [
        {
          "target": "const user_name = \"Sarah O'Connor\"; console.log(\"User: \" + user_name);",
          "reading": "const user_name = \"Sarah O'Connor\"; console.log(\"User: \" + user_name);",
          "translation": "Snake_case identifier with single quote inside double quotes and colon."
        },
        {
          "target": "const file_path = \"C:\\\\Users\\\\Admin\\\\data.json\";",
          "reading": "const file_path = \"C:\\\\Users\\\\Admin\\\\data.json\";",
          "translation": "Windows file path with escaped backslashes, colon, and quotes."
        },
        {
          "target": "const url = \"https://api.example.com/v1/users?active=true\";",
          "reading": "const url = \"https://api.example.com/v1/users?active=true\";",
          "translation": "Web URL with colon, forward slashes, question mark, and equals."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which biomechanical finger motion or rhythmic keystroke technique ensures peak speed and zero strain?",
          "options": [
            "Right ring finger",
            "Left pinky",
            "Right index finger",
            "Right pinky"
          ],
          "answerIndex": 3,
          "explanation": "Right pinky rests on the ';' key at home row."
        },
        {
          "prompt": "How do you type the underscore character '_'?",
          "options": [
            "Press spacebar twice",
            "Right index on Shift + Left index on 0",
            "Caps Lock + minus",
            "Left pinky on Shift + Right pinky strikes the '-' (hyphen) key"
          ],
          "answerIndex": 3,
          "explanation": "Left Shift + Hyphen = Underscore '_'."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 23:",
          "options": [
            "\"hello_world\": 'status_ok';",
            "'hello world' status ok",
            "hello_world = status_ok",
            ":hello_world: 'status_ok'"
          ],
          "answerIndex": 0,
          "explanation": "Double quotes, underscore, colon, single quotes, and semicolon."
        },
        {
          "prompt": "What is the difference between forward slash '/' and backslash '\\' in typing reach?",
          "options": [
            "Forward slash '/' is in the bottom row (near right Shift); Backslash '\\' is in the upper right (above Enter).",
            "They are on the same key.",
            "Backslash is on the spacebar.",
            "Forward slash requires Shift."
          ],
          "answerIndex": 0,
          "explanation": "Bottom-right vs. top-right pinky reach."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the characters: ;, :, ', \", _, /:",
          "options": [
            "All use Left Hand only",
            "All require Alt key",
            ";: Right Pinky home | :: Shift+; | ': Right Pinky right of ; | \": Shift+' | _: Shift+- | /: Bottom right",
            "All use Right Thumb"
          ],
          "answerIndex": 2,
          "explanation": "Punctuation key assignments.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Identify the correctly formatted JSON key-value pair string:",
          "options": [
            "user_profile / true",
            "\"user_profile\": { \"is_active\": true, \"role\": \"admin\" };",
            "user_profile = true;",
            "user profile : admin;"
          ],
          "answerIndex": 1,
          "explanation": "Standard JSON key-value string with quotes, underscores, and colons.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is the semicolon ';' considered the most critical anchor key for the right pinky?",
          "options": [
            "Because resting on ';' keeps the right hand perfectly aligned with the home row (J-K-L-;) and provides the reference point for reaching Enter, Quotes, and Brackets.",
            "Because English sentences only end in semicolons.",
            "It is a decorative marker.",
            "Because it is the largest key."
          ],
          "answerIndex": 0,
          "explanation": "Semicolon is the spatial anchor for the entire right hand.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'To write an escaped quote inside a string, type: \\' or _______'",
          "options": [
            "//",
            "/\"",
            "--",
            "\\\""
          ],
          "answerIndex": 3,
          "explanation": "\\\" is the escaped double quote.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 6, Lesson 3: Foundational & Structural Mastery (const user_name = \"Sarah O'Con)"
  },
  "typing-u6-l4": {
    "id": "typing-u6-l4",
    "unit": "typing-u6",
    "level": "advanced",
    "objective": "Type structured JSON data blocks, CSS rule sets, and JavaScript function declarations with nested indentation, mixed camelCase/snake_case, and complex symbol combinations.",
    "presentation": {
      "explanation": "Typing structured data and code requires combining letters, numbers, brackets, quotes, colons, and indentation without stopping the flow:\n\n1. JSON Data Structure Flow:\n   - In JSON, keys are in double quotes, separated by colons, with values in quotes/numbers/booleans, separated by commas, and wrapped in curly braces or square brackets:\n     ```json\n     {\n       \"name\": \"Antigravity\",\n       \"version\": 2.0,\n       \"features\": [\"typing\", \"coding\", \"speed\"]\n     }\n     ```\n\n2. CSS Ruleset Flow:\n   - Selector + space + open brace + newline/tab + property + colon + space + value + semicolon + newline + close brace:\n     ```css\n     .btn-primary {\n       background-color: #007bff;\n       font-size: 16px;\n       border-radius: 4px;\n     }\n     ```\n\n3. The 3 Gold Rules of Code Typing:\n   - **Rhythm Over Haste**: Maintain an even tempo across symbols—never sprint on letters and stall on symbols.\n   - **Lookahead Buffering**: As your fingers type `\"name\": `, your eyes should already be reading the value `\"Antigravity\"`.\n   - **Never Look Down**: Trust your muscle memory for `{ } [ ] : , \" ' ; . =`!",
      "examples": [
        {
          "target": "const config = { host: \"localhost\", port: 8080, secure: false };",
          "reading": "const config = { host: \"localhost\", port: 8080, secure: false };",
          "translation": "JavaScript configuration object with mixed data types."
        },
        {
          "target": "function getDiscount(price, rate) { return price - (price * rate); }",
          "reading": "function getDiscount(price, rate) { return price - (price * rate); }",
          "translation": "Function with mathematical computation inside parentheses."
        },
        {
          "target": "display: flex; justify-content: space-between; align-items: center;",
          "reading": "display: flex; justify-content: space-between; align-items: center;",
          "translation": "CSS flexbox property declarations with hyphens and colons."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which biomechanical finger motion or rhythmic keystroke technique ensures peak speed and zero strain?",
          "options": [
            "Maintaining a steady, uninterrupted metronomic rhythm rather than rushing letters and pausing on symbols",
            "Stopping typing after every line",
            "Using the mouse to click symbols on an on-screen keyboard",
            "Looking down at the keyboard for every symbol"
          ],
          "answerIndex": 0,
          "explanation": "Steady rhythm prevents cognitive hesitation on punctuation."
        },
        {
          "prompt": "In standard JSON syntax, how are keys and string values enclosed?",
          "options": [
            "In double quotation marks \" \"",
            "In parentheses",
            "In backticks ` `",
            "In single quotes ' '"
          ],
          "answerIndex": 0,
          "explanation": "JSON strictly mandates double quotes \" \"."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 24:",
          "options": [
            "if (total > 100) { discount = 0.15; }",
            "if {total > 100} [discount = 0.15]",
            "if total > 100 discount = 0.15",
            "if [total > 100]"
          ],
          "answerIndex": 0,
          "explanation": "Standard conditional block with parentheses, braces, and assignment."
        },
        {
          "prompt": "What does 'lookahead buffering' mean in touch typing?",
          "options": [
            "Reading 1 to 2 words/tokens ahead on the screen while your fingers automatically type the current token from muscle memory",
            "Typing without a screen",
            "Using artificial intelligence to auto-complete",
            "Guessing random letters"
          ],
          "answerIndex": 0,
          "explanation": "Visual lookahead buffering decouples physical finger motion from visual reading."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the programming language token conventions: camelCase, snake_case, kebab-case, CONSTANT_CASE:",
          "options": [
            "All use only spaces",
            "camelCase: myVariable | snake_case: my_variable | kebab-case: my-variable | CONSTANT_CASE: MY_VARIABLE",
            "All use only periods",
            "All mean identical uppercase strings"
          ],
          "answerIndex": 1,
          "explanation": "Standard programming naming conventions.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Identify the code snippet that combines brackets, braces, quotes, colons, and operators without syntax error:",
          "options": [
            "const app = { port: 3000, routes: ['/api/users', '/api/orders'], is_open: true };",
            "const app = port 3000 routes api users;",
            "const app = ( port: 3000, routes: ( api users ) );",
            "const app = < port 3000 >;"
          ],
          "answerIndex": 0,
          "explanation": "Clean JavaScript object literal declaration.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is 98%+ accuracy especially critical when typing computer code compared to informal chat messages?",
          "options": [
            "It is not critical.",
            "Because code is written in bold.",
            "Because programming requires larger screens.",
            "In code, an error in a single punctuation character (like a missing semicolon or swapped bracket) causes syntax errors and compiler failures."
          ],
          "answerIndex": 3,
          "explanation": "Code execution is strictly deterministic and intolerant of syntax typos.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete the CSS rule: '.container { max-width: 1200px; margin: 0 auto; _______ }'",
          "options": [
            "= padding 20px",
            "padding 20px",
            "padding: 20px;",
            "padding : : 20px"
          ],
          "answerIndex": 2,
          "explanation": "Valid CSS property declaration: padding: 20px;.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 6, Lesson 4: Foundational & Structural Mastery (const config = { host: \"localh)"
  },
  "typing-u6-l5": {
    "id": "typing-u6-l5",
    "unit": "typing-u6",
    "level": "advanced",
    "objective": "Demonstrate comprehensive Unit 6 advanced code-style typing fluency by completing a master full-stack codeblock sprint (JavaScript, HTML, Python, JSON) holding 98%+ accuracy at 50+ WPM without looking at the keyboard.",
    "presentation": {
      "explanation": "In this Master Capstone for Unit 6, we synthesize all brackets `() [] {}`, operators `+ - * / = < > ! & | %`, strings `' \"`, colons/semicolons `: ;`, and structured indentation in a realistic multi-paradigm full-stack code sprint:\n\n1. The Master Benchmark Passages:\n   - **Passage A (JavaScript ES6 Async Function)**:\n     ```javascript\n     async function fetchUserData(userId) {\n       const response = await fetch(`/api/users/${userId}`);\n       if (!response.ok) {\n         throw new Error(`HTTP Error: ${response.status}`);\n       }\n       const data = await response.json();\n       return { id: data.id, name: data.name, active: true };\n     }\n     ```\n   - **Passage B (Python Data Pipeline)**:\n     ```python\n     def calculate_metrics(values, threshold=0.75):\n         filtered = [v for v in values if v >= threshold]\n         total_sum = sum(filtered)\n         return {\"count\": len(filtered), \"average\": total_sum / max(1, len(filtered))}\n     ```\n\n2. Performance Standard:\n   - **Speed Target**: 50+ Net WPM on pure code syntax.\n   - **Accuracy Threshold**: 98%+ (less than 2 corrected keystrokes per 100 characters).\n   - **Eye Discipline**: 100% eyes on the screen/source code—zero downward keyboard glances!",
      "examples": [
        {
          "target": "async function fetchUserData(userId) { const res = await fetch(`/api/users/${userId}`); return res.json(); }",
          "reading": "async function fetchUserData(userId) { const res = await fetch(`/api/users/${userId}`); return res.json(); }",
          "translation": "JavaScript async function with template literal interpolation and method call."
        },
        {
          "target": "def calculate_metrics(values, threshold=0.75): filtered = [v for v in values if v >= threshold]",
          "reading": "def calculate_metrics(values, threshold=0.75): filtered = [v for v in values if v >= threshold]",
          "translation": "Python function header and list comprehension with default parameter."
        },
        {
          "target": "const state = { count: 0, items: [], is_loading: false, error: null };",
          "reading": "const state = { count: 0, items: [], is_loading: false, error: null };",
          "translation": "State object initialization with multiple primitives and arrays."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which biomechanical finger motion or rhythmic keystroke technique ensures peak speed and zero strain?",
          "options": [
            "Top-left key above Tab and left of 1",
            "Right pinky next to Enter",
            "Bottom row next to Space",
            "Number pad 0"
          ],
          "answerIndex": 0,
          "explanation": "Backtick '`' is at the top left of standard QWERTY keyboards, struck by the left pinky."
        },
        {
          "prompt": "What is the primary indicator of mastery in code-style touch typing?",
          "options": [
            "Maintaining uniform typing cadence across letters, brackets, and operators without pausing or looking down",
            "Hitting the keyboard as hard as possible",
            "Typing only lowercase letters",
            "Using backspace on every second word"
          ],
          "answerIndex": 0,
          "explanation": "Uniform cadence and zero downward glances represent true touch typing mastery."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 25:",
          "options": [
            "return id = data.id name = data.name",
            "return { id: data.id, name: data.name, active: true };",
            "return [ id: data.id, name: data.name ];",
            "return ( id: data.id, name: data.name );"
          ],
          "answerIndex": 1,
          "explanation": "Exact JavaScript object return statement."
        },
        {
          "prompt": "What calculation determines Net WPM when typing a 250-character code block in 60 seconds with 98% accuracy?",
          "options": [
            "49.0 Net WPM",
            "75 WPM",
            "20 WPM",
            "30 WPM"
          ],
          "answerIndex": 0,
          "explanation": "(250 / 5) * 0.98 = 49.0 Net WPM."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What core technical and neuromuscular skills were mastered across Touch Typing Unit 6?",
          "options": [
            "All bracket types (, [], {}), math and logic operators (+, -, *, /, =, <, >, !, &, |, %, ^, ~), quotes, colons/semicolons, slashes, underscores, code indentation, and sustained 50+ WPM coding fluency with 98%+ accuracy",
            "Home row letters only",
            "Number pad typing only",
            "Function keys only"
          ],
          "answerIndex": 0,
          "explanation": "Unit 6 comprehensive advanced punctuation and code-style typing mastery.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Identify the complete, valid Python dictionary comprehension string:",
          "options": [
            "{ key = value * 2 }",
            "",
            "[ key: value * 2 ]",
            "{ key: value * 2 for (key, value) in items.items if value > 0 }"
          ],
          "answerIndex": 3,
          "explanation": "Valid Python dictionary comprehension syntax.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why does touch-typing code without looking at the keyboard directly accelerate software development?",
          "options": [
            "It turns off compiler warnings.",
            "It reduces electricity usage.",
            "It removes visual distraction, allowing working memory to remain 100% focused on algorithm architecture, debugging, and logic flow (deliberate practice).",
            "It replaces the need for automated tests."
          ],
          "answerIndex": 2,
          "explanation": "Preserves cognitive working memory capacity during complex coding tasks.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the next frontier of touch typing in Unit 7?",
          "options": [
            "Typing upside down",
            "Sustained Accuracy Interval Drills",
            "Memorizing Morse code",
            "Switching to a typewriter"
          ],
          "answerIndex": 1,
          "explanation": "Unit 7 focuses on sustained accuracy interval drills and stamina endurance.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 6, Lesson 5: Foundational & Structural Mastery (async function fetchUserData(u)"
  },
  "typing-u7-l1": {
    "id": "typing-u7-l1",
    "unit": "typing-u7",
    "level": "advanced",
    "objective": "Execute 60-second continuous focus sprints holding 98%+ accuracy across varied English prose without looking down or pausing between words.",
    "presentation": {
      "explanation": "Welcome to Advanced Touch Typing Unit 7: Sustained Accuracy Interval Drills! Up to this point, you have mastered all 26 alphabetic keys, number and symbol rows, and high-density punctuation. Now we transition from individual mechanical execution to **high-speed cognitive stamina and motor continuity**:\n\n1. The 1-Minute Focus Window:\n   - 60 seconds is the fundamental benchmark interval in competitive and professional typing.\n   - Most typists experience cognitive decay around second 35–45: their eyes wander from the source text, finger tension spikes in the extensor muscles, and error cascading begins.\n   - **The Golden Rule of 1-Minute Sprints**: *Speed is a byproduct of unbroken continuity*. Eliminating 0.3-second hesitation pauses between words adds 12–15 WPM to your net speed without moving your fingers any faster.\n\n2. Eye-Ahead Buffer (Visual Lookahead):\n   - Elite typists (80–120+ WPM) read **2 to 3 words ahead** of the keystrokes their fingers are currently executing.\n   - While your left index is typing 'the', your visual cortex has already buffered 'architectural' and pre-activated the motor sequence in your right hand.\n   - If your eyes focus on the exact letter you are typing right now, you bottleneck your motor system to visual reaction times (~200ms) rather than autonomic muscle memory (~50ms).\n\n3. Breath & Ergonomic Relaxation:\n   - Inhale slowly through your nose; keep elbows at a 90–100 degree angle.\n   - Rest wrists floating 1 cm above desk/wrist rest to maintain full kinetic freedom.",
      "examples": [
        {
          "target": "The quiet harbor reflected the amber glow of the lighthouse as fishing boats returned from the open sea.",
          "reading": "The quiet harbor reflected the amber glow of the lighthouse as fishing boats returned from the open sea.",
          "translation": "Drill passage: Clean 1-minute prose balance with mixed bigrams and common punctuation."
        },
        {
          "target": "Constant practice with uninterrupted focus builds durable motor memory across every finger trajectory.",
          "reading": "Constant practice with uninterrupted focus builds durable motor memory across every finger trajectory.",
          "translation": "Drill passage: Flow continuity and syllable chunking."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which biomechanical finger motion or rhythmic keystroke technique ensures peak speed and zero strain?",
          "options": [
            "Directly at the exact character being pressed",
            "10 words behind",
            "At your hands",
            "2 to 3 words ahead"
          ],
          "answerIndex": 3,
          "explanation": "Looking 2-3 words ahead allows the brain to chunk words into pre-compiled motor programs."
        },
        {
          "prompt": "What is the primary cause of speed drops between seconds 35 and 50 of a 1-minute sprint?",
          "options": [
            "Fingernail growth",
            "Monitor refresh rate decay",
            "Cognitive fatigue, loss of visual lookahead, and muscle tension spikes causing micro-pauses",
            "Keyboard overheating"
          ],
          "answerIndex": 2,
          "explanation": "Loss of continuity and forearm tension spikes degrade rhythm during mid-sprint fatigue."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 26:",
          "options": [
            "Smashing keys harder",
            "Using only the index fingers",
            "Looking down at every punctuation mark",
            "Eliminating micro-pauses and hesitations between words to maintain continuous flow"
          ],
          "answerIndex": 3,
          "explanation": "Continuous fluid motion without hesitations yields massive WPM gains."
        },
        {
          "prompt": "Why should your wrists float slightly above the desk during typing sprints?",
          "options": [
            "To make more noise",
            "To stretch the keyboard cable",
            "To cool down the desk",
            "To prevent friction drag, maintain agile lateral reach, and protect the carpal tunnel from compressive pressure"
          ],
          "answerIndex": 3,
          "explanation": "Floating wrists optimize biomechanical mobility and prevent ergonomic injury."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What accuracy threshold must you maintain during 1-minute focus intervals to ensure optimal motor learning (deliberate practice)?",
          "options": [
            "70% accuracy with frantic speed",
            "50% accuracy",
            "100% accuracy at 10 WPM only",
            "98.0% to 99.5%+ accuracy"
          ],
          "answerIndex": 3,
          "explanation": "High accuracy (>98%) reinforces clean motor pathways without myelinating typos.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Select the correct drill sentence demonstrating balanced prose rhythm:",
          "options": [
            "Modrn archtecture blends natral light...",
            "MODERN ARCHITECTURE BLENDS...",
            "Modern architecture blends natural light with sustainable materials to create serene public spaces.",
            "modernarchitectureblendsnaturallight..."
          ],
          "answerIndex": 2,
          "explanation": "Standard mixed-case English prose with natural spacing and punctuation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What should you do if your fingers tense up during the final 15 seconds of a sprint?",
          "options": [
            "Slam the spacebar with both thumbs",
            "Exhale deeply, consciously drop shoulder tension, and ease finger pressure back into a light, dancing touch",
            "Look down at your hands",
            "Stop typing and shake your head"
          ],
          "answerIndex": 1,
          "explanation": "Conscious breath regulation and releasing forearm tension restores typing cadence.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the typing speed formula?",
          "options": [
            "WPM = (Total characters typed / 5) / Time in minutes",
            "WPM = Total keystrokes / 10",
            "WPM = Accuracy percentage * 2",
            "WPM = Total words counted on screen / 2"
          ],
          "answerIndex": 0,
          "explanation": "Standard WPM metric defines one word as 5 characters (including spaces).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 7, Lesson 1: Foundational & Structural Mastery (The quiet harbor reflected the)"
  },
  "typing-u7-l2": {
    "id": "typing-u7-l2",
    "unit": "typing-u7",
    "level": "advanced",
    "objective": "Build sustained 2-minute aerobic typing stamina, managing forearm muscle fatigue and holding consistent pacing across long paragraphs.",
    "presentation": {
      "explanation": "Extending your sprint interval from 1 minute to **2 minutes (120 seconds)** crosses the aerobic threshold of motor stamina:\n\n1. The 2-Minute Fatigue Curve:\n   - At 1 minute, you can brute-force a test on adrenaline.\n   - At 2 minutes, physical tension in the extensor digitorum and flexor muscles of the forearm accumulates rapidly if you bottom out keys with excessive strike force.\n   - **The Feather-Touch Principle**: Mechanical and laptop scissor switches actuate before bottoming out (typically at 1.5–2.0 mm of travel). Striking keys with minimal necessary force saves ~40% muscular energy over a 2-minute test.\n\n2. Pace Setting & Metronomic Cadence:\n   - Do NOT sprint at 120% speed for the first 30 seconds only to crash into a wall of typos at second 75.\n   - Target a steady 90% cruising speed from keystroke 1. Consistency beats frantic oscillation every time.\n\n3. Eye Tracking & Line Wrap Transitions:\n   - When reading across multi-line paragraphs, train your eyes to scan the next line's opening word while your fingers are still finishing the current line's final word.\n   - This prevents the notorious 'end-of-line stutter' where typists freeze for 400ms when transitioning lines.",
      "examples": [
        {
          "target": "Renewable energy technologies have advanced dramatically over the past decade, driving down costs and accelerating global adoption across power grids.",
          "reading": "Renewable energy technologies have advanced dramatically over the past decade, driving down costs and accelerating global adoption across power grids.",
          "translation": "Aerobic pacing drill: Technical exposition with multisyllabic vocabulary."
        },
        {
          "target": "Scientific discovery thrives on disciplined curiosity, rigorous experimental validation, and open collaborative research across diverse disciplines.",
          "reading": "Scientific discovery thrives on disciplined curiosity, rigorous experimental validation, and open collaborative research across diverse disciplines.",
          "translation": "Aerobic pacing drill: Long clause transitions."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which biomechanical finger motion or rhythmic keystroke technique ensures peak speed and zero strain?",
          "options": [
            "Pressing keys with the minimum force necessary for switch actuation rather than bottoming out violently, conserving muscular energy",
            "Skipping the spacebar",
            "Typing with actual bird feathers",
            "Hovering hands 3 feet in the air"
          ],
          "answerIndex": 0,
          "explanation": "Light keypress force conserves forearm energy and prevents fatigue over long intervals."
        },
        {
          "prompt": "How should you approach the first 30 seconds of a 2-minute typing interval?",
          "options": [
            "Establish a smooth, controlled 90% cruising pace with 99%+ accuracy rather than over-sprinting",
            "Type at 150% maximum burst speed until your fingers hurt",
            "Type with one hand only",
            "Wait 10 seconds before starting"
          ],
          "answerIndex": 0,
          "explanation": "Even pacing from the start yields higher average WPM and fewer fatigue errors."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 27:",
          "options": [
            "Stop typing for 2 seconds at each line break",
            "Hit Enter twice after every line",
            "Train your eyes to scan the opening of the next line while your hands complete the current line's final word",
            "Memorize the entire paragraph before starting"
          ],
          "answerIndex": 2,
          "explanation": "Predictive visual line-scanning maintains uninterrupted rhythm across line wraps."
        },
        {
          "prompt": "Which muscle group is primarily responsible for finger extension and prone to fatigue during long typing intervals?",
          "options": [
            "Biceps brachii",
            "Quadriceps femoris",
            "Pectoralis major",
            "Forearm extensor muscles"
          ],
          "answerIndex": 3,
          "explanation": "Forearm extensor muscles control finger lift and lateral reaches."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the typing stamina factors: Feather touch, Cruising pace, Line-wrap lookahead, Wrist posture:",
          "options": [
            "All mean looking at keys",
            "All are food terms",
            "Feather touch: energy conservation | Cruising pace: steady velocity | Line-wrap lookahead: continuous reading | Wrist posture: floating neutral",
            "All mean heavy smashing"
          ],
          "answerIndex": 2,
          "explanation": "Typing stamina biomechanics matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Identify the multi-syllabic passage best suited for 2-minute endurance practice:",
          "options": [
            "TECHNOLOGY IS FAST AND GOOD...",
            "Technological innovation continuously reshapes global communication, transforming how communities collaborate across geographic boundaries.",
            "12345 67890 12345 67890...",
            "Tech inovaton continously reshaps..."
          ],
          "answerIndex": 1,
          "explanation": "Balanced academic exposition with multi-syllabic words and commas.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why does over-sprinting in the first 30 seconds lead to lower overall test results?",
          "options": [
            "Early error spikes cause psychological panic and lactic acid build-up in small hand muscles, causing severe speed degradation in minutes 2 and beyond",
            "The keyboard timer runs faster",
            "It turns off word wrap",
            "The computer caps your speed"
          ],
          "answerIndex": 0,
          "explanation": "Over-sprinting leads to error cascades and muscular exhaustion.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the recommended wrist angle relative to the forearm during typing?",
          "options": [
            "Bent upward at 45 degrees",
            "Bent downward at 45 degrees",
            "Twisted outward laterally",
            "Straight and neutral"
          ],
          "answerIndex": 3,
          "explanation": "Neutral wrist alignment minimizes median nerve pressure and carpal strain.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 7, Lesson 2: Foundational & Structural Mastery (Renewable energy technologies )"
  },
  "typing-u7-l3": {
    "id": "typing-u7-l3",
    "unit": "typing-u7",
    "level": "advanced",
    "objective": "Master the dynamic transition between Burst Speed on high-frequency n-grams and Controlled Cruise Control on complex technical vocabulary, avoiding the burst-and-stall trap.",
    "presentation": {
      "explanation": "All elite typists employ a technique known as **Dynamic Cadence Modulation**:\n\n1. The Burst-and-Stall Trap:\n   - Amateur typists try to type every single word at the exact same frantic speed.\n   - When they hit an easy word (*the, with, that*), they fly at 120 WPM; when they hit an awkward word (*juxtaposition, bureaucracy*), they screech to a complete halt (0 WPM).\n   - This jerky 'burst-and-stall' pattern creates severe rhythm disruption and induces hand stiffness.\n\n2. Dual-Gear Typing Architecture:\n   - **Gear 1: High-Frequency Burst (Word Chunking)**:\n     - Common bigrams/words (*and, for, the, you, have, with, tion, ing*) are executed as single autonomic 'chords' or fluid rolling finger sweeps (100–140+ WPM equivalent).\n   - **Gear 2: Metronomic Cruise Control (Letter-by-Letter)**:\n     - Rare, multi-syllabic, foreign, or technical words (*phenomenological, microarchitecture*) are typed with steady, deliberate letter-by-letter precision (60–80 WPM equivalent).\n\n3. The Smooth Gear Shift:\n   - Never slam the brakes between Gear 1 and Gear 2. Fluidly decelerate as your visual lookahead registers the complex word, execute it cleanly, and then accelerate into the subsequent common words.",
      "examples": [
        {
          "target": "The philosophical implications of quantum entanglement challenge our fundamental assumptions about physical reality.",
          "reading": "The philosophical implications of quantum entanglement challenge our fundamental assumptions about physical reality.",
          "translation": "Gear shift drill: Easy short words ('The', 'of', 'our', 'about') interspersed with complex polysyllabic vocabulary ('philosophical', 'entanglement', 'assumptions')."
        },
        {
          "target": "We must carefully analyze the statistical distribution before drawing broad empirical conclusions from the dataset.",
          "reading": "We must carefully analyze the statistical distribution before drawing broad empirical conclusions from the dataset.",
          "translation": "Gear shift drill: High-frequency connective prose surrounding analytical vocabulary."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which biomechanical finger motion or rhythmic keystroke technique ensures peak speed and zero strain?",
          "options": [
            "Typing to rock music only",
            "Changing keyboard layouts mid-sentence",
            "Typing with alternating hands only",
            "Fluidly bursting on common automated words while shifting into controlled metronomic precision on complex polysyllabic terms"
          ],
          "answerIndex": 3,
          "explanation": "Cadence modulation pairs automaticity on easy words with conscious control on complex ones."
        },
        {
          "prompt": "What causes the destructive 'burst-and-stall' typing habit?",
          "options": [
            "A weak Wi-Fi connection",
            "Old computer monitors",
            "Using mechanical key switches",
            "Trying to sprint through complex unfamiliar words at the same speed as automated 3-letter words, causing collision errors and sudden stops"
          ],
          "answerIndex": 3,
          "explanation": "Over-sprinting complex terms without slowing down triggers collisions and rhythm freezes."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 28:",
          "options": [
            "As unified, fluid rolling finger sweeps (motor chunks) executed in a single impulse",
            "With one finger hunting each letter",
            "With a 1-second pause between each letter",
            "Using the right thumb only"
          ],
          "answerIndex": 0,
          "explanation": "High-frequency suffixes are chunked into single unified motor programs."
        },
        {
          "prompt": "When encountering a rare word like 'neurobiology', what is the recommended strategy?",
          "options": [
            "Consciously downshift into a smooth, steady letter-by-letter cadence ensuring 100% accuracy before accelerating",
            "Close your eyes and mash the keys",
            "Skip the word completely",
            "Hit backspace 10 times"
          ],
          "answerIndex": 0,
          "explanation": "Deliberate downshifting prevents devastating multi-character error cascades."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the sentence: 'It is essential to understand the organizational architecture of complex systems.' Where should you downshift?",
          "options": [
            "Type with one finger throughout",
            "Downshift on 'organizational' and 'architecture'; burst through 'It is', 'to', 'the', 'of'",
            "Burst on everything without looking",
            "Downshift on 'It is'"
          ],
          "answerIndex": 1,
          "explanation": "Downshifting on multisyllabic terms maintains rhythm while bursting on short connectors.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the primary advantage of motor chunking common words like 'the', 'and', 'that'?",
          "options": [
            "It frees up cognitive working memory to preview upcoming difficult words in the visual buffer",
            "It speeds up internet browsing",
            "It wears out keys evenly",
            "It skips spelling checks"
          ],
          "answerIndex": 0,
          "explanation": "Automating easy words preserves executive attention for upcoming complex text.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is rhythm consistency more important than peak burst speed on typing leaderboard tests?",
          "options": [
            "Keyboards break at high speeds",
            "Rhythm changes font color",
            "Leaderboards disqualify bursting",
            "Average net WPM is determined by the total area under the speed curve; a single 1-second stall wipes out the gains of a 10-second 120 WPM burst"
          ],
          "answerIndex": 3,
          "explanation": "Stalls and pauses drastically depress net average WPM compared to unbroken steady flow.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete the maxim: 'Slow is smooth, and _______.'",
          "options": [
            "hard is good",
            "smooth is slow",
            "smooth is fast",
            "fast is loud"
          ],
          "answerIndex": 2,
          "explanation": "'Slow is smooth, and smooth is fast' is the timeless motor skill maxim.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 7, Lesson 3: Foundational & Structural Mastery (The philosophical implications)"
  },
  "typing-u7-l4": {
    "id": "typing-u7-l4",
    "unit": "typing-u7",
    "level": "advanced",
    "objective": "Master instant error recovery discipline, clean backspacing mechanics with Ctrl+Backspace word deletion, and maintaining emotional calm during high-stakes typing sprints.",
    "presentation": {
      "explanation": "The difference between an 80 WPM typist and a 110+ WPM typist is almost never raw finger speed — it is **how they respond to mistakes**:\n\n1. The Error Spiral (Panic Cascading):\n   - When an average typist makes a typo, they tense up, hesitate for 300ms, frantically hit backspace 7 times, overshoot, re-type the wrong letter, and lose 3–5 seconds of momentum.\n   - **The Golden Psychology Rule**: *A typo is merely a data point, not an emergency*. Keep your breathing relaxed, drop shoulder tension, and execute clean correction mechanics instantly.\n\n2. Modern Correction Mechanics: **Ctrl + Backspace** (Word Erase):\n   - In modern typing platforms (Monkeytype, TypeRacer, 10FastFingers) and text editors (VS Code, Word), pressing **Ctrl + Backspace** instantly deletes the **entire current word** in a single stroke.\n   - *Rule of Thumb*: If you made a typo on the 1st or 2nd letter of an 8-letter word, do NOT tap backspace 6 times — tap **Ctrl + Backspace** with left pinky on Ctrl and right pinky on Backspace, and re-type the word cleanly from scratch.\n   - If the typo is on the very last letter, a single tap of Backspace is faster.\n\n3. The 'Never Look Back' Flow State:\n   - Once corrected, never let your attention dwell on the error. Snap your eyes immediately back to the 2-word lookahead buffer.",
      "examples": [
        {
          "target": "Architectural integrity requires precise mathematical calculations and thorough structural engineering analysis.",
          "reading": "Architectural integrity requires precise mathematical calculations and thorough structural engineering analysis.",
          "translation": "Error recovery drill: If you mis-hit 'struk', immediately Ctrl+Backspace and re-type 'structural'."
        },
        {
          "target": "Maintaining composure under pressure distinguishes master typists from amateur competitors.",
          "reading": "Maintaining composure under pressure distinguishes master typists from amateur competitors.",
          "translation": "Psychological composure drill."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which biomechanical finger motion or rhythmic keystroke technique ensures peak speed and zero strain?",
          "options": [
            "Shift + Space",
            "Ctrl + Backspace",
            "Tab + Enter",
            "Alt + F4"
          ],
          "answerIndex": 1,
          "explanation": "Ctrl+Backspace wipes the whole word in a single instantaneous keystroke."
        },
        {
          "prompt": "When is it better to use Ctrl+Backspace rather than single Backspace taps?",
          "options": [
            "When the typo occurred near the beginning or middle of a multisyllabic word",
            "Only when the computer is frozen",
            "Never",
            "When typing single letters"
          ],
          "answerIndex": 0,
          "explanation": "Resetting the entire word is dramatically faster than tapping backspace 4–7 times."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 29:",
          "options": [
            "Maintaining slow nasal breathing, relaxing shoulder tension, and immediately shifting visual focus to the 2-word lookahead buffer",
            "Closing the browser",
            "Hitting the keyboard harder",
            "Stopping the test and starting over every time"
          ],
          "answerIndex": 0,
          "explanation": "Maintaining physiological calm prevents the panic tension that causes error cascades."
        },
        {
          "prompt": "Which fingers are typically used to execute 'Ctrl + Backspace' efficiently?",
          "options": [
            "Left pinky on Ctrl + Right pinky/ring reaching up to Backspace",
            "Left middle finger only",
            "Both thumbs",
            "Left index and right index"
          ],
          "answerIndex": 0,
          "explanation": "Left pinky holds Ctrl while right pinky executes Backspace."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the error scenarios with the optimal correction strategy: Typo on 1st letter of 'extraordinary', Typo on last letter of 'cat', Error cascade of 3 words, Hand tension spike:",
          "options": [
            "1st letter of long word: Ctrl+Backspace | Last letter of short word: Single Backspace | 3-word cascade: Stop, exhale, reset buffer | Tension spike: Drop shoulders, lighten touch",
            "All scenarios: Smash keyboard",
            "All are food words",
            "All scenarios: Give up"
          ],
          "answerIndex": 0,
          "explanation": "Optimal error recovery mechanics matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why does frantically mashing single Backspace often result in overshoot errors?",
          "options": [
            "It turns on Caps Lock",
            "Backspace key loses battery power",
            "The screen goes black",
            "Key repeat delays and motor panic cause typists to delete good characters preceding the typo, requiring extra re-typing"
          ],
          "answerIndex": 3,
          "explanation": "Overshooting backspaces destroys valid text and wastes valuable seconds.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What happens in your brain when you pause and dwell emotionally on a typo you made 5 seconds ago?",
          "options": [
            "Hand coordination doubles",
            "Typing speed increases",
            "Working memory is hijacked by negative self-talk, starving the visual lookahead buffer and causing subsequent typos",
            "Accuracy automatically reaches 100%"
          ],
          "answerIndex": 2,
          "explanation": "Emotional rumination starves the visual lookahead buffer and triggers new errors.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete the rule: 'Correct clean, and _______.'",
          "options": [
            "stare at the mistake",
            "never look back",
            "stop typing",
            "restart the computer"
          ],
          "answerIndex": 1,
          "explanation": "'Correct clean, and never look back' maintains forward momentum.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 7, Lesson 4: Foundational & Structural Mastery (Architectural integrity requir)"
  },
  "typing-u7-l5": {
    "id": "typing-u7-l5",
    "unit": "typing-u7",
    "level": "advanced",
    "objective": "Demonstrate comprehensive Advanced stamina mastery by completing a full 3-minute continuous technical and literary endurance passage maintaining 60+ WPM with 98.5%+ accuracy, flawless cadence modulation, and instant error recovery.",
    "presentation": {
      "explanation": "In this Master Checkpoint for Unit 7, we synthesize all elements of advanced typing endurance across a **3-Minute (180-second) Continuous Stamina Challenge**:\n\n1. The 3-Minute Grand Challenge:\n   - 180 seconds tests true professional endurance: muscular efficiency, eye-ahead buffering across multiple paragraph wraps, rhythmic gear-shifting, and unshakeable psychological focus.\n\n2. Synthesis of Core Unit 7 Disciplines:\n   - **Visual Lookahead Buffer**: Scanning 2–3 words ahead without looking down.\n   - **Feather Touch Actuation**: Striking keys lightly to preserve forearm stamina across 180 seconds.\n   - **Dynamic Cadence Modulation**: Cruising through polysyllabic terminology and bursting on automated connectors.\n   - **Ctrl + Backspace Correction Mechanics**: Instant clean error resetting without overshoots.\n   - **Breath & Ergonomic Neutrality**: Floating wrists, dropped shoulders, relaxed nasal breathing.\n\n3. The Master Examination Passage:\n   - 'Throughout the history of computer science, the relentless pursuit of computational efficiency has driven profound breakthroughs in hardware architecture and software engineering. From the earliest mechanical calculators and vacuum-tube mainframes to modern distributed cloud systems and quantum computing processors, engineers have continuously pushed the boundaries of speed and reliability. Mastering the keyboard is not merely an exercise in manual dexterity; it is the fundamental bridge connecting human thought to digital execution. When your hands move with effortless precision and unbroken rhythm, cognitive friction vanishes, allowing complex algorithmic logic, creative prose, and architectural vision to flow directly from the mind onto the screen without hesitation.'",
      "examples": [
        {
          "target": "Mastering the keyboard is not merely an exercise in manual dexterity; it is the fundamental bridge connecting human thought to digital execution.",
          "reading": "Mastering the keyboard is not merely an exercise in manual dexterity; it is the fundamental bridge connecting human thought to digital execution.",
          "translation": "Master excerpt: Flow, semicolons, and polysyllabic terms."
        },
        {
          "target": "When your hands move with effortless precision and unbroken rhythm, cognitive friction vanishes completely.",
          "reading": "When your hands move with effortless precision and unbroken rhythm, cognitive friction vanishes completely.",
          "translation": "Master excerpt: Rhythmic continuity and feather touch."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which biomechanical finger motion or rhythmic keystroke technique ensures peak speed and zero strain?",
          "options": [
            "Demonstrate sustained typing stamina, holding 60+ WPM with 98.5%+ accuracy across technical prose without fatigue breakdown",
            "Type as fast as possible for 10 seconds and stop",
            "Look at the keyboard to check finger placement",
            "Type with caps lock on"
          ],
          "answerIndex": 0,
          "explanation": "Sustained accuracy, rhythm, and fatigue resistance across a full 3-minute interval."
        },
        {
          "prompt": "How does high-speed touch typing eliminate 'cognitive friction' in programming and writing?",
          "options": [
            "By automating key execution entirely, allowing working memory to focus 100% on creative thought, structure, and logic",
            "By autocorrecting syntax errors",
            "By turning off the screen",
            "By replacing the mouse"
          ],
          "answerIndex": 0,
          "explanation": "Automaticity frees cognitive capacity for high-level problem solving."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 30:",
          "options": [
            "Hit backspace repeatedly",
            "Slightly decelerate by 5%, breathe deeply, focus on crisp letter precision, and re-establish clean rhythm",
            "Give up",
            "Sprint twice as fast"
          ],
          "answerIndex": 1,
          "explanation": "A small intentional downshift restores accuracy and prevents catastrophic error cascades."
        },
        {
          "prompt": "What role do the tactile bumps on the F and J keys play during long endurance typing intervals?",
          "options": [
            "They heat up the keyboard",
            "They provide continuous non-visual sensory confirmation of home row positioning, ensuring hands never drift even during fatigue",
            "They indicate number row reach",
            "They are decorative"
          ],
          "answerIndex": 1,
          "explanation": "F and J homing bumps ground your hands in tactile space without needing visual checks."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Identify the complete, error-free excerpt from the Unit 7 Master Passage:",
          "options": [
            "Througout the histry of computr scince...",
            "throughoutthehistoryofcomputerscience...",
            "THROUGHOUT THE HISTORY OF COMPUTER SCIENCE...",
            "Throughout the history of computer science, the relentless pursuit of computational efficiency has driven profound breakthroughs in hardware architecture and software engineering."
          ],
          "answerIndex": 3,
          "explanation": "Master passage opening sentence with flawless spelling, capitalization, and punctuation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What core physical, cognitive, and mechanical disciplines were mastered across Unit 7 in Touch Typing?",
          "options": [
            "Hunting and pecking with index fingers only",
            "Number pad only",
            "1-minute and 2-minute focus windows, feather-touch actuation, predictive visual lookahead (2-3 words ahead), dynamic cadence modulation (burst vs. cruise), Ctrl+Backspace word deletion, and 3-minute sustained stamina at 98.5%+ accuracy",
            "Typing with eyes closed while wearing gloves"
          ],
          "answerIndex": 2,
          "explanation": "Unit 7 comprehensive advanced typing stamina, rhythm modulation, and error recovery mastery.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the final frontier awaiting you in Unit 8 of Touch Typing?",
          "options": [
            "Re-learning home row A S D F",
            "Sprint Drills Toward 100+ WPM",
            "Learning stenography",
            "Typing on a smartphone"
          ],
          "answerIndex": 1,
          "explanation": "Unit 8 focuses on sprint drills pushing beyond the 100+ WPM threshold.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is typing accuracy always prioritized over raw speed in motor skill acquisition?",
          "options": [
            "Because clean motor pathways are myelinated through accurate repetition, whereas practicing mistakes hardwires errors into permanent muscle memory",
            "Because keyboards are fragile",
            "Because fast typing is illegal",
            "Because speed does not count on tests"
          ],
          "answerIndex": 0,
          "explanation": "Neurological myelination of correct movement patterns requires high-accuracy deliberate practice.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 7, Lesson 5: Foundational & Structural Mastery (Mastering the keyboard is not )"
  },
  "typing-u8-l1": {
    "id": "typing-u8-l1",
    "unit": "typing-u8",
    "level": "master",
    "objective": "Execute 15-second high-velocity sprint bursts on the top 100 high-frequency English words, breaking the 100-120+ WPM threshold through ultra-light switch actuation and zero finger drag.",
    "presentation": {
      "explanation": "Welcome to Master Touch Typing Unit 8: Sprint Drills Toward 100+ WPM! To transcend the 80 WPM barrier into the **Elite 100-120+ WPM Century Tier**, you must shift your motor mechanics from individual finger movements to **Neural Reflex Rolling**:\n\n1. Biomechanics of the 100+ WPM Sprint:\n   - **Actuation Point Feathering**: Modern mechanical and scissor switches actuate at ~1.5mm of travel. Do NOT bottom out with heavy downward force; float your fingertips across the keycaps like playing a rapid Chopin arpeggio.\n   - **Eliminating Finger Drag**: After striking a key, your finger must immediately release tension. Co-contraction (tensing opposing muscles) is the #1 enemy of speed.\n   - **Chorded Word Rolls**: Words like *'the', 'and', 'for', 'you', 'with', 'that', 'this'* should feel like a single unified hand pulse rather than 3-4 separate taps.",
      "examples": [
        {
          "target": "the and for that with have this from they will",
          "reading": "Top 10 High-Frequency Sprint Words",
          "translation": "Executed as rapid 100+ WPM rolling chords."
        },
        {
          "target": "there would their about which could people other these first",
          "reading": "Top 11-20 Sprint Words",
          "translation": "High-velocity word rolls."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which biomechanical finger motion or rhythmic keystroke technique ensures peak speed and zero strain?",
          "options": [
            "Pounding the keyboard with maximum physical force",
            "Typing with only the index fingers",
            "Looking down at the keyboard continuously",
            "Actuating keys lightly at their trigger point without bottoming out heavily against the switch backplate"
          ],
          "answerIndex": 3,
          "explanation": "Light switch actuation and immediate tension release eliminate finger drag and muscle fatigue."
        },
        {
          "prompt": "What is 'word roll' chunking in elite touch typing?",
          "options": [
            "Typing while rolling a ball",
            "Spinning the keyboard",
            "Executing an entire frequent word (like 'that' or 'with') as a single coordinated rolling hand motion rather than individual isolated keypresses",
            "Rolling your chair while typing"
          ],
          "answerIndex": 2,
          "explanation": "Word rolls execute multi-letter sequences as single fluid motor gestures."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 31:",
          "options": [
            "0 words",
            "10 paragraphs ahead",
            "Looking at the ceiling",
            "2 to 3 words ahead of your currently striking fingers"
          ],
          "answerIndex": 3,
          "explanation": "A 2-3 word visual lookahead buffer allows the motor cortex to pre-plan upcoming finger trajectories."
        },
        {
          "prompt": "What is the key difference between an 80 WPM typist and a 120 WPM typist?",
          "options": [
            "The 120 WPM typist has 12 fingers",
            "The 120 WPM typist skips spaces between words",
            "The 120 WPM typist guesses the words",
            "The 120 WPM typist has zero inter-word pause latency, seamlessly linking words together in continuous isochronous rhythm"
          ],
          "answerIndex": 3,
          "explanation": "Eliminating inter-word pauses creates continuous high-speed flow."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the typing sprint components: Visual Lookahead, Feather Actuation, Word Rolling, Tension Release:",
          "options": [
            "All mean pound keyboard",
            "All mean type slower",
            "Visual Lookahead: Scan 2-3 words ahead | Feather Actuation: Trigger key lightly | Word Rolling: Chord high-frequency words | Tension Release: Immediate relaxation after strike",
            "All are keyboard models"
          ],
          "answerIndex": 2,
          "explanation": "High-velocity typing mechanics matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Type drill: `time into some them make than like been just`",
          "options": [
            "tome onto same them make then like bean just",
            "time into some them make than like been just",
            "time info some them make than like been just",
            "time into sum them mike than like been just"
          ],
          "answerIndex": 1,
          "explanation": "Exact high-frequency word sprint.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why does typing at 100+ WPM require 98%+ accuracy discipline?",
          "options": [
            "Because correcting a single typo at 100 WPM consumes ~500ms (backspace + retype), which instantly drags average speed down by 25-30 WPM",
            "Because computers shut down",
            "Because accuracy does not matter",
            "Because keyboards lock up on errors"
          ],
          "answerIndex": 0,
          "explanation": "Backspacing penalizes velocity heavily; high accuracy is the prerequisite for sustained speed.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'Speed is not rushing; speed is the total absence of _______.'",
          "options": [
            "punctuation",
            "rhythm",
            "accuracy",
            "hesitation, drag, and wasted motion"
          ],
          "answerIndex": 3,
          "explanation": "Speed is the total absence of hesitation, drag, and wasted motion.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 8, Lesson 1: Foundational & Structural Mastery (the and for that with have thi)"
  },
  "typing-u8-l2": {
    "id": "typing-u8-l2",
    "unit": "typing-u8",
    "level": "master",
    "objective": "Execute 30-second high-velocity N-Gram sweeps across complex consonant blends (STR, TCH, SPL, PHR, NGHT, SCR, MPTH) without stuttering or breaking keystroke rhythm.",
    "presentation": {
      "explanation": "While simple words roll easily, complex consonant clusters (**N-Grams**) frequently cause cognitive stutters that shatter typing momentum: **Complex N-Gram Sweeps**:\n\n1. High-Resistance Consonant Clusters:\n   - `STR-` (*string, structure, straight, strong*): Left ring `S` $\\rightarrow$ Left index `T` $\\rightarrow$ Left index `R`.\n   - `-TCH` (*catch, match, switch, scratch*): Left index `T` $\\rightarrow$ Left middle `C` $\\rightarrow$ Right index `H`.\n   - `SPL-` (*split, splash, splendid*): Left ring `S` $\\rightarrow$ Right pinky `P` $\\rightarrow$ Right ring `L`.\n   - `-IGHT` (*night, bright, thought, flight*): Right middle `I` $\\rightarrow$ Right index `G` $\\rightarrow$ Right index `H` $\\rightarrow$ Left index `T`.\n\n2. Cross-Hand Balancing:\n   - Practice alternating hands across difficult transitions (e.g. `MPTH` in *warmth, symptom, exempt*), preventing one hand from bottlenecking the opposite hand.",
      "examples": [
        {
          "target": "strength structure stretch strict straight string stream",
          "reading": "STR- cluster mastery",
          "translation": "Complex consonant sweep."
        },
        {
          "target": "bright flight knight thought caught brought daughter",
          "reading": "-GHT cluster mastery",
          "translation": "High-speed quadri-gram."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which biomechanical finger motion or rhythmic keystroke technique ensures peak speed and zero strain?",
          "options": [
            "Left ring (S) -> Left index (T) -> Left index",
            "Thumb for S and index for T",
            "Left index for all 3 letters",
            "Right hand cross-over"
          ],
          "answerIndex": 0,
          "explanation": "S (ring) -> T (index) -> R (index) is the optimal anatomical path."
        },
        {
          "prompt": "Why do clusters like '-IGHT' cause typing speed drops in unconditioned typists?",
          "options": [
            "Because G and H require lateral index reaches while I and T cross between upper rows on opposite hands",
            "Because I and G are silent letters",
            "Because the T key is sticky",
            "Because GHT is not in the dictionary"
          ],
          "answerIndex": 0,
          "explanation": "Multi-finger lateral index reaches and cross-hand transitions require specific conditioning."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 32:",
          "options": [
            "strenght througout script mach splash",
            "strenth throughout scrip match splsh",
            "strength throughout script match splash",
            "strength through out script match splash"
          ],
          "answerIndex": 2,
          "explanation": "Accurate execution of complex N-gram vocabulary."
        },
        {
          "prompt": "What technique eliminates hesitation when encountering a long, difficult technical word?",
          "options": [
            "Stopping completely to spell it out loud",
            "Skipping the word",
            "Typing with one hand",
            "Decomposing the word into familiar 2-to-3 letter N-gram syllables in the visual lookahead buffer"
          ],
          "answerIndex": 3,
          "explanation": "Chunking long words into familiar N-gram motor sub-programs maintains velocity."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the words to their core N-Gram cluster: STRETCH, SPLIT, CAUGHT, SCRATCH:",
          "options": [
            "All are numbers",
            "STRETCH: STR- / -TCH | SPLIT: SPL- | CAUGHT: -UGHT | SCRATCH: SCR- / -TCH",
            "All are 2-letter words",
            "All are vowel words"
          ],
          "answerIndex": 1,
          "explanation": "Consonant cluster identification matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Type: `The strict structure of the script brought bright insight.`",
          "options": [
            "The strict structure of the script brought bright insight.",
            "The strict structur of the script braught bright insight.",
            "The strict structure of the script brought bright insite.",
            "The stric structure of the scrip brought brigh insight."
          ],
          "answerIndex": 0,
          "explanation": "Exact complex N-gram sentence sprint.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is cross-hand rhythm consistency essential for 100+ WPM typing?",
          "options": [
            "Because keyboards only read one hand at a time",
            "Because hands cannot work together",
            "To prevent noise",
            "Because an uneven burst on one hand causes the opposite hand to mistime its strike, creating transposition errors"
          ],
          "answerIndex": 3,
          "explanation": "Bilateral temporal synchronization prevents cross-hand transposition errors.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'Conquer the complex N-grams, and you eliminate the _______.'",
          "options": [
            "spacebar",
            "vowels",
            "speed bumps of the English language",
            "need to type"
          ],
          "answerIndex": 2,
          "explanation": "Mastering N-grams smooths away typing speed bumps.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 8, Lesson 2: Foundational & Structural Mastery (strength structure stretch str)"
  },
  "typing-u8-l3": {
    "id": "typing-u8-l3",
    "unit": "typing-u8",
    "level": "master",
    "objective": "Break and sustain the 100 WPM Century Mark across a continuous 60-second multi-sentence prose sprint at 98%+ accuracy.",
    "presentation": {
      "explanation": "The **60-Second Century Sprint (100+ WPM)** is the universal rite of passage for elite typists. In 60 seconds, you must type **500+ error-free keystrokes**:\n\n1. The 100 WPM Math:\n   - $100\\text{ WPM} = 500\\text{ characters per minute} = 8.33\\text{ keystrokes per second} = 120\\text{ ms per keypress}$.\n   - Every 120 milliseconds, a fingertip must strike and release a key with surgical accuracy.\n\n2. The Flow State Architecture:\n   - **Breath Control**: Deep, diaphragmatic breathing. Holding your breath causes muscle rigidity within 20 seconds.\n   - **Eye Position**: Keep your eyes fixed ~1.5 inches ahead of your cursor on the screen.\n   - **Posture**: Wrists floating parallel to the desk; elbows at 90 degrees; shoulders dropped.",
      "examples": [
        {
          "target": "The quick brown fox jumps over the lazy dog while the autumn wind whispers through the towering pines in the silent mountain valley.",
          "reading": "Century Sprint Prose Benchmark",
          "translation": "Standard 100 WPM continuous sprint text."
        },
        {
          "target": "500 keystrokes in 60 seconds = 100.0 WPM at 98.4% accuracy.",
          "reading": "Century Benchmark Metric",
          "translation": "Target certification pace."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which biomechanical finger motion or rhythmic keystroke technique ensures peak speed and zero strain?",
          "options": [
            "2 keystrokes per second",
            "20 keystrokes per second",
            "50 keystrokes per second",
            "8.33 keystrokes per second"
          ],
          "answerIndex": 3,
          "explanation": "100 WPM × 5 characters = 500 CPM / 60 seconds = 8.33 keys/sec."
        },
        {
          "prompt": "What wrist posture is essential during high-speed typing sprints?",
          "options": [
            "Wrists bent backwards and planted firmly on the hard desk surface",
            "Wrists twisting side to side",
            "Typing with one wrist resting on the lap",
            "Wrists floating neutrally above the desk in straight alignment with the forearm"
          ],
          "answerIndex": 3,
          "explanation": "Floating neutral wrists prevent median nerve compression and allow full finger mobility."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 33:",
          "options": [
            "Constant practice builds enduring speed and effortless precision across every sentence we write.",
            "Constant practice biulds enduring speed and effortless precision across every sentence we write.",
            "Constant practice builds enduring sped and effortless precision accross every sentence we write.",
            "Constant practice builds enduring speed and efortless precision across every sentence we write."
          ],
          "answerIndex": 0,
          "explanation": "Century sprint accuracy verification."
        },
        {
          "prompt": "Why does attempting to 'rush' actually slow a typist down below 100 WPM?",
          "options": [
            "Rushing causes premature muscular co-contraction, resulting in mistimed strikes, finger collision, and accuracy drops",
            "Keyboards have speed limiters",
            "The screen cannot update that fast",
            "Rushing is good for typing"
          ],
          "answerIndex": 0,
          "explanation": "Muscular tension from rushing destroys timing and fluidity."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the speed tiers with their WPM ranges: Casual Typist, Professional Typist, Elite Typist, World-Class Typist:",
          "options": [
            "Casual: 30-50 WPM | Professional: 60-80 WPM | Elite: 100-120 WPM | World-Class: 140-180+ WPM",
            "There are no speed tiers",
            "All typists type at 10 WPM",
            "All typists type at 1000 WPM"
          ],
          "answerIndex": 0,
          "explanation": "Typing speed tier benchmarks matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Type: `The digital age demands mastery of language, code, and speed.`",
          "options": [
            "The digtal age demands mastery of language, code, and speed.",
            "The digital age demands mastery of language, code, and sped.",
            "The digital age demands mastry of language, code, and speed.",
            "The digital age demands mastery of language, code, and speed."
          ],
          "answerIndex": 3,
          "explanation": "Exact sentence sprint.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the physiological role of dopamine during a successful high-speed typing flow state?",
          "options": [
            "It makes fingers grow longer",
            "It causes muscle cramps",
            "It reinforces smooth motor sequencing in the basal ganglia, sharpening focus and reducing perceived exertion",
            "It turns off the screen"
          ],
          "answerIndex": 2,
          "explanation": "Dopamine reinforces striatal motor chunking and maintains cognitive flow.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: '100 WPM is not a destination; it is the gateway to _______.'",
          "options": [
            "hand cramps",
            "thought-speed human-computer integration",
            "stopping practice",
            "breaking the keyboard"
          ],
          "answerIndex": 1,
          "explanation": "100 WPM achieves thought-speed computational flow.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 8, Lesson 3: Foundational & Structural Mastery (The quick brown fox jumps over)"
  },
  "typing-u8-l4": {
    "id": "typing-u8-l4",
    "unit": "typing-u8",
    "level": "master",
    "objective": "Fuse numbers, symbols, brackets, camelCase identifiers, and heavy punctuation into high-speed technical typing, sustaining 90+ WPM on real-world code and data streams.",
    "presentation": {
      "explanation": "True typing mastery is not limited to lowercase English prose; it must extend seamlessly to **Complex Code Syntax, Numbers & Data Streams at 90+ WPM**:\n\n1. The Code Typing Reflex:\n   - Code contains rapid shifts between lowercase words, capitalized camelCase, underscore_names, digits, and paired brackets: `function calculateTotal(items = [], taxRate = 0.08) { return items.reduce((a, b) => a + b, 0) * (1 + taxRate); }`.\n\n2. Shift-Key Ergonomics on Symbols:\n   - **Opposite-Hand Shift Rule**: To type `(`, hold Right Shift with Right Pinky and strike `9` with Left Ring finger. To type `)`, hold Left Shift with Left Pinky and strike `0` with Right Pinky.\n   - Never use the same hand for both Shift and the symbol key (which forces awkward hand twisting).\n\n3. Bracket & Quote Pair Navigation:\n   - Memorize the spatial reach for `{}`, `[]`, `()`, `<>`, `\"\"`, `''`, `=>`, `&&`, `||`, `!=`.",
      "examples": [
        {
          "target": "const userList = await fetchUsers({ limit: 50, active: true });",
          "reading": "Modern JavaScript Async Call",
          "translation": "90+ WPM code typing drill."
        },
        {
          "target": "for (let i = 0; i < array.length; i++) { sum += array[i] * 2.5; }",
          "reading": "Algorithmic Loop with Symbols and Math",
          "translation": "High-speed code syntax."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which biomechanical finger motion or rhythmic keystroke technique ensures peak speed and zero strain?",
          "options": [
            "Use the thumb for Shift",
            "Always hold Shift with the hand OPPOSITE to the finger striking the symbol key",
            "Press both Shift keys simultaneously",
            "Always use CapsLock for every symbol"
          ],
          "answerIndex": 1,
          "explanation": "Opposite-hand Shift prevents hand twisting and preserves neutral alignment."
        },
        {
          "prompt": "Type the code snippet: `const result = items.filter(x => x.id !== null);`",
          "options": [
            "const result = items.filter(x => x.id !== null);",
            "const result = items.filter(x => x.id != null);",
            "const result = items.filter(x => x.id == null);",
            "const result = items.filter(x = x.id !== null);"
          ],
          "answerIndex": 0,
          "explanation": "Exact code syntax typing."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 34:",
          "options": [
            "{\"id\": 1024, \"status\": \"ACTIVE\", \"rate\": 0.95}",
            "{\"id\": 1024; \"status\": \"ACTIVE\"; \"rate\": 0.95}",
            "{\"id\": 1024, \"status\": \"active\", \"rate\": 0.95}",
            "{id: 1024, status: ACTIVE, rate: 0.95}"
          ],
          "answerIndex": 0,
          "explanation": "JSON data format with quotes, numbers, colons, and braces."
        },
        {
          "prompt": "Why is code typing often perceived as slower than prose typing?",
          "options": [
            "Because code contains unpredictable symbols, brackets, and uppercase shifts that disrupt standard English bigram muscle memory, requiring specialized syntax conditioning",
            "Because code requires no spaces",
            "Because programming languages are broken",
            "Because monitors are too bright"
          ],
          "answerIndex": 0,
          "explanation": "Symbol diversity and non-standard lexical patterns require dedicated syntax conditioning."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the programming operators to their typing finger patterns: =>, &&, ||, !==:",
          "options": [
            "All require CapsLock",
            "All are standard letters",
            "All are numbers",
            "=>: Equal then Greater-than | &&: Right-Shift 7 twice | ||: Right-Shift Backslash twice | !==: Exclamation then Equals twice"
          ],
          "answerIndex": 3,
          "explanation": "Programming operator motor patterns matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Type: `if (value >= 100 && isValid === true) { return process(value); }`",
          "options": [
            "if (value >= 100 & isValid === true) { return process(value); }",
            "if (value > 100 && isValid === true) { return process(value); }",
            "if (value >= 100 && isValid === true) { return process(value); }",
            "if (value >= 100 && isValid == true) { return process(value); }"
          ],
          "answerIndex": 2,
          "explanation": "Exact full code statement.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the primary benefit of mastering 90+ WPM code typing for software engineers?",
          "options": [
            "Typing without a computer screen",
            "Zero mental distraction during syntax entry, allowing 100% of executive cognitive bandwidth to remain focused on algorithmic logic and system architecture",
            "Writing 10,000 lines of bad code per hour",
            "Avoiding code reviews"
          ],
          "answerIndex": 1,
          "explanation": "Frees executive working memory for architectural logic and algorithmic problem-solving.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'Code at thought-speed; make syntax as natural as _______.'",
          "options": [
            "breathing and speech",
            "copying and pasting",
            "slow reading",
            "using a mouse"
          ],
          "answerIndex": 0,
          "explanation": "Natural coding fluency.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 8, Lesson 4: Foundational & Structural Mastery (const userList = await fetchUs)"
  },
  "typing-u8-l5": {
    "id": "typing-u8-l5",
    "unit": "typing-u8",
    "level": "master",
    "objective": "Demonstrate Master Century Speed certification by achieving 100+ WPM across a demanding 60-second mixed prose, numeric, and symbol sprint at 98%+ accuracy.",
    "presentation": {
      "explanation": "In this Master Checkpoint for Unit 8, you validate your **Official Century Speed Certification (100+ WPM / 98%+ Accuracy)** across mixed technical and literary text:\n\n1. The Century Sprint Challenge:\n   - **Duration**: 60 Seconds.\n   - **Target**: 500+ Keystrokes ($100+\\text{ WPM}$).\n   - **Accuracy Threshold**: $\\ge 98.0\\%$.\n   - **Challenge Text**:\n     *\"In 2026, the velocity of human thought and digital execution converged at unprecedented scale. Elite developers and writers mastered the kinetic art of the keyboard, translating complex algorithms (e.g. O(n log n) sorting, dynamic caches) and elegant literature at speeds exceeding 100 WPM with near-zero error latency.\"*\n\n2. Certification Metrics:\n   - $520\\text{ Keystrokes in 60s} = 104.0\\text{ WPM}$ at $99.2\\%\\text{ Accuracy}$ $\\rightarrow$ **CENTURY SPEED CERTIFIED!**",
      "examples": [
        {
          "target": "Century Sprint Certified: 104 WPM | 99.2% Accuracy | 520 Keystrokes in 60s.",
          "reading": "Century Speed Benchmark",
          "translation": "Master speed qualification."
        },
        {
          "target": "Seamless fusion of prose, numbers (2026), symbols (O(n log n)), and punctuation at 100+ WPM.",
          "reading": "Mixed Content Mastery",
          "translation": "Universal input agility."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which biomechanical finger motion or rhythmic keystroke technique ensures peak speed and zero strain?",
          "options": [
            "At least 98.0% accuracy",
            "50% accuracy",
            "75% accuracy",
            "Accuracy did not matter"
          ],
          "answerIndex": 0,
          "explanation": "Elite typing demands at least 98% accuracy at 100+ WPM."
        },
        {
          "prompt": "Type the sprint sentence: `In 2026, human thought and digital execution converged at scale.`",
          "options": [
            "In 2026, human thought and digital execution converged at scale.",
            "In 2026 human thought and digital execution converged at scale",
            "In 2026, human thought and digitel execution converged at scale.",
            "In 2026, human thought and digital exicution converged at scale."
          ],
          "answerIndex": 0,
          "explanation": "Exact sprint sentence."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 35:",
          "options": [
            "Buying a new mouse",
            "Rhythm Consistency & Error Recovery Under Fatigue",
            "Giving up typing practice",
            "Learning where the spacebar is"
          ],
          "answerIndex": 1,
          "explanation": "Unit 9 focuses on endurance, isochronous rhythm, and competitive error recovery."
        },
        {
          "prompt": "How does maintaining 100+ WPM speed across 60 seconds change your daily productivity?",
          "options": [
            "It has zero effect on productivity",
            "It cuts document drafting, email composition, and coding transcription time by 60-70%, saving hundreds of productive hours annually",
            "It makes you type in foreign languages",
            "It makes computers run out of memory"
          ],
          "answerIndex": 1,
          "explanation": "High-velocity input saves hundreds of hours of manual transcription annually."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What core competencies were mastered across Touch Typing Unit 8?",
          "options": [
            "Staring at the keyboard only",
            "Typing with one finger only",
            "15-second high-frequency word bursts (100-120+ WPM), complex N-gram sweeps (STR, TCH, GHT, SPL), continuous 60-second Century Sprints (100+ WPM), opposite-hand Shift ergonomics on symbols and code syntax, and 98%+ accuracy discipline",
            "Slow hunting and pecking"
          ],
          "answerIndex": 2,
          "explanation": "Unit 8 comprehensive 100+ WPM century sprint mastery.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Type: `Mastery is achieved through daily deliberate practice and unyielding focus.`",
          "options": [
            "Mastery is acheived through daily deliberate practice and unyielding focus.",
            "Mastery is achieved through daily deliberate practice and unyielding focus.",
            "Mastery is achieved through daily deliberate practice and unyeilding focus.",
            "Mastery is achieved through daily delibarte practice and unyielding focus."
          ],
          "answerIndex": 1,
          "explanation": "Exact verification sentence.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is touch typing classified as an 'open-loop' motor skill at 100+ WPM?",
          "options": [
            "Because finger movements are pre-programmed in chunked motor packages and executed before sensory feedback from the previous key reaches the brain",
            "Because keyboards are open",
            "Because eyes are closed",
            "Because typing is random"
          ],
          "answerIndex": 0,
          "explanation": "Open-loop feedforward motor control executes faster than sensory feedback loops.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'The keyboard is no longer a tool; it is an extension of your _______.'",
          "options": [
            "desk furniture",
            "computer cable",
            "mouse pad",
            "nervous system and mind"
          ],
          "answerIndex": 3,
          "explanation": "The keyboard becomes an intuitive extension of the nervous system.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 8, Lesson 5: Foundational & Structural Mastery (Century Sprint Certified: 104 )"
  },
  "typing-u9-l1": {
    "id": "typing-u9-l1",
    "unit": "typing-u9",
    "level": "master",
    "objective": "Achieve metronomic isochronous typing rhythm, synchronizing keystrokes to a steady 120-150 BPM internal pulse to eliminate micro-hesitations and burst-pause volatility.",
    "presentation": {
      "explanation": "Welcome to the Final Unit of Touch Typing: Unit 9 (Rhythm Consistency & Error Recovery Under Fatigue)! The secret of the world's most consistent typists is **Isochronous Keystroke Cadence (Metronomic Rhythm)**:\n\n1. The Problem with Burst-and-Pause Typing:\n   - Amateur typists type easy words fast (120 WPM) $\\rightarrow$ slam the brakes on a hard word (30 WPM) $\\rightarrow$ pause for 500ms $\\rightarrow$ burst again.\n   - This burst-pause volatility creates muscular tension and causes 80% of all typos!\n\n2. The Metronomic Cadence Principle:\n   - Set an internal metronome pulse at **120 to 140 BPM** (2 strikes per beat = 240-280 keystrokes/min = 50-60 WPM baseline, or 4 strikes per beat = 100-112 WPM!).\n   - Strike every single character (letters, spaces, punctuation) with **clockwork uniformity**.\n   - *The Paradox*: Typing at a smooth, steady 100 WPM with ZERO pauses feels effortless and produces fewer errors than erratic 130 WPM bursts.",
      "examples": [
        {
          "target": "tap . tap . tap . tap . tap . tap (Clockwork metronomic keystroke spacing).",
          "reading": "Isochronous Rhythm",
          "translation": "Zero-volatility steady cadence."
        },
        {
          "target": "Rhythm Drill: 'peace order steady rhythm cadence balance balance balance'",
          "reading": "Rhythm Alignment Drill",
          "translation": "Cadence stabilization."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which biomechanical finger motion or rhythmic keystroke technique ensures peak speed and zero strain?",
          "options": [
            "It makes the keyboard sound louder",
            "It uses less electricity",
            "It allows the computer to cool down",
            "It eliminates erratic muscle deceleration, reduces mental fatigue, and prevents 80% of typos caused by sudden rhythmic jerks"
          ],
          "answerIndex": 3,
          "explanation": "Isochronous rhythm eliminates deceleration fatigue and prevents erratic timing typos."
        },
        {
          "prompt": "How should the spacebar strike be timed relative to the surrounding letter keystrokes?",
          "options": [
            "With a 2-second pause after every word",
            "Struck as fast as possible in panic",
            "Struck twice every time",
            "With the exact same temporal duration and rhythm as any letter key"
          ],
          "answerIndex": 3,
          "explanation": "The spacebar is an equal rhythmic participant in the isochronous keystroke chain."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 36:",
          "options": [
            "Rhythm and balence create unshakeable speed and precision.",
            "Rhythm and balance creat unshakeable speed and precision.",
            "Rythm and balance create unshakeable speed and precision.",
            "Rhythm and balance create unshakeable speed and precision."
          ],
          "answerIndex": 3,
          "explanation": "Isochronous sentence drill."
        },
        {
          "prompt": "What should you do if you feel yourself speeding up erratically on an easy word?",
          "options": [
            "Type even faster until you make an error",
            "Stop typing completely",
            "Hit the backspace key 10 times",
            "Breathe out, drop your shoulders, and consciously pull your tempo back into your steady metronomic baseline"
          ],
          "answerIndex": 3,
          "explanation": "Consciously returning to a steady baseline prevents out-of-control speed runaway."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the typing rhythm concepts: Isochronous Cadence, Burst-Pause Volatility, Spacebar Rhythm, Micro-Hesitation:",
          "options": [
            "All mean stop typing",
            "Isochronous: Equal temporal gaps | Burst-Pause: Erratic fast-slow cycles | Spacebar Rhythm: Equal timing to letters | Micro-Hesitation: Stutter before difficult keys",
            "All are mouse settings",
            "All are keyboard switches"
          ],
          "answerIndex": 1,
          "explanation": "Rhythm concept definitions matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Type: `The steady river carves the canyon with unrelenting patience.`",
          "options": [
            "The steady river carves the canyon with unrelenting patience.",
            "The steady river carvs the canyon with unrelenting patience.",
            "The steady river carves the canyon with unrelenting patiance.",
            "The stedy river carves the canyon with unrelenting patience."
          ],
          "answerIndex": 0,
          "explanation": "Exact rhythm verification.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why does a 90 WPM metronomic typist often outscore a 120 WPM burst typist in 3-minute tests?",
          "options": [
            "Because the clock runs slower for steady typists",
            "Because steady typists get bonus points",
            "Because 90 > 120",
            "Because the 90 WPM steady typist makes zero errors and maintains constant velocity, while the burst typist loses massive chunks of time recovering from frequent high-speed typos"
          ],
          "answerIndex": 3,
          "explanation": "Zero-error steady velocity outperforms volatile high-error sprinting over duration.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'Flow is not speed; flow is _______.'",
          "options": [
            "typing loud",
            "hitting keys hard",
            "unbroken continuity of rhythm",
            "rushing"
          ],
          "answerIndex": 2,
          "explanation": "Flow is unbroken continuity of rhythm.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 9, Lesson 1: Foundational & Structural Mastery (tap . tap . tap . tap . tap . )"
  },
  "typing-u9-l2": {
    "id": "typing-u9-l2",
    "unit": "typing-u9",
    "level": "master",
    "objective": "Master high-speed error recovery reflexes, deploying instant Ctrl+Backspace whole-word deletion vs single-character backspacing to recover from typos in under 300ms.",
    "presentation": {
      "explanation": "When an error occurs at 100+ WPM, an unconditioned typist panics, taps backspace 6 times erratically, and loses 2 seconds. A master typist uses **The 300ms Subconscious Error Recovery Protocol**:\n\n1. The Single-Character vs. Whole-Word Deletion Rule:\n   - **The 1-Character Rule**: If you detect the typo *on the exact keystroke it happens* (e.g. you hit 'x' instead of 'c'), tap `Backspace` once with the right pinky and strike the correct key immediately (<200ms).\n   - **The Whole-Word Rule (Ctrl + Backspace / Option + Delete)**:\n     - If you are 2 or 3 letters past the typo, DO NOT tap backspace multiple times!\n     - Hit **`Ctrl + Backspace`** (Windows/Linux) or **`Option + Delete`** (macOS) to instantly wipe the entire corrupted word in a single 50ms keystroke, then re-type the whole word cleanly from memory!\n\n2. Eliminating the Post-Error Freeze:\n   - When a typo turns red, your brain's error-monitoring network (anterior cingulate cortex) naturally triggers a 'freeze' reflex.\n   - **The Recovery Reflex**: Train yourself to treat an error red-flash not as a failure, but as an instantaneous trigger for `Ctrl+Backspace` $\\rightarrow$ re-type $\\rightarrow$ continue!",
      "examples": [
        {
          "target": "Typo in 'development': Typed 'develkp' -> Instant Ctrl+Backspace wipes 'develkp' -> Cleanly retypes 'development' in 400ms.",
          "reading": "Ctrl+Backspace Word Purge",
          "translation": "High-speed error recovery."
        },
        {
          "target": "Single-Key Reflex: Typed 'tge' -> Instant single backspace on 'g' -> 'the' in 150ms.",
          "reading": "Micro-backspace correction",
          "translation": "Immediate stroke correction."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which biomechanical finger motion or rhythmic keystroke technique ensures peak speed and zero strain?",
          "options": [
            "Execute a single Ctrl+Backspace (or Option+Delete on Mac) to delete the whole word and re-type it cleanly in one fluid roll",
            "Restart the entire test from the beginning",
            "Tap the Backspace key 5 times individually",
            "Use the mouse to highlight and delete the letter"
          ],
          "answerIndex": 0,
          "explanation": "Ctrl+Backspace purges the corrupted word in a single 50ms stroke."
        },
        {
          "prompt": "Which finger is designated for the Backspace key on standard keyboards?",
          "options": [
            "Right Pinky",
            "Right Index finger",
            "Left Pinky",
            "Right Thumb"
          ],
          "answerIndex": 0,
          "explanation": "Right pinky reaches up-right to Backspace while the hand anchors on the home row."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 37:",
          "options": [
            "Fast error recovry preserves momentum and guarantees high average velocity.",
            "Fast error recovery preserves momentum and guarantees high average velocity.",
            "Fast error recovery perserves momentum and guarantees high average velocity.",
            "Fast error recovery preserves momemtum and guarantees high average velocity."
          ],
          "answerIndex": 1,
          "explanation": "Error recovery drill."
        },
        {
          "prompt": "What causes the 'post-error freeze' in amateur typists?",
          "options": [
            "The keyboard loses power",
            "The computer stops recording input",
            "The brain's anterior cingulate cortex pauses motor output to evaluate the mistake; conditioned typists override this pause with an automatic recovery motor sequence",
            "The screen turns off"
          ],
          "answerIndex": 2,
          "explanation": "Automatic recovery reflexes bypass the conscious error-evaluation pause."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the recovery methods: Immediate Single Typo, Deep Multi-Letter Error, Post-Error Freeze, Anchor Hand:",
          "options": [
            "Immediate Typo: Single pinky backspace | Deep Error: Ctrl+Backspace whole-word | Post-Error Freeze: Subconscious hesitation | Anchor Hand: Hand stays on home row",
            "All mean type slower",
            "All are mouse gestures",
            "All mean turn off keyboard"
          ],
          "answerIndex": 0,
          "explanation": "Error recovery classification matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Type: `Mistakes are data; recover instantly and sustain the flow state.`",
          "options": [
            "Mistakes are data; recover instanly and sustain the flow state.",
            "Mistakes are date; recover instantly and sustain the flow state.",
            "Mistakes are data; recovr instantly and sustain the flow state.",
            "Mistakes are data; recover instantly and sustain the flow state."
          ],
          "answerIndex": 3,
          "explanation": "Exact sentence verification.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is retaining home-row anchoring during a backspace reach essential?",
          "options": [
            "To prevent the spacebar from moving",
            "Because home row keys lock",
            "If the right hand leaves the home row completely to hunt for backspace, repositioning the hand causes a massive 1-second delay and secondary typos on the next word",
            "Because hands are glued to keyboards"
          ],
          "answerIndex": 2,
          "explanation": "Home row anchoring ensures instant repositioning without visual hunting.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'Do not fear the mistake; master the _______.'",
          "options": [
            "pause button",
            "instant recovery reflex",
            "slowdown",
            "excuse"
          ],
          "answerIndex": 1,
          "explanation": "Mastering the instant recovery reflex.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 9, Lesson 2: Foundational & Structural Mastery (Typo in 'development': Typed ')"
  },
  "typing-u9-l3": {
    "id": "typing-u9-l3",
    "unit": "typing-u9",
    "level": "master",
    "objective": "Build sustained endurance across a grueling 5-minute continuous typing marathon (2,500+ keystrokes), combating forearm tendon fatigue and maintaining 100+ WPM precision under cognitive depletion.",
    "presentation": {
      "explanation": "Sprinting for 15 seconds is easy; maintaining **100+ WPM across a 5-Minute Marathon (2,500+ Keystrokes)** tests true biomechanical efficiency and mental stamina:\n\n1. The Physiology of Typing Fatigue:\n   - After 2–3 minutes of continuous high-speed typing, forearm flexor and extensor tendons build up lactic acid if the typist is gripping the keys with excessive tension.\n   - **The 3 Marathon Biomechanical Pillars**:\n     - **Dynamic Micro-Rest**: On long spaces and punctuation, allow fingertips to go completely limp for 50 milliseconds.\n     - **Shoulder & Core Support**: Keep shoulders depressed (dropped away from ears) and core engaged; do NOT lean all upper body weight onto your arms/wrists.\n     - **Eye Blink Rhythm**: Remember to blink normally! Staring at the screen without blinking causes dry eyes, eye fatigue, and degraded visual lookahead by minute 4.\n\n2. Pacing Strategy:\n   - Start at $95\\%\\text{ of max velocity}$ (smooth, relaxed, 99% accuracy). Never redline in Minute 1, or you will crash to 70 WPM by Minute 4.",
      "examples": [
        {
          "target": "5-Minute Continuous Marathon: 2,600 Keystrokes = 104 WPM average at 98.7% accuracy across 5 full minutes.",
          "reading": "5-Minute Marathon Benchmark",
          "translation": "Endurance typing certification."
        },
        {
          "target": "Fatigue Countermeasure: Dropping shoulders, floating wrists, and micro-relaxing on spacebars.",
          "reading": "Biomechanical Marathon Posture",
          "translation": "Ergonomic endurance mechanics."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which biomechanical finger motion or rhythmic keystroke technique ensures peak speed and zero strain?",
          "options": [
            "Sprint at 150% speed in minute 1 until fingers cramp",
            "Type as slowly as possible for 4 minutes",
            "Stop every 30 seconds for a nap",
            "Begin at a calm, controlled 95% speed with 99%+ accuracy, establishing a rock-solid isochronous rhythm that can be maintained effortlessly through minute 5"
          ],
          "answerIndex": 3,
          "explanation": "Controlled 95% baseline pacing prevents early lactic acid burnout and ensures consistent endurance."
        },
        {
          "prompt": "What physical symptom indicates that a typist is using excessive muscular tension during extended typing?",
          "options": [
            "Cold fingertips only",
            "Feeling energized",
            "Hearing music",
            "Tightness in the forearms, raised/hunched shoulders, and soreness in the wrists"
          ],
          "answerIndex": 3,
          "explanation": "Forearm burning and raised shoulders signal dangerous isometric co-contraction."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 38:",
          "options": [
            "Endurance is the triumphant marriage of biomechanical relaxation and sustained mental focus.",
            "Endurance is the triumphant marrage of biomechanical relaxation and sustained mental focus.",
            "Endurance is the triumphant marriage of biomechanicle relaxation and sustained mental focus.",
            "Endurance is the triumphant marriage of biomechanical relaxation and sustaned mental focus."
          ],
          "answerIndex": 0,
          "explanation": "Endurance drill sentence."
        },
        {
          "prompt": "How does 'dynamic micro-resting' work during continuous typing?",
          "options": [
            "Muscles in inactive fingers release 100% of their tension during the split-second gaps when other fingers or the thumb are striking",
            "Stopping typing for 10 minutes",
            "Sleeping with your hands on the keyboard",
            "Typing with one hand only"
          ],
          "answerIndex": 0,
          "explanation": "Micro-resting non-active fingers continuously purges lactic acid buildup."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the endurance components: Forearm Flexors, Micro-Resting, Shoulder Depression, Visual Pacing:",
          "options": [
            "All mean type louder",
            "All are keyboard cords",
            "All mean stop typing",
            "Forearm Flexors: Primary finger drivers | Micro-Resting: Instant tension release | Shoulder Depression: Prevents neck tension | Visual Pacing: Scan ahead continuously"
          ],
          "answerIndex": 3,
          "explanation": "Endurance physiology matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Type: `The marathon runner of the keyboard glides effortlessly across miles of text.`",
          "options": [
            "The marathon runer of the keyboard glides effortlessly across miles of text.",
            "The marathon runner of the keyboard glides efortlessly across miles of text.",
            "The marathon runner of the keyboard glides effortlessly across miles of text.",
            "The marathon runner of the keybord glides effortlessly across miles of text."
          ],
          "answerIndex": 2,
          "explanation": "Exact marathon prose sentence.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is cognitive stamina just as important as physical stamina during a 5-minute typing marathon?",
          "options": [
            "Because words change meaning",
            "Because mental distraction or wandering attention causes instant visual lookahead decay, leading to catastrophic typo clusters in minutes 4 and 5",
            "Because the brain gets sleepy",
            "Because typing consumes 5000 calories"
          ],
          "answerIndex": 1,
          "explanation": "Continuous cognitive lookahead requires sustained executive attention.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'Endurance turns high speed from a brief parlor trick into a _______.'",
          "options": [
            "permanent superpower of productivity",
            "source of injury",
            "memory test",
            "boring routine"
          ],
          "answerIndex": 0,
          "explanation": "Endurance transforms speed into a permanent superpower of productivity.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 9, Lesson 3: Foundational & Structural Mastery (5-Minute Continuous Marathon: )"
  },
  "typing-u9-l4": {
    "id": "typing-u9-l4",
    "unit": "typing-u9",
    "level": "master",
    "objective": "Master competitive online typing conditions (TypeRacer, Monkeytype, live esports leaderboards), maintaining emotional composure, overcoming leaderboard anxiety, and thriving under extreme competitive pressure.",
    "presentation": {
      "explanation": "Typing alone in a quiet room is comfortable; typing in a **Live Multiplayer Competition (TypeRacer / Monkeytype / Esports Leaderboards)** with opponent cars overtaking you and live WPM counters ticking triggers intense sympathetic nervous system arousal: **Competitive Composure**:\n\n1. The Psychology of Competitive Pressure:\n   - **The Choke Phenomenon**: When an opponent passes you, adrenaline spikes $\\rightarrow$ muscles tighten $\\rightarrow$ fingers rush ahead of the visual buffer $\\rightarrow$ a massive typo occurs $\\rightarrow$ panic ensues!\n   - **The Iron Focus Rule**: *'Race your own cursor, not your opponent's car.'* Block out the leaderboard. Tunnel your entire sensory awareness into the next 3 words on your screen.\n\n2. The TypeRacer Penalty Mechanic:\n   - On competitive platforms like TypeRacer, you CANNOT proceed past a typo until it is corrected. A single uncorrected typo stops your car dead on the track.\n   - **The Antidote**: Strict 99%+ accuracy discipline. The typist who moves at a smooth 110 WPM with zero stops will ALWAYS beat a frantic 140 WPM typist who crashes into 3 red error blocks!",
      "examples": [
        {
          "target": "Live Competition Mindset: Ignore opponent cars overtaking on screen; lock eyes strictly on text buffer; maintain steady 115 WPM isochronous rhythm to victory.",
          "reading": "Competitive Race Execution",
          "translation": "Psychological composure in competition."
        },
        {
          "target": "Under Pressure Recovery: Opponent takes lead -> Deep exhale -> Drop shoulders -> Smooth flawless finish.",
          "reading": "Adrenaline neutralization",
          "translation": "Clutch performance under stress."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which biomechanical finger motion or rhythmic keystroke technique ensures peak speed and zero strain?",
          "options": [
            "Running out of words",
            "Looking at the opponent's progress bar instead of maintaining visual lookahead on your own text stream, triggering adrenaline panic and rushed typos",
            "Typing too accurately",
            "The keyboard disconnecting"
          ],
          "answerIndex": 1,
          "explanation": "Distraction by opponent position breaks internal visual lookahead and triggers panic."
        },
        {
          "prompt": "Why does a 105 WPM typist with 100% accuracy consistently beat a 130 WPM typist with 94% accuracy on TypeRacer?",
          "options": [
            "Because TypeRacer halts forward progress completely on every error, forcing the 130 WPM typist to waste seconds backspacing while the 105 WPM typist glides across the finish line with zero stops",
            "Because 105 is a higher score than 130",
            "Because accuracy counts 5x more",
            "Because TypeRacer gives bonus points to slower typists"
          ],
          "answerIndex": 0,
          "explanation": "TypeRacer error-stop mechanics severely penalize typos, giving smooth accuracy an unbeatable advantage."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 39:",
          "options": [
            "Composure under pressure separates the amateur from the champion.",
            "Composure under pressure separates the amature from the champion.",
            "Composure under presure separates the amateur from the champion.",
            "Composure under pressure seperates the amateur from the champion."
          ],
          "answerIndex": 0,
          "explanation": "Exact competitive sentence verification."
        },
        {
          "prompt": "What physiological routine should a competitive typist execute during the 5-second countdown before a race begins?",
          "options": [
            "Take one deep slow diaphragmatic breath, shake out forearm tension, float wrists, and read the first 4 words of the text",
            "Spam the spacebar repeatedly",
            "Hold breath and tense all arm muscles",
            "Close eyes and ignore the screen"
          ],
          "answerIndex": 0,
          "explanation": "Deep breath, tension shakeout, and pre-reading the opening 4 words primes the motor system for instant flow."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the competitive phenomena: Leaderboard Panic, Error Lockout, Visual Pre-Read, Adrenaline Shake:",
          "options": [
            "All are keyboard bugs",
            "All mean computer crash",
            "Leaderboard Panic: Rushing when behind | Error Lockout: Progress blocked on typo | Visual Pre-Read: Scanning text before start | Adrenaline Shake: Tremor from sympathetic arousal",
            "All mean slow internet"
          ],
          "answerIndex": 2,
          "explanation": "Competitive psychology matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Type: `The champion remains calm when the storm of competition reaches its peak.`",
          "options": [
            "The champion remains calm when the stom of competition reaches its peak.",
            "The champion remains calm when the storm of competition reaches its peak.",
            "The champion remains calm when the storm of compatition reaches its peak.",
            "The champion remanes calm when the storm of competition reaches its peak."
          ],
          "answerIndex": 1,
          "explanation": "Exact verification sentence.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is 'clutch performance' in competitive typing?",
          "options": [
            "The ability to maintain 100% accuracy and peak velocity in the final 10 seconds of a dead-heat race when heart rate is elevated and stakes are highest",
            "Using a manual transmission",
            "Hitting the keyboard with a fist",
            "Winning by default"
          ],
          "answerIndex": 0,
          "explanation": "Maintaining peak execution and calm precision under maximum physiological arousal.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'In competition, focus on the process, and the victory will _______.'",
          "options": [
            "require luck",
            "vanish",
            "cause stress",
            "take care of itself"
          ],
          "answerIndex": 3,
          "explanation": "Process focus delivers competitive victory.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 9, Lesson 4: Foundational & Structural Mastery (Live Competition Mindset: Igno)"
  },
  "typing-u9-l5": {
    "id": "typing-u9-l5",
    "unit": "typing-u9",
    "level": "master",
    "objective": "Demonstrate complete Master Grand Apex Touch Typing certification across all 9 units by completing the Grand Capstone Portfolio: 100+ WPM sustained velocity, complex N-grams, full numbers/symbols/code syntax, isochronous rhythm, 5-minute endurance, and 99%+ accuracy.",
    "presentation": {
      "explanation": "Congratulations! You have reached the **Final Master Grand Apex Capstone of the FEARN Touch Typing Curriculum**:\n\n1. The Grand Capstone Comprehensive Suite:\n   - **The 9-Unit Master Synthesis Checklist**:\n     - **Unit 1 (Home Row)**: ASDF JKL; unconscious anchor reflexes.\n     - **Unit 2 (Top Row)**: QWERTY UIOP fluid vertical reaches.\n     - **Unit 3 (Bottom Row)**: ZXCVBNM diagonal contractions.\n     - **Unit 4 (Numbers & Symbols)**: 0-9, !@#$%^&*() full row reaches.\n     - **Unit 5 (Common N-Grams)**: Bigrams, trigrams, and high-frequency word rolls.\n     - **Unit 6 (Punctuation & Code)**: Brackets, braces, camelCase, JSON, programming syntax.\n     - **Unit 7 (Sustained Accuracy)**: Zero-drag feathering and interval consistency.\n     - **Unit 8 (Century Sprint)**: 100+ WPM high-velocity sprint bursts.\n     - **Unit 9 (Endurance & Rhythm)**: Isochronous rhythm, instant Ctrl+Backspace recovery, 5-minute endurance, and competitive composure.\n\n2. Grand Capstone Master Text:\n   *\"The ultimate triumph of human craftsmanship is the transformation of a physical instrument into an invisible conduit of pure consciousness. Across 45 rigorous lessons, we transitioned from hesitant home-row taps to a seamless 100+ WPM thought-stream. Whether crafting complex algorithmic architectures in code (e.g. `const pipeline = async (data = []) => data.map(transform);`), authoring timeless literature, or communicating across high-speed digital networks, your hands now move with effortless grace, precision, and indefatigable endurance. The keyboard is no longer an obstacle; it is your digital voice.\"*\n\n3. Grand Apex Typist Certification:\n   - You possess the complete neuromuscular, cognitive, and ergonomic mastery of an elite typist.",
      "examples": [
        {
          "target": "Full Capstone Certification: 110 WPM sustained across mixed prose, numbers, code syntax, and complex punctuation with 99.4% accuracy.",
          "reading": "Touch Typing Curriculum Completion",
          "translation": "Grand Apex Typist Certification."
        },
        {
          "target": "45 Lessons Completed across 9 Units: Home row to 100+ WPM Century Endurance.",
          "reading": "Curriculum Completion Milestone",
          "translation": "Master verification suite."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which biomechanical finger motion or rhythmic keystroke technique ensures peak speed and zero strain?",
          "options": [
            "1. Neutral Floating Biomechanics; 2. 2-3 Word Visual Lookahead; 3. Isochronous Rhythm; 4. Instant Ctrl+Backspace Error Recovery; 5. 99%+ Accuracy Discipline",
            "1. Pounding the keys with force only; 2. Memorizing keyboard pictures",
            "1. Typing with 2 fingers only",
            "1. Staring at the keyboard only"
          ],
          "answerIndex": 0,
          "explanation": "The 5 pillars of master touch typing pedagogy."
        },
        {
          "prompt": "Type the Grand Capstone conclusion: `The keyboard is no longer an obstacle; it is your digital voice.`",
          "options": [
            "The keyboard is no longer an obstacle; it is your digital voice.",
            "The keybord is no longer an obstacle; it is your digital voice.",
            "The keyboard is no longer an obsticle; it is your digital voice.",
            "The keyboard is no longer an obstacle; it is your digitel voice."
          ],
          "answerIndex": 0,
          "explanation": "Exact grand capstone sentence."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 40:",
          "options": [
            "Typing without electricity",
            "Frictionless thought-to-text translation: Eliminating all physical bottlenecks between executive ideas and digital manifestation across code, writing, and communication",
            "Never needing to read",
            "Winning typing games only"
          ],
          "answerIndex": 1,
          "explanation": "Frictionless thought-to-text translation eliminates cognitive bottlenecks in the digital era."
        },
        {
          "prompt": "How does maintaining neutral floating wrists protect against Carpal Tunnel Syndrome over a 40-year career?",
          "options": [
            "It turns wrists into metal",
            "It prevents elevated carpal canal pressure and eliminates friction against the median nerve and flexor tendons",
            "It has no protective effect",
            "It makes wrists immune to gravity"
          ],
          "answerIndex": 1,
          "explanation": "Neutral floating alignment eliminates mechanical pressure on the median nerve."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What core competencies were mastered across the ENTIRE 45-Lesson FEARN Touch Typing Curriculum?",
          "options": [
            "Hunting and pecking with index fingers only",
            "Home row (ASDF JKL;), top row (QWERTY UIOP), bottom row (ZXCVBNM), numbers (0-9) and symbol rows (!@#$%^&*), high-frequency bigrams/trigrams/N-grams, punctuation & programming code syntax, sustained accuracy drills, 100+ WPM century sprint bursts, isochronous metronomic rhythm, instant Ctrl+Backspace error recovery, 5-minute endurance marathons, and competitive pressure composure",
            "Typing on a smartphone touchscreen only",
            "Staring at hands while typing"
          ],
          "answerIndex": 1,
          "explanation": "Comprehensive 45-lesson Touch Typing Grand Apex certification.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Type: `True mastery is the effortless unity of mind, body, and instrument.`",
          "options": [
            "True mastery is the effortless unity of mind, body, and instrument.",
            "True mastry is the effortless unity of mind, body, and instrument.",
            "True mastery is the efortless unity of mind, body, and instrument.",
            "True mastery is the effortless unity of mind, body, and instrumnt."
          ],
          "answerIndex": 0,
          "explanation": "Exact final certification sentence.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is touch typing considered the foundational physical literacy of the 21st century?",
          "options": [
            "Because pens are illegal",
            "Because keyboards are inexpensive",
            "Because paper is obsolete",
            "Because virtually all human knowledge, computation, software engineering, governance, and creative expression are mediated through the keyboard interface"
          ],
          "answerIndex": 3,
          "explanation": "The keyboard is the primary gateway to 21st-century knowledge and creation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete the Typist's eternal creed: 'My hands do not follow my thoughts; my hands _______.'",
          "options": [
            "move randomly",
            "make typos",
            "are the direct physical manifestation of my thoughts",
            "rest on the desk"
          ],
          "answerIndex": 2,
          "explanation": "Hands become the direct physical manifestation of thought.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 9, Lesson 5: Foundational & Structural Mastery (Full Capstone Certification: 1)"
  },
  "typing-u5-l1": {
    "id": "typing-u5-l1",
    "unit": "typing-u5",
    "level": "intermediate",
    "objective": "Execute the top 10 most frequent English bigrams (th, he, in, er, an, re, on, at, en, nd) as unified neuromuscular motor chunks rather than isolated keystrokes.",
    "presentation": {
      "explanation": "To break past 40 WPM, your brain must stop thinking letter-by-letter and start firing 'motor chunks' — muscle memory bursts that execute two letters in a single reflex:\n\n1. The Top 10 English Bigrams (Over 25% of all English text!):\n   - **TH**: Left Index reaches T (top row) -> Right Index reaches H (home row). The single most frequent pair in English.\n   - **HE**: Right Index H (home) -> Left Middle E (top). Perfect hand alternation.\n   - **IN**: Right Middle I (top) -> Right Index N (bottom). Smooth inward right-hand roll.\n   - **ER**: Left Middle E (top) -> Left Index R (top). Fast adjacent left-hand top-row roll.\n   - **AN**: Left Pinky A (home) -> Right Index N (bottom). Left-to-right snap.\n   - **RE**: Left Index R (top) -> Left Middle E (top). The reverse of ER.\n   - **ON**: Right Ring O (top) -> Right Index N (bottom). Outward-to-inward right-hand slide.\n   - **AT**: Left Pinky A (home) -> Left Index T (top).\n   - **EN**: Left Middle E (top) -> Right Index N (bottom).\n   - **ND**: Right Index N (bottom) -> Left Middle D (home).\n\n2. The Motor Chunking Technique:\n   - Do not say 't... h...'. Think 'TH' as one physical drum beat.\n   - Keep finger flight paths low and glide from the first key to the second key without lifting wrist.",
      "examples": [
        {
          "target": "th th th he he he in in in er er er an an an",
          "reading": "Top 5 bigram motor chunks: th he in er an.",
          "translation": "Bigram drill set 1"
        },
        {
          "target": "re re re on on on at at at en en en nd nd nd",
          "reading": "Top 5 bigram motor chunks: re on at en nd.",
          "translation": "Bigram drill set 2"
        },
        {
          "target": "then there here enter render another tenant intended",
          "reading": "Real words combining top bigrams into continuous flow.",
          "translation": "Bigram synthesis words"
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which biomechanical finger motion or rhythmic keystroke technique ensures peak speed and zero strain?",
          "options": [
            "ZZ",
            "QU",
            "XY",
            "TH"
          ],
          "answerIndex": 3,
          "explanation": "TH accounts for over 3.5% of all bigram occurrences in English."
        },
        {
          "prompt": "What is 'neuromuscular motor chunking' in touch typing?",
          "options": [
            "Pressing keys with your knuckles",
            "Looking down at the keyboard",
            "Typing with one hand only",
            "Firing a rapid sequence of 2-3 keystrokes as a single unified muscle reflex without individual cognitive checks"
          ],
          "answerIndex": 3,
          "explanation": "Motor chunking bundles multi-key sequences into single motor programs."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 41:",
          "options": [
            "Right Thumb and Left Pinky",
            "Right Index and Right Middle",
            "Left Pinky and Left Ring",
            "Left Middle Finger (E) followed immediately by Left Index Finger"
          ],
          "answerIndex": 3,
          "explanation": "Left Middle on E -> Left Index on R."
        },
        {
          "prompt": "Type this bigram practice sequence with zero wrist bouncing: 'then here into rent and on at' — what is the primary ergonomic rule?",
          "options": [
            "Rest heavy weight on wrist rests.",
            "Lift the entire forearm for each key.",
            "Type with straight, locked fingers.",
            "Keep wrists floating neutrally above the desk; let finger joints execute the strikes."
          ],
          "answerIndex": 3,
          "explanation": "Floating neutral wrists allow rapid finger dexterity."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Identify the 5 highest-frequency English bigrams:",
          "options": [
            "TH, HE, IN, ER, AN",
            "OO, EE, MM, TT, FF",
            "AB, CD, EF, GH, IJ",
            "QZ, XJ, WK, VB, PY"
          ],
          "answerIndex": 0,
          "explanation": "TH, HE, IN, ER, AN are the top 5 frequency bigrams.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why does alternating hands (e.g. T on left, H on right) produce faster typing speeds than same-finger reaches?",
          "options": [
            "Because the right hand is stronger.",
            "Because the left hand does not need to return to home row.",
            "It is a myth.",
            "Because the second hand is already positioned over its target key while the first hand is still completing its stroke."
          ],
          "answerIndex": 3,
          "explanation": "Parallel motor preparation across hemispheres accelerates speed.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Type the word 'RENDER' — which bigrams are chained together?",
          "options": [
            "Only RN",
            "RD + NE",
            "RE + EN + ND + DE + ER",
            "None"
          ],
          "answerIndex": 2,
          "explanation": "RE, EN, ND, DE, ER are all chained bigrams.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What target accuracy should be maintained while building bigram speed?",
          "options": [
            "70% is fine",
            "At least 98% to prevent hardwiring inaccurate motor patterns into muscle memory",
            "100% with no backspaces ever permitted",
            "Speed matters more than accuracy"
          ],
          "answerIndex": 1,
          "explanation": "98%+ accuracy prevents neural error entrainment.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 5, Lesson 1: Foundational & Structural Mastery (th th th he he he in in in er )"
  },
  "typing-u5-l2": {
    "id": "typing-u5-l2",
    "unit": "typing-u5",
    "level": "intermediate",
    "objective": "Automate high-frequency English trigrams (the, and, tha, ent, ion, tio, for, nde, has, ing) as lightning 3-key chord rolls.",
    "presentation": {
      "explanation": "Trigrams (three-letter combinations) represent the building blocks of full words. When your fingers master trigram rolls, typing feels like effortless piano playing:\n\n1. The Top 10 English Trigrams:\n   - **THE**: Left Index (T) -> Right Index (H) -> Left Middle (E). The king of trigrams!\n   - **AND**: Left Pinky (A) -> Right Index (N) -> Left Middle (D). Alternating triangle.\n   - **THA**: Left Index (T) -> Right Index (H) -> Left Pinky (A).\n   - **ENT**: Left Middle (E) -> Right Index (N) -> Left Index (T).\n   - **ION**: Right Middle (I) -> Right Ring (O) -> Right Index (N). Smooth right-hand top-to-bottom wave!\n   - **TIO**: Left Index (T) -> Right Middle (I) -> Right Ring (O).\n   - **FOR**: Left Index (F) -> Right Ring (O) -> Left Index (R).\n   - **NDE**: Right Index (N) -> Left Middle (D) -> Left Middle (E).\n   - **HAS**: Right Index (H) -> Left Pinky (A) -> Left Ring (S).\n   - **ING**: Right Middle (I) -> Right Index (N) -> Left Index (G). Iconic suffix roll!\n\n2. The 'Roll' Sensation:\n   - On 'ION' and 'ING', your fingers should execute a rippling roll across the keys in under 100 milliseconds.",
      "examples": [
        {
          "target": "the the the and and and ing ing ing ion ion ion",
          "reading": "Top 4 trigram chord rolls: the and ing ion.",
          "translation": "Trigram drill set 1"
        },
        {
          "target": "action nation section creation station question intention",
          "reading": "Practicing the -TION and -ION suffix trigram rolls.",
          "translation": "Trigram -TION practice"
        },
        {
          "target": "thinking running standing singing bringing listening",
          "reading": "Practicing the -ING suffix trigram roll.",
          "translation": "Trigram -ING practice"
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which biomechanical finger motion or rhythmic keystroke technique ensures peak speed and zero strain?",
          "options": [
            "TIO",
            "AND",
            "ING",
            "THE"
          ],
          "answerIndex": 0,
          "explanation": "TIO / ION is the universal Latinate noun suffix trigram."
        },
        {
          "prompt": "How should the suffix trigram 'ING' feel under your fingers?",
          "options": [
            "A fluid, continuous inward ripple: Right Middle (I) -> Right Index (N) -> Left Index",
            "Three separate pauses with wrists locked",
            "Looking down at the G key",
            "Hitting all 3 keys with the thumb"
          ],
          "answerIndex": 0,
          "explanation": "Smooth right-to-left finger ripple."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 42:",
          "options": [
            "Only QZ",
            "THE, ENT, TIO, ION, AND, ING",
            "Only numbers",
            "None"
          ],
          "answerIndex": 1,
          "explanation": "Contains THE, ENT, TIO, ION, AND, ING."
        },
        {
          "prompt": "What is a 'hand-alternating trigram' (e.g. THE: Left -> Right -> Left)?",
          "options": [
            "Typing with one hand behind your back.",
            "Typing upside down.",
            "A sequence where keystrokes switch back and forth between left and right hands, giving each hand recovery time.",
            "Pressing Space with both thumbs."
          ],
          "answerIndex": 2,
          "explanation": "Hand alternation balances cognitive and physical load."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Identify the two most common 3-letter words in the English language:",
          "options": [
            "ONE and TWO",
            "YES and NOT",
            "CAT and DOG",
            "THE and AND"
          ],
          "answerIndex": 3,
          "explanation": "THE and AND are the top two 3-letter words.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which finger strikes the letter 'I' in the 'ING' and 'ION' trigrams?",
          "options": [
            "Right Pinky Finger",
            "Left Thumb",
            "Right Middle Finger",
            "Left Index Finger"
          ],
          "answerIndex": 2,
          "explanation": "Right Middle finger controls K (home) and I (top).",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the primary benefit of automating the 10 core trigrams?",
          "options": [
            "It turns off autocorrect.",
            "It eliminates micro-pauses within words, boosting typing rhythm by 15-20+ WPM.",
            "It changes keyboard layouts.",
            "It makes your keyboard quieter."
          ],
          "answerIndex": 1,
          "explanation": "Eliminates cognitive latency between letters in common syllables.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Type the word 'MENTIONED' — what high-frequency chunks make up this word?",
          "options": [
            "M + ENT + ION + ED",
            "ME + NT + IO + NE + D",
            "None",
            "M + E + N + T + I + O + N + E + D letter-by-letter with pauses"
          ],
          "answerIndex": 0,
          "explanation": "Chunked as M + ENT + ION + ED.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 5, Lesson 2: Foundational & Structural Mastery (the the the and and and ing in)"
  },
  "typing-u5-l3": {
    "id": "typing-u5-l3",
    "unit": "typing-u5",
    "level": "intermediate",
    "objective": "Build reflexive neuromuscular automation on the top 100 most common English words, which constitute over 50% of all written English text.",
    "presentation": {
      "explanation": "In English, just **100 words account for roughly 50% of all written material**! When you automate these 100 words so your fingers type them as single muscular words rather than individual letters, your baseline typing speed doubles:\n\n1. Tier 1 Core Words (Top 25):\n   - *the, of, and, a, to, in, is, you, that, it, he, was, for, on, are, as, with, his, they, I, at, be, this, have, from*\n\n2. Tier 2 Core Words (26–50):\n   - *or, one, had, by, word, but, not, what, all, were, we, when, your, can, said, there, use, an, each, which, she, do, how, their, if*\n\n3. Tier 3 Core Words (51–75):\n   - *will, up, other, about, out, many, then, them, these, so, some, her, would, make, like, him, into, time, has, look, two, more, write, go, see*\n\n4. Tier 4 Core Words (76–100):\n   - *number, no, way, could, people, my, than, first, water, been, call, who, oil, its, now, find, long, down, day, did, get, come, made, may, part*\n\n5. The Spacebar Rhythm Rule:\n   - Strike the Spacebar with your dominant thumb (usually right thumb) immediately on the release of the final letter with zero hesitation.",
      "examples": [
        {
          "target": "the of and to in is you that it he was for on are as with his they",
          "reading": "Tier 1 sight word flow.",
          "translation": "Top 20 sight words drill"
        },
        {
          "target": "this have from one had word what all were when your can said there",
          "reading": "Tier 2 sight word flow.",
          "translation": "Top 21-40 sight words drill"
        },
        {
          "target": "about many then them these would make like into time has more write",
          "reading": "Tier 3 sight word flow.",
          "translation": "Top 41-60 sight words drill"
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which biomechanical finger motion or rhythmic keystroke technique ensures peak speed and zero strain?",
          "options": [
            "10%",
            "90%",
            "Roughly 50% of all words",
            "5%"
          ],
          "answerIndex": 2,
          "explanation": "Zipf's law dictates that the top 100 words make up ~50% of English text."
        },
        {
          "prompt": "Which thumb should strike the spacebar in proper touch typing technique?",
          "options": [
            "Your index finger",
            "Your pinky finger",
            "Both thumbs pressed together",
            "Your dominant thumb"
          ],
          "answerIndex": 3,
          "explanation": "Consistently using your dominant thumb develops a reliable spacebar cadence."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 43:",
          "options": [
            "Zero hesitation between words with completely consistent keystroke intervals",
            "Typing as fast as possible on the first word then stopping",
            "Using backspace 10 times",
            "Looking down at your thumbs"
          ],
          "answerIndex": 0,
          "explanation": "Metronomic rhythm produces effortless speed."
        },
        {
          "prompt": "Why is 'word-level reading' (looking 1-2 words ahead on screen) critical at intermediate speeds?",
          "options": [
            "It allows your brain to buffer the next motor chunk before your fingers finish the current word.",
            "It lets you correct errors in past sentences.",
            "It changes screen brightness.",
            "It reduces font size."
          ],
          "answerIndex": 0,
          "explanation": "Lookahead buffer keeps finger motors supplied with text."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What is the 'lookahead buffer' in touch typing psychology?",
          "options": [
            "A type of mechanical switch",
            "A glass screen protector",
            "The cognitive visual process of reading 1 to 3 words ahead of the exact letter your fingers are currently typing",
            "A memory cache on your motherboard"
          ],
          "answerIndex": 2,
          "explanation": "Reading ahead feeds continuous motor execution.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Type the word 'PEOPLE' — which hand sequences are used?",
          "options": [
            "Thumbs only",
            "Right Pinky (P) -> Left Middle (E) -> Right Ring (O) -> Right Pinky (P) -> Right Ring (L) -> Left Middle",
            "All left hand",
            "All right hand"
          ],
          "answerIndex": 1,
          "explanation": "Correct finger mapping for P-E-O-P-L-E.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which word from the Top 100 is typed entirely on the Left Hand?",
          "options": [
            "WATER",
            "WITH",
            "PEOPLE",
            "THEY"
          ],
          "answerIndex": 0,
          "explanation": "WATER is a classic 100% left-hand word.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which word from the Top 100 is typed entirely on the Right Hand?",
          "options": [
            "WAS",
            "FROM",
            "THE",
            "YOU"
          ],
          "answerIndex": 3,
          "explanation": "YOU, IN, ON, NO, OIL, MOON are right-hand words.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 5, Lesson 3: Foundational & Structural Mastery (the of and to in is you that i)"
  },
  "typing-u5-l4": {
    "id": "typing-u5-l4",
    "unit": "typing-u5",
    "level": "intermediate",
    "objective": "Synthesize high-frequency words into complete prose sentences with fluid hand alternation, even typing cadence, and zero visual dependence.",
    "presentation": {
      "explanation": "Now we combine bigrams, trigrams, and sight words into full natural English sentences:\n\n1. Rhythm Over Raw Burst Speed:\n   - Amateur typists type in jerky bursts (fast for 3 letters, stop, look, hunt, sprint).\n   - Master typists type with **even, metronomic cadence** — like raindrops falling at a steady tempo. Metronomic typing is 40% faster overall because it eliminates dead-stop micro-pauses!\n\n2. Real-World Prose Sentences for Flow Practice:\n   - *Sentence 1*: 'The quick brown fox jumps over the lazy dog.' (Pangram covering all 26 letters!)\n   - *Sentence 2*: 'We have been thinking about the new question for a long time.'\n   - *Sentence 3*: 'There was an old wooden house at the end of the dirt road.'\n   - *Sentence 4*: 'They said that people would always find a way to make it work.'\n\n3. Ergonomic Reset Checklist:\n   - Shoulders relaxed and dropped.\n   - Elbows at 90-degree angles.\n   - Fingers gently curved over home row (A S D F — J K L ;).\n   - Eyes pinned to the screen or text — NEVER looking at hands.",
      "examples": [
        {
          "target": "The quick brown fox jumps over the lazy dog.",
          "reading": "The classic 26-letter pangram executed with steady tempo.",
          "translation": "Classic Pangram Drill"
        },
        {
          "target": "We will find out what the other people have to say about this.",
          "reading": "Flow sentence composed entirely of Top 50 common words.",
          "translation": "Top 50 Prose Flow"
        },
        {
          "target": "She could see that there was more than one way to make it happen.",
          "reading": "Rhythmic sight-word progression.",
          "translation": "Rhythmic sight-word sentence"
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which biomechanical finger motion or rhythmic keystroke technique ensures peak speed and zero strain?",
          "options": [
            "A song lyric",
            "A sentence that contains every single letter of the alphabet at least once",
            "A word with 10 syllables",
            "A sentence with only numbers"
          ],
          "answerIndex": 1,
          "explanation": "A pangram utilizes all 26 letters of the English alphabet."
        },
        {
          "prompt": "Why is a steady, rhythmic typing cadence faster overall than sprinting and stopping?",
          "options": [
            "Because sprinting introduces cognitive fatigue and error corrections that waste multiple seconds of recovery time.",
            "Because slow typing is better.",
            "There is no difference.",
            "Because keyboards overheat during sprints."
          ],
          "answerIndex": 0,
          "explanation": "Rhythm eliminates costly hesitation and error-recovery penalties."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 44:",
          "options": [
            "A crisp, single spacebar tap after each word executed by the dominant thumb without breaking flow.",
            "Pausing 1 second between words",
            "Two spacebar taps between words",
            "Using the left pinky for space"
          ],
          "answerIndex": 0,
          "explanation": "Clean thumb spacebar timing preserves flow."
        },
        {
          "prompt": "How should capital letters at the start of sentences (e.g. 'The', 'We', 'She') be typed?",
          "options": [
            "Use the OPPOSITE Shift key (e.g. Right Shift for 'T', 'W', 'S' typed on left hand) with pinky while striking the letter.",
            "Only type lowercase",
            "Turn Caps Lock on and off for every capital letter",
            "Press both Shift keys at the same time"
          ],
          "answerIndex": 0,
          "explanation": "Opposite Shift key technique is standard ergonomic touch typing."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Which shift key should you hold down to capitalize the letter 'P' (typed with Right Pinky)?",
          "options": [
            "Right Shift Key",
            "Left Shift Key",
            "Spacebar",
            "Caps Lock Key"
          ],
          "answerIndex": 1,
          "explanation": "Always use the opposite hand's Shift key: Left Shift for right-hand letters.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which sentence is another famous English pangram?",
          "options": [
            "'Pack my box with five dozen liquor jugs.'",
            "'The cat sat on the mat.'",
            "'Good morning everyone.'",
            "'Hello world.'"
          ],
          "answerIndex": 0,
          "explanation": "'Pack my box with five dozen liquor jugs' is a compact 32-letter pangram.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What physical sensation indicates you have reached intermediate touch typing fluency?",
          "options": [
            "You only use two fingers.",
            "Your wrists hurt.",
            "You need to look at your hands on every sentence.",
            "Your fingers move automatically to words as you read them on screen, with zero conscious thought about key coordinates."
          ],
          "answerIndex": 3,
          "explanation": "Automaticity occurs when conscious letter mapping shifts to subconscious motor flow.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Type: 'Knowledge is power, but practice makes permanent.' What is the correct quote principle?",
          "options": [
            "Practice does not matter.",
            "Typing fast with errors is good practice.",
            "Practicing with high accuracy creates permanent, flawless muscle memory (deliberate practice).",
            "Only look at the keyboard."
          ],
          "answerIndex": 2,
          "explanation": "Practice makes permanent; accurate practice builds elite speed.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 5, Lesson 4: Foundational & Structural Mastery (The quick brown fox jumps over)"
  },
  "typing-u5-l5": {
    "id": "typing-u5-l5",
    "unit": "typing-u5",
    "level": "intermediate",
    "objective": "Pass a high-frequency prose checkpoint sustaining 45-55+ WPM with 98%+ accuracy across continuous multi-sentence paragraphs.",
    "presentation": {
      "explanation": "In this Master Speed Checkpoint for Unit 5, we test your integrated fluency across bigrams, trigrams, top 100 words, and natural prose flow:\n\n1. Target Metrics for Unit 5 Mastery:\n   - **Speed Target**: 45 to 55+ Words Per Minute (WPM).\n   - **Accuracy Target**: Greater than or equal to **98.0%**.\n   - **Cadence Consistency**: Smooth, uninterrupted rhythm with lookahead visual buffering.\n\n2. Checkpoint Test Passage:\n   *'The old library stood quietly at the corner of the avenue, its tall windows catching the last golden light of the afternoon sun. Inside, people were reading through dusty books and writing notes about the history of the town. There was a sense of peace that made time stand still, reminding everyone that knowledge and patience will always find a way to change the world.'*\n\n3. Speed Calculation Formula:\n   - $\\text{WPM} = \\frac{\\text{Total Characters Typed} / 5}{\\text{Time in Minutes}} \\times \\text{Accuracy}$.",
      "examples": [
        {
          "target": "The old library stood quietly at the corner of the avenue...",
          "reading": "Continuous intermediate prose typing benchmark.",
          "translation": "Unit 5 Checkpoint Benchmark Passage"
        },
        {
          "target": "Speed: 52 WPM | Accuracy: 99.2% | Errors: 1 | Time: 60s.",
          "reading": "Exemplary benchmark result demonstrating fluent motor chunking.",
          "translation": "Mastery Benchmark Score"
        },
        {
          "target": "Lookahead buffering maintains steady 50+ WPM throughput.",
          "reading": "Visual reading buffer supporting continuous finger motion.",
          "translation": "Lookahead Buffer Demonstration"
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which biomechanical finger motion or rhythmic keystroke technique ensures peak speed and zero strain?",
          "options": [
            "Exactly 5 keystrokes",
            "Any word separated by a space regardless of length",
            "10 letters",
            "1 sentence"
          ],
          "answerIndex": 0,
          "explanation": "Standard WPM = Total characters divided by 5."
        },
        {
          "prompt": "If a typist types 250 characters in 1 minute with 100% accuracy, what is their WPM?",
          "options": [
            "50 WPM",
            "25 WPM",
            "100 WPM",
            "75 WPM"
          ],
          "answerIndex": 0,
          "explanation": "250 / 5 = 50 WPM."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 45:",
          "options": [
            "Stop typing and restart your computer",
            "Slightly dial back your raw speed by 5%, restore your rhythm and accuracy, and let speed naturally ramp back up.",
            "Look down at your keyboard",
            "Panic and mash keys faster"
          ],
          "answerIndex": 1,
          "explanation": "A slight pacing reset instantly restores accuracy and rhythm."
        },
        {
          "prompt": "What is the average typing speed of an untrained two-finger hunt-and-peck typist vs. a touch typist?",
          "options": [
            "Hunt-and-peck is faster",
            "Untrained: 25-35 WPM | Touch Typist: 55-90+ WPM",
            "Untrained is 100 WPM",
            "Both are identical"
          ],
          "answerIndex": 1,
          "explanation": "Touch typing provides a 2x-3x speed multiplier with vastly lower fatigue."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What core typing competencies were mastered across Unit 5 in Touch Typing?",
          "options": [
            "Top 10 English bigrams (TH, HE, IN, ER), high-frequency trigrams (THE, AND, ING, ION), Top 100 sight word automation, opposite-shift capitalization, and lookahead visual buffering for 45-55+ WPM prose",
            "F1 to F12 function keys only",
            "Number pad only",
            "Mouse clicking only"
          ],
          "answerIndex": 0,
          "explanation": "Unit 5 comprehensive intermediate bigram, trigram, sight word, and prose speed mastery.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is touch typing without looking at the keyboard essential for cognitive flow when writing essays or code?",
          "options": [
            "It increases screen resolution.",
            "It makes your fingers glow in the dark.",
            "It turns off typos automatically.",
            "It eliminates context-switching between screen and keys, allowing working memory to focus 100% on creative and logical thinking (deliberate practice)."
          ],
          "answerIndex": 3,
          "explanation": "Direct mental translation from thoughts to text preserves cognitive focus.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Calculate WPM: 300 characters typed in 60 seconds with 98% accuracy:",
          "options": [
            "40 WPM",
            "70 WPM",
            "58.8 Net WPM",
            "30 WPM"
          ],
          "answerIndex": 2,
          "explanation": "(300 / 5) * 0.98 = 58.8 WPM.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the next frontier of touch typing in Unit 6?",
          "options": [
            "Typing with toes",
            "Punctuation-Heavy & Code-Style Typing",
            "Buying a new monitor",
            "Memorizing the Russian alphabet"
          ],
          "answerIndex": 1,
          "explanation": "Unit 6 advances to complex punctuation and code-style typing.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 5, Lesson 5: Foundational & Structural Mastery (The old library stood quietly )"
  }
};
  var CURRICULUM = { id: 'typing', name: "typing", units: UNITS, lessons: LESSONS };
  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};
  global.FEARN_CURRICULA['typing'] = CURRICULUM;
  if (typeof module !== 'undefined' && module.exports) module.exports = CURRICULUM;
})(typeof window !== 'undefined' ? window : global);
