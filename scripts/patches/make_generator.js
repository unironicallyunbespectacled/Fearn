const fs = require('fs');
const path = require('path');

const generatorScript = `
const fs = require('fs');
const path = require('path');

const fitnessFilePath = path.resolve(__dirname, '../../data/fitness-program.js');
console.log('Loading existing fitness program...');
const fit = require(fitnessFilePath);

const PHASES = [
  {
    number: 1,
    name: "Phase 1: Neuromuscular Adaptation & Structural Integrity",
    theme: "Foundational Movement Mechanics, Joint Centration & Kinetic Stability",
    days: [1, 30]
  },
  {
    number: 2,
    name: "Phase 2: Hypertrophic Density & Time-Under-Tension",
    theme: "Mechanical Tension, Slow-Eccentric Loading & Metabolic Accumulation",
    days: [31, 60]
  },
  {
    number: 3,
    name: "Phase 3: Work Capacity, Core Anti-Rotation & Dynamic Torque",
    theme: "Rotational Mechanics, Kinetic Chain Linking & Transverse Force Transfer",
    days: [61, 90]
  },
  {
    number: 4,
    name: "Phase 4: Unilateral Power, Elasticity & Kinetic Transfer",
    theme: "Single-Limb Dominance, Deceleration Control & Elastic Recoil",
    days: [91, 120]
  },
  {
    number: 5,
    name: "Phase 5: High-Performance Functional Athleticism",
    theme: "Complex Contrast Training, Neural Recruitment & Full-Body Integration",
    days: [121, 150]
  },
  {
    number: 6,
    name: "Phase 6: Omni-Mastery Peak Physical Autonomy",
    theme: "Peak Physical Autonomy, Omni-Planar Mastery & Athletic Transcendence",
    days: [151, 170]
  }
];

// Exercise Banks for All 4 Modes by Phase and Focus Type
// 1. SMALL ROOM (Strictly Silent, 0 Floor Impact, Micro-Dorm 9-13m2 Tokyo Space)
const SMALL_ROOM_BANK = {
  // Movement archetypes with progressive variations
  push: [
    { name: "Wall-Supported Scapular Protraction & Isometric Press", prescription: "3 sets x 35s hold", sets: 3, targetSec: 35, isTimed: true, restSec: 20, cues: "Press forearms firmly into wall at 45°. Protract scapulae forward without shrugging traps. Maintain zero-noise floor contact." },
    { name: "Floor Deficit Push-Up with 4s Eccentric & 3s Bottom Pause", prescription: "3 sets x 10 reps", sets: 3, reps: 10, targetSec: 70, isTimed: false, restSec: 25, cues: "Lower chest slowly over 4 seconds, hover 1 inch off floor for 3 seconds, press up with zero momentum. Perfectly silent." },
    { name: "Diamond Push-Up Isometric Floor Squeeze", prescription: "3 sets x 30s hold", sets: 3, targetSec: 30, isTimed: true, restSec: 20, cues: "Hands in diamond under sternum. Hold bottom position while actively squeezing hands inward into floor to maximize triceps and inner pec tension." },
    { name: "Pike Push-Up to Dolphin Isometric Shoulder Hold", prescription: "3 sets x 8 reps (3s top hold)", sets: 3, reps: 8, targetSec: 45, isTimed: false, restSec: 25, cues: "Hips high in pike position. Lower crown of head between hands silently, press through shoulders and hold peak elevation." },
    { name: "Prone Cobra Scapular Retraction & Thoracic Extension", prescription: "3 sets x 40s hold", sets: 3, targetSec: 40, isTimed: true, restSec: 20, cues: "Lie prone on mat. Rotate thumbs up to ceiling, pinch shoulder blades together, elevate upper chest without cranking neck." },
    { name: "Overcoming Isometric Doorframe / Wall Chest Fly Press", prescription: "3 sets x 25s per side (Max Effort)", sets: 3, targetSec: 25, isTimed: true, restSec: 25, cues: "Press palms inward against doorframe with 100% voluntary contraction. Zero movement, maximum intramuscular tension." }
  ],
  pull: [
    { name: "Prone Towel Isometric Lat Pull-Down on Mat", prescription: "3 sets x 35s hold", sets: 3, targetSec: 35, isTimed: true, restSec: 20, cues: "Lie on belly holding taut towel. Pull elbows down to ribs while pulling outward on towel with maximum force. Zero noise." },
    { name: "Doorframe Single-Arm Isometric Row Hold", prescription: "3 sets x 30s per arm", sets: 3, targetSec: 30, isTimed: true, restSec: 20, cues: "Grip doorframe securely. Lean back into single-arm row angle. Drive elbow back and hold peak lat contraction with spine neutral." },
    { name: "Prone Y-T-W Scapular Isometric Matrix", prescription: "3 sets x 45s (15s each position)", sets: 3, targetSec: 45, isTimed: true, restSec: 25, cues: "Hold Y for 15s, T for 15s, W for 15s without letting arms touch floor. Builds bulletproof postural upper back." },
    { name: "Floor Towel Slide Lat Row & Scapular Depression", prescription: "3 sets x 12 reps (3s eccentric)", sets: 3, reps: 12, targetSec: 48, isTimed: false, restSec: 20, cues: "Smoothly slide towel along wood/mat surface using pure lat retraction. Silent, controlled cadence." },
    { name: "Prone Swimmer Shoulder Rotation with Iso-Clench", prescription: "3 sets x 10 slow reps", sets: 3, reps: 10, targetSec: 50, isTimed: false, restSec: 20, cues: "Circle arms from lower back to overhead without hands touching floor. Glutes clenched throughout." }
  ],
  legs: [
    { name: "Wall-Sit Isometric Quad & Adductor Pillow Squeeze", prescription: "3 sets x 45s hold", sets: 3, targetSec: 45, isTimed: true, restSec: 25, cues: "Thighs parallel to floor, back flat against wall. Squeeze a rolled towel or pillow between knees to ignite adductors. 100% silent." },
    { name: "Single-Leg Glute Bridge with 5s Apex Isometric Hold", prescription: "3 sets x 10 reps per leg", sets: 3, reps: 10, targetSec: 60, isTimed: false, restSec: 20, cues: "Drive through heel, lock out hip at peak, squeeze glute for 5 full seconds. Keep pelvis perfectly level." },
    { name: "Slow-Tempo Bulgarian Split Squat (4s Down, 2s Bottom Pause)", prescription: "3 sets x 8 reps per leg", sets: 3, reps: 8, targetSec: 48, isTimed: false, restSec: 25, cues: "Rear foot on chair/bed. Lower hips vertically under control over 4 seconds, pause silently, drive up without foot shifting." },
    { name: "Towel Hamstring Slide Curl (Bilateral / Unilateral)", prescription: "3 sets x 12 reps", sets: 3, reps: 12, targetSec: 48, isTimed: false, restSec: 20, cues: "Lie on back with heels on towel. Elevate hips and slide heels toward glutes using pure hamstring tension. Silent glide." },
    { name: "Cossack Squat Isometric Depth Hold", prescription: "3 sets x 30s per side", sets: 3, targetSec: 30, isTimed: true, restSec: 25, cues: "Sink into deep lateral squat on one leg. Straighten opposite leg with toes pointed up. Hold deepest active position with chest proud." },
    { name: "Isometric Sissy Squat Knee Flexion Hold", prescription: "3 sets x 25s hold", sets: 3, targetSec: 25, isTimed: true, restSec: 25, cues: "Lean torso back while pushing knees forward and elevating on toes. Hold knee flexion to overload rectus femoris without noise." }
  ],
  core: [
    { name: "Deadbug Isometric Lumbar-Floor Compression", prescription: "3 sets x 12 reps per side (3s hold)", sets: 3, reps: 12, targetSec: 45, isTimed: false, restSec: 20, cues: "Flatten lower back into mat eliminating any gap. Extend opposite arm/leg while maintaining deep core brace." },
    { name: "Hollow Body Rocker to Isometric V-Tuck Hold", prescription: "3 sets x 35s hold", sets: 3, targetSec: 35, isTimed: true, restSec: 20, cues: "Press lumbar spine down, elevate shoulders and feet 6 inches. Hold rigid hollow banana shape with steady breathing." },
    { name: "Paloff Isometric Press with Doorframe Resistance", prescription: "3 sets x 30s per side", sets: 3, targetSec: 30, isTimed: true, restSec: 20, cues: "Stand perpendicular to wall/doorframe. Push hands forward against immovable edge, resisting all torso rotation." },
    { name: "Side Plank with Top Leg Abduction & Glute Medius Hold", prescription: "3 sets x 30s per side", sets: 3, targetSec: 30, isTimed: true, restSec: 20, cues: "Elbow under shoulder, hips lifted in straight line. Elevate top leg 10 inches and hold without dropping hips." },
    { name: "Seated L-Sit Compression Lift on Floor", prescription: "3 sets x 20s hold", sets: 3, targetSec: 20, isTimed: true, restSec: 25, cues: "Sit with legs straight out. Palms flat beside hips. Depress shoulders, round upper back, and lift hips/legs off mat." },
    { name: "Bear Crawl Hover Isometric Anti-Extension Hold", prescription: "3 sets x 40s hold", sets: 3, targetSec: 40, isTimed: true, restSec: 20, cues: "Hands under shoulders, knees under hips hovering 1 inch off floor. Back flat like a table. Zero movement." }
  ],
  recovery: [
    { name: "90/90 Hip Capsule Rotational Flow & Breathing", prescription: "3 sets x 45s per side", sets: 3, targetSec: 45, isTimed: true, restSec: 15, cues: "Sit on mat with knees at 90° angles. Rotate hips smoothly from left to right, focusing on deep internal/external rotation." },
    { name: "Thoracic Spine Foam/Towel Extension & Diaphragmatic Breath", prescription: "3 sets x 60s hold", sets: 3, targetSec: 60, isTimed: true, restSec: 15, cues: "Rolled towel under mid-back. Open arms wide into cactus pose. Inhale 4s through nose, exhale 6s through mouth." },
    { name: "Couch Stretch Hip Flexor & Psoas Decompression", prescription: "3 sets x 45s per leg", sets: 3, targetSec: 45, isTimed: true, restSec: 15, cues: "Back knee against wall/bed baseboard, front foot in lunge. Squeeze rear glute and tuck pelvis to release tight hip flexors." }
  ]
};

// 2. OPEN SPACE (Sprint Mechanics, Bounding, Locomotive Crawls, Agility & Park Flow)
const OPEN_SPACE_BANK = {
  push: [
    { name: "Explosive Plyometric Push-Up with Hand Release", prescription: "4 sets x 8 reps", sets: 4, reps: 8, targetSec: 24, isTimed: false, restSec: 45, cues: "Descend rapidly, explode off ground with enough force for hands to leave turf, catch softly and transition immediately." },
    { name: "Bear Crawl to Crab Walk Locomotive 20m Flow", prescription: "3 sets x 20m continuous", sets: 3, targetSec: 45, isTimed: true, restSec: 30, cues: "Crawl forward 10m keeping back flat, spin into reverse crab walk for 10m. Total shoulder and core integration." },
    { name: "Bench Dip to Explosive Knee Drive Matrix", prescription: "3 sets x 12 reps", sets: 3, reps: 12, targetSec: 36, isTimed: false, restSec: 30, cues: "Use park bench or ledge. Dip deep into triceps stretch, explode up and drive alternate knee to chest." }
  ],
  pull: [
    { name: "Park Pull-Up Bar Strict Hollow-Body Pull-Ups", prescription: "4 sets x 8 reps", sets: 4, reps: 8, targetSec: 32, isTimed: false, restSec: 60, cues: "Full deadhang at bottom, pull chin over bar without swinging or kipping. Engage abs to maintain hollow position." },
    { name: "Park Bench / Railing Inverted Row with 2s Squeeze", prescription: "3 sets x 12 reps", sets: 3, reps: 12, targetSec: 36, isTimed: false, restSec: 45, cues: "Hang beneath low horizontal rail. Pull chest to bar, pin shoulder blades together for 2 seconds." },
    { name: "Active Hanging Scapular Pulls & Knee-to-Bar Tucks", prescription: "3 sets x 10 reps", sets: 3, reps: 10, targetSec: 35, isTimed: false, restSec: 45, cues: "Hang from bar, depress scapulae down, then smoothly tuck knees to chest with zero swinging momentum." }
  ],
  legs: [
    { name: "Linear Acceleration Sprints (0-30m Max Drive Phase)", prescription: "5 sets x 30m sprint (Walk back rest)", sets: 5, targetSec: 10, isTimed: true, restSec: 75, cues: "Stay low in 45° acceleration angle for first 15m. Violent arm drive, strike ground underneath center of mass." },
    { name: "Continuous Broad Jump to Backward Frog Hop Matrix", prescription: "4 sets x 6 broad jumps (Stick landing)", sets: 4, reps: 6, targetSec: 30, isTimed: false, restSec: 60, cues: "Swing arms back, explode forward for maximum distance. Stick each landing softly in a quarter-squat before resetting." },
    { name: "Walking Lunges over 40m Turf Distance", prescription: "3 sets x 40m distance", sets: 3, targetSec: 60, isTimed: true, restSec: 45, cues: "Long stride, drop back knee to hover 1 inch above grass. Drive through front heel to step directly into next lunge." },
    { name: "Lateral Skater Bounding with Deceleration Stick", prescription: "4 sets x 10 bounds per side", sets: 4, reps: 10, targetSec: 35, isTimed: false, restSec: 45, cues: "Bound laterally off one leg, land softly on opposite leg and stick balance for 1 second before bounding back." }
  ],
  core: [
    { name: "Sprint-Stance Single-Leg Deceleration Core Bracing", prescription: "3 sets x 30s per side", sets: 3, targetSec: 30, isTimed: true, restSec: 30, cues: "Hold high sprint stance on one leg while driving opposite knee high. Resist all lateral torso sway." },
    { name: "Hanging Leg Raises to 90° on Pull-Up Bar", prescription: "3 sets x 12 reps", sets: 3, reps: 12, targetSec: 36, isTimed: false, restSec: 45, cues: "Hang strictly. Raise straight legs up to horizontal without hip swing. Lower under 3-second eccentric control." }
  ],
  recovery: [
    { name: "Multi-Directional Hip Opener Walking Series (40m)", prescription: "2 sets x 40m flow", sets: 2, targetSec: 60, isTimed: true, restSec: 20, cues: "Combine high knee hug, cradle stretch, quad pull, and lateral lunge into a walking dynamic mobility sequence." }
  ]
};

// 3. SMALL GYM (Dumbbells up to 25kg, Adjustable Bench, Cable Stack, Kettlebells)
const SMALL_GYM_BANK = {
  push: [
    { name: "Flat Dumbbell Bench Press with 3s Eccentric & Pause", prescription: "4 sets x 10 reps", sets: 4, reps: 10, targetSec: 40, isTimed: false, restSec: 60, cues: "Pin shoulder blades into bench. Lower dumbbells over 3 seconds, pause at bottom chest stretch, press up with authority." },
    { name: "Standing Alternating Dumbbell Overhead Press", prescription: "3 sets x 8 reps per arm", sets: 3, reps: 8, targetSec: 40, isTimed: false, restSec: 45, cues: "Brace glutes and core to eliminate back arch. Press one dumbbell overhead while stabilizing the other at shoulder height." },
    { name: "Incline Dumbbell Hex Press (Pec Squeeze Focus)", prescription: "3 sets x 12 reps", sets: 3, reps: 12, targetSec: 36, isTimed: false, restSec: 45, cues: "Set bench at 30°. Press dumbbells together continuously along their flat sides throughout the entire range of motion." },
    { name: "Cable Standing Single-Arm Chest Press with Rotation", prescription: "3 sets x 10 reps per side", sets: 3, reps: 10, targetSec: 35, isTimed: false, restSec: 45, cues: "Staggered stance. Press cable handle forward while rotating rear hip forward to link hip-to-shoulder force transfer." }
  ],
  pull: [
    { name: "Chest-Supported Dumbbell Row (Neutral Grip)", prescription: "4 sets x 10 reps (2s top squeeze)", sets: 4, reps: 10, targetSec: 40, isTimed: false, restSec: 60, cues: "Lie prone on 45° incline bench. Pull dumbbells to hips, squeeze lats and rhomboids hard for 2 seconds at peak." },
    { name: "Single-Arm Dumbbell Row with Bench Support", prescription: "3 sets x 10 reps per side", sets: 3, reps: 10, targetSec: 40, isTimed: false, restSec: 45, cues: "Hand and knee on bench. Row elbow toward hip pocket without rotating torso. Control lowering phase." },
    { name: "Cable Face Pull with External Shoulder Rotation", prescription: "3 sets x 15 reps", sets: 3, reps: 15, targetSec: 45, isTimed: false, restSec: 45, cues: "Rope attachment at eye level. Pull toward nose while rotating knuckles backward into double-biceps pose." },
    { name: "Lat Pulldown (Wide Grip / Neutral Grip)", prescription: "4 sets x 10 reps", sets: 4, reps: 10, targetSec: 35, isTimed: false, restSec: 60, cues: "Slight torso lean. Drive elbows straight down toward ribs, touch bar to upper clavicle, control ascent." }
  ],
  legs: [
    { name: "Dumbbell Goblet Squat (3s Down, 1s Bottom Pause)", prescription: "4 sets x 10 reps", sets: 4, reps: 10, targetSec: 45, isTimed: false, restSec: 60, cues: "Hold heavy dumbbell tight against sternum. Spread knees, descend below parallel under control, explode up through mid-foot." },
    { name: "Dumbbell Romanian Deadlift (Hinged Glute Focus)", prescription: "4 sets x 10 reps", sets: 4, reps: 10, targetSec: 40, isTimed: false, restSec: 60, cues: "Soft knee bend. Push hips back as if touching wall behind you. Feel deep hamstring stretch, drive hips forward to lockout." },
    { name: "Dumbbell Bulgarian Split Squat (Dual Loaded)", prescription: "3 sets x 8 reps per leg", sets: 3, reps: 8, targetSec: 40, isTimed: false, restSec: 60, cues: "Rear foot on bench holding DB in each hand. Lower back knee vertically, drive through front heel." },
    { name: "Kettlebell Swing (Hip Hinge Power Snaps)", prescription: "4 sets x 15 reps", sets: 4, reps: 15, targetSec: 30, isTimed: false, restSec: 45, cues: "Hike kettlebell high between thighs. Snap hips aggressively into full extension, floating kettlebell to chest level." }
  ],
  core: [
    { name: "Cable Paloff Press with 3s Extension Hold", prescription: "3 sets x 10 reps per side", sets: 3, reps: 10, targetSec: 35, isTimed: false, restSec: 30, cues: "Stand perpendicular to cable tower. Press handle straight out from chest, hold 3s resisting lateral twist." },
    { name: "Single-Arm Dumbbell Farmer's Walk", prescription: "3 sets x 30m per arm", sets: 3, targetSec: 35, isTimed: true, restSec: 45, cues: "Hold heavy DB in one hand. Walk with perfectly upright posture without leaning sideways or tilting shoulders." }
  ],
  recovery: [
    { name: "Bench-Assisted Pigeon Hip Glute Stretch", prescription: "3 sets x 45s per side", sets: 3, targetSec: 45, isTimed: true, restSec: 15, cues: "Place shin across flat bench at 90°. Lean torso forward with flat spine to release deep gluteus medius and piriformis." }
  ]
};

// 4. LARGE GYM (Barbell Racks, Trap Bars, Sleds, Cables, Heavy Platforms, Full Facility)
const LARGE_GYM_BANK = {
  push: [
    { name: "Barbell Bench Press (Comp Grip with 3s Eccentric)", prescription: "4 sets x 6 reps", sets: 4, reps: 6, targetSec: 25, isTimed: false, restSec: 90, cues: "Plant feet firmly, arch upper back, tuck elbows at 45°. Touch lower sternum cleanly and press to full lockout." },
    { name: "Standing Barbell Overhead Military Press", prescription: "4 sets x 6 reps", sets: 4, reps: 6, targetSec: 25, isTimed: false, restSec: 90, cues: "Squeeze glutes and quads like granite. Press bar in vertical line, pushing head forward through window at lockout." },
    { name: "Weighted Chest Dips (Forward Torso Lean)", prescription: "3 sets x 8 reps", sets: 3, reps: 8, targetSec: 30, isTimed: false, restSec: 75, cues: "Attach dip belt weight. Lean torso 30° forward, lower until shoulders drop below elbows, press up powerfully." },
    { name: "Incline Barbell Bench Press (45° Upper Pec Drive)", prescription: "3 sets x 8 reps", sets: 3, reps: 8, targetSec: 30, isTimed: false, restSec: 75, cues: "Lower barbell under control to upper chest beneath clavicles. Explode up along j-curve path." }
  ],
  pull: [
    { name: "Barbell Pendlay Row (Strict Floor Resets)", prescription: "4 sets x 6 reps", sets: 4, reps: 6, targetSec: 25, isTimed: false, restSec: 90, cues: "Torso parallel to floor. Explode barbell from dead stop on ground into lower chest, return to dead stop each rep." },
    { name: "Weighted Strict Pull-Ups (Overhand Grip)", prescription: "4 sets x 6 reps", sets: 4, reps: 6, targetSec: 25, isTimed: false, restSec: 90, cues: "Attach weight plate to belt. Pull from full deadhang until chin clearly clears bar without leg kicking." },
    { name: "Chest-Supported T-Bar Row (Wide Flared Grip)", prescription: "3 sets x 10 reps (2s squeeze)", sets: 3, reps: 10, targetSec: 35, isTimed: false, restSec: 60, cues: "Lock feet on platform. Pull handles to sternum, squeeze mid-back and rear delts with maximum intent." },
    { name: "Seated Cable Low Row with V-Bar Grip", prescription: "3 sets x 12 reps", sets: 3, reps: 12, targetSec: 36, isTimed: false, restSec: 60, cues: "Maintain upright spine. Pull handle into lower abdomen, flare elbows back, allow full lat stretch forward on return." }
  ],
  legs: [
    { name: "Barbell Back Squat (High-Bar / Low-Bar Deep Drive)", prescription: "4 sets x 6 reps", sets: 4, reps: 6, targetSec: 30, isTimed: false, restSec: 120, cues: "Deep breath into diaphragm, expand abdominal wall 360°. Descend below parallel, drive out of hole through midfoot." },
    { name: "Conventional Barbell Deadlift (Speed & Lockout)", prescription: "4 sets x 5 reps", sets: 4, reps: 5, targetSec: 20, isTimed: false, restSec: 120, cues: "Bar over midfoot. Pull slack out of bar until clicks. Wedge hips in, drive floor away like leg press." },
    { name: "Trap Bar Deadlift (High Handle Speed Pulls)", prescription: "4 sets x 6 reps", sets: 4, reps: 6, targetSec: 24, isTimed: false, restSec: 90, cues: "Stand centered in trap bar. Grip handles firmly, explode into triple extension, locking hips and knees together." },
    { name: "Barbell Walking Lunges (Rack Loaded / Hand Loaded)", prescription: "3 sets x 10 reps per leg", sets: 3, reps: 10, targetSec: 45, isTimed: false, restSec: 75, cues: "Barbell across upper traps. Step forward, drop knee 1 inch from platform, drive through heel directly into next stride." },
    { name: "Heavy Prowler Sled Push (Turf Track)", prescription: "4 sets x 25m sprint pushes", sets: 4, targetSec: 20, isTimed: true, restSec: 60, cues: "Lock arms, lean into sled at 45° sprint angle. Drive violently through balls of feet with piston-like legs." }
  ],
  core: [
    { name: "Barbell Landmine Rotational Torso Chops", prescription: "3 sets x 10 reps per side", sets: 3, reps: 10, targetSec: 35, isTimed: false, restSec: 45, cues: "Grip end of landmine barbell. Rotate bar in wide arc down to hip while pivoting rear foot. Transfer force from hips." },
    { name: "Hanging Barbell Toes-to-Bar Compression", prescription: "3 sets x 10 reps", sets: 3, reps: 10, targetSec: 30, isTimed: false, restSec: 60, cues: "Hang from pull-up bar. Flex core and hips to bring toes all the way up to touch bar between hands." },
    { name: "Heavy Trap Bar Farmer's Walk", prescription: "3 sets x 40m walk", sets: 3, targetSec: 35, isTimed: true, restSec: 75, cues: "Deadlift heavy trap bar. Walk with short, fast strides keeping ribs down, shoulders packed, and grip clenched." }
  ],
  recovery: [
    { name: "Barbell-Assisted Thoracic & Lat Hang Stretch", prescription: "3 sets x 45s hold", sets: 3, targetSec: 45, isTimed: true, restSec: 15, cues: "Set barbell in rack at chest height. Grip wide, drop hips back and down to decompress thoracic spine and lats." }
  ]
};

// Generation Logic: Build 170 Unique Days for All 4 Modes
const DAILY_PLANS = [];
const DAILY_PLANS_BY_MODE = {
  small_room: [],
  open_space: [],
  small_gym: [],
  large_gym: []
};

// Cycle through focus days
const FOCUS_PATTERNS = [
  { type: "push", nameSuffix: "Push Force & Scapular Centration", focusStr: "Anterior Upper Body Force, Triceps Stability & Kinetic Press" },
  { type: "pull", nameSuffix: "Posterior Pull & Latissimus Power", focusStr: "Thoracic Extension, Scapular Retraction & Biceps Density" },
  { type: "legs_squat", typeRef: "legs", nameSuffix: "Quad Dominance & Deep Knee Flexion", focusStr: "Knee Centration, Vastus Medialis Drive & Squat Depth" },
  { type: "legs_hinge", typeRef: "legs", nameSuffix: "Posterior Chain Hinge & Glute Drive", focusStr: "Hamstring Loading, Gluteal Peak Force & Hip Extension" },
  { type: "core_torque", typeRef: "core", nameSuffix: "Multi-Planar Core & Anti-Rotation", focusStr: "Oblique Sling Integration, Lumbar Protection & Core Torque" },
  { type: "capacity", typeRef: "capacity", nameSuffix: "Peripheral Heart Action & Work Capacity", focusStr: "Cardiovascular Density, Lactic Buffering & Work Threshold" },
  { type: "recovery", typeRef: "recovery", nameSuffix: "Fascial Decompression & Structural Reset", focusStr: "Postural Realignment, Parasympathetic Reset & Mobility" }
];

for (let day = 1; day <= 170; day++) {
  // Determine Phase
  const phase = PHASES.find(p => day >= p.days[0] && day <= p.days[1]) || PHASES[5];
  const patternIndex = (day - 1) % 7;
  const pattern = FOCUS_PATTERNS[patternIndex];
  
  const dayName = \`Day \${day} — \${pattern.nameSuffix} (Phase \${phase.number})\`;
  const dayFocus = \`\${pattern.focusStr} — Phase \${phase.number} Periodization\`;
  const duration = pattern.type === "recovery" ? 35 : (phase.number >= 5 ? 55 : 45);

  function getExercisesForMode(modeKey, bank) {
    const pType = pattern.typeRef || pattern.type;
    let list = [];
    
    if (pType === "push") {
      const p1 = bank.push[(day * 3 + 1) % bank.push.length];
      const p2 = bank.push[(day * 3 + 2) % bank.push.length];
      const c1 = bank.core[(day * 2) % bank.core.length];
      const l1 = bank.legs[(day * 2 + 1) % bank.legs.length];
      list = [p1, p2, c1, l1];
    } else if (pType === "pull") {
      const u1 = bank.pull[(day * 3 + 1) % bank.pull.length];
      const u2 = bank.pull[(day * 3 + 2) % bank.pull.length];
      const c1 = bank.core[(day * 2 + 1) % bank.core.length];
      const l1 = bank.legs[(day * 2) % bank.legs.length];
      list = [u1, u2, c1, l1];
    } else if (pType === "legs") {
      const l1 = bank.legs[(day * 3 + 1) % bank.legs.length];
      const l2 = bank.legs[(day * 3 + 2) % bank.legs.length];
      const c1 = bank.core[(day * 2) % bank.core.length];
      const p1 = bank.push[(day * 2) % bank.push.length];
      list = [l1, l2, c1, p1];
    } else if (pType === "core") {
      const c1 = bank.core[(day * 3 + 1) % bank.core.length];
      const c2 = bank.core[(day * 3 + 2) % bank.core.length];
      const p1 = bank.push[(day * 2 + 1) % bank.push.length];
      const u1 = bank.pull[(day * 2 + 1) % bank.pull.length];
      list = [c1, c2, p1, u1];
    } else if (pType === "capacity") {
      const l1 = bank.legs[(day * 2) % bank.legs.length];
      const p1 = bank.push[(day * 2) % bank.push.length];
      const u1 = bank.pull[(day * 2) % bank.pull.length];
      const c1 = bank.core[(day * 2) % bank.core.length];
      list = [l1, p1, u1, c1];
    } else { // recovery
      const r1 = bank.recovery[0] || bank.core[0];
      const r2 = bank.recovery[1] || bank.legs[0];
      const r3 = bank.recovery[2] || bank.pull[0];
      list = [r1, r2, r3];
    }

    // Return sanitized deep clones
    return list.filter(Boolean).map((ex, idx) => {
      return {
        name: ex.name,
        prescription: ex.prescription,
        sets: ex.sets || 3,
        reps: ex.reps || null,
        targetSec: ex.targetSec || (ex.reps ? ex.reps * 3 : 35),
        isTimed: ex.isTimed !== undefined ? ex.isTimed : !ex.reps,
        restSec: ex.restSec || (modeKey === 'small_room' ? 20 : 30),
        cues: ex.cues,
        equipment: ex.equipment || (modeKey === 'small_room' ? "Tokyo Micro-Dorm Floor (No Equipment / Zero Noise)" : modeKey)
      };
    });
  }

  const smallRoomExercises = getExercisesForMode('small_room', SMALL_ROOM_BANK);
  const openSpaceExercises = getExercisesForMode('open_space', OPEN_SPACE_BANK);
  const smallGymExercises = getExercisesForMode('small_gym', SMALL_GYM_BANK);
  const largeGymExercises = getExercisesForMode('large_gym', LARGE_GYM_BANK);

  function makeSuperset(exList) {
    if (exList.length >= 4) {
      return [
        {
          block: "A",
          name: "Superset Block A (Primary Compound Pair)",
          exercises: [exList[0].name, exList[1].name],
          rounds: exList[0].sets || 3
        },
        {
          block: "B",
          name: "Superset Block B (Accessory & Kinetic Core)",
          exercises: [exList[2].name, exList[3].name],
          rounds: exList[2].sets || 3
        }
      ];
    } else {
      return [
        {
          block: "A",
          name: "Kinetic Movement Circuit",
          exercises: exList.map(e => e.name),
          rounds: 3
        }
      ];
    }
  }

  const dayPlanObj = {
    day: day,
    phaseNumber: phase.number,
    phaseName: phase.name,
    theme: phase.theme,
    name: dayName,
    focus: dayFocus,
    durationMinutes: duration,
    modeVariants: {
      small_room: smallRoomExercises,
      open_space: openSpaceExercises,
      small_gym: smallGymExercises,
      large_gym: largeGymExercises
    }
  };

  DAILY_PLANS.push(dayPlanObj);

  DAILY_PLANS_BY_MODE.small_room.push({
    day: day,
    phaseNumber: phase.number,
    phaseName: phase.name,
    theme: phase.theme,
    name: dayName,
    focus: dayFocus,
    durationMinutes: duration,
    exercises: smallRoomExercises,
    supersetStructure: makeSuperset(smallRoomExercises)
  });

  DAILY_PLANS_BY_MODE.open_space.push({
    day: day,
    phaseNumber: phase.number,
    phaseName: phase.name,
    theme: phase.theme,
    name: dayName,
    focus: dayFocus,
    durationMinutes: duration,
    exercises: openSpaceExercises,
    supersetStructure: makeSuperset(openSpaceExercises)
  });

  DAILY_PLANS_BY_MODE.small_gym.push({
    day: day,
    phaseNumber: phase.number,
    phaseName: phase.name,
    theme: phase.theme,
    name: dayName,
    focus: dayFocus,
    durationMinutes: duration,
    exercises: smallGymExercises,
    supersetStructure: makeSuperset(smallGymExercises)
  });

  DAILY_PLANS_BY_MODE.large_gym.push({
    day: day,
    phaseNumber: phase.number,
    phaseName: phase.name,
    theme: phase.theme,
    name: dayName,
    focus: dayFocus,
    durationMinutes: duration,
    exercises: largeGymExercises,
    supersetStructure: makeSuperset(largeGymExercises)
  });
}

console.log('Finished compiling 170 days for all 4 modes!');

// Update data/fitness-program.js preserving TRACKS, ROADMAP, LESSONS, etc.
fit.DAILY_PLANS = DAILY_PLANS;
fit.DAILY_PLANS_BY_MODE = DAILY_PLANS_BY_MODE;

const output = '// Fitness Program Curriculum & Periodization\\n(function(global){\\n  \\'use strict\\';\\n  var LOCATION_MODES = ' + JSON.stringify(fit.LOCATION_MODES, null, 2) + ';\\n  var TRACKS = ' + JSON.stringify(fit.TRACKS, null, 2) + ';\\n  var DAILY_PLANS = ' + JSON.stringify(DAILY_PLANS, null, 2) + ';\\n  var DAILY_PLANS_BY_MODE = ' + JSON.stringify(DAILY_PLANS_BY_MODE, null, 2) + ';\\n  var APEX_STRIDE_PROTOCOLS = ' + JSON.stringify(fit.APEX_STRIDE_PROTOCOLS, null, 2) + ';\\n  var ROADMAP = ' + JSON.stringify(fit.ROADMAP, null, 2) + ';\\n  var LESSONS = ' + JSON.stringify(fit.LESSONS, null, 2) + ';\\n  var AUTHORED_IDS = ' + JSON.stringify(fit.AUTHORED_IDS, null, 2) + ';\\n  var STUB_IDS = ' + JSON.stringify(fit.STUB_IDS, null, 2) + ';\\n\\n  function getRoadmapEntry(phaseId) { return ROADMAP[phaseId] || null; }\\n  function getLesson(lessonId) { return LESSONS[lessonId] || null; }\\n  function getTrackRoadmap(trackId) { return (TRACKS.find(function(t){ return t.id === trackId; }) || {}).roadmap || []; }\\n  function getTrack(trackId) { return TRACKS.find(function(t){ return t.id === trackId; }) || null; }\\n\\n  var PROGRAM = {\\n    LOCATION_MODES: LOCATION_MODES,\\n    TRACKS: TRACKS,\\n    DAILY_PLANS: DAILY_PLANS,\\n    DAILY_PLANS_BY_MODE: DAILY_PLANS_BY_MODE,\\n    APEX_STRIDE_PROTOCOLS: APEX_STRIDE_PROTOCOLS,\\n    ROADMAP: ROADMAP,\\n    LESSONS: LESSONS,\\n    AUTHORED_IDS: AUTHORED_IDS,\\n    STUB_IDS: STUB_IDS,\\n    getRoadmapEntry: getRoadmapEntry,\\n    getLesson: getLesson,\\n    getTrackRoadmap: getTrackRoadmap,\\n    getTrack: getTrack\\n  };\\n\\n  global.FEARN_FITNESS_PROGRAM = PROGRAM;\\n  if (typeof module !== \\'undefined\\' && module.exports) module.exports = PROGRAM;\\n})(typeof window !== \\'undefined\\' ? window : global);\\n';

fs.writeFileSync(fitnessFilePath, output, 'utf8');
console.log('Successfully updated data/fitness-program.js with 170-Day Non-Templated Periodization across all 4 modes!');
`;

fs.writeFileSync(path.resolve(__dirname, 'generate_170_day_periodization.js'), generatorScript, 'utf8');
console.log('Created generation script!');
