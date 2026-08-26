# FEARN: The Whole-Self Sovereign School
## Master Architectural Specification & System Encyclopedia

---

### 1. Executive Summary & Identity
FEARN is a local-first, zero-dependency sovereign learning environment designed to take a learner from foundational literacy to advanced mastery across 29 academic, linguistic, cognitive, and physical disciplines.

Built with an obsidian liquid-glass aesthetic, FEARN operates with 100% functionality in offline environments (such as Airplane Mode during transcontinental flights) without requiring external servers, third-party authentication, or cloud dependencies.

---

### 2. Core System Architecture

1. **Engine Spine (`engine.js`)**:
   - Spaced Repetition System (SuperMemo SM-2 interval scheduler).
   - Universal streak bookkeeping (`FEARN.streak.log`).
   - Journal telemetry and activity timeline recording.
   - Modular registration contracts (`FEARN.registerModule`).
2. **Offline PWA Flight Suite (`sw.js` & `focus-noise.js`)**:
   - Pre-caches 105 static application assets into `fearn-v3.3-live-sync-flight-suite`.
   - Web Audio API real-time algorithmic acoustic brown-noise synthesizer for cabin engine sound cancellation.
3. **Adaptive 5-Theme Environment Engine**:
   - Dark Glass (`🌌 Dark`)
   - Night Flight (`✈️ Night Flight`)
   - Daylight (`☀️ Daylight`)
   - Sepia (`🌘 Sepia`)
   - High Contrast (`👁️ High Contrast`)
4. **Sovereign Vault Synchronization**:
   - 1-Click JSON backup export and import for seamless cross-device progress transfer across PC, iPad, and iPhone.

---

### 3. Curriculum Roster (3,740 Verified Lessons)

| Subject | Type | Lessons | Pedagogical Depth |
| :--- | :--- | :--- | :--- |
| **Spanish** | Language | 170 | A1–C2 CEFR Native Fluency, Subjunctive, Advanced Idioms |
| **Japanese** | Language | 170 | N5–N1 JLPT Kanji, Grammar, Keigo, Cultural Nuance |
| **Mandarin Chinese** | Language | 170 | HSK 1–6 Hanzi, Pinyin, Tonal Nuance, Idiomatic Chengyu |
| **French** | Language | 170 | A1–C2 DALF Native Literary Fluency, Passé Simple |
| **German** | Language | 170 | A1–C2 Konjunktiv II, Complex Compounds, Formal Syntax |
| **Arabic (MSA)** | Language | 170 | Classical I'rab, Root Morphology, Formal Media Arabic |
| **Russian** | Language | 170 | TRKI 1–4 Six Grammatical Cases, Verbal Aspects, Motion Verbs |
| **Brazilian Portuguese** | Language | 170 | Celpe-Bras Fluency, Brazilian Phonetics, Subjunctive |
| **Korean** | Language | 170 | TOPIK I–VI Hangul, Honorific Speech Levels, Connectives |
| **Hindi** | Language | 170 | Devenagari Script, Ergative Postpositions, Literary Prose |
| **Urdu** | Language | 170 | Nastaliq Phonetics, Formal Insha, Poetry & Ghazal Formats |
| **Cantonese** | Language | 170 | Jyutping 6-Tone System, Colloquial Particles, Spoken Cantonese |
| **Turkish** | Language | 170 | Agglutinative Morphology, Vowel Harmony, TYS C2 |
| **Vietnamese** | Language | 170 | Northern/Southern Tonal Diacritics, Classifiers, Reduplication |
| **Amharic** | Language | 170 | Ge'ez Fidel Abugida, Non-concatenative Morphology |
| **Swahili** | Language | 170 | Noun Class Agreement (M-Wa, Ki-Vi), Verb Agglutination |
| **Ukrainian** | Language | 170 | Cyrillic Script, 7 Noun Cases, Authentic Colloquial Idioms |
| **Romanian** | Language | 170 | Definite Enclitic Articles, Subjunctive, Balkan Romance |
| **English** | Language | 170 | C2 Academic Rhetoric, Advanced Etymology, Inversion |
| **Argentine Spanish** | Language | 170 | Voseo Conjugations, Lunfardo Idioms, Rioplatense Phonetics |
| **Chess Strategy** | Skill | 50 | Tactical Solving, Positional Master Play, Interactive Click-to-Move |
| **Morse Code (CW)** | Skill | 50 | Timing Ratios, Farnsworth Method, Audio Keying to 25+ WPM |
| **Typing Speed** | Skill | 45 | Home Row Ergonomics, Punctuation Mastery, Speed to 120+ WPM |
| **Mental Math** | Skill | 40 | Trachtenberg System, Vedic Math, Rapid Estimations |
| **Scrabble Lexicon** | Skill | 40 | Tournament 2/3-Letter Stems, High-Probability Bingos, Hooks |
| **Songwriting** | Skill | 40 | Modal Chord Progressions, Prosody, Rhyme Schemes, Form |
| **CS110** | University | 25 | Algorithms & Data Structures, Big-O Analysis, Graph Search |
| **B110** | University | 25 | Market Dynamics, Game Theory, Behavioral Economics |
| **B111** | University | 25 | Financial Modeling, DCF Valuation, LBO Structures |
| **Biomechanics Hub** | Fitness | Full | Large Gym, Small Gym, Open Space, Small Room |
| **Total** | **All 29 Tracks** | **3,740** | **100% Zero-Blind-Spot Quality Gate Passed** |

---

### 4. Interactive UX & Tactical Innovations
- **Spider-Web Constellation**: Radiating SVG vector network with central holographic emblem and 30 active subject nodes.
- **Decoupled Command Center (`command-palette.js`)**: Keyboard shortcut (`Ctrl+K` / `Cmd+K`) and topbar `🔍 Find` button.
- **3D SRS Flashcard Review Deck (`srs-deck.js`)**: Smooth 3D card flip with SuperMemo rating buttons.
- **Smart Click-to-Move Chessboard (`modules/skills/chess.js`)**: Real-time square highlighting and notation translation.
- **Cultural Capitals World Clock (`world-clock.js`)**: Live timekeeping across 20 global capitals.
