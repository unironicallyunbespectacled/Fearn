// FEARN Curriculum Data — cs110
(function (global) {
  'use strict';
  var UNITS = [
    {
        "id": "cs110-u1",
        "level": "Unit 1",
        "title": "Mathematical Foundations & Asymptotic Complexity",
        "goal": "Formal Big-O, Big-Omega, Big-Theta definitions, limit tests, Master Theorem, Akra-Bazzi recurrence relations.",
        "lessonIds": [
            "cs110-u1-l1",
            "cs110-u1-l2",
            "cs110-u1-l3",
            "cs110-u1-l4",
            "cs110-u1-l5",
            "cs110-u1-l6"
        ]
    },
    {
        "id": "cs110-u2",
        "level": "Unit 2",
        "title": "Divide-and-Conquer & Randomized Selection",
        "goal": "Randomized vs deterministic quicksort, order statistics, BFPRT linear-time median-of-medians algorithm.",
        "lessonIds": [
            "cs110-u2-l1",
            "cs110-u2-l2",
            "cs110-u2-l3",
            "cs110-u2-l4",
            "cs110-u2-l5"
        ]
    },
    {
        "id": "cs110-u3",
        "level": "Unit 3",
        "title": "Balanced Search Trees & Spatial Structures",
        "goal": "Red-Black tree rotation invariants, 2-3-4 trees, AVL trees, k-d Trees, spatial range queries.",
        "lessonIds": [
            "cs110-u3-l1",
            "cs110-u3-l2",
            "cs110-u3-l3",
            "cs110-u3-l4",
            "cs110-u3-l5"
        ]
    },
    {
        "id": "cs110-u4",
        "level": "Unit 4",
        "title": "Dynamic Programming & Optimization Theory",
        "goal": "Optimal substructure, overlapping subproblems, DAG shortest paths, matrix chain multiplication, Knapsack.",
        "lessonIds": [
            "cs110-u4-l1",
            "cs110-u4-l2",
            "cs110-u4-l3",
            "cs110-u4-l4",
            "cs110-u4-l5"
        ]
    },
    {
        "id": "cs110-u5",
        "level": "Unit 5",
        "title": "Greedy Algorithms, Matroids & Graph Synthesis",
        "goal": "Greedy-choice property, Matroid theory proofs, Huffman prefix codes, MST algorithms, algorithm synthesis.",
        "lessonIds": [
            "cs110-u5-l1",
            "cs110-u5-l2",
            "cs110-u5-l3",
            "cs110-u5-l4",
            "cs110-u5-l5"
        ]
    }
];
  var LESSONS = {
  "cs110-u1-l1": {
    "id": "cs110-u1-l1",
    "unit": "cs110-u1",
    "level": "Unit 1",
    "objective": "Foundations of Computer Science & Algorithmic Thinking: Variables, State, Control Flow (Conditionals & Loops), Functions & Primitive Data Structures.",
    "presentation": {
      "explanation": "Computer science is the study of computation, information processing, and algorithmic problem-solving. An algorithm is an unambiguous, finite sequence of well-defined instructions designed to transform an input into an output. At the foundational machine and language level, computation relies on five core pillars: (1) **Variables & Memory State**: Named memory locations storing typed data (integers, floats, booleans, strings, and memory references/pointers) that evolve over discrete execution steps; (2) **Sequential Execution & Expressions**: Evaluating mathematical, logical, and relational operators in deterministic order of precedence; (3) **Branching / Conditionals (`if-else`)**: Directing control flow dynamically based on boolean truth predicates; (4) **Iteration & Loops (`while`, `for`)**: Repeating computational steps over ranges or collections until termination criteria are met; and (5) **Modular Functions**: Encapsulating reusable subroutines with formal parameters, local variable scope, call stacks, and return values. Before analyzing asymptotic complexity ($O, \\Omega, \\Theta$) or solving recurrence relations, a software engineer must master modeling real-world processes as deterministic state machines using these fundamental primitives.",
      "examples": [
        {
          "target": "A function encapsulates state mutation and returns a deterministic result: `function linearSearch(arr, target) { for (let i=0; i<arr.length; i++) if (arr[i]===target) return i; return -1; }`",
          "reading": "Linear search iterates sequentially through an array until the target element is encountered or the list terminates.",
          "translation": "Linear search iterates sequentially through an array until the target element is encountered or the list terminates."
        },
        {
          "target": "Control flow branching determines state transitions: `if (balance >= price) { balance -= price; return true; } else { return false; }`",
          "reading": "Conditional branches guard state updates against invalid states (like negative account balances).",
          "translation": "Conditional branches guard state updates against invalid states (like negative account balances)."
        }
      ],
      "mnemonics": [
        "Core CS Primitives: Memory (Variables) + Decisions (Conditionals) + Repetition (Loops) + Abstraction (Functions) = Algorithmic Power."
      ],
      "culturalNotes": [
        "The word «algorithm» derives from the 9th-century Persian mathematician Muhammad ibn Musa al-Khwarizmi, whose treatises on algebra and the Hindu-Arabic numeral system introduced systematic step-by-step calculation to the world."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What constitutes an algorithm in computer science?",
          "options": [
            "A finite, unambiguous, step-by-step sequence of instructions designed to solve a specific problem or compute a function.",
            "An infinite random stream of characters generated by hardware noise.",
            "A physical silicon wafer inside a motherboard.",
            "A legal copyright document filed with a government patent office."
          ],
          "answerIndex": 0,
          "explanation": "An algorithm must be well-defined, finite, deterministic, and effective in transforming inputs to outputs."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In procedural programming, what happens to local variables declared inside a function once the function finishes executing and returns?",
          "options": [
            "Their stack frame is popped and their local memory is deallocated / reclaimed.",
            "$O(1)$",
            "$O(n)$",
            "$O(n^2)$"
          ],
          "answerIndex": 0,
          "explanation": "Local variables exist on the call stack for the duration of the function execution frame and are discarded upon return."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Which control flow structure is used when a programmer needs to execute a block of code repeatedly while a specific boolean condition remains true?",
          "options": [
            "While loop / For loop",
            "Single unconditional Goto statement",
            "Static variable declaration",
            "Comment block"
          ],
          "answerIndex": 0,
          "explanation": "Loops provide iteration mechanisms to repeat execution until a guard condition evaluates to false.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the primary purpose of breaking down a large software application into modular functions?",
          "options": [
            "Reusability, abstraction, separation of concerns, and ease of testing and debugging.",
            "To make the compiled binary file as large as possible.",
            "To force the CPU to use maximum power.",
            "To prevent anyone from reading the code."
          ],
          "answerIndex": 0,
          "explanation": "Functions allow complex software to be decomposed into manageable, testable, and reusable modular units.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Foundations of Computer Science & Algorithmic Thinking"
  },
  "cs110-u1-l2": {
    "id": "cs110-u1-l2",
    "unit": "cs110-u1",
    "level": "Elite",
    "objective": "Derive formal epsilon-delta asymptotic bounds and apply the Master Theorem to divide-and-conquer recurrences.",
    "presentation": {
      "explanation": "In CS110, we establish rigorous mathematical foundations of computational complexity:\n\n1. Asymptotic Notation Definitions:\n   - $f(n) = O(g(n))$: $\\exists c > 0, n_0 > 0$ such that $0 \\le f(n) \\le c \\cdot g(n)$ for all $n \\ge n_0$ (Asymptotic Upper Bound).\n   - $f(n) = \\Omega(g(n))$: $\\exists c > 0, n_0 > 0$ such that $0 \\le c \\cdot g(n) \\le f(n)$ for all $n \\ge n_0$ (Asymptotic Lower Bound).\n   - $f(n) = \\Theta(g(n))$: $\\exists c_1, c_2 > 0, n_0 > 0$ such that $c_1 g(n) \\le f(n) \\le c_2 g(n)$ for all $n \\ge n_0$ (Asymptotically Tight Bound).\n\n2. The Master Theorem for Recurrences $T(n) = aT(n/b) + f(n)$:\n   - Let critical exponent $c_{crit} = \\log_b a$.\n   - Case 1: If $f(n) = O(n^{c_{crit} - \\epsilon})$, then $T(n) = \\Theta(n^{\\log_b a})$.\n   - Case 2: If $f(n) = \\Theta(n^{c_{crit}} \\log^k n)$, then $T(n) = \\Theta(n^{\\log_b a} \\log^{k+1} n)$.\n   - Case 3: If $f(n) = \\Omega(n^{c_{crit} + \\epsilon})$ and regularity condition holds ($a f(n/b) \\le c f(n)$), then $T(n) = \\Theta(f(n))$.",
      "examples": [
        {
          "target": "Merge Sort Recurrence: T(n) = 2T(n/2) + O(n) -> a=2, b=2, log_2(2)=1. Since f(n)=Theta(n^1), Case 2 applies -> T(n) = Theta(n log n).",
          "reading": "Master Theorem Analysis",
          "translation": "Tight asymptotic bound for merge sort."
        }
      ],
      "mnemonics": [
        "MASTER THEOREM: Compare f(n) against n^(log_b a) critical exponent!"
      ],
      "culturalNotes": [
        "Master Theorem was popularized by Cormen, Leiserson, Rivest, and Stein (CLRS), the bible of MIT Computer Science."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "For T(n) = 4T(n/2) + n^2, what is the asymptotic complexity using Master Theorem?",
          "options": [
            "Theta",
            "$O(n \\log n)$",
            "$\\Omega(n)$",
            "Theta(n^2 log n) [Case 2, log_2(4) = 2, f(n)=n^2]"
          ],
          "answerIndex": 3,
          "explanation": "a=4, b=2 -> log_2(4)=2. Since f(n) = Theta(n^2), Case 2 applies -> Theta(n^2 log n)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What is the definition of Theta(g(n))?",
          "options": [
            "Asymptotically tight bound sandwiched between c1*g(n) and c2*g",
            "$\\Theta(n^2)$",
            "$\\Theta(n \\log n)$",
            "$\\Theta(n)$"
          ],
          "answerIndex": 0,
          "explanation": "Theta denotes asymptotically tight upper and lower bounds."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "When can the Master Theorem NOT be applied to a recurrence T(n) = aT(n/b) + f(n)?",
          "options": [
            "When n is even",
            "In competitive programming",
            "When a is not a constant, b <= 1, or f(n) is not polynomially comparable to n^",
            "When sorting numbers"
          ],
          "answerIndex": 2,
          "explanation": "Master theorem requires constant branching factor and polynomial comparability.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1101, Lesson 2: Foundational & Structural Mastery (Merge Sort Recurrence: T(n) = )"
  },
  "cs110-u1-l3": {
    "id": "cs110-u1-l3",
    "unit": "cs110-u1",
    "level": "Unit 1",
    "objective": "Derive Master Theorem Cases and Generalize via the Akra-Bazzi Method for Divide-and-Conquer Recurrences.",
    "presentation": {
      "explanation": "1. **The Master Theorem (CLRS)**:\nFor recurrences of the form $T(n) = a T(n/b) + f(n)$ where $a \\ge 1, b > 1$:\nLet $c_{\\text{crit}} = \\log_b a$.\n- **Case 1**: If $f(n) = O(n^{c_{\\text{crit}} - \\epsilon})$ for some $\\epsilon > 0$, then $T(n) = \\Theta(n^{\\log_b a})$ (Leaves dominate).\n- **Case 2**: If $f(n) = \\Theta(n^{c_{\\text{crit}}} \\log^k n)$ for $k \\ge 0$, then $T(n) = \\Theta(n^{\\log_b a} \\log^{k+1} n)$ (All levels balanced).\n- **Case 3**: If $f(n) = \\Omega(n^{c_{\\text{crit}} + \\epsilon})$ for $\\epsilon > 0$ and regularity condition $a f(n/b) \\le c f(n)$ holds for $c < 1$, then $T(n) = \\Theta(f(n))$ (Root dominates).\n\n2. **The Akra-Bazzi Method (1998)**:\nFor non-uniform recurrences $T(x) = g(x) + \\sum_{i=1}^k a_i T(b_i x + h_i(x))$ where $a_i > 0, 0 < b_i < 1$:\nFind unique real exponent $p$ satisfying $\\sum_{i=1}^k a_i b_i^p = 1$.\nThen:\n$$T(x) = \\Theta \\left( x^p \\left( 1 + \\int_1^x \\frac{g(u)}{u^{p+1}} du \\right) \\right)$$",
      "examples": [
        {
          "target": "For Strassen's matrix multiplication T(n) = 7 T(n/2) + Theta(n^2), log_2(7) approx 2.807 > 2, so Case 1 applies yielding Theta(n^{log_2 7}) = Theta(n^2.81).",
          "reading": "Master Theorem Strassen Example",
          "translation": "For Strassen's matrix multiplication T(n) = 7 T(n/2) + Theta(n^2), log_2(7) approx 2.807 > 2, so Case 1 applies yielding Theta(n^{log_2 7}) = Theta(n^2.81)."
        }
      ],
      "mnemonics": [
        "Master Theorem: Critical exponent c = log_b(a)! Compare n^c with f(n)! Akra-Bazzi: Sum(a_i * b_i^p) = 1 integrates non-uniform splits!"
      ],
      "culturalNotes": [
        "Mohamad Akra and Louay Bazzi published their generalized divide-and-conquer recurrence solution in 1998 at MIT."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In the Master Theorem T(n) = 8 T(n/2) + n^2, what is the critical exponent log_b(a)?",
          "options": [
            "log_2(8) = 3",
            "log_8(2) = 0.33",
            "4",
            "2"
          ],
          "answerIndex": 0,
          "explanation": "log_2(8) = 3."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Under Master Theorem, if T(n) = 2 T(n/2) + n log n, what is the asymptotic solution?",
          "options": [
            "$\\Theta(1)$",
            "$\\Omega(n)$",
            "$\\Omega(n^2)$",
            "$\\Omega(\\log n)$"
          ],
          "answerIndex": 0,
          "explanation": "Theta(n log^2 n)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Why does the standard Master Theorem fail on the recurrence T(n) = 2 T(n/2) + n / log n?",
          "options": [
            "Because b is irrational.",
            "Because f(n) = n / log n is asymptotically smaller than n^1 by a logarithmic factor rather than a polynomial factor n^epsilon, creating a gap between Case 1 and Case 2.",
            "Because the recurrence has no solution.",
            "Because a < 1."
          ],
          "answerIndex": 1,
          "explanation": "Because f(n) differs by a logarithmic factor rather than polynomial factor.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What characteristic property makes the Akra-Bazzi method applicable to uneven recurrences like T(n) = T(n/3) + T(2n/3) + n?",
          "options": [
            "It solves recurrences with multi-branch uneven division of subproblem sizes.",
            "It only works for quadratic algorithms.",
            "It runs in hardware.",
            "It requires no calculus integrals."
          ],
          "answerIndex": 0,
          "explanation": "It solves recurrences with multi-branch uneven division.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1101, Lesson 3: Foundational & Structural Mastery (For Strassen's matrix multipli)"
  },
  "cs110-u1-l4": {
    "id": "cs110-u1-l4",
    "unit": "cs110-u1",
    "level": "Unit 1",
    "objective": "Execute Amortized Complexity Analysis using Aggregate, Accounting, and Physicist Potential Methods.",
    "presentation": {
      "explanation": "Amortized analysis guarantees the average performance of each operation over a worst-case sequence of $n$ operations.\n\n1. **The Aggregate Method**:\nShow that any sequence of $n$ operations takes total worst-case time $T(n)$. The amortized cost per operation is $T(n) / n$.\n- Example: Dynamic Array Doubling. Growing array from 1 to $n$ copies elements at powers of 2. Total cost $\\sum_{j=0}^{\\lfloor \\log n \\rfloor} 2^j = 2^{\\lfloor \\log n \\rfloor + 1} - 1 < 2n$. Amortized cost $= 2n / n = O(1)$.\n\n2. **The Accounting Method (Banker's Method)**:\nAssign amortized cost $\\hat{c}_i$ to each operation. Overcharges are stored as credit on specific data structure elements to pay for future expensive operations: $\\sum_{i=1}^n \\hat{c}_i \\ge \\sum_{i=1}^n c_i$.\n\n3. **The Potential Method (Physicist's Method)**:\nDefine potential function $\\Phi(D)$ mapping data structure state $D$ to a real number $(\\Phi(D_0) = 0, \\Phi(D_i) \\ge 0)$.\nAmortized cost of $i$-th operation:\n$$\\hat{c}_i = c_i + \\Phi(D_i) - \\Phi(D_{i-1})$$\nTotal amortized cost: $\\sum_{i=1}^n \\hat{c}_i = \\sum_{i=1}^n c_i + \\Phi(D_n) - \\Phi(D_0) \\ge \\sum_{i=1}^n c_i$.",
      "examples": [
        {
          "target": "In a dynamic array, assigning amortized cost $3 for append ($1 for current insertion + $2 stored credit to pay for future copying) guarantees O(1) amortized append.",
          "reading": "Accounting Method Bank Credit Example",
          "translation": "In a dynamic array, assigning amortized cost $3 for append ($1 for current insertion + $2 stored credit to pay for future copying) guarantees O(1) amortized append."
        }
      ],
      "mnemonics": [
        "3 Amortized Methods: 1. Aggregate (Total / n), 2. Accounting (Pre-paid credit on tokens), 3. Potential (c_hat = c_i + Delta Phi)! Guarantees O(1) across sequences!"
      ],
      "culturalNotes": [
        "Robert Tarjan introduced the formal Potential Method of amortized analysis in his seminal 1985 paper *Amortized Computational Complexity*."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Under the Potential Method, what is the formula for the amortized cost c_hat_i of the i-th operation?",
          "options": [
            "c_hat_i = c_i * Phi",
            "c_hat_i = c_i / n",
            "c_hat_i = Phi(D_0) - Phi",
            "c_hat_i = c_i + Phi(D_i) - Phi"
          ],
          "answerIndex": 3,
          "explanation": "c_hat_i = c_i + Phi(D_i) - Phi(D_{i-1})."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What requirement must a valid potential function Phi(D) satisfy relative to the initial state D_0?",
          "options": [
            "Phi(D_i) >= Phi(D_0) for all i",
            "$o(n)$",
            "$o(n^2)$",
            "$\\omega(n)$"
          ],
          "answerIndex": 0,
          "explanation": "Phi(D_i) >= Phi(D_0) for all i."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "In a dynamic array that doubles upon reaching capacity, what is the amortized cost per insertion?",
          "options": [
            "O(log n) amortized time.",
            "O(n) amortized time.",
            "O(1) amortized time, even though individual doubling operations cost O(n).",
            "Theta(n^2) amortized time."
          ],
          "answerIndex": 2,
          "explanation": "O(1) amortized time.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is amortized analysis different from average-case complexity analysis?",
          "options": [
            "Amortized analysis only applies to sorting algorithms.",
            "Amortized analysis makes NO probabilistic assumptions about input distributions and guarantees worst-case bounds over sequences.",
            "Average-case analysis always produces smaller numbers.",
            "Amortized analysis requires quantum hardware."
          ],
          "answerIndex": 1,
          "explanation": "Amortized analysis makes no probabilistic assumptions.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1101, Lesson 4: Foundational & Structural Mastery (In a dynamic array, assigning )"
  },
  "cs110-u1-l5": {
    "id": "cs110-u1-l5",
    "unit": "cs110-u1",
    "level": "Unit 1",
    "objective": "Analyze Deterministic vs Randomized Selection, Order Statistics, and the Linear-Time BFPRT Median-of-Medians Algorithm.",
    "presentation": {
      "explanation": "The Selection Problem: Given an unsorted array $A$ of $n$ elements and integer $k$, find the $k$-th smallest element.\n\n1. **Randomized Quickselect (Hoare, 1961)**:\n- Partition array around a uniformly chosen random pivot $p$.\n- If rank of $p = k$, return $p$.\n- If $k < \\text{rank}(p)$, recurse on left subarray; else recurse on right subarray.\n- **Expected Time**: $O(n)$ using indicator variables; **Worst-Case Time**: $O(n^2)$ if adversarial bad pivots are chosen.\n\n2. **The BFPRT \"Median-of-Medians\" Algorithm (Blum, Floyd, Pratt, Rivest, Tarjan, 1973)**:\nGuarantees strictly **$O(n)$ worst-case time** deterministically:\n- Step 1: Divide $n$ elements into $\\lceil n/5 \\rceil$ groups of 5 elements.\n- Step 2: Find the median of each 5-element group by insertion sort ($O(1)$ per group $\\implies O(n)$ total).\n- Step 3: Recursively find the median $x$ of the $\\lceil n/5 \\rceil$ medians ($T(n/5)$).\n- Step 4: Partition array around pivot $x$.\n- Step 5: At least half of the medians are $\\ge x$. Thus, at least $3 \\times \\left( \\frac{1}{2} \\lceil n/5 \\rceil - 2 \\right) \\ge \\frac{3n}{10} - 6$ elements are $\\ge x$ (and similarly $\\le x$).\n- The recursive call in the worst case contains at most $\\frac{7n}{10} + 6$ elements!\n\n**Recurrence**:\n$$T(n) \\le T(n/5) + T(7n/10) + O(n)$$\nSince $\\frac{1}{5} + \\frac{7}{10} = \\frac{9}{10} < 1$, the recurrence solves strictly to **$T(n) = O(n)$**!",
      "examples": [
        {
          "target": "BFPRT guarantees that the chosen pivot is between the 30th and 70th percentile in the worst case, eliminating O(n^2) degradation.",
          "reading": "BFPRT Recurrence Proof",
          "translation": "BFPRT guarantees that the chosen pivot is between the 30th and 70th percentile in the worst case, eliminating O(n^2) degradation."
        }
      ],
      "mnemonics": [
        "BFPRT: Divide into 5s! T(n) = T(n/5) + T(7n/10) + O(n)! 1/5 + 7/10 = 9/10 < 1 => O(n) strictly linear deterministic selection!"
      ],
      "culturalNotes": [
        "Manuel Blum, Robert Floyd, Vaughan Pratt, Ronald Rivest, and Robert Tarjan published the landmark 1973 paper *Time bounds for selection*, solving a decade-long open computer science problem."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What is the worst-case time complexity of the BFPRT Median-of-Medians selection algorithm?",
          "options": [
            "O(n) strictly linear time",
            "O",
            "$O(n \\log n)$",
            "$\\Omega(n)$"
          ],
          "answerIndex": 0,
          "explanation": "O(n) strictly linear time."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Why does the recurrence T(n) = T(n/5) + T(7n/10) + O(n) solve to linear O(n) time?",
          "options": [
            "Because the branching fractions sum to 1/5 + 7/10 = 9/10 < 1, forming a converging geometric series.",
            "Case 1: $T(n) = \\Theta(n^{\\log_b a})$",
            "Case 2: $T(n) = \\Theta(n^{\\log_b a} \\log n)$",
            "Case 3: $T(n) = \\Theta(f(n))$"
          ],
          "answerIndex": 0,
          "explanation": "Because branching fractions sum to 9/10 < 1."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What would happen to the worst-case runtime guarantee of BFPRT if elements were grouped into blocks of 3 instead of 5?",
          "options": [
            "It would run in O(1) time.",
            "It would run in O(n^3) time.",
            "It would remain strictly O(n).",
            "The recurrence would become T(n) = T(n/3) + T(2n/3) + O(n). Since 1/3 + 2/3 = 1, it degrades to O(n log n)!"
          ],
          "answerIndex": 3,
          "explanation": "Branching fractions sum to 1, degrading to O(n log n).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is randomized Quickselect often used in practice over BFPRT despite BFPRT's superior worst-case asymptotic bound?",
          "options": [
            "Quickselect uses quantum superposition.",
            "BFPRT only works on sorted arrays.",
            "Randomized Quickselect has significantly smaller constant factors and requires no auxiliary memory buffer allocation.",
            "Quickselect requires no comparisons."
          ],
          "answerIndex": 2,
          "explanation": "Randomized Quickselect has significantly smaller constant factors.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1101, Lesson 5: Foundational & Structural Mastery (BFPRT guarantees that the chos)"
  },
  "cs110-u1-l6": {
    "id": "cs110-u1-l6",
    "unit": "cs110-u1",
    "level": "Unit 1",
    "objective": "C2 Synthesis on Asymptotic Information-Theoretic Lower Bounds, Decision Trees, and Adversary Arguments.",
    "presentation": {
      "explanation": "Information-Theoretic Lower Bounds prove that NO algorithm can solve a problem faster than a mathematical limit, regardless of future hardware advances.\n\n1. **The Decision Tree Model for Comparison Sorting**:\n- Any comparison-based sorting algorithm can be modeled as a binary decision tree where internal nodes represent pairwise comparisons ($A[i] \\le A[j]$) and leaves represent distinct permutations of the $n$ input elements.\n- For $n$ distinct elements, there are $n!$ possible permutations. Thus, the decision tree must have at least $L \\ge n!$ reachable leaves.\n- A binary tree of height $h$ has at most $2^h$ leaves: $2^h \\ge n! \\implies h \\ge \\log_2(n!)$.\n- By Stirling's Approximation ($n! \\approx \\sqrt{2\\pi n} (n/e)^n$):\n$$\\log_2(n!) = \\sum_{i=1}^n \\log_2 i \\ge \\sum_{i=n/2}^n \\log_2(n/2) = \\frac{n}{2} \\log_2(n/2) = \\Omega(n \\log n)$$\nTherefore, **any comparison sort requires $\\Omega(n \\log n)$ comparisons in the worst case**!\n\n2. **Breaking the Lower Bound: Non-Comparison Sorting**:\n- **Counting Sort**: $O(n + k)$ by direct index counting when key range $k = O(n)$.\n- **Radix Sort**: $O(d(n + k))$ by stable passes over $d$ digits.\n\n3. **Adversary Arguments**:\nAn adversary dynamically constructs input instances on the fly consistent with all previous query answers to force any algorithm into the worst-case branch.",
      "examples": [
        {
          "target": "Information-theoretic lower bound: Any comparison sort must make at least log2(10!) = log2(3,628,800) approx 22 comparisons to sort 10 elements.",
          "reading": "Decision Tree Lower Bound Calculation",
          "translation": "Information-theoretic lower bound: Any comparison sort must make at least log2(10!) = log2(3,628,800) approx 22 comparisons to sort 10 elements."
        }
      ],
      "mnemonics": [
        "Decision Tree: 2^h >= n! => h >= log2(n!) = Omega(n log n)! Comparison sort lower bound! Non-comparison sorting (Counting/Radix) breaks the bound via direct indexing!"
      ],
      "culturalNotes": [
        "Claude Shannon founded information theory in 1948, establishing the mathematical link between entropy, decision trees, and algorithmic lower bounds."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What is the information-theoretic lower bound on the number of comparisons required to sort n elements in the comparison model?",
          "options": [
            "Omega",
            "$O(n \\log n)$",
            "$\\Omega(n)$",
            "$\\Theta(1)$"
          ],
          "answerIndex": 0,
          "explanation": "Omega(n log n)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "How does Radix Sort achieve O(d * n) time complexity, bypassing the Omega(n log n) comparison lower bound?",
          "options": [
            "It uses non-comparison bucket hashing based on positional digit values rather than pairwise key comparisons.",
            "Substitution method",
            "Recursion tree method",
            "Akra-Bazzi method"
          ],
          "answerIndex": 0,
          "explanation": "It uses non-comparison bucket hashing based on positional digit values."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "In a binary decision tree model sorting n distinct items, what mathematical value represents the minimum number of leaves required to cover all possible sorted outputs?",
          "options": [
            "n!",
            "2^n",
            "n^2",
            "log2"
          ],
          "answerIndex": 0,
          "explanation": "n! (n factorial permutations).",
          "type": "multiple-choice"
        },
        {
          "prompt": "What technique in complexity theory constructs an adversarial input path in real time to prove that an algorithm must query a minimum number of elements?",
          "options": [
            "Greedy matroid exchange",
            "Monte Carlo simulation",
            "Dynamic programming memoization",
            "Adversary Argument"
          ],
          "answerIndex": 3,
          "explanation": "Adversary Argument.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1101, Lesson 1: Foundational & Structural Mastery (Information-theoretic lower bo)"
  },
  "cs110-u5-l4": {
    "id": "cs110-u5-l4",
    "unit": "cs110-u5",
    "level": "Advanced",
    "objective": "Randomized Algorithms: Las Vegas vs Monte Carlo, Karger's Min-Cut & The Karger-Stein Fast Contraction Algorithm (Las Vegas (always correct, random runtime, e.g. Randomized QuickSort) vs Monte Carlo (fixed runtime, bounded error probability); Karger's Random Edge Contraction algorithm: success probability $P(\\text{success}) \\ge \\frac{2}{n(n-1)} = \\Omega(n^{-2})$; Amplification via $O(n^2 \\ln n)$ repetitions; Karger-Stein recursive tree contraction in $O(n^2 \\log n)$ time).",
    "presentation": {
      "explanation": "Randomized Algorithms and the Architecture of Random Contraction:\n- **Las Vegas vs Monte Carlo Taxonomy**:\n  - **Las Vegas**: Always outputs the exact correct answer; runtime is a random variable with bounded expected value (e.g., Randomized QuickSort with expected $O(n \\log n)$);\n  - **Monte Carlo**: Fixed deterministic runtime; output has a bounded probability of error $\\epsilon$; error probability is made arbitrarily small (amplified) via repeated independent trials;\n- **Karger's Random Contraction Algorithm for Global Min-Cut**:\n  - Given multigraph $G=(V, E)$;\n  - Repeatedly pick a uniform random edge $e=(u, v)$ and **contract** vertices $u$ and $v$ into a single super-vertex (removing self-loops, preserving parallel edges) until only 2 super-vertices remain;\n  - **Success Probability Analysis**:\n    - Let $C$ be a min-cut of size $k$. Min degree $\\ge k \\implies |E| \\ge \\frac{nk}{2}$;\n    - Probability of not contracting an edge of $C$ at step $i$: $1 - \\frac{k}{|E_i|} \\ge 1 - \\frac{2}{n - i + 1} = \\frac{n - i - 1}{n - i + 1}$;\n    - Telescoping product over $n-2$ steps:\n      $$P(\\text{success}) \\ge \\prod_{i=1}^{n-2} \\frac{n - i - 1}{n - i + 1} = \\frac{2}{n(n-1)} = \\Theta(n^{-2})$$\n    - Running $T = \\binom{n}{2} \\ln(1/\\delta)$ independent iterations guarantees finding the min-cut with probability $\\ge 1 - \\delta$ in $O(n^4 \\log n)$;\n- **The Karger-Stein Algorithm ($O(n^2 \\log n)$)**:\n  - Uses recursive contraction: contracts graph down to $\\lceil 1 + n/\\sqrt{2} \\rceil$ vertices, branches twice, and recurses;\n  - Recurrence: $T(n) = 2 T(n/\\sqrt{2}) + O(n^2) \\implies T(n) = O(n^2 \\log n)$ with success probability $\\Omega(1 / \\log n)$.",
      "examples": [
        {
          "target": "The Karger-Stein randomized contraction algorithm computes the global minimum cut in O(n^2 log n) time with high probability.",
          "reading": "The Karger-Stein...",
          "translation": "The Karger-Stein randomized contraction algorithm computes the global minimum cut in O(n^2 log n) time with high probability."
        }
      ],
      "mnemonics": [
        "Las Vegas (Always correct, random time) vs Monte Carlo (Fixed time, bounded error)! Karger Edge Contraction P >= 2 / (n(n-1))! Karger-Stein Recursive Branching in O(n^2 log n)!"
      ],
      "culturalNotes": [
        "David Karger developed the random contraction algorithm in 1993 at Stanford University, demonstrating that randomness could dramatically simplify graph algorithms that previously required complex max-flow computations."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What is the fundamental difference between a Las Vegas algorithm and a Monte Carlo randomized algorithm?",
          "options": [
            "There is no difference.",
            "Monte Carlo never terminates.",
            "Las Vegas always produces the correct answer with random runtime, while Monte Carlo runs in deterministic time with a bounded probability of error.",
            "Las Vegas only runs on quantum computers."
          ],
          "answerIndex": 2,
          "explanation": "Las Vegas always produces the correct answer with random runtime."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What is the exact probability that a single run of basic Karger contraction succeeds in finding a specific minimum cut in an n-vertex graph?",
          "options": [
            "At least 2 / (n * (n - 1)) = Omega",
            "Ford-Fulkerson Method with augmenting paths",
            "Edmonds-Karp in $O(V E^2)$ via BFS paths",
            "Dinic algorithm in $O(V^2 E)$ with blocking flows"
          ],
          "answerIndex": 0,
          "explanation": "At least 2 / (n * (n - 1)) = Omega(1 / n^2)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"The Karger-Stein algorithm improves global min-cut runtime to O(n^2 log n) by recursively branching into two independent subproblems after contracting vertices by a factor of root 2.\"",
          "options": [
            "The Karger-Stein algorithm improves global min-cut runtime to O(n^2 log n) by recursively branching into two independent subproblems after contracting vertices by a factor of root 2.",
            "Karger contraction requires finding augmenting paths with BFS.",
            "Monte Carlo algorithms cannot reduce error through repetition.",
            "Randomized QuickSort has worst-case expected time O(n^3)."
          ],
          "answerIndex": 0,
          "explanation": "Accurate Karger-Stein analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What master asymptotic time complexity is achieved by the recursive Karger-Stein algorithm to find the global min-cut with high probability?",
          "options": [
            "O",
            "$O(n \\log n)$",
            "$\\Omega(n)$",
            "$\\Theta(1)$"
          ],
          "answerIndex": 3,
          "explanation": "O(n^2 log n).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Randomized Algorithms"
  },
  "cs110-u5-l3": {
    "id": "cs110-u5-l3",
    "unit": "cs110-u5",
    "level": "Advanced",
    "objective": "Approximation Algorithms: 2-Approximation for Vertex Cover & The 3/2-Approximation Christofides-Serdyukov Metric TSP (Approximation ratio $\\alpha = \\max(\\frac{C}{\\text{OPT}}, \\frac{\\text{OPT}}{C})$; Greedy maximal matching 2-approximation for Minimum Vertex Cover; Inapproximability of general TSP; Christofides-Serdyukov Algorithm for Metric TSP (MST + minimum-weight perfect matching on odd-degree vertices + Eulerian circuit + shortcutting = 3/2-approximation); PTAS vs APX-hard).",
    "presentation": {
      "explanation": "Approximation Algorithms and Coping with NP-Hardness:\n- **Approximation Ratio Metric**:\n  - An algorithm achieves approximation ratio $\\alpha$ if for all instances $I$, $\\max(\\frac{\\text{Cost}}{\\text{OPT}}, \\frac{\\text{OPT}}{\\text{Cost}}) \\le \\alpha$;\n- **2-Approximation for Minimum Vertex Cover**:\n  - **Maximal Matching Algorithm**:\n    - Find any maximal matching $M$ in graph $G$ (greedily pick edge $e=(u, v)$, add both $u$ and $v$ to cover $C$, remove all incident edges, repeat until no edges remain);\n    - **Proof of 2-Approximation**:\n      - Since $M$ is a matching, no two edges share a vertex, so $\\text{OPT} \\ge |M|$;\n      - The algorithm picks exactly $2|M|$ vertices: $|C| = 2|M| \\le 2 \\text{OPT}$;\n- **Christofides-Serdyukov Algorithm for Metric TSP (3/2-Approximation)**:\n  - Assumes Triangle Inequality: $c(u, w) \\le c(u, v) + c(v, w)$;\n  - **Algorithm Steps**:\n    - **1. MST**: Compute Minimum Spanning Tree $T$ ($c(T) \\le \\text{OPT}$);\n    - **2. Odd-Degree Vertices $O$**: Find set $O$ of vertices with odd degree in $T$ ($|O|$ is always even by Handshaking Lemma);\n    - **3. Minimum-Weight Perfect Matching $M$**: Compute min-weight matching on $O$ ($c(M) \\le \\frac{1}{2} \\text{OPT}$);\n    - **4. Eulerian Circuit**: Combine $T \\cup M$ (all vertices now have even degree, forming an Eulerian graph);\n    - **5. Shortcutting**: Traverse Eulerian circuit, skipping already visited vertices via triangle inequality;\n    - **Total Cost**: $c(\\text{TSP}) \\le c(T) + c(M) \\le \\text{OPT} + \\frac{1}{2} \\text{OPT} = \\frac{3}{2} \\text{OPT}$.",
      "examples": [
        {
          "target": "The Christofides-Serdyukov algorithm achieves a 3/2-approximation for Metric TSP by combining an MST with a minimum-weight perfect matching on odd-degree vertices.",
          "reading": "The Christofides-Serdyukov...",
          "translation": "The Christofides-Serdyukov algorithm achieves a 3/2-approximation for Metric TSP by combining an MST with a minimum-weight perfect matching on odd-degree vertices."
        }
      ],
      "mnemonics": [
        "Approximation Ratio alpha! 2-Approximation for Vertex Cover via Maximal Matching (Cost = 2|M| <= 2*OPT)! Christofides Metric TSP (MST + Matching on Odd vertices + Eulerian shortcutting = 3/2 * OPT)! Triangle inequality!"
      ],
      "culturalNotes": [
        "Nicos Christofides (1976) and Anatoliy Serdyukov (1978) developed the 3/2-approximation for Metric TSP, which remained the unbeaten world record for 44 years until a micro-improvement in 2020."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What approximation ratio does the Christofides-Serdyukov algorithm guarantee for the Metric Traveling Salesperson Problem (TSP)?",
          "options": [
            "3/2",
            "2",
            "1 + epsilon",
            "log"
          ],
          "answerIndex": 0,
          "explanation": "3/2 (1.5-approximation)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Why is the total cost of the minimum-weight perfect matching on odd-degree vertices bounded by 0.5 * OPT in Christofides' algorithm?",
          "options": [
            "Because the optimal TSP tour restricted to odd vertices decomposes into two disjoint matchings, one of which must cost <= 0.5 * OPT.",
            "Kruskal with Union-Find in $O(E \\log V)$",
            "Prim with Min-Heap in $O(E \\log V)$",
            "Boruvka parallel MST in $O(E \\log V)$"
          ],
          "answerIndex": 0,
          "explanation": "Because the optimal tour decomposes into two disjoint matchings."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"By combining a minimum spanning tree with a minimum-weight perfect matching on odd-degree vertices, shortcutting produces a Metric TSP tour within 1.5 times the optimal cost.\"",
          "options": [
            "General TSP without triangle inequality can be approximated within a factor of 2 in polynomial time.",
            "Vertex cover can be solved in O(1) using quantum sorting.",
            "Christofides algorithm requires testing all n! permutations.",
            "By combining a minimum spanning tree with a minimum-weight perfect matching on odd-degree vertices, shortcutting produces a Metric TSP tour within 1.5 times the optimal cost."
          ],
          "answerIndex": 3,
          "explanation": "Accurate Christofides TSP analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What simple greedy method yields an immediate 2-approximation for Minimum Vertex Cover by selecting both endpoints of disjoint edges?",
          "options": [
            "Bellman-Ford Relaxation",
            "Depth-First Search",
            "Maximal Matching",
            "Breadth-First Search"
          ],
          "answerIndex": 2,
          "explanation": "Maximal Matching.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Approximation Algorithms"
  },
  "cs110-u5-l2": {
    "id": "cs110-u5-l2",
    "unit": "cs110-u5",
    "level": "Advanced",
    "objective": "Karp's 21 NP-Complete Problems: Reductions from 3-SAT to CLIQUE, VERTEX-COVER & SUBSET-SUM (Karp's reduction tree; reducing 3-SAT to CLIQUE using clause gadget graphs; reducing CLIQUE to VERTEX-COVER on complement graphs $\\bar{G}$; reducing 3-SAT to VERTEX-COVER with variable/clause gadgets; reducing 3-SAT to SUBSET-SUM using base-10 digit encoding).",
    "presentation": {
      "explanation": "Karp's 21 NP-Complete Problems and the Art of Polynomial Reductions:\n- **Richard Karp's Landmark 1972 Paper**:\n  - Proved that NP-completeness is ubiquitous across computer science by establishing a tree of reductions branching from SAT;\n- Master Canonical Gadget Reductions:\n  - **1. 3-SAT $\\le_p$ CLIQUE**:\n    - Given 3-SAT formula $\\Phi$ with $k$ clauses $(l_1 \\lor l_2 \\lor l_3)$;\n    - Construct graph $G$ with 3 vertices per clause (one per literal);\n    - Add edges between vertices $u$ and $v$ if they belong to **different clauses** and are **not negations of each other** ($u \\neq \\neg v$);\n    - $\\Phi$ is satisfiable $\\iff G$ contains a clique of size $k$;\n  - **2. CLIQUE $\\le_p$ VERTEX-COVER**:\n    - A graph $G=(V, E)$ has a clique $C$ of size $k \\iff$ its complement graph $\\bar{G}=(V, \\bar{E})$ has a vertex cover $V \\setminus C$ of size $|V| - k$;\n  - **3. VERTEX-COVER $\\le_p$ SET-COVER**:\n    - Edges become elements of universe $U$, vertices become subsets containing incident edges;\n  - **4. 3-SAT $\\le_p$ SUBSET-SUM**:\n    - Constructs large integers in base 10 with digits corresponding to variable assignments and clause satisfaction tests.",
      "examples": [
        {
          "target": "A graph G has a clique of size k if and only if its complement graph has a vertex cover of size |V| - k.",
          "reading": "A graph G has a clique...",
          "translation": "A graph G has a clique of size k if and only if its complement graph has a vertex cover of size |V| - k."
        }
      ],
      "mnemonics": [
        "Karp's 21 Problems (1972)! 3-SAT -> CLIQUE (Clause literal gadgets without contradictions)! CLIQUE -> VERTEX-COVER on complement graph G_bar (size |V| - k)! 3-SAT -> SUBSET-SUM via base-10 digits!"
      ],
      "culturalNotes": [
        "Richard Karp won the ACM Turing Award in 1985 for his classic 1972 paper \"Reducibility Among Combinatorial Problems\"."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "If graph G has a maximum clique of size k, what is the exact size of the minimum vertex cover in the complement graph G_bar?",
          "options": [
            "k",
            "|V| + k",
            "k / 2",
            "|V| - k"
          ],
          "answerIndex": 3,
          "explanation": "|V| - k."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "When reducing 3-SAT to CLIQUE with k clauses, between which literal vertices are edges placed in the gadget graph?",
          "options": [
            "Between vertices in different clauses that are not negations of each other (u != NOT v).",
            "Dijkstra with Fibonacci Heap in $O(E + V \\log V)$",
            "Bellman-Ford in $O(V E)$ for negative edges",
            "Floyd-Warshall in $O(V^3)$ all-pairs"
          ],
          "answerIndex": 0,
          "explanation": "Between vertices in different clauses that are not negations of each other."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"The polynomial reduction from 3-SAT to CLIQUE constructs a k-partite graph where a k-clique represents a consistent truth assignment across all clauses.\"",
          "options": [
            "Karp proved that all 21 problems are solvable in P.",
            "VERTEX-COVER can be solved in O(log n) deterministic time.",
            "The polynomial reduction from 3-SAT to CLIQUE constructs a k-partite graph where a k-clique represents a consistent truth assignment across all clauses.",
            "Every graph with 10 vertices has a clique of size 100."
          ],
          "answerIndex": 2,
          "explanation": "Accurate Karp reduction analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which problem asks whether there exists a subset of given integers whose total sum exactly equals a target integer T?",
          "options": [
            "VERTEX-COVER",
            "SUBSET-SUM",
            "MAX-FLOW",
            "HAMILTONIAN-CYCLE"
          ],
          "answerIndex": 1,
          "explanation": "SUBSET-SUM.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Karp's 21 NP-Complete Problems"
  },
  "cs110-u5-l1": {
    "id": "cs110-u5-l1",
    "unit": "cs110-u5",
    "level": "Unit 5",
    "objective": "Master Greedy Algorithms, Matroid Theory characterization of greediness, Huffman Optimal Prefix Codes, and Kruskal/Prim Minimum Spanning Trees.",
    "presentation": {
      "explanation": "Greedy algorithms construct solutions piece-by-piece, always choosing the locally optimal choice at each step.\n\n1. Greedy-Choice Property & Optimal Substructure:\n- Greedy-Choice Property: A globally optimal solution can be arrived at by making a locally optimal (greedy) choice.\n- Matroid Theory: A matroid $M = (S, \\mathcal{I})$ satisfies (1) Hereditary property, and (2) Independent set exchange property. A greedy algorithm yields an exact globally optimal maximum-weight independent set IF AND ONLY IF $(S, \\mathcal{I})$ is a Matroid (Rado-Edmonds Theorem).\n\n2. Huffman Optimal Prefix Coding:\n- Builds an optimal variable-length prefix code for data compression in $O(n \\log n)$ time using a min-priority queue.\n\n3. Minimum Spanning Tree (MST):\n- Kruskal's Algorithm: Sorts edges by weight and adds edges using Disjoint Set Union (DSU with union-by-rank and path compression) in $O(E \\log E)$ time.\n- Prim's Algorithm: Grows a single tree from a source vertex using a Fibonacci heap in $O(E + V \\log V)$ time.",
      "examples": [
        {
          "target": "Huffman Tree Construction:\n1. Initialize min-priority queue Q with all character frequencies.\n2. While |Q| > 1:\n     left = Extract-Min(Q)\n     right = Extract-Min(Q)\n     parent = Node(freq = left.freq + right.freq, left, right)\n     Insert(Q, parent)\n3. Return root of tree (optimal prefix code).",
          "reading": "Time Complexity: O(n log n)",
          "translation": "Produces minimum weighted path length tree for compression."
        }
      ],
      "mnemonics": [
        "MATROID = Guarantees greedy optimality",
        "PREFIX FREE = No codeword is a prefix of another!"
      ],
      "culturalNotes": [
        "David Huffman developed optimal prefix coding in 1951 as an MIT graduate term paper assignment for Robert Fano, surpassing the Shannon-Fano code."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What mathematical algebraic structure guarantees that a greedy algorithm finds an exact globally optimal maximum-weight solution?",
          "options": [
            "A Matroid $(S, \\mathcal{I})$ satisfying the exchange property",
            "A cyclic graph",
            "A Markov chain",
            "A non-deterministic finite automaton"
          ],
          "answerIndex": 0,
          "explanation": "The Rado-Edmonds theorem proves that greedy algorithms optimize linear objective functions if and only if the constraint system forms a matroid."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What is the time complexity of Kruskal's MST algorithm for a graph with $V$ vertices and $E$ edges using Disjoint Set Union (DSU)?",
          "options": [
            "$O(E \\log E)$ or $O(E \\log V)$",
            "Breadth-First Search (BFS) in $O(V + E)$",
            "Depth-First Search (DFS) in $O(V + E)$",
            "Topological Sort via DFS finish times"
          ],
          "answerIndex": 0,
          "explanation": "Sorting edges takes $O(E \\log E)$, while $2E$ DSU operations take $O(E \\alpha(V))$ nearly linear time."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Why are Huffman codes termed \"prefix-free\" codes?",
          "options": [
            "Because all codes start with 0",
            "Because no valid character codeword is a prefix of any other character's codeword, eliminating ambiguity in instantaneous decoding",
            "Because all codes have identical bit length",
            "Because they require a dictionary table"
          ],
          "answerIndex": 1,
          "explanation": "Prefix-free codes allow unambiguous streaming decoding without delimiters.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Which DSU optimizations reduce the amortized cost per operation to almost constant time $O(\\alpha(n))$?",
          "options": [
            "Path compression and Union by Rank / Size",
            "Binary search and sorting",
            "Red-black rotation and memoization",
            "Quicksort partitioning"
          ],
          "answerIndex": 0,
          "explanation": "Path compression and union by rank reduce tree height to the inverse Ackermann function $\\alpha(n) \\le 4$.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1105, Lesson 5: Foundational & Structural Mastery (Huffman Tree Construction:\n1. )"
  },
  "cs110-u4-l4": {
    "id": "cs110-u4-l4",
    "unit": "cs110-u4",
    "level": "Advanced",
    "objective": "Network Flow: Ford-Fulkerson Method, Edmonds-Karp & The Max-Flow Min-Cut Theorem (Residual networks $G_f$, augmenting paths, capacity constraints, flow conservation; Edmonds-Karp shortest-augmenting path algorithm using BFS in $O(V E^2)$ time; Max-Flow Min-Cut Theorem duality: $\\max |f| = \\min c(S, T)$; Dinic's blocking flow algorithm in $O(V^2 E)$ and $O(E \\sqrt{V})$ on bipartite unit networks).",
    "presentation": {
      "explanation": "Network Flow Theory and the Max-Flow Min-Cut Theorem:\n- **Flow Network Primitives**:\n  - Directed graph $G=(V, E)$ with source $s$, sink $t$, and edge capacities $c(u, v) \\ge 0$;\n  - **Constraints**: 1. Capacity constraint: $0 \\le f(u, v) \\le c(u, v)$; 2. Flow conservation: $\\sum_{v} f(u, v) = \\sum_{v} f(v, u)$ for all $u \\neq s, t$;\n- **Residual Network $G_f$ & Augmenting Paths**:\n  - Residual capacity $c_f(u, v) = c(u, v) - f(u, v)$ for forward edges, and $c_f(v, u) = f(u, v)$ for backward edges (allowing flow cancellation);\n  - An augmenting path is a simple path from $s$ to $t$ in $G_f$ with bottleneck capacity $\\delta = \\min_{(u, v) \\in p} c_f(u, v)$;\n- **The Edmonds-Karp Algorithm ($O(V E^2)$)**:\n  - Selects the shortest augmenting path (fewest edges) using **Breadth-First Search (BFS)**;\n  - Each augmenting step strictly increases or keeps constant the shortest path distance $\\delta_f(s, v)$;\n  - Total number of augmentations is bounded by $O(V E)$, with each BFS taking $O(E)$, yielding total runtime **$O(V E^2)$**;\n- **Max-Flow Min-Cut Theorem**:\n  - The maximum value of an $s-t$ flow equals the minimum capacity of an $s-t$ cut $(S, T)$ where $s \\in S, t \\in T$:\n    $$\\max |f| = \\min_{(S, T)} c(S, T) = \\min \\sum_{u \\in S, v \\in T} c(u, v)$$\n- **Dinic's Algorithm**: Builds layered networks and pushes blocking flows in $O(V^2 E)$ (or $O(E \\sqrt{V})$ on unit bipartite graphs for Maximum Bipartite Matching).",
      "examples": [
        {
          "target": "The Max-Flow Min-Cut theorem establishes exact duality: the maximum flow in a network equals the minimum capacity of an s-t cut.",
          "reading": "The Max-Flow Min-Cut...",
          "translation": "The Max-Flow Min-Cut theorem establishes exact duality: the maximum flow in a network equals the minimum capacity of an s-t cut."
        }
      ],
      "mnemonics": [
        "Flow Network! Residual graph G_f & backward flow cancellation! Edmonds-Karp BFS shortest path in O(V E^2)! Max-Flow Min-Cut Theorem: max |f| = min c(S, T)! Dinic blocking flow in O(V^2 E)!"
      ],
      "culturalNotes": [
        "Lester Ford and Delbert Fulkerson published the Max-Flow Min-Cut theorem in 1956 while analyzing the capacity of the Soviet railway logistics network during the Cold War."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What search strategy is used in the Edmonds-Karp algorithm to guarantee an O(V E^2) bound by finding shortest augmenting paths in the residual network?",
          "options": [
            "Breadth-First Search",
            "Depth-First Search",
            "A* Search",
            "Binary Search"
          ],
          "answerIndex": 0,
          "explanation": "Breadth-First Search (BFS)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "According to the Max-Flow Min-Cut Theorem, what is the exact relationship between the maximum flow value and the minimum capacity cut?",
          "options": [
            "The maximum flow value exactly equals the minimum s-t cut capacity.",
            "Huffman Coding greedy prefix tree",
            "Activity Selection earliest finish time",
            "Fractional Knapsack value/weight ratio"
          ],
          "answerIndex": 0,
          "explanation": "The maximum flow value exactly equals the minimum s-t cut capacity."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"The residual network enables flow augmentation and cancellation along backward edges, ensuring the Edmonds-Karp algorithm terminates at the global maximum flow in O(V E^2) time.\"",
          "options": [
            "The residual network enables flow augmentation and cancellation along backward edges, ensuring the Edmonds-Karp algorithm terminates at the global maximum flow in O(V E^2) time.",
            "Ford-Fulkerson with DFS is guaranteed to run in polynomial time on irrational capacities.",
            "Min-cut capacity is always greater than max-flow.",
            "Network flow only works on undirected trees with unit edge weights."
          ],
          "answerIndex": 0,
          "explanation": "Accurate Network flow analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What asymptotic runtime does Dinic's blocking flow algorithm achieve when solving Maximum Bipartite Matching on unit-capacity networks?",
          "options": [
            "O",
            "$O(n \\log n)$",
            "$\\Omega(n)$",
            "$\\Theta(1)$"
          ],
          "answerIndex": 3,
          "explanation": "O(E * sqrt(V)).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Network Flow"
  },
  "cs110-u4-l3": {
    "id": "cs110-u4-l3",
    "unit": "cs110-u4",
    "level": "Advanced",
    "objective": "Greedy Choice Property, Matroid Theory & The Rado-Edmonds Theorem (Independent systems and Matroids $M = (E, \\mathcal{I})$; Hereditary property and Exchange property; greedy algorithm optimality on weighted matroids (Rado-Edmonds Theorem); Graphic Matroids and Kruskal's MST algorithm in $O(E \\log V)$; Uniform and Partition Matroids).",
    "presentation": {
      "explanation": "Matroid Theory and the algebraic foundation of Greedy Algorithms:\n- **Definition of a Matroid $M = (E, \\mathcal{I})$**:\n  - A finite set $E$ (ground set) and a family $\\mathcal{I}$ of subsets of $E$ (independent sets) satisfying two axioms:\n    - **1. Hereditary Property**: If $B \\in \\mathcal{I}$ and $A \\subseteq B$, then $A \\in \\mathcal{I}$;\n    - **2. Exchange Property**: If $A, B \\in \\mathcal{I}$ and $|A| < |B|$, there exists $x \\in B \\setminus A$ such that $A \\cup \\{x\\} \\in \\mathcal{I}$;\n- **Rado-Edmonds Theorem**:\n  - For any weight function $w: E \\to \\mathbb{R}^+$, the greedy algorithm (sort elements by descending weight and greedily add element $e$ if independent) is **guaranteed to find a maximum-weight independent set if and only if $(E, \\mathcal{I})$ is a matroid**;\n- **Canonical Matroid Classes**:\n  - **Graphic Matroid**: $E$ is edges of graph $G$, $\\mathcal{I}$ is cycle-free forests. Greedy algorithm yields **Kruskal's Minimum Spanning Tree** in $O(E \\log V)$ using Disjoint-Set Union (DSU);\n  - **Vector/Linear Matroid**: Linearly independent column vectors over a field;\n  - **Uniform Matroid $U_{k, n}$**: All subsets of size $\\le k$.",
      "examples": [
        {
          "target": "The Rado-Edmonds theorem proves that greedy algorithms find the global optimum if and only if the underlying independence system is a matroid.",
          "reading": "The Rado-Edmonds theorem...",
          "translation": "The Rado-Edmonds theorem proves that greedy algorithms find the global optimum if and only if the underlying independence system is a matroid."
        }
      ],
      "mnemonics": [
        "Matroid M = (E, I)! Hereditary Property (Subsets remain independent)! Exchange Property (|A| < |B| -> exists x in B\\A)! Rado-Edmonds Theorem (Greedy is optimal iff Matroid)! Graphic Matroid -> Kruskal MST O(E log V)!"
      ],
      "culturalNotes": [
        "Hassler Whitney introduced matroids in 1935 to abstract linear independence in matrices, while Jack Edmonds formalized their connection to greedy algorithms in 1971."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which mathematical theorem proves that the greedy algorithm produces a maximum-weight independent set if and only if the system is a matroid?",
          "options": [
            "Cook-Levin Theorem",
            "Master Theorem",
            "Max-Flow Min-Cut Theorem",
            "Rado-Edmonds Theorem"
          ],
          "answerIndex": 3,
          "explanation": "Rado-Edmonds Theorem."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In a Graphic Matroid where the ground set E consists of all edges of an undirected graph G, what defines the independent family I?",
          "options": [
            "Acyclic edge sets",
            "Longest Common Subsequence in $O(m n)$",
            "Edit Distance (Levenshtein) in $O(m n)$",
            "Matrix Chain Multiplication in $O(n^3)$"
          ],
          "answerIndex": 0,
          "explanation": "Acyclic edge sets (Forests / Spanning Trees)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"The exchange property of matroids guarantees that smaller independent sets can always be augmented by an element from a larger independent set while preserving independence.\"",
          "options": [
            "Matroids only apply to sorting floating point numbers in O(n).",
            "The greedy choice property guarantees global optimality for all NP-complete problems.",
            "Graphic matroids require graphs to contain at least three directed cycles.",
            "The exchange property of matroids guarantees that smaller independent sets can always be augmented by an element from a larger independent set while preserving independence."
          ],
          "answerIndex": 3,
          "explanation": "Accurate Matroid analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What data structure enables Kruskal's greedy algorithm on graphic matroids to run in O(E log V) time with nearly linear O(alpha(V)) cycle checks?",
          "options": [
            "Fibonacci Heap",
            "Segment Tree",
            "Disjoint-Set Union",
            "Red-Black Tree"
          ],
          "answerIndex": 2,
          "explanation": "Disjoint-Set Union (DSU / Union-Find).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1104, Lesson 2: Foundational & Structural Mastery (The Rado-Edmonds theorem prove)"
  },
  "cs110-u4-l2": {
    "id": "cs110-u4-l2",
    "unit": "cs110-u4",
    "level": "Advanced",
    "objective": "0/1 Knapsack vs Unbounded Knapsack: Pseudo-Polynomial Time & Fully Polynomial-Time Approximation Schemes (FPTAS) (Recurrence relation $DP[i][w] = max(DP[i-1][w], DP[i-1][w-w_i] + v_i)$; distinction between weakly NP-hard (pseudo-polynomial $O(nW)$) and strongly NP-hard; dual DP formulation by value $DP[i][v]$ in $O(n^2 V_{max})$ and $epsilon$-scaling for FPTAS in $O(n^3/epsilon)$ time).",
    "presentation": {
      "explanation": "Knapsack Problems and the Theory of Pseudo-Polynomial Algorithms:\n- **0/1 Knapsack Formulation**:\n  - Given $n$ items with weights $w_i \\in \\mathbb{Z}^+$ and values $v_i \\in \\mathbb{Z}^+$, maximize $\\sum v_i x_i$ subject to $\\sum w_i x_i \\le W$, where $x_i \\in \\{0, 1\\}$;\n  - **Recurrence**:\n    $$DP[i][w] = \\max \\{ DP[i-1][w], \\, DP[i-1][w - w_i] + v_i \\}$$\n- **Pseudo-Polynomial Complexity**:\n  - The runtime is $O(n \\cdot W)$. Since input size of $W$ is $\\log_2 W$ bits, $W = 2^{\\text{bits}}$, meaning the algorithm is exponential in the input length (Weakly NP-complete);\n- **Dual DP by Value & FPTAS**:\n  - Let $DP[i][v]$ be the minimum weight needed to achieve exact value $v$ using a subset of first $i$ items;\n  - Runtime: $O(n \\cdot \\sum v_i) = O(n^2 V_{\\max})$;\n  - **FPTAS Scaling**: Scale down values $v_i' = \\lfloor \\frac{v_i}{K} \\rfloor$ where $K = \\frac{\\epsilon V_{\\max}}{n}$;\n  - Solves the scaled instance in $O(n^3 / \\epsilon)$ time, guaranteeing solution value $\\ge (1 - \\epsilon) \\text{OPT}$.",
      "examples": [
        {
          "target": "Scaling knapsack values by K = eps * V_max / n yields an FPTAS with runtime O(n^3 / eps).",
          "reading": "Scaling knapsack values...",
          "translation": "Scaling knapsack values by K = eps * V_max / n yields an FPTAS with runtime O(n^3 / eps)."
        }
      ],
      "mnemonics": [
        "0/1 Knapsack! Pseudo-polynomial O(nW) (Weakly NP-hard)! Dual DP O(n^2 V_max)! Value scaling K = (eps * V_max) / n! FPTAS in O(n^3 / eps) guarantees (1 - eps) * OPT!"
      ],
      "culturalNotes": [
        "The distinction between weakly NP-hard (solvable in pseudo-polynomial time) and strongly NP-hard (no pseudo-polynomial algorithm unless P=NP) was formalized by Garey and Johnson in 1979."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Why is the O(n * W) dynamic programming algorithm for 0/1 Knapsack classified as pseudo-polynomial rather than polynomial?",
          "options": [
            "Because W is represented in log2(W) bits, making runtime exponential with respect to the input length of W.",
            "Because the algorithm uses recursion.",
            "Because it only runs on binary computers.",
            "Because weights can be negative."
          ],
          "answerIndex": 0,
          "explanation": "Because W is represented in log2(W) bits."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What scaling factor K is applied to item values in the Knapsack FPTAS to guarantee a (1 - epsilon)-approximation in polynomial time?",
          "options": [
            "K = (epsilon * V_max) / n",
            "0/1 Knapsack in $O(n W)$ pseudo-polynomial",
            "Fractional Knapsack via Greedy in $O(n \\log n)$",
            "Unbounded Knapsack in $O(n W)$"
          ],
          "answerIndex": 0,
          "explanation": "K = (epsilon * V_max) / n."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"The dual dynamic programming formulation minimizes weight for a target value, enabling an epsilon-approximation FPTAS via value discretization in O(n^3 / epsilon) time.\"",
          "options": [
            "Unbounded knapsack requires O(n!) permutations.",
            "FPTAS cannot exist for any NP-hard problem.",
            "The dual dynamic programming formulation minimizes weight for a target value, enabling an epsilon-approximation FPTAS via value discretization in O(n^3 / epsilon) time.",
            "0/1 knapsack can be solved in O(n) greedy time by sorting density."
          ],
          "answerIndex": 2,
          "explanation": "Accurate Knapsack analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What approximation ratio is guaranteed by a Fully Polynomial-Time Approximation Scheme (FPTAS) with user-selected parameter epsilon > 0?",
          "options": [
            "OPT / 2",
            "(1 - epsilon) * OPT",
            "2 * OPT",
            "0.5 * OPT"
          ],
          "answerIndex": 1,
          "explanation": "(1 - epsilon) * OPT.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "0/1 Knapsack vs Unbounded Knapsack"
  },
  "cs110-u4-l1": {
    "id": "cs110-u4-l1",
    "unit": "cs110-u4",
    "level": "Unit 4",
    "objective": "Master Dynamic Programming principles: Bellman equation, DAG topological sorting, Matrix Chain Multiplication, and the 0/1 Knapsack problem.",
    "presentation": {
      "explanation": "Dynamic Programming (DP) solves complex problems by decomposing them into overlapping subproblems and optimal substructure.\n\nTwo Fundamental Requirements for DP:\n1. Optimal Substructure: An optimal solution to the instance contains optimal solutions to its subproblems.\n2. Overlapping Subproblems: A recursive algorithm revisits the same subproblems repeatedly rather than generating new subproblems.\n\nMatrix Chain Multiplication ($O(n^3)$):\nGiven matrices $A_1, A_2, \\dots, A_n$ where $A_i$ has dimension $p_{i-1} \\times p_i$:\n$$m[i, j] = \\begin{cases} 0 & \\text{if } i = j \\\\ \\min_{i \\le k < j} \\{ m[i, k] + m[k+1, j] + p_{i-1} p_k p_j \\} & \\text{if } i < j \\end{cases}$$\n\n0/1 Knapsack Dynamic Programming ($O(nW)$ pseudo-polynomial time):\n$$dp[i, w] = \\begin{cases} dp[i-1, w] & \\text{if } w_i > w \\\\ \\max(dp[i-1, w], dp[i-1, w - w_i] + v_i) & \\text{if } w_i \\le w \\end{cases}$$",
      "examples": [
        {
          "target": "Knapsack Recurrence:\nfor i = 1 to n:\n  for w = 1 to W:\n    if wt[i-1] <= w:\n      dp[i][w] = max(val[i-1] + dp[i-1][w - wt[i-1]], dp[i-1][w])\n    else:\n      dp[i][w] = dp[i-1][w]",
          "reading": "Time: O(n*W), Space: O(W) with 1D row rolling",
          "translation": "Computes maximum value obtainable with weight capacity W."
        }
      ],
      "mnemonics": [
        "MEMOIZATION = Top-down with cache",
        "TABULATION = Bottom-up table filling!"
      ],
      "culturalNotes": [
        "Richard Bellman coined the term \"Dynamic Programming\" in the 1950s while working at the RAND Corporation, formalizing the Bellman equation foundational to modern control theory and reinforcement learning."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What two properties must a computational problem exhibit for Dynamic Programming to be applicable?",
          "options": [
            "Linearity and commutativity",
            "Randomization and greediness",
            "Constant time and sorting",
            "Optimal substructure and overlapping subproblems"
          ],
          "answerIndex": 3,
          "explanation": "Optimal substructure and overlapping subproblems are the mandatory requirements."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What is the time complexity of the Matrix Chain Multiplication dynamic programming algorithm for $n$ matrices?",
          "options": [
            "$O(n^3)$",
            "Optimal Substructure & Overlapping Subproblems",
            "Greedy-Choice Property",
            "Divide-and-Conquer disjoint subproblems"
          ],
          "answerIndex": 0,
          "explanation": "There are $O(n^2)$ subproblems $(i, j)$, each requiring $O(n)$ splits $k$, yielding $O(n^3)$ total time."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Why is the $O(nW)$ time complexity of the 0/1 Knapsack algorithm termed \"pseudo-polynomial\"?",
          "options": [
            "Because $n$ is always equal to $W$",
            "Because the running time is polynomial in the magnitude of the integer $W$, but exponential in the number of input bits $\\log_2 W$",
            "Because it uses pseudo-random numbers",
            "Because it runs in $O(1)$ on average"
          ],
          "answerIndex": 1,
          "explanation": "In complexity theory, $W$ requires $\\log_2 W$ bits to represent, making $O(n 2^b)$ exponential in input bitlength.",
          "type": "multiple-choice"
        },
        {
          "prompt": "How can memory for the 0/1 Knapsack DP table be optimized from $O(nW)$ to $O(W)$?",
          "options": [
            "By rolling a single 1D array backwards from $w = W$ down to $w_i$",
            "By discarding all negative weights",
            "By converting to quicksort",
            "By sorting items in ascending order"
          ],
          "answerIndex": 0,
          "explanation": "Iterating right-to-left prevents overwriting values needed from the previous item step.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1104, Lesson 4: Foundational & Structural Mastery (Knapsack Recurrence:\nfor i = 1)"
  },
  "cs110-u3-l5": {
    "id": "cs110-u3-l5",
    "unit": "cs110-u3",
    "level": "Unit 3",
    "objective": "C2 Synthesis on Multidimensional Spatial Search: k-d Trees, Range Searching, and Nearest Neighbor Queries.",
    "presentation": {
      "explanation": "A $k$-d Tree ($k$-dimensional Tree - Jon Bentley, 1975) partitions $k$-dimensional space using alternating hyperplanes for spatial queries:\n\n1. **Construction Invariant**:\nAt depth $d$, partition points using the coordinate axis $i = d \\bmod k$.\n- Find the median point along axis $i$ in $O(n)$ time.\n- Points with coordinate $\\le$ median go to left subtree; points $>$ median go to right subtree.\n- Recurrence $T(n) = 2T(n/2) + O(n) \\implies O(n \\log n)$ total build time, producing a balanced tree of height $O(\\log n)$.\n\n2. **Orthogonal Range Search ($d=2$)**:\nFind all points inside bounding box $[x_{min}, x_{max}] \\times [y_{min}, y_{max}]$:\n- If cell of subtree does not intersect query rectangle: Prune subtree ($O(1)$)!\n- If cell is fully contained: Report all points in subtree in $O(m)$ time.\n- **Worst-Case Query Time**: $O(\\sqrt{n} + m)$ for $2$-d trees, and $O(n^{1 - 1/k} + m)$ in $k$-dimensional space.\n\n3. **Nearest Neighbor (NN) Search & Branch-and-Bound**:\n- Traverse down to target leaf to establish current shortest distance $R$.\n- Backtrack up tree: Only explore the opposing branch if the splitting hyperplane is closer to target than $R$ (hyperplane distance $\\le R$).",
      "examples": [
        {
          "target": "In a 2-d tree with 1,000,000 points, orthogonal range search inspects at most O(sqrt(1,000,000)) = O(1,000) nodes plus reported matches.",
          "reading": "k-d tree range query complexity",
          "translation": "In a 2-d tree with 1,000,000 points, orthogonal range search inspects at most O(sqrt(1,000,000)) = O(1,000) nodes plus reported matches."
        }
      ],
      "mnemonics": [
        "k-d Tree: Split axis = depth mod k! Build in O(n log n) with median partitioning! Range search in O(n^(1-1/k) + m)! Nearest Neighbor pruning with ball-hyperplane distance!"
      ],
      "culturalNotes": [
        "Jon Bentley invented the k-d tree at Stanford University in 1975, revolutionizing computer graphics ray tracing, GIS mapping, and robot motion planning."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In a 2-d tree (k=2), what coordinate axis is used to split points at tree depth d=3?",
          "options": [
            "The x-axis",
            "The z-axis",
            "The radial distance",
            "The y-axis"
          ],
          "answerIndex": 3,
          "explanation": "The y-axis (since 3 mod 2 = 1)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What is the worst-case time complexity of an orthogonal 2D range search query on a 2-d tree reporting m points?",
          "options": [
            "O(sqrt(n) + m)",
            "Cuckoo Hashing with 2 tables",
            "Robin Hood Hashing variance reduction",
            "Consistent Hashing ring"
          ],
          "answerIndex": 0,
          "explanation": "O(sqrt(n) + m)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What geometric condition enables the Nearest Neighbor algorithm to prune an entire subtree in a k-d tree during backtracking?",
          "options": [
            "When the shortest Euclidean distance from the query point to the splitting hyperplane exceeds the current best candidate distance R.",
            "When the tree is not binary.",
            "When the subtree has depth greater than 5.",
            "When all points in the subtree are negative."
          ],
          "answerIndex": 0,
          "explanation": "When the shortest Euclidean distance to the splitting hyperplane exceeds current best distance R.",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why does the search efficiency of standard k-d trees degrade toward O(n) in very high-dimensional spaces (e.g., k >= 50)?",
          "options": [
            "Float precision errors cause loop crashes.",
            "k-d trees cannot store more than 10 dimensions.",
            "Memory consumption becomes infinite.",
            "The \"Curse of Dimensionality\" causes the query hypersphere to overlap nearly all splitting hyperplanes, preventing effective pruning."
          ],
          "answerIndex": 3,
          "explanation": "The \"Curse of Dimensionality\" causes the query hypersphere to overlap nearly all splitting hyperplanes.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "C2 Synthesis on Multidimensional Spatial Search"
  },
  "cs110-u3-l4": {
    "id": "cs110-u3-l4",
    "unit": "cs110-u3",
    "level": "Unit 3",
    "objective": "Implement 2-3-4 Trees, B-Tree Generalizations, and Equivalence to Red-Black Representation.",
    "presentation": {
      "explanation": "A 2-3-4 Tree (B-tree of order 4) is a multi-way balanced search tree where every internal node has 2, 3, or 4 children:\n- **2-node**: 1 key, 2 children\n- **3-node**: 2 keys, 3 children\n- **4-node**: 3 keys, 4 children\n\nAll leaves reside at the exact same depth, guaranteeing absolute structural balance.\n\n**Isomorphism to Red-Black Trees**:\nEvery Red-Black tree is structurally isomorphic to a 2-3-4 tree:\n- A black node with two black children represents a **2-node**.\n- A black node with one red child represents a **3-node**.\n- A black node with two red children represents a **4-node**.\n\n**B-Tree Generalization for Storage Subsystems**:\nFor disk-based databases and file systems where disk I/O block size is large (e.g., 4KB to 64KB), B-Trees of order $B \\sim 1000$ minimize disk seeks:\n$$\\text{Height } h \\le \\log_{\\lceil B/2 \\rceil} \\left( \\frac{n+1}{2} \\right)$$\nA database with 1 billion records has height $h \\le \\log_{500}(10^9) \\approx 3.3$, requiring only 3 or 4 disk block reads per query!",
      "examples": [
        {
          "target": "In a B-Tree of order B = 1000, 1,000,000,000 keys can be searched with at most 3 to 4 disk page fetches.",
          "reading": "B-Tree height formula",
          "translation": "In a B-Tree of order B = 1000, 1,000,000,000 keys can be searched with at most 3 to 4 disk page fetches."
        }
      ],
      "mnemonics": [
        "2-3-4 Tree = Multi-way B-tree of order 4! 2-node (1 key), 3-node (2 keys), 4-node (3 keys)! 1-to-1 Isomorphism with Red-Black Trees! B-Trees minimize disk I/O!"
      ],
      "culturalNotes": [
        "B-Trees were invented by Rudolf Bayer and Edward M. McCreight at Boeing Scientific Research Laboratories in 1970 for efficient disk block indexing."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In the structural isomorphism between 2-3-4 trees and Red-Black trees, what 2-3-4 node type corresponds to a black node with two red children?",
          "options": [
            "A 4-node",
            "A 3-node",
            "A leaf node",
            "A 2-node"
          ],
          "answerIndex": 0,
          "explanation": "A 4-node (3 keys, 4 children)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Why are large-branching B-Trees (B ~ 500-1000) preferred over binary search trees for disk storage engines like PostgreSQL and MySQL InnoDB?",
          "options": [
            "They drastically reduce tree height, minimizing expensive disk block I/O operations.",
            "Universal Hashing family $P(h(x)=h(y)) \\le 1/m$",
            "Perfect Hashing with $O(1)$ worst-case",
            "Linear Probing with clustering"
          ],
          "answerIndex": 0,
          "explanation": "They drastically reduce tree height, minimizing expensive disk block I/O operations."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What happens when an insertion encounters a full 4-node during a top-down traversal of a 2-3-4 tree?",
          "options": [
            "The key is dropped.",
            "The tree crashes with an overflow exception.",
            "The node is converted into an AVL balance factor.",
            "The 4-node splits into two 2-nodes, pushing its median key up into its parent."
          ],
          "answerIndex": 3,
          "explanation": "The 4-node splits into two 2-nodes, pushing its median key up into its parent.",
          "type": "multiple-choice"
        },
        {
          "prompt": "In a 2-3-4 tree with n keys, what is the strict property regarding the depth of all external leaf nodes?",
          "options": [
            "Leaves can differ in depth by a factor of 2.",
            "Leaves can differ in depth by at most 1.",
            "All leaves are at the exact same depth.",
            "Leaf depth depends on key parity."
          ],
          "answerIndex": 2,
          "explanation": "All leaves are at the exact same depth.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1103, Lesson 1: Foundational & Structural Mastery (In a B-Tree of order B = 1000,)"
  },
  "cs110-u3-l3": {
    "id": "cs110-u3-l3",
    "unit": "cs110-u3",
    "level": "Unit 3",
    "objective": "Examine AVL Trees, Balance Factors, and Height-Balanced Tree Rotations vs Red-Black Tradeoffs.",
    "presentation": {
      "explanation": "An AVL Tree (Adelson-Velsky and Landis, 1962) is a strictly height-balanced Binary Search Tree.\n\n1. **AVL Invariant**:\nFor every node $x$, the **Balance Factor** $BF(x) = h(\\text{left}) - h(\\text{right}) \\in \\{-1, 0, +1\\}$.\n\n2. **Height Analysis**:\nLet $N(h)$ be the minimum number of nodes in an AVL tree of height $h$:\n$$N(h) = N(h-1) + N(h-2) + 1, \\quad N(0) = 1, N(1) = 2$$\nThis Fibonacci-like recurrence yields $N(h) \\approx \\frac{1}{\\sqrt{5}} \\phi^{h+2} - 1$, where $\\phi = \\frac{1+\\sqrt{5}}{2} \\approx 1.618$.\nThus, maximum height $h \\le 1.44 \\log_2(n + 2) - 0.328$.\n\n3. **Rebalancing via Rotations**:\n- Single Rotations: LL (Right-Rotate), RR (Left-Rotate)\n- Double Rotations: LR (Left-Rotate left child, then Right-Rotate parent), RL (Right-Rotate right child, then Left-Rotate parent).\n\n4. **AVL vs Red-Black Tradeoff**:\n- AVL is more rigidly balanced ($h \\le 1.44 \\log n$ vs $h \\le 2 \\log n$), resulting in faster lookups for read-heavy workloads.\n- Red-Black trees require fewer rebalancings on insertion/deletion ($O(1)$ rotations vs up to $O(\\log n)$ in AVL deletion), making Red-Black superior for write-heavy workloads.",
      "examples": [
        {
          "target": "In an AVL tree of height h = 5, the minimum number of nodes is N(5) = N(4) + N(3) + 1 = 12 + 7 + 1 = 20 nodes.",
          "reading": "AVL Tree Fibonacci recurrence",
          "translation": "In an AVL tree of height h = 5, the minimum number of nodes is N(5) = N(4) + N(3) + 1 = 12 + 7 + 1 = 20 nodes."
        }
      ],
      "mnemonics": [
        "AVL Balance Factor BF in {-1, 0, +1}! Height bound h <= 1.44 log2(n)! Rebalance: LL, RR, LR, RL! AVL = Faster lookups; Red-Black = Faster insertions/deletions!"
      ],
      "culturalNotes": [
        "Georgy Adelson-Velsky and Evgenii Landis published the AVL tree algorithm in the 1962 Soviet Academy of Sciences paper *An algorithm for the organization of information*."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What is the valid range of balance factors (h_left - h_right) for any node in an AVL tree?",
          "options": [
            "{-1, 0, +1}",
            "{-2, -1, 0, +1, +2}",
            "{0, 1}",
            "Any integer value"
          ],
          "answerIndex": 0,
          "explanation": "{-1, 0, +1}."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which rotation is executed when an insertion causes a Left-Right (LR) imbalance at node x?",
          "options": [
            "Left-rotate on left child, then Right-rotate on x",
            "Red-Black Case 1: Uncle is Red",
            "Red-Black Case 2: Uncle is Black (triangle)",
            "Red-Black Case 3: Uncle is Black (line)"
          ],
          "answerIndex": 0,
          "explanation": "Left-rotate on left child, then Right-rotate on x."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Why are AVL trees preferred over Red-Black trees in databases with predominantly read-intensive query workloads?",
          "options": [
            "Because AVL trees consume zero memory for pointers.",
            "Because AVL trees do not require key comparisons.",
            "Because AVL trees maintain a strictly shallower maximum height (1.44 log n vs 2.0 log n), minimizing tree traversal depth.",
            "Because AVL trees support O(1) worst-case search."
          ],
          "answerIndex": 2,
          "explanation": "Because AVL trees maintain a strictly shallower maximum height.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the maximum number of rotations required to rebalance an AVL tree after node deletion?",
          "options": [
            "At most 1 rotation",
            "O(log n) rotations",
            "O(n) rotations",
            "At most 2 rotations"
          ],
          "answerIndex": 1,
          "explanation": "O(log n) rotations.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1103, Lesson 2: Foundational & Structural Mastery (In an AVL tree of height h = 5)"
  },
  "cs110-u3-l2": {
    "id": "cs110-u3-l2",
    "unit": "cs110-u3",
    "level": "Unit 3",
    "objective": "Analyze Tree Rotations and Red-Black Insertion Fixup Cases (Case 1: Red Uncle, Case 2: Zig-Zag, Case 3: Line).",
    "presentation": {
      "explanation": "Inserting key $z$ into a Red-Black tree: First insert $z$ as in standard BST and color $z = \\text{RED}$. If $z$'s parent $p[z]$ is red, we violate Invariant 4. We fix this via `RB-INSERT-FIXUP(T, z)` with three symmetric cases (assuming $p[z]$ is left child of grandparent $g[z]$):\n\n- **Case 1: Uncle $y$ (right child of $g[z]$) is RED**:\n  - *Action*: Recolor $p[z] = \\text{BLACK}$, $y = \\text{BLACK}$, $g[z] = \\text{RED}$. Move pointer $z \\leftarrow g[z]$ and repeat up the tree.\n- **Case 2: Uncle $y$ is BLACK and $z$ is a RIGHT child (Zig-Zag configuration)**:\n  - *Action*: Perform `LEFT-ROTATE(T, p[z])`. Set $z \\leftarrow p[z]$. Transforms problem into Case 3.\n- **Case 3: Uncle $y$ is BLACK and $z$ is a LEFT child (Line configuration)**:\n  - *Action*: Recolor $p[z] = \\text{BLACK}$, $g[z] = \\text{RED}$. Perform `RIGHT-ROTATE(T, g[z])`. Tree invariants fully restored; loop terminates!\n\n**Complexity**: At most $O(\\log n)$ recolorings and **at most 2 tree rotations** during insertion!",
      "examples": [
        {
          "target": "In RB-Insert, Case 1 (Red Uncle) performs only recolorings and moves the violation up 2 levels; Cases 2 and 3 perform at most 2 rotations to restore balance.",
          "reading": "RB-Insert fixup cases",
          "translation": "In RB-Insert, Case 1 (Red Uncle) performs only recolorings and moves the violation up 2 levels; Cases 2 and 3 perform at most 2 rotations to restore balance."
        }
      ],
      "mnemonics": [
        "RB-Insert Fixup: Case 1 = Red Uncle (Recolor parent, uncle, grandparent, push up); Case 2 = Black Uncle Zig-Zag (Rotate to make a line); Case 3 = Black Uncle Line (Recolor & Rotate grandparent, Done)! Max 2 rotations!"
      ],
      "culturalNotes": [
        "Red-Black trees form the underlying implementation for `std::map` and `std::set` in C++ STL, and `java.util.TreeMap` in Java."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What is the maximum number of tree rotations required to restore Red-Black invariants after an insertion?",
          "options": [
            "O(log n) rotations",
            "At most 1 rotation",
            "O(n) rotations",
            "At most 2 rotations"
          ],
          "answerIndex": 3,
          "explanation": "At most 2 rotations."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In RB-Insert Fixup Case 1, what condition triggers the recoloring of the parent, uncle, and grandparent without any rotations?",
          "options": [
            "The uncle node is RED",
            "Single Left Rotation",
            "Single Right Rotation",
            "Left-Right Double Rotation"
          ],
          "answerIndex": 0,
          "explanation": "The uncle node is RED."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What sequence of operations resolves Case 2 (Uncle is BLACK and z is a right child of a left child)?",
          "options": [
            "Right-rotate on grandparent directly.",
            "Left-rotate on parent(z), transforming the sub-tree into Case 3 line configuration.",
            "Delete node z.",
            "Recolor the root node black and exit."
          ],
          "answerIndex": 1,
          "explanation": "Left-rotate on parent(z).",
          "type": "multiple-choice"
        },
        {
          "prompt": "Why is a newly inserted node initially colored RED in a Red-Black tree?",
          "options": [
            "Because coloring it red preserves the uniform black-height invariant (Invariant 5) along all paths.",
            "Because roots must be red.",
            "Because black nodes cannot have children.",
            "Because red nodes execute faster in CPU caches."
          ],
          "answerIndex": 0,
          "explanation": "Because coloring it red preserves the uniform black-height invariant.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Analyze Tree Rotations and Red-Black Insertion Fixup Cases (Case 1"
  },
  "cs110-u3-l1": {
    "id": "cs110-u3-l1",
    "unit": "cs110-u3",
    "level": "Unit 3",
    "objective": "Master Red-Black Tree invariant properties, tree rotations (left/right), color flips, and height bound proofs ($h \\le 2\\log_2(n+1)$).",
    "presentation": {
      "explanation": "Red-Black Trees are Self-Balancing Binary Search Trees ensuring $O(\\log n)$ worst-case search, insertion, and deletion.\n\nFive Fundamental Invariants:\n1. Node Property: Every node is either RED or BLACK.\n2. Root Property: The root is always BLACK.\n3. Leaf Property: Every leaf (NIL sentinel node) is BLACK.\n4. Red Property (No Red-Red Conflict): If a node is RED, both of its children must be BLACK.\n5. Black-Height Property: For each node, all simple paths from the node to descendant leaves contain the exact same number of black nodes (denoted $bh(x)$).\n\nHeight Bound Theorem:\nA red-black tree with $n$ internal nodes has height $h \\le 2\\log_2(n+1)$.\nProof Sketch by Induction:\n- The subtree rooted at node $x$ contains at least $2^{bh(x)} - 1$ internal nodes.\n- Since at least half of the nodes on any path from root to leaf must be black (by the Red Property), $bh(root) \\ge h/2$.\n- Thus, $n \\ge 2^{h/2} - 1 \\implies n+1 \\ge 2^{h/2} \\implies \\log_2(n+1) \\ge h/2 \\implies h \\le 2\\log_2(n+1)$.",
      "examples": [
        {
          "target": "Tree Rotation Pointer Reassignment:\nLeft-Rotate(T, x):\n  y = x.right\n  x.right = y.left\n  if y.left != T.nil: y.left.p = x\n  y.p = x.p\n  if x.p == T.nil: T.root = y\n  else if x == x.p.left: x.p.left = y\n  else: x.p.right = y\n  y.left = x\n  x.p = y",
          "reading": "Time Complexity: O(1) pointer updates",
          "translation": "Preserves binary search tree invariant while altering tree height."
        }
      ],
      "mnemonics": [
        "RED CANNOT HAVE RED CHILD (No consecutive red nodes)",
        "BLACK HEIGHT MUST BE UNIFORM ACROSS ALL PATHS!"
      ],
      "culturalNotes": [
        "Invented by Rudolf Bayer (1972) as symmetric binary B-trees and formalized by Guibas and Sedgewick (1978); red-black trees underpin standard C++ `std::map`, Java `TreeMap`, and Linux kernel CFS process schedulers."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In a Red-Black tree with $n$ internal nodes, what is the strict upper bound on tree height $h$?",
          "options": [
            "$h \\le 2\\log_2(n+1)$",
            "$h \\le \\log_2(n)$",
            "$h = O(\\sqrt{n})$",
            "$h = O(n)$"
          ],
          "answerIndex": 0,
          "explanation": "Due to the black-height invariant and red-node non-adjacency, height is strictly bounded by 2*log2(n+1)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What is the time complexity of a single tree rotation (Left-Rotate or Right-Rotate)?",
          "options": [
            "$O(1)$ constant time pointer reassignments",
            "Tree rotation in $O(1)$",
            "AVL balance factor $\\in \\{-1, 0, +1\\}$",
            "Red-Black tree black-height invariance"
          ],
          "answerIndex": 0,
          "explanation": "Rotations only update a constant number of pointer references (parent, left child, right child)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Which violation occurs when a RED child is inserted beneath a RED parent node in a Red-Black tree?",
          "options": [
            "Violation of the Red Property",
            "Violation of the Binary Search Tree ordering",
            "Violation of leaf sentinel count",
            "Violation of the Root Property"
          ],
          "answerIndex": 0,
          "explanation": "The Red Property forbids any red node from having a red parent or child.",
          "type": "multiple-choice"
        },
        {
          "prompt": "How many black nodes exist on any path from a given node $x$ to its descendant leaves?",
          "options": [
            "Varies depending on tree depth",
            "Always zero",
            "Always equal to total height $h$",
            "The exact same number on every path (Black-Height invariance $bh(x)$)"
          ],
          "answerIndex": 3,
          "explanation": "All paths from a node to descendant leaves must have identical black height.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1103, Lesson 4: Foundational & Structural Mastery (Tree Rotation Pointer Reassign)"
  },
  "cs110-u2-l5": {
    "id": "cs110-u2-l5",
    "unit": "cs110-u2",
    "level": "B2",
    "objective": "CS110 Minimum Spanning Trees: Kruskal's and Prim's Algorithms (Minimum Spanning Trees, Cut property, Kruskal's algorithm with Disjoint Set Union / Union-Find, Prim's greedy algorithm).",
    "presentation": {
      "explanation": "Minimum Spanning Trees (MST) in Undirected Connected Weighted Graphs:\n- **Spanning Tree**: A connected acyclic subgraph that spans all $V$ vertices using exactly $V - 1$ edges.\n- **The Cut Property**: For any cut $(S, V \\setminus S)$ of a graph, the minimum-weight crossing edge that connects a vertex in $S$ to a vertex in $V \\setminus S$ must belong to the Minimum Spanning Tree.\n- **Kruskal's Algorithm (Edge-centric)**:\n  - Sort all edges in non-decreasing order of weight in $O(E \\log E)$;\n  - Iterate through sorted edges, adding an edge to the MST if and only if it does not form a cycle;\n  - Cycle prevention using **Disjoint Set Union (DSU / Union-Find)** with path compression and union by rank, running in near-linear $O(E \\cdot \\alpha(V))$ time (where $\\alpha$ is the Inverse Ackermann function).\n- **Prim's Algorithm (Vertex-centric)**:\n  - Grow a single connected tree from an arbitrary root, greedily adding the cheapest crossing edge via a Min-Heap in $O((V + E) \\log V)$ time.",
      "examples": [
        {
          "target": "Kruskal's algorithm constructs a Minimum Spanning Tree by sorting edges and avoiding cycles via Disjoint Set Union (Union-Find) with path compression in O(E log E) time.",
          "reading": "Kruskal's algorithm constructs a Minimum Spanning Tree...",
          "translation": "Kruskal's algorithm constructs a Minimum Spanning Tree by sorting edges and avoiding cycles via Disjoint Set Union (Union-Find) with path compression in O(E log E) time."
        }
      ],
      "mnemonics": [
        "Kruskal: Sort edges + Union-Find (DSU)! Prim: Grow tree from root via Min-Heap! Cut Property guarantees optimal MST! V - 1 edges in total!"
      ],
      "culturalNotes": [
        "Minimum Spanning Trees are used by civil telecommunication engineers to lay fiber-optic cable networks and electrical power grids with minimum total cable cost."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which efficient data structure with path compression is utilized by Kruskal's algorithm to test for cycles in near-constant time?",
          "options": [
            "Binary Search Tree",
            "Hash Map only",
            "Circular Queue",
            "Disjoint Set Union"
          ],
          "answerIndex": 3,
          "explanation": "Disjoint Set Union (DSU / Union-Find)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "How many total edges are contained in any valid Spanning Tree spanning a connected graph with V vertices?",
          "options": [
            "Exactly V - 1 edges",
            "Max-Heapify in $O(\\log n)$",
            "Build-Max-Heap in $O(n)$",
            "Heap-Extract-Max in $O(\\log n)$"
          ],
          "answerIndex": 0,
          "explanation": "Exactly V - 1 edges."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"The cut property proves that the lightest edge crossing any partition cut of the graph vertices must belong to the global minimum spanning tree.\"",
          "options": [
            "Prim's algorithm requires negative weights.",
            "Union-Find operations take O(N^3) time.",
            "Spanning trees always contain multiple cycles.",
            "The cut property proves that the lightest edge crossing any partition cut of the graph vertices must belong to the global minimum spanning tree."
          ],
          "answerIndex": 3,
          "explanation": "Accurate MST analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What fundamental mathematical function, growing slower than any conceivable polynomial or logarithmic function, bounds the amortized complexity of DSU with path compression?",
          "options": [
            "The Exponential Function",
            "The Harmonic Series",
            "The Inverse Ackermann Function α",
            "The Factorial Function"
          ],
          "answerIndex": 2,
          "explanation": "The Inverse Ackermann Function α(V).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "CS110 Minimum Spanning Trees"
  },
  "cs110-u2-l4": {
    "id": "cs110-u2-l4",
    "unit": "cs110-u2",
    "level": "B2",
    "objective": "CS110 Shortest Path Algorithms: Dijkstra and Bellman-Ford (Dijkstra's greedy algorithm with min-heaps, Bellman-Ford edge relaxation, negative cycle detection, DAG shortest paths).",
    "presentation": {
      "explanation": "Single-Source Shortest Path Algorithms in Weighted Graphs:\n- **Dijkstra's Algorithm (Greedy)**:\n  - Solves single-source shortest paths on graphs with **non-negative edge weights** ($w(u, v) \\ge 0$).\n  - Maintains a set of settled vertices and a Min-Priority Queue of unsettled vertices.\n  - Time Complexity: $O((V + E) \\log V)$ using binary min-heaps, or $O(E + V \\log V)$ using Fibonacci heaps.\n- **Bellman-Ford Algorithm (Dynamic Programming / Edge Relaxation)**:\n  - Solves shortest paths on graphs with **negative edge weights**.\n  - Relaxes all $|E|$ edges $|V| - 1$ times.\n  - Time Complexity: $O(V \\cdot E)$.\n  - **Negative Cycle Detection**: A $|V|$-th relaxation pass that still reduces distances indicates the presence of an infinite negative weight cycle (used in financial arbitrage detection).",
      "examples": [
        {
          "target": "Dijkstra's algorithm computes single-source shortest paths in O((V + E) log V) time for non-negative edge weights, while Bellman-Ford handles negative weights and detects arbitrage cycles.",
          "reading": "Dijkstra's algorithm computes single-source shortest paths...",
          "translation": "Dijkstra's algorithm computes single-source shortest paths in O((V + E) log V) time for non-negative edge weights, while Bellman-Ford handles negative weights and detects arbitrage cycles."
        }
      ],
      "mnemonics": [
        "Dijkstra: Non-negative weights & Min-Heap O((V+E) log V)! Bellman-Ford: Relaxes |V|-1 times O(VE) & detects negative cycles!"
      ],
      "culturalNotes": [
        "The internet's Border Gateway Protocol (BGP) and Open Shortest Path First (OSPF) routing protocols rely on distributed implementations of Dijkstra and Bellman-Ford."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Why will standard Dijkstra's algorithm fail or produce incorrect shortest path results on certain graphs?",
          "options": [
            "When the graph contains negative edge weights",
            "When the graph is a tree",
            "When the graph has more than 100 vertices",
            "When the graph is directed"
          ],
          "answerIndex": 0,
          "explanation": "When the graph contains negative edge weights."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "How many total relaxation passes over all edges does the Bellman-Ford algorithm perform to guarantee shortest paths in a graph with V vertices?",
          "options": [
            "V - 1 passes",
            "Decision tree depth $\\ge \\log(n!) = \\Omega(n \\log n)$",
            "Adversary argument lower bound",
            "Information-theoretic bound"
          ],
          "answerIndex": 0,
          "explanation": "V - 1 passes."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"If a distance estimate can be strictly reduced during the V-th relaxation step of the Bellman-Ford algorithm, the graph contains an unreachable negative-weight cycle.\"",
          "options": [
            "Bellman-Ford operates in O(1) constant time.",
            "Dijkstra handles negative cycles seamlessly.",
            "If a distance estimate can be strictly reduced during the V-th relaxation step of the Bellman-Ford algorithm, the graph contains an unreachable negative-weight cycle.",
            "Shortest path algorithms are used only in video games."
          ],
          "answerIndex": 2,
          "explanation": "Accurate shortest path analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What practical financial market phenomenon can be identified by converting currency exchange rates to negative logarithms and executing Bellman-Ford for negative cycles?",
          "options": [
            "Stock market crashes only",
            "Currency Cross-Rate Arbitrage Opportunities",
            "Inflation rates",
            "Bond coupon payments"
          ],
          "answerIndex": 1,
          "explanation": "Currency Cross-Rate Arbitrage Opportunities.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "CS110 Shortest Path Algorithms"
  },
  "cs110-u2-l3": {
    "id": "cs110-u2-l3",
    "unit": "cs110-u2",
    "level": "B1",
    "objective": "CS110 Graph Theory Fundamentals: Adjacency Matrices, Adjacency Lists, BFS, and DFS (Graph representations, Breadth-First Search, Depth-First Search, topological sort, cycle detection).",
    "presentation": {
      "explanation": "Graph Representations and Graph Traversal Algorithms:\n- **Graph Representations**:\n  - **Adjacency Matrix**: $V \\times V$ boolean matrix. $O(1)$ edge query, but $O(V^2)$ spatial overhead (inefficient for sparse graphs).\n  - **Adjacency List**: Array of linked lists/vectors of size $V$. $O(V + E)$ optimal spatial efficiency for sparse graphs.\n- **Graph Traversals**:\n  - **Breadth-First Search (BFS)**: Uses a **Queue (FIFO)**; explores nodes layer by layer; finds shortest paths in unweighted graphs in $O(V + E)$ time.\n  - **Depth-First Search (DFS)**: Uses a **Stack (LIFO)** or recursion; traverses paths to their deepest descendants; computes discovery and finish timestamps.\n  - **Topological Sorting**: Linear ordering of vertices in a Directed Acyclic Graph (DAG) using post-order DFS in $O(V + E)$ time.\n  - **Cycle Detection**: Using 3-color vertex labeling (White = unvisited, Grey = in active stack, Black = completed).",
      "examples": [
        {
          "target": "Breadth-First Search traverses graphs level by level using a queue in O(V + E) time, identifying shortest paths in unweighted networks.",
          "reading": "Breadth-First Search traverses graphs level by level...",
          "translation": "Breadth-First Search traverses graphs level by level using a queue in O(V + E) time, identifying shortest paths in unweighted networks."
        }
      ],
      "mnemonics": [
        "BFS = Queue (FIFO) for Shortest Path! DFS = Stack / Recursion for Topological Sort! Adjacency List = O(V + E) memory!"
      ],
      "culturalNotes": [
        "Web search engines like Google use distributed BFS web crawlers to map billions of hyperlinked pages across the World Wide Web."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which graph traversal algorithm explores vertices layer-by-layer using a FIFO Queue to find shortest paths in unweighted graphs?",
          "options": [
            "Breadth-First Search",
            "Depth-First Search",
            "Binary Search",
            "Linear Search"
          ],
          "answerIndex": 0,
          "explanation": "Breadth-First Search (BFS)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What is the optimal spatial complexity of storing a sparse graph with V vertices and E edges using an Adjacency List representation?",
          "options": [
            "$O(n \\log n)$",
            "Counting Sort with $O(n + k)$",
            "Radix Sort with $O(d(n + k))$",
            "Bucket Sort with uniform distribution"
          ],
          "answerIndex": 0,
          "explanation": "O(V + E)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"Topological sorting orders dependencies in a Directed Acyclic Graph such that every directed edge u -> v places vertex u before vertex v.\"",
          "options": [
            "Topological sort is possible on cyclic graphs.",
            "Topological sorting orders dependencies in a Directed Acyclic Graph such that every directed edge u -> v places vertex u before vertex v.",
            "BFS uses a stack data structure.",
            "Adjacency matrices require O(1) total memory."
          ],
          "answerIndex": 1,
          "explanation": "Accurate graph algorithm translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What state condition in DFS indicates the presence of a back-edge and hence a directed cycle in a graph?",
          "options": [
            "Encountering a Grey vertex",
            "Encountering a Black vertex",
            "Encountering a leaf node",
            "Encountering a White vertex"
          ],
          "answerIndex": 0,
          "explanation": "Encountering a Grey vertex.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "CS110 Graph Theory Fundamentals"
  },
  "cs110-u2-l2": {
    "id": "cs110-u2-l2",
    "unit": "cs110-u2",
    "level": "B1",
    "objective": "CS110 Binary Heaps and Priority Queues: Min-Heaps, Max-Heaps, and Heapsort (Binary heaps, array-backed complete binary trees, heapify, sift-up, sift-down, Heapsort in O(N log N)).",
    "presentation": {
      "explanation": "Binary Heaps and Priority Queues:\n- **Complete Binary Tree Property**: A binary tree where all levels are fully filled except possibly the bottom level, filled from left to right.\n- **Array Representation**: Stored in a compact 1D array without pointers:\n  - For node at index $i$ (0-indexed): Left child is $2i+1$, Right child is $2i+2$, Parent is $\\lfloor(i-1)/2\\rfloor$.\n- **Min-Heap Property**: $A[parent(i)] \\le A[i]$. The minimum element is always at the root $A[0]$ in $O(1)$ time.\n- Operations:\n  - `insert(x)`: Append to end of array and perform `sift-up` in $O(\\log N)$.\n  - `extract-min()`: Swap root with last element, remove last, and perform `sift-down` in $O(\\log N)$.\n  - **`build_heap` (Heapify)**: Bottom-up construction in $O(N)$ linear time.\n  - **Heapsort**: In-place $O(N \\log N)$ sorting with $O(1)$ auxiliary space.",
      "examples": [
        {
          "target": "Binary heaps implement Priority Queues using array indexing where insert and extract-min operate in O(log N) time and building a heap takes O(N).",
          "reading": "Binary heaps implement Priority Queues...",
          "translation": "Binary heaps implement Priority Queues using array indexing where insert and extract-min operate in O(log N) time and building a heap takes O(N)."
        }
      ],
      "mnemonics": [
        "Binary Heap: Array index 2i+1 (left) and 2i+2 (right)! Extract-min in O(log N)! Build-heap in O(N) linear time! In-place Heapsort!"
      ],
      "culturalNotes": [
        "Dijkstra's shortest path algorithm and Prim's minimum spanning tree algorithm achieve their optimal runtimes when implemented with binary heaps or Fibonacci heaps."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What is the time complexity of converting an unsorted array of N elements into a valid Binary Heap using the bottom-up `build_heap` operation?",
          "options": [
            "O",
            "$O(n \\log n)$",
            "$\\Omega(n)$",
            "O(N) linear time"
          ],
          "answerIndex": 3,
          "explanation": "O(N) linear time."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In a 0-indexed array representing a complete binary heap, what is the array index of the left child of a node located at index i?",
          "options": [
            "2i + 1",
            "Lomuto partition scheme",
            "Hoare partition scheme",
            "Median-of-three pivot"
          ],
          "answerIndex": 0,
          "explanation": "2i + 1."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"Heapsort achieves O(N log N) worst-case time complexity while sorting entirely in-place with O(1) auxiliary memory.\"",
          "options": [
            "Heapsort achieves O(N log N) worst-case time complexity while sorting entirely in-place with O(1) auxiliary memory.",
            "Binary heaps cannot be stored in arrays.",
            "Extract-min takes O(N) time in a binary heap.",
            "Heapsort requires O(N^2) auxiliary memory."
          ],
          "answerIndex": 0,
          "explanation": "Accurate heapsort analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What classic network graph routing algorithm relies on priority queues and min-heaps to efficiently find the shortest path from a source node?",
          "options": [
            "K-Means Clustering",
            "Linear Regression",
            "PageRank only",
            "Dijkstra's Algorithm"
          ],
          "answerIndex": 3,
          "explanation": "Dijkstra's Algorithm.",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "CS110 Binary Heaps and Priority Queues"
  },
  "cs110-u2-l1": {
    "id": "cs110-u2-l1",
    "unit": "cs110-u2",
    "level": "Core",
    "objective": "Analyze randomized quicksort expected runtime and prove the linear time bound of median-of-medians selection.",
    "presentation": {
      "explanation": "In CS110 Unit 2, we advance from deterministic divide-and-conquer to randomized algorithms and selection theory:\n\n1. Randomized Quicksort Expected Time Proof:\n   - Let $X_{ij}$ be the indicator random variable that element $z_i$ and $z_j$ are compared.\n   - $E[X_{ij}] = P(z_i \\text{ is compared to } z_j) = \\frac{2}{j - i + 1}$.\n   - Total expected comparisons: $E[X] = \\sum_{i=1}^{n-1} \\sum_{j=i+1}^n \\frac{2}{j - i + 1} = O(n \\ln n)$.\n   - Independent of input ordering, defeating worst-case $O(n^2)$ adversarial inputs!\n\n2. Deterministic Linear Time Selection (Median-of-Medians / BFPRT):\n   - Divide array into $\\lfloor n/5 \\rfloor$ groups of 5.\n   - Find median of each group in $O(1)$ time, then recursively find median-of-medians $x$.\n   - At least $3(\\lceil \\frac{1}{2} \\lceil n/5 \\rceil \\rceil - 2) \\ge \\frac{3n}{10} - 6$ elements are strictly less than $x$.\n   - Recurrence: $T(n) \\le T(n/5) + T(7n/10) + O(n) \\implies T(n) = O(n)$ deterministic!",
      "examples": [
        {
          "target": "Selection Recurrence: T(n) = T(n/5) + T(7n/10) + cn. Since 1/5 + 7/10 = 9/10 < 1, the sum of work strictly decreases geometrically -> T(n) = O(n).",
          "reading": "BFPRT Linear Selection Bound",
          "translation": "Proof of deterministic O(n) order statistics."
        }
      ],
      "mnemonics": [
        "MEDIAN-OF-MEDIANS: Group by 5s -> 1/5 + 7/10 = 9/10 < 1 guarantees O(n) linearity!"
      ],
      "culturalNotes": [
        "Invented in 1973 by Blum, Floyd, Pratt, Rivest, and Tarjan (BFPRT), five Turing Award legends."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Why is the recurrence T(n) = T(n/5) + T(7n/10) + O(n) guaranteed to solve to O(n)?",
          "options": [
            "Because the sum of fractional subproblem sizes (1/5 + 7/10 = 9/10) is strictly less than 1",
            "Because n is large",
            "Because Master Theorem Case 1 applies",
            "Because it has no base case"
          ],
          "answerIndex": 0,
          "explanation": "When the sum of recursive branching fractions is < 1, total work forms a decaying geometric series bounded by O(n)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What is the expected number of comparisons performed by Randomized Quicksort on an array of size n?",
          "options": [
            "2n ln n + O(n) = Theta",
            "$O(n \\log n)$ guaranteed worst-case",
            "$O(n^2)$ worst-case",
            "$O(n)$ best-case"
          ],
          "answerIndex": 0,
          "explanation": "Randomized pivot selection guarantees Theta(n log n) expected comparisons regardless of input."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "What is the indicator random variable technique used to prove Randomized Quicksort runtime?",
          "options": [
            "Using an empirical clock benchmark",
            "Testing random numbers in a loop",
            "Counting memory allocations",
            "Expressing total runtime as sum of indicator variables for pairwise element comparisons"
          ],
          "answerIndex": 3,
          "explanation": "Indicator variables X_ij for pairwise comparisons provide the rigorous formal proof.",
          "type": "multiple-choice"
        },
        {
          "prompt": "If we grouped elements by 3s instead of 5s in BFPRT selection, what recurrence would arise?",
          "options": [
            "T(n) = O",
            "T(n) = Theta",
            "T(n) = T(n/3) + T(2n/3) + O(n) where 1/3 + 2/3 = 1 -> solving to O(n log n), losing linear guarantee!",
            "$O(n \\log n)$"
          ],
          "answerIndex": 2,
          "explanation": "Grouping by 3s yields branching fractions summing to 1, degrading runtime to O(n log n).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 1102, Lesson 4: Foundational & Structural Mastery (Selection Recurrence: T(n) = T)"
  },
  "cs110-u4-l5": {
    "id": "cs110-u4-l5",
    "unit": "cs110-u4",
    "level": "Advanced",
    "objective": "Unit 4 Capstone: Optimization Theory, Dynamic Programming & Network Flow Synthesis (Integrated algorithmic optimization: formulating Bellman dynamic programs, matching via Max-Flow Min-Cut, and greedy matroid scheduling).",
    "presentation": {
      "explanation": "Unit 4 Capstone Synthesis: The Optimization Hierarchy:\n- Dynamic Programming: Exact optimal substructure on state DAGs ($O(nW)$);\n- Greedy Matroids: Local choices guarantee global optimum on hereditary exchange structures;\n- Network Flow Duality: Primal-dual certificate verification via Max-Flow Min-Cut ($O(V E^2)$).",
      "examples": [
        {
          "target": "Network flow duality and dynamic programming represent foundational optimization algorithms in computer science.",
          "reading": "Network flow duality...",
          "translation": "Network flow duality and dynamic programming represent foundational optimization algorithms in computer science."
        }
      ],
      "mnemonics": [
        "Optimization Synthesis! DP for DAGs! Greedy for Matroids! Max-Flow Min-Cut for Network Duality! Complete optimization mastery!"
      ],
      "culturalNotes": [
        "These algorithmic optimization patterns power modern airline crew scheduling, telecommunication packet routing, and supply chain logistics."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which optimization framework provides exact dual certificates proving that a flow is maximal by exhibiting a cut of equal capacity?",
          "options": [
            "The Max-Flow Min-Cut Theorem",
            "Master Theorem",
            "Splay Tree Rotations",
            "Akra-Bazzi Method"
          ],
          "answerIndex": 0,
          "explanation": "The Max-Flow Min-Cut Theorem."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "What algorithmic paradigm builds a global optimal solution through a sequence of locally optimal choices on matroid structures?",
          "options": [
            "Greedy Algorithm",
            "Simulated Annealing",
            "Dynamic Programming",
            "Breadth-First Search"
          ],
          "answerIndex": 0,
          "explanation": "Greedy Algorithm (Rado-Edmonds)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"The algorithmic optimization synthesis unifies dynamic programming recurrences, greedy matroid properties, and primal-dual network flow theorems into a cohesive computational toolkit.\"",
          "options": [
            "Optimization algorithms cannot run on digital computers.",
            "The algorithmic optimization synthesis unifies dynamic programming recurrences, greedy matroid properties, and primal-dual network flow theorems into a cohesive computational toolkit.",
            "Network flow only works on graphs with 2 nodes.",
            "Dynamic programming is strictly slower than exhaustive brute force."
          ],
          "answerIndex": 1,
          "explanation": "Accurate Optimization synthesis analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What is the master runtime of the Edmonds-Karp maximum flow algorithm on a graph with V vertices and E edges?",
          "options": [
            "O",
            "$O(n \\log n)$",
            "$\\Omega(n)$",
            "$\\Theta(1)$"
          ],
          "answerIndex": 0,
          "explanation": "O(V * E^2).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "Unit 4 Capstone"
  },
  "cs110-u5-l5": {
    "id": "cs110-u5-l5",
    "unit": "cs110-u5",
    "level": "Advanced",
    "objective": "CS110 Master Capstone: The P vs NP Frontier, Approximation Schemes & Algorithmic Limits (Final comprehensive synthesis of computational tractability: polynomial reductions, approximation guarantees, randomized algorithms, and the Millennium Prize Problem).",
    "presentation": {
      "explanation": "CS110 Master Capstone: The Grand Unified Theory of Algorithmic Complexity:\n- The Tractability Landscape:\n  - P: Efficiently solvable in polynomial time $O(n^k)$;\n  - NP: Efficiently verifiable in polynomial time given a certificate;\n  - NP-Complete: The hardest problems in NP (Cook-Levin Theorem);\n- Coping with Intractability:\n  - 1. Pseudo-Polynomial DP: When input values are bounded ($O(nW)$ for 0/1 Knapsack);\n  - 2. Approximation Algorithms: Guaranteeing solution within factor $\\alpha$ of OPT (Christofides 3/2-TSP, Maximal Matching 2-Vertex Cover);\n  - 3. FPTAS: Scaled discretization yielding $(1-\\epsilon)\\text{OPT}$ in $O(n^3/\\epsilon)$;\n  - 4. Randomized Algorithms: Las Vegas (QuickSort) and Monte Carlo (Karger-Stein $O(n^2 \\log n)$ min-cut).",
      "examples": [
        {
          "target": "CS110 completes the mastery of asymptotic complexity, balanced search trees, dynamic programming, and computational complexity limits.",
          "reading": "CS110 completes...",
          "translation": "CS110 completes the mastery of asymptotic complexity, balanced search trees, dynamic programming, and computational complexity limits."
        }
      ],
      "mnemonics": [
        "CS110 Master Capstone! P vs NP! Cook-Levin NP-Completeness! Approximation & FPTAS! Randomized Las Vegas & Monte Carlo! Complete University Computer Science Mastery!"
      ],
      "culturalNotes": [
        "The Clay Mathematics Institute established P vs NP as one of the seven Millennium Prize Problems in 2000, offering a $1,000,000 prize for its formal resolution."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "What complete curriculum does mastering CS110 represent?",
          "options": [
            "Complete University-Level Mastery of Advanced Algorithms and Data Structures",
            "Introductory coding only",
            "Basic HTML formatting",
            "Elementary math"
          ],
          "answerIndex": 0,
          "explanation": "Complete University-Level Mastery of Advanced Algorithms and Data Structures (25 Sessions)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Which of the following is an NP-Complete problem established in Karp's 21 problems?",
          "options": [
            "3-SAT, CLIQUE, and VERTEX-COVER",
            "Class P: Polynomial time solvable",
            "Class NP: Polynomial time verifiable",
            "NP-Complete via Karp polynomial reduction"
          ],
          "answerIndex": 0,
          "explanation": "3-SAT, CLIQUE, and VERTEX-COVER."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "prompt": "Analyze the core theoretical principle: \"The CS110 capstone achieves full synthesis of asymptotic analysis, amortized data structures, dynamic programming optimization, and computational complexity theory.\"",
          "options": [
            "The CS110 capstone achieves full synthesis of asymptotic analysis, amortized data structures, dynamic programming optimization, and computational complexity theory.",
            "Computer science is only about assembling hardware cables.",
            "P vs NP was solved by a high school student in 1800.",
            "All algorithms must run in O(n!) time."
          ],
          "answerIndex": 0,
          "explanation": "Accurate CS110 Capstone analysis translation.",
          "type": "multiple-choice"
        },
        {
          "prompt": "What approximation ratio is achieved by the Christofides-Serdyukov algorithm for the Metric Traveling Salesperson Problem?",
          "options": [
            "2.0",
            "log",
            "O",
            "3/2"
          ],
          "answerIndex": 3,
          "explanation": "3/2 (1.5-approximation).",
          "type": "multiple-choice"
        }
      ],
      "passThreshold": 0.8
    },
    "title": "CS110 Master Capstone"
  }
};
  var CURRICULUM = { id: 'cs110', name: 'CS 110: Algorithms & Data Structures', units: UNITS, lessons: LESSONS };
  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};
  global.FEARN_CURRICULA['cs110'] = CURRICULUM;
  if (typeof module !== 'undefined' && module.exports) module.exports = CURRICULUM;
})(typeof window !== 'undefined' ? window : global);
