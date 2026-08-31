const fs = require('fs');
const path = require('path');

const fitnessFilePath = path.resolve(__dirname, '../../data/fitness-program.js');
console.log('Reading fitness program file...');
const rawContent = fs.readFileSync(fitnessFilePath, 'utf8');

// Let's create the generation script for 170 days x 4 modes
const generatorScriptPath = path.resolve(__dirname, 'generate_170_day_periodization.js');

const generatorCode = `
const fs = require('fs');
const path = require('path');

// 1. Define Phase Meta Structure
const PHASES = [
  {
    number: 1,
    name: "Phase 1: Neuromuscular Adaptation & Structural Integrity",
    theme: "Foundational Movement Mechanics, Joint Centration & Kinetic Stability",
    days: [1, 30],
    focusRotation: [
      { name: "Push Mechanics & Anterior Kinetic Chain", focus: "Scapular Stability, Chest-Shoulder Control & Anti-Extension" },
      { name: "Pull Mechanics & Posterior Chain Stability", focus: "Thoracic Extension, Latissimus Activation & Scapular Retraction" },
      { name: "Bilateral Lower Body Joint Centration", focus: "Hip Hinge, Knee Tracking & Foot Arch Stabilization" },
      { name: "Unilateral Lower Body & Pelvic Alignment", focus: "Single-Leg Stability, Adductor Control & Glute Medius Drive" },
      { name: "Multi-Planar Core Bracing & Anti-Rotation", focus: "Transverse Abdominis, Oblique Sling & Lumbar Protection" },
      { name: "Work Capacity & Kinetic Decompression", focus: "Aerobic Base, Fascial Gliding & Active Joint Mobility" },
      { name: "Neuromuscular Restoration & Active Recovery", focus: "Parasympathetic Downregulation & Postural Reset" }
    ]
  },
  {
    number: 2,
    name: "Phase 2: Hypertrophic Density & Time-Under-Tension",
    theme: "Mechanical Tension, Slow-Eccentric Loading & Metabolic Accumulation",
    days: [31, 60],
    focusRotation: [
      { name: "Anterior Torso Hypertrophy & Eccentric Depth", focus: "Pectoral Fiber Recruitment, Triceps Density & 4-1-1-0 Tempo" },
      { name: "Posterior Latitudinal & Rhomboid Density", focus: "Mid-Back Thickness, Vertical Pulling & Scapular Squeeze" },
      { name: "Quad Dominance & Deep Knee Flexion Hypertrophy", focus: "Vastus Medialis Loading, Anterior Shin Strength & Depth Control" },
      { name: "Posterior Chain Hamstring & Glute Hypertrophy", focus: "Deep Hinge Loading, Glute Max Isolation & Hip Thrust Mechanics" },
      { name: "Tri-Planar Core Hypertrophy & Transverse Density", focus: "Rectus Abdominis, Internal/External Obliques & Serratus Anterior" },
      { name: "Peripheral Heart Action & Lactate Threshold", focus: "High-Density Super-Circuits & Non-Impact Metabolic Conditioning" },
      { name: "Fascial Hydration & Connective Tissue Restoration", focus: "Myofascial Decompression & Joint Space Creation" }
    ]
  },
  {
    number: 3,
    name: "Phase 3: Work Capacity, Core Anti-Rotation & Dynamic Torque",
    theme: "Rotational Mechanics, Kinetic Chain Linking & Transverse Force Transfer",
    days: [61, 90],
    focusRotation: [
      { name: "Rotational Torque & Transverse Kinetic Power", focus: "Hip-to-Shoulder Spiral Line, Oblique Power & Anti-Rotational Resisting" },
      { name: "Unilateral Posterior Chain & Lateral Stability", focus: "Single-Leg Deadlift Mastery, Lateral Sub-Talar Alignment & Hip Drive" },
      { name: "Frontal Plane Velocity & Lateral Force Transfer", focus: "Adductor/Abductor Control, Multi-Directional Kinetic Transfer" },
      { name: "Asymmetric Upper Body Press-Pull Synchronization", focus: "Contralateral Kinetic Linkage & Torso Rotation Stability" },
      { name: "Anaerobic Lactic Endurance & Core Capacity", focus: "Sustained Lactic Buffering & High-Density Core Complexes" },
      { name: "Multi-Directional Locomotive Conditioning", focus: "Spatial Agility, Floor Flow & High-Capacity Aerobic Intervals" },
      { name: "Spinal Articulation & Decompressive Reset", focus: "Multi-Segmental Spinal Wave & Dynamic Hip Opening" }
    ]
  },
  {
    number: 4,
    name: "Phase 4: Unilateral Power, Elasticity & Kinetic Transfer",
    theme: "Single-Limb Dominance, Deceleration Control & Elastic Recoil",
    days: [91, 120],
    focusRotation: [
      { name: "Single-Leg Deceleration & Kinetic Braking Force", focus: "Eccentric Knee Stabilization, Single-Leg Landing Mechanics & Force Absorption" },
      { name: "Unilateral Explosive Drive & Triple Extension", focus: "Single-Leg Hip Extension, Gluteal Velocity & Ankle Stiffness" },
      { name: "Asymmetrical Torso Stabilization & Anti-Lateral Flexion", focus: "Quadratus Lumborum Bracing, Offset Load Absorption & Spine Integrity" },
      { name: "Unilateral Upper Limb Force Transfer & Scapular Drive", focus: "Single-Arm Power Development, Core Coupling & Scapular Glide" },
      { name: "Elastic Kinetic Recoil & Stretch-Shortening Utilization", focus: "Fascial Spring Loading, Tendon Elasticity & Silent Reactive Drive" },
      { name: "High-Intensity Unilateral Conditioning Threshold", focus: "Single-Limb Work Capacity & Anaerobic Glycolytic Resilience" },
      { name: "Postural Neuromuscular Realignment & Micro-Recovery", focus: "Kinetic Chain Reset & Joint Capsule Mobilization" }
    ]
  },
  {
    number: 5,
    name: "Phase 5: High-Performance Functional Athleticism",
    theme: "Complex Contrast Training, Neural Recruitment & Full-Body Integration",
    days: [121, 150],
    focusRotation: [
      { name: "Neural Maximum Recruitment & Overcoming Iso-Drive", focus: "Maximal Voluntary Contraction, Motor Unit Rate Coding & Kinetic Stiffening" },
      { name: "Complex Contrast Post-Activation Potentiation (PAP)", focus: "Heavy Isometric Pre-Load followed by High-Velocity Dynamic Movement" },
      { name: "Multi-Joint Functional Compound Chains", focus: "Ground-to-Overhead Kinetic Flow & Total-Body Power Synchronization" },
      { name: "Rotational Kinetic Acceleration & Deceleration", focus: "High-Velocity Spiral Line Rotation & Terminal Angle Deceleration" },
      { name: "Peak Threshold Anaerobic Work Capacity", focus: "Maximal Oxygen Uptake & Lactic Tolerance Mastery" },
      { name: "Athletic Flow & Tri-Planar Locomotive Mastery", focus: "Complex Spatial Transitions & High-Performance Motor Control" },
      { name: "Parasympathetic Athletic Regeneration & Tissue Recovery", focus: "Autonomic Nervous System Recovery & Fascial Sheath Relaxation" }
    ]
  },
  {
    number: 6,
    name: "Phase 6: Omni-Mastery Peak Physical Autonomy",
    theme: "Peak Physical Autonomy, Omni-Planar Mastery & Athletic Transcendence",
    days: [151, 170],
    focusRotation: [
      { name: "Omni-Planar Master Movement Complex", focus: "Integrated Multi-Planar Strength, Power & Fluid Motor Autonomy" },
      { name: "Peak Kinetic Power & Isometric Maximum Density", focus: "Terminal Joint Angle Mastery & Ultimate Kinetic Stability" },
      { name: "Total-Body High-Velocity Energy Transfer", focus: "Seamless Ground-to-Extremity Force Transmission" },
      { name: "Ultimate Functional Core Autonomy & Spiral Mastery", focus: "Flawless Anti-Rotational, Flexion & Extension Control" },
      { name: "Peak Anaerobic Autonomy & Lactic Superiority", focus: "Supreme Cardiovascular & Muscular Endurance Integration" },
      { name: "Fluid Locomotive Athleticism & Freeform Mastery", focus: "Unrestricted Movement Competence Across All Planes" },
      { name: "Master Decompression & Complete Physical Rejuvenation", focus: "Total Musculoskeletal Alignment & Long-Term Longevity" }
    ]
  }
];

console.log('Generating 170 days for all 4 modes...');
`;

fs.writeFileSync(generatorScriptPath, generatorCode, 'utf8');
console.log('Wrote initial generator scaffold.');
