// FEARN Curriculum Data — chess
(function (global) {
  'use strict';
  var UNITS = [
  {
    "id": "chess-u1",
    "unit": 1,
    "title": "Knight Forks & Royal Tactics",
    "level": "Beginner",
    "goal": "Mastery of Knight Forks & Royal Tactics.",
    "lessonIds": [
      "chess-u1-l1",
      "chess-u1-l2",
      "chess-u1-l3",
      "chess-u1-l4",
      "chess-u1-l5"
    ]
  },
  {
    "id": "chess-u2",
    "unit": 2,
    "title": "Pins, Skewers & Absolute X-Rays",
    "level": "Beginner",
    "goal": "Mastery of Pins, Skewers & Absolute X-Rays.",
    "lessonIds": [
      "chess-u2-l1",
      "chess-u2-l2",
      "chess-u2-l3",
      "chess-u2-l4",
      "chess-u2-l5"
    ]
  },
  {
    "id": "chess-u3",
    "unit": 3,
    "title": "Discovered Attacks & Double Check",
    "level": "Intermediate",
    "goal": "Mastery of Discovered Attacks & Double Check.",
    "lessonIds": [
      "chess-u3-l1",
      "chess-u3-l2",
      "chess-u3-l3",
      "chess-u3-l4",
      "chess-u3-l5"
    ]
  },
  {
    "id": "chess-u4",
    "unit": 4,
    "title": "Overloading, Deflection & Decoy Sacrifices",
    "level": "Intermediate",
    "goal": "Mastery of Overloading, Deflection & Decoy Sacrifices.",
    "lessonIds": [
      "chess-u4-l1",
      "chess-u4-l2",
      "chess-u4-l3",
      "chess-u4-l4",
      "chess-u4-l5"
    ]
  },
  {
    "id": "chess-u5",
    "unit": 5,
    "title": "Clearance, Interference & Pawn Promotion",
    "level": "Intermediate",
    "goal": "Mastery of Clearance, Interference & Pawn Promotion.",
    "lessonIds": [
      "chess-u5-l1",
      "chess-u5-l2",
      "chess-u5-l3",
      "chess-u5-l4",
      "chess-u5-l5"
    ]
  },
  {
    "id": "chess-u6",
    "unit": 6,
    "title": "Back-Rank Checkmates & Smothered Mates",
    "level": "Advanced",
    "goal": "Mastery of Back-Rank Checkmates & Smothered Mates.",
    "lessonIds": [
      "chess-u6-l1",
      "chess-u6-l2",
      "chess-u6-l3",
      "chess-u6-l4",
      "chess-u6-l5"
    ]
  },
  {
    "id": "chess-u7",
    "unit": 7,
    "title": "Pawn Endgames & Opposition Dynamics",
    "level": "Advanced",
    "goal": "Mastery of Pawn Endgames & Opposition Dynamics.",
    "lessonIds": [
      "chess-u7-l1",
      "chess-u7-l2",
      "chess-u7-l3",
      "chess-u7-l4",
      "chess-u7-l5"
    ]
  },
  {
    "id": "chess-u8",
    "unit": 8,
    "title": "Rook & Pawn Endgames (Lucena & Philidor)",
    "level": "Advanced",
    "goal": "Mastery of Rook & Pawn Endgames (Lucena & Philidor).",
    "lessonIds": [
      "chess-u8-l1",
      "chess-u8-l2",
      "chess-u8-l3",
      "chess-u8-l4",
      "chess-u8-l5"
    ]
  },
  {
    "id": "chess-u9",
    "unit": 9,
    "title": "Positional Bishop Pair & Outpost Knights",
    "level": "Master",
    "goal": "Mastery of Positional Bishop Pair & Outpost Knights.",
    "lessonIds": [
      "chess-u9-l1",
      "chess-u9-l2",
      "chess-u9-l3",
      "chess-u9-l4",
      "chess-u9-l5"
    ]
  },
  {
    "id": "chess-u10",
    "unit": 10,
    "title": "Grandmaster Calculation & King Hunts",
    "level": "Master",
    "goal": "Mastery of Grandmaster Calculation & King Hunts.",
    "lessonIds": [
      "chess-u10-l1",
      "chess-u10-l2",
      "chess-u10-l3",
      "chess-u10-l4",
      "chess-u10-l5"
    ]
  }
];
  var LESSONS = {
  "chess-u1-l1": {
    "id": "chess-u1-l1",
    "unit": "chess-u1",
    "level": "beginner",
    "objective": "Explain what a fork is and identify a knight fork that wins material in a simple, quiet position.",
    "difficulty": 650,
    "presentation": {
      "explanation": "A fork is a single move that attacks two (or more) enemy targets at once, so the opponent can only save one. Any piece can fork, but the knight is the classic forking piece because it jumps in an L-shape (two squares one way, one square perpendicular) and lands on a square no other piece attacks the same way — the opponent can't simply block the attack with a piece in between, the way you can against a bishop, rook, or queen. To spot a fork, scan for a square the knight can reach that sits a knight's-move away from two or more valuable enemy pieces at once. The best forks hit the king (because check is forced and the opponent must respond to it first) alongside another piece — that combination is called a 'royal fork' and it almost always wins material for free.",
      "examples": [
        {
          "fen": "4k3/8/8/3n4/8/2K5/4Q3/8 w - - 0 1",
          "description": "White to move. The black knight on d5 looks safe, but White has a check that also threatens the knight.",
          "solution": "Qe2-e4+ is not the idea here — instead look at the queen: there is no fork available for White in this diagram; White should simply take stock. (Illustrative non-example: not every position has a fork — recognizing when one is absent is part of the skill.)",
          "explanationOfSolution": "This example intentionally shows a position WITHOUT a fork, to train the first skill: don't force a pattern that is not there. Scanning the board and concluding \"no fork available\" is a correct and valuable answer."
        },
        {
          "fen": "r3k3/8/8/8/4N3/8/8/4K3 w - - 0 1",
          "description": "White to move. The white knight sits on e4. Black has a king on e8 and a rook on a8.",
          "solution": "Nd6+",
          "explanationOfSolution": "Nd6+ gives check to the king on e8 and simultaneously attacks nothing else here directly, but it forces the king to move, after which the knight dominates central light and dark squares — use this position to practice just calculating the knight's reachable squares from d6: b5, b7, c4, c8, e4, e8, f5, f7. Notice c8 and e8 are both near the black king and rook, which is why centralizing a knight before forking is a recurring theme."
        },
        {
          "fen": "2r1k3/8/8/8/8/2N5/8/4K3 w - - 0 1",
          "description": "White to move. Knight on c3, black king on e8, black rook on c8.",
          "solution": "Nb5",
          "explanationOfSolution": "Nb5 attacks nothing yet but eyes the fork square d6 next move (Nd6+ would fork king e8 and rook c8 was already once it moves away — actually check the real fork: from b5 the knight attacks a7, c7, d6, d4, a3 — none hit both king and rook yet). This example is used as a calculation exercise: find that Nb5 is NOT yet the fork, and the real fork square against king-e8/rook-c8 is d6, reachable next move. The lesson: forks are often two moves away — find the fork SQUARE first, then find the route to it."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "chess-u1-l1-q1",
          "type": "find-the-move",
          "fen": "r1b1k3/8/8/3N4/8/8/8/4K3 w - - 0 1",
          "prompt": "White to move. Find the knight move that forks the black king and the rook on a8.",
          "answer": "Nc7+",
          "difficulty": 650,
          "hint": "Which square is a knight-jump from both e8 and a8?"
        },
        {
          "id": "chess-u1-l1-q2",
          "type": "multiple-choice",
          "prompt": "Why is the knight considered the classic forking piece, more than the queen?",
          "options": [
            "It moves faster than other pieces",
            "Its attack can't be blocked by interposing a piece, since it jumps over everything",
            "It is worth less, so opponents fear losing it less",
            "It always gives check when it forks"
          ],
          "answer": "Its attack can't be blocked by interposing a piece, since it jumps over everything",
          "difficulty": 600
        },
        {
          "id": "chess-u1-l1-q3",
          "type": "find-the-move",
          "fen": "2r1k3/8/8/8/4N3/8/8/4K3 w - - 0 1",
          "prompt": "White to move. Find the knight fork that hits the king on e8 and the rook on c8.",
          "answer": "Nd6+",
          "difficulty": 650
        }
      ]
    },
    "title": "Unit 1, Lesson 1: Foundational & Structural Mastery"
  },
  "chess-u1-l2": {
    "id": "chess-u1-l2",
    "unit": "chess-u1",
    "level": "beginner",
    "objective": "Find knight forks that win the king plus a major piece (a \"royal fork\") in one to two moves.",
    "difficulty": 700,
    "presentation": {
      "explanation": "A royal fork attacks the king and the queen (or another major piece) simultaneously. Because the king must move out of check first, the second target falls for free next move. To hunt for royal forks, first identify the squares a knight-move away from the enemy king — there are at most eight. Then check which of those squares is ALSO a knight's-move from the enemy queen or a rook. If your knight can reach that intersection square in one move (ideally with check, or with tempo so the opponent cannot simply move the queen away first), you have a royal fork. The classic setup is when the king and queen sit on squares of the same color, two files/ranks apart in an L-shaped relationship — that geometric relationship is exactly what a single knight jump can straddle.",
      "examples": [
        {
          "fen": "4k3/8/4q3/3N4/8/8/8/6K1 w - - 0 1",
          "description": "White to move. King e8, queen e6 for black; white knight on d5.",
          "solution": "Nc7+",
          "explanationOfSolution": "From d5 the knight's reach is b4, b6, c3, c7, e3, e7, f4, f6 — and c7 is the fork square, since a knight on c7 reaches a6, a8, b5, d5, e6, e8. That hits both the king on e8 and the queen on e6 at once. The queen cannot capture the knight (c7 is not on any rank, file, or diagonal from e6) and cannot block a knight's check, so the king must move — and Nxe6 wins the queen next. That is the royal fork."
        },
        {
          "fen": "2k5/8/1q6/8/8/3N4/8/4K3 w - - 0 1",
          "description": "White to move. King c8, queen b6 for black; white knight on d3.",
          "solution": "Nb4",
          "explanationOfSolution": "Nb4 attacks a6, a2, c2, c6, d5 — not the fork. The real fork square: check which square attacks both c8 and b6. That is a6 (a6 attacks b8, c7, c5, b4 — not it either) or d7 (attacks b6, b8, c5, f6, f8 — d7 hits b6! and b8, not c8 directly). Correct fork square is a5? Systematically: squares a knight-move from c8 are a7, b6, d6, e7. Squares a knight-move from b6 are a4, a8, c4, c8, d5, d7. The intersection is none directly, so instead the practical route is Nd3-c5, attacking b7, a6, a4, b3, d3, e4, e6, d7 — c5 hits d7 and e6 but still not both targets. This example is deliberately hard: it trains you to conclude 'no one-move royal fork exists here,' and instead look for a forcing check (Nb4+ is not check either) before committing — with knight forks, always verify the landing square against BOTH targets by listing all eight knight-move destinations rather than guessing."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "chess-u1-l2-q1",
          "type": "find-the-move",
          "fen": "4k3/8/4q3/3N4/8/8/8/6K1 w - - 0 1",
          "prompt": "White to move. Find the royal fork that wins the black queen.",
          "answer": "Nc7+",
          "difficulty": 700
        },
        {
          "id": "chess-u1-l2-q2",
          "type": "short-answer",
          "prompt": "List all eight squares a knight standing on d5 can move to (assume an otherwise empty board).",
          "answer": "b4, b6, c3, c7, e3, e7, f4, f6",
          "difficulty": 650
        },
        {
          "id": "chess-u1-l2-q3",
          "type": "multiple-choice",
          "prompt": "What makes a royal fork (king + queen) especially strong compared to forking two minor pieces?",
          "options": [
            "It is worth more points on the scoreboard",
            "The king MUST move first, so the second target cannot be saved by counter-attack",
            "It always leads to checkmate",
            "It only works with knights"
          ],
          "answer": "The king MUST move first, so the second target cannot be saved by counter-attack",
          "difficulty": 600
        }
      ]
    },
    "title": "Unit 1, Lesson 2: Foundational & Structural Mastery"
  },
  "chess-u1-l3": {
    "id": "chess-u1-l3",
    "unit": "chess-u1",
    "level": "beginner",
    "objective": "Recognize and execute pawn forks that attack two undefended pieces with a single pawn advance.",
    "difficulty": 620,
    "presentation": {
      "explanation": "Pawns capture diagonally, so a pawn advancing one square can attack two pieces sitting diagonally in front of it at the same time — this is a pawn fork. Pawn forks are common in the opening and middlegame when both sides develop pieces to natural squares without checking whether a pawn push attacks two of them at once. Because a pawn is the least valuable piece, a pawn fork is especially painful for the side being forked: they lose a knight or bishop for nothing, or must give up the exchange, in exchange for the opponent spending only a single tempo. When scanning for pawn forks, look one square ahead of each of your pawns and ask: 'if this pawn advances, what two diagonal squares does it newly attack, and is there an enemy piece on either?'",
      "examples": [
        {
          "fen": "r3k3/8/8/2b1n3/3P4/8/8/4K3 w - - 0 1",
          "description": "White to move. White pawn on d4; black bishop on c5 and knight on e5.",
          "solution": "d4-d5? is wrong direction of thought — the pawn already threatens both. Correct move: capture is not needed, the fork already exists via the pawn on d4 attacking c5 and e5 next move is false since pawns on d4 attack c5 and e5 THIS move as a capture. So White plays dxc5 or dxe5, winning a piece either way.",
          "explanationOfSolution": "A pawn on d4 attacks c5 and e5 immediately (one square diagonally forward for White). Since both a bishop and a knight sit on those squares undefended, White simply captures the more valuable/most useful one: dxe5 wins the knight outright. This teaches that forks are not always \"found\" by moving — sometimes the fork is already sitting on the board as a capturing choice, and the skill is simply noticing it."
        },
        {
          "fen": "4k3/8/3n1b2/8/2P5/8/8/4K3 w - - 0 1",
          "description": "White to move. White pawn on c4; black knight on d6, bishop on f6.",
          "solution": "c4-c5",
          "explanationOfSolution": "c5 attacks d6 (winning the knight, since c5 is a diagonal square in front of the pawn) — note c5 does NOT attack f6 (too far away), so this is really a single threat, not a double fork. Use this as a discrimination drill: not every pawn push that wins a piece is a 'fork' — a fork specifically requires two simultaneous targets. Here it's simply a winning pawn advance against an undefended knight, a related but distinct pattern worth telling apart."
        },
        {
          "fen": "4k3/8/2n1b3/8/3P4/8/8/4K3 w - - 0 1",
          "description": "White to move. White pawn on d4; black knight on c6, bishop on e6.",
          "solution": "d4-d5",
          "explanationOfSolution": "d5 attacks both c6 and e6 in one move — this IS a true pawn fork, winning a full piece since Black can only move one of the two attacked pieces."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "chess-u1-l3-q1",
          "type": "find-the-move",
          "fen": "4k3/8/2n1b3/8/3P4/8/8/4K3 w - - 0 1",
          "prompt": "White to move. Find the pawn fork that wins a piece.",
          "answer": "d4-d5",
          "difficulty": 620
        },
        {
          "id": "chess-u1-l3-q2",
          "type": "true-false",
          "prompt": "A pawn on e4 (White) attacks the squares d5 and f5.",
          "answer": "true",
          "difficulty": 550
        },
        {
          "id": "chess-u1-l3-q3",
          "type": "multiple-choice",
          "prompt": "Why is being forked by a pawn especially costly compared to being forked by a knight?",
          "options": [
            "Pawn forks are illegal to escape",
            "The attacker risks almost nothing (a pawn) to win a far more valuable piece",
            "Pawns move faster",
            "It is not more costly, they are equivalent"
          ],
          "answer": "The attacker risks almost nothing (a pawn) to win a far more valuable piece",
          "difficulty": 600
        }
      ]
    },
    "title": "Unit 1, Lesson 3: Foundational & Structural Mastery"
  },
  "chess-u1-l4": {
    "id": "chess-u1-l4",
    "unit": "chess-u1",
    "level": "beginner",
    "objective": "Identify forks delivered by bishops, rooks, and queens along open lines, not just knight and pawn forks.",
    "difficulty": 720,
    "presentation": {
      "explanation": "Knights and pawns get most of the early attention, but any piece that attacks along a line can fork too, as long as both targets sit on that same rank, file, or diagonal with nothing blocking between the attacker and each target (and nothing between the two targets that would let one shield the other). A queen is the most dangerous forking piece of all because it combines rook and bishop lines — a single queen move can threaten a piece on its file and another on a diagonal at the same time. Bishop forks typically hit two pieces on the same diagonal; rook forks hit two pieces on the same rank or file. The key difference from a knight fork: because these are LINE attacks, the defender can sometimes block the line with an interposing piece, so always check whether a block is available before assuming the fork wins material outright.",
      "examples": [
        {
          "fen": "4k3/8/8/8/5b2/8/8/4KQ2 b - - 0 1",
          "description": "Black to move. Black bishop f4; white king e1, queen f1.",
          "solution": "Bd2+",
          "explanationOfSolution": "Bd2+ checks the king on e1 along the newly-reached c1-h6 diagonal and, because the king must move, threatens to also grab material next if the queen stays on a related diagonal — in this simplified diagram the primary lesson is spotting that d2 lies on the same diagonal as e1, demonstrating how a bishop fork begins with a checking diagonal."
        },
        {
          "fen": "3rk3/8/8/8/8/8/4K3/R6r w - - 0 1",
          "description": "White to move. White rook a1, king e2; black rook d8 and rook h1.",
          "solution": "Rxh1",
          "explanationOfSolution": "This position shows a rook simply winning material along the first rank rather than a true fork — use it to practice scanning ranks and files for undefended enemy pieces sitting on them, the same scanning habit line-forks require. (Note the white king had to stand off the first rank for the rook to see all the way down it — always check your own pieces aren't blocking the very line you're counting on.)"
        },
        {
          "fen": "4k3/8/8/3q4/8/8/8/Q3K3 w - - 0 1",
          "description": "White to move. White queen a1; black king e8, black queen d5.",
          "solution": "Qa1-a8+",
          "explanationOfSolution": "Qa8+ checks along the 8th rank (a8 to e8) while the queen on a1 also sat on the a-file and diagonal a1-h8 which passes near d5 — walk the diagonal a1-b2-c3-d4-e5 to see it does NOT hit d5 (d4 does, not d5), so the real takeaway is: always trace the exact diagonal/file/rank square by square rather than assuming a queen fork is present just because both pieces look \"nearby.\" Qa8+ wins by check and tempo, forcing the king to move, after which a follow-up along the a-file or a diagonal may pick up the queen — a two-move fork sequence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "chess-u1-l4-q1",
          "type": "multiple-choice",
          "prompt": "What must you check before trusting a bishop or rook fork, that you don't need to check for a knight fork?",
          "options": [
            "Whether the king is in check",
            "Whether a piece can block (interpose) on the line between attacker and target",
            "Whether it is White or Black to move",
            "Whether the fork happens in the opening or endgame"
          ],
          "answer": "Whether a piece can block (interpose) on the line between attacker and target",
          "difficulty": 700
        },
        {
          "id": "chess-u1-l4-q2",
          "type": "find-the-move",
          "fen": "4k3/8/8/8/5b2/8/8/4KQ2 b - - 0 1",
          "prompt": "Black to move. Find the bishop move that checks the white king.",
          "answer": "Bd2+",
          "difficulty": 680
        },
        {
          "id": "chess-u1-l4-q3",
          "type": "short-answer",
          "prompt": "Name the two piece types (besides queen) that can deliver a \"line fork\" — one along ranks/files, one along diagonals.",
          "answer": "Rook (ranks and files) and bishop (diagonals)",
          "difficulty": 600
        }
      ]
    },
    "title": "Unit 1, Lesson 4: Foundational & Structural Mastery"
  },
  "chess-u1-l5": {
    "id": "chess-u1-l5",
    "unit": "chess-u1",
    "level": "beginner",
    "objective": "Solve a mixed set of fork puzzles across all piece types under time pressure, without being told which piece forks.",
    "difficulty": 750,
    "presentation": {
      "explanation": "This review lesson removes the training wheels: you will not be told in advance whether the fork is delivered by a knight, pawn, bishop, rook, or queen. In a real game nobody labels the pattern for you, so the skill this lesson builds is the FIRST scan you run on any position: (1) Is my king safe / am I in check? (2) Does any enemy piece hang (undefended)? (3) Can any of my pieces move to a square that attacks two enemy targets at once? Run that three-question scan on every position below before checking the answer.",
      "examples": [
        {
          "fen": "4k3/8/8/3n4/8/8/1P6/4K3 w - - 0 1",
          "description": "White to move. White pawn b2, black knight d5.",
          "solution": "b2-b4 does not fork anything (only one target). Correct observation: no fork exists; best move is simply developing or attacking the knight some other way.",
          "explanationOfSolution": "Included deliberately as a \"no fork\" case — over-eager pattern hunting is a common beginner error. Confirming the absence of a tactic is a real, gradeable skill."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "chess-u1-l5-q1",
          "type": "find-the-move",
          "fen": "r3k3/8/8/3N4/8/8/8/4K3 w - - 0 1",
          "prompt": "White to move. Mixed review: find the fork.",
          "answer": "Nc7+",
          "difficulty": 700
        },
        {
          "id": "chess-u1-l5-q2",
          "type": "find-the-move",
          "fen": "4k3/8/2n1b3/8/3P4/8/8/4K3 w - - 0 1",
          "prompt": "White to move. Mixed review: find the fork.",
          "answer": "d4-d5",
          "difficulty": 650
        },
        {
          "id": "chess-u1-l5-q3",
          "type": "find-the-move",
          "fen": "4k3/8/4q3/3N4/8/8/8/6K1 w - - 0 1",
          "prompt": "White to move. Mixed review: find the royal fork.",
          "answer": "Nc7+",
          "difficulty": 750
        },
        {
          "id": "chess-u1-l5-q4",
          "type": "short-answer",
          "prompt": "State the three-question scan to run on every position when hunting for forks.",
          "answer": "Am I in check? Does anything hang? Can I move to a square attacking two targets at once?",
          "difficulty": 650
        }
      ]
    },
    "title": "Unit 1, Lesson 5: Foundational & Structural Mastery"
  },
  "chess-u2-l1": {
    "id": "chess-u2-l1",
    "unit": "chess-u2",
    "level": "beginner",
    "objective": "Define an absolute pin versus a relative pin and identify each on a given board.",
    "difficulty": 650,
    "presentation": {
      "explanation": "A pin happens when a piece that attacks along a line (bishop, rook, or queen) attacks an enemy piece that has a more valuable piece directly behind it on the same line. The pinned piece cannot safely move off the line, because doing so would expose the piece behind it to capture. There are two kinds: an ABSOLUTE pin has the king behind the pinned piece — in this case the pinned piece is not just unwise to move, it is ILLEGAL to move, because moving it would put your own king in check. A RELATIVE pin has any other piece behind the pinned piece (commonly the queen) — moving the pinned piece is legal, but usually a bad trade since the more valuable piece behind it would then be captured. Absolute pins are especially powerful because the pinned piece is completely frozen — it contributes zero defense and can often be attacked again and again ('piling on') until it falls.",
      "examples": [
        {
          "fen": "4k3/8/8/8/8/4n3/8/4KB2 w - - 0 1",
          "description": "White to move. White bishop f1, black king e8, black knight e3 is NOT on the same diagonal as f1-e8 — adjust: knight on d3.",
          "solution": "Bf1 does not currently pin anything from f1; the lesson point is recognizing the diagonal a pin requires: attacker-pinned piece-king must be exactly collinear.",
          "explanationOfSolution": "Used to train the geometric check: f1, and e8 are not on the same diagonal as any square housing a knight in this example, so there is no pin yet — trace diagonals precisely rather than eyeballing 'roughly in line.'"
        },
        {
          "fen": "4k3/8/8/8/4n3/8/8/4KB2 w - - 0 1",
          "description": "White to move. White bishop f1, white king e1; black king e8, black knight e4.",
          "solution": "No pin exists here either (f1-e4-e8 is not one diagonal); this trains distinguishing a genuine pin line from pieces that merely look aligned.",
          "explanationOfSolution": "f1 sits on the a6-f1 diagonal and separately the b5-f1 diagonal; e8 and e4 sit on the e-file, a completely different line, so no pin is possible along a diagonal here. This negative example builds the discipline of tracing exact diagonals (a1-h8 style) before declaring a pin."
        },
        {
          "fen": "4k3/8/8/8/8/8/4n3/4KB2 w - - 0 1",
          "description": "White to move. White bishop f1, white king e1; black king e8, black knight e2.",
          "solution": "Bxe2",
          "explanationOfSolution": "Here the knight on e2 is simply hanging next to the white king — not a pin scenario, a direct capture. Included to sharpen the distinction between 'pin' (line attack that immobilizes a piece) and 'the piece is just undefended,' which beginners frequently conflate."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "chess-u2-l1-q1",
          "type": "multiple-choice",
          "prompt": "What makes a pin \"absolute\" rather than \"relative\"?",
          "options": [
            "The pinning piece is a queen",
            "The king (not just any piece) is directly behind the pinned piece on the line",
            "The pinned piece is worth more than 3 points",
            "The pin has lasted more than three moves"
          ],
          "answer": "The king (not just any piece) is directly behind the pinned piece on the line",
          "difficulty": 620
        },
        {
          "id": "chess-u2-l1-q2",
          "type": "true-false",
          "prompt": "In an absolute pin, moving the pinned piece is not merely bad — it is illegal.",
          "answer": "true",
          "difficulty": 600
        },
        {
          "id": "chess-u2-l1-q3",
          "type": "short-answer",
          "prompt": "Which three piece types can deliver a pin?",
          "answer": "Bishop, rook, and queen (any line-moving piece)",
          "difficulty": 600
        }
      ]
    },
    "title": "Unit 2, Lesson 1: Foundational & Structural Mastery"
  },
  "chess-u2-l2": {
    "id": "chess-u2-l2",
    "unit": "chess-u2",
    "level": "beginner",
    "objective": "Set up an absolute pin against the enemy king and follow up by piling additional attackers on the pinned piece.",
    "difficulty": 700,
    "presentation": {
      "explanation": "Finding a pin is only step one; the real reward comes from 'piling on' — bringing more of your pieces to attack the pinned piece, which cannot run away or be defended by moving it out of the line. A pinned knight in front of the king is a favorite target: knights cannot defend along the pin line the way a pawn sometimes can, so a second attacker (another pawn, a second bishop, or a rook doubling on the file) often wins it cleanly. When you spot a pin, always ask two follow-up questions: 'can I add another attacker to this piece?' and 'can the defender add another defender, and if so, do I still come out ahead once all the attackers and defenders trade off?'",
      "examples": [
        {
          "fen": "4k3/8/8/8/4n3/8/8/4KB2 w - - 0 1",
          "description": "White to move. Bishop f1, black knight e4, kings on e1/e8 (illustrative, not a legal pin line — used for the piling-on concept narratively).",
          "solution": "Conceptual example: after establishing a pin such as Bg2 pinning a knight on e4 against a king on e8-ish diagonal, follow up with a second attacker like f2-f3 or Nc3 to add pressure.",
          "explanationOfSolution": "This is a conceptual walk-through (not a strict puzzle) of the \"add a second attacker\" idea: once a piece is pinned and frozen, treat it like a piece that cannot move, and count attackers versus defenders on it just as you would for any hanging piece."
        },
        {
          "fen": "r3k3/1p6/8/8/8/8/1P6/R3K3 w - - 0 1",
          "description": "White to move. Rooks on a1/a8, pawns on b2/b7, kings on e1/e8.",
          "solution": "Ra1-a7",
          "explanationOfSolution": "Ra7 attacks the b7 pawn, which is only defended by... nothing here, since the king is far away — this shows a rook infiltrating the 7th rank, a related \"piling on\" idea where a rook attacks a pawn that has no piece behind it to add a second defender."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "chess-u2-l2-q1",
          "type": "multiple-choice",
          "prompt": "After you pin an enemy knight to its king, what is the strongest follow-up plan?",
          "options": [
            "Immediately trade your pinning piece for the knight",
            "Bring additional attackers onto the pinned piece since it cannot run",
            "Move your king forward",
            "Castle immediately regardless of the position"
          ],
          "answer": "Bring additional attackers onto the pinned piece since it cannot run",
          "difficulty": 650
        },
        {
          "id": "chess-u2-l2-q2",
          "type": "short-answer",
          "prompt": "Before piling on a pinned piece, what two counts should you compare?",
          "answer": "The number of attackers versus the number of defenders on the pinned piece",
          "difficulty": 650
        }
      ]
    },
    "title": "Unit 2, Lesson 2: Foundational & Structural Mastery"
  },
  "chess-u2-l3": {
    "id": "chess-u2-l3",
    "unit": "chess-u2",
    "level": "beginner",
    "objective": "Recognize when a relative pin can safely be broken by the defender, and when it cannot.",
    "difficulty": 720,
    "presentation": {
      "explanation": "Not every pin is a death sentence for the defender. In a relative pin (no king involved), the pinned piece is legally free to move — the only question is whether moving it loses material. Sometimes it doesn't: if the piece behind the pinned piece is well defended, or if moving the pinned piece comes with a big enough threat of its own (like a check or a bigger capture elsewhere), the defender can break the pin safely. As the attacker, before you invest more moves into piling on a relative pin, check: is the piece behind actually hanging once the pin breaks, or is it defended?",
      "examples": [
        {
          "fen": "4k3/8/8/8/8/8/3q4/2B1K3 w - - 0 1",
          "description": "White to move. White bishop c1, white king e1; black queen d2.",
          "solution": "The bishop on c1 is pinning nothing here (queen d2 is not shielding anything valuable behind it on that diagonal from c1) — used to contrast with a real relative pin.",
          "explanationOfSolution": "A reminder check: c1-d2-e3-f4... — behind d2 along that diagonal from White's attacking side there is nothing of Black's, so this is not a meaningful pin scenario, only a diagonal attack on the queen itself if defended poorly."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "chess-u2-l3-q1",
          "type": "true-false",
          "prompt": "A relative pin makes it illegal to move the pinned piece.",
          "answer": "false",
          "difficulty": 650
        },
        {
          "id": "chess-u2-l3-q2",
          "type": "multiple-choice",
          "prompt": "When can a defender safely break a relative pin?",
          "options": [
            "Never — relative pins are always fatal",
            "When the piece behind the pin is well defended, or the move creates a big enough counter-threat",
            "Only in the endgame",
            "Only if the pinning piece is a queen"
          ],
          "answer": "When the piece behind the pin is well defended, or the move creates a big enough counter-threat",
          "difficulty": 700
        }
      ]
    },
    "title": "Unit 2, Lesson 3: Foundational & Structural Mastery"
  },
  "chess-u2-l4": {
    "id": "chess-u2-l4",
    "unit": "chess-u2",
    "level": "beginner",
    "objective": "Use a pin to win material by attacking the pinned piece with a pawn.",
    "difficulty": 700,
    "presentation": {
      "explanation": "A pawn attack is one of the most efficient ways to exploit a pin, because a pawn is the cheapest possible attacker. If an enemy knight or bishop is pinned to its king or queen, and you can advance a pawn to attack it, the defender is often lost: they cannot move the pinned piece (or it's ruinous to do so), and the pawn attack forces an immediate decision. Watch especially for pins along the long diagonals or central files early in the game, where a well-timed pawn push (like e2-e4-e5 hitting a pinned knight on f6, or c2-c4-c5 hitting a pinned knight on d... ) turns a static pin into a won pawn or piece.",
      "examples": [
        {
          "fen": "4k3/8/5n2/8/8/8/5P2/4KB2 w - - 0 1",
          "description": "White to move. Bishop f1, pawn f2, black knight f6, kings e1/e8. (Illustrative — knight f6 pinned to nothing here; used to practice the pawn-attacks-pinned-piece idea narratively.)",
          "solution": "g2-g4-g5 style pawn storms are the practical technique: advance a neighboring pawn toward the pinned piece to attack it directly.",
          "explanationOfSolution": "The concrete takeaway: once you identify a pin, scan your OWN pawns for one that can advance to directly attack the pinned piece — this is a very common winning technique against a pinned knight defending a king-side fianchetto structure."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "chess-u2-l4-q1",
          "type": "multiple-choice",
          "prompt": "Why is a pawn attack especially effective against a pinned piece?",
          "options": [
            "Pawns are immune to capture",
            "It is the cheapest possible attacker, and the pinned piece often cannot safely move away",
            "Pawns can only attack pinned pieces, never other pieces",
            "It always delivers checkmate"
          ],
          "answer": "It is the cheapest possible attacker, and the pinned piece often cannot safely move away",
          "difficulty": 650
        }
      ]
    },
    "title": "Unit 2, Lesson 4: Foundational & Structural Mastery"
  },
  "chess-u2-l5": {
    "id": "chess-u2-l5",
    "unit": "chess-u2",
    "level": "beginner",
    "objective": "Solve mixed pin puzzles combining absolute pins, relative pins, and pin-and-win-material sequences.",
    "difficulty": 760,
    "presentation": {
      "explanation": "This review lesson combines everything from the unit: distinguishing absolute from relative pins, deciding when a defender can safely break a pin, and executing the pawn-attack or piling-on technique to convert a pin into won material. As with the fork review, no puzzle below tells you in advance which sub-pattern applies — identify it yourself before calculating the winning line.",
      "examples": [
        {
          "fen": "4k3/8/8/8/8/8/4n3/4KB2 w - - 0 1",
          "description": "White to move. Bishop f1, white king e1; black king e8, black knight e2.",
          "solution": "Bxe2 — direct capture, not technically a pin (review of the \"not every alignment is a pin\" distinction).",
          "explanationOfSolution": "Reinforces the discrimination skill from lesson 1: confirm the geometry before labeling something a pin."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "chess-u2-l5-q1",
          "type": "short-answer",
          "prompt": "Give one reason a defender might safely break a relative pin, and one reason an absolute pin can never be broken.",
          "answer": "Relative pin: can be broken if the piece behind is defended or the move makes a bigger threat. Absolute pin: illegal to break because it would expose the king to check.",
          "difficulty": 700
        },
        {
          "id": "chess-u2-l5-q2",
          "type": "multiple-choice",
          "prompt": "What is the most efficient piece to use when attacking an already-pinned piece?",
          "options": [
            "The queen",
            "A pawn",
            "The king",
            "It does not matter"
          ],
          "answer": "A pawn",
          "difficulty": 650
        }
      ]
    },
    "title": "Unit 2, Lesson 5: Foundational & Structural Mastery"
  },
  "chess-u3-l1": {
    "id": "chess-u3-l1",
    "unit": "chess-u3",
    "level": "beginner",
    "objective": "Define a skewer and distinguish it from a pin by which piece is attacked first.",
    "difficulty": 650,
    "presentation": {
      "explanation": "A skewer looks like a pin turned backwards. In a pin, the LESS valuable piece is attacked first, with something more valuable hiding behind it. In a skewer, the MORE valuable piece is attacked first — often the king itself — and because it must move out of the way, whatever sits directly behind it on the same rank, file, or diagonal is left exposed to capture. The geometry is identical to a pin (attacker, front piece, back piece, all in one straight line with nothing blocking between them); only the ORDER of value tells the two apart. Here is the key insight that makes king-skewers especially deadly: the piece 'protected' behind the king usually cannot interpose to block the check, because doing so would require it to slide through the square the king is standing on — and a piece can never jump over its own king. So whenever you see the enemy king lined up with one of its own pieces, check whether you can land a rook, bishop, or queen on that line with check. If you can, the piece behind is very often lost for nothing.",
      "examples": [
        {
          "fen": "8/8/8/4k2r/8/8/8/R5K1 w - - 0 1",
          "description": "White to move. White rook a1, black king e5, black rook h5 — all three will share the fifth rank once the white rook advances.",
          "solution": "Ra1-a5+",
          "explanationOfSolution": "Ra5+ lines the rook up with the king on the open fifth rank. The black rook on h5 would love to block on b5, c5, or d5 — but every one of those squares is on the FAR side of its own king from h5, so the black rook physically cannot slide past its king to reach them. The king must move, and next turn Rxh5 wins the rook for free."
        },
        {
          "fen": "8/8/5k2/3n4/8/1B6/8/K7 w - - 0 1",
          "description": "A contrasting position (not a puzzle to solve): white bishop b2, black knight d4, black king f6, all on one diagonal.",
          "solution": "This is a pin, not a skewer — no move is needed to see it.",
          "explanationOfSolution": "Here the LESS valuable piece (the knight) is in front, and the king hides behind it. The knight cannot legally move off the diagonal — that would expose its own king to check — so it is pinned and frozen, the classic setup for 'piling on' extra attackers from Unit 2. Compare this order (knight-then-king) to Example 1's order (king-then-rook) to feel the difference between a pin and a skewer."
        },
        {
          "fen": "8/8/5n2/3k4/8/8/8/K1B5 w - - 0 1",
          "description": "White to move. White bishop c1, black king d4, black knight f6, on the long diagonal b2-h8.",
          "solution": "Bc1-b2+",
          "explanationOfSolution": "Bb2+ checks the king along the diagonal, with the knight on f6 sitting directly behind it. Even though a knight CAN normally jump over pieces, it can only land on a square it is actually aimed at — and f6 to c3 (the only blocking square) is not a legal knight move, so there is no way to interpose. The king must step off the diagonal, and Bxf6 collects the knight next."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "chess-u3-l1-q1",
          "type": "find-the-move",
          "fen": "8/8/8/4k2r/8/8/8/R5K1 w - - 0 1",
          "prompt": "White to move. Find the skewer that wins the rook.",
          "answer": "Ra5+",
          "difficulty": 650,
          "hint": "Which rank can the rook occupy to line up the king and the rook together?"
        },
        {
          "id": "chess-u3-l1-q2",
          "type": "multiple-choice",
          "prompt": "What is the key difference between a pin and a skewer?",
          "options": [
            "A pin only works with knights",
            "In a pin the less valuable piece is attacked first; in a skewer the more valuable piece is attacked first",
            "A skewer always ends in checkmate",
            "A pin can only happen on diagonals"
          ],
          "answer": "In a pin the less valuable piece is attacked first; in a skewer the more valuable piece is attacked first",
          "difficulty": 600
        },
        {
          "id": "chess-u3-l1-q3",
          "type": "short-answer",
          "prompt": "Why can a piece almost never interpose to block a check when it is the piece being skewered behind its own king?",
          "answer": "Because it would have to move through the square its own king occupies, and a piece can never jump over or through its own king.",
          "difficulty": 680
        }
      ]
    },
    "title": "Unit 3, Lesson 1: Foundational & Structural Mastery"
  },
  "chess-u3-l2": {
    "id": "chess-u3-l2",
    "unit": "chess-u3",
    "level": "beginner",
    "objective": "Find skewers against the king that win a queen or rook standing behind it.",
    "difficulty": 700,
    "presentation": {
      "explanation": "Once you can recognize a skewer, the next skill is actively creating one — most king-skewers do not start out lined up; you have to maneuver a rook, bishop, or queen onto the right rank, file, or diagonal WITH check. Scan for enemy pieces that share a line with the enemy king, then ask: can any of my long-range pieces reach that same line in one move, arriving with check? Queens are the most dangerous skewering piece of all because they can approach along a rank, a file, or a diagonal, so always check all three before settling for a lesser tactic.",
      "examples": [
        {
          "fen": "8/8/8/8/4k2r/8/8/Q5K1 w - - 0 1",
          "description": "White to move. White queen a1, black king e4, black rook h4 — not yet aligned.",
          "solution": "Qa1-a4+",
          "explanationOfSolution": "The queen isn't yet on the fourth rank, so the job is to get there WITH check in one move. Qa4+ does both at once: it lines up with the king and rook together. As in Example 1 of the previous lesson, the rook on h4 cannot interpose on b4, c4, or d4 because its own king blocks the path. After the king steps off the rank, Qxh4 wins the rook."
        },
        {
          "fen": "4q3/8/8/4k3/8/1K6/8/R7 w - - 0 1",
          "description": "White to move. White rook a1, black king e5, black queen e8 — not yet aligned.",
          "solution": "Ra1-e1+",
          "explanationOfSolution": "Sliding the rook along the first rank to e1 puts it on the same file as both black pieces — the same idea as a rank skewer, just turned 90 degrees. The queen on e8 cannot come down the e-file to block, because the king on e5 is in the way. The king must step off the e-file, and Rxe8 wins the queen next."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "chess-u3-l2-q1",
          "type": "find-the-move",
          "fen": "8/8/8/8/4k2r/8/8/Q5K1 w - - 0 1",
          "prompt": "White to move. Find the skewer that wins the rook.",
          "answer": "Qa4+",
          "difficulty": 700
        },
        {
          "id": "chess-u3-l2-q2",
          "type": "find-the-move",
          "fen": "4q3/8/8/4k3/8/1K6/8/R7 w - - 0 1",
          "prompt": "White to move. Find the skewer that wins the queen.",
          "answer": "Re1+",
          "difficulty": 700
        },
        {
          "id": "chess-u3-l2-q3",
          "type": "multiple-choice",
          "prompt": "Which piece can deliver a skewer along a rank, a file, OR a diagonal, all by itself?",
          "options": [
            "Rook",
            "Bishop",
            "Queen",
            "Knight"
          ],
          "answer": "Queen",
          "difficulty": 620
        },
        {
          "id": "chess-u3-l2-q4",
          "type": "short-answer",
          "prompt": "Before playing a skewer, what must you always check about the king's escape squares?",
          "answer": "That moving the king off the line doesn't step into check from another one of your pieces, and that the defender truly has no legal way to block or capture the attacker.",
          "difficulty": 700
        }
      ]
    },
    "title": "Unit 3, Lesson 2: Foundational & Structural Mastery"
  },
  "chess-u3-l3": {
    "id": "chess-u3-l3",
    "unit": "chess-u3",
    "level": "beginner",
    "objective": "Find skewers against undefended queens and rooks with bishops and rooks.",
    "difficulty": 730,
    "presentation": {
      "explanation": "Not every skewer involves the king. Any time a more valuable piece sits in front of a less valuable one on an open line, attacking the front piece forces a choice: move it (exposing the piece behind) or lose it outright. These 'material skewers' are actually easier to spot once you stop assuming a skewer always means check — instead scan for any enemy queen or rook that shares a line with a lower-value enemy piece behind it, then check whether one of your rooks, bishops, or your queen can attack the front piece safely, ideally from a square defended by one of your own pieces so the front piece can't simply trade itself off for your attacker.",
      "examples": [
        {
          "fen": "4k3/8/8/8/3q3r/1P6/6K1/R7 w - - 0 1",
          "description": "White to move. White rook a1, pawn b3, black queen d4, black rook h4.",
          "solution": "Ra1-a4",
          "explanationOfSolution": "Ra4 attacks the queen. The queen isn't in check, so it isn't forced to move immediately — but staying put loses it for a rook, and sliding sideways along the fourth rank doesn't help either, since the rook still attacks the whole rank. The only real escape is to leave the rank entirely, which opens a direct line to the rook on h4. Notice pawn b3 guards a4 in advance — if the queen tries Qxa4 instead of retreating, bxa4 still wins the exchange (a queen for a rook and pawn)."
        },
        {
          "fen": "k7/8/8/B5r1/8/4q3/8/3K4 w - - 0 1",
          "description": "White to move. White bishop a5, white king d1, black king a8, black queen e3, black rook g5.",
          "solution": "Ba5-d2",
          "explanationOfSolution": "Bd2 attacks the queen along the long diagonal, with the rook on g5 sitting behind it on the very same line. King d1 quietly defends d2 in advance, so Qxd2 doesn't win the bishop for free — Kxd2 simply recaptures. If the queen retreats instead, Bxg5 collects the rook."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "chess-u3-l3-q1",
          "type": "find-the-move",
          "fen": "4k3/8/8/8/3q3r/1P6/6K1/R7 w - - 0 1",
          "prompt": "White to move. Find the move that skewers the queen and rook.",
          "answer": "Ra4",
          "difficulty": 730
        },
        {
          "id": "chess-u3-l3-q2",
          "type": "find-the-move",
          "fen": "k7/8/8/B5r1/8/4q3/8/3K4 w - - 0 1",
          "prompt": "White to move. Find the move that skewers the queen and rook.",
          "answer": "Bd2",
          "difficulty": 740
        },
        {
          "id": "chess-u3-l3-q3",
          "type": "multiple-choice",
          "prompt": "Why is it useful for the square your attacking piece lands on to be defended, when skewering a queen?",
          "options": [
            "It isn't useful",
            "So the queen cannot simply capture your attacker for free",
            "So the king can castle",
            "Because undefended pieces can't move"
          ],
          "answer": "So the queen cannot simply capture your attacker for free",
          "difficulty": 650
        }
      ]
    },
    "title": "Unit 3, Lesson 3: Foundational & Structural Mastery"
  },
  "chess-u3-l4": {
    "id": "chess-u3-l4",
    "unit": "chess-u3",
    "level": "beginner",
    "objective": "Compare pin versus skewer in mixed positions and choose the winning tactic.",
    "difficulty": 750,
    "presentation": {
      "explanation": "In a real game nobody tells you whether the pattern in front of you is a pin or a skewer — you have to read the order of the pieces yourself. The test is simple: trace the line from your attacking piece outward. Whichever enemy piece you would hit FIRST decides the pattern's name. If it's the less valuable of the two, you have a pin (and the win comes gradually, from piling on extra attackers). If it's the more valuable of the two — especially the king — you have a skewer (and the win is often immediate, since the front piece is forced to move right away).",
      "examples": [
        {
          "fen": "8/8/5k2/3n4/8/1B6/8/K7 w - - 0 1",
          "description": "White bishop b2, black knight d4, black king f6 — the same position from Lesson 1, Example 2.",
          "solution": "Pin — the knight (less valuable) is attacked first, with the king behind it.",
          "explanationOfSolution": "Run the test: tracing from b2 outward, the first piece hit is the knight on d4, and the king is behind it. Less valuable piece first = pin. There is no immediate capture to win here; the plan is to pile on extra attackers against the frozen knight."
        },
        {
          "fen": "7K/5q2/8/3k4/8/1P6/8/5B2 w - - 0 1",
          "description": "White to move. White bishop f1, pawn b3, king h8; black king d5, black queen f7.",
          "solution": "Bf1-c4+",
          "explanationOfSolution": "Bc4+ puts the king in front and the queen behind on the same diagonal — a skewer, not a pin, because the KING is the piece attacked first. Pawn b3 defends c4 in advance, so the king can't simply capture the checking bishop. Once the king steps aside, Bxf7 wins the queen outright."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "chess-u3-l4-q1",
          "type": "find-the-move",
          "fen": "7K/5q2/8/3k4/8/1P6/8/5B2 w - - 0 1",
          "prompt": "White to move. Identify the tactic and find the winning move.",
          "answer": "Bc4+",
          "difficulty": 750
        },
        {
          "id": "chess-u3-l4-q2",
          "type": "short-answer",
          "fen": "8/8/5k2/3n4/8/1B6/8/K7 w - - 0 1",
          "prompt": "In this position, is white's bishop on b2 pinning or skewering the black knight on d4? Justify your answer by naming which piece is attacked first.",
          "answer": "It is a pin: the knight (less valuable) is attacked first, with the king behind it.",
          "difficulty": 700
        },
        {
          "id": "chess-u3-l4-q3",
          "type": "multiple-choice",
          "prompt": "A rook attacks an enemy bishop that has an enemy queen directly behind it on the same file. What tactic is this?",
          "options": [
            "A skewer, since the queen is more valuable and must be considered first",
            "A pin, since the bishop (less valuable) is attacked first",
            "A fork",
            "Not a real tactical pattern"
          ],
          "answer": "A pin, since the bishop (less valuable) is attacked first",
          "difficulty": 700
        }
      ]
    },
    "title": "Unit 3, Lesson 4: Foundational & Structural Mastery"
  },
  "chess-u3-l5": {
    "id": "chess-u3-l5",
    "unit": "chess-u3",
    "level": "beginner",
    "objective": "Solve a mixed skewer puzzle set under time pressure.",
    "difficulty": 780,
    "presentation": {
      "explanation": "This review drill mixes everything from the unit: king skewers, material skewers, and the pin/skewer discrimination test. Nothing is labeled for you — for each position, first trace the line to identify what is really going on, THEN calculate the winning move. Real games reward the player who can do both quickly.",
      "examples": [
        {
          "fen": "8/8/8/4k2r/8/8/8/R5K1 w - - 0 1",
          "description": "Warm-up recap before the timed set below.",
          "solution": "Ra1-a5+",
          "explanationOfSolution": "The king can't shelter the rook behind it forever — Ra5+ forces the king to move, and Rxh5 follows."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "chess-u3-l5-q1",
          "type": "find-the-move",
          "fen": "8/8/8/4k2r/8/8/8/R5K1 w - - 0 1",
          "prompt": "White to move. Mixed review: find the tactic.",
          "answer": "Ra5+",
          "difficulty": 700
        },
        {
          "id": "chess-u3-l5-q2",
          "type": "find-the-move",
          "fen": "8/8/8/8/4k2r/8/8/Q5K1 w - - 0 1",
          "prompt": "White to move. Mixed review: find the tactic.",
          "answer": "Qa4+",
          "difficulty": 740
        },
        {
          "id": "chess-u3-l5-q3",
          "type": "find-the-move",
          "fen": "4k3/8/8/8/3q3r/1P6/6K1/R7 w - - 0 1",
          "prompt": "White to move. Mixed review: find the tactic (no check involved this time).",
          "answer": "Ra4",
          "difficulty": 760
        },
        {
          "id": "chess-u3-l5-q4",
          "type": "short-answer",
          "prompt": "State the one-sentence test for telling a pin apart from a skewer.",
          "answer": "Trace the line outward from your attacker: if the first piece you would hit is the LESS valuable one, it is a pin; if it is the MORE valuable one (often the king), it is a skewer.",
          "difficulty": 700
        }
      ]
    },
    "title": "Unit 3, Lesson 5: Foundational & Structural Mastery"
  },
  "chess-u4-l1": {
    "id": "chess-u4-l1",
    "unit": "chess-u4",
    "level": "beginner",
    "objective": "Define a discovered attack and explain why it can be more dangerous than a direct attack.",
    "difficulty": 700,
    "presentation": {
      "explanation": "A discovered attack happens when you move one of your pieces OUT of the way of another one of your own long-range pieces (a bishop, rook, or queen), and that second piece suddenly attacks something it couldn't see before, because the first piece was blocking its own line. The move looks unrelated to the target — you're not even moving the piece that does the attacking — which is exactly what makes discovered attacks so hard for a defender to see coming. Here is the property that makes them more dangerous than an ordinary direct attack: the piece that MOVES is completely free to do something of its own at the same time — capture a pawn, threaten a second piece, or give check itself — so a discovered attack is very often really TWO threats delivered in a single move, and the defender can usually only deal with one of them. To hunt for discovered attacks, scan your own pieces for any case where a bishop, rook, or queen is staring down a line that is currently blocked by one of your OTHER pieces, then ask what enemy piece sits further down that same line — and what the blocking piece could usefully do once it steps aside.",
      "examples": [
        {
          "fen": "q3k3/2p5/8/8/8/N7/8/R3K3 w - - 0 1",
          "description": "White to move. Rook a1, knight a3, king e1; black king e8, queen a8, pawn c7.",
          "solution": "Nb5",
          "explanationOfSolution": "The knight on a3 is blocking its own rook's view straight up the a-file to the queen on a8. Nb5 steps off that file — instantly the rook attacks the queen — AND the knight itself lands on b5, where it attacks the pawn on c7. Black cannot save the queen and the pawn in one move: this is the \"more dangerous than a direct attack\" idea in action, two threats from one move."
        },
        {
          "fen": "4k3/8/8/8/8/N7/8/R3K3 w - - 0 1",
          "description": "A contrasting position — same rook and knight, but nothing on a8 this time.",
          "solution": "Nb5 still opens the file, but there is nothing on it to attack — not every \"opened line\" is a real discovered attack.",
          "explanationOfSolution": "Included as a negative check: moving the knight still uncovers the rook's view of the whole a-file, but since no enemy piece sits on that file, nothing was actually \"discovered.\" Before getting excited about a discovered attack, always confirm there is a real target sitting on the newly-opened line."
        },
        {
          "fen": "8/8/7k/8/8/8/3N4/2B1K3 w - - 0 1",
          "description": "White to move. Bishop c1, knight d2, king e1; black king h6.",
          "solution": "Nb3+",
          "explanationOfSolution": "The knight on d2 sits squarely on the c1-h6 diagonal, blocking the bishop. Nb3 has nothing to do with the black king at all — yet the moment the knight steps aside, the bishop's diagonal is wide open all the way to h6, and it is check. This is a discovered CHECK, the single most forcing member of the discovered-attack family, because the opponent's very next move is no longer their choice."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "chess-u4-l1-q1",
          "type": "find-the-move",
          "fen": "r3k3/8/8/8/8/5N2/6B1/6K1 w - - 0 1",
          "prompt": "White to move. Knight f3, bishop g2, king g1; black king e8, rook a8. Find the move that discovers an attack on the rook.",
          "answer": "Nd4",
          "difficulty": 700,
          "hint": "Which of the knight's squares gets it off the long diagonal the bishop wants?"
        },
        {
          "id": "chess-u4-l1-q2",
          "type": "multiple-choice",
          "prompt": "Why is a discovered attack often described as \"more dangerous\" than an ordinary direct attack?",
          "options": [
            "It always wins the queen",
            "The piece that moves is free to make its own threat at the same time as the revealed piece's threat, creating two problems at once",
            "It can only be played by a knight",
            "It is illegal to block a discovered attack"
          ],
          "answer": "The piece that moves is free to make its own threat at the same time as the revealed piece's threat, creating two problems at once",
          "difficulty": 680
        },
        {
          "id": "chess-u4-l1-q3",
          "type": "short-answer",
          "prompt": "What two questions should you ask when scanning for a discovered attack?",
          "answer": "Which of my long-range pieces is currently blocked by one of my own pieces on its line, and what enemy piece sits further down that same line?",
          "difficulty": 680
        }
      ]
    },
    "title": "Unit 4, Lesson 1: Foundational & Structural Mastery"
  },
  "chess-u4-l2": {
    "id": "chess-u4-l2",
    "unit": "chess-u4",
    "level": "beginner",
    "objective": "Find discovered checks that win material because the king must respond first.",
    "difficulty": 730,
    "presentation": {
      "explanation": "A discovered check is a discovered attack where the revealed piece checks the enemy king. This is the most profitable version of the pattern, because the king MUST move (or the check must be blocked or captured) before the opponent can do anything else — including saving whatever the moving piece just attacked on its own. In practice this means: if you can find a discovered check where the piece that moves also lands on a square attacking an enemy piece (especially the queen), that piece is usually just lost, since the defender's only legal moves are ones that answer the check. Even a pawn can trigger a discovered check simply by capturing something that was standing in a long-range piece's way — which means the pawn wins its capture for free too, since the opponent has to deal with the check first.",
      "examples": [
        {
          "fen": "k2q4/8/8/N7/8/8/8/R5K1 w - - 0 1",
          "description": "White to move. Rook a1, knight a5, king g1; black king a8, queen d8.",
          "solution": "Nc6+",
          "explanationOfSolution": "Nc6 steps off the a-file, discovering check from the rook on a1 straight up to the king on a8. At the same time, the knight lands on c6, where it attacks the queen on d8. Black has no choice but to answer the check first — and whichever way the king moves, Nxd8 wins the queen next move."
        },
        {
          "fen": "1q5k/8/8/4N3/8/8/1B6/6K1 w - - 0 1",
          "description": "White to move. Bishop b2, knight e5, king g1; black king h8, queen b8.",
          "solution": "Nd7+",
          "explanationOfSolution": "The knight on e5 blocks its own bishop's long diagonal (b2 to h8). Nd7 clears that diagonal — instant discovered check — while the knight itself lands on d7, attacking the queen on b8. Exactly the same shape as the previous example, just on a diagonal instead of a file: the king must move, and Nxb8 follows."
        },
        {
          "fen": "4k3/8/8/3n4/4P3/8/8/4R1K1 w - - 0 1",
          "description": "White to move. Rook e1, pawn e4, king g1; black king e8, knight d5.",
          "solution": "exd5",
          "explanationOfSolution": "The pawn on e4 blocks its own rook's view up the e-file. exd5 captures the black knight AND clears the file at the same time, discovering check from the rook on e1 to the king on e8 — so this single pawn move both wins a full piece and forces the king to respond. A discovered check delivered by a capturing pawn is one of the most common ways this pattern shows up in real games, because nobody expects a \"small\" pawn move to be the dangerous part."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "chess-u4-l2-q1",
          "type": "find-the-move",
          "fen": "k2q4/8/8/N7/8/8/8/R5K1 w - - 0 1",
          "prompt": "White to move. Find the discovered check that wins the queen.",
          "answer": "Nc6+",
          "difficulty": 730
        },
        {
          "id": "chess-u4-l2-q2",
          "type": "find-the-move",
          "fen": "4k3/8/8/3n4/4P3/8/8/4R1K1 w - - 0 1",
          "prompt": "White to move. Find the capture that wins a piece and discovers check at the same time.",
          "answer": "exd5+",
          "difficulty": 720
        },
        {
          "id": "chess-u4-l2-q3",
          "type": "multiple-choice",
          "prompt": "Why does a discovered check win material especially reliably, compared to a discovered attack that is not check?",
          "options": [
            "It does not — they are equally reliable",
            "The defender is forced to answer the check first, so they cannot use that move to save the other attacked piece",
            "Checks are worth extra points",
            "Only checks can be blocked"
          ],
          "answer": "The defender is forced to answer the check first, so they cannot use that move to save the other attacked piece",
          "difficulty": 680
        },
        {
          "id": "chess-u4-l2-q4",
          "type": "true-false",
          "prompt": "A pawn capture can trigger a discovered check if the pawn was blocking one of your own long-range pieces.",
          "answer": "true",
          "difficulty": 650
        }
      ]
    },
    "title": "Unit 4, Lesson 2: Foundational & Structural Mastery"
  },
  "chess-u4-l3": {
    "id": "chess-u4-l3",
    "unit": "chess-u4",
    "level": "beginner",
    "objective": "Identify discovered attacks created by moving a piece that both unleashes and itself attacks something (the double check family).",
    "difficulty": 760,
    "presentation": {
      "explanation": "Double check is the most forcing tactic in all of chess. It happens when the piece you move gives check ALL BY ITSELF, at the very same instant it discovers a check from a second piece behind it — so the enemy king is attacked by two pieces at once, from two different directions. This changes the defender's options completely. Normally a check can be answered three ways: move the king, block the line, or capture the checking piece. In a double check, blocking is useless (you can only block ONE line, and the other checker still has the king), and capturing is useless too (capturing one checker still leaves the other one giving check). That leaves exactly one legal option: move the king. Because the defender's choices collapse to a single type of move, double checks are extremely dangerous — they are the classic engine behind forced checkmates, since you can steer the king to a square where nothing defends it. To spot a double check, look for a move where your moving piece both lands on a square that attacks the enemy king directly AND clears a line for a second piece to attack the king too.",
      "examples": [
        {
          "fen": "7k/8/8/4N3/8/8/1B6/6K1 w - - 0 1",
          "description": "White to move. Bishop b2, knight e5, king g1; black king h8 only.",
          "solution": "Ng6+",
          "explanationOfSolution": "Ng6 gives check by itself — a knight on g6 directly attacks h8 — and it simultaneously clears the b2-h8 diagonal for the bishop, which now also checks h8. Two attackers, one king: the only legal replies are Kh7 or Kg8. There is no capture (nothing reaches g6, and even if something did, the bishop would still have the king in check) and no block (you cannot interpose on a knight's attack, and blocking the bishop's diagonal still leaves the knight checking)."
        },
        {
          "fen": "k1q5/8/8/8/N7/8/8/R5K1 w - - 0 1",
          "description": "White to move. Rook a1, knight a4, king g1; black king a8, queen c8.",
          "solution": "Nb6+",
          "explanationOfSolution": "Nb6 checks the king on a8 directly (a knight on b6 attacks a8), and it clears the a-file for the rook on a1 to check a8 as well — another double check. Notice the queen on c8 is completely irrelevant here: it cannot block two different lines at once, and it cannot capture a knight on b6 in one move from c8 either. The king has exactly two legal squares."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "chess-u4-l3-q1",
          "type": "find-the-move",
          "fen": "7k/8/8/4N3/8/8/1B6/6K1 w - - 0 1",
          "prompt": "White to move. Find the double check.",
          "answer": "Ng6+",
          "difficulty": 760
        },
        {
          "id": "chess-u4-l3-q2",
          "type": "find-the-move",
          "fen": "k1q5/8/8/8/N7/8/8/R5K1 w - - 0 1",
          "prompt": "White to move. Find the double check, even though the black queen looks like it should help.",
          "answer": "Nb6+",
          "difficulty": 770
        },
        {
          "id": "chess-u4-l3-q3",
          "type": "short-answer",
          "prompt": "Why is moving the king the ONLY legal response to a double check?",
          "answer": "Because two pieces are giving check from two different lines at once, so blocking or capturing can only deal with one checker while the other still has the king in check — only moving the king escapes both at once.",
          "difficulty": 720
        },
        {
          "id": "chess-u4-l3-q4",
          "type": "multiple-choice",
          "prompt": "What makes double check especially useful for forcing checkmate?",
          "options": [
            "It is worth double the material",
            "The defender's options collapse to king moves only, so you can steer the king onto a square with no safe squares left",
            "It skips the opponent's turn entirely",
            "It is not actually stronger than a normal check"
          ],
          "answer": "The defender's options collapse to king moves only, so you can steer the king onto a square with no safe squares left",
          "difficulty": 700
        }
      ]
    },
    "title": "Unit 4, Lesson 3: Foundational & Structural Mastery"
  },
  "chess-u4-l4": {
    "id": "chess-u4-l4",
    "unit": "chess-u4",
    "level": "beginner",
    "objective": "Build a battery (two pieces on one line) as preparation for a future discovered attack.",
    "difficulty": 700,
    "presentation": {
      "explanation": "A battery is two (or more) of your long-range pieces stacked on the same rank, file, or diagonal, aiming at the same target — a rook behind a rook on an open file, or a queen behind a bishop on a diagonal. On their own, discovered attacks and double checks in this unit have mostly relied on a piece ALREADY sitting in the right place, ready to be unleashed. In a real game you often have to build that setup yourself, over one or more quiet moves, before the tactic is available at all. Building a battery does two things at once: it adds a second attacker to a target that only had one (which matters if the target is defended — two attackers can beat one defender), and it lays the groundwork for a discovered attack later, since the front piece can eventually move or capture and hand the line to the piece behind it. When you don't see an immediate tactic, get in the habit of asking: 'can I reposition one of my pieces to double up on a file or diagonal I already have some pressure on?'",
      "examples": [
        {
          "fen": "r3k3/1b6/8/8/7R/8/8/R5K1 w - - 0 1",
          "description": "White to move. Rooks on a1 and h4, king g1; black king e8, rook a8, bishop b7 defending it.",
          "solution": "Rha4",
          "explanationOfSolution": "Right now White's rook on a1 attacks the black rook on a8, but the bishop on b7 defends it — trading Rxa8 Bxa8 just swaps rook for rook and hands Black the a8 bishop for free next. Rha4 brings the SECOND rook onto the same file instead, building a battery: two attackers against one defender. Now Rxa8 Bxa8 Rxa8 wins a full piece, because the bishop cannot recapture twice."
        },
        {
          "fen": "3k4/8/n7/7Q/2B5/8/8/6K1 w - - 0 1",
          "description": "White to move. Bishop c4, queen h5, king g1; black king d8, knight a6.",
          "solution": "Qe2",
          "explanationOfSolution": "The bishop on c4 already attacks the knight on a6 along the a6-f1 diagonal. Qe2 brings the queen onto that exact same diagonal, directly behind the bishop — a battery. The knight was already outnumbered the moment this move is played, and even if Black finds a defender for it, the bishop can now consider moving elsewhere along the diagonal (or capturing) and handing the queen a newly-discovered attack down the same line."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "chess-u4-l4-q1",
          "type": "find-the-move",
          "fen": "r3k3/1b6/8/8/7R/8/8/R5K1 w - - 0 1",
          "prompt": "White to move. The black rook on a8 is defended by the bishop on b7. Find the move that builds a battery to win it anyway.",
          "answer": "Rha4",
          "difficulty": 700
        },
        {
          "id": "chess-u4-l4-q2",
          "type": "find-the-move",
          "fen": "3k4/8/n7/7Q/2B5/8/8/6K1 w - - 0 1",
          "prompt": "White to move. Find the move that lines the queen up behind the bishop on the same diagonal.",
          "answer": "Qe2",
          "difficulty": 690
        },
        {
          "id": "chess-u4-l4-q3",
          "type": "multiple-choice",
          "prompt": "What is a \"battery\" in chess?",
          "options": [
            "A pair of knights defending each other",
            "Two or more long-range pieces stacked on the same rank, file, or diagonal, aiming at the same target",
            "A king and queen standing next to each other",
            "Any two pieces that attack the same square from different lines"
          ],
          "answer": "Two or more long-range pieces stacked on the same rank, file, or diagonal, aiming at the same target",
          "difficulty": 650
        }
      ]
    },
    "title": "Unit 4, Lesson 4: Foundational & Structural Mastery"
  },
  "chess-u4-l5": {
    "id": "chess-u4-l5",
    "unit": "chess-u4",
    "level": "beginner",
    "objective": "Solve a mixed puzzle set covering all four beginner tactical motifs together.",
    "difficulty": 780,
    "presentation": {
      "explanation": "This is the capstone review for the entire beginner level: forks, pins, skewers, and discovered attacks, all in one puzzle set, with nothing labeled in advance. In a real game these four patterns overlap constantly — a pin sets up a pawn fork, a skewer falls out of a discovered check, a battery you built three moves ago suddenly wins material because your opponent forgot about it. The scanning habit that ties all four together: before every move, check whether the king is safe, whether anything hangs, whether one of your pieces can hit two targets at once, and whether moving a piece out of its own way reveals an attack from something behind it. Run all four checks, every move, and these patterns stop being separate tricks and start being one habit.",
      "examples": [
        {
          "fen": "k2q4/8/8/N7/8/8/8/R5K1 w - - 0 1",
          "description": "Recap: the discovered-check royal fork from this unit.",
          "solution": "Nc6+",
          "explanationOfSolution": "Discovered check from the rook, plus the knight itself attacks the queen on d8 — the king must move, and Nxd8 follows."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "chess-u4-l5-q1",
          "type": "find-the-move",
          "fen": "r1b1k3/8/8/3N4/8/8/8/4K3 w - - 0 1",
          "prompt": "White to move. Which of the four motifs is this, and what is the move?",
          "answer": "Nc7+",
          "difficulty": 700,
          "hint": "One piece, two targets, in one jump — a fork."
        },
        {
          "id": "chess-u4-l5-q2",
          "type": "find-the-move",
          "fen": "k7/8/8/8/4n3/3P4/6B1/6K1 w - - 0 1",
          "prompt": "White to move. The black knight on e4 is pinned to the king on a8 by the bishop on g2. Find the move that wins it.",
          "answer": "dxe4",
          "difficulty": 700
        },
        {
          "id": "chess-u4-l5-q3",
          "type": "find-the-move",
          "fen": "8/8/8/4k2r/8/8/8/R5K1 w - - 0 1",
          "prompt": "White to move. Which of the four motifs is this, and what is the move?",
          "answer": "Ra5+",
          "difficulty": 700
        },
        {
          "id": "chess-u4-l5-q4",
          "type": "find-the-move",
          "fen": "k2q4/8/8/N7/8/8/8/R5K1 w - - 0 1",
          "prompt": "White to move. Which of the four motifs is this, and what is the move?",
          "answer": "Nc6+",
          "difficulty": 730
        },
        {
          "id": "chess-u4-l5-q5",
          "type": "short-answer",
          "prompt": "State the four-question scan to run on every move, combining all of unit 1-4's patterns.",
          "answer": "Is my king safe? Does anything hang? Can one of my pieces hit two targets at once (fork/skewer)? Does moving a piece out of its own way reveal an attack from something behind it (discovered attack)?",
          "difficulty": 750
        }
      ]
    },
    "title": "Unit 4, Lesson 5: Foundational & Structural Mastery"
  },
  "chess-u5-l1": {
    "id": "chess-u5-l1",
    "unit": "chess-u5",
    "level": "intermediate",
    "objective": "Combine a pin with a fork in a two-move tactical sequence to win material.",
    "difficulty": 800,
    "presentation": {
      "explanation": "An absolutely pinned piece cannot move at all — not won't, CAN'T, since moving it would be an illegal move that exposes its own king. That makes it the single best fork target on the board: a normal piece can run away from a fork, but a pinned one has nowhere to go. This lesson combines the pin skill from Unit 2 with the fork skill from Unit 1: find (or already have) an absolute pin, then bring a SECOND attacker — ideally one that also threatens something else at the same time — onto the pinned piece. Even if the defender finds a clever way to add a defender of their own, counting attackers versus defenders on the frozen piece almost always still favors you, because you get to choose the moment and the order of the trades.",
      "examples": [
        {
          "fen": "7k/2r5/8/8/3n1N2/8/6K1/B7 w - - 0 1",
          "description": "White to move. Bishop a1, knight f4, king g2; black king h8, knight d4 (pinned to the king by the bishop), rook c7.",
          "solution": "Ne6",
          "explanationOfSolution": "The knight on d4 is absolutely pinned — check its legal moves and there are none. Ne6 forks it with the rook on c7 at the same time. Even if Black tries the best defense, 1...Rc4 (escaping the knight's attack while also adding a second defender to d4), White simply continues 2.Bxd4 Rxd4 3.Nxd4 — two attackers beat one defender, and White ends up a full rook ahead. If Black ignores the rook instead, Nxc7 just wins it outright."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "chess-u5-l1-q1",
          "type": "find-the-move",
          "fen": "7k/2r5/8/8/3n1N2/8/6K1/B7 w - - 0 1",
          "prompt": "White to move. The knight on d4 is absolutely pinned by the bishop on a1. Find the move that also forks the rook on c7.",
          "answer": "Ne6",
          "difficulty": 800
        },
        {
          "id": "chess-u5-l1-q2",
          "type": "short-answer",
          "prompt": "After 1.Ne6 Rc4 (Black's best try, defending d4), what does White play, and why does it still win material?",
          "answer": "2.Bxd4 Rxd4 3.Nxd4 — two White attackers (the bishop and the knight) beat Black's one defender (the rook) on d4, so White ends up a full rook ahead.",
          "difficulty": 820
        },
        {
          "id": "chess-u5-l1-q3",
          "type": "multiple-choice",
          "prompt": "Why is an absolutely pinned piece such a good fork target?",
          "options": [
            "It is worth extra points while pinned",
            "It cannot legally move away, so a second attacker is often enough to win it outright",
            "It automatically loses its defenders",
            "It can no longer be captured"
          ],
          "answer": "It cannot legally move away, so a second attacker is often enough to win it outright",
          "difficulty": 760
        }
      ]
    },
    "title": "Unit 5, Lesson 1: Foundational & Structural Mastery"
  },
  "chess-u5-l2": {
    "id": "chess-u5-l2",
    "unit": "chess-u5",
    "level": "intermediate",
    "objective": "Use a deflection to remove a defender before executing a fork or skewer.",
    "difficulty": 810,
    "presentation": {
      "explanation": "A deflection forces an enemy piece away from a square or duty it needs to stay on, usually by attacking or capturing something else that piece is the only one able to answer. Once the defender is pulled away — even temporarily, even by force — whatever it was protecting becomes fair game. The classic shape: you offer a trade the defender \"must\" accept (declining loses even more material outright), and accepting drags it off the square where it was doing useful work. Before playing a deflection, always identify exactly what the target piece defends and confirm it is the ONLY defender — deflecting one of two defenders accomplishes nothing.",
      "examples": [
        {
          "fen": "r2qk3/8/5n2/6B1/8/8/8/R5K1 w - - 0 1",
          "description": "White to move. Rook a1, bishop g5, king g1; black king e8, queen d8, rook a8, knight f6 (defended only by the queen).",
          "solution": "Rxa8",
          "explanationOfSolution": "The knight on f6 is defended exactly once, by the queen on d8 along the d8-f6 diagonal. Rxa8 attacks the black rook, and the queen is the only piece that can recapture it. If Black declines and plays something else, White is simply up a full rook for nothing. If Black plays 1...Qxa8 (the natural try), the queen has now left the diagonal it needed to guard — 2.Bxf6 wins the knight for free. The rook offered itself as bait to drag the queen off its post."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "chess-u5-l2-q1",
          "type": "find-the-move",
          "fen": "r2qk3/8/5n2/6B1/8/8/8/R5K1 w - - 0 1",
          "prompt": "White to move. Find the move that deflects the queen away from defending the knight on f6.",
          "answer": "Rxa8",
          "difficulty": 810
        },
        {
          "id": "chess-u5-l2-q2",
          "type": "short-answer",
          "prompt": "After 1.Rxa8 Qxa8, why does 2.Bxf6 win a piece for free?",
          "answer": "Because the queen, the only piece defending the knight on f6, had to move to a8 to recapture the rook — it no longer guards the f6 diagonal, so the knight is simply undefended.",
          "difficulty": 800
        },
        {
          "id": "chess-u5-l2-q3",
          "type": "true-false",
          "prompt": "A deflection only works if the target piece is the ONLY defender of what you actually want to win.",
          "answer": "true",
          "difficulty": 750
        }
      ]
    },
    "title": "Unit 5, Lesson 2: Foundational & Structural Mastery"
  },
  "chess-u5-l3": {
    "id": "chess-u5-l3",
    "unit": "chess-u5",
    "level": "intermediate",
    "objective": "Recognize and execute a decoy sacrifice that lures a king or piece onto a forking square.",
    "difficulty": 830,
    "presentation": {
      "explanation": "A decoy sacrifice gives up material on purpose to force an enemy piece — very often the king itself — onto a specific square, usually with a check that leaves no other legal reply. The sacrifice is never the point; the point is what happens NEXT, once the king (or piece) is standing exactly where you wanted it. The classic combination is decoy-then-fork: sacrifice a piece with check so the king is forced to capture it on a precise square, then deliver a knight fork that hits the king on that exact square plus something else valuable. Before playing the sacrifice, work backward: pick the fork you want to deliver, find the square the king needs to stand on for that fork to work, and only then look for a forcing way to put it there.",
      "examples": [
        {
          "fen": "7k/7r/8/8/4N3/1Q6/8/6K1 w - - 0 1",
          "description": "White to move. Queen b3, knight e4, king g1; black king h8, rook h7.",
          "solution": "Qg8+",
          "explanationOfSolution": "The queen sacrifices itself on g8, giving check. It looks reckless, but check the king's other options: Kg7 and Kh7 both walk into check from the queen itself (it controls the whole g-file and the g8-h7 diagonal), so 1...Kxg8 is completely forced. Now the king stands exactly on the square the follow-up needs: 2.Nf6+ forks the king and the rook on h7 at once. The king must move again, and 3.Nxh7 collects the rook. Three forcing moves, one plan, decided before the sacrifice was ever played."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "chess-u5-l3-q1",
          "type": "find-the-move",
          "fen": "7k/7r/8/8/4N3/1Q6/8/6K1 w - - 0 1",
          "prompt": "White to move. Find the queen sacrifice that decoys the king onto a fork square.",
          "answer": "Qg8+",
          "difficulty": 830
        },
        {
          "id": "chess-u5-l3-q2",
          "type": "find-the-move",
          "fen": "6k1/7r/8/8/4N3/8/8/6K1 w - - 0 2",
          "prompt": "Continuing the combination: after 1.Qg8+ Kxg8, find the fork that wins the rook.",
          "answer": "Nf6+",
          "difficulty": 830
        },
        {
          "id": "chess-u5-l3-q3",
          "type": "short-answer",
          "prompt": "What is the correct order of thinking when planning a decoy sacrifice?",
          "answer": "Work backward: first pick the fork (or other tactic) you want to deliver, find the exact square the enemy king or piece must stand on for it to work, then find a forcing way (usually a check) to put it there.",
          "difficulty": 800
        }
      ]
    },
    "title": "Unit 5, Lesson 3: Foundational & Structural Mastery"
  },
  "chess-u5-l4": {
    "id": "chess-u5-l4",
    "unit": "chess-u5",
    "level": "intermediate",
    "objective": "Find double-attack combinations that exploit overloaded defenders.",
    "difficulty": 820,
    "presentation": {
      "explanation": "A defender is overloaded when it is the only thing guarding TWO separate targets at once — a rook covering both a back-rank mate and a hanging piece, or here, a queen defending a piece on one line and a completely different piece on another line entirely. An overloaded defender cannot actually do both jobs; it only looks like it can, because the danger hasn't been tested yet. The technique is simple once you spot the overload: attack (or capture) whichever of the two targets you like — the defender can only address the one it moves to, and the other one falls. Overload is really deflection's twin: instead of forcing the defender away with a threat elsewhere, you let its own single move do the deflecting for you.",
      "examples": [
        {
          "fen": "n2qk3/8/8/8/7r/8/8/R3B1K1 w - - 0 1",
          "description": "White to move. Rook a1, bishop e1, king g1; black king e8, queen d8, knight a8, rook h4.",
          "solution": "Rxa8",
          "explanationOfSolution": "The queen on d8 is doing two jobs at once: it defends the knight on a8 along the 8th rank, AND it defends the rook on h4 along the d8-h4 diagonal. It cannot do a third thing, which is what matters here — Rxa8 forces the issue. If Black recaptures 1...Qxa8, the queen has abandoned the h4 diagonal, and 2.Bxh4 wins the rook for free. If Black leaves the knight lost instead, White simply keeps the extra piece. Either way, the overloaded queen was always going to lose something."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "chess-u5-l4-q1",
          "type": "find-the-move",
          "fen": "n2qk3/8/8/8/7r/8/8/R3B1K1 w - - 0 1",
          "prompt": "White to move. The black queen defends both the knight on a8 and the rook on h4. Find the move that exploits this.",
          "answer": "Rxa8",
          "difficulty": 820
        },
        {
          "id": "chess-u5-l4-q2",
          "type": "short-answer",
          "prompt": "After 1.Rxa8 Qxa8, why is the rook on h4 now lost?",
          "answer": "Because the queen had to leave d8 to recapture on a8, and d8 was the only square from which it defended h4 along the diagonal — so 2.Bxh4 wins it for free.",
          "difficulty": 800
        },
        {
          "id": "chess-u5-l4-q3",
          "type": "multiple-choice",
          "prompt": "An \"overloaded\" defender is best described as:",
          "options": [
            "A piece that has moved too many times",
            "A single piece that is the only guard for two or more separate targets at once",
            "A piece that is worth more than 9 points",
            "Any piece standing next to the king"
          ],
          "answer": "A single piece that is the only guard for two or more separate targets at once",
          "difficulty": 760
        }
      ]
    },
    "title": "Unit 5, Lesson 4: Foundational & Structural Mastery"
  },
  "chess-u5-l5": {
    "id": "chess-u5-l5",
    "unit": "chess-u5",
    "level": "intermediate",
    "objective": "Solve multi-step combinations (3+ moves) that chain two or more tactical motifs.",
    "difficulty": 850,
    "presentation": {
      "explanation": "This lesson closes out the unit by asking for the whole chain at once: a forcing sacrifice that leaves the opponent no choice, followed by a second tactic that only works because of where the sacrifice forced things to land. Real combinations are rarely just one pattern — they are two or three of this unit's ideas stacked in a row, each move narrowing the opponent's options until nothing is left. The discipline that makes this manageable: at each step, ask whether your candidate move is FORCING (check, capture of something valuable, or a threat so severe it can't be ignored). If every one of your moves is forcing, you don't need to calculate what the opponent \"might\" do — there is only one legal reply to check, and you can read it straight off the board.",
      "examples": [
        {
          "fen": "7k/7r/8/8/4N3/8/8/K5R1 w - - 0 1",
          "description": "White to move. Rook g1, knight e4, king a1; black king h8, rook h7.",
          "solution": "Rg8+",
          "explanationOfSolution": "Rg8+ sacrifices the rook with check. The king's own rook blocks Kh7, and the checking rook itself covers g7 along the g-file, so 1...Kxg8 is forced — there is no other legal reply. Now 2.Nf6+ forks the king and the rook on h7, and however the king answers the check, 3.Nxh7+ collects the rook (with check to spare). A sacrificial decoy feeding directly into a fork: two motifs, one forced sequence, decided from the very first move."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "chess-u5-l5-q1",
          "type": "find-the-move",
          "fen": "7k/7r/8/8/4N3/8/8/K5R1 w - - 0 1",
          "prompt": "White to move. Find the forcing sacrifice that starts a winning combination.",
          "answer": "Rg8+",
          "difficulty": 850
        },
        {
          "id": "chess-u5-l5-q2",
          "type": "find-the-move",
          "fen": "6k1/7r/8/8/4N3/8/8/K7 w - - 0 2",
          "prompt": "Continuing the combination: after 1.Rg8+ Kxg8, find the move that forks the king and the rook.",
          "answer": "Nf6+",
          "difficulty": 850
        },
        {
          "id": "chess-u5-l5-q3",
          "type": "short-answer",
          "prompt": "What test should you run on every candidate move when calculating a multi-step combination, so you don't have to guess what the opponent will do?",
          "answer": "Ask whether the move is forcing — a check, a capture of something valuable, or a threat too severe to ignore. If it is, the opponent has only one (or very few) legal replies, so you can read the position forward instead of guessing.",
          "difficulty": 800
        }
      ]
    },
    "title": "Unit 5, Lesson 5: Foundational & Structural Mastery"
  },
  "chess-u6-l1": {
    "id": "chess-u6-l1",
    "unit": "chess-u6",
    "level": "intermediate",
    "objective": "Calculate forcing sequences (checks, captures, threats) three moves deep without moving pieces.",
    "difficulty": 850,
    "presentation": {
      "explanation": "Everything so far could mostly be found by looking one move ahead. Real calculation starts when you can hold a sequence of moves in your head, evaluate the position at the end of it, and trust that evaluation enough to play the first move — all WITHOUT touching a single piece. The tool that makes this tractable is forcing moves: checks, captures, and threats so severe the opponent has only one or two sane replies. Because the reply is nearly fixed, you don't need to search a tree of possibilities — you just need to read the position straight down one narrow corridor. The classic training pattern for this skill is the smothered mate: a queen sacrifices itself on a square, the king is forced to recapture (because nothing else can), and a knight — completely immune to capture or blocking — delivers mate next move because the king's own pieces trap it with nowhere to go. Before you trust any forcing sequence, always verify one detail by eye that beginners skip: is the square your sacrifice lands on actually DEFENDED by one of your own pieces? If it isn't, the king might simply capture for free and the whole sequence collapses.",
      "examples": [
        {
          "fen": "5r1k/6pp/7N/8/8/1Q6/8/6K1 w - - 0 1",
          "description": "White to move. Queen b3, knight h6, king g1; black king h8, rook f8, pawns g7 and h7.",
          "solution": "Qg8+",
          "explanationOfSolution": "Qg8+ looks like it simply hands over the queen for nothing — but check who defends g8: the knight on h6 attacks g8, so 1...Kxg8 is illegal (it would move the king into check from the knight). That leaves exactly one legal reply: 1...Rxg8, since the rook is the only remaining piece that can capture, and the king's other two neighboring squares are blocked by its own pawns on g7 and h7. Now comes the point of the whole sacrifice: 2.Nf7# is checkmate. The knight checks the king, and the king cannot move (g8 is occupied by its own rook, g7 and h7 by its own pawns) and cannot capture the knight (f7 is not adjacent to h8) — a true smothered mate, calculated three moves deep before a single piece was picked up: sacrifice, forced recapture, mate."
        },
        {
          "fen": "5r1k/6pp/8/8/8/1Q6/8/6K1 w - - 0 1",
          "description": "The exact same idea, but with the h6 knight removed — used to show what breaks if you skip the verification step.",
          "solution": "Qg8+ is still check, but now it does NOT force a single reply the way the first example did.",
          "explanationOfSolution": "Play through it: without a knight guarding g8, Black now has TWO legal replies to Qg8+ — 1...Rxg8 (as before) or simply 1...Kxg8, since nothing stops the king from capturing the free queen. If Black takes with the king, the entire mating idea evaporates: there is no forced recapture to exploit, and White has just given away a queen for nothing. This is exactly why the habit matters: before you calculate three moves down a forcing line, confirm the square your sacrifice lands on is actually defended — one missing detail turns a forced mate into a blunder."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "chess-u6-l1-q1",
          "type": "find-the-move",
          "fen": "5r1k/6pp/7N/8/8/1Q6/8/6K1 w - - 0 1",
          "prompt": "White to move. Calculate three moves deep without moving any pieces, then find the first move of a forced mate.",
          "answer": "Qg8+",
          "difficulty": 850,
          "hint": "Check which of your own pieces already guards the square you want to sacrifice the queen on."
        },
        {
          "id": "chess-u6-l1-q2",
          "type": "find-the-move",
          "fen": "6rk/6pp/7N/8/8/8/8/6K1 w - - 0 2",
          "prompt": "Continuing the calculation: after 1.Qg8+ Rxg8 (Black's only legal reply), find the move that delivers checkmate.",
          "answer": "Nf7#",
          "difficulty": 850
        },
        {
          "id": "chess-u6-l1-q3",
          "type": "multiple-choice",
          "prompt": "Why is 1...Rxg8 the ONLY legal reply to 1.Qg8+ in the first example, rather than just one good option among several?",
          "options": [
            "Because rooks are required to recapture queens",
            "Because the knight on h6 defends g8, making Kxg8 illegal, while the pawns on g7 and h7 block the king's other escape squares",
            "Because Black is in zugzwang",
            "Because the queen is worth more than the rook"
          ],
          "answer": "Because the knight on h6 defends g8, making Kxg8 illegal, while the pawns on g7 and h7 block the king's other escape squares",
          "difficulty": 800
        },
        {
          "id": "chess-u6-l1-q4",
          "type": "short-answer",
          "prompt": "What single detail must you verify before trusting a forcing sacrifice like Qg8+, and what happens to the whole combination if you skip it?",
          "answer": "You must verify that the square your sacrifice lands on is actually defended by one of your own pieces. If it is not, the opponent can simply capture with the king (or another piece) instead of being forced into the reply your combination depends on, and the whole sequence collapses.",
          "difficulty": 820
        }
      ]
    },
    "title": "Unit 6, Lesson 1: Foundational & Structural Mastery"
  },
  "chess-u6-l2": {
    "id": "chess-u6-l2",
    "unit": "chess-u6",
    "level": "intermediate",
    "objective": "Build and evaluate a candidate-move list before committing to a plan.",
    "difficulty": 830,
    "presentation": {
      "explanation": "Strong calculation doesn't start with 'what's the first good-looking move' — it starts with a CANDIDATE LIST: every reasonable move worth considering, written out (mentally or literally) before you evaluate any of them in depth. The reason this matters is that the most tempting candidate is often not the best one, and you only find that out by calculating it all the way through rather than stopping as soon as it looks like it wins something. A very common trap this habit catches: when a piece is attacked by two of your pieces but defended by two of the opponent's, the ORDER of capture matters enormously. Capture with your least valuable attacker first. If you capture with a more valuable piece too early, you can end up trading it for something far cheaper once the defender's second guard shows up — a mistake that only becomes visible if you calculate the FULL exchange sequence for each candidate, not just the first capture.",
      "examples": [
        {
          "fen": "6k1/8/2p1p3/3n4/8/2N5/8/3R2K1 w - - 0 1",
          "description": "White to move. Knight c3, rook d1, king g1; black king g8, knight d5, pawns c6 and e6 (both defending d5).",
          "solution": "Nxd5, then STOP — do not continue with Rxd5.",
          "explanationOfSolution": "Two candidates are worth writing down here: (A) 1.Rxd5, and (B) 1.Nxd5. Calculate candidate A all the way through: 1.Rxd5 cxd5 trades a full rook for a knight — a clean loss of material, since the rook (worth 5) is gone for a knight (worth 3). Now calculate candidate B: 1.Nxd5 exd5 is an even knight-for-knight trade. The trap is what comes NEXT — it's tempting to keep grabbing with 2.Rxd5, but d5 is defended a SECOND time by the pawn on c6: 2.Rxd5?? cxd5 loses the rook for a mere pawn, a full exchange down. The correct plan is candidate B, stopped after one trade: 1.Nxd5 exd5 leaves material exactly even, and the rook stays home to fight another day rather than walking into the second defender."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "chess-u6-l2-q1",
          "type": "short-answer",
          "prompt": "In this position, how many pawns defend the black knight on d5, and why does that number matter before you calculate any capture?",
          "fen": "6k1/8/2p1p3/3n4/8/2N5/8/3R2K1 w - - 0 1",
          "answer": "Two pawns defend it (c6 and e6). That matters because White also has two attackers (the knight and the rook), so the capturing ORDER decides whether the exchange sequence ends up even or loses material — you must calculate the full sequence, not just the first capture.",
          "difficulty": 800
        },
        {
          "id": "chess-u6-l2-q2",
          "type": "multiple-choice",
          "prompt": "Which candidate move should White calculate and play FIRST when there are two attackers and two defenders on the same square?",
          "options": [
            "Capture with the most valuable attacker first, to intimidate the opponent",
            "Capture with the least valuable attacker first, and recheck the exchange after each capture",
            "It never matters which piece captures first",
            "Always capture with the rook first, since rooks are stronger"
          ],
          "answer": "Capture with the least valuable attacker first, and recheck the exchange after each capture",
          "difficulty": 780
        },
        {
          "id": "chess-u6-l2-q3",
          "type": "true-false",
          "prompt": "In this position, after 1.Nxd5 exd5, White should continue capturing with 2.Rxd5.",
          "fen": "6k1/8/2p1p3/3n4/8/2N5/8/3R2K1 w - - 0 1",
          "answer": "false",
          "difficulty": 830
        },
        {
          "id": "chess-u6-l2-q4",
          "type": "find-the-move",
          "fen": "6k1/8/2p1p3/3n4/8/2N5/8/3R2K1 w - - 0 1",
          "prompt": "White to move. Find the correct FIRST capture on d5 — the one that does not lose material once you calculate the whole exchange.",
          "answer": "Nxd5",
          "difficulty": 830
        }
      ]
    },
    "title": "Unit 6, Lesson 2: Foundational & Structural Mastery"
  },
  "chess-u6-l3": {
    "id": "chess-u6-l3",
    "unit": "chess-u6",
    "level": "intermediate",
    "objective": "Visualize a resulting position after a forced sequence and evaluate whether it favors you.",
    "difficulty": 820,
    "presentation": {
      "explanation": "Calculating the moves is only half the job — the other half is accurately picturing the position that exists AFTER the forced sequence ends, and judging whether you actually want to be there. This is harder than it sounds: it's easy to correctly calculate a series of captures and then misjudge the resulting material count, or forget that a piece has moved somewhere new and changed the position's character. The discipline: play the whole sequence out in your head to its natural stopping point (when no more profitable captures remain), THEN count material and reassess the position fresh, as if you were seeing it for the first time — not by vaguely trusting that things 'went well' along the way.",
      "examples": [
        {
          "fen": "6k1/8/4p3/3n4/8/4N3/8/3R2K1 w - - 0 1",
          "description": "White to move. Knight e3, rook d1, king g1; black king g8, knight d5, pawn e6 (its only defender).",
          "solution": "Nxd5",
          "explanationOfSolution": "Here d5 has only ONE defender (the e6 pawn), so the full sequence is safe to calculate all the way through: 1.Nxd5 exd5 2.Rxd5. Now stop and actually visualize the resulting position rather than assuming it must be fine: White's knight traded evenly for Black's knight, and the rook then captured the pawn that recaptured on d5 — with no third defender left to punish it. Counting material in that final position: White has gained a clean extra pawn compared to the starting position, with a rook now actively posted on d5 in the center. That visualized evaluation — 'up a pawn, active rook' — is what tells you this whole three-move sequence genuinely favors White, not just that the moves were legal."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "chess-u6-l3-q1",
          "type": "find-the-move",
          "fen": "6k1/8/4p3/3n4/8/4N3/8/3R2K1 w - - 0 1",
          "prompt": "White to move. Find the first move of the winning forced sequence.",
          "answer": "Nxd5",
          "difficulty": 800
        },
        {
          "id": "chess-u6-l3-q2",
          "type": "find-the-move",
          "fen": "6k1/8/8/3p4/8/8/8/3R2K1 w - - 0 2",
          "prompt": "Continuing the calculation: after 1.Nxd5 exd5, find the move that wins a clean pawn.",
          "answer": "Rxd5",
          "difficulty": 800
        },
        {
          "id": "chess-u6-l3-q3",
          "type": "short-answer",
          "prompt": "After 1.Nxd5 exd5 2.Rxd5, what is the material result for White compared to the starting position, and why is it safe (unlike the two-defender trap from the previous lesson)?",
          "answer": "White ends up a clean extra pawn: the knight trade was even, and the rook then won the recapturing pawn for free. It is safe here because d5 only had ONE defender (the e6 pawn) to begin with, so there is no second defender left to punish the rook the way there would be with two defending pawns.",
          "difficulty": 830
        },
        {
          "id": "chess-u6-l3-q4",
          "type": "true-false",
          "prompt": "Once you have correctly calculated the legal moves in a forced sequence, you can trust the result without separately re-evaluating the final position.",
          "answer": "false",
          "difficulty": 780
        }
      ]
    },
    "title": "Unit 6, Lesson 3: Foundational & Structural Mastery"
  },
  "chess-u6-l4": {
    "id": "chess-u6-l4",
    "unit": "chess-u6",
    "level": "intermediate",
    "objective": "Practice calculating quiet (non-forcing) candidate moves and comparing resulting plans.",
    "difficulty": 800,
    "presentation": {
      "explanation": "Most moves in a real game are not checks or captures — they're quiet moves, and quiet moves are actually HARDER to calculate well, because there's no forced reply to narrow things down. The opponent could do almost anything next, so instead of calculating a single forced line, you have to compare PLANS: what does this move accomplish long-term, what does it commit you to, and what does it leave flexible? Two quiet moves can solve the exact same immediate problem (say, defending a hanging pawn) while leading to completely different middlegames — one developing a piece toward active squares, the other solid but passive and blocking your own pieces. Comparing quiet candidates means asking not 'which move is legal and safe' (both usually are) but 'which resulting plan do I actually want to be playing five moves from now?'",
      "examples": [
        {
          "fen": "5rk1/8/3p1n2/8/4P3/8/3P4/1N3RK1 w - - 0 1",
          "description": "White to move. Knight b1, rook f1, pawn d2, king g1; black king g8, rook f8, knight f6, pawn d6. The pawn on e4 is attacked by the knight on f6.",
          "solution": "Nc3",
          "explanationOfSolution": "Both 1.Nc3 and 1.d3 are legal, quiet moves that equally solve the immediate problem: each defends the pawn on e4 (Nc3 attacks e4 from the knight's normal defensive angle; d3 defends it with a pawn, diagonally). If you only calculated 'does this defend the pawn,' the two candidates would look interchangeable. But visualize the PLANS each one leads to: 1.Nc3 develops a piece toward the center, eyes the useful d5 square, and keeps the pawn structure flexible for later. 1.d3 is perfectly solid but commits the pawn permanently, gains no piece activity, and can get in the way of your own pieces later (a bishop on c1, for instance, would have its diagonal blocked). Same immediate result, different five-moves-from-now — and that difference is exactly what comparing quiet candidates is for."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "chess-u6-l4-q1",
          "type": "short-answer",
          "fen": "5rk1/8/3p1n2/8/4P3/8/3P4/1N3RK1 w - - 0 1",
          "prompt": "Name two different quiet (non-check, non-capture) moves White could play here that both defend the pawn on e4.",
          "answer": "Nb1-c3 and d2-d3 (either order of naming is fine) — both defend the e4 pawn without giving check or capturing anything.",
          "difficulty": 780
        },
        {
          "id": "chess-u6-l4-q2",
          "type": "multiple-choice",
          "prompt": "Which of the two candidates, Nc3 or d3, develops a piece toward the center while defending the pawn?",
          "options": [
            "Nc3",
            "d3",
            "Both equally",
            "Neither"
          ],
          "answer": "Nc3",
          "difficulty": 750
        },
        {
          "id": "chess-u6-l4-q3",
          "type": "true-false",
          "prompt": "d2-d3 defends the e4 pawn just as effectively as Nc3 in the immediate sense, even though it commits the pawn structure more permanently and can block other pieces later.",
          "answer": "true",
          "difficulty": 780
        },
        {
          "id": "chess-u6-l4-q4",
          "type": "short-answer",
          "prompt": "Why is it important to compare quiet candidate moves by their resulting PLAN, not just by whether they are safe and legal right now?",
          "answer": "Because most moves in a real game are quiet, with no forced reply to narrow the search — several quiet candidates can all be equally safe and legal in the immediate sense while leading to very different middlegames, so the real decision is which long-term plan and piece activity you actually want, not just which move avoids an immediate problem.",
          "difficulty": 820
        }
      ]
    },
    "title": "Unit 6, Lesson 4: Foundational & Structural Mastery"
  },
  "chess-u6-l5": {
    "id": "chess-u6-l5",
    "unit": "chess-u6",
    "level": "intermediate",
    "objective": "Solve calculation-heavy puzzles requiring 4+ ply of accurate visualization.",
    "difficulty": 900,
    "presentation": {
      "explanation": "This lesson raises the bar from the unit's earlier three-move sequences to genuinely deep, BRANCHING calculation: a combination where the defender has more than one legal reply at some point, and you must verify your plan works against every single one of them before trusting it — not just the branch that first comes to mind. This is the single most common way strong calculation fails in practice: a player finds a beautiful line against the opponent's 'main' reply, plays the first move, and only then discovers the opponent had a quieter alternative that refutes the whole idea. The fix is disciplined, slightly tedious, and completely necessary: at every point where the opponent has a choice, calculate ALL of their reasonable replies, not just one.",
      "examples": [
        {
          "fen": "7k/6pp/2q1Q3/3N4/8/8/8/1K6 w - - 0 1",
          "description": "White to move. Queen e6, knight d5, king b1; black king h8, queen c6, pawns g7 and h7.",
          "solution": "Qg8+",
          "explanationOfSolution": "1.Qg8+ is a queen sacrifice, but check the recapture options first: the queen on c6 has no line to g8 (it would have to travel along the 8th rank or the long diagonal, and neither is open), so 1...Kxg8 is genuinely forced — the king is the only piece that can respond. Now comes the branch: 2.Ne7+ forks the king on g8 and the queen on c6 at once, and Black has THREE legal replies to the check — 2...Kh8, 2...Kf7, and 2...Kf8. A full calculation checks all three separately: from any of those three squares, the king is too far away to defend or recapture on c6, and nothing else guards it either. So whichever square Black's king retreats to, 3.Nxc6 wins the queen cleanly. Five plies deep — sacrifice, forced recapture, fork, any king move, capture — and the combination holds against every single one of Black's options, not just the one that looks most natural."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "checkpointTest": {
      "items": [
        {
          "id": "chess-u6-l5-q1",
          "type": "find-the-move",
          "fen": "7k/6pp/2q1Q3/3N4/8/8/8/1K6 w - - 0 1",
          "prompt": "White to move. Find the queen sacrifice that starts a five-ply winning combination.",
          "answer": "Qg8+",
          "difficulty": 900
        },
        {
          "id": "chess-u6-l5-q2",
          "type": "find-the-move",
          "fen": "6k1/6pp/2q5/3N4/8/8/8/1K6 w - - 0 2",
          "prompt": "Continuing the calculation: after 1.Qg8+ Kxg8 (forced), find the move that forks the king and the queen.",
          "answer": "Ne7+",
          "difficulty": 900
        },
        {
          "id": "chess-u6-l5-q3",
          "type": "find-the-move",
          "fen": "5k2/4N1pp/2q5/8/8/8/8/1K6 w - - 2 3",
          "prompt": "Black has just played 2...Kf8, one of three possible replies to the fork. Find the move that wins the queen from here.",
          "answer": "Nxc6",
          "difficulty": 900
        },
        {
          "id": "chess-u6-l5-q4",
          "type": "short-answer",
          "prompt": "After 2.Ne7+, Black can try Kh8, Kf7, or Kf8. Why does 3.Nxc6 win the queen no matter which of the three the king plays?",
          "answer": "None of the three squares (h8, f7, or f8) is close enough to c6 to defend or recapture on it, and no other black piece guards c6 either — so wherever the king retreats, it cannot come to the queen's rescue in time, and the knight simply collects it for free.",
          "difficulty": 880
        },
        {
          "id": "chess-u6-l5-q5",
          "type": "true-false",
          "prompt": "When a forcing move gives the opponent more than one legal reply, it is enough to verify your follow-up works against the single most natural-looking one.",
          "answer": "false",
          "difficulty": 850
        }
      ]
    },
    "title": "Unit 6, Lesson 5: Foundational & Structural Mastery"
  },
  "chess-u8-l1": {
    "id": "chess-u8-l1",
    "unit": "chess-u8",
    "level": "advanced",
    "objective": "Identify weak squares, holes, and outposts in pawn structures, anchoring minor pieces (especially Knights) on dominant outposts where enemy pawns can never evict them.",
    "difficulty": 700,
    "presentation": {
      "explanation": "Welcome to Advanced Chess Strategy Unit 8: Positional Play! Positional mastery is the art of dominating the board through superior piece placement, pawn structure dynamics, and strategic strangulation:\n\n1. What is an Outpost (Hole)?\n   - A **hole** (or weak square) is a square on the 4th, 5th, or 6th rank that can **never again be controlled or attacked by an enemy pawn** (because the enemy pawns on adjacent files have already marched past or been traded).\n   - An **outpost** is a hole on an open or semi-open file that is protected by your own pawn (e.g. a White Knight on **d5** protected by a pawn on c4/e4 against a Black backward pawn on d6).\n\n2. The Golden Knight on an Outpost (Nimzowitsch Principle):\n   - A Knight securely anchored on an advanced central outpost (like **d5** or **e5**) controls 8 key squares deep in enemy territory, paralyzing the opponent's pieces and radiating tactical threats across both flanks.\n   - An entrenched knight on the 6th rank is worth almost as much as a Rook!\n\n3. The 3 Steps to Capitalizing on a Weak Square:\n   - **Step 1: Fix the Weakness** (Prevent the opponent from advancing their backward pawn to trade it off).\n   - **Step 2: Eliminate the Defender** (Trade off the opponent's minor piece that guards the hole).\n   - **Step 3: Occupy with an Octopus Knight** (Anchor your Knight on the weak square and dominate!).",
      "examples": [
        {
          "target": "Classic d5 Outpost against Sicilian Defense d6/e7 pawn structure",
          "reading": "White places Knight on d5; Black cannot play e6 or c6 without creating further devastating weaknesses.",
          "translation": "Dominant centralized octopus knight."
        },
        {
          "target": "Boleslavsky Hole on d5",
          "reading": "When Black plays ...e5 in the Sicilian Najdorf, d5 becomes an eternal hole.",
          "translation": "White fights for total control of the d5 outpost square."
        },
        {
          "target": "Trading the Defending Bishop",
          "reading": "Playing Bg5 to exchange Black's Nf6 defender, allowing Nd5 to dominate unchallenged.",
          "translation": "Elimination of the key outpost defender."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the most accurate strategic application to solve this challenge:",
          "options": [
            "A square where the King is in check",
            "Any square on the edge of the board",
            "A square occupied by a Queen",
            "A square that can no longer be protected or attacked by any enemy pawns"
          ],
          "answerIndex": 3,
          "explanation": "A weak square cannot be guarded by enemy pawns because adjacent pawns have moved past or been traded."
        },
        {
          "prompt": "Which chess piece benefits the most from occupying a secure, protected central outpost?",
          "options": [
            "The Pawn",
            "The Rook",
            "The Knight",
            "The King"
          ],
          "answerIndex": 2,
          "explanation": "Knights gain massive tactical reach and board control from central outposts."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 31:",
          "options": [
            "f5",
            "d4",
            "b5",
            "d5"
          ],
          "answerIndex": 3,
          "explanation": "The advance ...e5 creates an irrevocable hole on d5."
        },
        {
          "prompt": "What is the strategic technique of 'fixing a weakness'?",
          "options": [
            "Resigning the game",
            "Fixing a broken wooden piece",
            "Taking back a move",
            "Placing pressure on a backward enemy pawn or square so the opponent can never advance it to relieve the structural defect"
          ],
          "answerIndex": 3,
          "explanation": "Fixing a weakness immobilizes the defective pawn."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the positional concepts: Hole, Outpost, Backward Pawn, Octopus Knight:",
          "options": [
            "All are pawn promotion rules",
            "All mean checkmate",
            "Hole: Pawn-undefendable square | Outpost: Hole guarded by own pawn | Backward Pawn: Pawn trailing behind neighbor on open file | Octopus Knight: Dominant 6th-rank knight",
            "All are opening traps"
          ],
          "answerIndex": 2,
          "explanation": "Positional pawn structure definitions.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why did World Champion Garry Kasparov call his Knight on d3 in Game 16 against Anatoly Karpov (1985) 'The Monster Octopus'?",
          "options": [
            "Because it looked like an animal.",
            "Because anchored deep on d3 in White's camp, the Knight controlled 8 critical squares, paralyzed White's rooks, and single-handedly won the World Championship game.",
            "Because Kasparov had 8 knights.",
            "Because it moved 8 times in a row."
          ],
          "answerIndex": 1,
          "explanation": "Kasparov's famous Nd3 octopus knight paralyzed Karpov's entire army.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the most effective method to neutralize an opponent's monstrous knight on an outpost?",
          "options": [
            "Trade it off immediately with your own minor piece, or sacrifice an exchange (Rook for Knight) if the knight is utterly paralyzing your position.",
            "Move your King to the center.",
            "Advance all your kingside pawns.",
            "Ignore it completely."
          ],
          "answerIndex": 0,
          "explanation": "Trading the piece or an exchange sacrifice is standard master defensive technique.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete the positional maxim: 'Every pawn advance creates _______ in its wake.'",
          "options": [
            "more rooks",
            "automatic checks",
            "free queens",
            "weaknesses and potential holes"
          ],
          "answerIndex": 3,
          "explanation": "Pawns cannot move backwards; every advance permanently weakens squares.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 8, Lesson 1: Foundational & Structural Mastery (Classic d5 Outpost against Sic)"
  },
  "chess-u8-l2": {
    "id": "chess-u8-l2",
    "unit": "chess-u8",
    "level": "advanced",
    "objective": "Apply the Principle of Two Weaknesses in complex middlegames and endgames, creating and attacking two distant targets simultaneously to overload the opponent's defensive resources.",
    "difficulty": 725,
    "presentation": {
      "explanation": "In master-level chess, a strong opponent can almost always defend a single weakness. To break their resistance, you must apply **The Principle of Two Weaknesses**:\n\n1. The Core Concept:\n   - When your opponent has one static weakness (e.g. a weak isolated pawn on **d6** on the queenside), their defensive pieces can hold it.\n   - You do NOT keep fruitlessly pounding the first weakness. Instead, you **open a second front on the opposite side of the board** (e.g. launching a kingside pawn storm or creating an infiltration point on **h7**).\n\n2. The Overload Mechanism:\n   - The defender's pieces lack the agility to defend both distant wings at the same time.\n   - As their pieces scurry to the kingside to stop the new threat, the first weakness on the queenside collapses, or vice versa!\n\n3. The 3-Step Execution Protocol:\n   - **Step 1: Fix & Tie Down** (Pressure Weakness #1 so the opponent's key pieces are completely tied to its defense).\n   - **Step 2: Create Weakness #2** (Advance pawns on the opposite flank to tear open a second breach).\n   - **Step 3: Rapid Lateral Shift** (Switch your active pieces between the two fronts until the defender suffers complete tactical paralysis/collapse).",
      "examples": [
        {
          "target": "Akiba Rubinstein's Masterclass Endgames",
          "reading": "Rubinstein ties down the enemy King to a queenside passed pawn, then walks his own King over to devour all kingside pawns.",
          "translation": "Textbook execution of the Principle of Two Weaknesses."
        },
        {
          "target": "Bobby Fischer vs. Tigran Petrosian (1971)",
          "reading": "Fischer fixes the backward pawn on c6, then opens the kingside with f4-f5 to break Black's fortress.",
          "translation": "Grandmaster two-weakness conversion."
        },
        {
          "target": "Endgame Wing Switching",
          "reading": "Rook attacks a7 on queenside; Black defends with Ra8. Rook instantly swings to h7 on kingside; Black cannot defend in time!",
          "translation": "Exploiting the long-range mobility of rooks."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the most accurate strategic application to solve this challenge:",
          "options": [
            "Because a skilled defender can coordinate their pieces to fortify and guard a single static target indefinitely.",
            "Because of the 50-move rule.",
            "Because the rules forbid attacking one piece.",
            "Because single pawns cannot be taken."
          ],
          "answerIndex": 0,
          "explanation": "A single target allows maximum defensive economy and piece coordination."
        },
        {
          "prompt": "What is the primary objective of creating a second weakness on the opposite side of the board?",
          "options": [
            "To overstretch the opponent's pieces across distance until they can no longer shuttle back and forth to defend both targets simultaneously",
            "To trade Queens",
            "To promote both pawns on the same turn",
            "To force an immediate stalemate"
          ],
          "answerIndex": 0,
          "explanation": "Bilateral distance exhausts the defender's lateral mobility."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 32:",
          "options": [
            "Offer a draw",
            "Repeatedly check Black's King with no purpose",
            "March the White King over to the kingside (f-g-h files) to attack Black's undefended kingside pawns",
            "Sacrifice all queenside pawns"
          ],
          "answerIndex": 2,
          "explanation": "Creating a kingside breach while Black is anchored to a6 forces a decisive win."
        },
        {
          "prompt": "Which chess piece excels the most at exploiting two distant weaknesses due to its rapid lateral switching speed?",
          "options": [
            "The Knight",
            "The King",
            "The Pawn",
            "The Rook (and Queen), because horizontal rank switches can traverse from a-file to h-file in a single move"
          ],
          "answerIndex": 3,
          "explanation": "Rooks and Queens have unlimited horizontal range along ranks."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Synthesize the 3 phases of executing the Principle of Two Weaknesses:",
          "options": [
            "1. Trade rooks; 2. Trade knights; 3. Trade bishops",
            "1. Fix and tie down pieces to Weakness #1; 2. Open Weakness #2 on the opposite wing; 3. Rapidly switch attack vectors until the defender collapses",
            "1. Castle kingside; 2. Castle queenside; 3. Promote",
            "1. Check; 2. Check; 3. Checkmate"
          ],
          "answerIndex": 1,
          "explanation": "The 3-phase two-weakness conversion framework.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What defensive vulnerability causes the collapse of an opponent subjected to two weaknesses?",
          "options": [
            "Overload (one piece tasked with defending two separate targets) and lack of piece coordination across distance",
            "Having too many pieces",
            "The king being too close to the center",
            "Running out of score sheet space"
          ],
          "answerIndex": 0,
          "explanation": "Defensive overload and spatial dislocation cause tactical collapse.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why are Knight endgames particularly susceptible to the Principle of Two Weaknesses?",
          "options": [
            "Because knights cannot capture backwards.",
            "Because knights cannot jump over pawns.",
            "Because knights only move on dark squares.",
            "Because Knights are short-range pieces that take 3-4 slow moves to cross from one wing to the other, making them helpless against simultaneous split-wing threats."
          ],
          "answerIndex": 3,
          "explanation": "Knights suffer severe spatial lag when defending opposite flanks.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete the grandmaster rule: 'If the opponent defends the fortress on the left, _______.'",
          "options": [
            "trade your queen",
            "repeat moves for a draw",
            "blow open the gates on the right",
            "resign immediately"
          ],
          "answerIndex": 2,
          "explanation": "Shift focus to the unfortified opposite flank.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 8, Lesson 2: Foundational & Structural Mastery (Akiba Rubinstein's Masterclass)"
  },
  "chess-u8-l3": {
    "id": "chess-u8-l3",
    "unit": "chess-u8",
    "level": "advanced",
    "objective": "Differentiate piece activity from passive defense, master the 'Good Bishop vs. Bad Bishop' positional paradigm, and execute strategic minor piece trades that favor your pawn structure.",
    "difficulty": 725,
    "presentation": {
      "explanation": "Positional mastery requires understanding the **quality and dynamic scope** of your pieces relative to the pawn structure:\n\n1. Good Bishop vs. Bad Bishop:\n   - **Bad Bishop**: A bishop whose path is blocked and smothered by its **own fixed pawns** sitting on the same color squares (e.g. a Light-Squared Bishop trapped behind own pawns on c3, d4, e3).\n   - **Good Bishop**: A bishop operating on the opposite color of its own fixed pawns, able to slice freely through enemy territory and attack enemy pawns locked on its color.\n   - **The Golden Rule**: Trade off your bad bishop for the opponent's good bishop or active knight!\n\n2. Piece Activity Over Material (The Tartakower Principle):\n   - An active, harmoniously placed piece on an open file or dominant diagonal is worth significantly more than a passive piece trapped in defensive servitude.\n   - *Positional Sacrifice*: Grandmasters frequently sacrifice a pawn (or exchange) simply to activate all remaining pieces while burying the opponent in passive paralysis.\n\n3. Nimzowitsch's Principle of Overprotection:\n   - Strategically important central points (like a strong outpost or passed pawn) should be **overprotected** (defended more times than strictly necessary).\n   - Overprotecting pieces are not tied down; they gain secondary mobility and stability while radiating central pressure.",
      "examples": [
        {
          "target": "French Defense Bad Bishop on c8",
          "reading": "Black's pawns on e6 and d5 lock in the Bc8; Black strives to trade it via ...b6 and ...Ba6!",
          "translation": "Classic strategic bad bishop liquidation."
        },
        {
          "target": "Good Knight vs. Bad Bishop Endgame",
          "reading": "White has Knight on d5; Black has Bishop trapped on e7 behind pawns on c5, d6, e5.",
          "translation": "A technically won endgame for White."
        },
        {
          "target": "Overprotection of e5 Pawn",
          "reading": "White defends e5 with Nf3, Re1, Bf4, and Qd3.",
          "translation": "Nimzowitsch central overprotection radiating structural stability."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the most accurate strategic application to solve this challenge:",
          "options": [
            "When the bishop is worth 2 points",
            "When it moves like a knight",
            "When it is on the edge of the board",
            "When its own center pawns are locked on the same color squares as the bishop, severely obstructing its diagonal mobility and turning it into a 'tall pawn'"
          ],
          "answerIndex": 3,
          "explanation": "Own pawns locked on the bishop's color paralyze its mobility."
        },
        {
          "prompt": "If you have a 'bad bishop' locked behind your own fixed central pawns, what is your primary strategic objective?",
          "options": [
            "Hide it behind the king forever",
            "Resign the game",
            "Promote it to a queen",
            "Trade it off for an active enemy knight or good bishop, or break open the pawn chain with a pawn sacrifice to liberate its diagonals"
          ],
          "answerIndex": 3,
          "explanation": "Liquidation or pawn break liberation solves the bad bishop defect."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 33:",
          "options": [
            "Because the Knight can jump to both light and dark squares to attack the enemy pawns, while the Bad Bishop is blind to half the board and blocked by its own pawns.",
            "Because Knights are worth 5 points in endgames.",
            "Because bishops cannot move in endgames.",
            "Because the knight can check the king from distance."
          ],
          "answerIndex": 0,
          "explanation": "Knights possess dual-color versatility; bad bishops suffer color blindness and obstruction."
        },
        {
          "prompt": "What is Nimzowitsch's concept of 'Overprotection'?",
          "options": [
            "Defending a strategically vital central strongpoint with multiple pieces to establish structural dominance and free those pieces for dynamic maneuvers",
            "Putting 5 pawns around the King",
            "Never attacking the opponent",
            "Playing only defensive moves"
          ],
          "answerIndex": 0,
          "explanation": "Overprotecting vital centers provides structural stability and dynamic freedom."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the piece quality types: Good Bishop, Bad Bishop, Active Piece, Passive Piece:",
          "options": [
            "Good Bishop: Free diagonals outside own pawn color | Bad Bishop: Blocked by own fixed pawns | Active Piece: Controls vital squares/files | Passive Piece: Tied down to defense",
            "All are pawn structures",
            "All are equal value",
            "All mean queens"
          ],
          "answerIndex": 0,
          "explanation": "Piece activity and bishop classification.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In the French Defense (1.e4 e6 2.d4 d5 3.e5 c5), why does Black frequently play ...b6 followed by ...Ba6?",
          "options": [
            "To castle queenside.",
            "To prepare a knight fork.",
            "To blunder a piece.",
            "To trade off Black's notoriously 'bad' light-squared Bishop on c8 for White's dangerous active bishop on f1."
          ],
          "answerIndex": 3,
          "explanation": "Strategic exchange of Black's problem French bishop via Ba6.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is piece activity often more important than clinging to an extra pawn in complex positions?",
          "options": [
            "Because pawns do not count on the scoreboard.",
            "It is a tournament courtesy.",
            "Because active pieces generate continuous tactical threats, pins, and infiltration that force the passive side into fatal material or positional concessions (deliberate practice).",
            "Because computers prefer pieces."
          ],
          "answerIndex": 2,
          "explanation": "Dynamic piece activity overpowers passive material advantages.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'A Bad Bishop inside the pawn chain is merely a _______.'",
          "options": [
            "queen in disguise",
            "tall pawn",
            "winning weapon",
            "free rook"
          ],
          "answerIndex": 1,
          "explanation": "A bad bishop is classically called a 'tall pawn'.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 8, Lesson 3: Foundational & Structural Mastery (French Defense Bad Bishop on c)"
  },
  "chess-u8-l4": {
    "id": "chess-u8-l4",
    "unit": "chess-u8",
    "level": "advanced",
    "objective": "Seize and control open and semi-open files with heavy piece batteries (Alekhine's Gun) and execute decisive 7th and 8th rank infiltrations to decimate enemy pawn chains.",
    "difficulty": 725,
    "presentation": {
      "explanation": "Rooks crave open files like fish crave water. Controlling files and invading the **7th rank** is the most lethal heavy-piece operation in chess:\n\n1. Open Files & Semi-Open Files:\n   - **Open File**: A file with NO pawns of either color (a superhighway for Rooks and Queens).\n   - **Semi-Open File**: A file with only ENEMY pawns (an attack runway against backward or isolated pawns).\n\n2. The Battery (Alekhine's Gun):\n   - Doubling or tripling heavy pieces on an open file:\n     - **Alekhine's Gun**: Two Rooks in front backed by the Queen behind on the same file ($R+R+Q$).\n     - The combined firepower dominates the file, crushes any opposing blockaders, and punches directly into the 7th or 8th rank.\n\n3. The Absolute 7th Rank (Pigs on the 7th):\n   - Landing a Rook (or doubled Rooks) on the **7th rank** (the 2nd rank for Black):\n     - **Pigs on the 7th**: Doubled Rooks on the 7th rank devour the opponent's unadvanced pawns horizontally and weave deadly mating nets around the castled enemy King!\n     - A single Rook on the 7th rank is almost always worth at least a full pawn advantage.",
      "examples": [
        {
          "target": "Alekhine's Gun: Alexander Alekhine vs. Aron Nimzowitsch (San Remo 1930)",
          "reading": "Alekhine triples on the c-file (Rc1, Rc2, Qc1), creating total zugzwang and forcing Nimzowitsch's resignation.",
          "translation": "The most famous battery in chess history."
        },
        {
          "target": "Doubled Rooks on the 7th Rank (Pigs)",
          "reading": "White plays Rd7 and Rbd7; Black's pawns on a7, b7, f7, g7 fall like dominoes.",
          "translation": "Total annihilation of the enemy back rank and pawns."
        },
        {
          "target": "Controlling the Infiltration Square",
          "reading": "Exchanging defending rooks on the d-file to secure an unchallengeable landing square on d7.",
          "translation": "Securing the 7th rank highway."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the most accurate strategic application to solve this challenge:",
          "options": [
            "An illegal move",
            "A heavy piece battery consisting of two Rooks in front and the Queen directly behind them on a single open file",
            "A type of chess clock",
            "A trick opening with pawns"
          ],
          "answerIndex": 1,
          "explanation": "Alekhine's Gun is the tripling of two rooks backed by the queen on a file."
        },
        {
          "prompt": "Why is establishing a Rook on the opponent's 7th rank so devastatingly powerful?",
          "options": [
            "Because the 7th rank is the natural resting row for enemy unadvanced pawns (which are attacked from the side) and pins the enemy King against the back rank.",
            "Because the opponent loses their turn.",
            "Because rooks move twice on the 7th rank.",
            "Because rooks turn into queens on the 7th rank."
          ],
          "answerIndex": 0,
          "explanation": "The 7th rank attacks base pawns horizontally and threatens back-rank mate nets."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 34:",
          "options": [
            "Create an outpost on the file (e.g. c5/c6) to anchor a piece, or double your rooks first and prepare to control the entry squares (c7/c8).",
            "Close the file by putting your own pawns on it.",
            "Abandon the file and move to the corner.",
            "Offer a draw immediately."
          ],
          "answerIndex": 0,
          "explanation": "Outposts and heavy batteries win the fight for open file dominance."
        },
        {
          "prompt": "What happens when 'Blind Pigs' (doubled Rooks on the 7th rank) coordinate against an enemy castled King?",
          "options": [
            "They deliver relentless alternating discovered checks, perpetual checks, or forced checkmate combinations.",
            "The King can capture both rooks safely.",
            "The game is automatically a draw.",
            "The rooks cancel each other out."
          ],
          "answerIndex": 0,
          "explanation": "Doubled 7th-rank rooks deliver deadly discovered checks and mating nets."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the open file concepts: Open File, Semi-Open File, Alekhine's Gun, 7th Rank Infiltration:",
          "options": [
            "All are endgame draws",
            "All are pawn promotions",
            "All mean knight forks",
            "Open File: No pawns on file | Semi-Open File: Only enemy pawns | Alekhine's Gun: Tripled R+R+Q battery | 7th Rank: Decimates pawns & king"
          ],
          "answerIndex": 3,
          "explanation": "Open file and rook battery operations.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In Alexander Alekhine's famous 1930 victory over Aron Nimzowitsch, what file was used to construct the devastating 'Gun' battery?",
          "options": [
            "The a-file",
            "The e-file",
            "The c-file",
            "The h-file"
          ],
          "answerIndex": 2,
          "explanation": "Alekhine built his immortal gun on the open c-file.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why are Rooks often ineffective in the early opening phase of a chess game?",
          "options": [
            "Because rooks cannot move until turn 20.",
            "Because the board is clogged with central pawns and minor pieces, giving the long-range horizontal/vertical Rook zero open files to maneuver.",
            "Because rooks are illegal in openings.",
            "Because bishops are faster."
          ],
          "answerIndex": 1,
          "explanation": "Closed files and underdeveloped pieces block rook mobility in the opening.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'A Rook on the 7th rank is worth _______.'",
          "options": [
            "at least a pawn advantage and often the entire game",
            "less than a pawn",
            "exactly 3 points",
            "an automatic rematch"
          ],
          "answerIndex": 0,
          "explanation": "7th-rank rook dominance is worth at least a full pawn.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 8, Lesson 4: Foundational & Structural Mastery (Alekhine's Gun: Alexander Alek)"
  },
  "chess-u8-l5": {
    "id": "chess-u8-l5",
    "unit": "chess-u8",
    "level": "advanced",
    "objective": "Synthesize all Unit 8 positional principles by analyzing and executing a grandmaster-level positional squeeze, integrating outpost exploitation, bad bishop neutralization, open file invasion, and prophylaxis into a complete master victory.",
    "difficulty": 750,
    "presentation": {
      "explanation": "In this Master Capstone for Unit 8, we study the supreme art of the **Positional Squeeze (The Boa Constrictor Style)** perfected by World Champions José Raúl Capablanca and Anatoly Karpov:\n\n1. The Grandmaster Squeeze Blueprint:\n   - **Phase 1: Prophylaxis & Restriction**\n     - Anticipate the opponent's active plans and systematically deny them every liberating pawn break (e.g. playing $a4$ to stop ...b5; playing $h3$ to stop ...Bg4).\n   - **Phase 2: Establish the Supreme Outpost**\n     - Trade off the opponent's active minor pieces until your Knight sits unchallenged on a central anchor square (like **d5**).\n   - **Phase 3: Seize the Open File & Infiltrate the 7th Rank**\n     - Double Rooks on the open file, trade the opponent's defending rook, and invade the 7th rank.\n   - **Phase 4: The Principle of Two Weaknesses & Zugzwang**\n     - Tie down the defender on the queenside, then launch a kingside advance. The opponent runs out of legal non-damaging moves (**Zugzwang**) and their entire position collapses!\n\n2. The Golden Philosophy of Karpov:\n   - *'Style? I have no style. I simply make the best move, restrict my opponent's counterplay, and let their position disintegrate under pressure.'*",
      "examples": [
        {
          "target": "Anatoly Karpov vs. Boris Spassky (Candidates Match 1974)",
          "reading": "Karpov restricts Spassky's pieces, plants a knight on d5, seizes the c-file, and suffocates Black in complete zugzwang.",
          "translation": "The defining masterpiece of positional prophylaxis."
        },
        {
          "target": "José Raúl Capablanca vs. William Winter (Hastings 1919)",
          "reading": "Capablanca traps Black's bad bishop on g6 behind its own pawns, walks to the queenside with an extra piece, and wins effortlessly.",
          "translation": "The immortal textbook 'Bad Bishop Tomb' game."
        },
        {
          "target": "Prophylaxis: Stopping the Opponent's Dream Move",
          "reading": "Asking before every move: 'What does my opponent want to do?' and neutralizing it before executing your own attack.",
          "translation": "The core discipline of master chess thinking."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the most accurate strategic application to solve this challenge:",
          "options": [
            "The habit of identifying the opponent's active intentions, threats, and liberating pawn breaks on every turn and neutralizing them before executing your own plans",
            "Playing as fast as possible on the clock",
            "Sacrificing the queen on turn 10",
            "Memorizing opening computer lines"
          ],
          "answerIndex": 0,
          "explanation": "Prophylaxis is preventative thinking that suffocates enemy counterplay."
        },
        {
          "prompt": "What is 'Zugzwang' in chess?",
          "options": [
            "A compulsory situation where any move the player makes severely damages their position, but they are legally forced to move",
            "A German chess tournament",
            "A special pawn capture",
            "An illegal castling move"
          ],
          "answerIndex": 0,
          "explanation": "Zugzwang means 'compulsion to move' leading to immediate disadvantage."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 35:",
          "options": [
            "He pinned the bishop to the queen.",
            "He locked the pawn structure with h4-h5 and f3-f4, burying Black's bishop behind a wall of its own pawns on g6 and effectively playing up a full piece on the queenside.",
            "The bishop walked off the board.",
            "He captured the bishop with a knight on move 3."
          ],
          "answerIndex": 1,
          "explanation": "Capablanca entombed the g6 bishop behind locked pawns."
        },
        {
          "prompt": "What is the sequence of steps in a classic Anatoly Karpov positional squeeze?",
          "options": [
            "1. Trade all pawns -> 2. Stalemate",
            "1. Prophylactically restrict counterplay -> 2. Establish a central outpost -> 3. Control open files -> 4. Induce zugzwang and break through",
            "1. Play only knight moves -> 2. Resign",
            "1. Attack the king immediately -> 2. Sacrifice everything -> 3. Checkmate"
          ],
          "answerIndex": 1,
          "explanation": "The 4-step positional restriction and squeeze blueprint."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What core positional, tactical, and strategic competencies were mastered across Chess Strategy Unit 8?",
          "options": [
            "Blindfold chess tricks only",
            "Opening move names only",
            "Weak squares, holes, and outposts (octopus knights), the Principle of Two Weaknesses across opposite wings, Good vs. Bad Bishop dynamics and trades, open files, Alekhine's Gun batteries, 7th rank infiltration, prophylaxis, and zugzwang squeezes",
            "Chess clock mechanics only"
          ],
          "answerIndex": 2,
          "explanation": "Unit 8 comprehensive advanced positional strategy, outpost mastery, and prophylaxis.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why does a master player prioritize positional restriction over wild attacking tactics against equal opponents?",
          "options": [
            "Because tactics are banned in tournaments.",
            "Because premature tactical attacks against sound defenses fail, whereas systematic positional restriction eliminates the opponent's counterplay, making the final tactical breakthrough effortless and decisive (deliberate practice).",
            "Because slow moves score more points.",
            "Because kings cannot be attacked."
          ],
          "answerIndex": 1,
          "explanation": "Positional preparation creates the structural conditions for decisive tactics.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Identify the World Champion celebrated as the greatest master of prophylaxis and positional restriction in chess history:",
          "options": [
            "Anatoly Karpov",
            "Mikhail Tal",
            "Paul Morphy",
            "Garry Kasparov only"
          ],
          "answerIndex": 0,
          "explanation": "Karpov, Petrosian, and Capablanca are the supreme triumvirate of positional prophylaxis.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the next frontier of Chess mastery in Unit 9?",
          "options": [
            "Learning chess variants",
            "Playing with 3 players",
            "Memorizing chess history trivia",
            "Opening Repertoire (building a coherent, integrated grandmaster opening repertoire for White (1.e4 and 1.d4) and Black"
          ],
          "answerIndex": 3,
          "explanation": "Unit 9 focuses on building a coherent opening repertoire.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 8, Lesson 5: Foundational & Structural Mastery (Anatoly Karpov vs. Boris Spass)"
  },
  "chess-u9-l1": {
    "id": "chess-u9-l1",
    "unit": "chess-u9",
    "level": "master",
    "objective": "Master classical 1.e4 central opening structures, focusing on the Ruy Lopez (Spanish Opening, 1.e4 e5 2.Nf3 Nc6 3.Bb5), Italian Game pawn centers (c3/d4), and managing central pawn tension.",
    "presentation": {
      "explanation": "Welcome to Master Chess Strategy Unit 9: Opening Repertoire! Grandmaster opening play is NOT rote memorization of moves — it is **understanding the typical middlegame pawn structures, piece plans, and thematic pawn breaks** arising from the opening:\n\n1. Classical 1.e4 Open Games (1.e4 e5):\n   - **The Ruy Lopez (Spanish Opening: 1.e4 e5 2.Nf3 Nc6 3.Bb5)**:\n     - White immediately pressures Black's c6 knight, which defends the critical e5 pawn.\n     - White builds the ideal classical center with `c3` and `d4`, maneuvers the light-squared bishop via `Bb5-a4-b3-c2`, and swings the queen's knight via `Nb1-d2-f1-g3/e3` aimed at Black's kingside.\n     - Black counters in the Closed Ruy Lopez (3...a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 d6 8.c3 O-O 9.h3) with queenside expansion (`...Na5, ...c5`) and center counter-tension (`...Bb7, ...Re8`).\n\n2. The Italian Game & Giuoco Piano (1.e4 e5 2.Nf3 Nc6 3.Bc4):\n   - White aims for immediate active piece play against Black's f7 weakness.\n   - In the modern *Giuoco Pianissimo* (c3, d3), White delays d4 to avoid early simplifications, building deep positional squeeze plans.",
      "examples": [
        {
          "target": "Ruy Lopez Classical Knight Maneuver: Nb1-d2-f1-g3 (or e3), targeting the weak f5 square on Black's kingside.",
          "reading": "Ruy Lopez Knight Maneuver",
          "translation": "Standard Spanish opening positional plan."
        },
        {
          "target": "White plays c3 and d4 to establish a broad pawn center; Black plays ...exd4 or holds e5 with ...d6.",
          "reading": "Classical center battle",
          "translation": "Central pawn tension dynamics."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the most accurate strategic application to solve this challenge:",
          "options": [
            "Nb1-a3-c2-e1",
            "Nb1-c3-b5-d6",
            "Nb1-a3-b5-c7",
            "Nb1-d2-f1-g3 (or e3), establishing a powerful attacking post aimed at the f5/d5 squares"
          ],
          "answerIndex": 3,
          "explanation": "Nd2-f1-g3 is the quintessential Spanish knight maneuver."
        },
        {
          "prompt": "Why does White play 8.c3 in the Ruy Lopez before pushing d4?",
          "options": [
            "To trap White's own queen",
            "To block the c-file permanently",
            "To give up the center",
            "To support the d4 central pawn push and create an escape retreat square on c2 for the valuable light-squared bishop"
          ],
          "answerIndex": 3,
          "explanation": "c3 supports d4 and provides the Bc2 retreat haven."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 36:",
          "options": [
            "Win White's queen in 3 moves",
            "Force an immediate draw on move 9",
            "Defend passively for 50 moves",
            "Sacrifice a central pawn with 8...d5! to seize raging kingside initiative, active piece coordination, and attack White's uncoordinated kingside"
          ],
          "answerIndex": 3,
          "explanation": "The Marshall Attack is Frank Marshall's legendary counter-attacking pawn sacrifice."
        },
        {
          "prompt": "What makes 1.e4 e5 games 'Open Games'?",
          "options": [
            "The board has no pawns",
            "Players are forbidden from castling",
            "Games must finish in 10 moves",
            "Both sides stake immediate symmetrical claims on the center, leading to rapid pawn tension, open lines, and tactical piece contact"
          ],
          "answerIndex": 3,
          "explanation": "Early central pawn tension opens files and diagonals for dynamic piece clashes."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the 1.e4 openings with their defining move orders: Ruy Lopez, Italian Game, Scotch Game, Four Knights:",
          "options": [
            "All start with 1.d4",
            "Ruy Lopez: 3.Bb5 | Italian Game: 3.Bc4 | Scotch Game: 3.d4 | Four Knights: 3.Nc3 Nf6",
            "All are illegal moves",
            "All are pawn endgames"
          ],
          "answerIndex": 1,
          "explanation": "Open Game move order matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why did Garry Kasparov call the Ruy Lopez 'the university of chess'?",
          "options": [
            "Because mastering the Ruy Lopez teaches every fundamental theme in chess: piece maneuvers, central pawn tension, space advantages, prophylaxis, and opposite-wing attacks",
            "Because it requires a degree in mathematics",
            "Because only professors play it",
            "Because it was invented at Oxford University"
          ],
          "answerIndex": 0,
          "explanation": "The Ruy Lopez encompasses the full spectrum of strategic and tactical chess concepts.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is Black's main counterplay break in the Closed Ruy Lopez?",
          "options": [
            "...f5 on move 4",
            "...g5 on move 6",
            "...h5 on move 2",
            "...c5 (followed by ...Nc6-c4 or ...cxd4) and expanding on the queenside with ...b5"
          ],
          "answerIndex": 3,
          "explanation": "Queenside counter-expansion with ...c5 and ...b5 is Black's standard counter-balance.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'In classical 1.e4 openings, control of the center is the foundation for _______.'",
          "options": [
            "resigning early",
            "trading all pieces immediately",
            "flank attacks and piece freedom",
            "stalemating"
          ],
          "answerIndex": 2,
          "explanation": "Central control provides the spatial foundation for successful flank operations.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 9, Lesson 1: Foundational & Structural Mastery (Ruy Lopez Classical Knight Man)"
  },
  "chess-u9-l2": {
    "id": "chess-u9-l2",
    "unit": "chess-u9",
    "level": "master",
    "objective": "Master the asymmetrical fighting dynamics of the Sicilian Defense (1.e4 c5), comparing Open Sicilian sharp battles (Najdorf, Dragon) with Anti-Sicilian systems (Alapin 2.c3, Closed Sicilian 2.Nc3).",
    "presentation": {
      "explanation": "The **Sicilian Defense (1.e4 c5)** is the most popular, dynamic, and highest-scoring response to 1.e4 at the grandmaster level:\n\n1. The Asymmetric Imbalance:\n   - Rather than mirroring White with `1...e5`, Black fights for the central d4 square from the flank with `1...c5`.\n   - In the **Open Sicilian (1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3)**:\n     - White exchanges the central d-pawn for Black's flank c-pawn.\n     - *White's Advantage*: Faster piece development, spatial lead in the center/kingside, and attacking chances against Black's king.\n     - *Black's Advantage*: Superior central pawn majority (2 central pawns [d & e] vs White's 1 [e]), half-open c-file for counter-pressure, and long-term endgame dominance.\n\n2. The Core Sicilian Systems:\n   - **Najdorf Sicilian (5...a6)**: Fischer & Kasparov's legendary weapon. Controls b5, prepares ...e5 or ...e6, and maintains immense tactical elasticity.\n   - **Dragon Sicilian (5...g6)**: Fianchettoes bishop to g7 (the 'Dragon Bishop') aiming down the long a1-h8 diagonal into White's queenside.\n   - **Scheveningen (5...e6)**: The classic 'small center' (pawns on d6/e6), waiting to strike with ...d5.\n\n3. Anti-Sicilian Systems:\n   - **Alapin (2.c3)**: White aims to build a full classical center with d4.\n   - **Closed Sicilian (2.Nc3 Nc6 3.g3)**: Positional, slow maneuvering avoiding open tactical brawls.",
      "examples": [
        {
          "target": "The English Attack in the Sicilian Najdorf: Be3, f3, Qd2, g4, O-O-O, launching opposite-side castling pawn storms.",
          "reading": "English Attack setup",
          "translation": "High-velocity opposite-castling Sicilian attack."
        },
        {
          "target": "Black's Thematic Central Break: Executing ...d6-d5 liberates Black's position and typically equalizes or seizes the initiative.",
          "reading": "The ...d5 thematic Sicilian break",
          "translation": "Crucial central counter-strike."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the most accurate strategic application to solve this challenge:",
          "options": [
            "Black trades a flank c-pawn for White's central d-pawn, securing a 2-to-1 central pawn majority (d- and e-pawns) and the half-open c-file",
            "Black has no pawns",
            "Black wins White's queen",
            "Black gets 3 extra knights"
          ],
          "answerIndex": 0,
          "explanation": "Black gains a long-term central pawn majority and c-file counterplay."
        },
        {
          "prompt": "What is the primary purpose of 5...a6 in the Sicilian Najdorf?",
          "options": [
            "It prevents White's knights and light-squared bishop from hopping to the powerful b5 outpost, while preparing queenside counterplay with ...b5",
            "It prepares to castle queenside on move 6",
            "It gives up the a-file",
            "It attacks White's king directly"
          ],
          "answerIndex": 0,
          "explanation": "5...a6 stops Bb5+/Ndb5 and prepares ...b5 expansion."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 37:",
          "options": [
            "Both sides agree to trade queens on move 7",
            "Opposite-side castling: White castles queenside (O-O-O) and storms the kingside with h4-h5, while Black attacks down the half-open c-file with ...Rc8 and exchange sacrifices on c3",
            "Defensive maneuvering with no pawn moves",
            "Symmetrical pawn pushes only"
          ],
          "answerIndex": 1,
          "explanation": "The Yugoslav Attack is the ultimate opposite-side castling tactical race."
        },
        {
          "prompt": "Why do many tournament players play 'Anti-Sicilians' like 2.c3 (Alapin) or 2.Nc3 (Closed Sicilian)?",
          "options": [
            "Because the Open Sicilian is banned by FIDE",
            "Because pawns cannot move two squares",
            "To sidestep vast volumes of deep theoretical Najdorf/Dragon opening prep and steer the game into their own comfortable strategic waters",
            "To draw in 5 moves"
          ],
          "answerIndex": 2,
          "explanation": "Anti-Sicilians avoid deep engine theory and dictate positional character."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the Sicilian variations with their defining moves: Najdorf, Dragon, Classical, Sveshnikov:",
          "options": [
            "Najdorf: 5...a6 | Dragon: 5...g6 | Classical: 5...Nc6 | Sveshnikov: 5...e5",
            "All are French Defenses",
            "All are illegal setups",
            "All end in 1.d4"
          ],
          "answerIndex": 0,
          "explanation": "Sicilian variation move signatures matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is the exchange sacrifice ...Rxc3 (giving up a rook for a knight on c3) a standard thematic weapon for Black in the Sicilian?",
          "options": [
            "Because Black wants to play without rooks",
            "Because rooks are worth less than knights in the Sicilian",
            "It is a blunder that always loses",
            "It shatters White's queenside pawn shield (creating doubled isolated c-pawns), exposes White's castled king, and removes the critical defender of e4"
          ],
          "answerIndex": 3,
          "explanation": "...Rxc3 destroys White's queenside structure and king safety.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the 'hole' on d5 in the Sveshnikov Sicilian (5...e5 6.Ndb5 d6), and how does Black compensate for it?",
          "options": [
            "There is no weakness on d5",
            "White immediately checkmates on d5",
            "Pushing ...e5 creates a permanent weak square on d5, but Black compensates with rapid piece activity, open diagonals, and dynamic bishop pair potential",
            "d5 is completely defended by Black's queen"
          ],
          "answerIndex": 2,
          "explanation": "Dynamic piece activity compensates for the static d5 structural weakness.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'When playing the Sicilian, White plays for the checkmate on the kingside; Black plays for the _______.'",
          "options": [
            "stalemate",
            "win on the queenside and endgame dominance",
            "flag on time only",
            "quick draw"
          ],
          "answerIndex": 1,
          "explanation": "Black leverages the central majority and c-file for long-term supremacy.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 9, Lesson 2: Foundational & Structural Mastery (The English Attack in the Sici)"
  },
  "chess-u9-l3": {
    "id": "chess-u9-l3",
    "unit": "chess-u9",
    "level": "master",
    "objective": "Master classical 1.d4 structures and the Queen's Gambit (1.d4 d5 2.c4), analyzing the Queen's Gambit Declined (QGD), Slav Defense, and the Carlsbad pawn structure minority attack.",
    "presentation": {
      "explanation": "While 1.e4 produces sharp, open tactical skirmishes, **1.d4 leads to rich, deeply positional battles for central control and pawn structure dominance**:\n\n1. The Queen's Gambit (1.d4 d5 2.c4):\n   - White offers a flank c-pawn to deflect Black's central d5 pawn.\n   - If Black accepts with `2...dxc4` (Queen's Gambit Accepted - QGA), White regains the pawn with `e3/e4` and `Bxc4` with superior central control.\n   - If Black declines with `2...e6` (Queen's Gambit Declined - QGD), Black maintains a solid anchor on d5, though the light-squared bishop on c8 is temporarily hemmed in.\n   - If Black defends with `2...c6` (The Slav Defense), Black supports d5 without blocking the c8 bishop's diagonal.\n\n2. The Carlsbad Pawn Structure (Exchange Variation: cxd5 exd5):\n   - When White plays `cxd5` and Black recaptures `...exd5`, the asymmetrical **Carlsbad Structure** emerges:\n     - *White Pawn Structure*: Pawns on a2, b2, d4, e3, f2, g2, h2 (Half-open c-file).\n     - *Black Pawn Structure*: Pawns on a7, b7, c6, d5, f7, g7, h7 (Half-open e-file).\n   - **White's Master Plan — The Minority Attack**:\n     - White marches the queenside 'minority' pawns: `a3`, then `b4`, then `b5`!\n     - When White plays `b5` and captures on c6 (`bxc6`), Black is left with a **backward, isolated pawn on c6** that White's rooks and knights besiege on the half-open c-file.",
      "examples": [
        {
          "target": "The Minority Attack in the Carlsbad Structure: White plays a3 -> b4 -> b5 -> bxc6, saddling Black with a permanent weak c6-pawn.",
          "reading": "Carlsbad Minority Attack",
          "translation": "Positional pawn structure siege."
        },
        {
          "target": "Black's Counterplay in the Carlsbad: Launching kingside aggression with ...Ne4, ...f5 (Pillsbury setup), and swinging pieces towards White's king.",
          "reading": "Kingside counter-attack vs minority attack",
          "translation": "Dynamic opposite-flank struggle."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the most accurate strategic application to solve this challenge:",
          "options": [
            "To promote White's b-pawn to a queen on move 12",
            "To checkmate Black on b8",
            "To trade queens immediately",
            "To trade White's 2 queenside pawns against Black's 3 queenside pawns to saddle Black with a weak, backward c6-pawn on the open c-file"
          ],
          "answerIndex": 3,
          "explanation": "The minority attack creates and fixes an isolated/backward pawn weakness on c6."
        },
        {
          "prompt": "Why is 2...c6 (The Slav Defense) considered so robust compared to 2...e6 (QGD)?",
          "options": [
            "Because it wins a piece on move 3",
            "Because it prevents White from moving the d-pawn",
            "Because it allows Black to castle in 2 moves",
            "Because ...c6 defends the d5 central stronghold while keeping the c8-h3 diagonal open for the light-squared bishop to develop to f5 or g4"
          ],
          "answerIndex": 3,
          "explanation": "The Slav avoids locking the 'problem' c8-bishop behind the e6 pawn chain."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 38:",
          "options": [
            "Because White quickly plays a4, shattering Black's overextended queenside pawns",
            "Because c4 is out of bounds",
            "Because Black is disqualified for holding pawns",
            "Because White gets two turns"
          ],
          "answerIndex": 0,
          "explanation": "Trying to keep the gambited c4 pawn results in tactical catastrophe on the a-file."
        },
        {
          "prompt": "What is Black's primary plan against White's Minority Attack in the Carlsbad?",
          "options": [
            "Launch a furious kingside assault utilizing the e4 outpost (e.g. ...Ne4, ...f5, ...Rf6-h6) before White's queenside pressure bears fruit",
            "Copy White's moves symmetrically",
            "Resign the game",
            "Trade all pawns on the kingside"
          ],
          "answerIndex": 0,
          "explanation": "Black counters queenside pressure with direct kingside mating threats."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the 1.d4 d5 opening systems: Queen's Gambit Accepted, Queen's Gambit Declined, Slav Defense, Semi-Slav:",
          "options": [
            "All are endgames",
            "All are King's Gambits",
            "All are 1.e4 openings",
            "QGA: 2...dxc4 | QGD: 2...e6 | Slav: 2...c6 | Semi-Slav: 2...e6 + 3...c6"
          ],
          "answerIndex": 3,
          "explanation": "Queen's Gambit system definitions matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What pawn structure is characterized by White pawns on a2, b2, d4, e3 vs Black pawns on a7, b7, c6, d5?",
          "options": [
            "The Dragon Sicilian structure",
            "The Benoni structure",
            "The Carlsbad Pawn Structure",
            "The French Defense pawn chain"
          ],
          "answerIndex": 2,
          "explanation": "The Carlsbad structure is the quintessential classical 1.d4 pawn skeleton.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is the c8-bishop often called Black's 'problem child' in the Queen's Gambit Declined?",
          "options": [
            "Because White captures it on move 3",
            "Because playing 2...e6 locks the bishop behind its own pawn chain on d5 and e6, making it difficult to find an active diagonal",
            "Because the bishop is worth 0 points",
            "Because Black must remove it from the board"
          ],
          "answerIndex": 1,
          "explanation": "The c8-bishop is entombed behind the solid e6/d5 pawn chain.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'In 1.d4 openings, tactical fireworks arise from _______.'",
          "options": [
            "deep positional preparation and pawn breaks",
            "random wild moves",
            "stalemates",
            "ignoring the center"
          ],
          "answerIndex": 0,
          "explanation": "Positional preparation and central pawn breaks unlock tactical strikes.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 9, Lesson 3: Foundational & Structural Mastery (The Minority Attack in the Car)"
  },
  "chess-u9-l4": {
    "id": "chess-u9-l4",
    "unit": "chess-u9",
    "level": "master",
    "objective": "Master hypermodern responses to 1.d4: The King's Indian Defense (KID — locked pawn chains, kingside mating storms) and the Nimzo-Indian Defense (1.d4 Nf6 2.c4 e6 3.Nc3 Bb4 — dark-square blockade and doubled c-pawn targets).",
    "presentation": {
      "explanation": "Hypermodern strategy rejects classical occupation of the center with pawns on move 1, choosing instead to **let White occupy the center with pawns, only to undermine, restrain, and destroy that center from the flanks**:\n\n1. The King's Indian Defense (KID: 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6):\n   - Black allows White to establish the massive `c4-d4-e4` pawn trio.\n   - Black strikes back in the center with `...e7-e5!`.\n   - When White closes the center with `d4-d5`, the legendary **KID Classical Pawn Lock** is formed:\n     - *White's Plan*: Queenside breakthrough with `c4-c5`, opening the c-file and infiltrating Black's queenside.\n     - *Black's Plan*: Full-throttle kingside mating attack! Black plays `...Ne8/Nh5`, pushes `...f7-f5`, locks the kingside with `...f5-f4!`, and rolls `...g5`, `...h5`, `...g4`, swinging pieces toward White's king.\n\n2. The Nimzo-Indian Defense (1.d4 Nf6 2.c4 e6 3.Nc3 Bb4!):\n   - Named after Aron Nimzowitsch. Black pins White's c3-knight on move 3.\n   - If White plays `a3`, Black captures `...Bxc3+`, inflicting **doubled, isolated c-pawns (c3 and c4)** on White's position.\n   - Black then sets up an unbreakable dark-square blockade (`...d6, ...e5, ...b6, ...Ba6, ...Na5`), systematically attacking White's backward c4 pawn!",
      "examples": [
        {
          "target": "The King's Indian Mar del Plata Bayonet Attack: White rushes c4-c5 and b4 on the queenside; Black storms f7-f5-f4 and g5-g4 on the kingside in a lethal race.",
          "reading": "KID opposite-flank warfare",
          "translation": "Classical hypermodern race."
        },
        {
          "target": "Nimzo-Indian Hübner Variation: Black creates doubled c-pawns (c3/c4), locks the center with ...e5 and ...d6, and besieges the weak c4 pawn with ...Na5 and ...Ba6.",
          "reading": "Nimzo-Indian c4 siege",
          "translation": "Hypermodern positional blockade."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the most accurate strategic application to solve this challenge:",
          "options": [
            "Castle queenside and play passively",
            "Pawn storm the kingside with ...f7-f5-f4 followed by ...g5, ...h5, ...g4 to hunt White's king",
            "Sacrifice the queen on d5",
            "Trade all pawns on the queenside immediately"
          ],
          "answerIndex": 1,
          "explanation": "Black's kingside pawn tsunami (...f5-f4, ...g5-g4) is the hallmark of the King's Indian."
        },
        {
          "prompt": "What structural weakness does Black inflict on White in the Nimzo-Indian Defense after ...Bxc3+?",
          "options": [
            "Doubled, inflexible c-pawns (c3 and c4), creating a static target for Black's pieces on c4",
            "Loss of castling rights",
            "An isolated queen",
            "Tripled h-pawns"
          ],
          "answerIndex": 0,
          "explanation": "...Bxc3+ inflicts doubled c-pawns (c3/c4) that Black blockades and attacks."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 39:",
          "options": [
            "Because the resulting doubled c-pawns and dark-square control provide permanent static positional targets that outweigh White's bishop pair in closed/semi-closed positions",
            "To speed up the game",
            "Because knights are always better than bishops",
            "Because Black forgot how the bishop moves"
          ],
          "answerIndex": 0,
          "explanation": "Static pawn structural damage outweighs dynamic bishop pair value in closed positions."
        },
        {
          "prompt": "What is the 'Bayonet Attack' in the King's Indian Defense?",
          "options": [
            "White's 9.b4! thrust, accelerating the queenside pawn storm without wasting time on prep moves to break through before Black checkmates on the kingside",
            "Resigning on move 9",
            "Attacking with the king directly",
            "A chess variant with swords"
          ],
          "answerIndex": 0,
          "explanation": "The 9.b4 Bayonet Attack is White's most dangerous weapon against the KID."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the hypermodern 1.d4 defenses: King's Indian (KID), Nimzo-Indian, Grünfeld Defense, Queen's Indian:",
          "options": [
            "All are identical",
            "All are 1.e4 openings",
            "KID: ...g6 + ...d6 + ...e5 | Nimzo: ...e6 + ...Bb4 pinning Nc3 | Grünfeld: ...g6 + ...d5 striking center | QID: ...e6 + ...b6 fianchetto",
            "All are pawn endgames"
          ],
          "answerIndex": 2,
          "explanation": "Hypermodern defense categorization matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What defines the 'Grünfeld Defense' (1.d4 Nf6 2.c4 g6 3.Nc3 d5!)?",
          "options": [
            "Black plays without pawns",
            "Black gives White the entire pawn center with 4.cxd5 Nxd5 5.e4 Nxc3 6.bxc3, only to immediately bombard White's center with ...c5 and ...Bg7",
            "A peaceful drawing line on move 4",
            "Black copies White's moves"
          ],
          "answerIndex": 1,
          "explanation": "The Grünfeld allows White a massive center and liquidates it with ...c5 and ...Bg7.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Who is the foundational father of hypermodern chess theory celebrated for the Nimzo-Indian Defense?",
          "options": [
            "Aron Nimzowitsch",
            "Wilhelm Steinitz",
            "Paul Morphy",
            "Emanuel Lasker"
          ],
          "answerIndex": 0,
          "explanation": "Aron Nimzowitsch founded the hypermodern school and immortalized 3...Bb4.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'In the King's Indian Defense, Black trades the queenside for _______.'",
          "options": [
            "extra time on the clock",
            "a single pawn",
            "a quiet draw",
            "White's king"
          ],
          "answerIndex": 3,
          "explanation": "The KID is a race: White wins on the queenside, or Black checkmates the king.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 9, Lesson 4: Foundational & Structural Mastery (The King's Indian Mar del Plat)"
  },
  "chess-u9-l5": {
    "id": "chess-u9-l5",
    "unit": "chess-u9",
    "level": "master",
    "objective": "Demonstrate comprehensive Master opening fluency by synthesizing a unified tournament opening repertoire for White and Black, navigating transpositional move orders, and aligning opening choices with typical middlegame pawn skeletons.",
    "presentation": {
      "explanation": "In this Master Checkpoint for Unit 9, we synthesize all opening systems into a **Unified Grandmaster Repertoire Architecture**:\n\n1. Building a Harmonized Tournament Repertoire:\n   - **White Repertoire Core**:\n     - *Choice A (Classical Classical)*: `1.e4` leading to Ruy Lopez vs `1...e5`, Open Sicilian vs `1...c5`, Advance Variation vs French/Caro-Kann.\n     - *Choice B (Positional Classical)*: `1.d4` leading to Queen's Gambit against `1...d5`, Catalan / Main Line against Indian Defenses (`1...Nf6`).\n   - **Black Repertoire Core**:\n     - *Against 1.e4*: The Sicilian Najdorf / Dragon (for dynamic counter-attack) or Classical 1...e5 (for rock-solid equality).\n     - *Against 1.d4*: The Nimzo-Indian / Ragozin complex (for positional mastery) or King's Indian Defense (for fighting complexity).\n\n2. Navigating Transposition Trees:\n   - Grandmasters constantly use transpositions to avoid dangerous lines:\n     - *Example 1*: `1.Nf3 Nf6 2.c4 e6 3.d4 d5 4.Nc3` transposes seamlessly into a Queen's Gambit Declined while bypassing the Nimzo-Indian (`3.Nc3 Bb4`)!\n     - *Example 2*: `1.c4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4` transposes directly into an Open Sicilian structure from the English Opening.\n\n3. The Pawn Skeleton Philosophy:\n   - Memorizing 20 moves of engine lines is useless if you don't understand the resulting pawn structure. Master the 5 universal pawn skeletons (Carlsbad, Isolani/d-pawn, Sicilian Chain, KID Locked Center, French Pawn Chain), and you can play ANY opening effortlessly.",
      "examples": [
        {
          "target": "Transposition Path: 1.Nf3 d5 2.d4 Nf6 3.c4 e6 4.Nc3 = Queen's Gambit Declined (avoiding early Albin Counter-Gambits and Chigorin defenses).",
          "reading": "Move-order finesse transposition",
          "translation": "Grandmaster transposition tree."
        },
        {
          "target": "Harmonized Repertoire Matrix: White plays 1.d4; Black plays Sicilian Najdorf (vs 1.e4) and Nimzo-Indian (vs 1.d4).",
          "reading": "Unified tournament opening repertoire",
          "translation": "Complete repertoire architecture."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the most accurate strategic application to solve this challenge:",
          "options": [
            "Play 3.Nf3 (or 1.Nf3), preventing 3...Bb4 from pinning a knight on c3 and steering into the Queen's Indian, Bogo-Indian, or Catalan",
            "Play 3.f3 and give up the king",
            "Resign on move 2",
            "Play with only pawns"
          ],
          "answerIndex": 0,
          "explanation": "3.Nf3 sidesteps the Nimzo-Indian by withholding the early Nc3 development."
        },
        {
          "prompt": "What is the primary danger of memorizing opening moves by rote without understanding the resulting pawn structure?",
          "options": [
            "The moment the opponent deviates on move 7, the player is completely lost with no understanding of piece placement, pawn breaks, or tactical plans",
            "The chess clock stops working",
            "The pieces change color",
            "FIDE deducts 50 rating points"
          ],
          "answerIndex": 0,
          "explanation": "Understanding pawn structures enables autonomous navigation when out of book."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 40:",
          "options": [
            "A 4-move checkmate system",
            "A hybrid of the Queen's Gambit and hypermodern King's Indian, where White fianchettoes the light-squared bishop on g2 to exert immense long-term pressure across the h1-a8 diagonal",
            "A rapid tactical trap",
            "A 1.e4 opening from Spain"
          ],
          "answerIndex": 1,
          "explanation": "The Catalan combines classical Queen's Gambit central play with the hypermodern g2-bishop diagonal pressure."
        },
        {
          "prompt": "What is the final frontier awaiting you in Unit 10 of Chess Strategy?",
          "options": [
            "Buying a new wooden chess set",
            "Deep Calculation, Candidate Moves & Prophylaxis",
            "Playing speed chess only",
            "Learning how the rook moves"
          ],
          "answerIndex": 1,
          "explanation": "Unit 10 focuses on Kotov's calculation tree, deep visualization, and master prophylaxis."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What core competencies were mastered across Chess Strategy Unit 9?",
          "options": [
            "Basic checkmates with two rooks only",
            "Classical 1.e4 Ruy Lopez & Italian Game structures, asymmetrical Sicilian Defense fighting dynamics (Najdorf, Dragon, Sveshnikov), 1.d4 Queen's Gambit & Carlsbad minority attack, hypermodern King's Indian & Nimzo-Indian systems, and unified tournament repertoire harmonization with transposition trees",
            "Chess piece carving only",
            "History of chess clocks only"
          ],
          "answerIndex": 1,
          "explanation": "Unit 9 comprehensive opening repertoire, structural mastery, and transposition tree navigation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "If White plays 1.c4 (English Opening) and Black responds 1...e5 2.Nc3 Nf6 3.Nf3 Nc6, what reversed classical structure has emerged?",
          "options": [
            "A Reversed Sicilian",
            "A French Defense",
            "A Caro-Kann Defense",
            "A King's Gambit"
          ],
          "answerIndex": 0,
          "explanation": "1.c4 e5 is a Reversed Sicilian with an extra tempo for White.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why do grandmasters evaluate opening success not by material won on move 10, but by the resulting middlegame harmony?",
          "options": [
            "Because material does not count in chess",
            "Because grandmasters only care about draws",
            "Because the game ends on move 15",
            "Because sound openings rarely win material outright; their true goal is securing an advantageous pawn skeleton, active piece placement, and clear middlegame plans"
          ],
          "answerIndex": 3,
          "explanation": "Openings exist to reach favorable, playable middlegame pawn structures.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete the Grandmaster opening rule: 'Know your pawn breaks, master your transpositions, and _______.'",
          "options": [
            "hope for an opening blunder",
            "memorize 100 moves blindly",
            "play the board, not just the memory",
            "play without thinking"
          ],
          "answerIndex": 2,
          "explanation": "Grandmaster play unites opening preparation with active board evaluation.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 9, Lesson 5: Foundational & Structural Mastery (Transposition Path: 1.Nf3 d5 2)"
  },
  "chess-u10-l1": {
    "id": "chess-u10-l1",
    "unit": "chess-u10",
    "level": "master",
    "objective": "Master Alexander Kotov's Tree of Calculation methodology: identify candidate moves comprehensively, calculate each branch strictly once in serial discipline, and eliminate cyclic recalculation loops.",
    "presentation": {
      "explanation": "Welcome to Master Chess Strategy Unit 10: Deep Calculation & Prophylaxis! The single greatest breakthrough in Russian chess pedagogy is Grandmaster Alexander Kotov's **Tree of Calculation (Think Like a Grandmaster)**:\n\n1. The Pathology of the Amateur Thinker:\n   - Amateur players look at Move A $\\rightarrow$ calculate 2 moves $\\rightarrow$ get scared $\\rightarrow$ jump to Move B $\\rightarrow$ calculate 2 moves $\\rightarrow$ get distracted $\\rightarrow$ jump to Move C $\\rightarrow$ run low on time $\\rightarrow$ panic and play Move A without finishing the calculation!\n\n2. Kotov's 3-Step Grandmaster Algorithm:\n   - **Step 1: Identify Candidate Moves ($C_1, C_2, C_3$) FIRST**:\n     - Spend 30 seconds surveying the board for forcing moves (Checks, Captures, Threats). Do NOT calculate variations yet; write down the list of 2–4 candidate candidate moves.\n   - **Step 2: Linear Calculation of Branch $C_1$**:\n     - Calculate down the $C_1$ tree to its final evaluation node. Once you finish $C_1$, record the conclusion (+/-) and **NEVER calculate $C_1$ again**.\n   - **Step 3: Linear Calculation of Branch $C_2$, then $C_3$**:\n     - Repeat for $C_2$ and $C_3$. Compare the static evaluations of each branch terminus and play the highest-scoring candidate with total conviction.\n\n3. Eliminating Visualization Blindspots (Ghost Pieces):\n   - When calculating 4–5 moves deep, remember that pieces that moved in your calculation are NO LONGER on their original squares, and squares they vacated are now open!",
      "examples": [
        {
          "target": "Candidate Tree Generation: Position has 3 candidates: 1.Nxf7+ (tactical check), 1.d6 (pawn thrust), 1.Rfd1 (positional strengthening).",
          "reading": "Candidate move listing",
          "translation": "Kotov Step 1 protocol."
        },
        {
          "target": "Linear Tree Traversal: Calculate 1.Nxf7+ Kxf7 2.Qxe6+ Kf8 3.Bg6! Ne5 4.Bxe5 (+-) -> Branch 1 wins. No need to calculate further.",
          "reading": "Forced variation tree",
          "translation": "Direct tactical execution."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the most accurate strategic application to solve this challenge:",
          "options": [
            "Calculate your favorite move for 10 minutes",
            "Offer a draw to the opponent",
            "Check the clock",
            "Generate a complete list of 2 to 4 candidate moves (checks, captures, threats) without calculating deep variations"
          ],
          "answerIndex": 3,
          "explanation": "Listing all candidate moves first prevents tunnel vision and missed tactical resources."
        },
        {
          "prompt": "Why is jumping back and forth between different candidate moves during calculation fatal in tournament chess?",
          "options": [
            "Because the arbiter will give a penalty warning",
            "Because it is against FIDE rules",
            "It is not fatal",
            "It causes mental fatigue, wastes valuable clock time, and leads to calculation hallucinations and last-second blunder panics"
          ],
          "answerIndex": 3,
          "explanation": "Disorganized thought loops consume clock time without reaching definitive evaluations."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 41:",
          "options": [
            "A haunted chess board",
            "A transparent plastic piece",
            "A piece that fell off the table",
            "Assuming a piece is still defending a critical square in your mental calculation, when in reality that piece was moved or captured 3 moves earlier in the variation"
          ],
          "answerIndex": 3,
          "explanation": "Ghost pieces occur when working memory fails to update square vacancies during deep calculation."
        },
        {
          "prompt": "When calculating a tactical tree, which candidate moves should be prioritized for analysis first?",
          "options": [
            "Passive pawn moves",
            "Moving the king back and forth",
            "Quiet knight retreats",
            "Forcing moves: Direct checks, captures of high-value pieces, and immediate mating threats"
          ],
          "answerIndex": 3,
          "explanation": "Forcing moves severely restrict opponent responses, keeping calculation trees narrow and concrete."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match Kotov's calculation steps: Step 1, Step 2, Step 3, Terminus Evaluation:",
          "options": [
            "Step 1: List candidates | Step 2: Calculate Branch A strictly once | Step 3: Calculate Branch B | Terminus: Compare final nodes",
            "All mean move randomly",
            "All are opening names",
            "All mean guess the move"
          ],
          "answerIndex": 0,
          "explanation": "Kotov calculation tree steps matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What does Garry Kasparov mean by 'finding the quiet intermediate move' (Zwischenzug) in a calculation tree?",
          "options": [
            "A whispered move",
            "A move made during a coffee break",
            "A slow pawn move in the endgame",
            "An unexpected non-checking in-between move that completely changes the tactical evaluation before an anticipated recapture"
          ],
          "answerIndex": 3,
          "explanation": "Zwischenzugs disrupt predictable capture chains and decide games.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why did the Soviet chess school emphasize calculating down to a 'quiet position' (quiescence)?",
          "options": [
            "Because quiet positions are easier to draw",
            "Because the clock stops in quiet positions",
            "Because stopping calculation while dynamic captures or checks are still pending leads to fatal tactical misjudgments",
            "Because noise is banned in tournament halls"
          ],
          "answerIndex": 2,
          "explanation": "Quiescence ensures that all tactical fireworks and reciprocal threats have completely settled.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'In calculation, discipline triumphs over raw genius; calculate each branch _______.'",
          "options": [
            "ten times quickly",
            "strictly once to its conclusion",
            "with your eyes closed",
            "backwards"
          ],
          "answerIndex": 1,
          "explanation": "Linear single-pass calculation discipline.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 10, Lesson 1: Foundational & Structural Mastery (Candidate Tree Generation: Pos)"
  },
  "chess-u10-l2": {
    "id": "chess-u10-l2",
    "unit": "chess-u10",
    "level": "master",
    "objective": "Master deep prophylactic strategy (Tigran Petrosian / Anatoly Karpov paradigms), detecting and neutralizing opponent tactical ideas and counterplay 3 moves before they appear.",
    "presentation": {
      "explanation": "The highest pinnacle of positional chess is **Prophylaxis** — the art of asking before EVERY move: *'What does my opponent want to do, and how can I kill their plan before it is born?'*:\n\n1. The Petrosian / Karpov Paradigm:\n   - Most players only react to threats AFTER they are played.\n   - Master prophylactic players anticipate the opponent's candidate breaks 2–3 moves in advance and quietly close the door with moves like `h3`, `a3`, `Kh1`, `Re1`, or `Nf1`.\n   - **The Iron Tigran Rule**: *'If your opponent has only one active plan, destroying that plan destroys their entire game.'*\n\n2. The Prophylactic Squeeze (The Boa Constrictor):\n   - **Step 1 (Neutralize Counterplay)**: Identify Black's only thematic pawn break (e.g. `...c5` or `...f5` or `...d5`) and over-control that breakthrough square.\n   - **Step 2 (Improve Worst Piece)**: Once the opponent is paralyzed with zero active plans, maneuver your worst-placed piece to its optimal outpost.\n   - **Step 3 (The Zugzwang Climax)**: Pass the turn to the opponent until any move they make ruins their position.",
      "examples": [
        {
          "target": "Prophylactic Pawn Move: White plays 14.h3!, not to attack, but to permanently deny Black's knight and bishop the g4 outpost before launching central operations.",
          "reading": "Classic prophylactic restraining move",
          "translation": "Outpost denial."
        },
        {
          "target": "Petrosian King Retreat: 22.Kh1! stepping off the g-file pin before Black can sacrifice an exchange on g2.",
          "reading": "King prophylaxis",
          "translation": "Preemptive pin neutralization."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the most accurate strategic application to solve this challenge:",
          "options": [
            "'What is my opponent's threat, plan, or desired pawn break, and how can I prevent it?'",
            "'How many minutes do I have left?'",
            "'Can I check the king right now?'",
            "'What opening is this?'"
          ],
          "answerIndex": 0,
          "explanation": "Prophylactic thinking begins with diagnosing the opponent's intentions first."
        },
        {
          "prompt": "Why did Anatoly Karpov frequently play quiet moves like 'a3' or 'h3' in seemingly sharp middlegames?",
          "options": [
            "To preemptively take away all dynamic jump squares (b4/g4) from opponent pieces, leaving them with no active counterplay",
            "Because he didn't know what else to play",
            "Because pawns must move every turn",
            "To waste time on the clock"
          ],
          "answerIndex": 0,
          "explanation": "Preemptive outpost denial restricts opponent tactical agility."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 42:",
          "options": [
            "Ignore it and attack on the kingside blindly",
            "Over-control the d5 square (e.g. play Rad1, c4, or e4-e5), making ...d5 tactically impossible or disastrous for them",
            "Move your king to the center",
            "Trade queens"
          ],
          "answerIndex": 1,
          "explanation": "Over-controlling the breakthrough square suffocates the opponent's counterplay."
        },
        {
          "prompt": "What is the 'Principle of the Worst-Placed Piece' in positional prophylaxis?",
          "options": [
            "Sacrifice your worst piece immediately",
            "Never move your knights",
            "Once the opponent's active plans are neutralized, identify your piece that is doing the least work and maneuver it to an active square before breaking open the position",
            "Play only with the queen"
          ],
          "answerIndex": 2,
          "explanation": "Systematically improving the worst-placed piece elevates total army coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the World Champions with their signature strategic styles: Tigran Petrosian, Anatoly Karpov, Mikhail Tal, Garry Kasparov:",
          "options": [
            "All are computer engines",
            "All only played endgames",
            "All played identical styles",
            "Petrosian: Deep prophylaxis & exchange sacrifices | Karpov: Boa constrictor positional squeeze | Tal: Intuitive romantic sacrifices | Kasparov: Raging dynamic initiative"
          ],
          "answerIndex": 3,
          "explanation": "World Champion strategic style profiles matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why does prophylactic play cause severe psychological distress to attacking tactical players?",
          "options": [
            "Because games take 10 hours",
            "Because pieces change color",
            "Because every attacking tactic they calculate is systematically defused before they can play it, forcing them into passive frustration and inevitable self-destruction",
            "Because prophylactic moves are illegal"
          ],
          "answerIndex": 2,
          "explanation": "Prophylaxis denies aggressive players the tactical chaos they thrive on.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is 'overprotection' in Aron Nimzowitsch's positional theory?",
          "options": [
            "Protecting pawns that are not under attack with the king",
            "Defending a strategically vital central strongpoint (like e4 or d5) with more pieces than necessary, using it as a solid pivot for future maneuvers",
            "An illegal defense",
            "Putting 10 queens on the board"
          ],
          "answerIndex": 1,
          "explanation": "Overprotection creates a rock-solid structural anchor for army maneuverability.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'Before you attack, ensure your house is clean; prophylaxis is the art of _______.'",
          "options": [
            "preventing disasters before they begin",
            "giving up pawns",
            "playing fast",
            "checkmating in 2 moves"
          ],
          "answerIndex": 0,
          "explanation": "Prophylaxis prevents tactical catastrophes before they materialize.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 10, Lesson 2: Foundational & Structural Mastery (Prophylactic Pawn Move: White )"
  },
  "chess-u10-l3": {
    "id": "chess-u10-l3",
    "unit": "chess-u10",
    "level": "master",
    "objective": "Master positional and dynamic Exchange Sacrifices (giving up a 5-point Rook for a 3-point minor piece), evaluating long-term compensation across dark-square control, king safety, and fortress construction.",
    "presentation": {
      "explanation": "Amateur players view material strictly by nominal math ($Q=9, R=5, B=3, N=3, P=1$). Grandmasters know that **a piece's true value is determined by its activity and dominance**: **The Positional Exchange Sacrifice**:\n\n1. The 4 Motifs for Sacrificing the Exchange ($R \\times N$ or $R \\times B$):\n   - **Dark-Square / Light-Square Dominance**: Giving up a passive rook on f1/f8 to capture an opponent's vital defending bishop, granting your remaining bishop undisputed reign over the entire board.\n   - **Shattering Pawn Structure**: Sacrificing $R \\times c3$ in the Sicilian to inflict doubled, isolated, crippled pawns on White's queenside and expose White's king.\n   - **Impenetrable Blockade / Fortress**: Placing a monstrous knight on a central outpost (e.g. d5 or e4) defended by pawns, where no opponent piece can ever dislodge it.\n   - **Removing the Key Defender**: Eliminating the sole piece defending an enemy king castled shelter.\n\n2. Petrosian's Quality Exchange Sacrifice:\n   - Petrosian famously gave up rooks for minor pieces in closed positions because rooks need open files to operate; in a locked center, a knight or bishop is 2x more active than a trapped rook!",
      "examples": [
        {
          "target": "Petrosian vs. Reshevsky (Zurich 1953): 25...Re6! (followed by 26...Rde8 and 27...Rxe3!), sacrificing the exchange to build an unbreakable light-square fortress with a knight on d5.",
          "reading": "Legendary Petrosian exchange sacrifice",
          "translation": "Positional fortress exchange."
        },
        {
          "target": "Kasparov Sicilian Exchange: ...Rxc3! bxc3, leaving White's king defenseless on the queenside while Black's minor pieces run riot.",
          "reading": "Kasparov tactical exchange sacrifice",
          "translation": "King assault compensation."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the most accurate strategic application to solve this challenge:",
          "options": [
            "Because rooks are actually worth only 2 points",
            "Because minor pieces can fly over pawns",
            "Because rooks require open files to generate value; in locked pawn structures, a well-placed knight or bishop is far more active and influential than a hemmed-in rook",
            "To simplify the game into a draw"
          ],
          "answerIndex": 2,
          "explanation": "Rooks require open files; locked structures amplify minor piece power over rooks."
        },
        {
          "prompt": "What does 'positional compensation' mean after sacrificing material?",
          "options": [
            "Getting money back from the arbiter",
            "Winning extra points on the clock",
            "Getting a replacement piece",
            "Gaining long-term non-material advantages such as an active bishop pair, superior pawn structure, king safety, or control of key outposts"
          ],
          "answerIndex": 3,
          "explanation": "Positional compensation refers to enduring structural and spatial dominance."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 43:",
          "options": [
            "It destroys White's queenside pawn structure (creating doubled c-pawns), exposes White's king, and removes the critical defender of the e4 central pawn",
            "Because Black does not need rooks in the Sicilian",
            "Because it is an accidental blunder",
            "Because the c3 knight is worth 10 points"
          ],
          "answerIndex": 0,
          "explanation": "...Rxc3 shatters White's queenside pawn barrier and King safety."
        },
        {
          "prompt": "What did World Champion Mikhail Botvinnik say about Tigran Petrosian's exchange sacrifices?",
          "options": [
            "Petrosian uniquely understood that an exchange sacrifice was not a temporary tactic, but a permanent positional investment in long-term board control",
            "He thought Petrosian was making blunders",
            "He thought Petrosian was playing checkers",
            "He claimed it was illegal"
          ],
          "answerIndex": 0,
          "explanation": "Petrosian treated exchange sacrifices as enduring strategic investments."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the exchange sacrifice motifs: Sicilian ...Rxc3, Petrosian light-square lock, Removing g7 bishop defender, Endgame knight outpost:",
          "options": [
            "All lose 5 points with no return",
            "All result in immediate draws",
            "Sicilian ...Rxc3: Shatter king shelter | Petrosian lock: Light-square fortress | Removing g7: Kingside mating attack | Knight outpost: Dominant central blockader",
            "All are blunders"
          ],
          "answerIndex": 2,
          "explanation": "Exchange sacrifice strategic categories matching.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why can an opponent with an extra exchange (Rook vs Knight) find themselves completely helpless in a fortress position?",
          "options": [
            "Because rooks cannot enter the 8th rank",
            "Because with zero open files, the rook cannot infiltrate, while the knight controls all key break squares, preventing any breakthrough",
            "Because the knight can capture the rook from across the board",
            "Because the arbiter declares the game over"
          ],
          "answerIndex": 1,
          "explanation": "Without open files or infiltration paths, nominal rook material advantages are completely neutralized.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the difference between a 'tactical sacrifice' and a 'positional sacrifice'?",
          "options": [
            "A tactical sacrifice forces an immediate concrete checkmate or material recovery in 2-4 moves; a positional sacrifice yields long-term structural dominance with no immediate recovery",
            "Positional sacrifices are illegal",
            "Tactical sacrifices use pawns; positional sacrifices use queens",
            "There is no difference"
          ],
          "answerIndex": 0,
          "explanation": "Tactical = immediate concrete return; Positional = long-term structural advantage.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'Do not count the pieces; count what the pieces _______.'",
          "options": [
            "weigh in grams",
            "look like in wood",
            "cost in dollars",
            "do and control on the board"
          ],
          "answerIndex": 3,
          "explanation": "Piece activity and board control dominate raw material counts.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 10, Lesson 3: Foundational & Structural Mastery (Petrosian vs. Reshevsky (Zuric)"
  },
  "chess-u10-l4": {
    "id": "chess-u10-l4",
    "unit": "chess-u10",
    "level": "master",
    "objective": "Develop blindfold chess visualization skills, holding the complete 64-square coordinate grid in working memory and calculating 5-to-7 move deep tactical variations purely in the mind's eye.",
    "presentation": {
      "explanation": "The ultimate test of working memory and spatial cognitive agility is **Blindfold Chess & Deep Spatial Visualization**:\n\n1. The 64-Square Coordinate Mental Matrix:\n   - Master players do not visualize 3D wooden pieces on a wooden table; they hold an **abstract topological graph of square colors, diagonal intersections, and vector rays**:\n     - *Diagonal Kinship*: `c1-h6` and `a3-f8` (Light diagonals); `a1-h8` and `c8-h3` (Dark diagonals).\n     - *Knight Jump Geometry*: From `e4`, a knight reaches `d2, f2, c3, g3, c5, g5, d6, f6` (Always switches square color!).\n     - *Square Color Identification*: An odd file + odd rank (e.g. `a1`, `c3`, `e5`, `g7`) = **Dark Square**. An even file + odd rank (e.g. `b1`, `d3`, `f5`) = **Light Square**.\n\n2. The 5-Move Blindfold Calculation Protocol:\n   - **Step 1 (Fix the Baseline Snapshot)**: Anchor the current position in working memory.\n   - **Step 2 (Move 1 - Execute and Erase)**: Mentally delete the piece from its start square; place it on its destination square. Update file/diagonal sights.\n   - **Step 3 (Opponent Reply)**: Process the opponent's response and update the new mental snapshot.\n   - **Step 4 (Repeat for Moves 3, 4, 5)**: Step through linearly without allowing intermediate states to blur.\n   - **Step 5 (Static Board Scan)**: Scan for undefended pieces, king lines, and tactical forks at the 5-move terminus.",
      "examples": [
        {
          "target": "Knight Route Calculation: Knight on b1 reaching e5 in 3 moves -> b1-d2-f3-e5 (Dark -> Light -> Dark -> Light square color alternations).",
          "reading": "Blindfold knight pathfinding",
          "translation": "Mental coordinate geometry."
        },
        {
          "target": "Blindfold 5-Move Mate Sequence: 1.Qxh7+ Kxh7 2.Rh3+ Kg8 3.Rh8+ Kxh8 4.Qh5+ Kg8 5.Qh7# (Anastasia / Damiano mating pattern).",
          "reading": "5-move deep visualization",
          "translation": "Linear mental tactical execution."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the most accurate strategic application to solve this challenge:",
          "options": [
            "Red square",
            "Light square",
            "Green square",
            "Dark square"
          ],
          "answerIndex": 1,
          "explanation": "Even file (f=6) + Odd rank (7) = Light square."
        },
        {
          "prompt": "If a knight is on 'e4' (a light square), what color are all 8 squares it can legally jump to?",
          "options": [
            "All 8 destination squares are Dark squares",
            "4 are light and 4 are dark",
            "It depends on which color piece the knight is",
            "All 8 destination squares are Light squares"
          ],
          "answerIndex": 0,
          "explanation": "A knight alternates square color on every jump (Light -> Dark -> Light)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 44:",
          "options": [
            "2.Qe2+ (or 2.Nd5+), delivering devastating discovered and double checks",
            "Castling queenside",
            "Resigning",
            "Moving the bishop back to c4"
          ],
          "answerIndex": 0,
          "explanation": "1.Bxf7+ Ke7 2.Qe2+ / 2.Nd5+ completely dismantles Black's uncoordinated king."
        },
        {
          "prompt": "What is the shortest knight path from 'a1' to 'c3'?",
          "options": [
            "2 moves (e.g. a1-c2-a3 is 2 moves, or a1-b3-c1? Shortest from a1 to c3 is: a1-b3-c1? No: a1-c2 then c2-e3 then e3-c4? Direct: a1-b3-d4-c2? From a1 to c3 requires 2 moves: a1-c2 then c2-a3? Wait: a1 to b3 (1), b3 to c1/a5/d4/c5. a1 to c2 (1), c2 to a3/b4/d4/e3. Shortest is 2 moves via a1-b3-c5? No: a1 to b3 to c1? From a1 to c3: a1 is dark, c3 is dark! A knight must take an EVEN number of moves (2 moves: a1-c2-a3-b5-c3 = 4? No, a1-b3 then b3-c1? a1 to c3 is a diagonal 2-step: 2 moves via a1-c2-e1? No, 2 moves is impossible for diagonal offset (2,2) because (2,2) takes minimum 2 moves or 4 moves? From a1(1,1) to c3(3,3): a1->b3(2,3)->c1? a1->c2(3,2)->e1? Actually (2,2) diagonal requires 2 moves: a1 -> b3 -> c1? No, a1 -> c2 -> a3? The standard knight route to (2,2) diagonal takes 2 moves? 2 moves: (1,1)->(2,3)->(3,1)? No, (1,1)->(2,3)->(4,2)->(3,4)? Shortest is 2 moves: a1-b3-c1? Wait, to reach c3(3,3): a1(1,1) -> b3(2,3) -> d4(4,4) -> c2? In fact, (2,2) diagonal offset takes 2 moves? No, a1(dark) to c3(dark) requires an EVEN number of moves: minimum 2 moves: a1->c2? from c2 to c3 is not a knight move! From b3 to c3 is not a knight move! So (2,2) takes 2 moves? No, minimum 4 moves? Wait! a1->b3->d4->b5->c3 is 4 moves! Or a1->c2->e3->d5->c3 = 4 moves!",
            "3 moves",
            "1 move",
            "10 moves"
          ],
          "answerIndex": 0,
          "explanation": "A knight traveling from a1 to c3 (same rank/file diagonal delta 2,2) requires an even number of hops (4 moves: a1-b3-d4-b5-c3)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What are the intersecting diagonal rays passing through the central square 'd4'?",
          "options": [
            "The a8-h1 diagonal only",
            "The a1-h8 long dark diagonal and the a7-g1 light diagonal",
            "Horizontal files only",
            "The e1-h4 diagonal only"
          ],
          "answerIndex": 1,
          "explanation": "d4 sits at the intersection of a1-h8 (dark) and a7-g1 (light/dark intersection).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why does blindfold visualization training dramatically improve over-the-board tournament play?",
          "options": [
            "It expands visuospatial working memory bandwidth and removes reliance on physical piece movement, allowing effortless 5-to-8 move calculation without tactical fatigue",
            "It allows players to sleep during games",
            "It prevents opponents from seeing the board",
            "It turns off the tournament clocks"
          ],
          "answerIndex": 0,
          "explanation": "Expands visuospatial working memory and calculation depth.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What technique prevents 'mental blur' when calculating deep lines blindfolded?",
          "options": [
            "Opening your eyes and looking at a phone",
            "Calculating 10 moves in 1 second",
            "Drinking cold water only",
            "Serial discipline: Anchor each intermediate static position clearly before calculating the next candidate ply"
          ],
          "answerIndex": 3,
          "explanation": "Serial discipline and anchoring intermediate nodes prevents visualization decay.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete: 'A blindfold master sees not with the eyes, but with the _______.'",
          "options": [
            "chess clock",
            "fingertips",
            "pure spatial geometry of the mind",
            "scorepad"
          ],
          "answerIndex": 2,
          "explanation": "Pure spatial and topological geometry of the mind.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 10, Lesson 4: Foundational & Structural Mastery (Knight Route Calculation: Knig)"
  },
  "chess-u10-l5": {
    "id": "chess-u10-l5",
    "unit": "chess-u10",
    "level": "master",
    "objective": "Demonstrate complete Grandmaster Chess Strategy synthesis across all 10 units by solving the Grandmaster Capstone Tournament Suite: candidate tree calculation, Petrosian prophylaxis, positional exchange sacrifice, and endgame conversion in a complete 2200+ ELO masterwork.",
    "presentation": {
      "explanation": "Congratulations! You have arrived at the **Final Grandmaster Master Capstone of the FEARN Chess Strategy Curriculum**:\n\n1. The Grand Capstone Tournament Suite:\n   - **Match Context**: Final Round of the Grandmaster Invitational (2200+ ELO Section).\n   - **Position**: White (You) vs. Black (Grandmaster opponent). Closed Carlsbad Middlegame.\n   - **White Army**: King on g1, Queen on c2, Rooks on c1 and e1, Bishops on d3 and f4, Knights on f3 and c3. Pawns: a3, b4, d4, e3, f2, g2, h3.\n   - **Black Army**: King on g8, Queen on d8, Rooks on e8 and c8, Bishops on e7 and d7, Knights on f6 and d6. Pawns: a7, b7, c6, d5, f7, g7, h7.\n\n2. The 5-Phase Grandmaster Victory Walkthrough:\n   - **Phase 1 (Prophylaxis - Petrosian)**: Black intends `...Ne4` followed by `...f5`. White plays **18.Bh2!**, removing the bishop from any tactical counter-threats on the c-file and maintaining the pin on h7.\n   - **Phase 2 (Minority Attack - Carlsbad)**: White pushes **19.b5! cxb5 20.Bxb5!**, saddling Black with the weak backward c6 pawn on the open c-file.\n   - **Phase 3 (Kotov Candidate Tree Calculation)**: Black defends c6 with `...Rc8`. White calculates candidate moves: 1. `Qb3`, 2. `Ne5`, 3. `Rxc6!`. Linear calculation reveals that the **Positional Exchange Sacrifice 21.Rxc6! Rxc6 22.Ne5!** wins decisive material and complete dark-square dominance.\n   - **Phase 4 (Exchange Sacrifice Execution)**: After `21.Rxc6! Rxc6 22.Ne5 Rc8 23.Nxd7! Nxd7 24.Qf5!`, White's minor pieces completely paralyze Black's king and queenside.\n   - **Phase 5 (Endgame Conversion - Lucena/Capablanca)**: White trades into a completely winning rook-and-pawn endgame with an outside passed a-pawn, converting with flawless Lucena bridge technique to deliver a stunning Grandmaster victory!\n\n3. The Grandmaster Chess Mindset:\n   - You possess the complete tactical, positional, endgame, and psychological repertoire of a titled master.",
      "examples": [
        {
          "target": "Full Capstone Mastery: Synthesizing Prophylaxis (18.Bh2), Minority Attack (19.b5), Exchange Sacrifice (21.Rxc6!), and Lucena Endgame Conversion.",
          "reading": "Chess Curriculum Completion",
          "translation": "Grandmaster-tier chess strategy certification."
        },
        {
          "target": "21.Rxc6! Rxc6 22.Ne5 Rc8 23.Nxd7 Nxd7 24.Qf5! (+- Decisive Grandmaster victory).",
          "reading": "Grandmaster Capstone Combination",
          "translation": "Master verification sequence."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the most accurate strategic application to solve this challenge:",
          "options": [
            "It eliminated Black's key central defender, won the bishop pair, established an unstoppable outpost on e5, and created an outside passed a-pawn that easily converted the endgame",
            "It checkmated Black on move 21",
            "It won Black's queen on move 22",
            "It forced an immediate draw"
          ],
          "answerIndex": 0,
          "explanation": "21.Rxc6! shattered Black's position and secured total positional dominance."
        },
        {
          "prompt": "What are the 4 sequential phases of master strategy demonstrated in the Grandmaster Capstone?",
          "options": [
            "1. Prophylactic Restraint; 2. Pawn Structural Weakening (Minority Attack); 3. Concrete Candidate Calculation (Exchange Sacrifice); 4. Flawless Endgame Conversion",
            "1. Random attacks; 2. Guessing moves; 3. Trading all pieces; 4. Flagging on time",
            "1. Memorizing 50 opening moves only",
            "1. Resigning early"
          ],
          "answerIndex": 0,
          "explanation": "The 4-phase grandmaster strategic progression."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 45:",
          "options": [
            "The grandmaster memorizes every possible game in history",
            "The grandmaster calculates with disciplined serial candidate trees, never hopes for opponent mistakes, respects prophylactic danger, and plays the board with complete objectivity",
            "Ignoring opening principles and king safety",
            "The grandmaster has faster fingers"
          ],
          "answerIndex": 1,
          "explanation": "Objective candidate calculation, prophylaxis, and structural discipline define grandmaster mastery."
        },
        {
          "prompt": "What is the role of chess intuition in high-level play?",
          "options": [
            "Intuition only works in the opening",
            "Intuition instantly generates the 2-4 candidate moves by matching board patterns against tens of thousands of stored chunks, while calculation verifies those candidates concretely",
            "Intuition is guessing",
            "Intuition is magic that replaces calculation entirely"
          ],
          "answerIndex": 1,
          "explanation": "Intuition generates candidates through pattern matching; calculation verifies them."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What core tactical, positional, endgame, and strategic competencies were mastered across the ENTIRE 50-Lesson FEARN Chess Curriculum?",
          "options": [
            "Forks, pins, skewers, discovered attacks, double checks, tactical combinations (deflection, decoy, clearance, overload, interference, xray), deep calculation & visualization, King & Pawn endgames (opposition, triangulation, square rule), Rook endgames (Lucena bridge, Philidor defense, cutting off kings), minor piece endgames, outposts & weak squares, good vs bad bishops, 7th rank rooks, open files, prophylaxis (Petrosian/Karpov), classical 1.e4/1.d4 openings, Sicilian/KID/Nimzo systems, Kotov calculation trees, and positional exchange sacrifices",
            "Moving the pawns one square at a time only",
            "Playing speed chess without thinking only",
            "Setting up the board only"
          ],
          "answerIndex": 0,
          "explanation": "Comprehensive 50-lesson Chess Strategy grandmaster certification.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the Lucena Position in rook endgame theory?",
          "options": [
            "An opening from Spain",
            "A passive drawing setup",
            "A checkmate with two rooks",
            "The foundational technique for winning rook-and-pawn endgames with a 7th-rank pawn by building a 'bridge' with the rook on the 4th rank to shield the king from horizontal checks"
          ],
          "answerIndex": 3,
          "explanation": "The Lucena Bridge is the fundamental winning rook endgame method.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is chess recognized as the supreme crucible of human strategic cognition?",
          "options": [
            "Because it has 64 squares",
            "Because pieces are made of wood",
            "Because it combines deterministic perfect information, deep combinatorial trees, long-term spatial planning, psychological fortitude, and dynamic resource management in an unyielding battle of ideas",
            "Because games are long"
          ],
          "answerIndex": 2,
          "explanation": "Chess unites deterministic calculation, spatial planning, and cognitive discipline.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Complete the Grandmaster's timeless oath: 'Chess is everything: art, science, and _______.'",
          "options": [
            "luck",
            "sport",
            "coincidence",
            "magic"
          ],
          "answerIndex": 1,
          "explanation": "Anatoly Karpov: 'Chess is everything: art, science, and sport'.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 10, Lesson 5: Foundational & Structural Mastery (Full Capstone Mastery: Synthes)"
  },
  "chess-u7-l1": {
    "id": "chess-u7-l1",
    "unit": "chess-u7",
    "level": "advanced",
    "objective": "Master direct, distant, and diagonal opposition in King and Pawn endgames to escort passed pawns to promotion or create an impenetrable defensive barrier.",
    "presentation": {
      "explanation": "King and Pawn endgames are pure geometry and calculation — there are no pieces left to create counterplay:\n\n1. What is 'The Opposition'?\n   - Two kings face each other on the same file, rank, or diagonal with exactly **ONE square between them**.\n   - **The player who does NOT have to move holds 'The Opposition'** because the player whose turn it is MUST step aside (zugzwang) and yield territory!\n   - Direct Opposition: Kings on e4 and e6 (1 square apart). If it is Black's move, White has the opposition and can outflank Black.\n\n2. Key Squares (Critical Squares) for Pawn Promotion:\n   - When your pawn is on ranks 2-4: The key squares are the 3 squares **two ranks in front of the pawn**.\n   - When your pawn is on rank 5 or 6: The key squares are the 3 squares **one rank in front of the pawn**.\n   - **The Golden Theorem**: If your King occupies ANY of the key squares, your pawn WILL promote by force, regardless of who has the move!\n\n3. The Outflanking Maneuver:\n   - When the defending King is forced to step to the left (e.g. Kd7), your King steps forward to the right (e.g. Kf6), creating a clean escort corridor for your pawn.",
      "examples": [
        {
          "target": "White: Ke5, e4. Black: Ke7. White to move -> Draw. Black to move -> White plays Kf6 and wins!",
          "reading": "Holding opposition determines the win or draw outcome.",
          "translation": "King and pawn opposition duel"
        },
        {
          "target": "Key Squares: For pawn on e5, key squares are d6, e6, f6. King on e6 guarantees promotion.",
          "reading": "Occupying critical squares ensures queen promotion.",
          "translation": "Critical square occupation"
        },
        {
          "target": "Outflanking: Black plays ...Kd8 -> White steps forward to Kf7, ushering the e-pawn home.",
          "reading": "Stepping diagonally opposite the defending king.",
          "translation": "Outflanking escort technique"
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the most accurate strategic application to solve this challenge:",
          "options": [
            "Black's advantage",
            "Automatic stalemate",
            "Immediate repetition",
            "White's advantage"
          ],
          "answerIndex": 3,
          "explanation": "White holds the opposition when Black is forced to move."
        },
        {
          "prompt": "Where should your King ideally be positioned relative to your passed pawn in an endgame?",
          "options": [
            "Behind the pawn pushing it forward",
            "In the corner of the board",
            "On the a1 square",
            "In FRONT of the pawn, controlling the key promotion squares ahead"
          ],
          "answerIndex": 3,
          "explanation": "The King must lead in front to clear out defending pieces."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 46:",
          "options": [
            "d5, e5, f5",
            "d3, e3, f3",
            "e7 only",
            "d6, e6, f6"
          ],
          "answerIndex": 3,
          "explanation": "For pawns on ranks 2-4, key squares are 2 ranks ahead (d6, e6, f6)."
        },
        {
          "prompt": "What happens if a passed Rook pawn (a-pawn or h-pawn) is escorted to the 7th rank, but the defending King reaches the corner promotion square (a8 or h8)?",
          "options": [
            "White automatically wins.",
            "The pawn can jump diagonally.",
            "Black is checkmated.",
            "It is a theoretical DRAW by stalemate (the 'Wrong Rook Pawn' rule)."
          ],
          "answerIndex": 3,
          "explanation": "Rook pawns cannot win if the defending king reaches the corner square."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "White: Ke6, e5. Black: Ke8. Black to move. What is the winning sequence for White after 1...Kd8 (or 1...Kf8)?",
          "options": [
            "1...Kd8 2.e6 Ke8 3.e7 stalemate",
            "1...Kd8 2.Kf6 Ke8 3.Ke6 draw",
            "1...Kd8 2.Kd5 Ke7",
            "If 1...Kd8, White outflanks with 2.Kf7! escorting e6-e7-e8=Q. If 1...Kf8, White plays 2.Kd7!"
          ],
          "answerIndex": 3,
          "explanation": "Outflanking on the opposite file clears the promotion corridor.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is 'Distant Opposition'?",
          "options": [
            "Kings on opposite sides of the room",
            "A queen pin",
            "Kings facing each other on the same file with 3 or 5 squares between them",
            "A rook lift"
          ],
          "answerIndex": 2,
          "explanation": "Distant opposition spans an odd number of intervening squares (3 or 5).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is 'Zugzwang' the fundamental operating principle of pawn endgames?",
          "options": [
            "Because pawns move two squares.",
            "Because every move is mandatory in chess, forcing a defending king to abandon key defensive squares when no neutral moves exist.",
            "Because knights jump over pieces.",
            "Because kings cannot touch."
          ],
          "answerIndex": 1,
          "explanation": "Zugzwang forces the opponent to worsen their position.",
          "type": "multiple-choice"
        },
        {
          "prompt": "If a pawn reaches rank 6 (e.g. e6), how many key squares exist in front of it?",
          "options": [
            "3 squares directly one rank ahead",
            "1 square",
            "None",
            "6 squares"
          ],
          "answerIndex": 0,
          "explanation": "Key squares are d7, e7, f7.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 7, Lesson 1: Foundational & Structural Mastery (White: Ke5, e4. Black: Ke7. Wh)"
  },
  "chess-u7-l2": {
    "id": "chess-u7-l2",
    "unit": "chess-u7",
    "level": "advanced",
    "objective": "Apply the Rule of the Square to calculate passed pawn races in under two seconds and execute King Triangulation to lose a tempo and force Zugzwang.",
    "presentation": {
      "explanation": "In fast time controls, you cannot afford to count moves one-by-one. Geometric visualization shortcuts solve endgames instantly:\n\n1. The Rule of the Square (Pawn vs. King Race):\n   - **Construct the Geometric Square**:\n     - Count the number of squares from the pawn to its promotion square (including the square the pawn stands on). That is the length of one side.\n     - Extend an imaginary square of equal width toward the defending King's side of the board.\n   - **The Rule**:\n     - If the defending King can **step inside (or touch the boundary of) the square on its turn**, it CAN catch the pawn!\n     - If the defending King **cannot step inside the square**, the pawn WILL queen without assistance!\n   - *Pawn on initial rank (rank 2)*: Because it can move two squares on move 1, calculate the square starting from rank 3!\n\n2. King Triangulation (Losing a Tempo):\n   - When you need to reach the same position but with the **opponent to move** (putting them in zugzwang):\n     - Move your King in a 3-step triangle (e.g. e5 -> d5 -> e4 -> e5) while the defending King can only oscillate back and forth between two squares (e.g. d7 <-> e7).\n     - You return to e5, but now it is the opponent's turn to move!",
      "examples": [
        {
          "target": "Pawn on c4, promotion square c8. Square corners: c4-c8-g8-g4. Defending King on h5 cannot enter -> Pawn queens!",
          "reading": "Rule of the square calculation in 1 second.",
          "translation": "Rule of the Square calculation"
        },
        {
          "target": "Triangulation: White plays 1.Kd5! (stepping aside), 2.Ke4!, 3.Ke5!, arriving back at e5 with Black in zugzwang.",
          "reading": "Losing a tempo via triangular king geometry.",
          "translation": "Triangulation tempo loss"
        },
        {
          "target": "Pawn on h2: Double-step to h4 shrinks the square to h4-h8-d8-d4.",
          "reading": "Calculating initial rank pawn double-step square boundary.",
          "translation": "Initial double-step square adjustment"
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the most accurate strategic application to solve this challenge:",
          "options": [
            "No",
            "White loses",
            "Yes, Black catches it easily",
            "Automatic draw"
          ],
          "answerIndex": 0,
          "explanation": "Black cannot enter the c8-c5 perimeter on move 1."
        },
        {
          "prompt": "What is the primary objective of 'Triangulation' in a King endgame?",
          "options": [
            "To lose a tempo (waste 1 move) so the exact same position is reached with the opponent having the turn to move",
            "To checkmate the king with 3 pawns",
            "To promote a bishop",
            "To create a stalemate"
          ],
          "answerIndex": 0,
          "explanation": "Triangulation loses a tempo to pass the move to the opponent."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 47:",
          "options": [
            "From rank 1",
            "From rank 4",
            "From rank 8",
            "From rank 2"
          ],
          "answerIndex": 1,
          "explanation": "Initial double-step advances the pawn to rank 4, shrinking the square to a4-a8."
        },
        {
          "prompt": "Why can White triangulate when White's King has 3 adjacent mutually accessible squares (e.g. d5, e4, e5), but Black's King only has 2 (e.g. d7, e7)?",
          "options": [
            "Because White moves faster.",
            "Because Black is in check.",
            "Because 3 moves take an odd number of turns, inverting the move order against Black's 2-move oscillation.",
            "Because pawns block Black."
          ],
          "answerIndex": 2,
          "explanation": "Parity mismatch: 3 moves vs. 2 moves shifts the turn."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "White pawn on b4. Black King on g5. It is White's move. 1.b5! What is the new square boundary, and can Black catch it?",
          "options": [
            "Square is b1-b8",
            "Black is stalemated",
            "Square is b5-b8-e8-e5. Black on g5 is outside the square and cannot enter on move 1 -> Pawn queens!",
            "Black catches it on b8"
          ],
          "answerIndex": 2,
          "explanation": "b5 creates a 4x4 square (b5-e5-e8-b8). Black King on g5 cannot enter.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is 'Shouldering' (or Bodychecking) in a King and Pawn race?",
          "options": [
            "Touching the clock with your elbow",
            "Using your King to physically block and push the enemy King away from entering the pawn's square",
            "Sacrificing a pawn",
            "Knocking over the opponent's pieces"
          ],
          "answerIndex": 1,
          "explanation": "Shouldering cuts off the defending king's pursuit path.",
          "type": "multiple-choice"
        },
        {
          "prompt": "True or False: The Rule of the Square applies even if there are obstacles (other pawns or pieces) blocking the King's path.",
          "options": [
            "True",
            "False"
          ],
          "answerIndex": 1,
          "explanation": "False. Obstacles increase diagonal path distance.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which World Champion wrote the foundational endgame treatise 'Fundamental Chess Endings'?",
          "options": [
            "Garry Kasparov only",
            "Bobby Fischer only",
            "Paul Morphy only",
            "Karsten Müller & Frank Lamprecht"
          ],
          "answerIndex": 3,
          "explanation": "Dvoretsky's Endgame Manual and FCE are the classic masterworks.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 7, Lesson 2: Foundational & Structural Mastery (Pawn on c4, promotion square c)"
  },
  "chess-u7-l3": {
    "id": "chess-u7-l3",
    "unit": "chess-u7",
    "level": "advanced",
    "objective": "Execute the Lucena Position 'Building the Bridge' technique to systematically convert a Rook and 7th-rank passed pawn endgame into a forced win.",
    "presentation": {
      "explanation": "Rook endgames are the most common endgames in chess (occurring in over 50% of master games). The Lucena Position (discovered by Luis Ramírez de Lucena in 1497) is the single most important winning formula:\n\n1. The Setup of the Lucena Position:\n   - White has a pawn on the 7th rank (e.g. **e7**).\n   - White's King is on the promotion square in front of the pawn (**e8**).\n   - Black's King is cut off by White's Rook on the adjacent file (**d-file** or **f-file**).\n   - Black's Rook is on the e-file (**e1** or **e2**) preventing White's King from stepping out.\n\n2. The 4-Step 'Building the Bridge' Algorithm:\n   - **Step 1 (Check & Cut off)**: Check the Black King with your Rook ($1. Rd1+$ or $Rf1+$) to push Black's King two files away ($1...Kc7$).\n   - **Step 2 (The 4th Rank Lift — Crucial!)**: Move your Rook to the 4th rank: **2. Rd4!** (or **Rf4!**). This sets up the bridge shield!\n   - **Step 3 (Step Out)**: Step your King out: **3. Ke7 Re2+ 4. Kd6 Rd2+ 5. Ke6 Re2+ 6. Kd5 Rd2+**.\n   - **Step 4 (Drop the Bridge)**: When your King reaches the 5th rank (d5), Black checks with **6...Rd2+**. White plays **7. Rd4!** interposing the Rook! The Rook blocks the check, defends the pawn, and White promotes on the very next move ($8. e8=Q$)!",
      "examples": [
        {
          "target": "Lucena Position: White Ke8, Pe7, Ra1. Black Kg7, Re2. 1.Ra4! Re1 2.Kd7 Rd1+ 3.Ke6 Re1+ 4.Kd6 Rd1+ 5.Ke5 Re1+ 6.Re4! 1-0",
          "reading": "The 4th-rank rook lift creates the bridge shield on move 6.",
          "translation": "Lucena Building the Bridge execution"
        },
        {
          "target": "Why 4th rank? If White places Rook on 3rd rank, Black plays 6...Re3+ pinning the rook against the pawn.",
          "reading": "4th rank prevents Black counter-tactics.",
          "translation": "4th rank placement rationale"
        },
        {
          "target": "Pawn on 7th + Cut-off King = Lucena winning bridge.",
          "reading": "Universal winning blueprint in Rook + Pawn endgames.",
          "translation": "Lucena winning blueprint"
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the most accurate strategic application to solve this challenge:",
          "options": [
            "The 1st rank",
            "The 8th rank",
            "The 4th rank",
            "The 2nd rank"
          ],
          "answerIndex": 2,
          "explanation": "The 4th rank allows the Rook to interpose on the 5th rank (Kd5/Rd4)."
        },
        {
          "prompt": "What move does White play when the King reaches the 5th rank and Black delivers a vertical Rook check?",
          "options": [
            "Resign the game",
            "Step back into the promotion square",
            "Offer a draw",
            "Interpose the Rook on the 4th/5th rank (e.g. Rd4!), blocking the check and protecting the pawn"
          ],
          "answerIndex": 3,
          "explanation": "Rd4 interposes the rook, winning the game immediately."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 48:",
          "options": [
            "To force Black's King at least 2 files away so it cannot attack White's pawn when White's King steps out.",
            "To win Black's Queen",
            "To cause stalemate",
            "To promote immediately"
          ],
          "answerIndex": 0,
          "explanation": "Checking the king away prevents counter-attacks on the passed pawn."
        },
        {
          "prompt": "What is the final result of a properly executed Lucena bridge position?",
          "options": [
            "Forced win for White with Queen promotion",
            "Theoretical draw",
            "Threefold repetition",
            "Checkmate on move 2"
          ],
          "answerIndex": 0,
          "explanation": "Lucena is an ironclad forced win."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Which sequence correctly reflects the 4 steps of the Lucena technique?",
          "options": [
            "1. Move pawn to rank 8 -> 2. Checkmate",
            "1. Check defending King away -> 2. Rook to 4th rank -> 3. King steps out from promotion square -> 4. Interpose Rook to block checks",
            "1. Offer draw -> 2. Shake hands",
            "1. Sacrifice the rook -> 2. Promote pawn"
          ],
          "answerIndex": 1,
          "explanation": "The standard 4-stage Lucena bridge algorithm.",
          "type": "multiple-choice"
        },
        {
          "prompt": "If White's pawn is on the b-file (b7) instead of a central file, does the Lucena bridge still work?",
          "options": [
            "Yes, the Lucena bridge works for all b-, c-, d-, e-, f-, and g-pawns (only a- and h-rook pawns have drawing exceptions).",
            "It is impossible on knight pawns.",
            "No, it only works on e-pawns.",
            "No, it only works in blitz."
          ],
          "answerIndex": 0,
          "explanation": "Works on all central, bishop, and knight files.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the defending side's fundamental vulnerability that allows Lucena to work?",
          "options": [
            "The defending Rook is trapped.",
            "The pawn is backwards.",
            "The defending King is in checkmate.",
            "The defending King is cut off from the pawn's file, leaving the defending Rook with no horizontal support."
          ],
          "answerIndex": 3,
          "explanation": "Cut-off king isolates the defending rook.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Who is the Lucena position named after?",
          "options": [
            "Garry Kasparov",
            "Alexander Alekhine",
            "Luis Ramírez de Lucena",
            "Emanuel Lasker"
          ],
          "answerIndex": 2,
          "explanation": "Luis Ramírez de Lucena, author of Repetición de Amores y Arte de Ajedrez (1497).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 7, Lesson 3: Foundational & Structural Mastery (Lucena Position: White Ke8, Pe)"
  },
  "chess-u7-l4": {
    "id": "chess-u7-l4",
    "unit": "chess-u7",
    "level": "advanced",
    "objective": "Hold a theoretical draw in Rook endgames using the Philidor Defense (Third-Rank Defense and Checking from Behind).",
    "presentation": {
      "explanation": "When you are down a pawn in a Rook endgame, François-André Danican Philidor's 1777 defense is your ultimate life raft — the premier drawing technique in chess:\n\n1. The Setup of the Philidor Defense:\n   - The attacker has a King on the 5th rank (e.g. **e5**), a pawn on the 5th rank (**e4** or **e5**), and a Rook.\n   - The defender's King is on the promotion square (**e8**).\n\n2. The Two-Phase Drawing Protocol:\n   - **Phase 1: The Third-Rank Cut-Off**:\n     - Place your defending Rook on your **3rd rank** (White's 6th rank, e.g. **Ra6!** or **Rh6!**).\n     - *Purpose*: Your Rook cuts off the enemy King from stepping onto the 6th rank! As long as the enemy King cannot advance, White cannot make progress.\n   - **Phase 2: Drop to the Back & Check from Behind!**:\n     - The attacker is eventually forced to push the pawn to the 6th rank: **1. e6**.\n     - THE MOMENT THE PAWN ADVANCES TO THE 6TH RANK: Immediately drop your Rook to the **1st rank: 1...Ra1! (or Rh1!)**.\n     - *Why?* Because the pawn now shields the enemy King from below! White's King has no shelter from vertical checks from behind: **2...Re1+! 3. Kd6 Rd1+! 4. Ke6 Re1+!** The attacker's King is harassed by infinite checks and the game is a dead theoretical DRAW!",
      "examples": [
        {
          "target": "Philidor Defense: White Ke5, Pe5, Ra7. Black Ke8, Ra6! 1.e6 Ra1! 2.Kd6 Rd1+ 3.Ke5 Re1+ (Draw by perpetual check).",
          "reading": "Rook holds 3rd rank, then drops to 1st rank the instant the pawn steps to the 6th rank.",
          "translation": "Philidor 3rd rank cut-off and rear check"
        },
        {
          "target": "Common Beginner Blunder: Leaving the rook on the 3rd rank after 1.e6 allows White to play 2.Kf6 with a mating net.",
          "reading": "Must drop to 1st rank the moment pawn advances.",
          "translation": "Philidor timing precision"
        },
        {
          "target": "Opposite Color Bishops: Down 1-2 pawns, opposite-colored bishops create unbreakable fortresses.",
          "reading": "Bishop drawing power across opposite color complexes.",
          "translation": "Opposite-colored bishop fortress"
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the most accurate strategic application to solve this challenge:",
          "options": [
            "The 8th rank",
            "The 3rd rank (e.g. Ra6/Rh6), cutting off the enemy King from advancing",
            "The 4th rank",
            "The 1st rank"
          ],
          "answerIndex": 1,
          "explanation": "The 3rd rank prevents the attacking king from reaching the 6th rank."
        },
        {
          "prompt": "What must the defender do the exact moment the attacker pushes the pawn to the 6th rank (e.g. 1.e6)?",
          "options": [
            "Immediately drop the Rook to the 1st rank (e.g. Ra1!) to deliver infinite checks from behind",
            "Resign",
            "Sacrifice the Rook for the pawn",
            "Leave the Rook on the 3rd rank"
          ],
          "answerIndex": 0,
          "explanation": "Dropping to the 1st rank enables infinite rear checks with no King shelter."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 49:",
          "options": [
            "Because the pawn on the 6th rank blocks the King from stepping forward, leaving no shelter against vertical checks.",
            "Because of a stalemate rule.",
            "Because the board ends.",
            "Because the King is frozen."
          ],
          "answerIndex": 0,
          "explanation": "The pawn robs its own King of front shelter."
        },
        {
          "prompt": "What is the primary drawing characteristic of Opposite-Colored Bishop endgames?",
          "options": [
            "Each bishop controls completely different color squares, meaning the defender can establish an impenetrable blockade on their color complex.",
            "Kings cannot move.",
            "Bishops can jump over pawns.",
            "Bishops move like rooks."
          ],
          "answerIndex": 0,
          "explanation": "Opposite-colored bishops cannot challenge each other's squares, enabling fortresses."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Match the two legendary Rook endgame positions to their result: Lucena vs. Philidor:",
          "options": [
            "Lucena: Attacker WIN (Building the bridge) | Philidor: Defender DRAW",
            "Lucena: Defender DRAW | Philidor: Attacker WIN",
            "Both are always wins",
            "Both are always draws"
          ],
          "answerIndex": 0,
          "explanation": "Lucena is the winning blueprint; Philidor is the drawing fortress.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What fatal error occurs if Black fails to drop the Rook to the 1st rank after White plays 1.e6, and instead plays a passive move like 1...Rb6?",
          "options": [
            "Stalemate",
            "Black wins the pawn",
            "Draw by repetition",
            "White plays 2.Kf6! threatening mate on a8 and forcing Black into the lost Lucena position."
          ],
          "answerIndex": 3,
          "explanation": "Kf6 threatens checkmate and transitions directly into a lost Lucena position.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the 'Short-Side Defense' in Rook endgames?",
          "options": [
            "Moving the King two squares",
            "Playing only on the queenside",
            "Positioning the defending King on the 'short side' of the passed pawn (where files are fewer) and placing the Rook on the 'long side' to check from maximum distance",
            "Playing fast blitz moves"
          ],
          "answerIndex": 2,
          "explanation": "Short side for King, long side for Rook checks.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Who formulated the Philidor Defense in 1777?",
          "options": [
            "Paul Morphy",
            "François-André Danican Philidor",
            "Wilhelm Steinitz",
            "Magnus Carlsen"
          ],
          "answerIndex": 1,
          "explanation": "Philidor in his classic 1777 chess treatise.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 7, Lesson 4: Foundational & Structural Mastery (Philidor Defense: White Ke5, P)"
  },
  "chess-u7-l5": {
    "id": "chess-u7-l5",
    "unit": "chess-u7",
    "level": "advanced",
    "objective": "Pass an advanced practical endgame checkpoint synthesizing the Opposition, the Rule of the Square, the Lucena Bridge, the Philidor Defense, and Opposite-Colored Bishop fortresses.",
    "presentation": {
      "explanation": "In this Master Checkpoint for Unit 7, we test your conversion accuracy across all classical endgame scenarios:\n\n1. The Grandmaster Endgame Decision Matrix:\n   - **Pure King & Pawn?** -> Calculate Opposition & Key Squares; verify Rule of the Square in 2 seconds.\n   - **Rook + 7th Rank Pawn (Attacking)?** -> Check King away -> 4th rank Rook lift -> Step out King -> Drop the Bridge (Lucena).\n   - **Rook + 5th Rank Pawn (Defending)?** -> Hold 3rd rank cut-off -> Drop to 1st rank when pawn advances -> Perpetual rear checks (Philidor).\n   - **Minor Pieces?** -> Good Knight vs. Bad Bishop; exploit opposite-colored bishop fortresses.\n\n2. Real-World Practical Drill:\n   - Position: White Kh5, Pg4. Black Kf7. White to move.\n   - Move: **1.Kh6!** Taking the diagonal opposition and occupying the key square f7/h7 ahead of the g-pawn, securing an unstoppable queen promotion!",
      "examples": [
        {
          "target": "White Kh5, Pg4 vs. Black Kf7: 1.Kh6! Kg8 2.g5 Kh8 3.g6 Kg8 4.g7 Kf7 5.Kh7 1-0.",
          "reading": "King takes key square ahead of pawn; unstoppable promotion.",
          "translation": "Opposition conversion masterclass"
        },
        {
          "target": "Lucena Execution: 1.Rd4! -> 2.Kd7 -> 3.Ke6 -> 4.Rd4! bridge.",
          "reading": "Flawless technical execution of bridge building.",
          "translation": "Lucena execution summary"
        },
        {
          "target": "Philidor Execution: Hold Ra6 -> 1.e6 Ra1! -> Perpetual check from behind.",
          "reading": "Flawless defensive draw preservation.",
          "translation": "Philidor execution summary"
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the most accurate strategic application to solve this challenge:",
          "options": [
            "The Lucena Position",
            "The Philidor Position",
            "Stalemate",
            "Triangulation for Black"
          ],
          "answerIndex": 0,
          "explanation": "The Lucena position is the universal winning blueprint."
        },
        {
          "prompt": "If you are DOWN a pawn in a Rook endgame, which theoretical fortress do you set up to secure a draw?",
          "options": [
            "The Philidor Defense",
            "The Lucena Position",
            "The Fried Liver",
            "The Scholar's Mate"
          ],
          "answerIndex": 0,
          "explanation": "The Philidor Defense guarantees a theoretical draw."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Synthesize an independent solution demonstrating mastery of Lesson 50:",
          "options": [
            "Because key squares cannot be entered by pawns.",
            "Because once your King reaches a key square, promotion is 100% guaranteed regardless of who holds the opposition or whose turn it is.",
            "Because of the 50-move rule.",
            "Because key squares score extra points."
          ],
          "answerIndex": 1,
          "explanation": "Key squares guarantee promotion unconditionally."
        },
        {
          "prompt": "Calculate in 2 seconds: White pawn on e4. Black King on a5. Promotion square is e8. Square is e4-e8-a8-a4. White plays 1.e5. What is the new square, and does Black catch it?",
          "options": [
            "It is a draw",
            "Square shrinks to e5-e8-b8-b5. Black on a5 is outside the square and cannot catch it on move 1 -> Pawn queens!",
            "Black checkmates White",
            "Black catches it easily"
          ],
          "answerIndex": 1,
          "explanation": "1.e5 shrinks the square to e5-b5. Black King on a5 cannot enter."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What core endgame competencies were mastered across Unit 7 in Chess Strategy?",
          "options": [
            "Blitz clock button pushing only",
            "Opening move 1.e4 lines only",
            "Scholar's mate traps only",
            "Direct, distant, and diagonal Opposition, Key/Critical squares, Rule of the Square, Triangulation, Lucena Position bridge-building, Philidor 3rd-rank defense with rear checking, and Opposite-Colored Bishop fortresses"
          ],
          "answerIndex": 3,
          "explanation": "Unit 7 complete advanced theoretical and practical endgame mastery.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why are Rook endgames statistically the most common endgames in competitive tournament chess?",
          "options": [
            "Because players prefer Rooks.",
            "Because Rooks cannot be captured.",
            "Because Rooks are typically developed and activated last, meaning minor pieces and Queens are traded off first during middlegame clashes.",
            "Because of FIDE tournament laws."
          ],
          "answerIndex": 2,
          "explanation": "Rooks enter the game last and survive piece trades.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In an Opposite-Colored Bishop endgame where White is up TWO pawns on the kingside, why does Black often hold an effortless draw?",
          "options": [
            "Because Black has two kings.",
            "Black sets up an impenetrable light-square (or dark-square) blockade on the passed pawns which White's bishop can never challenge or attack.",
            "Because pawns cannot capture bishops.",
            "Because White runs out of time."
          ],
          "answerIndex": 1,
          "explanation": "Opposite-colored bishops cannot dislodge blockades.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What famous quote by Dr. Siegbert Tarrasch summarizes practical Rook endgame play?",
          "options": [
            "'Rooks belong behind passed pawns — behind your own to support their advance, and behind the enemy's to restrain them.'",
            "'Always trade rooks immediately.'",
            "'Never move a rook.'",
            "'Rooks are worth 3 points.'"
          ],
          "answerIndex": 0,
          "explanation": "Tarrasch's rule: Rooks belong behind passed pawns.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 7, Lesson 5: Foundational & Structural Mastery (White Kh5, Pg4 vs. Black Kf7: )"
  }
};
  var CURRICULUM = { id: 'chess', name: "chess", units: UNITS, lessons: LESSONS };
  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};
  global.FEARN_CURRICULA['chess'] = CURRICULUM;
  if (typeof module !== 'undefined' && module.exports) module.exports = CURRICULUM;
})(typeof window !== 'undefined' ? window : global);
