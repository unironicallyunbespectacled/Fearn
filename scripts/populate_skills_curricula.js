const fs = require('fs');
const path = require('path');
const { saveCurriculum } = require('./reauthor_curricula');

const SKILL_DOMAINS = {
  chess: {
    mnemonics: [
      "Knights on the rim are dim — knights are most potent in the center controlling up to 8 squares.",
      "Control the center (e4, d4, e5, d5), develop pieces with tempo, and castle early for king safety.",
      "Rooks belong on open files and on the 7th rank where they terrorize opponent pawns.",
      "When evaluating tactical combinations, look for Checks, Captures, and Threats (CCT).",
      "Opposite-colored bishops favor the attacker in the middlegame, but favor the defender in endgames.",
      "A pawn majority on the queenside can create an outside passed pawn that distracts the enemy king.",
      "Never trade your active bishop for a passive knight unless there is a clear strategic payoff.",
      "In pawn endgames, king opposition (direct, distant, and diagonal) decides pawn promotion races."
    ],
    cultural: [
      "Chess originated in 6th-century India as 'Chaturanga', evolving through Persia ('Shatranj') into medieval Europe.",
      "The romantic era of chess (Morphy, Anderssen) prioritized daring piece sacrifices and tactical king hunts.",
      "Wilhelm Steinitz and Aron Nimzowitsch founded modern positional chess and hypermodern opening theory.",
      "The Soviet Chess School dominated the 20th century through systematic calculation and rigorous physical training.",
      "FIDE grandmaster titles represent the pinnacle of competitive intellectual mastery in international sport."
    ]
  },
  morse: {
    mnemonics: [
      "E is one dot (•), T is one dash (—); the most frequent English letters have the shortest Morse encodings.",
      "SOS is ••• ——— ••• (3 dots, 3 dashes, 3 dots), the universal maritime distress signal.",
      "Rhythm mnemonic: Paris standard sets 1 unit dot, 3 units dash, 1 unit intra-char, 3 units letter space.",
      "Farnsworth timing separates characters at high speed while giving longer inter-word gaps for cognitive parsing.",
      "D is dash-dot-dot (— • •), B is dash-dot-dot-dot (— • • •), mirroring binary tree hierarchy."
    ],
    cultural: [
      "Samuel Morse and Alfred Vail revolutionized global telecommunications in 1844 with 'What hath God wrought'.",
      "CW (Continuous Wave) Morse code remains essential for amateur radio operators during emergency disaster networks.",
      "The Titanic disaster of 1912 established mandatory 24-hour maritime radio watchkeeping worldwide.",
      "Aviation non-directional beacons (NDBs) still transmit their 2-letter station identifiers in Morse code.",
      "High-speed Morse telegraphy competitions celebrate precision auditory decoding at over 40 words per minute."
    ]
  },
  mentalmath: {
    mnemonics: [
      "Vedic squaring: For numbers ending in 5, multiply the tens digit by (n+1) and append 25 (e.g., 35² = 3×4=12 -> 1225).",
      "Multiplying by 11: Add adjacent digits and insert in between (e.g., 35 × 11 = 3 [3+5] 5 = 385).",
      "Difference of squares: a² - b² = (a-b)(a+b); turn 47 × 53 into (50-3)(50+3) = 2500 - 9 = 2491.",
      "Cross-multiplication (Criss-Cross): Vertically and crosswise resolves 2-digit by 2-digit products in one mental line.",
      "Complement method: For numbers near 100, calculate deficits from base 100 and cross-subtract."
    ],
    cultural: [
      "Trachtenberg developed his rapid mental arithmetic system while imprisoned during WWII to maintain mental resilience.",
      "The abacus (Soroban in Japan) trains mental imagery (Anzan), enabling prodigies to calculate faster than calculators.",
      "Indian Vedic Mathematics codifies 16 sutras that solve complex polynomial and arithmetic operations intuitively.",
      "The Mental Calculation World Cup tests calendar day calculation, prime factorization, and root extraction.",
      "Euler and Gauss were famous for their extraordinary mental calculating prowess and numerical intuition."
    ]
  },
  typing: {
    mnemonics: [
      "Home row anchors: Index fingers rest on F and J (tactile raised bumps); ASDF on left, JKL; on right.",
      "Rhythm over raw speed: Smooth, metronomic keystrokes prevent muscle fatigue and typographical stutter.",
      "Reach upwards for QWERTY numbers, keeping wrists hovering in neutral posture without resting on desk edges.",
      "Spacebar with the thumb of your non-dominant hand; keep your gaze strictly locked on the destination text.",
      "Rolling finger motions for common n-grams (e.g., 'the', 'ing', 'tion') unlock speeds beyond 100 WPM."
    ],
    cultural: [
      "Christopher Latham Sholes invented the QWERTY layout in 1873 to prevent mechanical typewriter jams.",
      "August Dvorak designed the Dvorak Simplified Keyboard in 1936 to minimize finger travel and strain.",
      "The ergonomics movement in computer interfaces revolutionized mechanical switches and split ortholinear keyboards.",
      "Touch-typing speed contests (TypeRacer, Monkeytype) have created a global subculture of competitive keyboarding.",
      "Keyboard mastery is a primary cognitive amplifier for software engineering, writing, and digital productivity."
    ]
  },
  scrabble: {
    mnemonics: [
      "Two-letter words (QI, ZA, JO, XI, XU, KA) are the tactical lifeblood of tight board play and hook scoring.",
      "Save the blank tile and S for high-value 7-letter 'Bingo' plays that earn the 50-point bonus.",
      "Vowel-to-consonant balance: Maintain roughly 3 vowels and 4 consonants on your rack for maximum flexibility.",
      "Premium square defense: Never leave a Triple Word Score open for your opponent to exploit with a high-tile letter.",
      "Anagramming prefixes (RE-, UN-, IN-) and suffixes (-ING, -ED, -TION) unlocks 50-point bingos from messy racks."
    ],
    cultural: [
      "Alfred Mosher Butts invented Scrabble during the Great Depression by analyzing letter frequencies on the front page of The New York Times.",
      "The Collins Scrabble Words (CSW) and NASPA Word List serve as the definitive arbiters in world championship tournaments.",
      "International Scrabble tournaments attract elite linguists, anagram champions, and strategic memory athletes.",
      "Duplicate Scrabble, popular in Francophone countries, has all players compete with identical tiles against an optimal board.",
      "Tile tracking and endgame equity calculation turn top-level Scrabble into a rigorous mathematical contest."
    ]
  },
  songwriting: {
    mnemonics: [
      "Verse-Chorus-Verse-Chorus-Bridge-Chorus (ABABCB) is the golden architecture of modern emotional resonance.",
      "The chorus is your emotional thesis; make your melodic hook rhythmically distinct and dynamically elevated.",
      "Prosody: Align lyrical stressed syllables with the strong musical beats of the bar (e.g., beats 1 and 3 in 4/4).",
      "The Bridge provides harmonic departure and emotional perspective shift before the final triumphant chorus climax.",
      "Sensory details (sight, sound, touch, scent) hook the listener's subconscious faster than abstract emotions."
    ],
    cultural: [
      "Tin Pan Alley and the Brill Building established the craft of professional collaborative songwriting in America.",
      "Folk traditions and the Great American Songbook showcase the timeless power of storytelling and modal harmony.",
      "Motown's songwriting teams (Holland-Dozier-Holland) revolutionized pop production with irresistible rhythm and melodic hooks.",
      "Nashville's 'three chords and the truth' philosophy emphasizes authentic vulnerability and narrative punch.",
      "Global musical fusions blend traditional world rhythms with contemporary production to create new sonic landscapes."
    ]
  }
};

Object.keys(SKILL_DOMAINS).forEach(skill => {
  const filePath = path.resolve(__dirname, '../data/curricula', skill + '.js');
  global.FEARN_CURRICULA = {};
  require(filePath);
  const curr = global.FEARN_CURRICULA[skill];
  const domain = SKILL_DOMAINS[skill];

  let filled = 0;
  Object.keys(curr.lessons || {}).forEach((lid, idx) => {
    const les = curr.lessons[lid];
    if (!les.presentation.mnemonics || les.presentation.mnemonics.length === 0) {
      les.presentation.mnemonics = [domain.mnemonics[idx % domain.mnemonics.length]];
      filled++;
    }
    if (!les.presentation.culturalNotes || les.presentation.culturalNotes.length === 0) {
      les.presentation.culturalNotes = [domain.cultural[idx % domain.cultural.length]];
    }
  });

  saveCurriculum(skill, curr);
  console.log('Skill ' + skill + ': populated ' + filled + ' lessons with authentic mnemonics and cultural notes.');
});
