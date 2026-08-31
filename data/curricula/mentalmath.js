// FEARN Curriculum Data — mentalmath
(function (global) {
  'use strict';
  var UNITS = [
  {
    "id": "mentalmath-u1",
    "unit": 1,
    "title": "Complementary Addition & Left-to-Right Sums",
    "level": "Beginner",
    "goal": "Mastery of Complementary Addition & Left-to-Right Sums.",
    "lessonIds": [
      "mentalmath-u1-l1",
      "mentalmath-u1-l2",
      "mentalmath-u1-l3",
      "mentalmath-u1-l4",
      "mentalmath-u1-l5"
    ]
  },
  {
    "id": "mentalmath-u2",
    "unit": 2,
    "title": "Subtraction by Decomposition & Complements",
    "level": "Beginner",
    "goal": "Mastery of Subtraction by Decomposition & Complements.",
    "lessonIds": [
      "mentalmath-u2-l1",
      "mentalmath-u2-l2",
      "mentalmath-u2-l3",
      "mentalmath-u2-l4",
      "mentalmath-u2-l5"
    ]
  },
  {
    "id": "mentalmath-u3",
    "unit": 3,
    "title": "Fast Multiplication by 5, 9, 11, 15",
    "level": "Beginner",
    "goal": "Mastery of Fast Multiplication by 5, 9, 11, 15.",
    "lessonIds": [
      "mentalmath-u3-l1",
      "mentalmath-u3-l2",
      "mentalmath-u3-l3",
      "mentalmath-u3-l4",
      "mentalmath-u3-l5"
    ]
  },
  {
    "id": "mentalmath-u4",
    "unit": 4,
    "title": "Vedic Vertically & Crosswise (2x2 Multiplication)",
    "level": "Intermediate",
    "goal": "Mastery of Vedic Vertically & Crosswise (2x2 Multiplication).",
    "lessonIds": [
      "mentalmath-u4-l1",
      "mentalmath-u4-l2",
      "mentalmath-u4-l3",
      "mentalmath-u4-l4",
      "mentalmath-u4-l5"
    ]
  },
  {
    "id": "mentalmath-u5",
    "unit": 5,
    "title": "Squaring Numbers Ending in 5 & Near 50/100",
    "level": "Intermediate",
    "goal": "Mastery of Squaring Numbers Ending in 5 & Near 50/100.",
    "lessonIds": [
      "mentalmath-u5-l1",
      "mentalmath-u5-l2",
      "mentalmath-u5-l3",
      "mentalmath-u5-l4",
      "mentalmath-u5-l5"
    ]
  },
  {
    "id": "mentalmath-u6",
    "unit": 6,
    "title": "Division Shortcuts & Divisibility Rules (3,7,11,13)",
    "level": "Intermediate",
    "goal": "Mastery of Division Shortcuts & Divisibility Rules (3,7,11,13).",
    "lessonIds": [
      "mentalmath-u6-l1",
      "mentalmath-u6-l2",
      "mentalmath-u6-l3",
      "mentalmath-u6-l4",
      "mentalmath-u6-l5"
    ]
  },
  {
    "id": "mentalmath-u7",
    "unit": 7,
    "title": "Percentages, Tips & Estimation Speed",
    "level": "Advanced",
    "goal": "Mastery of Percentages, Tips & Estimation Speed.",
    "lessonIds": [
      "mentalmath-u7-l1",
      "mentalmath-u7-l2",
      "mentalmath-u7-l3",
      "mentalmath-u7-l4",
      "mentalmath-u7-l5"
    ]
  },
  {
    "id": "mentalmath-u8",
    "unit": 8,
    "title": "Square Roots & Cube Roots of Exact Powers",
    "level": "Advanced",
    "goal": "Mastery of Square Roots & Cube Roots of Exact Powers.",
    "lessonIds": [
      "mentalmath-u8-l1",
      "mentalmath-u8-l2",
      "mentalmath-u8-l3",
      "mentalmath-u8-l4",
      "mentalmath-u8-l5"
    ]
  }
];
  var LESSONS = {
  "mentalmath-u1-l1": {
    "id": "mentalmath-u1-l1",
    "unit": "mentalmath-u1",
    "level": "beginner",
    "objective": "Add two two-digit numbers mentally in under 5 seconds with full accuracy.",
    "difficulty": 600,
    "presentation": {
      "explanation": "Welcome to The Vault. Every lock on this vault is a two-digit addition problem, and the combination is the correct sum — crack it in under 5 seconds and the door swings open. The technique: add LEFT TO RIGHT, tens before ones, the opposite of the column method you learned in school. For 47 + 38, don't reach for a pencil to carry a 1 — instead say the tens first (40 + 30 = 70), then the ones (7 + 8 = 15), then combine (70 + 15 = 85). This mirrors how you'd say the number out loud, which is exactly why it's faster in your head. A second trick, 'round and adjust,' works even quicker when one number is close to a multiple of ten: 47 + 38 = 47 + 40 - 2 = 87 - 2 = 85. Learn both; use whichever fits the numbers in front of you.",
      "examples": [
        {
          "problem": "34 + 52",
          "answer": 86,
          "description": "Tens first: 30 + 50 = 80. Ones: 4 + 2 = 6. Combine: 80 + 6 = 86."
        },
        {
          "problem": "47 + 38",
          "answer": 85,
          "description": "Tens first: 40 + 30 = 70. Ones: 7 + 8 = 15. Combine: 70 + 15 = 85. (Or: 47 + 40 - 2 = 85.)"
        },
        {
          "problem": "68 + 27",
          "answer": 95,
          "description": "Tens first: 60 + 20 = 80. Ones: 8 + 7 = 15. Combine: 80 + 15 = 95."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "mentalmath-u1-l1-q1",
          "type": "compute",
          "prompt": "Vault lock #1 — crack it in under 5 seconds: 56 + 38 = ?",
          "answer": 94,
          "difficulty": 600
        },
        {
          "id": "mentalmath-u1-l1-q2",
          "type": "compute",
          "prompt": "Vault lock #2: 73 + 19 = ?",
          "answer": 92,
          "difficulty": 600
        },
        {
          "id": "mentalmath-u1-l1-q3",
          "type": "multiple-choice",
          "prompt": "Why is adding tens-before-ones (left to right) usually faster in your head than the school column method?",
          "options": [
            "It isn't faster, it just looks different (Add two twodigit numbers mentally in under 5 seconds with full accuracy)",
            "It matches how you already say numbers aloud, so there is nothing to translate before speaking the answer (Add two twodigit numbers mentally in under 5 seconds with full accuracy)",
            "It only works for even numbers (Add two twodigit numbers mentally in under 5 seconds with full accuracy)",
            "It requires writing the numbers down first (Add two twodigit numbers mentally in under 5 seconds with full accuracy)"
          ],
          "answer": "It matches how you already say numbers aloud, so there is nothing to translate before speaking the answer",
          "difficulty": 560,
          "answerIndex": 0
        },
        {
          "id": "mentalmath-u1-l1-q4",
          "type": "compute",
          "prompt": "Vault lock #3: 29 + 46 = ?",
          "answer": 75,
          "difficulty": 620
        }
      ]
    },
    "title": "Unit 1, Lesson 1"
  },
  "mentalmath-u1-l2": {
    "id": "mentalmath-u1-l2",
    "unit": "mentalmath-u1",
    "level": "beginner",
    "objective": "Subtract two two-digit numbers mentally using the compensation technique.",
    "difficulty": 620,
    "presentation": {
      "explanation": "New vault, trickier locks: subtraction. The compensation technique turns any ugly subtraction into an easy one plus a tiny correction. Round the number you're subtracting UP to the nearest ten, subtract that friendly round number, then add back the amount you rounded by. For 82 - 37: round 37 up to 40 (that's +3), compute 82 - 40 = 42, then add the 3 back since you subtracted too much: 42 + 3 = 45. The whole move takes one breath once it's automatic: 'round up, subtract, add back.' This works because subtracting a slightly bigger number and then adding the difference back always lands exactly where subtracting the real number would have.",
      "examples": [
        {
          "problem": "64 - 28",
          "answer": 36,
          "description": "Round 28 up to 30 (+2). 64 - 30 = 34. Add back 2: 34 + 2 = 36."
        },
        {
          "problem": "91 - 56",
          "answer": 35,
          "description": "Round 56 up to 60 (+4). 91 - 60 = 31. Add back 4: 31 + 4 = 35."
        },
        {
          "problem": "73 - 19",
          "answer": 54,
          "description": "Round 19 up to 20 (+1). 73 - 20 = 53. Add back 1: 53 + 1 = 54."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "mentalmath-u1-l2-q1",
          "type": "compute",
          "prompt": "Vault lock #1: 82 - 37 = ?",
          "answer": 45,
          "difficulty": 620
        },
        {
          "id": "mentalmath-u1-l2-q2",
          "type": "compute",
          "prompt": "Vault lock #2: 95 - 48 = ?",
          "answer": 47,
          "difficulty": 630
        },
        {
          "id": "mentalmath-u1-l2-q3",
          "type": "multiple-choice",
          "prompt": "In the compensation technique, after rounding the subtrahend UP and subtracting, what do you do next?",
          "options": [
            "Subtract the rounding amount again (Subtract two twodigit numbers mentally using the compensation technique)",
            "Add the rounding amount back (Subtract two twodigit numbers mentally using the compensation technique)",
            "Multiply by the rounding amount (Subtract two twodigit numbers mentally using the compensation technique)",
            "Nothing — the rounded answer is already correct (Subtract two twodigit numbers mentally using the compensation technique)"
          ],
          "answer": "Add the rounding amount back",
          "difficulty": 580,
          "answerIndex": 0
        },
        {
          "id": "mentalmath-u1-l2-q4",
          "type": "compute",
          "prompt": "Vault lock #3: 61 - 24 = ?",
          "answer": 37,
          "difficulty": 620
        }
      ]
    },
    "title": "Unit 1, Lesson 2"
  },
  "mentalmath-u1-l3": {
    "id": "mentalmath-u1-l3",
    "unit": "mentalmath-u1",
    "level": "beginner",
    "objective": "Add a column of three or more single-digit numbers by grouping to make tens.",
    "difficulty": 630,
    "presentation": {
      "explanation": "This lock has more than two dials. When you're adding a whole column of single digits, don't just plow through left to right — first scan the whole list for pairs that add to exactly 10 (like 7 and 3, or 6 and 4, or 9 and 1), and add those pairs first. Each matched pair collapses instantly into a clean 10, and clean 10s stack in your head with zero effort. Whatever single digits are left over after pairing get added on at the end. For 7 + 4 + 3 + 6 + 9 + 1: pair 7+3=10, pair 4+6=10, pair 9+1=10 — three 10s, so the total is 30, found without ever adding two odd-looking numbers together.",
      "examples": [
        {
          "problem": "7 + 4 + 3 + 6 + 9 + 1",
          "answer": 30,
          "description": "Pairs to ten: (7+3), (4+6), (9+1) — three 10s = 30."
        },
        {
          "problem": "8 + 5 + 2 + 7 + 3",
          "answer": 25,
          "description": "Pairs to ten: (8+2), (7+3) = 20, plus the leftover 5 = 25."
        },
        {
          "problem": "9 + 6 + 4 + 1 + 5 + 5",
          "answer": 30,
          "description": "Pairs to ten: (9+1), (6+4), (5+5) — three 10s = 30."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "mentalmath-u1-l3-q1",
          "type": "compute",
          "prompt": "Vault lock #1: 6 + 7 + 4 + 3 + 8 + 2 = ?",
          "answer": 30,
          "difficulty": 630
        },
        {
          "id": "mentalmath-u1-l3-q2",
          "type": "compute",
          "prompt": "Vault lock #2: 9 + 2 + 8 + 5 + 1 = ?",
          "answer": 25,
          "difficulty": 630
        },
        {
          "id": "mentalmath-u1-l3-q3",
          "type": "multiple-choice",
          "prompt": "When adding a long column of single digits mentally, what should you scan for first?",
          "options": [
            "The largest number in the list (Add a column of three or more singledigit numbers by grouping to make tens)",
            "Pairs of digits that add up to exactly 10 (Add a column of three or more singledigit numbers by grouping to make tens)",
            "The smallest number in the list (Add a column of three or more singledigit numbers by grouping to make tens)",
            "Numbers that are already even (Add a column of three or more singledigit numbers by grouping to make tens)"
          ],
          "answer": "Pairs of digits that add up to exactly 10",
          "difficulty": 580,
          "answerIndex": 0
        },
        {
          "id": "mentalmath-u1-l3-q4",
          "type": "compute",
          "prompt": "Vault lock #3: 3 + 8 + 7 + 2 + 5 + 5 = ?",
          "answer": 30,
          "difficulty": 640
        }
      ]
    },
    "title": "Unit 1, Lesson 3"
  },
  "mentalmath-u1-l4": {
    "id": "mentalmath-u1-l4",
    "unit": "mentalmath-u1",
    "level": "beginner",
    "objective": "Add and subtract three-digit numbers using left-to-right calculation.",
    "difficulty": 660,
    "presentation": {
      "explanation": "The vault's biggest lock yet: three digits. The same left-to-right habit from Lesson 1 scales up cleanly — add or subtract hundreds first, then tens, then ones, and combine as you go. For 342 + 256: hundreds (300 + 200 = 500), tens (40 + 50 = 90), ones (2 + 6 = 8), combine (500 + 90 + 8 = 598). For subtraction, compensation still works exactly as before, just with a rounder hundred instead of a ten: 523 - 268 rounds 268 up to 270 (+2), gives 523 - 270 = 253, then add back the 2: 255.",
      "examples": [
        {
          "problem": "342 + 256",
          "answer": 598,
          "description": "Hundreds: 300+200=500. Tens: 40+50=90. Ones: 2+6=8. Total: 500+90+8=598."
        },
        {
          "problem": "523 - 268",
          "answer": 255,
          "description": "Round 268 up to 270 (+2). 523-270=253. Add back 2: 255."
        },
        {
          "problem": "478 + 345",
          "answer": 823,
          "description": "Hundreds: 400+300=700. Tens: 70+40=110. Ones: 8+5=13. Total: 700+110+13=823."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "mentalmath-u1-l4-q1",
          "type": "compute",
          "prompt": "Vault lock #1: 267 + 358 = ?",
          "answer": 625,
          "difficulty": 660
        },
        {
          "id": "mentalmath-u1-l4-q2",
          "type": "compute",
          "prompt": "Vault lock #2: 612 - 347 = ?",
          "answer": 265,
          "difficulty": 670
        },
        {
          "id": "mentalmath-u1-l4-q3",
          "type": "multiple-choice",
          "prompt": "For three-digit compensation subtraction (like 523 - 268), what do you round the second number to?",
          "options": [
            "The nearest ten (Add and subtract threedigit numbers using lefttoright calculation)",
            "The nearest hundred (Add and subtract threedigit numbers using lefttoright calculation)",
            "The nearest thousand (Add and subtract threedigit numbers using lefttoright calculation)",
            "You never round three-digit numbers (Add and subtract threedigit numbers using lefttoright calculation)"
          ],
          "answer": "The nearest hundred",
          "difficulty": 620,
          "answerIndex": 0
        },
        {
          "id": "mentalmath-u1-l4-q4",
          "type": "compute",
          "prompt": "Vault lock #3: 419 + 273 = ?",
          "answer": 692,
          "difficulty": 660
        }
      ]
    },
    "title": "Unit 1, Lesson 4"
  },
  "mentalmath-u1-l5": {
    "id": "mentalmath-u1-l5",
    "unit": "mentalmath-u1",
    "level": "beginner",
    "objective": "Pass a mixed addition/subtraction fluency checkpoint under time pressure.",
    "difficulty": 680,
    "presentation": {
      "explanation": "Boss round. The vault throws every lock type from this unit at you in random order — two-digit addition, compensation subtraction, column-grouping addition, and three-digit calculation — with no label telling you which technique applies. Read the problem, recognize the shape, pick the right trick, and crack it before the timer runs out. This is exactly how real mental math works outside the vault: nobody announces which method to use, you just recognize the pattern instantly because you've drilled each piece separately first.",
      "examples": [
        {
          "problem": "58 + 27",
          "answer": 85,
          "description": "Two-digit addition: 50+20=70, 8+7=15, total 85."
        },
        {
          "problem": "91 - 46",
          "answer": 45,
          "description": "Compensation: round 46 to 50 (+4), 91-50=41, add back 4 = 45."
        },
        {
          "problem": "7 + 8 + 3 + 2 + 9 + 1",
          "answer": 30,
          "description": "Column grouping: (7+3), (8+2), (9+1) = three 10s = 30."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "mentalmath-u1-l5-q1",
          "type": "compute",
          "prompt": "Boss lock #1: 58 + 27 = ?",
          "answer": 85,
          "difficulty": 660
        },
        {
          "id": "mentalmath-u1-l5-q2",
          "type": "compute",
          "prompt": "Boss lock #2: 91 - 46 = ?",
          "answer": 45,
          "difficulty": 670
        },
        {
          "id": "mentalmath-u1-l5-q3",
          "type": "compute",
          "prompt": "Boss lock #3: 7 + 8 + 3 + 2 + 9 + 1 = ?",
          "answer": 30,
          "difficulty": 660
        },
        {
          "id": "mentalmath-u1-l5-q4",
          "type": "compute",
          "prompt": "Boss lock #4: 346 + 278 = ?",
          "answer": 624,
          "difficulty": 690
        },
        {
          "id": "mentalmath-u1-l5-q5",
          "type": "short-answer",
          "prompt": "Name the three techniques from this unit and, in one phrase each, what problem shape each one is best for.",
          "answer": "Left-to-right addition (tens then ones) for two-digit sums; compensation (round up, subtract, add back) for subtraction; grouping-to-ten pairs for long columns of single digits.",
          "difficulty": 650
        }
      ]
    },
    "title": "Unit 1, Lesson 5"
  },
  "mentalmath-u2-l1": {
    "id": "mentalmath-u2-l1",
    "unit": "mentalmath-u2",
    "level": "beginner",
    "objective": "Recall all single-digit multiplication facts (1-10) instantly without counting.",
    "difficulty": 600,
    "presentation": {
      "explanation": "The vault's second chamber is a wall of 100 dial locks — one for every pair of digits 1 through 10 — and counting on your fingers to crack each one is far too slow. You don't need 100 separate memories, though: you need a handful of master keys. First, the squares (1x1, 2x2, 3x3... up to 10x10) are anchor points — once 6x6=36 is solid, 6x7 is just 'one more group of 6' away: 36+6=42. Second, the 9s trick turns the hardest-looking row into the easiest: for 9 times any digit n, the tens digit is always n-1 and the ones digit is always 9 minus that. 9x7: tens = 6, ones = 9-6=3, so 63. Third, doubling chains crack the 2s, 4s, and 8s rows from a single fact: if you know 6x2=12, then 6x4 is just double that (24), and 6x8 doubles again (48). Master these three keys and the '100 facts' collapse into maybe a dozen things to actually remember.",
      "examples": [
        {
          "problem": "6x6=36 (anchor), so 6x7 = ?",
          "answer": 42,
          "description": "Anchor-and-step: 6x7 is one more group of 6 than the memorized square 6x6. 36+6=42."
        },
        {
          "problem": "9x7 via the 9s trick",
          "answer": 63,
          "description": "Tens digit = 7-1=6. Ones digit = 9-6=3. Read as 63."
        },
        {
          "problem": "7x4 via doubling from 7x2=14",
          "answer": 28,
          "description": "7x2=14 is easy to hold in memory; 7x4 doubles it once: 14x2=28."
        },
        {
          "problem": "7x8=56 (the classic \"5,6,7,8\" fact)",
          "answer": 56,
          "description": "A famous coincidence worth memorizing outright: the digits 5-6-7-8 run in order — 56 = 7x8."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "mentalmath-u2-l1-q1",
          "type": "compute",
          "prompt": "Dial lock #1: 8x7 = ?",
          "answer": 56,
          "difficulty": 600
        },
        {
          "id": "mentalmath-u2-l1-q2",
          "type": "compute",
          "prompt": "Dial lock #2 (use the 9s trick): 9x8 = ?",
          "answer": 72,
          "difficulty": 600
        },
        {
          "id": "mentalmath-u2-l1-q3",
          "type": "compute",
          "prompt": "Dial lock #3: 6x9 = ?",
          "answer": 54,
          "difficulty": 600
        },
        {
          "id": "mentalmath-u2-l1-q4",
          "type": "multiple-choice",
          "prompt": "Using the 9s trick, what is the tens digit of 9x4?",
          "options": [
            "9 (Recall all singledigit multiplication facts 110 instantly without counting)",
            "4 (Recall all singledigit multiplication facts 110 instantly without counting)",
            "3 (Recall all singledigit multiplication facts 110 instantly without counting)",
            "5 (Recall all singledigit multiplication facts 110 instantly without counting)"
          ],
          "answer": "3",
          "difficulty": 590,
          "answerIndex": 0
        },
        {
          "id": "mentalmath-u2-l1-q5",
          "type": "compute",
          "prompt": "Dial lock #4: 7x7 = ?",
          "answer": 49,
          "difficulty": 600
        }
      ]
    },
    "title": "Unit 2, Lesson 1"
  },
  "mentalmath-u2-l2": {
    "id": "mentalmath-u2-l2",
    "unit": "mentalmath-u2",
    "level": "beginner",
    "objective": "Recall single-digit division facts as the inverse of multiplication facts.",
    "difficulty": 610,
    "presentation": {
      "explanation": "Past the multiplication wall is a mirror room: every dial lock runs backward. Division isn't a new set of 100 facts to memorize — it's the exact same facts read in the opposite direction. Every multiplication fact belongs to a 'fact family' of four related statements: 6x7=42, 7x6=42, 42/6=7, and 42/7=6. If you already know the multiplication fact solidly, the division fact is free — you're just asking 'what do I multiply by 6 to land on 42?' instead of 'what does 6 times 7 give me?' The trick to cracking a division lock fast is to recognize the dividend as a familiar product first: see 56, think '7x8', then read off whichever half of the family the question asked for. This is also why the anchor-square and 9s-trick keys from the last lesson still work here in reverse — 63/9: run the 9s trick backward, or just recall 9x7=63 and flip it.",
      "examples": [
        {
          "problem": "42 / 6 = ? (fact family of 6x7=42)",
          "answer": 7,
          "description": "Recognize 42 as 6x7 first, then read off the missing factor: 7."
        },
        {
          "problem": "54 / 9 = ? (use the 9s-trick fact family)",
          "answer": 6,
          "description": "From 9x6=54: the fact family flips cleanly to 54/9=6."
        },
        {
          "problem": "64 / 8 = ? (anchor square 8x8=64)",
          "answer": 8,
          "description": "64 is the square anchor 8x8, so dividing either factor back out returns the other 8."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "mentalmath-u2-l2-q1",
          "type": "compute",
          "prompt": "Mirror lock #1: 56 / 7 = ?",
          "answer": 8,
          "difficulty": 610
        },
        {
          "id": "mentalmath-u2-l2-q2",
          "type": "compute",
          "prompt": "Mirror lock #2: 63 / 9 = ?",
          "answer": 7,
          "difficulty": 610
        },
        {
          "id": "mentalmath-u2-l2-q3",
          "type": "compute",
          "prompt": "Mirror lock #3: 45 / 5 = ?",
          "answer": 9,
          "difficulty": 610
        },
        {
          "id": "mentalmath-u2-l2-q4",
          "type": "multiple-choice",
          "prompt": "What is the fastest way to solve 72 / 8 mentally?",
          "options": [
            "Count down from 72 by 8s until you reach 0 (Recall singledigit division facts as the inverse of multiplication facts)",
            "Recognize 72 as the product 8x9 and read off the missing factor (Recall singledigit division facts as the inverse of multiplication facts)",
            "It can't be solved without a calculator (Recall singledigit division facts as the inverse of multiplication facts)",
            "Divide 72 by 2 four times (Recall singledigit division facts as the inverse of multiplication facts)"
          ],
          "answer": "Recognize 72 as the product 8x9 and read off the missing factor",
          "difficulty": 600,
          "answerIndex": 0
        },
        {
          "id": "mentalmath-u2-l2-q5",
          "type": "compute",
          "prompt": "Mirror lock #4: 36 / 4 = ?",
          "answer": 9,
          "difficulty": 610
        }
      ]
    },
    "title": "Unit 2, Lesson 2"
  },
  "mentalmath-u2-l3": {
    "id": "mentalmath-u2-l3",
    "unit": "mentalmath-u2",
    "level": "beginner",
    "objective": "Multiply a two-digit number by a single digit using place-value decomposition.",
    "difficulty": 630,
    "presentation": {
      "explanation": "The vault's next lock has a two-digit dial and a one-digit dial, and the trick is the same one that cracked addition back in Unit 1: split by place value, solve the easy pieces, recombine. For 34 x 6, don't attack 34 as one lump — split it into 30 and 4. Multiply each piece by 6 separately (30x6=180, and 4x6=24, both single-digit-times-round-number facts you already have from this unit), then add the pieces back together: 180+24=204. This works because multiplication distributes over addition (34x6 is really (30+4)x6, which is 30x6 + 4x6) — you're never doing anything mathematically different from the column method taught in school, just doing it left-to-right, out loud, in your head, without carrying digits on paper.",
      "examples": [
        {
          "problem": "34 x 6",
          "answer": 204,
          "description": "Split: 30x6=180, 4x6=24. Combine: 180+24=204."
        },
        {
          "problem": "47 x 3",
          "answer": 141,
          "description": "Split: 40x3=120, 7x3=21. Combine: 120+21=141."
        },
        {
          "problem": "58 x 4",
          "answer": 232,
          "description": "Split: 50x4=200, 8x4=32. Combine: 200+32=232."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "mentalmath-u2-l3-q1",
          "type": "compute",
          "prompt": "Two-dial lock #1: 26 x 7 = ?",
          "answer": 182,
          "difficulty": 630
        },
        {
          "id": "mentalmath-u2-l3-q2",
          "type": "compute",
          "prompt": "Two-dial lock #2: 39 x 5 = ?",
          "answer": 195,
          "difficulty": 640
        },
        {
          "id": "mentalmath-u2-l3-q3",
          "type": "compute",
          "prompt": "Two-dial lock #3: 83 x 3 = ?",
          "answer": 249,
          "difficulty": 630
        },
        {
          "id": "mentalmath-u2-l3-q4",
          "type": "multiple-choice",
          "prompt": "To multiply 62 x 8 by place-value decomposition, which two easier products do you add together?",
          "options": [
            "6x8 and 2x8 (Multiply a twodigit number by a single digit using placevalue decomposition)",
            "60x8 and 2x8 (Multiply a twodigit number by a single digit using placevalue decomposition)",
            "62x8 directly, no splitting needed (Multiply a twodigit number by a single digit using placevalue decomposition)",
            "60x8 and 20x8 (Multiply a twodigit number by a single digit using placevalue decomposition)"
          ],
          "answer": "60x8 and 2x8",
          "difficulty": 620,
          "answerIndex": 0
        },
        {
          "id": "mentalmath-u2-l3-q5",
          "type": "compute",
          "prompt": "Two-dial lock #4: 45 x 6 = ?",
          "answer": 270,
          "difficulty": 640
        }
      ]
    },
    "title": "Unit 2, Lesson 3"
  },
  "mentalmath-u2-l4": {
    "id": "mentalmath-u2-l4",
    "unit": "mentalmath-u2",
    "level": "beginner",
    "objective": "Divide a two- or three-digit number by a single digit mentally using chunking.",
    "difficulty": 650,
    "presentation": {
      "explanation": "The mirror room's next lock runs multi-digit division backward using 'chunking': break the number you're dividing into a friendly chunk that's an obvious multiple of the divisor, plus whatever's left over, then divide each chunk separately and add the results. For 96 / 4: the friendly chunk is 80 (an obvious multiple of 4 — 80/4=20), leaving 16 (96-80), and 16/4=4. Add the two partial answers: 20+4=24. The skill is choosing a good chunk — usually the largest 'round' multiple of the divisor that's still less than or equal to your number — because a well-chosen chunk turns one hard division into two trivial ones. For three-digit numbers the same idea scales up: 216 / 6 splits into 180/6=30 (chunk) and 36/6=6 (remainder), combining to 36.",
      "examples": [
        {
          "problem": "96 / 4",
          "answer": 24,
          "description": "Chunk: 80/4=20. Remainder: 16/4=4. Combine: 20+4=24."
        },
        {
          "problem": "144 / 6",
          "answer": 24,
          "description": "Chunk: 120/6=20. Remainder: 24/6=4. Combine: 20+4=24."
        },
        {
          "problem": "216 / 6",
          "answer": 36,
          "description": "Chunk: 180/6=30. Remainder: 36/6=6. Combine: 30+6=36."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "mentalmath-u2-l4-q1",
          "type": "compute",
          "prompt": "Mirror lock #1: 128 / 8 = ?",
          "answer": 16,
          "difficulty": 650
        },
        {
          "id": "mentalmath-u2-l4-q2",
          "type": "compute",
          "prompt": "Mirror lock #2: 91 / 7 = ?",
          "answer": 13,
          "difficulty": 650
        },
        {
          "id": "mentalmath-u2-l4-q3",
          "type": "compute",
          "prompt": "Mirror lock #3: 75 / 5 = ?",
          "answer": 15,
          "difficulty": 640
        },
        {
          "id": "mentalmath-u2-l4-q4",
          "type": "multiple-choice",
          "prompt": "When chunking 168 / 8, which chunk makes the division easiest?",
          "options": [
            "100, leaving 68 (Divide a two or threedigit number by a single digit mentally using chunking)",
            "160, leaving 8 (Divide a two or threedigit number by a single digit mentally using chunking)",
            "80, leaving 88 (Divide a two or threedigit number by a single digit mentally using chunking)",
            "8, leaving 160 (Divide a two or threedigit number by a single digit mentally using chunking)"
          ],
          "answer": "160, leaving 8",
          "difficulty": 650,
          "answerIndex": 0
        },
        {
          "id": "mentalmath-u2-l4-q5",
          "type": "compute",
          "prompt": "Mirror lock #4: 156 / 4 = ?",
          "answer": 39,
          "difficulty": 660
        }
      ]
    },
    "title": "Unit 2, Lesson 4"
  },
  "mentalmath-u2-l5": {
    "id": "mentalmath-u2-l5",
    "unit": "mentalmath-u2",
    "level": "beginner",
    "objective": "Pass a mixed multiplication/division fluency checkpoint under time pressure.",
    "difficulty": 660,
    "presentation": {
      "explanation": "Boss round for the vault's second chamber. Every lock type from this unit shows up in random order — bare single-digit facts, their division mirrors, two-digit-by-one-digit decomposition, and chunked division — with no hint about which key fits which lock. The skill being tested isn't any one technique in isolation, it's recognition speed: glance at the problem, recognize its shape ('that's a two-digit times one-digit, split it by place value' or 'that's a division, hunt for the familiar product first'), and fire the right key without hesitating. Clearing this chamber means the entire multiplication/division wall is now yours — Unit 3 moves on to shortcuts that make even these techniques feel slow by comparison.",
      "examples": [
        {
          "problem": "8x6",
          "answer": 48,
          "description": "Bare fact, ideally instant recall by now."
        },
        {
          "problem": "72 / 9",
          "answer": 8,
          "description": "Division mirror: recognize 72 as 8x9."
        },
        {
          "problem": "27 x 4",
          "answer": 108,
          "description": "Decomposition: 20x4=80, 7x4=28, combine=108."
        },
        {
          "problem": "135 / 5",
          "answer": 27,
          "description": "Chunking: 100/5=20, 35/5=7, combine=27."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "mentalmath-u2-l5-q1",
          "type": "compute",
          "prompt": "Boss lock #1: 9x7 = ?",
          "answer": 63,
          "difficulty": 640
        },
        {
          "id": "mentalmath-u2-l5-q2",
          "type": "compute",
          "prompt": "Boss lock #2: 48 / 6 = ?",
          "answer": 8,
          "difficulty": 640
        },
        {
          "id": "mentalmath-u2-l5-q3",
          "type": "compute",
          "prompt": "Boss lock #3: 53 x 4 = ?",
          "answer": 212,
          "difficulty": 660
        },
        {
          "id": "mentalmath-u2-l5-q4",
          "type": "compute",
          "prompt": "Boss lock #4: 132 / 6 = ?",
          "answer": 22,
          "difficulty": 660
        },
        {
          "id": "mentalmath-u2-l5-q5",
          "type": "short-answer",
          "prompt": "Name the two techniques from this unit for handling multi-digit problems, and in one phrase each, describe what each one does.",
          "answer": "Place-value decomposition splits a multi-digit multiplication into round-number pieces (tens and ones) that are each multiplied separately, then added back together; chunking splits a division into a friendly multiple of the divisor plus a remainder, dividing each piece separately, then adding the partial answers.",
          "difficulty": 650
        }
      ]
    },
    "title": "Unit 2, Lesson 5"
  },
  "mentalmath-u3-l1": {
    "id": "mentalmath-u3-l1",
    "unit": "mentalmath-u3",
    "level": "intermediate",
    "objective": "Multiply any two-digit number by 11 using the \"add the digits\" shortcut.",
    "difficulty": 700,
    "presentation": {
      "explanation": "This chamber's first lock skips calculation almost entirely. For any two-digit number times 11, split the number into its two digits, add them together, and slide that sum in between the original two digits. For 26 x 11: digits are 2 and 6, their sum is 8, so the answer is 2-8-6 = 286. That's it — no carrying, no column math, just read the answer off the two original digits with their sum wedged in the middle. The only wrinkle is when the digit sum is 10 or more: then the middle slot can only hold one digit, so you write down the ones digit of that sum and carry the extra 1 into the first digit. For 58 x 11: digits 5 and 8 sum to 13 — too big for one slot — so the middle digit becomes 3 and the carried 1 bumps the first digit from 5 to 6, giving 6-3-8 = 638. Same trick, same one extra step whenever the digits sum past 9.",
      "examples": [
        {
          "problem": "26 x 11 (digits sum to 8, no carry)",
          "answer": 286,
          "description": "2 and 6 sum to 8. Slide it between them: 2-8-6 = 286."
        },
        {
          "problem": "58 x 11 (digits sum to 13, carry needed)",
          "answer": 638,
          "description": "5 and 8 sum to 13. Write the 3, carry the 1 into the first digit (5+1=6): 6-3-8 = 638."
        },
        {
          "problem": "47 x 11 (digits sum to 11, carry needed)",
          "answer": 517,
          "description": "4 and 7 sum to 11. Write the 1, carry the 1 into the first digit (4+1=5): 5-1-7 = 517."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "mentalmath-u3-l1-q1",
          "type": "compute",
          "prompt": "Shortcut lock #1: 45 x 11 = ?",
          "answer": 495,
          "difficulty": 700
        },
        {
          "id": "mentalmath-u3-l1-q2",
          "type": "compute",
          "prompt": "Shortcut lock #2: 63 x 11 = ?",
          "answer": 693,
          "difficulty": 700
        },
        {
          "id": "mentalmath-u3-l1-q3",
          "type": "multiple-choice",
          "prompt": "When multiplying a two-digit number by 11, when do you need the \"carry\" step?",
          "options": [
            "Whenever the number is even (Multiply any twodigit number by 11 using the add the digits shortcut)",
            "Whenever the two digits sum to 10 or more (Multiply any twodigit number by 11 using the add the digits shortcut)",
            "Whenever the first digit is bigger than the second (Multiply any twodigit number by 11 using the add the digits shortcut)",
            "Every single time, with no exceptions (Multiply any twodigit number by 11 using the add the digits shortcut)"
          ],
          "answer": "Whenever the two digits sum to 10 or more",
          "difficulty": 690,
          "answerIndex": 0
        },
        {
          "id": "mentalmath-u3-l1-q4",
          "type": "compute",
          "prompt": "Shortcut lock #3 (carry required): 89 x 11 = ?",
          "answer": 979,
          "difficulty": 710
        }
      ]
    },
    "title": "Unit 3, Lesson 1"
  },
  "mentalmath-u3-l2": {
    "id": "mentalmath-u3-l2",
    "unit": "mentalmath-u3",
    "level": "intermediate",
    "objective": "Multiply any number by 5 using the halve-and-shift shortcut.",
    "difficulty": 700,
    "presentation": {
      "explanation": "Multiplying by 5 is secretly multiplying by 10 and cutting the result in half — but it's faster to halve first, then shift. Take half of the number, then multiply that half by 10 (shift it one decimal place). For an even number like 48: half of 48 is 24, shift it to 240. Done. For an ODD number, halving gives you a decimal ending in .5 — and that's actually the fast path, not a problem: shifting a .5 one decimal place always lands on a clean whole number ending in 5, with zero rounding needed. For 47: half of 47 is 23.5, shift the decimal one place right, and you get 235 directly — no separate correction step required, because a trailing .5 shifted by one place always becomes a trailing 5.",
      "examples": [
        {
          "problem": "48 x 5 (even)",
          "answer": 240,
          "description": "Half of 48 is 24. Shift (x10): 240."
        },
        {
          "problem": "47 x 5 (odd)",
          "answer": 235,
          "description": "Half of 47 is 23.5. Shift the decimal one place right: 235 — the trailing .5 becomes a trailing 5 automatically."
        },
        {
          "problem": "86 x 5 (even)",
          "answer": 430,
          "description": "Half of 86 is 43. Shift: 430."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "mentalmath-u3-l2-q1",
          "type": "compute",
          "prompt": "Shortcut lock #1: 74 x 5 = ?",
          "answer": 370,
          "difficulty": 700
        },
        {
          "id": "mentalmath-u3-l2-q2",
          "type": "compute",
          "prompt": "Shortcut lock #2 (odd number): 39 x 5 = ?",
          "answer": 195,
          "difficulty": 710
        },
        {
          "id": "mentalmath-u3-l2-q3",
          "type": "multiple-choice",
          "prompt": "Why does halving an odd number before \"shifting\" still give a clean whole-number answer with no extra rounding step?",
          "options": [
            "It does not — odd numbers always require a separate correction (Multiply any number by 5 using the halveandshift shortcut)",
            "A trailing .5, shifted one decimal place, always becomes a trailing 5 (Multiply any number by 5 using the halveandshift shortcut)",
            "Odd numbers are rounded up automatically by the shortcut (Multiply any number by 5 using the halveandshift shortcut)",
            "The shortcut only works for even numbers (Multiply any number by 5 using the halveandshift shortcut)"
          ],
          "answer": "A trailing .5, shifted one decimal place, always becomes a trailing 5",
          "difficulty": 690,
          "answerIndex": 0
        },
        {
          "id": "mentalmath-u3-l2-q4",
          "type": "compute",
          "prompt": "Shortcut lock #3: 156 x 5 = ?",
          "answer": 780,
          "difficulty": 710
        }
      ]
    },
    "title": "Unit 3, Lesson 2: Multiply any number by 5 using the halve-and-shift shortcut"
  },
  "mentalmath-u3-l3": {
    "id": "mentalmath-u3-l3",
    "unit": "mentalmath-u3",
    "level": "intermediate",
    "objective": "Multiply any number by 9 using the \"x10 then subtract\" shortcut.",
    "difficulty": 710,
    "presentation": {
      "explanation": "Nine is one less than ten, and that single fact is the entire lock: to multiply by 9, multiply by 10 (trivially — just add a zero) and then subtract the original number once. For 34 x 9: 34 x 10 = 340, then subtract 34: 340 - 34 = 306. This works because 9 IS (10 - 1), so n x 9 is exactly n x 10 minus n x 1 — no approximation, an exact identity every time. The same idea scales to any 'one less than a round number' multiplier: x99 is x100 minus the number once, x999 is x1000 minus the number once, and so on — this single chamber's trick quietly unlocks a whole family of locks beyond just the 9s.",
      "examples": [
        {
          "problem": "34 x 9",
          "answer": 306,
          "description": "34 x 10 = 340. Subtract 34 once: 340 - 34 = 306."
        },
        {
          "problem": "67 x 9",
          "answer": 603,
          "description": "67 x 10 = 670. Subtract 67 once: 670 - 67 = 603."
        },
        {
          "problem": "128 x 9",
          "answer": 1152,
          "description": "128 x 10 = 1280. Subtract 128 once: 1280 - 128 = 1152."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "mentalmath-u3-l3-q1",
          "type": "compute",
          "prompt": "Shortcut lock #1: 56 x 9 = ?",
          "answer": 504,
          "difficulty": 710
        },
        {
          "id": "mentalmath-u3-l3-q2",
          "type": "compute",
          "prompt": "Shortcut lock #2: 89 x 9 = ?",
          "answer": 801,
          "difficulty": 710
        },
        {
          "id": "mentalmath-u3-l3-q3",
          "type": "compute",
          "prompt": "Shortcut lock #3: 213 x 9 = ?",
          "answer": 1917,
          "difficulty": 730
        },
        {
          "id": "mentalmath-u3-l3-q4",
          "type": "multiple-choice",
          "prompt": "Why does \"multiply by 10, then subtract the number once\" work exactly (not approximately) for multiplying by 9?",
          "options": [
            "It is only an approximation and needs rounding afterward (Multiply any number by 9 using the x10 then subtract shortcut)",
            "Because 9 equals 10 minus 1, so n x 9 is exactly n x 10 minus n x 1 (Multiply any number by 9 using the x10 then subtract shortcut)",
            "It only works for even numbers (Multiply any number by 9 using the x10 then subtract shortcut)",
            "It is limited to single-digit additions only (Multiply any number by 9 using the x10 then subtract shortcut)"
          ],
          "answer": "Because 9 equals 10 minus 1, so n x 9 is exactly n x 10 minus n x 1",
          "difficulty": 700,
          "answerIndex": 0
        }
      ]
    },
    "title": "Unit 3, Lesson 3"
  },
  "mentalmath-u3-l4": {
    "id": "mentalmath-u3-l4",
    "unit": "mentalmath-u3",
    "level": "intermediate",
    "objective": "Multiply by 4, 8, or 16 using repeated doubling, and by their reciprocals using repeated halving.",
    "difficulty": 720,
    "presentation": {
      "explanation": "4, 8, and 16 are all just 2 multiplied by itself — 2x2, 2x2x2, 2x2x2x2 — so multiplying by any of them is nothing but repeated doubling: x4 is 'double it twice,' x8 is 'double it three times,' x16 is 'double it four times.' For 23 x 4: double 23 to 46, double again to 92 — done in two easy steps instead of one harder one. Dividing by 4, 8, or 16 runs the exact same chain backward as repeated halving: x4's inverse is 'halve it twice,' x8's inverse is 'halve it three times.' For 96 / 4: halve 96 to 48, halve again to 24. The whole point of this lock is that a string of easy doublings (or halvings) is almost always faster in your head than one direct multiplication or division by an awkward number like 8 or 16.",
      "examples": [
        {
          "problem": "23 x 4",
          "answer": 92,
          "description": "Double twice: 23 -> 46 -> 92."
        },
        {
          "problem": "34 x 8",
          "answer": 272,
          "description": "Double three times: 34 -> 68 -> 136 -> 272."
        },
        {
          "problem": "96 / 4",
          "answer": 24,
          "description": "Halve twice: 96 -> 48 -> 24."
        },
        {
          "problem": "144 / 8",
          "answer": 18,
          "description": "Halve three times: 144 -> 72 -> 36 -> 18."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "mentalmath-u3-l4-q1",
          "type": "compute",
          "prompt": "Shortcut lock #1: 27 x 4 = ?",
          "answer": 108,
          "difficulty": 710
        },
        {
          "id": "mentalmath-u3-l4-q2",
          "type": "compute",
          "prompt": "Shortcut lock #2: 45 x 8 = ?",
          "answer": 360,
          "difficulty": 720
        },
        {
          "id": "mentalmath-u3-l4-q3",
          "type": "compute",
          "prompt": "Shortcut lock #3: 128 / 4 = ?",
          "answer": 32,
          "difficulty": 720
        },
        {
          "id": "mentalmath-u3-l4-q4",
          "type": "multiple-choice",
          "prompt": "How many times do you halve a number to divide it by 8?",
          "options": [
            "Once (Multiply by 4)",
            "Twice (Multiply by 4)",
            "Three times (Multiply by 4)",
            "Four times (Multiply by 4)"
          ],
          "answer": "Three times",
          "difficulty": 700,
          "answerIndex": 0
        },
        {
          "id": "mentalmath-u3-l4-q5",
          "type": "compute",
          "prompt": "Shortcut lock #4: 176 / 8 = ?",
          "answer": 22,
          "difficulty": 730
        }
      ]
    },
    "title": "Unit 3, Lesson 4: Multiply by 4"
  },
  "mentalmath-u3-l5": {
    "id": "mentalmath-u3-l5",
    "unit": "mentalmath-u3",
    "level": "intermediate",
    "objective": "Pass a mixed multiplication-shortcut checkpoint choosing the fastest trick per problem.",
    "difficulty": 730,
    "presentation": {
      "explanation": "Boss round for the shortcut chamber. Every trick from this unit shows up in random order — the x11 digit-sum insert, the x5 halve-and-shift, the x9 ten-and-subtract, and the doubling/halving chain for 4, 8, and 16 — with no label telling you which lock needs which key. Recognizing the multiplier fast (is it 11? 5? 9? a power of 2?) and firing the matching trick without hesitating is the actual skill being tested here. Unit 4 builds on this same instinct for squaring and percentages, so getting fast at 'spot the shortcut' now pays off immediately.",
      "examples": [
        {
          "problem": "52 x 11",
          "answer": 572,
          "description": "5+2=7, no carry: 5-7-2 = 572."
        },
        {
          "problem": "64 x 5",
          "answer": 320,
          "description": "Half of 64 is 32, shift: 320."
        },
        {
          "problem": "73 x 9",
          "answer": 657,
          "description": "73 x 10 = 730, minus 73 = 657."
        },
        {
          "problem": "17 x 8",
          "answer": 136,
          "description": "Double three times: 17 -> 34 -> 68 -> 136."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "mentalmath-u3-l5-q1",
          "type": "compute",
          "prompt": "Boss lock #1: 52 x 11 = ?",
          "answer": 572,
          "difficulty": 710
        },
        {
          "id": "mentalmath-u3-l5-q2",
          "type": "compute",
          "prompt": "Boss lock #2: 64 x 5 = ?",
          "answer": 320,
          "difficulty": 710
        },
        {
          "id": "mentalmath-u3-l5-q3",
          "type": "compute",
          "prompt": "Boss lock #3: 73 x 9 = ?",
          "answer": 657,
          "difficulty": 720
        },
        {
          "id": "mentalmath-u3-l5-q4",
          "type": "compute",
          "prompt": "Boss lock #4: 17 x 8 = ?",
          "answer": 136,
          "difficulty": 720
        },
        {
          "id": "mentalmath-u3-l5-q5",
          "type": "short-answer",
          "prompt": "Name all four shortcuts from this unit and, in one phrase each, what multiplier each one targets.",
          "answer": "The digit-sum-insert trick for x11; the halve-and-shift trick for x5; the times-ten-then-subtract trick for x9; and the repeated doubling/halving chain for x4, x8, x16 and their reciprocal divisions.",
          "difficulty": 730
        }
      ]
    },
    "title": "Unit 3, Lesson 5"
  },
  "mentalmath-u4-l1": {
    "id": "mentalmath-u4-l1",
    "unit": "mentalmath-u4",
    "level": "intermediate",
    "objective": "Instantly square any two-digit number ending in 5 using the 'a * (a + 1) append 25' algebraic rule in under 2 seconds without pen or paper.",
    "difficulty": 900,
    "prerequisites": [
      "mentalmath-u3-l5"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "mentalmath-u3-l1",
        "mentalmath-u2-l1"
      ]
    },
    "presentation": {
      "explanation": "Squaring any number ending in 5 is one of the cleanest, fastest mental math algorithms in existence. It requires zero estimation and yields 100% exact answers in under 2 seconds.\n\n1. **The Core Algorithm:**\n   - To square any number of the form **[a]5**:\n     * Step 1: Take the tens digit **a** and multiply it by **(a + 1)**.\n     * Step 2: Append **25** to the result!\n\n2. **Why It Works (The Algebraic Proof):**\n   - Any number ending in 5 can be written as $(10a + 5)$.\n   - Expanding the square: $(10a + 5)^2 = 100a^2 + 100a + 25 = 100a(a + 1) + 25$.\n   - The factor $100a(a + 1)$ shifts the product $a(a + 1)$ into the hundreds place, leaving the last two digits always as **25**.\n\n3. **Examples in Action:**\n   - **35²**: Tens digit is 3 -> $3 \\times 4 = 12$ -> Append 25 -> **1,225**.\n   - **65²**: Tens digit is 6 -> $6 \\times 7 = 42$ -> Append 25 -> **4,225**.\n   - **75²**: Tens digit is 7 -> $7 \\times 8 = 56$ -> Append 25 -> **5,625**.\n   - **95²**: Tens digit is 9 -> $9 \\times 10 = 90$ -> Append 25 -> **9,025**.\n   - **115²** (3-digit extension!): Front number is 11 -> $11 \\times 12 = 132$ -> Append 25 -> **13,225**.",
      "examples": [
        "15² = (1 x 2) append 25 = 225.",
        "45² = (4 x 5) append 25 = 2,025.",
        "85² = (8 x 9) append 25 = 7,225.",
        "105² = (10 x 11) append 25 = 11,025."
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Applying the mental arithmetic algorithm from Unit 4, Lesson 1, what is the exact result?",
          "options": [
            "2,050 (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)",
            "1,825 (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)",
            "2,525 (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)",
            "2,025 (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)"
          ],
          "answerIndex": 3,
          "explanation": "4 x (4 + 1) = 4 x 5 = 20 -> append 25 = 2,025."
        },
        {
          "prompt": "What is 75²?",
          "options": [
            "5,825 (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)",
            "4,925 (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)",
            "5,625 (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)",
            "5,425 (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)"
          ],
          "answerIndex": 2,
          "explanation": "7 x 8 = 56 -> append 25 = 5,625."
        },
        {
          "prompt": "What algebraic formula explains why this shortcut works?",
          "options": [
            "10a - 5² = 100a² - 25 (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)",
            "10a + 5² = 100aa + 1 + 25 (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)",
            "a² + 2ab + b² = 0 (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)",
            "a + b² = a² + b² (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)"
          ],
          "answerIndex": 1,
          "explanation": "100a(a + 1) + 25 proves that the front is always a*(a+1) and the end is 25."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Applying the computational shortcut from Unit 4, Lesson 1: Foundational & Structural Mastery, what is the exact calculation step?",
          "options": [
            "7,425 (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)",
            "6,425 (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)",
            "8,125 (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)",
            "7,225 (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)"
          ],
          "answerIndex": 3,
          "explanation": "8 x 9 = 72 -> append 25 = 7,225."
        },
        {
          "prompt": "Calculate 95²:",
          "options": [
            "9,125 (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)",
            "8,525 (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)",
            "9,025 (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)",
            "9,525 (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)"
          ],
          "answerIndex": 2,
          "explanation": "9 x 10 = 90 -> append 25 = 9,025."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What is 65²?",
          "options": [
            "4,025 (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)",
            "4,225 (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)",
            "4,525 (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)",
            "3,625 (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)"
          ],
          "answerIndex": 1,
          "explanation": "6 x 7 = 42 -> 4,225.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is 105²?",
          "options": [
            "11,025 (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)",
            "10,025 (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)",
            "12,025 (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)",
            "10,525 (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)"
          ],
          "answerIndex": 0,
          "explanation": "10 x 11 = 110 -> 11,025.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Every square of a whole number ending in 5 MUST end in which two digits?",
          "options": [
            "05 (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)",
            "75 (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)",
            "50 (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)",
            "25 (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)"
          ],
          "answerIndex": 3,
          "explanation": "5² = 25, which occupies the tens and ones place in the expanded formula.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is 35²?",
          "options": [
            "925 (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)",
            "1,125 (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)",
            "1,225 (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)",
            "1,525 (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)"
          ],
          "answerIndex": 2,
          "explanation": "3 x 4 = 12 -> 1,225.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is 55²?",
          "options": [
            "3,525 (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)",
            "3,025 (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)",
            "3,225 (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)",
            "2,525 (Instantly square any twodigit number ending in 5 using the a  a  1 append 25 algebraic rule in under 2 seconds without pen or paper)"
          ],
          "answerIndex": 1,
          "explanation": "5 x 6 = 30 -> 3,025.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 4, Lesson 1"
  },
  "mentalmath-u4-l2": {
    "id": "mentalmath-u4-l2",
    "unit": "mentalmath-u4",
    "level": "intermediate",
    "objective": "Square any two-digit number rapidly using the difference-of-squares algebraic shift $(A - d)(A + d) + d^2$ anchored to the nearest multiple of 10.",
    "difficulty": 950,
    "prerequisites": [
      "mentalmath-u4-l1"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "mentalmath-u4-l1",
        "mentalmath-u3-l2"
      ]
    },
    "presentation": {
      "explanation": "How do mental calculators square ANY number (like 48, 73, or 29) in their head without standard column multiplication? They use the **Algebraic Difference of Squares Shift**.\n\n1. **The Algebraic Identity:**\n   - Recall that $(A - d)(A + d) = A^2 - d^2$.\n   - Rearranging to isolate $A^2$:\n     $$A^2 = (A - d)(A + d) + d^2$$\n   - **The Trick:** Choose $d$ (the distance) so that either $(A - d)$ or $(A + d)$ lands on a friendly **round multiple of 10**!\n\n2. **Step-by-Step Method:**\n   - Example: Calculate **48²**:\n     * Distance to nearest 10 (50) is $d = 2$.\n     * Step 1: Move up 2 to **50**, move down 2 to **46**.\n     * Step 2: Multiply the two friendly numbers: $50 \\times 46 = 2,300$ (since $5 \\times 46 = 230$).\n     * Step 3: Add $d^2$ ($2^2 = 4$): $2,300 + 4 =$ **2,304**!\n\n   - Example: Calculate **53²**:\n     * Distance to nearest 10 (50) is $d = 3$.\n     * Move down 3 to **50**, move up 3 to **56**.\n     * Multiply: $50 \\times 56 = 2,800$ (since $5 \\times 56 = 280$).\n     * Add $d^2$ ($3^2 = 9$): $2,800 + 9 =$ **2,809**!\n\n   - Example: Calculate **71²**:\n     * Distance $d = 1$.\n     * $(70 \\times 72) + 1^2 = 5,040 + 1 =$ **5,041**!",
      "examples": [
        "29² = (30 x 28) + 1² = 840 + 1 = 841.",
        "51² = (50 x 52) + 1² = 2,600 + 1 = 2,601.",
        "38² = (40 x 36) + 2² = 1,440 + 4 = 1,444.",
        "78² = (80 x 76) + 2² = 6,080 + 4 = 6,084."
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Applying the mental arithmetic algorithm from Unit 4, Lesson 2, what is the exact result?",
          "options": [
            "50 x 46 + 2² = 2,300 + 4 = 2,304 (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)",
            "40 x 56 + 8² = 2,240 + 64 = 2,304 (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)",
            "40² + 8² = 1,664 (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)",
            "48 x 40 + 8 = 1,928 (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)"
          ],
          "answerIndex": 0,
          "explanation": "Anchoring to 50 with d=2 gives (50 x 46) + 4 = 2,304."
        },
        {
          "prompt": "What is 52² calculated mentally?",
          "options": [
            "2,704 (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)",
            "2,604 (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)",
            "2,804 (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)",
            "2,725 (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)"
          ],
          "answerIndex": 0,
          "explanation": "(50 x 54) + 2² = 2,700 + 4 = 2,704."
        },
        {
          "prompt": "What is 29²?",
          "options": [
            "841 (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)",
            "821 (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)",
            "901 (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)",
            "861 (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)"
          ],
          "answerIndex": 0,
          "explanation": "(30 x 28) + 1 = 840 + 1 = 841."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Applying the computational shortcut from Unit 4, Lesson 2: Foundational & Structural Mastery, what is the exact calculation step?",
          "options": [
            "1,541 (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)",
            "1,481 (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)",
            "1,601 (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)",
            "1,521 (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)"
          ],
          "answerIndex": 3,
          "explanation": "40 x 38 = 1,520; + 1 = 1,521."
        },
        {
          "prompt": "Calculate 71²:",
          "options": [
            "5,021 (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)",
            "4,941 (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)",
            "5,141 (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)",
            "5,041 (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)"
          ],
          "answerIndex": 3,
          "explanation": "70 x 72 = 5,040; + 1 = 5,041."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What is 31²?",
          "options": [
            "961 (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)",
            "991 (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)",
            "941 (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)",
            "931 (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)"
          ],
          "answerIndex": 0,
          "explanation": "(30 x 32) + 1 = 960 + 1 = 961.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is 49²?",
          "options": [
            "2,451 (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)",
            "2,391 (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)",
            "2,501 (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)",
            "2,401 (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)"
          ],
          "answerIndex": 3,
          "explanation": "(50 x 48) + 1 = 2,400 + 1 = 2,401.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is 62²?",
          "options": [
            "3,744 (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)",
            "3,864 (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)",
            "3,844 (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)",
            "3,824 (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)"
          ],
          "answerIndex": 2,
          "explanation": "(60 x 64) + 4 = 3,840 + 4 = 3,844.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the primary benefit of the difference-of-squares squaring shortcut?",
          "options": [
            "It only works on odd numbers (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)",
            "It turns a 2-digit multiplication into a 1-digit multiplication by 10 plus a small square (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)",
            "It eliminates all carrying entirely (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)",
            "It gives an approximate answer within 10% (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)"
          ],
          "answerIndex": 1,
          "explanation": "Multiplying by a round multiple of 10 collapses mental working memory load.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is 19²?",
          "options": [
            "361 (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)",
            "391 (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)",
            "381 (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)",
            "341 (Square any twodigit number rapidly using the differenceofsquares algebraic shift A  dA  d  d2 anchored to the nearest multiple of 10)"
          ],
          "answerIndex": 0,
          "explanation": "(20 x 18) + 1 = 360 + 1 = 361.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 4, Lesson 2"
  },
  "mentalmath-u4-l3": {
    "id": "mentalmath-u4-l3",
    "unit": "mentalmath-u4",
    "level": "intermediate",
    "objective": "Calculate any practical percentage mentally using modular building blocks (1%, 5%, 10%, 15%, 20%, 50%) and apply the Percentage Reversibility Law: x% of y = y% of x.",
    "difficulty": 920,
    "prerequisites": [
      "mentalmath-u4-l2"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "mentalmath-u4-l1",
        "mentalmath-u4-l2"
      ]
    },
    "presentation": {
      "explanation": "Calculating percentages in your head (for tips, discounts, tax, and finance) relies on two superpower principles: **Modular Building Blocks** and the **Reversibility Law**.\n\n1. **The Modular Building Blocks (The 10% Anchor):**\n   - **10%** = Shift the decimal point one place left (e.g. 10% of 84 = 8.4).\n   - **1%** = Shift the decimal point two places left (e.g. 1% of 84 = 0.84).\n   - **5%** = Half of 10% (e.g. 5% of 84 = 4.2).\n   - **15% (Standard Tip)** = $10\\% + 5\\%$ (e.g. 15% of $80 = $8 + $4 = **$12**).\n   - **20% (Great Tip)** = $10\\% \\times 2$ (e.g. 20% of $65 = 6.5 \\times 2 = **$13**).\n   - **25%** = Divide by 4 (or half of half).\n   - **15% discount on $60** = $60 - ($6 + $3) = **$51**.\n\n2. **The Percentage Reversibility Law ($x\\% \\text{ of } y = y\\% \\text{ of } x$):**\n   - Mathematically: $\\frac{x}{100} \\times y = \\frac{y}{100} \\times x = \\frac{xy}{100}$.\n   - **When a percentage looks ugly, FLIP IT!**\n     * Problem: Calculate **16% of 50** -> Looks hard!\n     * Flip it: **50% of 16** -> Half of 16 = **8**! Instant!\n     * Problem: Calculate **4% of 75** -> Flip it: **75% of 4** = $\\frac{3}{4} \\times 4 =$ **3**!\n     * Problem: Calculate **18% of 50** -> Flip it: **50% of 18** = **9**!",
      "examples": [
        "15% tip on $42.00 = 10% ($4.20) + 5% ($2.10) = $6.30.",
        "18% of 50 = 50% of 18 = 9.",
        "8% of 25 = 25% of 8 = 1/4 of 8 = 2.",
        "35% of 80 = 3 x 10% (24) + 5% (4) = 28."
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Applying the mental arithmetic algorithm from Unit 4, Lesson 3, what is the exact result?",
          "options": [
            "6 (Calculate any practical percentage mentally using modular building blocks 1)",
            "12 (Calculate any practical percentage mentally using modular building blocks 1)",
            "10 (Calculate any practical percentage mentally using modular building blocks 1)",
            "8 (Calculate any practical percentage mentally using modular building blocks 1)"
          ],
          "answerIndex": 3,
          "explanation": "16% of 50 is identical to 50% of 16 = 8."
        },
        {
          "prompt": "Calculate a 15% tip on an $80 restaurant bill:",
          "options": [
            "$10.00 (Calculate any practical percentage mentally using modular building blocks 1)",
            "$15.00 (Calculate any practical percentage mentally using modular building blocks 1)",
            "$14.00 (Calculate any practical percentage mentally using modular building blocks 1)",
            "$12.00 (Calculate any practical percentage mentally using modular building blocks 1)"
          ],
          "answerIndex": 3,
          "explanation": "10% of 80 = 8; 5% = 4; 8 + 4 = $12.00."
        },
        {
          "prompt": "What is 4% of 75 using the reversibility trick?",
          "options": [
            "4 (Calculate any practical percentage mentally using modular building blocks 1)",
            "5 (Calculate any practical percentage mentally using modular building blocks 1)",
            "2 (Calculate any practical percentage mentally using modular building blocks 1)",
            "3 (Calculate any practical percentage mentally using modular building blocks 1)"
          ],
          "answerIndex": 3,
          "explanation": "4% of 75 = 75% of 4 = 3."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Applying the computational shortcut from Unit 4, Lesson 3: Foundational & Structural Mastery, what is the exact calculation step?",
          "options": [
            "$13.00 (Calculate any practical percentage mentally using modular building blocks 1)",
            "$12.00 (Calculate any practical percentage mentally using modular building blocks 1)",
            "$15.00 (Calculate any practical percentage mentally using modular building blocks 1)",
            "$14.50 (Calculate any practical percentage mentally using modular building blocks 1)"
          ],
          "answerIndex": 0,
          "explanation": "10% is 6.50; 6.50 x 2 = $13.00."
        },
        {
          "prompt": "What is 12% of 25?",
          "options": [
            "3 (Calculate any practical percentage mentally using modular building blocks 1)",
            "4 (Calculate any practical percentage mentally using modular building blocks 1)",
            "2.5 (Calculate any practical percentage mentally using modular building blocks 1)",
            "3.5 (Calculate any practical percentage mentally using modular building blocks 1)"
          ],
          "answerIndex": 0,
          "explanation": "12% of 25 = 25% of 12 = 3."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What is 18% of 50?",
          "options": [
            "10 (Calculate any practical percentage mentally using modular building blocks 1)",
            "7.5 (Calculate any practical percentage mentally using modular building blocks 1)",
            "8 (Calculate any practical percentage mentally using modular building blocks 1)",
            "9 (Calculate any practical percentage mentally using modular building blocks 1)"
          ],
          "answerIndex": 3,
          "explanation": "18% of 50 = 50% of 18 = 9.",
          "type": "multiple-choice"
        },
        {
          "prompt": "A coat priced at $120 is on a 20% discount. What is the final sale price?",
          "options": [
            "$100 (Calculate any practical percentage mentally using modular building blocks 1)",
            "$98 (Calculate any practical percentage mentally using modular building blocks 1)",
            "$96 (Calculate any practical percentage mentally using modular building blocks 1)",
            "$90 (Calculate any practical percentage mentally using modular building blocks 1)"
          ],
          "answerIndex": 2,
          "explanation": "10% of 120 = 12 -> 20% = 24 -> $120 - 24 = $96.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is 35% of 40?",
          "options": [
            "12 (Calculate any practical percentage mentally using modular building blocks 1)",
            "14 (Calculate any practical percentage mentally using modular building blocks 1)",
            "15 (Calculate any practical percentage mentally using modular building blocks 1)",
            "16 (Calculate any practical percentage mentally using modular building blocks 1)"
          ],
          "answerIndex": 1,
          "explanation": "10% of 40 = 4 -> 30% = 12; 5% = 2; 12 + 2 = 14.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why does x% of y = y% of x always hold true?",
          "options": [
            "Because multiplication is commutative (Calculate any practical percentage mentally using modular building blocks 1)",
            "Only for whole numbers below 100 (Calculate any practical percentage mentally using modular building blocks 1)",
            "Only in base-10 mathematics (Calculate any practical percentage mentally using modular building blocks 1)",
            "It is a heuristic approximation (Calculate any practical percentage mentally using modular building blocks 1)"
          ],
          "answerIndex": 0,
          "explanation": "Commutativity of multiplication ensures exact equivalence.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Calculate a 15% tip on a $44 bill:",
          "options": [
            "$7.20 (Calculate any practical percentage mentally using modular building blocks 1)",
            "$6.00 (Calculate any practical percentage mentally using modular building blocks 1)",
            "$5.80 (Calculate any practical percentage mentally using modular building blocks 1)",
            "$6.60 (Calculate any practical percentage mentally using modular building blocks 1)"
          ],
          "answerIndex": 3,
          "explanation": "10% of 44 = 4.40; 5% = 2.20; 4.40 + 2.20 = $6.60.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 4, Lesson 3"
  },
  "mentalmath-u4-l4": {
    "id": "mentalmath-u4-l4",
    "unit": "mentalmath-u4",
    "level": "intermediate",
    "objective": "Recall foundational fraction-to-decimal benchmarks (1/8=0.125, 1/6=0.166..., 1/7=0.142857 cycle, 1/9=0.111..., 1/11=0.0909...) and use them for instant mental division.",
    "difficulty": 940,
    "prerequisites": [
      "mentalmath-u4-l3"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "mentalmath-u4-l2",
        "mentalmath-u4-l3"
      ]
    },
    "presentation": {
      "explanation": "Fractions and decimals are two representations of the exact same mathematical quantity. By memorizing a few high-utility benchmark families, division problems become instant lookups.\n\n1. **The Eighths Family (Base 0.125):**\n   - $1/8 = 0.125$ (12.5%)\n   - $2/8 = 1/4 = 0.250$ (25%)\n   - $3/8 = 0.375$ (37.5%)\n   - $4/8 = 1/2 = 0.500$ (50%)\n   - $5/8 = 0.625$ (62.5%)\n   - $6/8 = 3/4 = 0.750$ (75%)\n   - $7/8 = 0.875$ (87.5%)\n\n2. **The Ninths & Elevenths Dual Family:**\n   - **The Ninths (Single Repeating Digit):**\n     * $1/9 = 0.111...$ | $2/9 = 0.222...$ | $4/9 = 0.444...$ | $7/9 = 0.777...$\n   - **The Elevenths (Double 9 Repeating Cycle):**\n     * $1/11 = 0.090909...$ | $2/11 = 0.181818...$ | $3/11 = 0.272727...$ | $5/11 = 0.454545...$ (Just multiply numerator by 9!)\n\n3. **The Magic Sevenths (The Cyclic 142857 Loop):**\n   - $1/7 = 0.142857...$\n   - All sevenths rotate the EXACT SAME 6-digit sequence **1-4-2-8-5-7** in cyclic order:\n     * $2/7 = 0.285714...$ (starts at 2)\n     * $3/7 = 0.428571...$ (starts at 4)\n     * $4/7 = 0.571428...$ (starts at 5)\n     * $5/7 = 0.714285...$ (starts at 7)\n     * $6/7 = 0.857142...$ (starts at 8)\n\n4. **The Sixths:**\n   - $1/6 = 0.1666...$ | $5/6 = 0.8333...$",
      "examples": [
        "3/8 = 0.375 (37.5%).",
        "4/11 = 4 x 9 = 0.363636...",
        "5/9 = 0.5555...",
        "2/7 = 0.285714..."
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Applying the mental arithmetic algorithm from Unit 4, Lesson 4, what is the exact result?",
          "options": [
            "0.375 (Recall foundational fractiontodecimal benchmarks 180)",
            "0.325 (Recall foundational fractiontodecimal benchmarks 180)",
            "0.350 (Recall foundational fractiontodecimal benchmarks 180)",
            "0.333 (Recall foundational fractiontodecimal benchmarks 180)"
          ],
          "answerIndex": 0,
          "explanation": "1/8 = 0.125 -> 3/8 = 3 x 0.125 = 0.375."
        },
        {
          "prompt": "What is the repeating decimal for 4/11?",
          "options": [
            "0.363636... (Recall foundational fractiontodecimal benchmarks 180)",
            "0.411411... (Recall foundational fractiontodecimal benchmarks 180)",
            "0.040404... (Recall foundational fractiontodecimal benchmarks 180)",
            "0.444444... (Recall foundational fractiontodecimal benchmarks 180)"
          ],
          "answerIndex": 0,
          "explanation": "Elevenths multiply numerator by 9: 4 x 9 = 36 -> 0.363636..."
        },
        {
          "prompt": "What is the repeating decimal for 7/9?",
          "options": [
            "0.777777... (Recall foundational fractiontodecimal benchmarks 180)",
            "0.707070... (Recall foundational fractiontodecimal benchmarks 180)",
            "0.797979... (Recall foundational fractiontodecimal benchmarks 180)",
            "0.636363... (Recall foundational fractiontodecimal benchmarks 180)"
          ],
          "answerIndex": 0,
          "explanation": "Ninths repeat the single numerator digit: 0.7777..."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Applying the computational shortcut from Unit 4, Lesson 4: Foundational & Structural Mastery, what is the exact calculation step?",
          "options": [
            "0.625 (Recall foundational fractiontodecimal benchmarks 180)",
            "0.555 (Recall foundational fractiontodecimal benchmarks 180)",
            "0.580 (Recall foundational fractiontodecimal benchmarks 180)",
            "0.650 (Recall foundational fractiontodecimal benchmarks 180)"
          ],
          "answerIndex": 0,
          "explanation": "1/2 + 1/8 = 0.625."
        },
        {
          "prompt": "What is 7/11 in decimal form?",
          "options": [
            "0.636363... (Recall foundational fractiontodecimal benchmarks 180)",
            "0.777777... (Recall foundational fractiontodecimal benchmarks 180)",
            "0.696969... (Recall foundational fractiontodecimal benchmarks 180)",
            "0.707070... (Recall foundational fractiontodecimal benchmarks 180)"
          ],
          "answerIndex": 0,
          "explanation": "7 x 9 = 63 -> 0.636363..."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What is the decimal value of 7/8?",
          "options": [
            "0.780 (Recall foundational fractiontodecimal benchmarks 180)",
            "0.850 (Recall foundational fractiontodecimal benchmarks 180)",
            "0.875 (Recall foundational fractiontodecimal benchmarks 180)",
            "0.895 (Recall foundational fractiontodecimal benchmarks 180)"
          ],
          "answerIndex": 2,
          "explanation": "1.000 - 0.125 = 0.875.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is 5/6 in decimal form?",
          "options": [
            "0.8555... (Recall foundational fractiontodecimal benchmarks 180)",
            "0.8333... (Recall foundational fractiontodecimal benchmarks 180)",
            "0.8666... (Recall foundational fractiontodecimal benchmarks 180)",
            "0.7500 (Recall foundational fractiontodecimal benchmarks 180)"
          ],
          "answerIndex": 1,
          "explanation": "1 - 1/6 = 0.8333...",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which 6-digit cyclic sequence is generated by dividing by 7?",
          "options": [
            "142857 (Recall foundational fractiontodecimal benchmarks 180)",
            "123456 (Recall foundational fractiontodecimal benchmarks 180)",
            "987654 (Recall foundational fractiontodecimal benchmarks 180)",
            "369125 (Recall foundational fractiontodecimal benchmarks 180)"
          ],
          "answerIndex": 0,
          "explanation": "The cyclic loop of 1/7 is 142857.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is 8/9 as a decimal?",
          "options": [
            "0.8080... (Recall foundational fractiontodecimal benchmarks 180)",
            "0.8989... (Recall foundational fractiontodecimal benchmarks 180)",
            "0.7272... (Recall foundational fractiontodecimal benchmarks 180)",
            "0.8888... (Recall foundational fractiontodecimal benchmarks 180)"
          ],
          "answerIndex": 3,
          "explanation": "8/9 = 0.8888...",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is 6/11 as a decimal?",
          "options": [
            "0.666666... (Recall foundational fractiontodecimal benchmarks 180)",
            "0.611611... (Recall foundational fractiontodecimal benchmarks 180)",
            "0.545454... (Recall foundational fractiontodecimal benchmarks 180)",
            "0.595959... (Recall foundational fractiontodecimal benchmarks 180)"
          ],
          "answerIndex": 2,
          "explanation": "6 x 9 = 54 -> 0.545454...",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 4, Lesson 4: Recall foundational fraction-to-decimal benchmarks (1/8=0"
  },
  "mentalmath-u4-l5": {
    "id": "mentalmath-u4-l5",
    "unit": "mentalmath-u4",
    "level": "intermediate",
    "objective": "Integrate 5-ending squaring, difference-of-squares shifts, percentage reversibility, and fraction benchmarks in a rapid-fire mixed mental calculation decathlon.",
    "difficulty": 1000,
    "prerequisites": [
      "mentalmath-u4-l4"
    ],
    "warmup": {
      "srsPull": true,
      "reviewFocus": [
        "mentalmath-u4-l1",
        "mentalmath-u4-l2",
        "mentalmath-u4-l3",
        "mentalmath-u4-l4"
      ]
    },
    "presentation": {
      "explanation": "This capstone lesson challenges you to fluidly identify the optimal mental shortcut for any incoming calculation within 1 second:\n\n1. **Decision Matrix:**\n   - Ends in 5? -> Use **$a(a+1)$ append 25** (e.g. $75^2 = 5625$).\n   - Near a multiple of 10? -> Use **Difference of Squares** $(A-d)(A+d)+d^2$ (e.g. $49^2 = (50 \\times 48) + 1 = 2401$).\n   - Percentage with 25, 50, 75? -> Use **Reversibility** ($x\\% \\text{ of } y = y\\% \\text{ of } x$, e.g. $14\\% \\text{ of } 50 = 50\\% \\text{ of } 14 = 7$).\n   - Standard Tip / Discount? -> Use **Modular 10% / 5% / 1% Building Blocks**.\n   - Fraction division? -> Use **Benchmark Cycles** (/8, /9, /11, /7).\n\n2. **The Sub-3-Second Mindset:**\n   - Don't start writing columns in your head. Immediately categorize the problem into its pattern type and fire the dedicated algorithm.",
      "examples": [
        "Problem: 85² -> Category: Ends in 5 -> 8 x 9 = 72 -> 7,225.",
        "Problem: 51² -> Category: Near 50 (d=1) -> 50 x 52 = 2,600 -> +1 = 2,601.",
        "Problem: 16% of 50 -> Category: Reversibility -> 50% of 16 = 8.",
        "Problem: 5/11 -> Category: Elevenths -> 5 x 9 = 45 -> 0.454545..."
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Applying the mental arithmetic algorithm from Unit 4, Lesson 5, what is the exact result?",
          "options": [
            "9,025 (Integrate 5ending squaring)",
            "9,525 (Integrate 5ending squaring)",
            "8,525 (Integrate 5ending squaring)",
            "9,050 (Integrate 5ending squaring)"
          ],
          "answerIndex": 0,
          "explanation": "9 x 10 = 90 -> 9,025."
        },
        {
          "prompt": "Rapid Solve: 32% of 50",
          "options": [
            "16 (Integrate 5ending squaring)",
            "15 (Integrate 5ending squaring)",
            "18 (Integrate 5ending squaring)",
            "16.5 (Integrate 5ending squaring)"
          ],
          "answerIndex": 0,
          "explanation": "50% of 32 = 16."
        },
        {
          "prompt": "Rapid Solve: 39²",
          "options": [
            "1,521 (Integrate 5ending squaring)",
            "1,541 (Integrate 5ending squaring)",
            "1,481 (Integrate 5ending squaring)",
            "1,561 (Integrate 5ending squaring)"
          ],
          "answerIndex": 0,
          "explanation": "(40 x 38) + 1 = 1,520 + 1 = 1,521."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Applying the computational shortcut from Unit 4, Lesson 5: Foundational & Structural Mastery, what is the exact calculation step?",
          "options": [
            "0.818181... (Integrate 5ending squaring)",
            "0.727272... (Integrate 5ending squaring)",
            "0.797979... (Integrate 5ending squaring)",
            "0.888888... (Integrate 5ending squaring)"
          ],
          "answerIndex": 1,
          "explanation": "8 x 9 = 72 -> 0.727272..."
        },
        {
          "prompt": "Rapid Solve: 55²",
          "options": [
            "3,025 (Integrate 5ending squaring)",
            "3,525 (Integrate 5ending squaring)",
            "3,225 (Integrate 5ending squaring)",
            "2,525 (Integrate 5ending squaring)"
          ],
          "answerIndex": 0,
          "explanation": "5 x 6 = 30 -> 3,025."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Solve: 65²",
          "options": [
            "4,025 (Integrate 5ending squaring)",
            "4,225 (Integrate 5ending squaring)",
            "3,625 (Integrate 5ending squaring)",
            "4,525 (Integrate 5ending squaring)"
          ],
          "answerIndex": 1,
          "explanation": "6 x 7 = 42 -> 4,225.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Solve: 4% of 75",
          "options": [
            "3 (Integrate 5ending squaring)",
            "2 (Integrate 5ending squaring)",
            "5 (Integrate 5ending squaring)",
            "4 (Integrate 5ending squaring)"
          ],
          "answerIndex": 0,
          "explanation": "75% of 4 = 3.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Solve: 48²",
          "options": [
            "2,344 (Integrate 5ending squaring)",
            "2,284 (Integrate 5ending squaring)",
            "2,404 (Integrate 5ending squaring)",
            "2,304 (Integrate 5ending squaring)"
          ],
          "answerIndex": 3,
          "explanation": "(50 x 46) + 4 = 2,300 + 4 = 2,304.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is 5/8 in decimal form?",
          "options": [
            "0.580 (Integrate 5ending squaring)",
            "0.650 (Integrate 5ending squaring)",
            "0.625 (Integrate 5ending squaring)",
            "0.555 (Integrate 5ending squaring)"
          ],
          "answerIndex": 2,
          "explanation": "5 x 0.125 = 0.625.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the key meta-skill developed in Unit 4 of FEARN Mental Math?",
          "options": [
            "Rote memorization of a 10,000-page table (Integrate 5ending squaring)",
            "Rapid pattern categorization and algebraic transformation to bypass column arithmetic (Integrate 5ending squaring)",
            "Counting on fingers (Integrate 5ending squaring)",
            "Using a solar calculator (Integrate 5ending squaring)"
          ],
          "answerIndex": 1,
          "explanation": "Pattern recognition and algebraic transformation bypass working memory bottlenecks.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 4, Lesson 5: Integrate 5-ending squaring"
  },
  "mentalmath-u6-l1": {
    "id": "mentalmath-u6-l1",
    "unit": "mentalmath-u6",
    "level": "advanced",
    "objective": "Solve single-variable linear equations (ax + b = c and a(x - b) = c) completely in your head in under 5 seconds by unwinding operations in reverse PEMDAS order.",
    "difficulty": 650,
    "presentation": {
      "explanation": "Welcome to Advanced Mental Math Unit 6: Mental Algebra & Fast Estimation! Mental algebra is the art of **reverse operator unwinding** in working memory:\n\n1. The 2-Step Mental Unwind for $ax + b = c$:\n   - Step 1 (Subtract/Add $b$): Calculate $c - b$ immediately in your head.\n   - Step 2 (Divide by $a$): Divide $(c - b) / a$.\n   - *Example*: Solve $4x + 17 = 65$.\n     - Step 1: $65 - 17 = 48$.\n     - Step 2: $48 / 4 = 12$.\n     - Answer: **$x = 12$**!\n\n2. The Fraction / Distribution Unwind for $a(x + b) = c$:\n   - Divide first: $c / a$, then subtract $b$.\n   - *Example*: Solve $5(x - 6) = 75$.\n     - Step 1: $75 / 5 = 15$.\n     - Step 2: $15 + 6 = 21$.\n     - Answer: **$x = 21$**!\n\n3. Variables on Both Sides ($ax + b = cx + d$):\n   - Group $x$'s and numbers simultaneously in one breath: $(a - c)x = d - b$, so $x = (d - b) / (a - c)$.\n   - *Example*: $7x - 8 = 3x + 24$.\n     - $x$'s: $7 - 3 = 4x$.\n     - Numbers: $24 + 8 = 32$.\n     - $x = 32 / 4 = 8$!",
      "examples": [
        {
          "target": "Solve mentally: 6x + 23 = 71",
          "reading": "71 - 23 = 48 -> 48 / 6 = 8",
          "translation": "x = 8"
        },
        {
          "target": "Solve mentally: 8(x - 4) = 96",
          "reading": "96 / 8 = 12 -> 12 + 4 = 16",
          "translation": "x = 16"
        },
        {
          "target": "Solve mentally: 9x - 14 = 4x + 31",
          "reading": "5x = 45 -> x = 9",
          "translation": "x = 9"
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Applying the mental arithmetic algorithm from Unit 6, Lesson 1, what is the exact result?",
          "options": [
            "x = 6 (Solve singlevariable linear equations ax  b  c and ax  b  c completely in your head in under 5 seconds by unwinding operations in reverse PEMDAS order)",
            "x = 8 (Solve singlevariable linear equations ax  b  c and ax  b  c completely in your head in under 5 seconds by unwinding operations in reverse PEMDAS order)",
            "x = 9 (Solve singlevariable linear equations ax  b  c and ax  b  c completely in your head in under 5 seconds by unwinding operations in reverse PEMDAS order)",
            "x = 7 (Solve singlevariable linear equations ax  b  c and ax  b  c completely in your head in under 5 seconds by unwinding operations in reverse PEMDAS order)"
          ],
          "answerIndex": 3,
          "explanation": "68 - 19 = 49; 49 / 7 = 7."
        },
        {
          "prompt": "Solve mentally: 4(x + 5) = 56",
          "options": [
            "x = 11 (Solve singlevariable linear equations ax  b  c and ax  b  c completely in your head in under 5 seconds by unwinding operations in reverse PEMDAS order)",
            "x = 10 (Solve singlevariable linear equations ax  b  c and ax  b  c completely in your head in under 5 seconds by unwinding operations in reverse PEMDAS order)",
            "x = 9 (Solve singlevariable linear equations ax  b  c and ax  b  c completely in your head in under 5 seconds by unwinding operations in reverse PEMDAS order)",
            "x = 8 (Solve singlevariable linear equations ax  b  c and ax  b  c completely in your head in under 5 seconds by unwinding operations in reverse PEMDAS order)"
          ],
          "answerIndex": 2,
          "explanation": "56 / 4 = 14; 14 - 5 = 9."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Applying the computational shortcut from Unit 6, Lesson 1: Foundational & Structural Mastery, what is the exact calculation step?",
          "options": [
            "x = 9 (Solve singlevariable linear equations ax  b  c and ax  b  c completely in your head in under 5 seconds by unwinding operations in reverse PEMDAS order)",
            "x = 8 (Solve singlevariable linear equations ax  b  c and ax  b  c completely in your head in under 5 seconds by unwinding operations in reverse PEMDAS order)",
            "x = 12 (Solve singlevariable linear equations ax  b  c and ax  b  c completely in your head in under 5 seconds by unwinding operations in reverse PEMDAS order)",
            "x = 10 (Solve singlevariable linear equations ax  b  c and ax  b  c completely in your head in under 5 seconds by unwinding operations in reverse PEMDAS order)"
          ],
          "answerIndex": 3,
          "explanation": "8x - 3x = 5x; 35 + 15 = 50 -> x = 10."
        },
        {
          "prompt": "Solve mentally: 3x / 4 = 18",
          "options": [
            "x = 20 (Solve singlevariable linear equations ax  b  c and ax  b  c completely in your head in under 5 seconds by unwinding operations in reverse PEMDAS order)",
            "x = 28 (Solve singlevariable linear equations ax  b  c and ax  b  c completely in your head in under 5 seconds by unwinding operations in reverse PEMDAS order)",
            "x = 16 (Solve singlevariable linear equations ax  b  c and ax  b  c completely in your head in under 5 seconds by unwinding operations in reverse PEMDAS order)",
            "x = 24 (Solve singlevariable linear equations ax  b  c and ax  b  c completely in your head in under 5 seconds by unwinding operations in reverse PEMDAS order)"
          ],
          "answerIndex": 3,
          "explanation": "18 * 4 = 72; 72 / 3 = 24 (or 18 / 3 = 6; 6 * 4 = 24)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Solve mentally: 9x + 28 = 100",
          "options": [
            "x = 8 (Solve singlevariable linear equations ax  b  c and ax  b  c completely in your head in under 5 seconds by unwinding operations in reverse PEMDAS order)",
            "x = 9 (Solve singlevariable linear equations ax  b  c and ax  b  c completely in your head in under 5 seconds by unwinding operations in reverse PEMDAS order)",
            "x = 6 (Solve singlevariable linear equations ax  b  c and ax  b  c completely in your head in under 5 seconds by unwinding operations in reverse PEMDAS order)",
            "x = 7 (Solve singlevariable linear equations ax  b  c and ax  b  c completely in your head in under 5 seconds by unwinding operations in reverse PEMDAS order)"
          ],
          "answerIndex": 0,
          "explanation": "100 - 28 = 72; 72 / 9 = 8.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Solve mentally: 6(x - 7) = 54",
          "options": [
            "x = 15 (Solve singlevariable linear equations ax  b  c and ax  b  c completely in your head in under 5 seconds by unwinding operations in reverse PEMDAS order)",
            "x = 14 (Solve singlevariable linear equations ax  b  c and ax  b  c completely in your head in under 5 seconds by unwinding operations in reverse PEMDAS order)",
            "x = 17 (Solve singlevariable linear equations ax  b  c and ax  b  c completely in your head in under 5 seconds by unwinding operations in reverse PEMDAS order)",
            "x = 16 (Solve singlevariable linear equations ax  b  c and ax  b  c completely in your head in under 5 seconds by unwinding operations in reverse PEMDAS order)"
          ],
          "answerIndex": 3,
          "explanation": "54 / 6 = 9; 9 + 7 = 16.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Solve mentally: 11x - 13 = 5x + 35",
          "options": [
            "x = 6 (Solve singlevariable linear equations ax  b  c and ax  b  c completely in your head in under 5 seconds by unwinding operations in reverse PEMDAS order)",
            "x = 9 (Solve singlevariable linear equations ax  b  c and ax  b  c completely in your head in under 5 seconds by unwinding operations in reverse PEMDAS order)",
            "x = 8 (Solve singlevariable linear equations ax  b  c and ax  b  c completely in your head in under 5 seconds by unwinding operations in reverse PEMDAS order)",
            "x = 7 (Solve singlevariable linear equations ax  b  c and ax  b  c completely in your head in under 5 seconds by unwinding operations in reverse PEMDAS order)"
          ],
          "answerIndex": 2,
          "explanation": "11x - 5x = 6x; 35 + 13 = 48 -> x = 8.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the optimal mental math order of operations for solving ax + b = c?",
          "options": [
            "Multiply all terms by b (Solve singlevariable linear equations ax  b  c and ax  b  c completely in your head in under 5 seconds by unwinding operations in reverse PEMDAS order)",
            "Subtract b from c first, then divide the difference by a (Solve singlevariable linear equations ax  b  c and ax  b  c completely in your head in under 5 seconds by unwinding operations in reverse PEMDAS order)",
            "Square both sides (Solve singlevariable linear equations ax  b  c and ax  b  c completely in your head in under 5 seconds by unwinding operations in reverse PEMDAS order)",
            "Divide c by a first, then subtract b (Solve singlevariable linear equations ax  b  c and ax  b  c completely in your head in under 5 seconds by unwinding operations in reverse PEMDAS order)"
          ],
          "answerIndex": 1,
          "explanation": "Subtract constant first, divide by coefficient second.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 6, Lesson 1: Solve mentally: 6x + 23 = 71"
  },
  "mentalmath-u6-l2": {
    "id": "mentalmath-u6-l2",
    "unit": "mentalmath-u6",
    "level": "advanced",
    "objective": "Apply the Difference of Squares algebraic identity (a - d)(a + d) = a² - d² to multiply symmetric number pairs in under 3 seconds.",
    "difficulty": 675,
    "presentation": {
      "explanation": "Any two numbers equidistant from a clean round midpoint can be multiplied instantly using the **Difference of Squares** identity:\n\n1. The Formula:\n   $$(a - d)(a + d) = a^2 - d^2$$\n   - Where $a$ is the average (midpoint) and $d$ is the distance from the midpoint.\n\n2. Practical Examples:\n   - **Calculate $47 \\times 53$**:\n     - Midpoint $a = 50$, distance $d = 3$.\n     - $(50 - 3)(50 + 3) = 50^2 - 3^2 = 2500 - 9 = \\mathbf{2491}$!\n   - **Calculate $38 \\times 42$**:\n     - Midpoint $a = 40$, distance $d = 2$.\n     - $40^2 - 2^2 = 1600 - 4 = \\mathbf{1596}$!\n   - **Calculate $65 \\times 75$**:\n     - Midpoint $a = 70$, distance $d = 5$.\n     - $70^2 - 5^2 = 4900 - 25 = \\mathbf{4875}$!\n   - **Calculate $96 \\times 104$**:\n     - Midpoint $a = 100$, distance $d = 4$.\n     - $100^2 - 4^2 = 10000 - 16 = \\mathbf{9984}$!\n\n3. The 3-Second Mental Protocol:\n   - Step 1: Find the average (the round midpoint $a$).\n   - Step 2: Square $a$ (easy base-10 square).\n   - Step 3: Subtract $d^2$.",
      "examples": [
        {
          "target": "Calculate mentally: 29 x 31",
          "reading": "30^2 - 1^2 = 900 - 1 = 899",
          "translation": "899"
        },
        {
          "target": "Calculate mentally: 56 x 64",
          "reading": "60^2 - 4^2 = 3600 - 16 = 3584",
          "translation": "3584"
        },
        {
          "target": "Calculate mentally: 78 x 82",
          "reading": "80^2 - 2^2 = 6400 - 4 = 6396",
          "translation": "6396"
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Applying the mental arithmetic algorithm from Unit 6, Lesson 2, what is the exact result?",
          "options": [
            "2,496 (Apply the Difference of Squares algebraic identity a  da  d  a  d to multiply symmetric number pairs in under 3 seconds)",
            "2,494 (Apply the Difference of Squares algebraic identity a  da  d  a  d to multiply symmetric number pairs in under 3 seconds)",
            "2,486 (Apply the Difference of Squares algebraic identity a  da  d  a  d to multiply symmetric number pairs in under 3 seconds)",
            "2,504 (Apply the Difference of Squares algebraic identity a  da  d  a  d to multiply symmetric number pairs in under 3 seconds)"
          ],
          "answerIndex": 0,
          "explanation": "50² - 2² = 2500 - 4 = 2496."
        },
        {
          "prompt": "What is the midpoint and distance for the product 67 x 73?",
          "options": [
            "Midpoint a = 70, distance d = 3 (Apply the Difference of Squares algebraic identity a  da  d  a  d to multiply symmetric number pairs in under 3 seconds)",
            "Midpoint a = 70, distance d = 4 (Apply the Difference of Squares algebraic identity a  da  d  a  d to multiply symmetric number pairs in under 3 seconds)",
            "Midpoint a = 75, distance d = 3 (Apply the Difference of Squares algebraic identity a  da  d  a  d to multiply symmetric number pairs in under 3 seconds)",
            "Midpoint a = 65, distance d = 2 (Apply the Difference of Squares algebraic identity a  da  d  a  d to multiply symmetric number pairs in under 3 seconds)"
          ],
          "answerIndex": 0,
          "explanation": "(70 - 3) * (70 + 3) -> midpoint 70, distance 3."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Applying the computational shortcut from Unit 6, Lesson 2: Foundational & Structural Mastery, what is the exact calculation step?",
          "options": [
            "4,881 (Apply the Difference of Squares algebraic identity a  da  d  a  d to multiply symmetric number pairs in under 3 seconds)",
            "4,909 (Apply the Difference of Squares algebraic identity a  da  d  a  d to multiply symmetric number pairs in under 3 seconds)",
            "4,891 (Apply the Difference of Squares algebraic identity a  da  d  a  d to multiply symmetric number pairs in under 3 seconds)",
            "4,899 (Apply the Difference of Squares algebraic identity a  da  d  a  d to multiply symmetric number pairs in under 3 seconds)"
          ],
          "answerIndex": 2,
          "explanation": "70² - 3² = 4900 - 9 = 4891."
        },
        {
          "prompt": "Calculate 94 x 106 mentally:",
          "options": [
            "9,974 (Apply the Difference of Squares algebraic identity a  da  d  a  d to multiply symmetric number pairs in under 3 seconds)",
            "9,954 (Apply the Difference of Squares algebraic identity a  da  d  a  d to multiply symmetric number pairs in under 3 seconds)",
            "9,966 (Apply the Difference of Squares algebraic identity a  da  d  a  d to multiply symmetric number pairs in under 3 seconds)",
            "9,964 (Apply the Difference of Squares algebraic identity a  da  d  a  d to multiply symmetric number pairs in under 3 seconds)"
          ],
          "answerIndex": 3,
          "explanation": "100² - 6² = 10,000 - 36 = 9964."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Calculate 88 x 92 mentally:",
          "options": [
            "8,104 (Apply the Difference of Squares algebraic identity a  da  d  a  d to multiply symmetric number pairs in under 3 seconds)",
            "8,086 (Apply the Difference of Squares algebraic identity a  da  d  a  d to multiply symmetric number pairs in under 3 seconds)",
            "8,094 (Apply the Difference of Squares algebraic identity a  da  d  a  d to multiply symmetric number pairs in under 3 seconds)",
            "8,096 (Apply the Difference of Squares algebraic identity a  da  d  a  d to multiply symmetric number pairs in under 3 seconds)"
          ],
          "answerIndex": 3,
          "explanation": "90² - 2² = 8100 - 4 = 8096.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Calculate 35 x 45 mentally:",
          "options": [
            "1,565 (Apply the Difference of Squares algebraic identity a  da  d  a  d to multiply symmetric number pairs in under 3 seconds)",
            "1,555 (Apply the Difference of Squares algebraic identity a  da  d  a  d to multiply symmetric number pairs in under 3 seconds)",
            "1,575 (Apply the Difference of Squares algebraic identity a  da  d  a  d to multiply symmetric number pairs in under 3 seconds)",
            "1,585 (Apply the Difference of Squares algebraic identity a  da  d  a  d to multiply symmetric number pairs in under 3 seconds)"
          ],
          "answerIndex": 2,
          "explanation": "40² - 5² = 1600 - 25 = 1575.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Calculate 19 x 21 mentally:",
          "options": [
            "401 (Apply the Difference of Squares algebraic identity a  da  d  a  d to multiply symmetric number pairs in under 3 seconds)",
            "399 (Apply the Difference of Squares algebraic identity a  da  d  a  d to multiply symmetric number pairs in under 3 seconds)",
            "391 (Apply the Difference of Squares algebraic identity a  da  d  a  d to multiply symmetric number pairs in under 3 seconds)",
            "389 (Apply the Difference of Squares algebraic identity a  da  d  a  d to multiply symmetric number pairs in under 3 seconds)"
          ],
          "answerIndex": 1,
          "explanation": "20² - 1² = 400 - 1 = 399.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Under what condition is the Difference of Squares technique most effective?",
          "options": [
            "When the two numbers are equidistant from a round number whose square is known instantly (Apply the Difference of Squares algebraic identity a  da  d  a  d to multiply symmetric number pairs in under 3 seconds)",
            "When both numbers end in 0 (Apply the Difference of Squares algebraic identity a  da  d  a  d to multiply symmetric number pairs in under 3 seconds)",
            "Only for negative numbers (Apply the Difference of Squares algebraic identity a  da  d  a  d to multiply symmetric number pairs in under 3 seconds)",
            "When both numbers are prime only (Apply the Difference of Squares algebraic identity a  da  d  a  d to multiply symmetric number pairs in under 3 seconds)"
          ],
          "answerIndex": 0,
          "explanation": "Symmetric distance from a clean square base allows instant computation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 6, Lesson 2: Calculate mentally: 29 x 31"
  },
  "mentalmath-u6-l3": {
    "id": "mentalmath-u6-l3",
    "unit": "mentalmath-u6",
    "level": "advanced",
    "objective": "Calculate accurate percentage breakdowns (15%, 18%, 20%, 8.25% sales tax) and estimate doubling times using the Rule of 72 in real-world scenarios.",
    "difficulty": 700,
    "presentation": {
      "explanation": "Percentage calculation in daily commerce relies on modular building blocks (10%, 5%, 1%):\n\n1. Building-Block Percentage Modular System:\n   - **10%** = Shift decimal 1 position left (e.g. 10% of $84.00 = $8.40).\n   - **5%** = Half of 10% (e.g. 5% of $84.00 = $4.20).\n   - **1%** = Shift decimal 2 positions left (e.g. 1% of $84.00 = $0.84).\n   - **20%** = Double 10% ($8.40 x 2 = $16.80).\n   - **15% Tip** = 10% + 5% ($8.40 + $4.20 = **$12.60**).\n   - **18% Tip** = 20% - 2% ($16.80 - $1.68 = **$15.12**).\n\n2. Sales Tax Estimation (e.g. ~8%):\n   - Calculate 10% and subtract 2% (e.g. for $65.00: $6.50 - $1.30 = $5.20).\n\n3. The Rule of 72 (Compound Growth Doubling Time):\n   $$\\text{Years to Double} \\approx \\frac{72}{\\text{Interest Rate (\\%)}}$$\n   - At **6%** annual return: $72 / 6 = \\mathbf{12 \\text{ years}}$ to double investment.\n   - At **8%** annual return: $72 / 8 = \\mathbf{9 \\text{ years}}$ to double.\n   - At **12%** annual return: $72 / 12 = \\mathbf{6 \\text{ years}}$ to double!",
      "examples": [
        {
          "target": "Calculate a 15% tip on a $64.00 dinner bill:",
          "reading": "10% is 6.40, 5% is 3.20 -> 6.40 + 3.20 = $9.60",
          "translation": "$9.60"
        },
        {
          "target": "Calculate 20% tip on an $85.00 bill:",
          "reading": "10% is 8.50 -> 8.50 * 2 = $17.00",
          "translation": "$17.00"
        },
        {
          "target": "How many years for money to double at 9% compound interest?",
          "reading": "72 / 9 = 8 years",
          "translation": "8 years"
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Applying the mental arithmetic algorithm from Unit 6, Lesson 3, what is the exact result?",
          "options": [
            "$6.80 (Calculate accurate percentage breakdowns 15)",
            "$7.60 (Calculate accurate percentage breakdowns 15)",
            "$8.00 (Calculate accurate percentage breakdowns 15)",
            "$7.20 (Calculate accurate percentage breakdowns 15)"
          ],
          "answerIndex": 3,
          "explanation": "4.80 + 2.40 = $7.20."
        },
        {
          "prompt": "According to the Rule of 72, how long does an investment take to double at an 8% annual return?",
          "options": [
            "8 years (Calculate accurate percentage breakdowns 15)",
            "10 years (Calculate accurate percentage breakdowns 15)",
            "12 years (Calculate accurate percentage breakdowns 15)",
            "9 years (Calculate accurate percentage breakdowns 15)"
          ],
          "answerIndex": 3,
          "explanation": "72 / 8 = 9 years."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Applying the computational shortcut from Unit 6, Lesson 3: Foundational & Structural Mastery, what is the exact calculation step?",
          "options": [
            "$9.00 (Calculate accurate percentage breakdowns 15)",
            "$8.50 (Calculate accurate percentage breakdowns 15)",
            "$9.50 (Calculate accurate percentage breakdowns 15)",
            "$10.00 (Calculate accurate percentage breakdowns 15)"
          ],
          "answerIndex": 0,
          "explanation": "10.00 - 1.00 = $9.00."
        },
        {
          "prompt": "Calculate 8% sales tax on a $75.00 purchase:",
          "options": [
            "$6.00 (Calculate accurate percentage breakdowns 15)",
            "$5.50 (Calculate accurate percentage breakdowns 15)",
            "$6.50 (Calculate accurate percentage breakdowns 15)",
            "$7.00 (Calculate accurate percentage breakdowns 15)"
          ],
          "answerIndex": 0,
          "explanation": "7.50 - 1.50 = $6.00."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Calculate a 20% tip on a bill of $135.00:",
          "options": [
            "$26.00 (Calculate accurate percentage breakdowns 15)",
            "$25.00 (Calculate accurate percentage breakdowns 15)",
            "$27.00 (Calculate accurate percentage breakdowns 15)",
            "$28.00 (Calculate accurate percentage breakdowns 15)"
          ],
          "answerIndex": 2,
          "explanation": "13.50 * 2 = $27.00.",
          "type": "multiple-choice"
        },
        {
          "prompt": "If inflation is 4% annually, in how many years will the price of goods double (Rule of 72)?",
          "options": [
            "25 years (Calculate accurate percentage breakdowns 15)",
            "18 years (Calculate accurate percentage breakdowns 15)",
            "15 years (Calculate accurate percentage breakdowns 15)",
            "20 years (Calculate accurate percentage breakdowns 15)"
          ],
          "answerIndex": 1,
          "explanation": "72 / 4 = 18 years.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Calculate 15% of $120.00:",
          "options": [
            "$18.00 (Calculate accurate percentage breakdowns 15)",
            "$16.00 (Calculate accurate percentage breakdowns 15)",
            "$15.00 (Calculate accurate percentage breakdowns 15)",
            "$20.00 (Calculate accurate percentage breakdowns 15)"
          ],
          "answerIndex": 0,
          "explanation": "12.00 + 6.00 = $18.00.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What building blocks form 35% in mental math?",
          "options": [
            "25% + 15% (Calculate accurate percentage breakdowns 15)",
            "50% - 10% (Calculate accurate percentage breakdowns 15)",
            "100% / 3 (Calculate accurate percentage breakdowns 15)",
            "30% (Calculate accurate percentage breakdowns 15)"
          ],
          "answerIndex": 3,
          "explanation": "3 x 10% + 5% = 35%.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 6, Lesson 3: Calculate accurate percentage breakdowns (15%"
  },
  "mentalmath-u6-l4": {
    "id": "mentalmath-u6-l4",
    "unit": "mentalmath-u6",
    "level": "advanced",
    "objective": "Execute rapid Fermi estimation and order-of-magnitude calculations by rounding to 1 significant figure and manipulating scientific notation powers of 10 mentally.",
    "difficulty": 725,
    "presentation": {
      "explanation": "Named after Nobel laureate physicist Enrico Fermi, **Fermi Estimation** solves massive real-world problems in seconds by decomposing complex questions into order-of-magnitude approximations:\n\n1. The 3 Steps of Fermi Estimation:\n   - **Step 1: Round to 1 Significant Figure** (or powers of 10):\n     - 7,850 -> $8 \\times 10^3$\n     - 0.048 -> $5 \\times 10^{-2}$\n     - 315 -> $3 \\times 10^2$\n   - **Step 2: Multiply the Single-Digit Mantissas**:\n     - $8 \\times 5 \\times 3 = 120 \\approx 1.2 \\times 10^2$.\n   - **Step 3: Sum the Exponents (Powers of 10)**:\n     - $10^3 \\times 10^{-2} \\times 10^2 = 10^{3 - 2 + 2} = 10^3$.\n     - Combine: $1.2 \\times 10^2 \\times 10^3 = \\mathbf{1.2 \\times 10^5 = 120,000}$!\n\n2. Classic Fermi Dimensional Analysis: 'Seconds in a Year':\n   - 60 sec/min $\\times$ 60 min/hr = 3,600 sec/hr $\\approx 4 \\times 10^3$.\n   - 24 hr/day $\\approx 2.5 \\times 10^1$.\n   - 365 days/yr $\\approx 3.65 \\times 10^2$.\n   - Product: $\\approx \\pi \\times 10^7 \\approx \\mathbf{31.5 \\text{ million seconds}}$ (exact: 31,536,000)!",
      "examples": [
        {
          "target": "Estimate: 4,890 x 612 / 28",
          "reading": "(5*10^3 * 6*10^2) / (3*10^1) = 30*10^5 / 3*10^1 = 10*10^4 = 100,000",
          "translation": "~100,000 (Exact: 106,881)"
        },
        {
          "target": "Estimate heartbeats in a human lifetime (80 years):",
          "reading": "80 bpm * 60 min * 24 hr * 365 days * 80 yrs ~ 40 million/yr * 80 = 3.2 billion",
          "translation": "~3 billion heartbeats"
        },
        {
          "target": "Estimate: 198,000 x 0.0051",
          "reading": "2*10^5 * 5*10^-3 = 10*10^2 = 1,000",
          "translation": "~1,000 (Exact: 1,009.8)"
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Applying the mental arithmetic algorithm from Unit 6, Lesson 4, what is the exact result?",
          "options": [
            "~2,000,000 (Execute rapid Fermi estimation and orderofmagnitude calculations by rounding to 1 significant figure and manipulating scientific notation powers of 10 mentally)",
            "~20,000,000 (Execute rapid Fermi estimation and orderofmagnitude calculations by rounding to 1 significant figure and manipulating scientific notation powers of 10 mentally)",
            "~20,000 (Execute rapid Fermi estimation and orderofmagnitude calculations by rounding to 1 significant figure and manipulating scientific notation powers of 10 mentally)",
            "~200,000 (Execute rapid Fermi estimation and orderofmagnitude calculations by rounding to 1 significant figure and manipulating scientific notation powers of 10 mentally)"
          ],
          "answerIndex": 0,
          "explanation": "4,000 * 500 = 2,000,000 (Exact: 1,999,200)."
        },
        {
          "prompt": "What is the useful mental math approximation for the number of seconds in one year?",
          "options": [
            "π x 10⁷ seconds (Execute rapid Fermi estimation and orderofmagnitude calculations by rounding to 1 significant figure and manipulating scientific notation powers of 10 mentally)",
            "100 million seconds (Execute rapid Fermi estimation and orderofmagnitude calculations by rounding to 1 significant figure and manipulating scientific notation powers of 10 mentally)",
            "10 billion seconds (Execute rapid Fermi estimation and orderofmagnitude calculations by rounding to 1 significant figure and manipulating scientific notation powers of 10 mentally)",
            "1 million seconds (Execute rapid Fermi estimation and orderofmagnitude calculations by rounding to 1 significant figure and manipulating scientific notation powers of 10 mentally)"
          ],
          "answerIndex": 0,
          "explanation": "365 * 24 * 3600 = 31,536,000 ≈ π * 10⁷."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Applying the computational shortcut from Unit 6, Lesson 4: Foundational & Structural Mastery, what is the exact calculation step?",
          "options": [
            "~20,000 (Execute rapid Fermi estimation and orderofmagnitude calculations by rounding to 1 significant figure and manipulating scientific notation powers of 10 mentally)",
            "~2,000,000 (Execute rapid Fermi estimation and orderofmagnitude calculations by rounding to 1 significant figure and manipulating scientific notation powers of 10 mentally)",
            "~2,000 (Execute rapid Fermi estimation and orderofmagnitude calculations by rounding to 1 significant figure and manipulating scientific notation powers of 10 mentally)",
            "~200,000 (Execute rapid Fermi estimation and orderofmagnitude calculations by rounding to 1 significant figure and manipulating scientific notation powers of 10 mentally)"
          ],
          "answerIndex": 0,
          "explanation": "800,000 / 40 = 20,000."
        },
        {
          "prompt": "Estimate: 0.0042 x 2,100,000:",
          "options": [
            "~8,400 (Execute rapid Fermi estimation and orderofmagnitude calculations by rounding to 1 significant figure and manipulating scientific notation powers of 10 mentally)",
            "~840 (Execute rapid Fermi estimation and orderofmagnitude calculations by rounding to 1 significant figure and manipulating scientific notation powers of 10 mentally)",
            "~84 (Execute rapid Fermi estimation and orderofmagnitude calculations by rounding to 1 significant figure and manipulating scientific notation powers of 10 mentally)",
            "~84,000 (Execute rapid Fermi estimation and orderofmagnitude calculations by rounding to 1 significant figure and manipulating scientific notation powers of 10 mentally)"
          ],
          "answerIndex": 0,
          "explanation": "0.0042 * 2,100,000 = 8,820 ≈ 8,400."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Estimate the order of magnitude for 59,000 x 480 / 12:",
          "options": [
            "~240,000 (Execute rapid Fermi estimation and orderofmagnitude calculations by rounding to 1 significant figure and manipulating scientific notation powers of 10 mentally)",
            "~2,400,000 (Execute rapid Fermi estimation and orderofmagnitude calculations by rounding to 1 significant figure and manipulating scientific notation powers of 10 mentally)",
            "~24,000,000 (Execute rapid Fermi estimation and orderofmagnitude calculations by rounding to 1 significant figure and manipulating scientific notation powers of 10 mentally)",
            "~24,000 (Execute rapid Fermi estimation and orderofmagnitude calculations by rounding to 1 significant figure and manipulating scientific notation powers of 10 mentally)"
          ],
          "answerIndex": 1,
          "explanation": "60,000 * 480 / 12 = 60,000 * 40 = 2,400,000 (Exact: 2,360,000).",
          "type": "multiple-choice"
        },
        {
          "prompt": "If a car travels 60 miles per hour, approximately how many feet per second is it moving? (1 mile ≈ 5,280 ft):",
          "options": [
            "~88 ft/sec (Execute rapid Fermi estimation and orderofmagnitude calculations by rounding to 1 significant figure and manipulating scientific notation powers of 10 mentally)",
            "~50 ft/sec (Execute rapid Fermi estimation and orderofmagnitude calculations by rounding to 1 significant figure and manipulating scientific notation powers of 10 mentally)",
            "~120 ft/sec (Execute rapid Fermi estimation and orderofmagnitude calculations by rounding to 1 significant figure and manipulating scientific notation powers of 10 mentally)",
            "~20 ft/sec (Execute rapid Fermi estimation and orderofmagnitude calculations by rounding to 1 significant figure and manipulating scientific notation powers of 10 mentally)"
          ],
          "answerIndex": 0,
          "explanation": "60 mph = exactly 88 ft/sec.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the primary objective of a Fermi estimation?",
          "options": [
            "To memorize multiplication tables (Execute rapid Fermi estimation and orderofmagnitude calculations by rounding to 1 significant figure and manipulating scientific notation powers of 10 mentally)",
            "To calculate digits of pi to 10 decimal places (Execute rapid Fermi estimation and orderofmagnitude calculations by rounding to 1 significant figure and manipulating scientific notation powers of 10 mentally)",
            "To prove mathematical theorems (Execute rapid Fermi estimation and orderofmagnitude calculations by rounding to 1 significant figure and manipulating scientific notation powers of 10 mentally)",
            "To quickly obtain a correct order of magnitude (power of 10)"
          ],
          "answerIndex": 3,
          "explanation": "Rapid order-of-magnitude approximation for decision making.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Estimate: 295 x 305 mentally:",
          "options": [
            "89,925 (Execute rapid Fermi estimation and orderofmagnitude calculations by rounding to 1 significant figure and manipulating scientific notation powers of 10 mentally)",
            "90,025 (Execute rapid Fermi estimation and orderofmagnitude calculations by rounding to 1 significant figure and manipulating scientific notation powers of 10 mentally)",
            "89,975 (Execute rapid Fermi estimation and orderofmagnitude calculations by rounding to 1 significant figure and manipulating scientific notation powers of 10 mentally)",
            "90,000 (Execute rapid Fermi estimation and orderofmagnitude calculations by rounding to 1 significant figure and manipulating scientific notation powers of 10 mentally)"
          ],
          "answerIndex": 2,
          "explanation": "Difference of squares: 300² - 5² = 89,975.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 6, Lesson 4: Estimate: 4,890 x 612 / 28"
  },
  "mentalmath-u6-l5": {
    "id": "mentalmath-u6-l5",
    "unit": "mentalmath-u6",
    "level": "advanced",
    "objective": "Demonstrate comprehensive Unit 6 mastery by solving a mixed speed-gauntlet of linear equations, difference-of-squares products, tip/percentage calculations, and Fermi estimations under 5 seconds per problem.",
    "difficulty": 750,
    "presentation": {
      "explanation": "In this Master Capstone for Unit 6, we synthesize all algebra unwinds, difference of squares, percentage modular systems, Rule of 72, and Fermi estimation in a high-speed mixed problem gauntlet:\n\n1. The Problem Roster:\n   - **Problem 1 (Linear Equation)**: $8x + 34 = 114 \\implies 114 - 34 = 80 \\implies x = 10$.\n   - **Problem 2 (Difference of Squares)**: $58 \\times 62 = 60^2 - 2^2 = 3600 - 4 = 3596$.\n   - **Problem 3 (Difference of Squares)**: $75 \\times 85 = 80^2 - 5^2 = 6400 - 25 = 6375$.\n   - **Problem 4 (Percentage Tip)**: 18% tip on $70.00 \\implies 20\\% - 2\\% = 14.00 - 1.40 = \\$12.60$.\n   - **Problem 5 (Rule of 72)**: Doubling years at 6% $\\implies 72 / 6 = 12$ years.\n   - **Problem 6 (Fermi Estimation)**: $4,900 \\times 8,100 \\implies 5000 \\times 8000 = 40,000,000$.\n\n2. Performance Standard:\n   - **Time Limit**: Under 5 seconds per question.\n   - **Accuracy Threshold**: 100% on algebraic/arithmetic calculations, correct order-of-magnitude on Fermi estimations.",
      "examples": [
        {
          "target": "Solve: 7x - 18 = 45",
          "reading": "45 + 18 = 63 -> 63 / 7 = 9",
          "translation": "x = 9"
        },
        {
          "target": "Calculate: 97 x 103",
          "reading": "100^2 - 3^2 = 10000 - 9 = 9991",
          "translation": "9991"
        },
        {
          "target": "Calculate 15% tip on $92.00:",
          "reading": "9.20 + 4.60 = $13.80",
          "translation": "$13.80"
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Applying the mental arithmetic algorithm from Unit 6, Lesson 5, what is the exact result?",
          "options": [
            "x = 11 (Demonstrate comprehensive Unit 6 mastery by solving a mixed speedgauntlet of linear equations)",
            "x = 10 (Demonstrate comprehensive Unit 6 mastery by solving a mixed speedgauntlet of linear equations)",
            "x = 12 (Demonstrate comprehensive Unit 6 mastery by solving a mixed speedgauntlet of linear equations)",
            "x = 9 (Demonstrate comprehensive Unit 6 mastery by solving a mixed speedgauntlet of linear equations)"
          ],
          "answerIndex": 0,
          "explanation": "92 - 37 = 55; 55 / 5 = 11."
        },
        {
          "prompt": "Calculate 46 x 54 mentally:",
          "options": [
            "2,484 (Demonstrate comprehensive Unit 6 mastery by solving a mixed speedgauntlet of linear equations)",
            "2,474 (Demonstrate comprehensive Unit 6 mastery by solving a mixed speedgauntlet of linear equations)",
            "2,494 (Demonstrate comprehensive Unit 6 mastery by solving a mixed speedgauntlet of linear equations)",
            "2,464 (Demonstrate comprehensive Unit 6 mastery by solving a mixed speedgauntlet of linear equations)"
          ],
          "answerIndex": 0,
          "explanation": "50² - 4² = 2500 - 16 = 2484."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Applying the computational shortcut from Unit 6, Lesson 5: Foundational & Structural Mastery, what is the exact calculation step?",
          "options": [
            "$13.20 (Demonstrate comprehensive Unit 6 mastery by solving a mixed speedgauntlet of linear equations)",
            "$12.90 (Demonstrate comprehensive Unit 6 mastery by solving a mixed speedgauntlet of linear equations)",
            "$11.90 (Demonstrate comprehensive Unit 6 mastery by solving a mixed speedgauntlet of linear equations)",
            "$12.60 (Demonstrate comprehensive Unit 6 mastery by solving a mixed speedgauntlet of linear equations)"
          ],
          "answerIndex": 1,
          "explanation": "8.60 + 4.30 = $12.90."
        },
        {
          "prompt": "How many years to double money at 12% annual interest (Rule of 72)?",
          "options": [
            "6 years (Demonstrate comprehensive Unit 6 mastery by solving a mixed speedgauntlet of linear equations)",
            "7 years (Demonstrate comprehensive Unit 6 mastery by solving a mixed speedgauntlet of linear equations)",
            "8 years (Demonstrate comprehensive Unit 6 mastery by solving a mixed speedgauntlet of linear equations)",
            "5 years (Demonstrate comprehensive Unit 6 mastery by solving a mixed speedgauntlet of linear equations)"
          ],
          "answerIndex": 0,
          "explanation": "72 / 12 = 6 years."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Solve mentally: 12x - 19 = 5x + 37",
          "options": [
            "x = 8 (Demonstrate comprehensive Unit 6 mastery by solving a mixed speedgauntlet of linear equations)",
            "x = 7 (Demonstrate comprehensive Unit 6 mastery by solving a mixed speedgauntlet of linear equations)",
            "x = 9 (Demonstrate comprehensive Unit 6 mastery by solving a mixed speedgauntlet of linear equations)",
            "x = 6 (Demonstrate comprehensive Unit 6 mastery by solving a mixed speedgauntlet of linear equations)"
          ],
          "answerIndex": 0,
          "explanation": "12x - 5x = 7x; 37 + 19 = 56 -> x = 8.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Calculate 76 x 84 mentally:",
          "options": [
            "6,374 (Demonstrate comprehensive Unit 6 mastery by solving a mixed speedgauntlet of linear equations)",
            "6,394 (Demonstrate comprehensive Unit 6 mastery by solving a mixed speedgauntlet of linear equations)",
            "6,364 (Demonstrate comprehensive Unit 6 mastery by solving a mixed speedgauntlet of linear equations)",
            "6,384 (Demonstrate comprehensive Unit 6 mastery by solving a mixed speedgauntlet of linear equations)"
          ],
          "answerIndex": 3,
          "explanation": "80² - 4² = 6400 - 16 = 6384.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What core competencies were mastered across Mental Math Unit 6?",
          "options": [
            "Integration by parts only (Demonstrate comprehensive Unit 6 mastery by solving a mixed speedgauntlet of linear equations)",
            "Long division by hand on paper only (Demonstrate comprehensive Unit 6 mastery by solving a mixed speedgauntlet of linear equations)",
            "Rapid 2-step mental linear equation solving, Difference of Squares (Demonstrate comprehensive Unit 6 mastery by solving a mixed speedgauntlet of linear equations)",
            "Basic finger counting only (Demonstrate comprehensive Unit 6 mastery by solving a mixed speedgauntlet of linear equations)"
          ],
          "answerIndex": 2,
          "explanation": "Unit 6 comprehensive mental algebra, difference of squares, percentage tricks, and Fermi estimation mastery.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the next frontier of Mental Math in Unit 7?",
          "options": [
            "Buying an electric calculator (Demonstrate comprehensive Unit 6 mastery by solving a mixed speedgauntlet of linear equations)",
            "Combined-Operation Speed Drills (Demonstrate comprehensive Unit 6 mastery by solving a mixed speedgauntlet of linear equations)",
            "Memorizing Roman numerals (Demonstrate comprehensive Unit 6 mastery by solving a mixed speedgauntlet of linear equations)",
            "Drawing geometry circles (Demonstrate comprehensive Unit 6 mastery by solving a mixed speedgauntlet of linear equations)"
          ],
          "answerIndex": 1,
          "explanation": "Unit 7 focuses on combined-operation rapid speed drills.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 6, Lesson 5: Solve: 7x - 18 = 45"
  },
  "mentalmath-u7-l1": {
    "id": "mentalmath-u7-l1",
    "unit": "mentalmath-u7",
    "level": "master",
    "objective": "Execute multi-step mixed addition and subtraction chains (e.g., 487 + 265 - 189 + 342) purely in working memory using left-to-right processing and running accumulator chunks.",
    "presentation": {
      "explanation": "Welcome to Master Mental Math Unit 7: Combined-Operation Speed Drills! In real-world finance, engineering, and competition, calculations do not appear in clean isolated silos; they arrive as **rapid dynamic chains**:\n\n1. The Mental Running Accumulator:\n   - When computing a chain like `487 + 265 - 189 + 342`:\n     - Step 1: Start at `487`.\n     - Step 2: Add `265` left-to-right (`487 + 200 = 687; + 60 = 747; + 5 = 752`). Store `752`.\n     - Step 3: Subtract `189` using **Compensation** (`752 - 200 = 552; + 11 = 563`). Store `563`.\n     - Step 4: Add `342` left-to-right (`563 + 300 = 863; + 40 = 903; + 2 = 905`). Final = `905`.\n\n2. Chunking vs. Holding Digits:\n   - Never try to visualize paper vertical columns in your mind (carrying and borrowing columns will overload your visuospatial sketchpad).\n   - Instead, treat the running total as a single liquid number that expands and contracts.\n\n3. Subtraction Inversion (Complement Pairing):\n   - When subtracting numbers ending in 8 or 9 (like -189 or -298), always round up to the nearest hundred (-200, -300) and immediately refund the complement (+11, +2).",
      "examples": [
        {
          "target": "346 + 185 - 229 + 158 = 460",
          "reading": "346 + 185 - 229 + 158 = 460",
          "translation": "Chain: 346+185=531 -> 531-229 (531-230+1)=302 -> 302+158=460."
        },
        {
          "target": "820 - 345 + 176 - 290 = 361",
          "reading": "820 - 345 + 176 - 290 = 361",
          "translation": "Chain: 820-345=475 -> 475+176=651 -> 651-290=361."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Applying the mental arithmetic algorithm from Unit 7, Lesson 1, what is the exact result?",
          "options": [
            "620 (Execute multistep mixed addition and subtraction chains e)",
            "640 (Execute multistep mixed addition and subtraction chains e)",
            "650 (Execute multistep mixed addition and subtraction chains e)",
            "630 (Execute multistep mixed addition and subtraction chains e)"
          ],
          "answerIndex": 3,
          "explanation": "540 + 285 = 825; 825 - 195 = 630."
        },
        {
          "prompt": "What is the fastest way to subtract 394 from 721 mentally?",
          "options": [
            "Round 721 to 700 (Execute multistep mixed addition and subtraction chains e)",
            "Add 394 to 721 (Execute multistep mixed addition and subtraction chains e)",
            "Subtract 400 and add back 6: 721 - 400 = 321; 321 + 6 = 327 (Execute multistep mixed addition and subtraction chains e)",
            "Subtract 300, then borrow 9, then borrow 4 on paper (Execute multistep mixed addition and subtraction chains e)"
          ],
          "answerIndex": 2,
          "explanation": "Compensation with complement 6: 721 - 400 + 6 = 327."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Applying the computational shortcut from Unit 7, Lesson 1: Foundational & Structural Mastery, what is the exact calculation step?",
          "options": [
            "490 (Execute multistep mixed addition and subtraction chains e)",
            "510 (Execute multistep mixed addition and subtraction chains e)",
            "520 (Execute multistep mixed addition and subtraction chains e)",
            "500 (Execute multistep mixed addition and subtraction chains e)"
          ],
          "answerIndex": 3,
          "explanation": "Compatible pairing: (275 + 325) + (148 - 248) = 600 - 100 = 500."
        },
        {
          "prompt": "Compute: 650 - 175 + 325 - 400",
          "options": [
            "390 (Execute multistep mixed addition and subtraction chains e)",
            "410 (Execute multistep mixed addition and subtraction chains e)",
            "420 (Execute multistep mixed addition and subtraction chains e)",
            "400 (Execute multistep mixed addition and subtraction chains e)"
          ],
          "answerIndex": 3,
          "explanation": "-175 + 325 = +150; 650 + 150 - 400 = 400."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Calculate the full chain mentally: 412 + 388 - 295 + 145",
          "options": [
            "640 (Execute multistep mixed addition and subtraction chains e)",
            "660 (Execute multistep mixed addition and subtraction chains e)",
            "630 (Execute multistep mixed addition and subtraction chains e)",
            "650 (Execute multistep mixed addition and subtraction chains e)"
          ],
          "answerIndex": 3,
          "explanation": "800 - 295 + 145 = 800 - 150 = 650.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What technique allows mental math experts to avoid visual carrying/borrowing fatigue?",
          "options": [
            "Writing numbers down on napkins (Execute multistep mixed addition and subtraction chains e)",
            "Guessing the last digit only (Execute multistep mixed addition and subtraction chains e)",
            "Left-to-right calculation combined with compensation and compatible number grouping (Execute multistep mixed addition and subtraction chains e)",
            "Counting on fingers (Execute multistep mixed addition and subtraction chains e)"
          ],
          "answerIndex": 2,
          "explanation": "Left-to-right processing with compensation keeps intermediate numbers manageable.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Calculate: 950 - 380 - 170 + 400",
          "options": [
            "790 (Execute multistep mixed addition and subtraction chains e)",
            "800 (Execute multistep mixed addition and subtraction chains e)",
            "820 (Execute multistep mixed addition and subtraction chains e)",
            "810 (Execute multistep mixed addition and subtraction chains e)"
          ],
          "answerIndex": 1,
          "explanation": "Combining subtractions: -(380 + 170) = -550; 950 - 550 + 400 = 800.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete the mental sequence: 150 + 75 - 25 + 200 = _______",
          "options": [
            "400 (Execute multistep mixed addition and subtraction chains e)",
            "410 (Execute multistep mixed addition and subtraction chains e)",
            "420 (Execute multistep mixed addition and subtraction chains e)",
            "390 (Execute multistep mixed addition and subtraction chains e)"
          ],
          "answerIndex": 0,
          "explanation": "150 + 50 + 200 = 400.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 7, Lesson 1: Execute multi-step mixed addition and subtraction chains (e"
  },
  "mentalmath-u7-l2": {
    "id": "mentalmath-u7-l2",
    "unit": "mentalmath-u7",
    "level": "master",
    "objective": "Fuse multi-digit multiplication shortcuts directly with immediate addition and subtraction operations (e.g., 48 × 6 + 73, 19 × 25 - 175) without intermediate recording.",
    "presentation": {
      "explanation": "Master arithmetic fluency requires **Cross-Operation Fusion** — multiplying two numbers mentally and immediately incorporating the product into an additive/subtractive equation:\n\n1. Multiply-Then-Add Architecture:\n   - Problem: `48 × 6 + 73`\n     - *Multiplication step*: `48 × 6 = (50 - 2) × 6 = 300 - 12 = 288`.\n     - *Fused addition step*: `288 + 73 = 288 + 70 = 358; + 3 = 361` (or `288 + 12 + 61 = 300 + 61 = 361`).\n\n2. The Near-Base Factorization Trick:\n   - Problem: `19 × 24 - 156`\n     - *Multiplication*: `19 × 24 = (20 - 1) × 24 = 480 - 24 = 456`.\n     - *Fused subtraction*: `456 - 156 = 300` (instant cancellation of ending 56!).\n\n3. Common Multiplier Anchors (×25, ×15, ×9):\n   - `×25`: Divide by 4, multiply by 100 (`36 × 25 = 900`).\n   - `×15`: Multiply by 10, add half (`44 × 15 = 440 + 220 = 660`).\n   - `×9`: Multiply by 10, subtract original number (`63 × 9 = 630 - 63 = 567`).",
      "examples": [
        {
          "target": "34 × 15 + 190 = 700",
          "reading": "34 × 15 + 190 = 700",
          "translation": "34 × 15 = 340 + 170 = 510; 510 + 190 = 700."
        },
        {
          "target": "75 × 12 - 250 = 650",
          "reading": "75 × 12 - 250 = 650",
          "translation": "75 × 12 = (75 × 4) × 3 = 300 × 3 = 900; 900 - 250 = 650."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Applying the mental arithmetic algorithm from Unit 7, Lesson 2, what is the exact result?",
          "options": [
            "600 (Fuse multidigit multiplication shortcuts directly with immediate addition and subtraction operations e)",
            "620 (Fuse multidigit multiplication shortcuts directly with immediate addition and subtraction operations e)",
            "590 (Fuse multidigit multiplication shortcuts directly with immediate addition and subtraction operations e)",
            "610 (Fuse multidigit multiplication shortcuts directly with immediate addition and subtraction operations e)"
          ],
          "answerIndex": 0,
          "explanation": "28 × 15 = 420; 420 + 180 = 600."
        },
        {
          "prompt": "Calculate: 44 × 25 - 350",
          "options": [
            "750 (Fuse multidigit multiplication shortcuts directly with immediate addition and subtraction operations e)",
            "740 (Fuse multidigit multiplication shortcuts directly with immediate addition and subtraction operations e)",
            "770 (Fuse multidigit multiplication shortcuts directly with immediate addition and subtraction operations e)",
            "760 (Fuse multidigit multiplication shortcuts directly with immediate addition and subtraction operations e)"
          ],
          "answerIndex": 0,
          "explanation": "44 × 25 = 1100; 1100 - 350 = 750."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Applying the computational shortcut from Unit 7, Lesson 2: Foundational & Structural Mastery, what is the exact calculation step?",
          "options": [
            "730 (Fuse multidigit multiplication shortcuts directly with immediate addition and subtraction operations e)",
            "750 (Fuse multidigit multiplication shortcuts directly with immediate addition and subtraction operations e)",
            "740 (Fuse multidigit multiplication shortcuts directly with immediate addition and subtraction operations e)",
            "760 (Fuse multidigit multiplication shortcuts directly with immediate addition and subtraction operations e)"
          ],
          "answerIndex": 2,
          "explanation": "19 × 30 = 570; 17 × 10 = 170; 570 + 170 = 740."
        },
        {
          "prompt": "Calculate: 65 × 6 - 190",
          "options": [
            "190 (Fuse multidigit multiplication shortcuts directly with immediate addition and subtraction operations e)",
            "210 (Fuse multidigit multiplication shortcuts directly with immediate addition and subtraction operations e)",
            "220 (Fuse multidigit multiplication shortcuts directly with immediate addition and subtraction operations e)",
            "200 (Fuse multidigit multiplication shortcuts directly with immediate addition and subtraction operations e)"
          ],
          "answerIndex": 3,
          "explanation": "65 × 6 = 390; 390 - 190 = 200."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Calculate the fused expression: 52 × 8 + 184",
          "options": [
            "610 (Fuse multidigit multiplication shortcuts directly with immediate addition and subtraction operations e)",
            "620 (Fuse multidigit multiplication shortcuts directly with immediate addition and subtraction operations e)",
            "600 (Fuse multidigit multiplication shortcuts directly with immediate addition and subtraction operations e)",
            "590 (Fuse multidigit multiplication shortcuts directly with immediate addition and subtraction operations e)"
          ],
          "answerIndex": 2,
          "explanation": "416 + 184 = 600.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Calculate: 99 × 7 + 107",
          "options": [
            "810 (Fuse multidigit multiplication shortcuts directly with immediate addition and subtraction operations e)",
            "800 (Fuse multidigit multiplication shortcuts directly with immediate addition and subtraction operations e)",
            "820 (Fuse multidigit multiplication shortcuts directly with immediate addition and subtraction operations e)",
            "790 (Fuse multidigit multiplication shortcuts directly with immediate addition and subtraction operations e)"
          ],
          "answerIndex": 1,
          "explanation": "693 + 107 = 800.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is factoring 75 × 16 as (75 × 4) × 4 faster than traditional vertical multiplication?",
          "options": [
            "75 × 4 instantly yields 300; 300 × 4 = 1200 with zero carry memory required (Fuse multidigit multiplication shortcuts directly with immediate addition and subtraction operations e)",
            "It rounds to the nearest ten (Fuse multidigit multiplication shortcuts directly with immediate addition and subtraction operations e)",
            "It uses logarithms (Fuse multidigit multiplication shortcuts directly with immediate addition and subtraction operations e)",
            "It turns the answer into a fraction (Fuse multidigit multiplication shortcuts directly with immediate addition and subtraction operations e)"
          ],
          "answerIndex": 0,
          "explanation": "Associative factoring leverages the round base 300.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 16 × 25 + 250 = _______",
          "options": [
            "640 (Fuse multidigit multiplication shortcuts directly with immediate addition and subtraction operations e)",
            "660 (Fuse multidigit multiplication shortcuts directly with immediate addition and subtraction operations e)",
            "670 (Fuse multidigit multiplication shortcuts directly with immediate addition and subtraction operations e)",
            "650 (Fuse multidigit multiplication shortcuts directly with immediate addition and subtraction operations e)"
          ],
          "answerIndex": 3,
          "explanation": "400 + 250 = 650.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 7, Lesson 2: 34 × 15 + 190 = 700"
  },
  "mentalmath-u7-l3": {
    "id": "mentalmath-u7-l3",
    "unit": "mentalmath-u7",
    "level": "master",
    "objective": "Calculate complex compound percentages, fractional conversions, and cross-base percentage splits mentally (e.g., 35% of 240, 15% of 160 + 12.5% of 320).",
    "presentation": {
      "explanation": "Master percentage calculation bypasses formulaic decimal multiplication by leveraging **Fractional Equivalents** and **10%/1% Building Blocks**:\n\n1. Essential Fractional Equivalents Matrix:\n   - `50% = 1/2` | `25% = 1/4` | `75% = 3/4`\n   - `12.5% = 1/8` | `37.5% = 3/8` | `62.5% = 5/8` | `87.5% = 7/8`\n   - `33.3% = 1/3` | `66.7% = 2/3` | `16.67% = 1/6`\n   - `20% = 1/5` | `40% = 2/5` | `60% = 3/5` | `80% = 4/5`\n   - `14.28% = 1/7`.\n\n2. The Percentage Reversal Property (`x% of y = y% of x`):\n   - Calculating `16% of 75` seems awkward.\n   - Reverse it: `75% of 16 = 3/4 of 16 = 12`! Instant answer in 1 second.\n   - Calculating `48% of 50` = `50% of 48 = 24`.\n\n3. Compound Percentage Blends:\n   - Problem: `35% of 240`\n     - Method A (10% blocks): `10% = 24; 30% = 72; 5% = 12 -> 72 + 12 = 84`.\n     - Method B (Fractional): `35% = 7/20 -> 240 / 20 = 12; 12 × 7 = 84`.",
      "examples": [
        {
          "target": "12.5% of 480 = 60",
          "reading": "12.5% of 480 = 60",
          "translation": "12.5% = 1/8; 480 / 8 = 60."
        },
        {
          "target": "16% of 25 + 45% of 200 = 94",
          "reading": "16% of 25 + 45% of 200 = 94",
          "translation": "16% of 25 = 25% of 16 = 4; 45% of 200 = 90; 4 + 90 = 94."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Applying the mental arithmetic algorithm from Unit 7, Lesson 3, what is the exact result?",
          "options": [
            "8 (Calculate complex compound percentages)",
            "10 (Calculate complex compound percentages)",
            "11 (Calculate complex compound percentages)",
            "9 (Calculate complex compound percentages)"
          ],
          "answerIndex": 3,
          "explanation": "18% of 50 = 50% of 18 = 9."
        },
        {
          "prompt": "What is 37.5% of 640?",
          "options": [
            "230 (Calculate complex compound percentages)",
            "250 (Calculate complex compound percentages)",
            "260 (Calculate complex compound percentages)",
            "240 (Calculate complex compound percentages)"
          ],
          "answerIndex": 3,
          "explanation": "3/8 of 640 = 240."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Applying the computational shortcut from Unit 7, Lesson 3: Foundational & Structural Mastery, what is the exact calculation step?",
          "options": [
            "107 (Calculate complex compound percentages)",
            "105 (Calculate complex compound percentages)",
            "109 (Calculate complex compound percentages)",
            "111 (Calculate complex compound percentages)"
          ],
          "answerIndex": 0,
          "explanation": "27 + 80 = 107."
        },
        {
          "prompt": "Compute: 84% of 25",
          "options": [
            "21 (Calculate complex compound percentages)",
            "20 (Calculate complex compound percentages)",
            "22 (Calculate complex compound percentages)",
            "23 (Calculate complex compound percentages)"
          ],
          "answerIndex": 0,
          "explanation": "25% of 84 = 21."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Calculate: 65% of 300 - 12.5% of 160",
          "options": [
            "185 (Calculate complex compound percentages)",
            "175 (Calculate complex compound percentages)",
            "170 (Calculate complex compound percentages)",
            "180 (Calculate complex compound percentages)"
          ],
          "answerIndex": 1,
          "explanation": "195 - 20 = 175.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why does 'x% of y = y% of x' always work mathematically?",
          "options": [
            "Because multiplication is commutative (Calculate complex compound percentages)",
            "It is an algebraic identity derived from modular arithmetic (Calculate complex compound percentages)",
            "It only works for even numbers (Calculate complex compound percentages)",
            "It is an approximation (Calculate complex compound percentages)"
          ],
          "answerIndex": 0,
          "explanation": "Commutative law of arithmetic ensures exact equivalence.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is 16.67% of 420?",
          "options": [
            "75 (Calculate complex compound percentages)",
            "80 (Calculate complex compound percentages)",
            "65 (Calculate complex compound percentages)",
            "70 (Calculate complex compound percentages)"
          ],
          "answerIndex": 3,
          "explanation": "1/6 of 420 = 70.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 75% of 48 = _______",
          "options": [
            "40 (Calculate complex compound percentages)",
            "34 (Calculate complex compound percentages)",
            "36 (Calculate complex compound percentages)",
            "38 (Calculate complex compound percentages)"
          ],
          "answerIndex": 2,
          "explanation": "3/4 of 48 = 36.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 7, Lesson 3: Calculate complex compound percentages"
  },
  "mentalmath-u7-l4": {
    "id": "mentalmath-u7-l4",
    "unit": "mentalmath-u7",
    "level": "master",
    "objective": "Apply instant divisibility rules and rapid checksum validations (Casting out 9s and 11s, prime tests for 7, 13, 17) to verify calculation results in under 2 seconds.",
    "presentation": {
      "explanation": "Master mental calculators never make unchecked errors because they run **Instant Modulo Checksums** in the background:\n\n1. Casting Out Nines (Modulo 9 Checksum):\n   - Every integer is congruent modulo 9 to the sum of its digits (casting out 9s, 8+1, 7+2, 6+3, 5+4 as zeros).\n   - Example Check: `487 × 6 = 2922`?\n     - Digital root of `487`: `4 + 8 + 7 = 19 -> 1 + 9 = 10 -> 1`.\n     - Digital root of `6`: `6`.\n     - Product root: `1 × 6 = 6`.\n     - Digital root of `2922`: `2 + 9 + 2 + 2 = 15 -> 1 + 5 = 6`.\n     - `6 == 6`! Checksum passes.\n\n2. Casting Out Elevens (Alternating Sum Modulo 11):\n   - Alternate subtracting and adding digits from right to left: `Units - Tens + Hundreds - Thousands...`\n   - Example: Is `8,426` divisible by 11? `6 - 2 + 4 - 8 = 0`. Since 0 is divisible by 11, `8,426` is divisible by 11!\n\n3. Rapid Divisibility by 7:\n   - Double the last digit and subtract from the rest: Is `364` divisible by 7? `36 - (4 × 2) = 36 - 8 = 28`. Since 28 is divisible by 7, `364` is divisible by 7 (364 / 7 = 52)!",
      "examples": [
        {
          "target": "Digital root of 78,453: 7+8+4+5+3 = (7+8)+(4+5)+3 = 6+0+3 = 9 -> 0 (mod 9)",
          "reading": "Digital root of 78,453 = 9 -> 0",
          "translation": "Cast out 9s: 4+5=9 (cast), 7+8+3=18=9 (cast) -> Root = 0/9."
        },
        {
          "target": "Divisibility test for 896 by 7: 89 - (6 × 2) = 89 - 12 = 77 -> Divisible by 7! (896 / 7 = 128)",
          "reading": "896 is divisible by 7",
          "translation": "Double last digit and subtract rule."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Applying the mental arithmetic algorithm from Unit 7, Lesson 4, what is the exact result?",
          "options": [
            "0 (Apply instant divisibility rules and rapid checksum validations Casting out 9s and 11s)",
            "1 (Apply instant divisibility rules and rapid checksum validations Casting out 9s and 11s)",
            "4 (Apply instant divisibility rules and rapid checksum validations Casting out 9s and 11s)",
            "2 (Apply instant divisibility rules and rapid checksum validations Casting out 9s and 11s)"
          ],
          "answerIndex": 1,
          "explanation": "Casting out 9 and (8+1) leaves 6+4=10 -> 1."
        },
        {
          "prompt": "Using the alternating sum test (mod 11), which number is divisible by 11?",
          "options": [
            "5,841 (Apply instant divisibility rules and rapid checksum validations Casting out 9s and 11s)",
            "5,840 (Apply instant divisibility rules and rapid checksum validations Casting out 9s and 11s)",
            "5,845 (Apply instant divisibility rules and rapid checksum validations Casting out 9s and 11s)",
            "5,842 (Apply instant divisibility rules and rapid checksum validations Casting out 9s and 11s)"
          ],
          "answerIndex": 0,
          "explanation": "1 - 4 + 8 - 5 = 0 (divisible by 11)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Applying the computational shortcut from Unit 7, Lesson 4: Foundational & Structural Mastery, what is the exact calculation step?",
          "options": [
            "Yes (Apply instant divisibility rules and rapid checksum validations Casting out 9s and 11s)",
            "It is prime (Apply instant divisibility rules and rapid checksum validations Casting out 9s and 11s)",
            "No (Apply instant divisibility rules and rapid checksum validations Casting out 9s and 11s)",
            "Only on Tuesdays (Apply instant divisibility rules and rapid checksum validations Casting out 9s and 11s)"
          ],
          "answerIndex": 0,
          "explanation": "47 - 2(6) = 47 - 12 = 35 (divisible by 7; 476 / 7 = 68)."
        },
        {
          "prompt": "Verify if 34 × 28 = 952 using digital roots:",
          "options": [
            "Valid (Apply instant divisibility rules and rapid checksum validations Casting out 9s and 11s)",
            "Cannot be verified (Apply instant divisibility rules and rapid checksum validations Casting out 9s and 11s)",
            "Invalid (Apply instant divisibility rules and rapid checksum validations Casting out 9s and 11s)",
            "Result should be negative (Apply instant divisibility rules and rapid checksum validations Casting out 9s and 11s)"
          ],
          "answerIndex": 0,
          "explanation": "7 × 1 = 7; root(952) = 7. Checksum confirmed."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the divisibility rules: Divisible by 9, Divisible by 11, Divisible by 7, Divisible by 4:",
          "options": [
            "Divisible by 9: Sum of digits = 9 | Divisible by 11: Alternating sum = 0/11 | Divisible by 7: Rest - 2 (last)",
            "All require long division (Apply instant divisibility rules and rapid checksum validations Casting out 9s and 11s)",
            "All are geometry rules (Apply instant divisibility rules and rapid checksum validations Casting out 9s and 11s)",
            "All mean odd numbers (Apply instant divisibility rules and rapid checksum validations Casting out 9s and 11s)"
          ],
          "answerIndex": 0,
          "explanation": "Modulo divisibility test matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the digital root of the product: 147 × 382?",
          "options": [
            "9 (Apply instant divisibility rules and rapid checksum validations Casting out 9s and 11s)",
            "5 (Apply instant divisibility rules and rapid checksum validations Casting out 9s and 11s)",
            "7 (Apply instant divisibility rules and rapid checksum validations Casting out 9s and 11s)",
            "3 (Apply instant divisibility rules and rapid checksum validations Casting out 9s and 11s)"
          ],
          "answerIndex": 3,
          "explanation": "Root(147) = 3; Root(382) = 4; 3 × 4 = 12 -> 3.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why can a digital root check produce a false positive (confirm an incorrect answer)?",
          "options": [
            "Because 9 is an odd number (Apply instant divisibility rules and rapid checksum validations Casting out 9s and 11s)",
            "Because modulo 9 is broken (Apply instant divisibility rules and rapid checksum validations Casting out 9s and 11s)",
            "Because transposition errors (e.g., writing 925 instead of 952)",
            "It never produces false positives (Apply instant divisibility rules and rapid checksum validations Casting out 9s and 11s)"
          ],
          "answerIndex": 2,
          "explanation": "Permutations of digits have identical digit sums; modulo 11 detects transpositions.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Is 7,953 divisible by 9?",
          "options": [
            "Yes, perfectly (Apply instant divisibility rules and rapid checksum validations Casting out 9s and 11s)",
            "Yes (Apply instant divisibility rules and rapid checksum validations Casting out 9s and 11s)",
            "It is divisible by 99 (Apply instant divisibility rules and rapid checksum validations Casting out 9s and 11s)",
            "It is prime (Apply instant divisibility rules and rapid checksum validations Casting out 9s and 11s)"
          ],
          "answerIndex": 1,
          "explanation": "Sum of digits is 24 -> 2+4=6 != 9, so it leaves remainder 6 mod 9.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 7, Lesson 4: Digital root of 78,453: 7+8+4+"
  },
  "mentalmath-u7-l5": {
    "id": "mentalmath-u7-l5",
    "unit": "mentalmath-u7",
    "level": "master",
    "objective": "Demonstrate comprehensive Master mental arithmetic synthesis by completing a 60-second high-velocity multi-operation sprint across mixed addition chains, fused multiplication, compound percentages, and modulo checksums.",
    "presentation": {
      "explanation": "In this Master Checkpoint for Unit 7, we synthesize all rapid calculation algorithms across a **60-Second Multi-Operation Grand Challenge**:\n\n1. The Grand Challenge Disciplines:\n   - **Chain Accumulators**: Left-to-right processing with compensation.\n   - **Cross-Operation Fusion**: Multiplying near bases and immediately adding/subtracting.\n   - **Percentage Reversal & Fractional Equivalents**: Using 1/8, 1/6, 1/5 and x% of y = y% of x.\n   - **Instant Checksums**: Casting out 9s and 11s.\n\n2. Synthesis Examples Under 5 Seconds Each:\n   - Problem 1: `385 + 245 - 190` -> `630 - 190 = 440`.\n   - Problem 2: `24 × 15 + 140` -> `360 + 140 = 500`.\n   - Problem 3: `16% of 75` -> `75% of 16 = 12`.\n   - Problem 4: `64² - 36²` -> `(64+36)(64-36) = 100 × 28 = 2,800`.\n   - Problem 5: `84 × 11 + 76` -> `924 + 76 = 1,000`.\n\n3. Cognitive Flow State:\n   - Breathe calmly, vocalize the running accumulator in your internal monologue, and trust your pattern-recognition heuristics.",
      "examples": [
        {
          "target": "84 × 11 + 76 = 1,000",
          "reading": "84 × 11 + 76 = 1,000",
          "translation": "84 × 11 = 924; 924 + 76 = 1,000."
        },
        {
          "target": "64² - 36² = 2,800",
          "reading": "64² - 36² = 2,800",
          "translation": "Difference of squares: (64+36)(64-36) = 100 × 28 = 2800."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Applying the mental arithmetic algorithm from Unit 7, Lesson 5, what is the exact result?",
          "options": [
            "5,000 (Demonstrate comprehensive Master mental arithmetic synthesis by completing a 60second highvelocity multioperation sprint across mixed addition chains)",
            "4,800 (Demonstrate comprehensive Master mental arithmetic synthesis by completing a 60second highvelocity multioperation sprint across mixed addition chains)",
            "5,200 (Demonstrate comprehensive Master mental arithmetic synthesis by completing a 60second highvelocity multioperation sprint across mixed addition chains)",
            "5,500 (Demonstrate comprehensive Master mental arithmetic synthesis by completing a 60second highvelocity multioperation sprint across mixed addition chains)"
          ],
          "answerIndex": 0,
          "explanation": "(75+25)(75-25) = 100 × 50 = 5000."
        },
        {
          "prompt": "Solve in under 3 seconds: 35 × 11 + 115",
          "options": [
            "500 (Demonstrate comprehensive Master mental arithmetic synthesis by completing a 60second highvelocity multioperation sprint across mixed addition chains)",
            "490 (Demonstrate comprehensive Master mental arithmetic synthesis by completing a 60second highvelocity multioperation sprint across mixed addition chains)",
            "510 (Demonstrate comprehensive Master mental arithmetic synthesis by completing a 60second highvelocity multioperation sprint across mixed addition chains)",
            "520 (Demonstrate comprehensive Master mental arithmetic synthesis by completing a 60second highvelocity multioperation sprint across mixed addition chains)"
          ],
          "answerIndex": 0,
          "explanation": "35 × 11 = 385; 385 + 115 = 500."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Applying the computational shortcut from Unit 7, Lesson 5: Foundational & Structural Mastery, what is the exact calculation step?",
          "options": [
            "284 (Demonstrate comprehensive Master mental arithmetic synthesis by completing a 60second highvelocity multioperation sprint across mixed addition chains)",
            "282 (Demonstrate comprehensive Master mental arithmetic synthesis by completing a 60second highvelocity multioperation sprint across mixed addition chains)",
            "286 (Demonstrate comprehensive Master mental arithmetic synthesis by completing a 60second highvelocity multioperation sprint across mixed addition chains)",
            "280 (Demonstrate comprehensive Master mental arithmetic synthesis by completing a 60second highvelocity multioperation sprint across mixed addition chains)"
          ],
          "answerIndex": 1,
          "explanation": "12 + 270 = 282."
        },
        {
          "prompt": "Solve mentally: 450 + 380 - 130 + 300",
          "options": [
            "1,010 (Demonstrate comprehensive Master mental arithmetic synthesis by completing a 60second highvelocity multioperation sprint across mixed addition chains)",
            "1,000 (Demonstrate comprehensive Master mental arithmetic synthesis by completing a 60second highvelocity multioperation sprint across mixed addition chains)",
            "1,020 (Demonstrate comprehensive Master mental arithmetic synthesis by completing a 60second highvelocity multioperation sprint across mixed addition chains)",
            "990 (Demonstrate comprehensive Master mental arithmetic synthesis by completing a 60second highvelocity multioperation sprint across mixed addition chains)"
          ],
          "answerIndex": 1,
          "explanation": "450 + 250 = 700; 700 + 300 = 1000."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Calculate the Grand Challenge problem: 45 × 12 + 35% of 200 - 110",
          "options": [
            "490 (Demonstrate comprehensive Master mental arithmetic synthesis by completing a 60second highvelocity multioperation sprint across mixed addition chains)",
            "520 (Demonstrate comprehensive Master mental arithmetic synthesis by completing a 60second highvelocity multioperation sprint across mixed addition chains)",
            "510 (Demonstrate comprehensive Master mental arithmetic synthesis by completing a 60second highvelocity multioperation sprint across mixed addition chains)",
            "500 (Demonstrate comprehensive Master mental arithmetic synthesis by completing a 60second highvelocity multioperation sprint across mixed addition chains)"
          ],
          "answerIndex": 3,
          "explanation": "540 + 70 - 110 = 500.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What core mental arithmetic competencies were mastered across Mental Math Unit 7?",
          "options": [
            "Using spreadsheet formulas only (Demonstrate comprehensive Master mental arithmetic synthesis by completing a 60second highvelocity multioperation sprint across mixed addition chains)",
            "Drawing pie charts only (Demonstrate comprehensive Master mental arithmetic synthesis by completing a 60second highvelocity multioperation sprint across mixed addition chains)",
            "Multi-step running accumulator chains, fused multiply-then-add shortcuts, percentage reversals & fractional equivalences (Demonstrate comprehensive Master mental arithmetic synthesis by completing a 60second highvelocity multioperation sprint across mixed addition chains)",
            "Basic multiplication tables up to 5 only (Demonstrate comprehensive Master mental arithmetic synthesis by completing a 60second highvelocity multioperation sprint across mixed addition chains)"
          ],
          "answerIndex": 2,
          "explanation": "Unit 7 comprehensive master combined-operation mental math synthesis.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the final frontier awaiting you in Unit 8 of Mental Math?",
          "options": [
            "Buying a scientific calculator (Demonstrate comprehensive Master mental arithmetic synthesis by completing a 60second highvelocity multioperation sprint across mixed addition chains)",
            "Large-Number Multiplication & Day-of-Week (Doomsday Rule)",
            "Counting on an abacus (Demonstrate comprehensive Master mental arithmetic synthesis by completing a 60second highvelocity multioperation sprint across mixed addition chains)",
            "Learning Roman numerals (Demonstrate comprehensive Master mental arithmetic synthesis by completing a 60second highvelocity multioperation sprint across mixed addition chains)"
          ],
          "answerIndex": 1,
          "explanation": "Unit 8 focuses on multi-digit large number multiplication and instant day-of-the-week calculation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Solve: 88 × 25 - 200",
          "options": [
            "2,000 (Demonstrate comprehensive Master mental arithmetic synthesis by completing a 60second highvelocity multioperation sprint across mixed addition chains)",
            "2,100 (Demonstrate comprehensive Master mental arithmetic synthesis by completing a 60second highvelocity multioperation sprint across mixed addition chains)",
            "2,200 (Demonstrate comprehensive Master mental arithmetic synthesis by completing a 60second highvelocity multioperation sprint across mixed addition chains)",
            "1,900 (Demonstrate comprehensive Master mental arithmetic synthesis by completing a 60second highvelocity multioperation sprint across mixed addition chains)"
          ],
          "answerIndex": 0,
          "explanation": "2200 - 200 = 2000.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 7, Lesson 5: 84 × 11 + 76 = 1,000"
  },
  "mentalmath-u8-l1": {
    "id": "mentalmath-u8-l1",
    "unit": "mentalmath-u8",
    "level": "master",
    "objective": "Execute general 2-digit by 2-digit and 3-digit by 3-digit mental cross-multiplication using the Vedic Urdhva Tiryagbhyam (Vertically and Crosswise) algorithm in under 5 seconds.",
    "presentation": {
      "explanation": "Welcome to Master Mental Math Unit 8: Large-Number Multiplication & Day-of-Week Calculation! The ultimate universal engine for multiplying ANY two numbers without scratch paper is the **Vedic Criss-Cross Method (Urdhva Tiryagbhyam)**:\n\n1. The 2×2 Criss-Cross Algorithm (`ab × cd`):\n   - **Step 1 (Units)**: Multiply units vertically: `b × d`. Write unit, carry tens (`c1`).\n   - **Step 2 (Cross)**: Multiply crosswise and sum: `(a × d) + (b × c) + c1`. Write unit, carry tens (`c2`).\n   - **Step 3 (Tens)**: Multiply tens vertically: `(a × c) + c2`.\n   - *Example: 34 × 78*:\n     - Step 1: `4 × 8 = 32` (End in `2`, carry `3`).\n     - Step 2: `(3 × 8) + (4 × 7) + 3 = 24 + 28 + 3 = 55` (Write `5`, carry `5`).\n     - Step 3: `(3 × 7) + 5 = 21 + 5 = 26`.\n     - Result = `2,652`! (Computed entirely in 3 seconds).\n\n2. The 3×3 Criss-Cross Architecture (`abc × def`):\n   - Pattern: 1. `c×f` -> 2. `(b×f + c×e)` -> 3. `(a×f + b×e + c×d)` -> 4. `(a×e + b×d)` -> 5. `a×d`.\n   - Symmetrical 5-stage expansion that scales to any arbitrary number length.",
      "examples": [
        {
          "target": "23 × 46 = 1,058",
          "reading": "23 × 46 = 1,058",
          "translation": "Step 1: 3×6=18 (8, carry 1); Step 2: (2×6)+(3×4)+1 = 12+12+1 = 25 (5, carry 2); Step 3: (2×4)+2 = 10 -> 1,058."
        },
        {
          "target": "62 × 35 = 2,170",
          "reading": "62 × 35 = 2,170",
          "translation": "Step 1: 2×5=10 (0, carry 1); Step 2: (6×5)+(2×3)+1 = 30+6+1 = 37 (7, carry 3); Step 3: (6×3)+3 = 21 -> 2,170."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Applying the mental arithmetic algorithm from Unit 8, Lesson 1, what is the exact result?",
          "options": [
            "2,226 (Execute general 2digit by 2digit and 3digit by 3digit mental crossmultiplication using the Vedic Urdhva Tiryagbhyam Vertically and Crosswise algorithm in under 5 seconds)",
            "2,246 (Execute general 2digit by 2digit and 3digit by 3digit mental crossmultiplication using the Vedic Urdhva Tiryagbhyam Vertically and Crosswise algorithm in under 5 seconds)",
            "2,216 (Execute general 2digit by 2digit and 3digit by 3digit mental crossmultiplication using the Vedic Urdhva Tiryagbhyam Vertically and Crosswise algorithm in under 5 seconds)",
            "2,236 (Execute general 2digit by 2digit and 3digit by 3digit mental crossmultiplication using the Vedic Urdhva Tiryagbhyam Vertically and Crosswise algorithm in under 5 seconds)"
          ],
          "answerIndex": 3,
          "explanation": "Units: 6; Cross: 23 (3, carry 2); Tens: 20+2=22 -> 2,236."
        },
        {
          "prompt": "In the criss-cross calculation of 71 × 34, what is the middle crosswise sum (before adding carry)?",
          "options": [
            "35 (Execute general 2digit by 2digit and 3digit by 3digit mental crossmultiplication using the Vedic Urdhva Tiryagbhyam Vertically and Crosswise algorithm in under 5 seconds)",
            "25 (Execute general 2digit by 2digit and 3digit by 3digit mental crossmultiplication using the Vedic Urdhva Tiryagbhyam Vertically and Crosswise algorithm in under 5 seconds)",
            "31 (Execute general 2digit by 2digit and 3digit by 3digit mental crossmultiplication using the Vedic Urdhva Tiryagbhyam Vertically and Crosswise algorithm in under 5 seconds)",
            "28 (Execute general 2digit by 2digit and 3digit by 3digit mental crossmultiplication using the Vedic Urdhva Tiryagbhyam Vertically and Crosswise algorithm in under 5 seconds)"
          ],
          "answerIndex": 2,
          "explanation": "(7 × 4) + (1 × 3) = 28 + 3 = 31."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Applying the computational shortcut from Unit 8, Lesson 1: Foundational & Structural Mastery, what is the exact calculation step?",
          "options": [
            "1,958 (Execute general 2digit by 2digit and 3digit by 3digit mental crossmultiplication using the Vedic Urdhva Tiryagbhyam Vertically and Crosswise algorithm in under 5 seconds)",
            "1,978 (Execute general 2digit by 2digit and 3digit by 3digit mental crossmultiplication using the Vedic Urdhva Tiryagbhyam Vertically and Crosswise algorithm in under 5 seconds)",
            "1,948 (Execute general 2digit by 2digit and 3digit by 3digit mental crossmultiplication using the Vedic Urdhva Tiryagbhyam Vertically and Crosswise algorithm in under 5 seconds)",
            "1,968 (Execute general 2digit by 2digit and 3digit by 3digit mental crossmultiplication using the Vedic Urdhva Tiryagbhyam Vertically and Crosswise algorithm in under 5 seconds)"
          ],
          "answerIndex": 3,
          "explanation": "2×4=8; 32+4=36 (carry 3); 16+3=19 -> 1,968."
        },
        {
          "prompt": "Calculate mentally: 51 × 63",
          "options": [
            "3,203 (Execute general 2digit by 2digit and 3digit by 3digit mental crossmultiplication using the Vedic Urdhva Tiryagbhyam Vertically and Crosswise algorithm in under 5 seconds)",
            "3,223 (Execute general 2digit by 2digit and 3digit by 3digit mental crossmultiplication using the Vedic Urdhva Tiryagbhyam Vertically and Crosswise algorithm in under 5 seconds)",
            "3,193 (Execute general 2digit by 2digit and 3digit by 3digit mental crossmultiplication using the Vedic Urdhva Tiryagbhyam Vertically and Crosswise algorithm in under 5 seconds)",
            "3,213 (Execute general 2digit by 2digit and 3digit by 3digit mental crossmultiplication using the Vedic Urdhva Tiryagbhyam Vertically and Crosswise algorithm in under 5 seconds)"
          ],
          "answerIndex": 3,
          "explanation": "1×3=3; 15+6=21 (carry 2); 30+2=32 -> 3,213."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the 3 steps of 2x2 Vedic cross-multiplication: Step 1, Step 2, Step 3:",
          "options": [
            "Step 1: Add all digits | Step 2: Divide by 2 | Step 3: Round down (Execute general 2digit by 2digit and 3digit by 3digit mental crossmultiplication using the Vedic Urdhva Tiryagbhyam Vertically and Crosswise algorithm in under 5 seconds)",
            "All steps require a calculator (Execute general 2digit by 2digit and 3digit by 3digit mental crossmultiplication using the Vedic Urdhva Tiryagbhyam Vertically and Crosswise algorithm in under 5 seconds)",
            "Step 1: Vertical units (Execute general 2digit by 2digit and 3digit by 3digit mental crossmultiplication using the Vedic Urdhva Tiryagbhyam Vertically and Crosswise algorithm in under 5 seconds)",
            "All steps are subtraction (Execute general 2digit by 2digit and 3digit by 3digit mental crossmultiplication using the Vedic Urdhva Tiryagbhyam Vertically and Crosswise algorithm in under 5 seconds)"
          ],
          "answerIndex": 2,
          "explanation": "Standard 2x2 Vedic multiplication sequence.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Calculate: 93 × 21",
          "options": [
            "1,943 (Execute general 2digit by 2digit and 3digit by 3digit mental crossmultiplication using the Vedic Urdhva Tiryagbhyam Vertically and Crosswise algorithm in under 5 seconds)",
            "1,953 (Execute general 2digit by 2digit and 3digit by 3digit mental crossmultiplication using the Vedic Urdhva Tiryagbhyam Vertically and Crosswise algorithm in under 5 seconds)",
            "1,933 (Execute general 2digit by 2digit and 3digit by 3digit mental crossmultiplication using the Vedic Urdhva Tiryagbhyam Vertically and Crosswise algorithm in under 5 seconds)",
            "1,963 (Execute general 2digit by 2digit and 3digit by 3digit mental crossmultiplication using the Vedic Urdhva Tiryagbhyam Vertically and Crosswise algorithm in under 5 seconds)"
          ],
          "answerIndex": 1,
          "explanation": "3; 9+6=15 (carry 1); 18+1=19 -> 1,953.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is the Vedic criss-cross method cognitively superior to standard grade-school long multiplication?",
          "options": [
            "It generates the final answer digits one by one from right to left with zero need to write down or store multiple rows of partial products in working memory (Execute general 2digit by 2digit and 3digit by 3digit mental crossmultiplication using the Vedic Urdhva Tiryagbhyam Vertically and Crosswise algorithm in under 5 seconds)",
            "It only works on prime numbers (Execute general 2digit by 2digit and 3digit by 3digit mental crossmultiplication using the Vedic Urdhva Tiryagbhyam Vertically and Crosswise algorithm in under 5 seconds)",
            "It turns multiplication into division (Execute general 2digit by 2digit and 3digit by 3digit mental crossmultiplication using the Vedic Urdhva Tiryagbhyam Vertically and Crosswise algorithm in under 5 seconds)",
            "It makes numbers smaller (Execute general 2digit by 2digit and 3digit by 3digit mental crossmultiplication using the Vedic Urdhva Tiryagbhyam Vertically and Crosswise algorithm in under 5 seconds)"
          ],
          "answerIndex": 0,
          "explanation": "Streaming single-pass digit generation eliminates partial product memory overload.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 74 × 12 = _______",
          "options": [
            "868 (Execute general 2digit by 2digit and 3digit by 3digit mental crossmultiplication using the Vedic Urdhva Tiryagbhyam Vertically and Crosswise algorithm in under 5 seconds)",
            "898 (Execute general 2digit by 2digit and 3digit by 3digit mental crossmultiplication using the Vedic Urdhva Tiryagbhyam Vertically and Crosswise algorithm in under 5 seconds)",
            "878 (Execute general 2digit by 2digit and 3digit by 3digit mental crossmultiplication using the Vedic Urdhva Tiryagbhyam Vertically and Crosswise algorithm in under 5 seconds)",
            "888 (Execute general 2digit by 2digit and 3digit by 3digit mental crossmultiplication using the Vedic Urdhva Tiryagbhyam Vertically and Crosswise algorithm in under 5 seconds)"
          ],
          "answerIndex": 3,
          "explanation": "74 × 12 = 888.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 8, Lesson 1: 23 × 46 = 1,058"
  },
  "mentalmath-u8-l2": {
    "id": "mentalmath-u8-l2",
    "unit": "mentalmath-u8",
    "level": "master",
    "objective": "Extract exact cube roots of any 6-digit perfect cube in under 1 second by exploiting the unique bijection of unit digits and memorizing 1³ through 9³.",
    "presentation": {
      "explanation": "One of the most dazzling feats in lightning mental calculation is the **Instant Cube Root Extraction (under 1 second)**:\n\n1. The Unique Last-Digit Cube Bijection:\n   - Notice that the cube of every single digit from `0` to `9` ends in a **completely unique last digit**:\n     - `1³ = 1` (ends in **1**)\n     - `2³ = 8` (ends in **8**)\n     - `3³ = 27` (ends in **7**)\n     - `4³ = 64` (ends in **4**)\n     - `5³ = 125` (ends in **5**)\n     - `6³ = 216` (ends in **6**)\n     - `7³ = 343` (ends in **3**)\n     - `8³ = 512` (ends in **2**)\n     - `9³ = 729` (ends in **9**)\n     - `10³ = 1,000` (ends in **0**)\n   - *The Pattern*: `1, 4, 5, 6, 9, 0` end in themselves! `2 <-> 8` and `3 <-> 7` are 10-complements!\n\n2. The 2-Step Extraction Protocol for 6-Digit Cubes:\n   - Problem: What is the cube root of `314,432`?\n     - **Step 1 (Tens digit)**: Look at the number before the comma (`314`). Find the largest cube $\\le 314$. Since $6^3 = 216 \\le 314 < 7^3 = 343$, the tens digit is **6**.\n     - **Step 2 (Units digit)**: Look at the very last digit (`2`). The only single-digit cube ending in 2 is $8^3 = 512$, so the units digit is **8**.\n     - **Answer: 68**! (Instant calculation in 0.5 seconds).",
      "examples": [
        {
          "target": "Cube root of 175,616: Thousands part = 175 (5³ = 125 <= 175 < 6³ = 216 -> Tens = 5); Ending digit = 6 (6³ = 216 -> Units = 6) -> Answer = 56.",
          "reading": "Cube root of 175,616 = 56",
          "translation": "Instant cube root extraction."
        },
        {
          "target": "Cube root of 912,673: Thousands part = 912 (9³ = 729 <= 912 < 10³ = 1000 -> Tens = 9); Ending digit = 3 (7³ = 343 -> Units = 7) -> Answer = 97.",
          "reading": "Cube root of 912,673 = 97",
          "translation": "Instant cube root extraction."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Applying the mental arithmetic algorithm from Unit 8, Lesson 2, what is the exact result?",
          "options": [
            "84 (Extract exact cube roots of any 6digit perfect cube in under 1 second by exploiting the unique bijection of unit digits and memorizing 1 through 9)",
            "94 (Extract exact cube roots of any 6digit perfect cube in under 1 second by exploiting the unique bijection of unit digits and memorizing 1 through 9)",
            "86 (Extract exact cube roots of any 6digit perfect cube in under 1 second by exploiting the unique bijection of unit digits and memorizing 1 through 9)",
            "74 (Extract exact cube roots of any 6digit perfect cube in under 1 second by exploiting the unique bijection of unit digits and memorizing 1 through 9)"
          ],
          "answerIndex": 0,
          "explanation": "Thousands chunk: 592 -> 8; Last digit: 4 -> 4 -> 84."
        },
        {
          "prompt": "What is the cube root of 389,017?",
          "options": [
            "73 (Extract exact cube roots of any 6digit perfect cube in under 1 second by exploiting the unique bijection of unit digits and memorizing 1 through 9)",
            "77 (Extract exact cube roots of any 6digit perfect cube in under 1 second by exploiting the unique bijection of unit digits and memorizing 1 through 9)",
            "83 (Extract exact cube roots of any 6digit perfect cube in under 1 second by exploiting the unique bijection of unit digits and memorizing 1 through 9)",
            "63 (Extract exact cube roots of any 6digit perfect cube in under 1 second by exploiting the unique bijection of unit digits and memorizing 1 through 9)"
          ],
          "answerIndex": 0,
          "explanation": "389 -> 7; Ending 7 maps to complement 3 -> 73."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Applying the computational shortcut from Unit 8, Lesson 2: Foundational & Structural Mastery, what is the exact calculation step?",
          "options": [
            "43 (Extract exact cube roots of any 6digit perfect cube in under 1 second by exploiting the unique bijection of unit digits and memorizing 1 through 9)",
            "57 (Extract exact cube roots of any 6digit perfect cube in under 1 second by exploiting the unique bijection of unit digits and memorizing 1 through 9)",
            "47 (Extract exact cube roots of any 6digit perfect cube in under 1 second by exploiting the unique bijection of unit digits and memorizing 1 through 9)",
            "37 (Extract exact cube roots of any 6digit perfect cube in under 1 second by exploiting the unique bijection of unit digits and memorizing 1 through 9)"
          ],
          "answerIndex": 2,
          "explanation": "103 -> 4; Ending 3 maps to 7 -> 47."
        },
        {
          "prompt": "Extract the cube root of 704,969:",
          "options": [
            "79 (Extract exact cube roots of any 6digit perfect cube in under 1 second by exploiting the unique bijection of unit digits and memorizing 1 through 9)",
            "99 (Extract exact cube roots of any 6digit perfect cube in under 1 second by exploiting the unique bijection of unit digits and memorizing 1 through 9)",
            "86 (Extract exact cube roots of any 6digit perfect cube in under 1 second by exploiting the unique bijection of unit digits and memorizing 1 through 9)",
            "89 (Extract exact cube roots of any 6digit perfect cube in under 1 second by exploiting the unique bijection of unit digits and memorizing 1 through 9)"
          ],
          "answerIndex": 3,
          "explanation": "704 -> 8; Ending 9 -> 9 -> 89."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the last digit of a cube to its unique single-digit root: Ending in 8, Ending in 7, Ending in 2, Ending in 3:",
          "options": [
            "All roots are 0 (Extract exact cube roots of any 6digit perfect cube in under 1 second by exploiting the unique bijection of unit digits and memorizing 1 through 9)",
            "Ending in 8: Root 2 | Ending in 7: Root 3 | Ending in 2: Root 8 | Ending in 3: Root 7 (Extract exact cube roots of any 6digit perfect cube in under 1 second by exploiting the unique bijection of unit digits and memorizing 1 through 9)",
            "All roots are 1 (Extract exact cube roots of any 6digit perfect cube in under 1 second by exploiting the unique bijection of unit digits and memorizing 1 through 9)",
            "All roots are 5 (Extract exact cube roots of any 6digit perfect cube in under 1 second by exploiting the unique bijection of unit digits and memorizing 1 through 9)"
          ],
          "answerIndex": 1,
          "explanation": "10-complement pairing for cubes (2<->8, 3<->7).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Extract the cube root of 21,952:",
          "options": [
            "28 (Extract exact cube roots of any 6digit perfect cube in under 1 second by exploiting the unique bijection of unit digits and memorizing 1 through 9)",
            "38 (Extract exact cube roots of any 6digit perfect cube in under 1 second by exploiting the unique bijection of unit digits and memorizing 1 through 9)",
            "18 (Extract exact cube roots of any 6digit perfect cube in under 1 second by exploiting the unique bijection of unit digits and memorizing 1 through 9)",
            "22 (Extract exact cube roots of any 6digit perfect cube in under 1 second by exploiting the unique bijection of unit digits and memorizing 1 through 9)"
          ],
          "answerIndex": 0,
          "explanation": "21 -> 2; Ending 2 maps to 8 -> 28.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is exact square root extraction of random numbers more difficult than cube root extraction?",
          "options": [
            "Because squares are 2D shapes (Extract exact cube roots of any 6digit perfect cube in under 1 second by exploiting the unique bijection of unit digits and memorizing 1 through 9)",
            "Because squares are larger than cubes (Extract exact cube roots of any 6digit perfect cube in under 1 second by exploiting the unique bijection of unit digits and memorizing 1 through 9)",
            "It is not more difficult (Extract exact cube roots of any 6digit perfect cube in under 1 second by exploiting the unique bijection of unit digits and memorizing 1 through 9)",
            "Because square digits repeat in pairs (Extract exact cube roots of any 6digit perfect cube in under 1 second by exploiting the unique bijection of unit digits and memorizing 1 through 9)"
          ],
          "answerIndex": 3,
          "explanation": "Squares have non-unique endings (1,4,5,6,9,0), while cubes have unique 1-to-1 bijective endings.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the cube root of 681,472?",
          "options": [
            "78 (Extract exact cube roots of any 6digit perfect cube in under 1 second by exploiting the unique bijection of unit digits and memorizing 1 through 9)",
            "98 (Extract exact cube roots of any 6digit perfect cube in under 1 second by exploiting the unique bijection of unit digits and memorizing 1 through 9)",
            "88 (Extract exact cube roots of any 6digit perfect cube in under 1 second by exploiting the unique bijection of unit digits and memorizing 1 through 9)",
            "82 (Extract exact cube roots of any 6digit perfect cube in under 1 second by exploiting the unique bijection of unit digits and memorizing 1 through 9)"
          ],
          "answerIndex": 2,
          "explanation": "681 -> 8; Ending 2 -> 8 -> 88.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 8, Lesson 2: Cube root of 175,616: Thousand"
  },
  "mentalmath-u8-l3": {
    "id": "mentalmath-u8-l3",
    "unit": "mentalmath-u8",
    "level": "master",
    "objective": "Apply John Conway's Doomsday Algorithm to calculate the exact day of the week for ANY calendar date in modern history in under 5 seconds purely in working memory.",
    "presentation": {
      "explanation": "The legendary mathematician John Horton Conway created the **Doomsday Algorithm** to compute the day of the week for any date in seconds:\n\n1. The Day-Number Mapping:\n   - `0 = Sunday`, `1 = Monday`, `2 = Tuesday`, `3 = Wednesday`, `4 = Thursday`, `5 = Friday`, `6 = Saturday`.\n\n2. The Century Anchor Days:\n   - `1800s`: Friday (`5`)\n   - `1900s`: Wednesday (`3`)\n   - `2000s`: Tuesday (`2`)\n   - `2100s`: Sunday (`0`)\n   - (Cycles: 5, 3, 2, 0 every 400 years).\n\n3. The Year Doomsday Formula (Odd+11 Method or Standard):\n   - Let $Y$ be the last two digits of the year (e.g., for 2024, $Y = 24$):\n     - Formula: $D_{year} = (Y + \\lfloor Y/4 \\rfloor + \\text{Anchor}) \\pmod 7$.\n     - For 2024: $(24 + 6 + 2) = 32 = 4 \\pmod 7$ -> **Doomsday of 2024 is Thursday (4)**.\n\n4. The Memorized Doomsday Anchor Dates (Always fall on Doomsday!):\n   - **Even Months**: `4/4`, `6/6`, `8/8`, `10/10`, `12/12` (Double dates!).\n   - **Odd Months (9 to 5 at the 7-11)**: `5/9`, `9/5`, `7/11`, `11/7`.\n   - **Early Months**: `3/14` (Pi Day) or `last day of Feb` (`2/28` or `2/29` in leap years), and `1/3` (common year) / `1/4` (leap year).\n\n5. Finding the Target Date:\n   - Target: *July 20, 2024*:\n     - July's Doomsday anchor is `7/11` (which is Thursday, 4).\n     - `July 20 = July 11 + 9 days = Thursday + 9 days = Thursday + 2 days = Saturday (6)`!\n     - Exact date found in 3 seconds!",
      "examples": [
        {
          "target": "October 31, 2024: 2024 Doomsday = Thursday (4); October Doomsday = 10/10. 31 - 10 = 21 days = 0 (mod 7) -> October 31 is Thursday!",
          "reading": "Doomsday calculation for Oct 31, 2024",
          "translation": "Calendar math."
        },
        {
          "target": "July 4, 1776: 1700s Anchor = Sunday (0); 76 + 19 = 95 = 4 (mod 7) -> Doomsday = Thursday; July 11 = Thursday -> July 4 = Thursday - 7 = Thursday!",
          "reading": "Historical date: US Independence Day 1776",
          "translation": "July 4, 1776 was a Thursday."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Applying the mental arithmetic algorithm from Unit 8, Lesson 3, what is the exact result?",
          "options": [
            "Wednesday (Apply John Conways Doomsday Algorithm to calculate the exact day of the week for ANY calendar date in modern history in under 5 seconds purely in working memory)",
            "Friday (Apply John Conways Doomsday Algorithm to calculate the exact day of the week for ANY calendar date in modern history in under 5 seconds purely in working memory)",
            "Tuesday (Apply John Conways Doomsday Algorithm to calculate the exact day of the week for ANY calendar date in modern history in under 5 seconds purely in working memory)",
            "Thursday (Apply John Conways Doomsday Algorithm to calculate the exact day of the week for ANY calendar date in modern history in under 5 seconds purely in working memory)"
          ],
          "answerIndex": 3,
          "explanation": "24 + 6 + 2 = 32 = 4 (Thursday)."
        },
        {
          "prompt": "Using the Doomsday algorithm, what day of the week was Christmas Day (December 25) in 2024?",
          "options": [
            "Thursday (Apply John Conways Doomsday Algorithm to calculate the exact day of the week for ANY calendar date in modern history in under 5 seconds purely in working memory)",
            "Tuesday (Apply John Conways Doomsday Algorithm to calculate the exact day of the week for ANY calendar date in modern history in under 5 seconds purely in working memory)",
            "Friday (Apply John Conways Doomsday Algorithm to calculate the exact day of the week for ANY calendar date in modern history in under 5 seconds purely in working memory)",
            "Wednesday (Apply John Conways Doomsday Algorithm to calculate the exact day of the week for ANY calendar date in modern history in under 5 seconds purely in working memory)"
          ],
          "answerIndex": 3,
          "explanation": "12/12 = Thursday (4); 25 is 13 days later (+6 mod 7) -> 4 + 6 = 10 = 3 (Wednesday)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Applying the computational shortcut from Unit 8, Lesson 3: Foundational & Structural Mastery, what is the exact calculation step?",
          "options": [
            "August 8 (Apply John Conways Doomsday Algorithm to calculate the exact day of the week for ANY calendar date in modern history in under 5 seconds purely in working memory)",
            "August 15 (Apply John Conways Doomsday Algorithm to calculate the exact day of the week for ANY calendar date in modern history in under 5 seconds purely in working memory)",
            "July 1 (Apply John Conways Doomsday Algorithm to calculate the exact day of the week for ANY calendar date in modern history in under 5 seconds purely in working memory)",
            "October 25 (Apply John Conways Doomsday Algorithm to calculate the exact day of the week for ANY calendar date in modern history in under 5 seconds purely in working memory)"
          ],
          "answerIndex": 0,
          "explanation": "8/8 is an even-month double-date Doomsday anchor."
        },
        {
          "prompt": "What day of the week was June 6 (6/6), 2024?",
          "options": [
            "Thursday (Apply John Conways Doomsday Algorithm to calculate the exact day of the week for ANY calendar date in modern history in under 5 seconds purely in working memory)",
            "Friday (Apply John Conways Doomsday Algorithm to calculate the exact day of the week for ANY calendar date in modern history in under 5 seconds purely in working memory)",
            "Wednesday (Apply John Conways Doomsday Algorithm to calculate the exact day of the week for ANY calendar date in modern history in under 5 seconds purely in working memory)",
            "Saturday (Apply John Conways Doomsday Algorithm to calculate the exact day of the week for ANY calendar date in modern history in under 5 seconds purely in working memory)"
          ],
          "answerIndex": 0,
          "explanation": "6/6 is a Doomsday date, identical to the year's Doomsday (Thursday)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the Doomsday anchor pairs: 5/9, 7/11, 4/4, 12/12:",
          "options": [
            "5/9: 9-to-5 pair with 9/5 | 7/11: 7-11 pair with 11/7 | 4/4: Double date | 12/12: Double date (Apply John Conways Doomsday Algorithm to calculate the exact day of the week for ANY calendar date in modern history in under 5 seconds purely in working memory)",
            "All are weekend dates (Apply John Conways Doomsday Algorithm to calculate the exact day of the week for ANY calendar date in modern history in under 5 seconds purely in working memory)",
            "All are holidays (Apply John Conways Doomsday Algorithm to calculate the exact day of the week for ANY calendar date in modern history in under 5 seconds purely in working memory)",
            "All are prime numbers (Apply John Conways Doomsday Algorithm to calculate the exact day of the week for ANY calendar date in modern history in under 5 seconds purely in working memory)"
          ],
          "answerIndex": 0,
          "explanation": "Doomsday anchor memory system matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What day of the week will October 10 (10/10), 2025 fall on, given that 2025 Doomsday is Friday (5)?",
          "options": [
            "Thursday (Apply John Conways Doomsday Algorithm to calculate the exact day of the week for ANY calendar date in modern history in under 5 seconds purely in working memory)",
            "Sunday (Apply John Conways Doomsday Algorithm to calculate the exact day of the week for ANY calendar date in modern history in under 5 seconds purely in working memory)",
            "Saturday (Apply John Conways Doomsday Algorithm to calculate the exact day of the week for ANY calendar date in modern history in under 5 seconds purely in working memory)",
            "Friday (Apply John Conways Doomsday Algorithm to calculate the exact day of the week for ANY calendar date in modern history in under 5 seconds purely in working memory)"
          ],
          "answerIndex": 3,
          "explanation": "10/10 is a Doomsday anchor -> Friday.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is the Doomsday Algorithm considered the most elegant calendar calculation method ever developed?",
          "options": [
            "Because it was invented by Isaac Newton (Apply John Conways Doomsday Algorithm to calculate the exact day of the week for ANY calendar date in modern history in under 5 seconds purely in working memory)",
            "Because it works only on leap years (Apply John Conways Doomsday Algorithm to calculate the exact day of the week for ANY calendar date in modern history in under 5 seconds purely in working memory)",
            "Because by establishing a single Doomsday for each year, 12 easy-to-remember dates across all 12 months immediately share that exact same day of the week, reducing calendar calculation to simple mod-7 subtraction (Apply John Conways Doomsday Algorithm to calculate the exact day of the week for ANY calendar date in modern history in under 5 seconds purely in working memory)",
            "Because it predicts the end of the world (Apply John Conways Doomsday Algorithm to calculate the exact day of the week for ANY calendar date in modern history in under 5 seconds purely in working memory)"
          ],
          "answerIndex": 2,
          "explanation": "12 shared anchor dates eliminate complex multi-month offset tables.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: '0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = _______.'",
          "options": [
            "Doomsday (Apply John Conways Doomsday Algorithm to calculate the exact day of the week for ANY calendar date in modern history in under 5 seconds purely in working memory)",
            "Saturday (Apply John Conways Doomsday Algorithm to calculate the exact day of the week for ANY calendar date in modern history in under 5 seconds purely in working memory)",
            "Weekend (Apply John Conways Doomsday Algorithm to calculate the exact day of the week for ANY calendar date in modern history in under 5 seconds purely in working memory)",
            "Sunday again (Apply John Conways Doomsday Algorithm to calculate the exact day of the week for ANY calendar date in modern history in under 5 seconds purely in working memory)"
          ],
          "answerIndex": 1,
          "explanation": "6 = Saturday in standard mod-7 day numbering.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 8, Lesson 3: October 31, 2024: 2024 Doomsda"
  },
  "mentalmath-u8-l4": {
    "id": "mentalmath-u8-l4",
    "unit": "mentalmath-u8",
    "level": "master",
    "objective": "Solve complex Fermi Problems and large-scale order-of-magnitude estimation challenges using logarithmic dimensional decomposition and power-of-10 bounds.",
    "presentation": {
      "explanation": "In engineering, Wall Street hedge funds, and executive boardrooms, leaders must estimate immense unknown quantities without data: **Fermi Estimation**:\n\n1. The Fermi Principle (Enrico Fermi Framework):\n   - When estimating a vast unknown $X$, decompose it into a chain of 4–5 independent sub-factors: $X = A \\times B \\times C \\times D$.\n   - Individual overestimates and underestimates naturally cancel each other out in the geometric mean, producing startlingly accurate order-of-magnitude results.\n\n2. Classic Case Study: How many piano tuners operate in Chicago?\n   - Factor 1: Population of Chicago $\\approx 3,000,000$ (3 million).\n   - Factor 2: People per household $\\approx 3 \\rightarrow 1,000,000$ households.\n   - Factor 3: Percentage with a piano $\\approx 10\\% \\rightarrow 100,000$ pianos.\n   - Factor 4: Tuning frequency $\\approx 1\\text{ tuning/year} \\rightarrow 100,000\\text{ tunings/year}$.\n   - Factor 5: Tuner capacity $\\approx 4\\text{ pianos/day} \\times 250\\text{ working days} = 1,000\\text{ tunings/tuner/year}$.\n   - **Calculation**: $100,000 / 1,000 = 100\\text{ piano tuners}$! (Actual census listings: $\\approx 80-120$).\n\n3. Power-of-10 (Scientific Notation) Chaining:\n   - Round every factor to its nearest base $\\times 10^k$:\n     - $3 \\times 10^6 / 3 = 10^6$; $\\times 10^{-1} = 10^5$; $/ 10^3 = 10^2 = 100$.",
      "examples": [
        {
          "target": "Estimate: Daily coffee cups consumed worldwide: 8B people * 50% adult * 50% coffee drinkers * 2 cups/day = 4 Billion cups/day.",
          "reading": "Fermi estimate for global daily coffee consumption",
          "translation": "Order-of-magnitude decomposition."
        },
        {
          "target": "Estimate: Seconds in a century: 3.15 * 10^7 seconds/year * 100 years = ~3.15 Billion seconds (pi * 10^7 trick).",
          "reading": "Pi * 10^7 seconds per year",
          "translation": "Classic physics rule of thumb."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Applying the mental arithmetic algorithm from Unit 8, Lesson 4, what is the exact result?",
          "options": [
            "Because it uses quantum mechanics (Solve complex Fermi Problems and largescale orderofmagnitude estimation challenges using logarithmic dimensional decomposition and powerof10 bounds)",
            "Because independent errors in sub-estimates tend to be log-normally distributed, causing multiplicative overestimates and underestimates to cancel each other out (Solve complex Fermi Problems and largescale orderofmagnitude estimation challenges using logarithmic dimensional decomposition and powerof10 bounds)",
            "Because calculators are used (Solve complex Fermi Problems and largescale orderofmagnitude estimation challenges using logarithmic dimensional decomposition and powerof10 bounds)",
            "Because all estimates are exactly correct (Solve complex Fermi Problems and largescale orderofmagnitude estimation challenges using logarithmic dimensional decomposition and powerof10 bounds)"
          ],
          "answerIndex": 1,
          "explanation": "Independent multiplicative errors cancel across the geometric mean."
        },
        {
          "prompt": "Approximately how many seconds are in one calendar year using the famous physicist's rule of thumb?",
          "options": [
            "Approximately π × 10⁷ seconds (Solve complex Fermi Problems and largescale orderofmagnitude estimation challenges using logarithmic dimensional decomposition and powerof10 bounds)",
            "500 million seconds (Solve complex Fermi Problems and largescale orderofmagnitude estimation challenges using logarithmic dimensional decomposition and powerof10 bounds)",
            "1 billion seconds (Solve complex Fermi Problems and largescale orderofmagnitude estimation challenges using logarithmic dimensional decomposition and powerof10 bounds)",
            "1 million seconds (Solve complex Fermi Problems and largescale orderofmagnitude estimation challenges using logarithmic dimensional decomposition and powerof10 bounds)"
          ],
          "answerIndex": 0,
          "explanation": "365.25 × 24 × 3600 = 31,557,600 ≈ π × 10⁷."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Applying the computational shortcut from Unit 8, Lesson 4: Foundational & Structural Mastery, what is the exact calculation step?",
          "options": [
            "Approximately 80,000 to 120,000 flights per day (Solve complex Fermi Problems and largescale orderofmagnitude estimation challenges using logarithmic dimensional decomposition and powerof10 bounds)",
            "500 flights per day (Solve complex Fermi Problems and largescale orderofmagnitude estimation challenges using logarithmic dimensional decomposition and powerof10 bounds)",
            "5,000 flights per day (Solve complex Fermi Problems and largescale orderofmagnitude estimation challenges using logarithmic dimensional decomposition and powerof10 bounds)",
            "10 million flights per day (Solve complex Fermi Problems and largescale orderofmagnitude estimation challenges using logarithmic dimensional decomposition and powerof10 bounds)"
          ],
          "answerIndex": 0,
          "explanation": "Decomposing passenger trips yields ~100,000 daily commercial flights."
        },
        {
          "prompt": "What is the first step in solving ANY Fermi problem?",
          "options": [
            "Define the target unit clearly and break it down into a product of fundamental rate and ratio factors (Solve complex Fermi Problems and largescale orderofmagnitude estimation challenges using logarithmic dimensional decomposition and powerof10 bounds)",
            "Give up (Solve complex Fermi Problems and largescale orderofmagnitude estimation challenges using logarithmic dimensional decomposition and powerof10 bounds)",
            "Guess a random large number (Solve complex Fermi Problems and largescale orderofmagnitude estimation challenges using logarithmic dimensional decomposition and powerof10 bounds)",
            "Search the internet (Solve complex Fermi Problems and largescale orderofmagnitude estimation challenges using logarithmic dimensional decomposition and powerof10 bounds)"
          ],
          "answerIndex": 0,
          "explanation": "Defining target units and dimensional factor chains is step 1."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the Fermi estimation factors for estimating annual gasoline consumption in a city of 1 million cars: Number of cars, Miles driven/year, Miles per gallon, Total gallons:",
          "options": [
            "All numbers are infinite (Solve complex Fermi Problems and largescale orderofmagnitude estimation challenges using logarithmic dimensional decomposition and powerof10 bounds)",
            "All numbers are 1 (Solve complex Fermi Problems and largescale orderofmagnitude estimation challenges using logarithmic dimensional decomposition and powerof10 bounds)",
            "Requires no math (Solve complex Fermi Problems and largescale orderofmagnitude estimation challenges using logarithmic dimensional decomposition and powerof10 bounds)",
            "Cars: 10⁶ | Miles/year: 10⁴ (Solve complex Fermi Problems and largescale orderofmagnitude estimation challenges using logarithmic dimensional decomposition and powerof10 bounds)"
          ],
          "answerIndex": 3,
          "explanation": "Dimensional estimation chaining.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why do tech giants (Google, Microsoft) and management consultancies (McKinsey, BCG) ask Fermi problems during interviews?",
          "options": [
            "To test typing speed (Solve complex Fermi Problems and largescale orderofmagnitude estimation challenges using logarithmic dimensional decomposition and powerof10 bounds)",
            "To check if the candidate has memorized census data (Solve complex Fermi Problems and largescale orderofmagnitude estimation challenges using logarithmic dimensional decomposition and powerof10 bounds)",
            "To evaluate structured algorithmic thinking, comfort with numerical ambiguity, and mental mathematical composure under pressure (Solve complex Fermi Problems and largescale orderofmagnitude estimation challenges using logarithmic dimensional decomposition and powerof10 bounds)",
            "To waste time (Solve complex Fermi Problems and largescale orderofmagnitude estimation challenges using logarithmic dimensional decomposition and powerof10 bounds)"
          ],
          "answerIndex": 2,
          "explanation": "Fermi questions test structured problem-solving under ambiguity.",
          "type": "multiple-choice"
        },
        {
          "prompt": "How many minutes are in one full 365-day year?",
          "options": [
            "100,000 minutes (Solve complex Fermi Problems and largescale orderofmagnitude estimation challenges using logarithmic dimensional decomposition and powerof10 bounds)",
            "525,600 minutes (Solve complex Fermi Problems and largescale orderofmagnitude estimation challenges using logarithmic dimensional decomposition and powerof10 bounds)",
            "1,000,000 minutes (Solve complex Fermi Problems and largescale orderofmagnitude estimation challenges using logarithmic dimensional decomposition and powerof10 bounds)",
            "250,000 minutes (Solve complex Fermi Problems and largescale orderofmagnitude estimation challenges using logarithmic dimensional decomposition and powerof10 bounds)"
          ],
          "answerIndex": 1,
          "explanation": "365 × 24 × 60 = 525,600 minutes.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'A Fermi problem replaces unknown data with _______.'",
          "options": [
            "structured physical bounds and geometric estimation (Solve complex Fermi Problems and largescale orderofmagnitude estimation challenges using logarithmic dimensional decomposition and powerof10 bounds)",
            "pure fantasy (Solve complex Fermi Problems and largescale orderofmagnitude estimation challenges using logarithmic dimensional decomposition and powerof10 bounds)",
            "computer simulations (Solve complex Fermi Problems and largescale orderofmagnitude estimation challenges using logarithmic dimensional decomposition and powerof10 bounds)",
            "blind guessing (Solve complex Fermi Problems and largescale orderofmagnitude estimation challenges using logarithmic dimensional decomposition and powerof10 bounds)"
          ],
          "answerIndex": 0,
          "explanation": "Structured physical bounds and geometric reasoning.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 8, Lesson 4: Estimate: Daily coffee cups co"
  },
  "mentalmath-u8-l5": {
    "id": "mentalmath-u8-l5",
    "unit": "mentalmath-u8",
    "level": "master",
    "objective": "Demonstrate complete Master Savant mental arithmetic fluency across all 8 units by completing the 10-problem Grand Finale Sprint: 2x2 cross-multiplication, 6-digit cube root, Doomsday calculation, running chains, and percentage reversals in under 90 seconds.",
    "presentation": {
      "explanation": "Congratulations! You have arrived at the **Final Master Capstone of the FEARN Mental Math Curriculum**:\n\n1. The 10-Problem Savant Capstone Suite:\n   - **Problem 1 (Vedic Cross-Multiplication)**: `47 × 36`\n     - $7 \\times 6 = 42$ ($2$, carry $4$). $(4 \\times 6) + (7 \\times 3) + 4 = 24 + 21 + 4 = 49$ ($9$, carry $4$). $(4 \\times 3) + 4 = 16$ $\\rightarrow$ **1,692**.\n   - **Problem 2 (Instant Cube Root)**: $\\sqrt[3]{493,039}$\n     - Thousands: $493$ ($7^3 = 343 \\le 493 < 8^3 = 512 \\rightarrow 7$). Last digit: $9 \\rightarrow 9$ $\\rightarrow$ **79**.\n   - **Problem 3 (Doomsday Calendar)**: What day of the week is *July 11, 2024*?\n     - $7/11$ is a Doomsday date; 2024 Doomsday is Thursday $\\rightarrow$ **Thursday**.\n   - **Problem 4 (Difference of Squares)**: `83 × 77`\n     - $80^2 - 3^2 = 6400 - 9 = $ **6,391**.\n   - **Problem 5 (Percentage Reversal)**: `32% of 75`\n     - $75\\% \\text{ of } 32 = \\frac{3}{4} \\times 32 = $ **24**.\n   - **Problem 6 (Rapid Chain Accumulator)**: `640 + 285 - 195 + 370`\n     - $640 + 90 + 370 = 730 + 370 = $ **1,100**.\n   - **Problem 7 (Rule of 72 Doubling)**: At 8% annual return, how long to double?\n     - $72 / 8 = $ **9 years**.\n   - **Problem 8 (Modulo 9 Digital Root)**: Digital root of `84,591`?\n     - Cast $9$, cast $8+1$, remaining $4+5 = 9 \\rightarrow $ **0/9**.\n   - **Problem 9 (Multiplication by 11)**: `68 × 11`\n     - $6\\_(6+8)\\_8 = 6\\_(14)\\_8 = $ **748**.\n   - **Problem 10 (Seconds in a Year)**: Physicist's rule of thumb?\n     - $\\approx \\pi \\times 10^7 \\approx $ **31.5 Million seconds**.\n\n2. The Master Mentalist Operating State:\n   - You possess permanent, internalized arithmetic reflexes for life.",
      "examples": [
        {
          "target": "Full Capstone Mastery: 10 diverse problems solved in under 90 seconds purely in working memory.",
          "reading": "Mental Math Curriculum Completion",
          "translation": "Savant-tier mental arithmetic certification."
        },
        {
          "target": "47 × 36 = 1,692 | cbrt(493,039) = 79 | Doomsday 7/11/24 = Thursday | 83 × 77 = 6,391.",
          "reading": "Capstone Problem Results",
          "translation": "Master verification suite."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Applying the mental arithmetic algorithm from Unit 8, Lesson 5, what is the exact result?",
          "options": [
            "1,692 (Demonstrate complete Master Savant mental arithmetic fluency across all 8 units by completing the 10problem Grand Finale Sprint)",
            "1,682 (Demonstrate complete Master Savant mental arithmetic fluency across all 8 units by completing the 10problem Grand Finale Sprint)",
            "1,702 (Demonstrate complete Master Savant mental arithmetic fluency across all 8 units by completing the 10problem Grand Finale Sprint)",
            "1,672 (Demonstrate complete Master Savant mental arithmetic fluency across all 8 units by completing the 10problem Grand Finale Sprint)"
          ],
          "answerIndex": 0,
          "explanation": "47 × 36 = 1,692."
        },
        {
          "prompt": "Solve Capstone Problem 2: Extract the cube root of 493,039 in under 1 second:",
          "options": [
            "79 (Demonstrate complete Master Savant mental arithmetic fluency across all 8 units by completing the 10problem Grand Finale Sprint)",
            "71 (Demonstrate complete Master Savant mental arithmetic fluency across all 8 units by completing the 10problem Grand Finale Sprint)",
            "89 (Demonstrate complete Master Savant mental arithmetic fluency across all 8 units by completing the 10problem Grand Finale Sprint)",
            "69 (Demonstrate complete Master Savant mental arithmetic fluency across all 8 units by completing the 10problem Grand Finale Sprint)"
          ],
          "answerIndex": 0,
          "explanation": "Thousands chunk = 7; Last digit = 9 -> 79."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Applying the computational shortcut from Unit 8, Lesson 5: Foundational & Structural Mastery, what is the exact calculation step?",
          "options": [
            "6,401 (Demonstrate complete Master Savant mental arithmetic fluency across all 8 units by completing the 10problem Grand Finale Sprint)",
            "6,391 (Demonstrate complete Master Savant mental arithmetic fluency across all 8 units by completing the 10problem Grand Finale Sprint)",
            "6,371 (Demonstrate complete Master Savant mental arithmetic fluency across all 8 units by completing the 10problem Grand Finale Sprint)",
            "6,381 (Demonstrate complete Master Savant mental arithmetic fluency across all 8 units by completing the 10problem Grand Finale Sprint)"
          ],
          "answerIndex": 1,
          "explanation": "80² - 3² = 6,391."
        },
        {
          "prompt": "Solve Capstone Problem 5: Compute 32% of 75 using percentage reversal:",
          "options": [
            "26 (Demonstrate complete Master Savant mental arithmetic fluency across all 8 units by completing the 10problem Grand Finale Sprint)",
            "24 (Demonstrate complete Master Savant mental arithmetic fluency across all 8 units by completing the 10problem Grand Finale Sprint)",
            "28 (Demonstrate complete Master Savant mental arithmetic fluency across all 8 units by completing the 10problem Grand Finale Sprint)",
            "22 (Demonstrate complete Master Savant mental arithmetic fluency across all 8 units by completing the 10problem Grand Finale Sprint)"
          ],
          "answerIndex": 1,
          "explanation": "75% of 32 = 24."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What core competencies were mastered across the ENTIRE 40-Lesson FEARN Mental Math Curriculum?",
          "options": [
            "Memorizing the multiplication table up to 10 only (Demonstrate complete Master Savant mental arithmetic fluency across all 8 units by completing the 10problem Grand Finale Sprint)",
            "Using a solar calculator only (Demonstrate complete Master Savant mental arithmetic fluency across all 8 units by completing the 10problem Grand Finale Sprint)",
            "Left-to-right addition/subtraction chains, complement math, Vedic shortcuts (Demonstrate complete Master Savant mental arithmetic fluency across all 8 units by completing the 10problem Grand Finale Sprint)",
            "Drawing math diagrams with a ruler only (Demonstrate complete Master Savant mental arithmetic fluency across all 8 units by completing the 10problem Grand Finale Sprint)"
          ],
          "answerIndex": 2,
          "explanation": "Comprehensive 40-lesson Mental Math mastery certification.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Solve Capstone Problem 9: Calculate 68 × 11 mentally:",
          "options": [
            "738 (Demonstrate complete Master Savant mental arithmetic fluency across all 8 units by completing the 10problem Grand Finale Sprint)",
            "748 (Demonstrate complete Master Savant mental arithmetic fluency across all 8 units by completing the 10problem Grand Finale Sprint)",
            "758 (Demonstrate complete Master Savant mental arithmetic fluency across all 8 units by completing the 10problem Grand Finale Sprint)",
            "728 (Demonstrate complete Master Savant mental arithmetic fluency across all 8 units by completing the 10problem Grand Finale Sprint)"
          ],
          "answerIndex": 1,
          "explanation": "68 × 11 = 748.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the primary cognitive superpower gained from completing the Mental Math curriculum?",
          "options": [
            "Absolute working memory liberation: The ability to process, verify, and manipulate quantitative reality instantly in real time during live negotiations, trading, and engineering (Demonstrate complete Master Savant mental arithmetic fluency across all 8 units by completing the 10problem Grand Finale Sprint)",
            "Passive unguided repetition (Demonstrate complete Master Savant mental arithmetic fluency across all 8 units by completing the 10problem Grand Finale Sprint)",
            "Never needing to sleep again (Demonstrate complete Master Savant mental arithmetic fluency across all 8 units by completing the 10problem Grand Finale Sprint)",
            "Reading minds (Demonstrate complete Master Savant mental arithmetic fluency across all 8 units by completing the 10problem Grand Finale Sprint)"
          ],
          "answerIndex": 0,
          "explanation": "Working memory liberation and real-time quantitative intuition.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete the mental math master creed: 'Numbers are not rigid obstacles; they are _______.'",
          "options": [
            "boring homework (Demonstrate complete Master Savant mental arithmetic fluency across all 8 units by completing the 10problem Grand Finale Sprint)",
            "impossible puzzles (Demonstrate complete Master Savant mental arithmetic fluency across all 8 units by completing the 10problem Grand Finale Sprint)",
            "random noise (Demonstrate complete Master Savant mental arithmetic fluency across all 8 units by completing the 10problem Grand Finale Sprint)",
            "liquid patterns waiting to be recombined (Demonstrate complete Master Savant mental arithmetic fluency across all 8 units by completing the 10problem Grand Finale Sprint)"
          ],
          "answerIndex": 3,
          "explanation": "Numbers are liquid patterns waiting to be recombined.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 8, Lesson 5: Full Capstone Mastery: 10 dive"
  },
  "mentalmath-u5-l1": {
    "id": "mentalmath-u5-l1",
    "unit": "mentalmath-u5",
    "level": "advanced",
    "objective": "Multiply two two-digit numbers using the vertical-and-crosswise (criss-cross) mental technique in three rapid stages.",
    "presentation": {
      "explanation": "The Vertical-and-Crosswise (Criss-Cross) technique from Vedic mathematics allows you to multiply ANY two 2-digit numbers (ab x cd) in a single mental line from right to left or left to right:\n\n1. The 3-Step Algorithm for (ab x cd):\n   - **Step 1 (Units)**: Multiply the right-hand digits (b x d). Write down the units, carry tens.\n   - **Step 2 (Cross-product)**: Multiply crosswise and add: (a x d) + (b x c) + carry. Write down units, carry tens.\n   - **Step 3 (Tens)**: Multiply the left-hand digits (a x c) + carry.\n\n2. Worked Example: 23 x 14\n   - Step 1: 3 x 4 = 12 -> 2 (carry 1)\n   - Step 2: (2 x 4) + (3 x 1) + 1 = 8 + 3 + 1 = 12 -> 2 (carry 1)\n   - Step 3: (2 x 1) + 1 = 3 -> 3\n   - Result: **322**!\n\n3. Worked Example: 41 x 32\n   - Step 1: 1 x 2 = 2 (carry 0)\n   - Step 2: (4 x 2) + (1 x 3) = 8 + 3 = 11 -> 1 (carry 1)\n   - Step 3: (4 x 3) + 1 = 12 + 1 = 13\n   - Result: **1312**!",
      "examples": [
        {
          "target": "23 x 14 = 322",
          "reading": "Units: 3x4=12 (2, c1). Cross: 2x4 + 3x1 + 1 = 12 (2, c1). Tens: 2x1 + 1 = 3 -> 322.",
          "translation": "23 x 14 = 322"
        },
        {
          "target": "41 x 32 = 1312",
          "reading": "Units: 1x2=2. Cross: 4x2 + 1x3 = 11 (1, c1). Tens: 4x3 + 1 = 13 -> 1312.",
          "translation": "41 x 32 = 1312"
        },
        {
          "target": "52 x 31 = 1612",
          "reading": "Units: 2x1=2. Cross: 5x1 + 2x3 = 11 (1, c1). Tens: 5x3 + 1 = 16 -> 1612.",
          "translation": "52 x 31 = 1612"
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Applying the mental arithmetic algorithm from Unit 5, Lesson 1, what is the exact result?",
          "options": [
            "3 x 2 + 2 x 1 = 8 (Multiply two twodigit numbers using the verticalandcrosswise crisscross mental technique in three rapid stages)",
            "3 x 2 x 1 = 6 (Multiply two twodigit numbers using the verticalandcrosswise crisscross mental technique in three rapid stages)",
            "32 + 21 = 53 (Multiply two twodigit numbers using the verticalandcrosswise crisscross mental technique in three rapid stages)",
            "3 x 1 + 2 x 2 = 3 + 4 = 7 (Multiply two twodigit numbers using the verticalandcrosswise crisscross mental technique in three rapid stages)"
          ],
          "answerIndex": 3,
          "explanation": "Cross-product: outer + inner = (3x1) + (2x2) = 3 + 4 = 7."
        },
        {
          "prompt": "Compute 32 x 21 using the 3-step vertical-and-crosswise method:",
          "options": [
            "652 (Multiply two twodigit numbers using the verticalandcrosswise crisscross mental technique in three rapid stages)",
            "712 (Multiply two twodigit numbers using the verticalandcrosswise crisscross mental technique in three rapid stages)",
            "632 (Multiply two twodigit numbers using the verticalandcrosswise crisscross mental technique in three rapid stages)",
            "672 (Multiply two twodigit numbers using the verticalandcrosswise crisscross mental technique in three rapid stages)"
          ],
          "answerIndex": 3,
          "explanation": "Units: 2; Cross: 7; Tens: 6 -> 672."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Applying the computational shortcut from Unit 5, Lesson 1: Foundational & Structural Mastery, what is the exact calculation step?",
          "options": [
            "863 (Multiply two twodigit numbers using the verticalandcrosswise crisscross mental technique in three rapid stages)",
            "923 (Multiply two twodigit numbers using the verticalandcrosswise crisscross mental technique in three rapid stages)",
            "893 (Multiply two twodigit numbers using the verticalandcrosswise crisscross mental technique in three rapid stages)",
            "903 (Multiply two twodigit numbers using the verticalandcrosswise crisscross mental technique in three rapid stages)"
          ],
          "answerIndex": 3,
          "explanation": "Units: 3; Cross: 10 (0, carry 1); Tens: 8 + 1 = 9 -> 903."
        },
        {
          "prompt": "Calculate 51 x 24 mentally:",
          "options": [
            "1204 (Multiply two twodigit numbers using the verticalandcrosswise crisscross mental technique in three rapid stages)",
            "1244 (Multiply two twodigit numbers using the verticalandcrosswise crisscross mental technique in three rapid stages)",
            "1124 (Multiply two twodigit numbers using the verticalandcrosswise crisscross mental technique in three rapid stages)",
            "1224 (Multiply two twodigit numbers using the verticalandcrosswise crisscross mental technique in three rapid stages)"
          ],
          "answerIndex": 3,
          "explanation": "Units: 4; Cross: 22 (2, carry 2); Tens: 10 + 2 = 12 -> 1224."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Compute 62 x 31 mentally:",
          "options": [
            "1822 (Multiply two twodigit numbers using the verticalandcrosswise crisscross mental technique in three rapid stages)",
            "1922 (Multiply two twodigit numbers using the verticalandcrosswise crisscross mental technique in three rapid stages)",
            "1862 (Multiply two twodigit numbers using the verticalandcrosswise crisscross mental technique in three rapid stages)",
            "1932 (Multiply two twodigit numbers using the verticalandcrosswise crisscross mental technique in three rapid stages)"
          ],
          "answerIndex": 1,
          "explanation": "62 x 31 = 1922.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Compute 24 x 23 mentally:",
          "options": [
            "552 (Multiply two twodigit numbers using the verticalandcrosswise crisscross mental technique in three rapid stages)",
            "562 (Multiply two twodigit numbers using the verticalandcrosswise crisscross mental technique in three rapid stages)",
            "532 (Multiply two twodigit numbers using the verticalandcrosswise crisscross mental technique in three rapid stages)",
            "542 (Multiply two twodigit numbers using the verticalandcrosswise crisscross mental technique in three rapid stages)"
          ],
          "answerIndex": 0,
          "explanation": "24 x 23 = 552.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the primary advantage of the vertical-and-crosswise method over traditional column multiplication?",
          "options": [
            "It only works on even numbers. (Multiply two twodigit numbers using the verticalandcrosswise crisscross mental technique in three rapid stages)",
            "It requires a calculator. (Multiply two twodigit numbers using the verticalandcrosswise crisscross mental technique in three rapid stages)",
            "It replaces multiplication with division. (Multiply two twodigit numbers using the verticalandcrosswise crisscross mental technique in three rapid stages)",
            "It calculates the final digits sequentially in working memory without writing intermediate sub-products. (Multiply two twodigit numbers using the verticalandcrosswise crisscross mental technique in three rapid stages)"
          ],
          "answerIndex": 3,
          "explanation": "It streams the answer digit by digit in mental memory.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Compute 33 x 31 mentally:",
          "options": [
            "1013 (Multiply two twodigit numbers using the verticalandcrosswise crisscross mental technique in three rapid stages)",
            "1033 (Multiply two twodigit numbers using the verticalandcrosswise crisscross mental technique in three rapid stages)",
            "1023 (Multiply two twodigit numbers using the verticalandcrosswise crisscross mental technique in three rapid stages)",
            "993 (Multiply two twodigit numbers using the verticalandcrosswise crisscross mental technique in three rapid stages)"
          ],
          "answerIndex": 2,
          "explanation": "33 x 31 = 1023.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 5, Lesson 1: 23 x 14 = 322"
  },
  "mentalmath-u5-l2": {
    "id": "mentalmath-u5-l2",
    "unit": "mentalmath-u5",
    "level": "advanced",
    "objective": "Multiply two-digit and three-digit numbers close to base 100 instantly using the base deficiency and surplus algebraic shortcut.",
    "presentation": {
      "explanation": "When multiplying two numbers close to 100, standard multiplication is slow, but base-100 algebra solves it in 2 seconds flat!\n\n1. Both Numbers Above 100 (Surplus: +a, +b):\n   - Formula: $(100 + a)(100 + b) = [100 + a + b] \\times 100 + (a \\times b)$\n   - Left Part: Cross-add $(100 + a + b)$\n   - Right Part: Product of surpluses $(a \\times b)$ (formatted as 2 digits)\n   - Example: **104 x 107**\n     - Surpluses: +4 and +7\n     - Left side: 104 + 7 = 111 (or 107 + 4 = 111)\n     - Right side: 4 x 7 = 28\n     - Combine: **11,128**!\n\n2. Both Numbers Below 100 (Deficiency: -d1, -d2):\n   - Formula: $(100 - d1)(100 - d2) = [100 - d1 - d2] \\times 100 + (d1 \\times d2)$\n   - Left Part: Cross-subtract $(Number - deficiency)$\n   - Right Part: Product of deficiencies $(d1 \\times d2)$ (formatted as 2 digits)\n   - Example: **96 x 93**\n     - Deficiencies: -4 and -7\n     - Left side: 96 - 7 = 89 (or 93 - 4 = 89)\n     - Right side: (-4) x (-7) = 28\n     - Combine: **8,928**!\n\n3. One Above, One Below (+a, -d):\n   - Example: **106 x 95**\n     - Surplus: +6, Deficiency: -5\n     - Left side: 106 - 5 = 101 -> 10,100\n     - Right side: (+6) x (-5) = -30\n     - Combine: 10,100 - 30 = **10,070**!",
      "examples": [
        {
          "target": "103 x 108 = 11,124",
          "reading": "Surpluses: +3, +8. Left: 103+8=111. Right: 3x8=24 -> 11,124.",
          "translation": "103 x 108 = 11,124"
        },
        {
          "target": "94 x 97 = 9,118",
          "reading": "Deficits: -6, -3. Left: 94-3=91. Right: 6x3=18 -> 9,118.",
          "translation": "94 x 97 = 9,118"
        },
        {
          "target": "98 x 92 = 9,016",
          "reading": "Deficits: -2, -8. Left: 98-8=90. Right: 2x8=16 -> 9,016.",
          "translation": "98 x 92 = 9,016"
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Applying the mental arithmetic algorithm from Unit 5, Lesson 2, what is the exact result?",
          "options": [
            "11,445 (Multiply twodigit and threedigit numbers close to base 100 instantly using the base deficiency and surplus algebraic shortcut)",
            "11,545 (Multiply twodigit and threedigit numbers close to base 100 instantly using the base deficiency and surplus algebraic shortcut)",
            "11,455 (Multiply twodigit and threedigit numbers close to base 100 instantly using the base deficiency and surplus algebraic shortcut)",
            "11,345 (Multiply twodigit and threedigit numbers close to base 100 instantly using the base deficiency and surplus algebraic shortcut)"
          ],
          "answerIndex": 0,
          "explanation": "105 + 9 = 114; 5 x 9 = 45 -> 11,445."
        },
        {
          "prompt": "Calculate 95 x 94 using base 100 deficiencies (-5 and -6):",
          "options": [
            "8,930 (Multiply twodigit and threedigit numbers close to base 100 instantly using the base deficiency and surplus algebraic shortcut)",
            "8,830 (Multiply twodigit and threedigit numbers close to base 100 instantly using the base deficiency and surplus algebraic shortcut)",
            "9,030 (Multiply twodigit and threedigit numbers close to base 100 instantly using the base deficiency and surplus algebraic shortcut)",
            "8,940 (Multiply twodigit and threedigit numbers close to base 100 instantly using the base deficiency and surplus algebraic shortcut)"
          ],
          "answerIndex": 0,
          "explanation": "95 - 6 = 89; 5 x 6 = 30 -> 8,930."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Applying the computational shortcut from Unit 5, Lesson 2: Foundational & Structural Mastery, what is the exact calculation step?",
          "options": [
            "9,560 (Multiply twodigit and threedigit numbers close to base 100 instantly using the base deficiency and surplus algebraic shortcut)",
            "9,506 (Multiply twodigit and threedigit numbers close to base 100 instantly using the base deficiency and surplus algebraic shortcut)",
            "9,406 (Multiply twodigit and threedigit numbers close to base 100 instantly using the base deficiency and surplus algebraic shortcut)",
            "9,516 (Multiply twodigit and threedigit numbers close to base 100 instantly using the base deficiency and surplus algebraic shortcut)"
          ],
          "answerIndex": 1,
          "explanation": "97 - 2 = 95; 3 x 2 = 06 (must be 2 digits) -> 9,506."
        },
        {
          "prompt": "Calculate 106 x 106 (106 squared):",
          "options": [
            "11,216 (Multiply twodigit and threedigit numbers close to base 100 instantly using the base deficiency and surplus algebraic shortcut)",
            "11,336 (Multiply twodigit and threedigit numbers close to base 100 instantly using the base deficiency and surplus algebraic shortcut)",
            "11,236 (Multiply twodigit and threedigit numbers close to base 100 instantly using the base deficiency and surplus algebraic shortcut)",
            "11,136 (Multiply twodigit and threedigit numbers close to base 100 instantly using the base deficiency and surplus algebraic shortcut)"
          ],
          "answerIndex": 2,
          "explanation": "106 + 6 = 112; 6 x 6 = 36 -> 11,236."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Calculate 91 x 98 mentally:",
          "options": [
            "8,918 (Multiply twodigit and threedigit numbers close to base 100 instantly using the base deficiency and surplus algebraic shortcut)",
            "8,818 (Multiply twodigit and threedigit numbers close to base 100 instantly using the base deficiency and surplus algebraic shortcut)",
            "8,908 (Multiply twodigit and threedigit numbers close to base 100 instantly using the base deficiency and surplus algebraic shortcut)",
            "8,928 (Multiply twodigit and threedigit numbers close to base 100 instantly using the base deficiency and surplus algebraic shortcut)"
          ],
          "answerIndex": 0,
          "explanation": "91 - 2 = 89; 9 x 2 = 18 -> 8,918.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Calculate 108 x 112 mentally:",
          "options": [
            "11,996 (Multiply twodigit and threedigit numbers close to base 100 instantly using the base deficiency and surplus algebraic shortcut)",
            "12,086 (Multiply twodigit and threedigit numbers close to base 100 instantly using the base deficiency and surplus algebraic shortcut)",
            "12,196 (Multiply twodigit and threedigit numbers close to base 100 instantly using the base deficiency and surplus algebraic shortcut)",
            "12,096 (Multiply twodigit and threedigit numbers close to base 100 instantly using the base deficiency and surplus algebraic shortcut)"
          ],
          "answerIndex": 3,
          "explanation": "108 + 12 = 120; 8 x 12 = 96 -> 12,096.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What must you do if the right-hand product of deficits is a single digit (e.g. 1 x 4 = 4)?",
          "options": [
            "Multiply by 100 (Multiply twodigit and threedigit numbers close to base 100 instantly using the base deficiency and surplus algebraic shortcut)",
            "Drop the number (Multiply twodigit and threedigit numbers close to base 100 instantly using the base deficiency and surplus algebraic shortcut)",
            "Pad with a leading zero to keep the base-100 two-digit slot (Multiply twodigit and threedigit numbers close to base 100 instantly using the base deficiency and surplus algebraic shortcut)",
            "Add 10 to it (Multiply twodigit and threedigit numbers close to base 100 instantly using the base deficiency and surplus algebraic shortcut)"
          ],
          "answerIndex": 2,
          "explanation": "Because base 100 has two zeros, the right part must always occupy two decimal places (e.g. 04).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Calculate 99 x 99 mentally:",
          "options": [
            "9,901 (Multiply twodigit and threedigit numbers close to base 100 instantly using the base deficiency and surplus algebraic shortcut)",
            "9,801 (Multiply twodigit and threedigit numbers close to base 100 instantly using the base deficiency and surplus algebraic shortcut)",
            "9,701 (Multiply twodigit and threedigit numbers close to base 100 instantly using the base deficiency and surplus algebraic shortcut)",
            "9,811 (Multiply twodigit and threedigit numbers close to base 100 instantly using the base deficiency and surplus algebraic shortcut)"
          ],
          "answerIndex": 1,
          "explanation": "99 - 1 = 98; 1 x 1 = 01 -> 9,801.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 5, Lesson 2: 103 x 108 = 11,124"
  },
  "mentalmath-u5-l3": {
    "id": "mentalmath-u5-l3",
    "unit": "mentalmath-u5",
    "level": "advanced",
    "objective": "Apply algebraic identities to compute squares ending in 5 ((N)(N+1)|25) and near-symmetric products using difference of squares ((a-b)(a+b) = a² - b²).",
    "presentation": {
      "explanation": "Two famous algebraic identities turn intimidating multiplications into instant 1-second calculations:\n\n1. Squaring Any Number Ending in 5 (N5²):\n   - Algebraic Proof: $(10N + 5)^2 = 100N^2 + 100N + 25 = 100N(N + 1) + 25$\n   - Rule: Multiply the leading number $N$ by $(N + 1)$, then append **25**!\n   - Examples:\n     - **35²**: $3 \\times 4 = 12$ -> append 25 -> **1,225**\n     - **65²**: $6 \\times 7 = 42$ -> append 25 -> **4,225**\n     - **85²**: $8 \\times 9 = 72$ -> append 25 -> **7,225**\n     - **115²**: $11 \\times 12 = 132$ -> append 25 -> **13,225**\n\n2. Difference of Squares for Near-Symmetric Numbers:\n   - Formula: $(a - b)(a + b) = a^2 - b^2$\n   - Whenever two numbers are equidistant from a round number $a$, square $a$ and subtract $b^2$!\n   - Examples:\n     - **47 x 53**: Both are 3 away from 50 ($50 - 3$ and $50 + 3$)\n       -> $50^2 - 3^2 = 2500 - 9 = $ **2,491**!\n     - **38 x 42**: Distance 2 from 40 ($40 - 2$ and $40 + 2$)\n       -> $40^2 - 2^2 = 1600 - 4 = $ **1,596**!\n     - **69 x 71**: Distance 1 from 70\n       -> $70^2 - 1^2 = 4900 - 1 = $ **4,899**!",
      "examples": [
        {
          "target": "75² = 5,625",
          "reading": "Leading: 7 x 8 = 56. Append 25 -> 5,625.",
          "translation": "75² = 5,625"
        },
        {
          "target": "47 x 53 = 2,491",
          "reading": "Midpoint 50, diff 3. 50² - 3² = 2500 - 9 = 2,491.",
          "translation": "47 x 53 = 2,491"
        },
        {
          "target": "95² = 9,025",
          "reading": "Leading: 9 x 10 = 90. Append 25 -> 9,025.",
          "translation": "95² = 9,025"
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Applying the mental arithmetic algorithm from Unit 5, Lesson 3, what is the exact result?",
          "options": [
            "2,015 (Apply algebraic identities to compute squares ending in 5 NN125 and nearsymmetric products using difference of squares abab  a  b)",
            "2,125 (Apply algebraic identities to compute squares ending in 5 NN125 and nearsymmetric products using difference of squares abab  a  b)",
            "1,825 (Apply algebraic identities to compute squares ending in 5 NN125 and nearsymmetric products using difference of squares abab  a  b)",
            "2,025 (Apply algebraic identities to compute squares ending in 5 NN125 and nearsymmetric products using difference of squares abab  a  b)"
          ],
          "answerIndex": 3,
          "explanation": "4 x 5 = 20 -> 2,025."
        },
        {
          "prompt": "Calculate 58 x 62 using difference of squares around midpoint 60:",
          "options": [
            "3,586 (Apply algebraic identities to compute squares ending in 5 NN125 and nearsymmetric products using difference of squares abab  a  b)",
            "3,604 (Apply algebraic identities to compute squares ending in 5 NN125 and nearsymmetric products using difference of squares abab  a  b)",
            "3,592 (Apply algebraic identities to compute squares ending in 5 NN125 and nearsymmetric products using difference of squares abab  a  b)",
            "3,596 (Apply algebraic identities to compute squares ending in 5 NN125 and nearsymmetric products using difference of squares abab  a  b)"
          ],
          "answerIndex": 3,
          "explanation": "60² - 2² = 3600 - 4 = 3,596."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Applying the computational shortcut from Unit 5, Lesson 3: Foundational & Structural Mastery, what is the exact calculation step?",
          "options": [
            "7,225 (Apply algebraic identities to compute squares ending in 5 NN125 and nearsymmetric products using difference of squares abab  a  b)",
            "7,215 (Apply algebraic identities to compute squares ending in 5 NN125 and nearsymmetric products using difference of squares abab  a  b)",
            "7,125 (Apply algebraic identities to compute squares ending in 5 NN125 and nearsymmetric products using difference of squares abab  a  b)",
            "7,325 (Apply algebraic identities to compute squares ending in 5 NN125 and nearsymmetric products using difference of squares abab  a  b)"
          ],
          "answerIndex": 0,
          "explanation": "8 x 9 = 72 -> 7,225."
        },
        {
          "prompt": "Calculate 29 x 31 mentally:",
          "options": [
            "899 (Apply algebraic identities to compute squares ending in 5 NN125 and nearsymmetric products using difference of squares abab  a  b)",
            "889 (Apply algebraic identities to compute squares ending in 5 NN125 and nearsymmetric products using difference of squares abab  a  b)",
            "901 (Apply algebraic identities to compute squares ending in 5 NN125 and nearsymmetric products using difference of squares abab  a  b)",
            "891 (Apply algebraic identities to compute squares ending in 5 NN125 and nearsymmetric products using difference of squares abab  a  b)"
          ],
          "answerIndex": 0,
          "explanation": "30² - 1² = 900 - 1 = 899."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Calculate 105² mentally:",
          "options": [
            "10,525 (Apply algebraic identities to compute squares ending in 5 NN125 and nearsymmetric products using difference of squares abab  a  b)",
            "11,125 (Apply algebraic identities to compute squares ending in 5 NN125 and nearsymmetric products using difference of squares abab  a  b)",
            "11,015 (Apply algebraic identities to compute squares ending in 5 NN125 and nearsymmetric products using difference of squares abab  a  b)",
            "11,025 (Apply algebraic identities to compute squares ending in 5 NN125 and nearsymmetric products using difference of squares abab  a  b)"
          ],
          "answerIndex": 3,
          "explanation": "10 x 11 = 110 -> 11,025.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Calculate 77 x 83 using difference of squares around 80:",
          "options": [
            "6,381 (Apply algebraic identities to compute squares ending in 5 NN125 and nearsymmetric products using difference of squares abab  a  b)",
            "6,399 (Apply algebraic identities to compute squares ending in 5 NN125 and nearsymmetric products using difference of squares abab  a  b)",
            "6,391 (Apply algebraic identities to compute squares ending in 5 NN125 and nearsymmetric products using difference of squares abab  a  b)",
            "6,409 (Apply algebraic identities to compute squares ending in 5 NN125 and nearsymmetric products using difference of squares abab  a  b)"
          ],
          "answerIndex": 2,
          "explanation": "80² - 3² = 6400 - 9 = 6,391.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why does (N5)² always end in 25?",
          "options": [
            "It is an approximation. (Apply algebraic identities to compute squares ending in 5 NN125 and nearsymmetric products using difference of squares abab  a  b)",
            "Because (Apply algebraic identities to compute squares ending in 5 NN125 and nearsymmetric products using difference of squares abab  a  b)",
            "Because 5 + 5 = 10. (Apply algebraic identities to compute squares ending in 5 NN125 and nearsymmetric products using difference of squares abab  a  b)",
            "Because all odd squares end in 25. (Apply algebraic identities to compute squares ending in 5 NN125 and nearsymmetric products using difference of squares abab  a  b)"
          ],
          "answerIndex": 1,
          "explanation": "Exact algebraic expansion proves the tens and units digits are identically 25.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Calculate 19 x 21 mentally:",
          "options": [
            "399 (Apply algebraic identities to compute squares ending in 5 NN125 and nearsymmetric products using difference of squares abab  a  b)",
            "389 (Apply algebraic identities to compute squares ending in 5 NN125 and nearsymmetric products using difference of squares abab  a  b)",
            "391 (Apply algebraic identities to compute squares ending in 5 NN125 and nearsymmetric products using difference of squares abab  a  b)",
            "401 (Apply algebraic identities to compute squares ending in 5 NN125 and nearsymmetric products using difference of squares abab  a  b)"
          ],
          "answerIndex": 0,
          "explanation": "20² - 1² = 400 - 1 = 399.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 5, Lesson 3: 75² = 5,625"
  },
  "mentalmath-u5-l4": {
    "id": "mentalmath-u5-l4",
    "unit": "mentalmath-u5",
    "level": "advanced",
    "objective": "Multiply two-digit and multi-digit numbers by 11 using the sandwich-and-carry method, and multiply two-digit numbers by 3-digit numbers using place-value chunking.",
    "presentation": {
      "explanation": "1. The 11-Multiplication 'Sandwich' Shortcut:\n   - To multiply any 2-digit number $ab \\times 11$, split the digits $a$ and $b$ and sandwich their sum $(a + b)$ in the middle!\n   - Case 1 (No Carry, $a + b < 10$):\n     - **35 x 11**: Split 3 and 5 -> Middle is $3 + 5 = 8$ -> **385**!\n     - **52 x 11**: Split 5 and 2 -> Middle is $5 + 2 = 7$ -> **572**!\n     - **71 x 11**: Split 7 and 1 -> Middle is $7 + 1 = 8$ -> **781**!\n   - Case 2 (With Carry, $a + b \\ge 10$):\n     - Middle keeps the units, carry 1 to the left digit $a$!\n     - **47 x 11**: $4 + 7 = 11$. Units 1 in middle, carry 1 to 4 -> $(4+1)|1|7$ -> **517**!\n     - **85 x 11**: $8 + 5 = 13$. Carry 1 to 8 -> **935**!\n     - **79 x 11**: $7 + 9 = 16$. Carry 1 to 7 -> **869**!\n\n2. Multiplying 2-Digit by 3-Digit via Chunking:\n   - For problems like $42 \\times 105$, break 105 into $(100 + 5)$:\n     - $42 \\times 100 = 4,200$\n     - $42 \\times 5 = 210$ (half of $42 \\times 10$)\n     - Combine: $4,200 + 210 = $ **4,410**!\n   - For $25 \\times 304$:\n     - $25 \\times 300 = 7,500$\n     - $25 \\times 4 = 100$\n     - Combine: $7,500 + 100 = $ **7,600**!",
      "examples": [
        {
          "target": "63 x 11 = 693",
          "reading": "Split 6 and 3. Middle 6+3=9 -> 693.",
          "translation": "63 x 11 = 693"
        },
        {
          "target": "58 x 11 = 638",
          "reading": "Split 5 and 8. Middle 5+8=13. Carry 1 to 5 -> 638.",
          "translation": "58 x 11 = 638"
        },
        {
          "target": "34 x 103 = 3,502",
          "reading": "34 x 100 = 3400; 34 x 3 = 102 -> 3,502.",
          "translation": "34 x 103 = 3,502"
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Applying the mental arithmetic algorithm from Unit 5, Lesson 4, what is the exact result?",
          "options": [
            "692 (Multiply twodigit and multidigit numbers by 11 using the sandwichandcarry method)",
            "682 (Multiply twodigit and multidigit numbers by 11 using the sandwichandcarry method)",
            "662 (Multiply twodigit and multidigit numbers by 11 using the sandwichandcarry method)",
            "672 (Multiply twodigit and multidigit numbers by 11 using the sandwichandcarry method)"
          ],
          "answerIndex": 1,
          "explanation": "6 _ 2 with 6+2=8 in middle -> 682."
        },
        {
          "prompt": "Calculate 76 x 11 with carry:",
          "options": [
            "836 (Multiply twodigit and multidigit numbers by 11 using the sandwichandcarry method)",
            "846 (Multiply twodigit and multidigit numbers by 11 using the sandwichandcarry method)",
            "796 (Multiply twodigit and multidigit numbers by 11 using the sandwichandcarry method)",
            "736 (Multiply twodigit and multidigit numbers by 11 using the sandwichandcarry method)"
          ],
          "answerIndex": 0,
          "explanation": "7 + 6 = 13; carry 1 to 7 -> 836."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Applying the computational shortcut from Unit 5, Lesson 4: Foundational & Structural Mastery, what is the exact calculation step?",
          "options": [
            "1,034 (Multiply twodigit and multidigit numbers by 11 using the sandwichandcarry method)",
            "1,024 (Multiply twodigit and multidigit numbers by 11 using the sandwichandcarry method)",
            "1,044 (Multiply twodigit and multidigit numbers by 11 using the sandwichandcarry method)",
            "934 (Multiply twodigit and multidigit numbers by 11 using the sandwichandcarry method)"
          ],
          "answerIndex": 0,
          "explanation": "9 + 4 = 13 -> 1,034."
        },
        {
          "prompt": "Calculate 48 x 102 by chunking:",
          "options": [
            "4,896 (Multiply twodigit and multidigit numbers by 11 using the sandwichandcarry method)",
            "4,796 (Multiply twodigit and multidigit numbers by 11 using the sandwichandcarry method)",
            "4,886 (Multiply twodigit and multidigit numbers by 11 using the sandwichandcarry method)",
            "4,906 (Multiply twodigit and multidigit numbers by 11 using the sandwichandcarry method)"
          ],
          "answerIndex": 0,
          "explanation": "4800 + 96 = 4,896."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Calculate 87 x 11 mentally:",
          "options": [
            "857 (Multiply twodigit and multidigit numbers by 11 using the sandwichandcarry method)",
            "967 (Multiply twodigit and multidigit numbers by 11 using the sandwichandcarry method)",
            "957 (Multiply twodigit and multidigit numbers by 11 using the sandwichandcarry method)",
            "947 (Multiply twodigit and multidigit numbers by 11 using the sandwichandcarry method)"
          ],
          "answerIndex": 2,
          "explanation": "87 x 11 = 957.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Calculate 36 x 205 mentally:",
          "options": [
            "7,280 (Multiply twodigit and multidigit numbers by 11 using the sandwichandcarry method)",
            "7,380 (Multiply twodigit and multidigit numbers by 11 using the sandwichandcarry method)",
            "7,360 (Multiply twodigit and multidigit numbers by 11 using the sandwichandcarry method)",
            "7,480 (Multiply twodigit and multidigit numbers by 11 using the sandwichandcarry method)"
          ],
          "answerIndex": 1,
          "explanation": "7200 + 180 = 7,380.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Calculate 44 x 11 mentally:",
          "options": [
            "484 (Multiply twodigit and multidigit numbers by 11 using the sandwichandcarry method)",
            "474 (Multiply twodigit and multidigit numbers by 11 using the sandwichandcarry method)",
            "494 (Multiply twodigit and multidigit numbers by 11 using the sandwichandcarry method)",
            "464 (Multiply twodigit and multidigit numbers by 11 using the sandwichandcarry method)"
          ],
          "answerIndex": 0,
          "explanation": "44 x 11 = 484.",
          "type": "multiple-choice"
        },
        {
          "prompt": "How do you multiply 234 x 11 using the neighbor addition rule?",
          "options": [
            "2,374 (Multiply twodigit and multidigit numbers by 11 using the sandwichandcarry method)",
            "2,474 (Multiply twodigit and multidigit numbers by 11 using the sandwichandcarry method)",
            "2,584 (Multiply twodigit and multidigit numbers by 11 using the sandwichandcarry method)",
            "2,574 (Multiply twodigit and multidigit numbers by 11 using the sandwichandcarry method)"
          ],
          "answerIndex": 3,
          "explanation": "Units 4, 3+4=7, 2+3=5, Lead 2 -> 2,574.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 5, Lesson 4: 63 x 11 = 693"
  },
  "mentalmath-u5-l5": {
    "id": "mentalmath-u5-l5",
    "unit": "mentalmath-u5",
    "level": "advanced",
    "objective": "Select and execute the fastest two-digit multiplication technique (Criss-Cross, Base 100, N5², Difference of Squares, or 11-Sandwich) under strict speed checkpoint conditions.",
    "presentation": {
      "explanation": "In this Master Speed Checkpoint of Unit 5, mental agility comes from instantly categorizing the problem's shape and picking the optimal weapon:\n\n1. Decision Matrix for Mental Multiplication:\n   - **Ends in 5?** -> Use $N(N+1)|25$ (e.g. $65^2 = 4225$). Speed: **1 sec**.\n   - **Contains 11?** -> Use Sandwich rule (e.g. $58 \\times 11 = 638$). Speed: **1 sec**.\n   - **Symmetric around a round base?** -> Use $(a-b)(a+b) = a^2 - b^2$ (e.g. $38 \\times 42 = 1600 - 4 = 1596$). Speed: **2 sec**.\n   - **Both numbers close to 100?** -> Use Base 100 surplus/deficiency cross-math (e.g. $94 \\times 97 = 8918$). Speed: **2 sec**.\n   - **General arbitrary 2-digit numbers?** -> Use Criss-Cross / Vertical-and-Crosswise (e.g. $23 \\times 14 = 322$). Speed: **3 sec**.\n\n2. Real-World Fluency Drill:\n   - See $96 \\times 96$ -> Recognize $96^2 = (96-4)|16 = 9216$.\n   - See $55^2$ -> Recognize $5 \\times 6 = 30 \\implies 3025$.\n   - See $84 \\times 11$ -> Recognize $8+4=12 \\implies 924$.\n   - See $49 \\times 51$ -> Recognize $50^2 - 1^2 = 2499$.",
      "examples": [
        {
          "target": "55² = 3,025",
          "reading": "5 x 6 = 30 -> 3,025.",
          "translation": "55² = 3,025"
        },
        {
          "target": "84 x 11 = 924",
          "reading": "8+4=12 -> 924.",
          "translation": "84 x 11 = 924"
        },
        {
          "target": "49 x 51 = 2,499",
          "reading": "50² - 1 = 2500 - 1 = 2,499.",
          "translation": "49 x 51 = 2,499"
        },
        {
          "target": "92 x 95 = 8,740",
          "reading": "Deficits -8, -5. 92-5=87, 8x5=40 -> 8,740.",
          "translation": "92 x 95 = 8,740"
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Applying the mental arithmetic algorithm from Unit 5, Lesson 5, what is the exact result?",
          "options": [
            "N (Select and execute the fastest twodigit multiplication technique CrissCross)",
            "Criss-cross multiplication (Select and execute the fastest twodigit multiplication technique CrissCross)",
            "Long division (Select and execute the fastest twodigit multiplication technique CrissCross)",
            "Repeated addition 75 times (Select and execute the fastest twodigit multiplication technique CrissCross)"
          ],
          "answerIndex": 0,
          "explanation": "N(N+1)|25 gives the answer in under 1 second."
        },
        {
          "prompt": "Which technique is fastest for 97 x 96?",
          "options": [
            "Base 100 deficiency shortcut (Select and execute the fastest twodigit multiplication technique CrissCross)",
            "Difference of squares (Select and execute the fastest twodigit multiplication technique CrissCross)",
            "Column lattice (Select and execute the fastest twodigit multiplication technique CrissCross)",
            "Factor trees (Select and execute the fastest twodigit multiplication technique CrissCross)"
          ],
          "answerIndex": 0,
          "explanation": "Base 100 gives 9,312 instantly."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Applying the computational shortcut from Unit 5, Lesson 5: Foundational & Structural Mastery, what is the exact calculation step?",
          "options": [
            "4,125 (Select and execute the fastest twodigit multiplication technique CrissCross)",
            "4,225 (Select and execute the fastest twodigit multiplication technique CrissCross)",
            "4,325 (Select and execute the fastest twodigit multiplication technique CrissCross)",
            "4,215 (Select and execute the fastest twodigit multiplication technique CrissCross)"
          ],
          "answerIndex": 1,
          "explanation": "6 x 7 = 42 -> 4,225."
        },
        {
          "prompt": "Calculate 39 x 41 mentally:",
          "options": [
            "1,601 (Select and execute the fastest twodigit multiplication technique CrissCross)",
            "1,599 (Select and execute the fastest twodigit multiplication technique CrissCross)",
            "1,591 (Select and execute the fastest twodigit multiplication technique CrissCross)",
            "1,589 (Select and execute the fastest twodigit multiplication technique CrissCross)"
          ],
          "answerIndex": 1,
          "explanation": "40² - 1 = 1,599."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Calculate 93 x 11 mentally:",
          "options": [
            "1,033 (Select and execute the fastest twodigit multiplication technique CrissCross)",
            "1,023 (Select and execute the fastest twodigit multiplication technique CrissCross)",
            "923 (Select and execute the fastest twodigit multiplication technique CrissCross)",
            "1,013 (Select and execute the fastest twodigit multiplication technique CrissCross)"
          ],
          "answerIndex": 1,
          "explanation": "93 x 11 = 1,023.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Calculate 95 x 98 mentally:",
          "options": [
            "9,310 (Select and execute the fastest twodigit multiplication technique CrissCross)",
            "9,320 (Select and execute the fastest twodigit multiplication technique CrissCross)",
            "9,210 (Select and execute the fastest twodigit multiplication technique CrissCross)",
            "9,410 (Select and execute the fastest twodigit multiplication technique CrissCross)"
          ],
          "answerIndex": 0,
          "explanation": "95 - 2 = 93; 5 x 2 = 10 -> 9,310.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Calculate 25² mentally:",
          "options": [
            "615 (Select and execute the fastest twodigit multiplication technique CrissCross)",
            "635 (Select and execute the fastest twodigit multiplication technique CrissCross)",
            "525 (Select and execute the fastest twodigit multiplication technique CrissCross)",
            "625 (Select and execute the fastest twodigit multiplication technique CrissCross)"
          ],
          "answerIndex": 3,
          "explanation": "2 x 3 = 6 -> 625.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What core speed multiplication competencies were mastered across Unit 5 in Mental Math?",
          "options": [
            "Taylor series expansions only (Select and execute the fastest twodigit multiplication technique CrissCross)",
            "Matrix eigenvalue calculation only (Select and execute the fastest twodigit multiplication technique CrissCross)",
            "Vertical-and-crosswise (Criss-Cross)",
            "Basic counting to ten only (Select and execute the fastest twodigit multiplication technique CrissCross)"
          ],
          "answerIndex": 2,
          "explanation": "Unit 5 complete advanced two-digit mental multiplication mastery.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 5, Lesson 5: 55² = 3,025"
  }
};
  var CURRICULUM = { id: 'mentalmath', name: "mentalmath", units: UNITS, lessons: LESSONS };
  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};
  global.FEARN_CURRICULA['mentalmath'] = CURRICULUM;
  if (typeof module !== 'undefined' && module.exports) module.exports = CURRICULUM;
})(typeof window !== 'undefined' ? window : global);
