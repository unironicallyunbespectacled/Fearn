// FEARN Fitness module — Guided Session Flow (Nike Training Club Style),
// Pre-Workout Summary, Future Phase Inspector & Apex Stride.
//
// Features:
//   1. 🏋️ Fullscreen Guided Workout Session (Part B): Single-exercise focus, countdown
//      timers, set counters, rest countdowns, audio cues, browser SpeechSynthesis coach voice,
//      pause/resume, dismissible form cues info overlay, and post-workout feedback adaptive loop.
//   2. 📋 Pre-Workout Summary Screen (Part A): Clean exercise list with varied sets and rep targets.
//   3. 🔍 Future Phase Inspector (Part C): Browse any phase across all 14 tracks in preview mode.
//   4. 🎯 Renamed "Checkpoint" to "Level-Up Progress Check / Phase Test" in the fitness UI.
//   5. 🏃‍♂️ Apex Stride (Open Road & Track): Specialized outdoor running protocols.
//   6. ⏱️ Universal Precision Telemetry: High-precision logging of all sets, reps, and breaks.

(function (global) {
  if (!global.FEARN) {
    console.error('modules/fitness.js loaded before engine.js — window.FEARN is missing.');
    return;
  }
  const FEARN = global.FEARN;
  const PROGRAM = global.FEARN_FITNESS_PROGRAM;
  const LEDGER = global.FEARN_FITNESS_LEDGER;
  const SCHEMA = global.FEARN_SCHEMA;

  if (!PROGRAM) {
    console.error('modules/fitness.js: FEARN_FITNESS_PROGRAM is missing.');
    return;
  }

  // Validate authored content once at load time.
  if (SCHEMA && typeof SCHEMA.validateLesson === 'function' && PROGRAM.AUTHORED_IDS) {
    PROGRAM.AUTHORED_IDS.forEach((id) => {
      try {
        const result = SCHEMA.validateLesson(PROGRAM.LESSONS[id]);
        if (!result.valid) console.error('fitness: lesson "' + id + '" failed validateLesson:', result.errors);
      } catch (e) { }
    });
  }

  const DEFAULT_MODE = 'small_room';

  // -----------------------------------------------------------------------
  // Storage & State Management
  // -----------------------------------------------------------------------
  function getLocationMode() {
    const mode = FEARN.storage.get('fitness:locationMode', DEFAULT_MODE);
    return PROGRAM.LOCATION_MODES.some((m) => m.id === mode) ? mode : DEFAULT_MODE;
  }
  function setLocationMode(mode) {
    FEARN.storage.set('fitness:locationMode', mode);
    if (FEARN.telemetry) {
      FEARN.telemetry.log({
        category: 'fitness',
        moduleId: 'fitness',
        action: 'change_location_mode',
        details: 'Switched location mode to ' + mode,
        locationMode: mode
      });
    }
  }

  function getViewMode() {
    return FEARN.storage.get('fitness:viewMode', 'daily'); // 'daily' | 'apex' | 'library'
  }
  function setViewMode(mode) {
    FEARN.storage.set('fitness:viewMode', mode);
  }

  function getSelectedDay() {
    const todayDay = new Date().getDay() || 7; // 1 = Mon, 7 = Sun
    return FEARN.storage.get('fitness:selectedDay', todayDay);
  }
  function setSelectedDay(day) {
    FEARN.storage.set('fitness:selectedDay', day);
  }

  function getVoiceCoachEnabled() {
    return FEARN.storage.get('fitness:voiceCoach', true);
  }
  function setVoiceCoachEnabled(enabled) {
    FEARN.storage.set('fitness:voiceCoach', !!enabled);
  }

  function getActiveApexProtocolId() {
    const defaultId = (PROGRAM.APEX_STRIDE_PROTOCOLS && PROGRAM.APEX_STRIDE_PROTOCOLS[0]) ? PROGRAM.APEX_STRIDE_PROTOCOLS[0].id : 'apex-velocity';
    return FEARN.storage.get('fitness:apexProtocol', defaultId);
  }
  function setActiveApexProtocolId(id) {
    FEARN.storage.set('fitness:apexProtocol', id);
  }

  function getActiveTrackId() {
    const id = FEARN.storage.get('fitness:activeTrack', PROGRAM.TRACKS[0].id);
    return PROGRAM.TRACKS.some((t) => t.id === id) ? id : PROGRAM.TRACKS[0].id;
  }
  function setActiveTrackId(id) {
    FEARN.storage.set('fitness:activeTrack', id);
  }

  function getInspectedPhaseId(trackId) {
    return FEARN.storage.get('fitness:inspectPhase:' + trackId, null);
  }
  function setInspectedPhaseId(trackId, phaseId) {
    FEARN.storage.set('fitness:inspectPhase:' + trackId, phaseId);
  }

  function defaultTrackState() {
    return { currentPhaseIndex: 0, sessionsLoggedForCurrentPhase: 0, completedPhaseIds: [], checkpointHistory: [] };
  }
  function getTrackState(trackId) {
    const all = FEARN.storage.get('fitness:trackStates', {});
    return all[trackId] || defaultTrackState();
  }
  function updateTrackState(trackId, updater) {
    const all = FEARN.storage.get('fitness:trackStates', {});
    const cur = all[trackId] || defaultTrackState();
    all[trackId] = updater(cur) || cur;
    FEARN.storage.set('fitness:trackStates', all);
    return all[trackId];
  }

  // -----------------------------------------------------------------------
  // Helper: Build exercise list dynamically from dayPlan.tracks
  // -----------------------------------------------------------------------
  function parsePrescription(prescriptionStr) {
    if (!prescriptionStr) return { sets: 3, reps: 10, targetSec: null, label: '3 x 10' };
    const str = String(prescriptionStr).trim();
    
    // Check for "3 x 15-20 seconds" or "3 x 30s"
    const timedMatch = str.match(/(\d+)\s*x\s*(\d+(?:-\d+)?)\s*(?:sec|second|s)/i);
    if (timedMatch) {
      const sets = parseInt(timedMatch[1], 10) || 3;
      let sec = 30;
      if (timedMatch[2].includes('-')) {
        const parts = timedMatch[2].split('-');
        sec = parseInt(parts[1], 10) || parseInt(parts[0], 10) || 30;
      } else {
        sec = parseInt(timedMatch[2], 10) || 30;
      }
      return { sets: sets, reps: null, targetSec: sec, label: sets + ' sets × ' + sec + 's' };
    }

    // Check for "3 x 20 reps" or "3 x 10"
    const repMatch = str.match(/(\d+)\s*x\s*(\d+)/i);
    if (repMatch) {
      const sets = parseInt(repMatch[1], 10) || 3;
      const reps = parseInt(repMatch[2], 10) || 10;
      return { sets: sets, reps: reps, targetSec: null, label: sets + ' sets × ' + reps + ' reps' };
    }

    // General fallback
    return { sets: 3, reps: 10, targetSec: null, label: str };
  }

  function getExercisesForDayPlan(dayPlan, locationMode) {
    const exercises = [];
    if (!dayPlan) return exercises;

    // 1. Direct Mode-Specific Matrix (680 Days: 170 Days x 4 Dedicated Modes)
    if (dayPlan.modeVariants && dayPlan.modeVariants[locationMode] && dayPlan.modeVariants[locationMode].length > 0) {
      return dayPlan.modeVariants[locationMode].map((rawEx, idx) => {
        const parsed = parsePrescription(rawEx.prescription);
        return {
          name: rawEx.name,
          builds: rawEx.builds || '',
          trackId: 'daily',
          trackName: dayPlan.name,
          trackPriority: 1,
          role: 'Movement ' + (idx + 1),
          trackLabel: dayPlan.name,
          phaseId: 'p' + (dayPlan.phaseNumber || 1),
          phaseName: dayPlan.phaseName || 'Phase 1',
          phaseLevel: 'Day ' + dayPlan.day,
          sets: rawEx.sets || parsed.sets || 3,
          reps: rawEx.reps || parsed.reps,
          targetSec: rawEx.targetSec || parsed.targetSec || (parsed.reps ? parsed.reps * 3 : 30),
          isTimed: rawEx.isTimed !== undefined ? rawEx.isTimed : !parsed.reps,
          repLabel: rawEx.reps ? 'x' + rawEx.reps : (rawEx.targetSec ? rawEx.targetSec + 's' : '30s'),
          prescription: rawEx.prescription || parsed.label,
          cues: rawEx.cues || 'Maintain strict biomechanics and smooth tempo.',
          formCuesList: [rawEx.cues],
          equipment: rawEx.equipment || (locationMode === 'small_room' ? 'Tokyo Micro-Dorm Floor (No Equipment / Zero Noise)' : locationMode),
          restSec: (locationMode === 'small_room') ? 20 : 25
        };
      });
    }

    if (!Array.isArray(dayPlan.tracks)) return exercises;

    dayPlan.tracks.forEach((trackItem) => {
      const trackId = trackItem.trackId;
      const track = PROGRAM.getTrack(trackId) || PROGRAM.TRACKS[0];
      if (!track) return;

      const state = getTrackState(track.id);
      const phases = PROGRAM.getTrackRoadmap(track.id);
      const phase = (phases && phases[state.currentPhaseIndex]) ? phases[state.currentPhaseIndex] : (phases && phases[0]);
      if (!phase) return;

      const lesson = PROGRAM.getLesson(phase.id);
      if (!lesson || !lesson.guidedPractice || !Array.isArray(lesson.guidedPractice.exercises)) return;

      lesson.guidedPractice.exercises.forEach((rawEx) => {
        const parsed = parsePrescription(rawEx.prescription);
        let locCue = '';
        let locEquipment = 'None / Floor space';

        if (rawEx.variants && rawEx.variants[locationMode]) {
          locCue = rawEx.variants[locationMode];
          if (locationMode === 'large_gym') locEquipment = 'Commercial Gym Equipment';
          else if (locationMode === 'small_gym') locEquipment = 'Dumbbells / Bands / Bench';
          else if (locationMode === 'open_space') locEquipment = 'Open Field / Path (No Equipment)';
          else locEquipment = 'Minimal In-Room Floor Space';
        } else if (rawEx.formCues) {
          locCue = Array.isArray(rawEx.formCues) ? rawEx.formCues.join('. ') : String(rawEx.formCues);
        } else if (lesson.presentation && lesson.presentation.explanation) {
          locCue = lesson.presentation.explanation;
        }

        exercises.push({
          name: rawEx.name,
          builds: rawEx.builds || '',
          trackId: track.id,
          trackName: track.name,
          trackPriority: track.priority,
          role: trackItem.role || track.name,
          trackLabel: trackItem.label || track.name,
          phaseId: phase.id,
          phaseName: phase.title || phase.name || ('Phase ' + (state.currentPhaseIndex + 1)),
          phaseLevel: lesson.level || phase.level || 'Foundation',
          sets: parsed.sets,
          reps: parsed.reps,
          targetSec: parsed.targetSec || (parsed.reps ? parsed.reps * 3 : 30),
          isTimed: !parsed.reps,
          repLabel: parsed.reps ? 'x' + parsed.reps : (parsed.targetSec ? parsed.targetSec + 's' : '30s'),
          prescription: rawEx.prescription || parsed.label,
          cues: locCue || 'Maintain steady biomechanics and controlled tempo.',
          formCuesList: Array.isArray(rawEx.formCues) ? rawEx.formCues : [locCue],
          equipment: locEquipment,
          restSec: 35
        });
      });
    });

    return exercises;
  }

  // -----------------------------------------------------------------------
  // Speech Synthesis Automated Coach Voice & Web Audio SFX
  // -----------------------------------------------------------------------
  let _audioCtx = null;
  function getAudioContext() {
    if (!_audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) _audioCtx = new AudioContextClass();
    }
    if (_audioCtx && _audioCtx.state === 'suspended') {
      _audioCtx.resume();
    }
    return _audioCtx;
  }

  function playTone(freq, duration, type, startGain, delay) {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const startTime = ctx.currentTime + (delay || 0);
      const stopTime = startTime + (duration || 0.15);

      osc.type = type || 'sine';
      osc.frequency.setValueAtTime(freq || 440, startTime);
      gain.gain.setValueAtTime(startGain || 0.15, startTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, stopTime);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(startTime);
      osc.stop(stopTime);
    } catch (e) { }
  }

  function playTransitionSound(kind) {
    if (kind === 'work_to_rest') {
      // Warm descending two-bell chime (Rest cue: 523Hz -> 392Hz)
      playTone(523.25, 0.25, 'sine', 0.18, 0);
      playTone(392.00, 0.45, 'sine', 0.15, 0.12);
    } else if (kind === 'rest_to_work') {
      // Energetic ascending 3-note whistle / alert (Work cue: 523Hz -> 659Hz -> 880Hz)
      playTone(523.25, 0.12, 'triangle', 0.18, 0);
      playTone(659.25, 0.12, 'triangle', 0.18, 0.10);
      playTone(880.00, 0.35, 'triangle', 0.22, 0.20);
    } else if (kind === 'countdown') {
      // Crisp countdown tick
      playTone(880.00, 0.08, 'sine', 0.20, 0);
    } else if (kind === 'fanfare') {
      // Multi-voice triumphant major fanfare chord (C5 -> E5 -> G5 -> C6 -> chord)
      playTone(523.25, 0.2, 'triangle', 0.20, 0);
      playTone(659.25, 0.2, 'triangle', 0.20, 0.12);
      playTone(783.99, 0.2, 'triangle', 0.22, 0.24);
      playTone(1046.50, 0.7, 'triangle', 0.25, 0.36);
      // Harmonized sustained chord
      playTone(523.25, 0.8, 'sine', 0.15, 0.36);
      playTone(659.25, 0.8, 'sine', 0.15, 0.36);
      playTone(783.99, 0.8, 'sine', 0.15, 0.36);
    } else {
      playTone(660, 0.12, 'sine', 0.15, 0);
    }
  }

  function playBeep(freq, duration) {
    playTone(freq, duration, 'sine', 0.15, 0);
  }

  function speakCoach(text) {
    if (!getVoiceCoachEnabled() || !window.speechSynthesis) return;
    try {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
      window.speechSynthesis.cancel(); // Stop ongoing utterances
      const utter = new SpeechSynthesisUtterance(text);
      utter.rate = 1.05;
      utter.pitch = 1.0;
      window.speechSynthesis.speak(utter);
    } catch (e) { }
  }

  function stopAllAudioAndCoach() {
    if (window.speechSynthesis) {
      try { window.speechSynthesis.cancel(); } catch (e) { }
    }
  }

  // -----------------------------------------------------------------------
  // Guided Workout Session Runner (Part B)
  // -----------------------------------------------------------------------
    let activeGuidedSession = null;

  function buildSessionQueue(dayPlan, locationMode) {
    const exercises = getExercisesForDayPlan(dayPlan, locationMode);
    const queue = [];
    if (!exercises.length) return queue;

    // Group exercises into Interspersed Superset Blocks (pairs of 2, or 3 if odd)
    const blocks = [];
    for (let i = 0; i < exercises.length; i += 2) {
      if (i + 1 < exercises.length) {
        blocks.push([exercises[i], exercises[i + 1]]);
      } else {
        if (blocks.length > 0) {
          blocks[blocks.length - 1].push(exercises[i]);
        } else {
          blocks.push([exercises[i]]);
        }
      }
    }

    blocks.forEach((blockExs, blockIdx) => {
      const blockLetter = String.fromCharCode(65 + blockIdx); // A, B, C...
      const maxSets = Math.max(...blockExs.map(e => e.sets || 3));

      for (let s = 1; s <= maxSets; s++) {
        blockExs.forEach((exItem, exInBlockIdx) => {
          const exIdx = exercises.indexOf(exItem);
          const numSets = exItem.sets || 3;
          if (s > numSets) return; // Skip if this exercise requires fewer sets

          const targetSec = exItem.targetSec || (exItem.reps ? exItem.reps * 3 : 30);
          const repLabel = exItem.repLabel;
          const intraRest = (locationMode === 'small_room') ? 20 : 25;

          // Push WORK step
          queue.push({
            type: 'work',
            exerciseIndex: exIdx + 1,
            totalExercises: exercises.length,
            blockLetter: blockLetter,
            blockName: 'Superset Block ' + blockLetter,
            name: exItem.name,
            trackTitle: exItem.trackName,
            setNumber: s,
            totalSets: numSets,
            isTimed: exItem.isTimed,
            durationSec: targetSec,
            repTarget: exItem.reps,
            repLabel: repLabel,
            cues: exItem.cues,
            formCuesList: exItem.formCuesList,
            equipment: exItem.equipment,
            lessonId: exItem.phaseId,
            trackId: exItem.trackId,
            restAfterSec: intraRest
          });

          // Determine next exercise in interspersed round
          let nextExName = '';
          const isLastInBlockRound = (exInBlockIdx === blockExs.length - 1);
          const isLastRoundOfBlock = (s === maxSets);
          const isLastBlock = (blockIdx === blocks.length - 1);

          if (!isLastInBlockRound) {
            nextExName = blockExs[exInBlockIdx + 1].name + ' (Set ' + s + ')';
          } else if (!isLastRoundOfBlock) {
            nextExName = blockExs[0].name + ' (Set ' + (s + 1) + ')';
          } else if (!isLastBlock) {
            nextExName = blocks[blockIdx + 1][0].name + ' (Block ' + String.fromCharCode(65 + blockIdx + 1) + ' · Set 1)';
          }

          // Push REST step (except after absolute final exercise set of the workout)
          if (!(isLastInBlockRound && isLastRoundOfBlock && isLastBlock)) {
            const restDuration = (isLastInBlockRound && isLastRoundOfBlock) ? 45 : intraRest;
            queue.push({
              type: 'rest',
              durationSec: restDuration,
              nextExerciseName: nextExName || 'Next Movement'
            });
          }
        });
      }
    });

    return queue;
  }

  function launchGuidedSession(dayPlan, container) {
    const locationMode = getLocationMode();
    const queue = buildSessionQueue(dayPlan, locationMode);
    if (!queue.length) {
      alert('No exercises scheduled for this day plan.');
      return;
    }

    const startTime = Date.now();

    activeGuidedSession = {
      queue: queue,
      stepIndex: 0,
      isPaused: false,
      timerSec: queue[0].durationSec,
      timerInterval: null,
      startTime: startTime,
      dayPlan: dayPlan,
      locationMode: locationMode,
      infoModalOpen: false
    };

    renderGuidedOverlay(container);
  }

  function stopGuidedTimer() {
    stopAllAudioAndCoach();
    if (activeGuidedSession && activeGuidedSession.timerInterval) {
      clearInterval(activeGuidedSession.timerInterval);
      activeGuidedSession.timerInterval = null;
    }
  }

  function renderGuidedOverlay(container) {
    stopGuidedTimer();
    let overlay = document.getElementById('fearn-guided-workout-modal');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'fearn-guided-workout-modal';
      overlay.className = 'fearn-guided-workout-overlay';
      document.body.appendChild(overlay);
    }

    if (!activeGuidedSession || activeGuidedSession.stepIndex >= activeGuidedSession.queue.length) {
      renderGuidedCompletion(overlay, container);
      return;
    }

    const step = activeGuidedSession.queue[activeGuidedSession.stepIndex];
    const totalSteps = activeGuidedSession.queue.length;
    const progressPct = Math.round((activeGuidedSession.stepIndex / totalSteps) * 100);

    overlay.innerHTML = `
      <div class="fearn-guided-topbar">
        <button class="fearn-btn fearn-btn--icon" id="guided-exit-btn" type="button" title="Exit Workout">✕</button>
        <div class="fearn-guided-progress-wrap">
          <div class="fearn-guided-progress-text">
            <span>${step.type === 'work' ? 'Movement ' + step.exerciseIndex + ' of ' + step.totalExercises : 'Rest Interval'}</span>
            <span>${progressPct}%</span>
          </div>
          <div class="fearn-guided-progress-bar">
            <div class="fearn-guided-progress-fill" style="width: ${progressPct}%;"></div>
          </div>
        </div>
        <div style="display: flex; gap: 8px;">
          <button class="fearn-btn fearn-btn--icon" id="guided-voice-btn" type="button" title="Toggle Coach Voice">${getVoiceCoachEnabled() ? '🎙️' : '🔇'}</button>
          ${step.type === 'work' ? '<button class="fearn-btn fearn-btn--icon" id="guided-info-btn" type="button" title="Form Cues">ℹ️</button>' : ''}
        </div>
      </div>
      <div class="fearn-guided-body" id="guided-body-content">
        <!-- Render Step Card -->
      </div>
    `;

    const bodyContent = overlay.querySelector('#guided-body-content');

    if (step.type === 'work') {
      bodyContent.innerHTML = `
        <div class="fearn-guided-exercise-card">
          <div class="fearn-guided-badge">⚡ ${escapeHtml(step.trackTitle)} · Set ${step.setNumber} of ${step.totalSets}</div>
          <div class="fearn-guided-title">${escapeHtml(step.name)}</div>
          ${step.isTimed ?
            `<div class="fearn-guided-timer-display" id="guided-timer-num">${formatSeconds(activeGuidedSession.timerSec)}</div>` :
            `<div class="fearn-guided-rep-target">🎯 ${escapeHtml(step.repLabel)}</div><div class="fearn-guided-set-label">Target Repetitions</div>`
          }
          <div class="fearn-guided-cue-box">
            <b>Coach Form Cue:</b> ${escapeHtml(step.cues)}
          </div>
          <div class="fearn-guided-controls">
            <button class="fearn-guided-btn--secondary" id="guided-pause-btn" type="button">${activeGuidedSession.isPaused ? '▶️ Resume' : '⏸️ Pause'}</button>
            <button class="fearn-guided-btn--big" id="guided-next-btn" type="button">${step.isTimed ? 'Next Set ➔' : 'Done Set ✓'}</button>
          </div>
        </div>
      `;

      playTransitionSound('rest_to_work');
      speakCoach(step.name + ', Set ' + step.setNumber + (step.isTimed ? ', ' + step.durationSec + ' seconds' : ', ' + step.repLabel));
    } else {
      // Rest Step
      bodyContent.innerHTML = `
        <div class="fearn-guided-exercise-card">
          <div class="fearn-guided-badge fearn-guided-badge--rest">⏸️ Rest & Recovery (${step.restLabel || step.durationSec + 's Rest'})</div>
          <div class="fearn-guided-title">Catch Your Breath & Reset</div>
          <div class="fearn-guided-timer-display fearn-guided-timer-display--rest" id="guided-timer-num">${formatSeconds(activeGuidedSession.timerSec)}</div>
          <div class="fearn-guided-set-label">Next Up: <b>${escapeHtml(step.nextExerciseName)}</b></div>
          <div class="fearn-guided-controls">
            <button class="fearn-guided-btn--secondary" id="guided-add-rest-btn" type="button">+15s Rest</button>
            <button class="fearn-guided-btn--big" id="guided-skip-rest-btn" type="button">Skip Rest ➔</button>
          </div>
        </div>
      `;

      playTransitionSound('work_to_rest');
      speakCoach('Rest for ' + step.durationSec + ' seconds. Next up: ' + step.nextExerciseName);
    }

    // Attach Handlers
    overlay.querySelector('#guided-exit-btn').onclick = () => {
      if (confirm('Exit workout session early?')) {
        closeGuidedSession(container);
      }
    };
    overlay.querySelector('#guided-voice-btn').onclick = () => {
      setVoiceCoachEnabled(!getVoiceCoachEnabled());
      renderGuidedOverlay(container);
    };

    if (step.type === 'work') {
      const infoBtn = overlay.querySelector('#guided-info-btn');
      if (infoBtn) {
        infoBtn.onclick = () => showGuidedInfoModal(step, overlay);
      }
      overlay.querySelector('#guided-pause-btn').onclick = () => {
        activeGuidedSession.isPaused = !activeGuidedSession.isPaused;
        overlay.querySelector('#guided-pause-btn').textContent = activeGuidedSession.isPaused ? '▶️ Resume' : '⏸️ Pause';
      };
      overlay.querySelector('#guided-next-btn').onclick = () => advanceGuidedStep(container);
    } else {
      overlay.querySelector('#guided-add-rest-btn').onclick = () => {
        activeGuidedSession.timerSec += 15;
        const numEl = overlay.querySelector('#guided-timer-num');
        if (numEl) numEl.textContent = formatSeconds(activeGuidedSession.timerSec);
      };
      overlay.querySelector('#guided-skip-rest-btn').onclick = () => advanceGuidedStep(container);
    }

    // Start Timer Interval if timed
    if (step.isTimed || step.type === 'rest') {
      activeGuidedSession.timerInterval = setInterval(() => {
        if (!activeGuidedSession || activeGuidedSession.isPaused) return;
        activeGuidedSession.timerSec--;
        const numEl = overlay.querySelector('#guided-timer-num');
        if (numEl) numEl.textContent = formatSeconds(activeGuidedSession.timerSec);

        if (activeGuidedSession.timerSec === 3) { playTransitionSound('countdown'); speakCoach('3'); }
        if (activeGuidedSession.timerSec === 2) { playTransitionSound('countdown'); speakCoach('2'); }
        if (activeGuidedSession.timerSec === 1) { playTransitionSound('countdown'); speakCoach('1'); }

        if (activeGuidedSession.timerSec <= 0) {
          playBeep(880, 0.2);
          advanceGuidedStep(container);
        }
      }, 1000);
    }
  }

  function advanceGuidedStep(container) {
    stopGuidedTimer();
    playBeep(660, 0.12);

    if (activeGuidedSession) {
      const curStep = activeGuidedSession.queue[activeGuidedSession.stepIndex];
      if (curStep.type === 'work' && FEARN.telemetry) {
        FEARN.telemetry.log({
          category: 'fitness',
          moduleId: 'fitness',
          action: 'complete_guided_set',
          details: 'Completed ' + curStep.name + ' Set ' + curStep.setNumber + '/' + curStep.totalSets,
          locationMode: activeGuidedSession.locationMode
        });
      }

      activeGuidedSession.stepIndex++;
      if (activeGuidedSession.stepIndex < activeGuidedSession.queue.length) {
        activeGuidedSession.timerSec = activeGuidedSession.queue[activeGuidedSession.stepIndex].durationSec;
      }
    }
    renderGuidedOverlay(container);
  }

  function showGuidedInfoModal(step, overlay) {
    let modal = overlay.querySelector('#guided-info-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'guided-info-modal';
      modal.className = 'fearn-guided-info-modal';
      overlay.appendChild(modal);
    }

    modal.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 12px;">
        <div style="font-size: 1.25rem; font-weight: 700; color: #fff;">📖 ${escapeHtml(step.name)} — Form Guide</div>
        <button class="fearn-btn fearn-btn--icon" id="close-info-modal-btn" type="button">✕</button>
      </div>
      <div style="font-size: 0.95rem; line-height: 1.6; color: #cbd5e1; display: flex; flex-direction: column; gap: 14px;">
        <div><b>Target Focus:</b> ${escapeHtml(step.trackTitle)}</div>
        <div><b>Equipment Needed:</b> ${escapeHtml(step.equipment)}</div>
        <div style="background: rgba(0,0,0,0.3); padding: 14px; border-radius: 10px; border-left: 3px solid #10b981;">
          <b>Execution & Form Checklist:</b><br/>${escapeHtml(step.cues)}
        </div>
        <div style="font-size: 0.8rem; color: #94a3b8;">
          💡 <i>Note: Video demonstrations are omitted to preserve full offline zero-server static functionality. Detailed biomechanical form cues are provided in full text above.</i>
        </div>
      </div>
    `;

    modal.querySelector('#close-info-modal-btn').onclick = () => modal.remove();
  }

  function renderGuidedCompletion(overlay, container) {
    const elapsedSec = Math.max(1, Math.round((Date.now() - activeGuidedSession.startTime) / 1000));
    const elapsedMinutes = (elapsedSec / 60).toFixed(1);
    const estimatedCalories = Math.round(elapsedMinutes * 7.5);

    // Confetti and celebration
    if (FEARN.ui && typeof FEARN.ui.celebrateCheckpoint === 'function') {
      FEARN.ui.celebrateCheckpoint('fitness', 'Daily Training Split');
    }
    if (FEARN.streak && typeof FEARN.streak.log === 'function') {
      FEARN.streak.log('fitness');
    }
    playTransitionSound('fanfare');
    const VICTORY_QUOTES = [
      "Incredible session! Workout complete. Your physical mastery, grit, and discipline are reaching elite levels!",
      "Victory achieved! Fantastic training session. You pushed through every single set with flawless focus!",
      "Phenomenal dedication! Another milestone conquered on your road to absolute physical autonomy!",
      "Outstanding performance! Your power, stamina, and recovery are elevating day after day!"
    ];
    const pickedQuote = VICTORY_QUOTES[Math.floor(Math.random() * VICTORY_QUOTES.length)];
    speakCoach(pickedQuote);

    if (FEARN.telemetry) {
      FEARN.telemetry.log({
        category: 'fitness',
        moduleId: 'fitness',
        action: 'complete_workout_session',
        details: 'Completed full guided workout in ' + elapsedMinutes + ' minutes (~' + estimatedCalories + ' kcal)',
        locationMode: activeGuidedSession.locationMode
      });
    }

    overlay.innerHTML = `
      <div class="fearn-guided-body">
        <div class="fearn-guided-summary-card">
          <div style="font-size: 2.5rem;">🎉🏆</div>
          <div class="fearn-guided-title" style="font-size: 1.9rem;">Workout Complete!</div>
          <div class="fearn-guided-set-label">Great dedication today. Progression logged to your streak.</div>
          
          <div class="fearn-guided-stat-grid">
            <div class="fearn-guided-stat-tile">
              <div class="fearn-guided-stat-val">${elapsedMinutes}m</div>
              <div class="fearn-guided-stat-label">Active Time</div>
            </div>
            <div class="fearn-guided-stat-tile">
              <div class="fearn-guided-stat-val">${estimatedCalories}</div>
              <div class="fearn-guided-stat-label">Est. Calories Burned</div>
            </div>
          </div>

          <div style="width: 100%; text-align: left; margin-top: 6px;">
            <div style="font-size: 0.85rem; font-weight: 700; margin-bottom: 8px; color: #94a3b8;">How was today's intensity?</div>
            <div class="fearn-guided-feedback-row">
              <button class="fearn-guided-feedback-btn" data-val="easy" type="button">🟢 Too Easy</button>
              <button class="fearn-guided-feedback-btn is-selected" data-val="just_right" type="button">🎯 Just Right</button>
              <button class="fearn-guided-feedback-btn" data-val="hard" type="button">🔥 Too Hard</button>
            </div>
          </div>

          <button class="fearn-guided-btn--big" id="guided-finish-btn" type="button" style="width: 100%;">Return to Training Hub ➔</button>
        </div>
      </div>
    `;

    const feedbackBtns = overlay.querySelectorAll('.fearn-guided-feedback-btn');
    feedbackBtns.forEach(btn => {
      btn.onclick = () => {
        feedbackBtns.forEach(b => b.classList.remove('is-selected'));
        btn.classList.add('is-selected');
        const feedback = btn.getAttribute('data-val');
        FEARN.storage.set('fitness:lastFeedback', feedback);
      };
    });

    overlay.querySelector('#guided-finish-btn').onclick = () => {
      closeGuidedSession(container);
    };
  }

  function closeGuidedSession(container) {
    stopGuidedTimer();
    stopAllAudioAndCoach();
    activeGuidedSession = null;
    const overlay = document.getElementById('fearn-guided-workout-modal');
    if (overlay) overlay.remove();
    renderFitness(container);
  }

  function formatSeconds(sec) {
    const s = Math.max(0, sec || 0);
    const m = Math.floor(s / 60);
    const rem = s % 60;
    return (m < 10 ? '0' : '') + m + ':' + (rem < 10 ? '0' : '') + rem;
  }

  // -----------------------------------------------------------------------
  // Main Module Render (Summary Screen, Library, Apex Stride)
  // -----------------------------------------------------------------------
  function renderFitness(container) {
    container.innerHTML = '';
    const wrapper = document.createElement('div');
    wrapper.className = 'fearn-module-content';
    wrapper.style.maxWidth = '1000px';
    wrapper.style.margin = '0 auto';
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.gap = '20px';

    const locationMode = getLocationMode();
    const viewMode = getViewMode();

    // 1. Top Header with Navigation Tabs & Global Location Mode
    const header = document.createElement('div');
    header.className = 'fearn-card fearn-glass--strong';
    header.style.padding = '22px 24px';
    header.style.display = 'flex';
    header.style.flexDirection = 'column';
    header.style.gap = '16px';

    header.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
        <div>
          <div style="font-size: 1.35rem; font-weight: 800; color: var(--text-main); display: flex; align-items: center; gap: 8px;">
            <span>🏋️</span> FEARN Athletic & Movement Mastery
          </div>
          <div style="font-size: 0.82rem; color: var(--text-sub); margin-top: 2px;">
            14 physiological tracks · Adaptive 7-day student splits · Level-Up Progress Checks
          </div>
        </div>
        <div style="display: flex; gap: 6px; align-items: center;">
          <button class="fearn-btn ${viewMode === 'daily' ? 'fearn-btn--primary' : ''}" id="tab-daily-btn" type="button">📅 Daily Workout</button>
          <button class="fearn-btn ${viewMode === 'apex' ? 'fearn-btn--primary' : ''}" id="tab-apex-btn" type="button">🏃 Apex Stride</button>
          <button class="fearn-btn ${viewMode === 'library' ? 'fearn-btn--primary' : ''}" id="tab-library-btn" type="button">📚 Track Library & Roadmap</button>
        </div>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; border-top: 1px solid var(--glass-border); padding-top: 14px;">
        <div style="font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-faint);">
          📍 Location & Equipment Mode:
        </div>
        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
          ${PROGRAM.LOCATION_MODES.map(m => `
            <button class="fearn-mode-pill ${m.id === locationMode ? 'is-selected' : ''}" data-mode="${m.id}" type="button">
              ${escapeHtml(m.label)}
            </button>
          `).join('')}
        </div>
      </div>
    `;

    wrapper.appendChild(header);

    // Wire Tabs & Location Mode Buttons
    var tabDaily = header.querySelector('#tab-daily-btn'); if (tabDaily) tabDaily.onclick = () => { setViewMode('daily'); renderFitness(container); };
    var tabApex = header.querySelector('#tab-apex-btn'); if (tabApex) tabApex.onclick = () => { setViewMode('apex'); renderFitness(container); };
    var tabLib = header.querySelector('#tab-library-btn'); if (tabLib) tabLib.onclick = () => { setViewMode('library'); renderFitness(container); };

    header.querySelectorAll('.fearn-mode-pill').forEach(pill => {
      pill.onclick = () => {
        setLocationMode(pill.getAttribute('data-mode'));
        renderFitness(container);
      };
    });

    // 2. View Rendering
    if (viewMode === 'daily') {
      renderDailyWorkoutSummary(wrapper, container, locationMode);
    } else if (viewMode === 'apex') {
      renderApexStrideView(wrapper, container);
    } else {
      renderTrackLibraryView(wrapper, container, locationMode);
    }

    container.appendChild(wrapper);
  }

  // -----------------------------------------------------------------------
  // Pre-Workout Summary Screen (Part A)
  // -----------------------------------------------------------------------
  function renderDailyWorkoutSummary(wrapper, container, locationMode) {
    const selectedDay = getSelectedDay();
    const totalDays = (PROGRAM.DAILY_PLANS && PROGRAM.DAILY_PLANS.length) ? PROGRAM.DAILY_PLANS.length : 170;
    const dayPlan = (PROGRAM.DAILY_PLANS && (PROGRAM.DAILY_PLANS[selectedDay - 1] || PROGRAM.DAILY_PLANS.find(p => p.day === selectedDay))) || PROGRAM.DAILY_PLANS[0];
    const exercises = getExercisesForDayPlan(dayPlan, locationMode);

    const currentPhaseNum = dayPlan.phaseNumber || (Math.floor((selectedDay - 1) / 30) + 1);

    const phases = [
      { num: 1, label: 'P1: Days 1–30', range: '1–30', name: 'Foundation & Silent Isometric Stability' },
      { num: 2, label: 'P2: Days 31–60', range: '31–60', name: 'Hypertrophic Density & Time-Under-Tension' },
      { num: 3, label: 'P3: Days 61–90', range: '61–90', name: 'Core Anti-Rotation & Muscular Work Capacity' },
      { num: 4, label: 'P4: Days 91–120', range: '91–120', name: 'Unilateral Power & Kinetic Asymmetry' },
      { num: 5, label: 'P5: Days 121–150', range: '121–150', name: 'High-Performance Functional Athleticism' },
      { num: 6, label: 'P6: Days 151–170', range: '151–170', name: 'Omni-Mastery Peak Physical Autonomy' }
    ];

    const card = document.createElement('div');
    card.className = 'fearn-card fearn-glass--strong';
    card.style.padding = '24px';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.gap = '18px';

    let totalEstimatedMinutes = 0;
    exercises.forEach(ex => {
      const sets = ex.sets || 3;
      const secPerSet = ex.targetSec || (ex.reps ? ex.reps * 3 : 40);
      const restPerSet = (locationMode === 'small_room') ? 20 : 25;
      totalEstimatedMinutes += Math.round(((secPerSet + restPerSet) * sets) / 60);
    });
    if (totalEstimatedMinutes < 15) totalEstimatedMinutes = dayPlan.durationMinutes || 40;

    // Build Interspersed Blocks description
    const blockPairs = [];
    for (let i = 0; i < exercises.length; i += 2) {
      const bLetter = String.fromCharCode(65 + Math.floor(i / 2));
      const pair = [exercises[i]];
      if (i + 1 < exercises.length) pair.push(exercises[i + 1]);
      blockPairs.push({ letter: bLetter, pair: pair });
    }

    card.innerHTML = `
      <!-- Macrocycle Phase Selector -->
      <div>
        <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-faint); margin-bottom: 8px;">
          170-Day Periodized Curriculum · Macrocycle Phases:
        </div>
        <div style="display: flex; gap: 6px; overflow-x: auto; -webkit-overflow-scrolling: touch; max-width: 100%; padding-bottom: 4px;">
          ${phases.map(p => `
            <button class="fearn-btn ${p.num === currentPhaseNum ? 'fearn-btn--primary' : ''}" style="font-size: 0.78rem; white-space: normal; word-break: break-word; padding: 6px 12px;" data-phase-jump="${p.num}" type="button">
              ${escapeHtml(p.label)}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Quick Day Navigation Bar (Prev / Day Selector / Next) -->
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; background: rgba(255,255,255,0.03); padding: 12px 16px; border-radius: 12px; border: 1px solid var(--glass-border);">
        <div style="display: flex; align-items: center; gap: 8px;">
          <button class="fearn-btn" id="prev-day-btn" style="padding: 6px 14px;" type="button" ${selectedDay <= 1 ? 'disabled' : ''}>← Day ${selectedDay - 1}</button>
          <span style="font-weight: 800; font-size: 1.05rem; color: var(--text-main);">Day ${selectedDay} of ${totalDays}</span>
          <button class="fearn-btn" id="next-day-btn" style="padding: 6px 14px;" type="button" ${selectedDay >= totalDays ? 'disabled' : ''}>Day ${selectedDay + 1} →</button>
        </div>

        <div style="display: flex; align-items: center; gap: 8px;">
          <label style="font-size: 0.8rem; color: var(--text-sub);">Jump to Day:</label>
          <input type="number" id="jump-day-input" min="1" max="${totalDays}" value="${selectedDay}" style="width: 65px; padding: 4px 8px; border-radius: 6px; border: 1px solid var(--glass-border); background: var(--bg-card); color: var(--text-main); font-weight: 700; text-align: center;" />
          <button class="fearn-btn fearn-btn--primary" id="jump-day-btn" style="padding: 5px 12px;" type="button">Go</button>
        </div>
      </div>

      <!-- Plan Banner -->
      <div style="background: rgba(0,0,0,0.28); padding: 18px 20px; border-radius: var(--radius-md); border: 1px solid var(--glass-border); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div>
          <div style="font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent); font-weight: 800; margin-bottom: 2px;">
            ${escapeHtml(dayPlan.phaseName || 'Phase ' + currentPhaseNum)}
          </div>
          <div style="font-size: 1.28rem; font-weight: 800; color: var(--text-main);">
            ${escapeHtml(dayPlan.name)}: ${escapeHtml(dayPlan.focus)}
          </div>
          <div style="font-size: 0.82rem; color: var(--text-sub); margin-top: 4px; display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
            <span>⏱️ Duration: ~<b>${totalEstimatedMinutes} min</b></span>
            <span>⚡ Protocol: <b>Interspersed Antagonistic Supersets</b></span>
            <span>🏢 Mode: <b>${locationMode === 'small_room' ? 'Tokyo Micro-Dorm (Goodroom Shinagawa Edition: 1.5m×2m silent tension)' : locationMode.replace('_', ' ')}</b></span>
          </div>
        </div>
        <button class="fearn-guided-btn--big" id="start-guided-workout-btn" type="button">
          🚀 Start Workout
        </button>
      </div>

      <!-- Interspersed Superset Structure Preview -->
      <div style="background: rgba(201, 162, 39, 0.06); border: 1px solid rgba(201, 162, 39, 0.2); border-radius: 12px; padding: 14px 18px;">
        <div style="font-weight: 800; font-size: 0.88rem; color: var(--accent); margin-bottom: 6px;">
          🔄 Interspersed Superset Flow Architecture
        </div>
        <div style="font-size: 0.8rem; color: var(--text-sub); line-height: 1.45;">
          Exercises are paired to alternate antagonistic muscle groups (e.g. Set 1 Ex A → Rest 20s → Set 1 Ex B → Rest 20s → Set 2 Ex A...). This accelerates localized muscle recovery while keeping heart rate elevated, doubling training density without premature fatigue.
        </div>
      </div>

      <!-- Movement Blocks -->
      <div style="display: flex; flex-direction: column; gap: 12px;">
        ${blockPairs.map(block => `
          <div style="background: var(--glass-bg-soft); border: 1px solid var(--glass-border); border-radius: 12px; padding: 14px 18px;">
            <div style="font-size: 0.78rem; font-weight: 800; color: var(--text-faint); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 10px;">
              Superset Block ${block.letter} (3 Interspersed Rounds):
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              ${block.pair.map((ex, pIdx) => `
                <div style="padding: 12px 14px; background: rgba(0,0,0,0.22); border-radius: 8px; border-left: 3px solid var(--accent); margin-bottom: 6px;">
                  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                    <div style="display: flex; align-items: center; gap: 10px;">
                      <div style="font-weight: 800; color: var(--accent); font-size: 0.95rem;">${block.letter}${pIdx + 1}</div>
                      <div>
                        <div style="font-weight: 700; font-size: 0.95rem; color: var(--text-main);">${escapeHtml(ex.name)}</div>
                        <div style="font-size: 0.76rem; color: var(--text-sub);">${escapeHtml(ex.trackName)} • ${escapeHtml(ex.equipment)}</div>
                      </div>
                    </div>
                    <div class="fearn-badge" style="font-weight: 700;">${escapeHtml(ex.prescription)}</div>
                  </div>
                  <div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.06); font-size: 0.82rem; color: #cbd5e1; line-height: 1.45;">
                    <b style="color: var(--accent);">Form & Execution:</b> ${escapeHtml(ex.cues)}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;

    // Phase jump buttons
    card.querySelectorAll('[data-phase-jump]').forEach(btn => {
      btn.onclick = () => {
        const pNum = parseInt(btn.getAttribute('data-phase-jump'), 10);
        const dayToJump = ((pNum - 1) * 30) + 1;
        setSelectedDay(dayToJump);
        renderFitness(container);
      };
    });

    // Prev / Next Day
    const prevBtn = card.querySelector('#prev-day-btn');
    if (prevBtn) {
      prevBtn.onclick = () => {
        if (selectedDay > 1) {
          setSelectedDay(selectedDay - 1);
          renderFitness(container);
        }
      };
    }
    const nextBtn = card.querySelector('#next-day-btn');
    if (nextBtn) {
      nextBtn.onclick = () => {
        if (selectedDay < totalDays) {
          setSelectedDay(selectedDay + 1);
          renderFitness(container);
        }
      };
    }

    // Jump to Day input
    const jumpBtn = card.querySelector('#jump-day-btn');
    const jumpInput = card.querySelector('#jump-day-input');
    if (jumpBtn && jumpInput) {
      const doJump = () => {
        let val = parseInt(jumpInput.value, 10);
        if (!isNaN(val) && val >= 1 && val <= totalDays) {
          setSelectedDay(val);
          renderFitness(container);
        }
      };
      jumpBtn.onclick = doJump;
      jumpInput.onkeydown = (e) => { if (e.key === 'Enter') doJump(); };
    }


    card.querySelectorAll('[data-day]').forEach(btn => {
      btn.onclick = () => {
        setSelectedDay(parseInt(btn.getAttribute('data-day'), 10));
        renderFitness(container);
      };
    });

    var startGuided = card.querySelector('#start-guided-workout-btn'); if (startGuided) startGuided.onclick = () => {
      launchGuidedSession(dayPlan, container);
    };

    wrapper.appendChild(card);
  }

  // -----------------------------------------------------------------------
  // Track Library & Future Phase Inspector (Part C)
  // -----------------------------------------------------------------------
  function renderTrackLibraryView(wrapper, container, locationMode) {
    const activeTrackId = getActiveTrackId();
    const activeTrack = PROGRAM.getTrack(activeTrackId) || PROGRAM.TRACKS[0];
    const trackPhases = PROGRAM.getTrackRoadmap(activeTrack.id);
    const trackState = getTrackState(activeTrack.id);
    const inspectedPhaseId = getInspectedPhaseId(activeTrack.id) || (trackPhases[trackState.currentPhaseIndex] ? trackPhases[trackState.currentPhaseIndex].id : trackPhases[0].id);

    const card = document.createElement('div');
    card.className = 'fearn-card fearn-glass--strong';
    card.style.padding = '24px';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.gap = '20px';

    card.innerHTML = `
      <!-- Track Chips -->
      <div>
        <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-faint); margin-bottom: 8px;">
          Select Track (14 Tracks Available):
        </div>
        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
          ${PROGRAM.TRACKS.map(t => `
            <button class="fearn-btn ${t.id === activeTrackId ? 'fearn-btn--primary' : ''}" style="font-size: 0.78rem; padding: 6px 12px;" data-track="${t.id}" type="button">
              ${escapeHtml(t.name)}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Roadmap & Future Phase Inspector -->
      <div style="border-top: 1px solid var(--glass-border); padding-top: 16px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <div style="font-weight: 800; font-size: 1.1rem; color: var(--text-main);">
            ${escapeHtml(activeTrack.name)} — Phase Roadmap (${trackPhases.length} Phases)
          </div>
          <div style="font-size: 0.78rem; color: var(--text-sub);">
            🔍 <i>Click any phase (reached or future) to preview biomechanics & form cues</i>
          </div>
        </div>

        <div style="display: flex; gap: 8px; overflow-x: auto; -webkit-overflow-scrolling: touch; max-width: 100%; padding-bottom: 6px;">
          ${trackPhases.map((ph, idx) => {
            const isCompleted = trackState.completedPhaseIds.includes(ph.id);
            const isCurrent = idx === trackState.currentPhaseIndex;
            const isInspected = ph.id === inspectedPhaseId;

            let pillClass = 'fearn-btn';
            if (isInspected) pillClass += ' fearn-btn--primary';
            else if (isCompleted) pillClass += ' fearn-btn--accent';

            return `
              <button class="${pillClass}" data-phase-id="${ph.id}" type="button" style="font-size: 0.8rem; padding: 8px 14px; white-space: normal; word-break: break-word;">
                ${isCompleted ? '✓ ' : (isCurrent ? '⚡ ' : '🔒 ')}P${idx + 1}: ${escapeHtml(ph.title || ph.name || 'Phase ' + (idx + 1))}
              </button>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Inspected Phase Detail Card -->
      <div id="inspected-phase-container"></div>
    `;

    card.querySelectorAll('[data-track]').forEach(btn => {
      btn.onclick = () => {
        setActiveTrackId(btn.getAttribute('data-track'));
        renderFitness(container);
      };
    });

    card.querySelectorAll('[data-phase-id]').forEach(btn => {
      btn.onclick = () => {
        setInspectedPhaseId(activeTrack.id, btn.getAttribute('data-phase-id'));
        renderFitness(container);
      };
    });

    // Render Inspected Phase Content
    const inspectedContainer = card.querySelector('#inspected-phase-container');
    const phaseData = trackPhases.find(p => p.id === inspectedPhaseId) || trackPhases[0];
    const lesson = PROGRAM.getLesson(phaseData.id);

    if (lesson) {
      const exercises = (lesson.guidedPractice && Array.isArray(lesson.guidedPractice.exercises)) ? lesson.guidedPractice.exercises : [];
      const checkpoints = (lesson.checkpointTest && Array.isArray(lesson.checkpointTest.items)) ? lesson.checkpointTest.items : [];

      inspectedContainer.innerHTML = `
        <div style="background: rgba(0,0,0,0.3); border: 1px solid var(--glass-border); border-radius: var(--radius-md); padding: 20px; display: flex; flex-direction: column; gap: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
            <div>
              <div style="font-size: 1.15rem; font-weight: 800; color: var(--text-main);">
                ${escapeHtml(phaseData.title || phaseData.name || phaseData.id)} (${escapeHtml(lesson.level || phaseData.level)})
              </div>
              <div style="font-size: 0.82rem; color: var(--text-sub); margin-top: 3px;">
                <b>Target Objective:</b> ${escapeHtml(lesson.objective)}
              </div>
            </div>
            <div class="fearn-badge">Mode: ${locationMode.replace('_', ' ')}</div>
          </div>

          <div style="background: var(--glass-bg-soft); padding: 14px; border-radius: 8px; font-size: 0.88rem; line-height: 1.5; color: var(--text-main);">
            <b>Biomechanical Presentation:</b><br/>
            ${window.FEARN && window.FEARN.formatText ? window.FEARN.formatText(lesson.presentation.explanation) : escapeHtml(lesson.presentation.explanation)}
          </div>

          <!-- Phase Movements Breakdown for this location mode -->
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <div style="font-size: 0.78rem; font-weight: 700; text-transform: uppercase; color: var(--text-faint);">
              Phase Exercises & Biomechanical Cues (${locationMode}):
            </div>
            ${exercises.map((exItem, idx) => {
              const cue = (exItem.variants && exItem.variants[locationMode]) ? exItem.variants[locationMode] : (Array.isArray(exItem.formCues) ? exItem.formCues.join('. ') : exItem.formCues);
              return `
                <div style="background: rgba(16, 185, 129, 0.08); border-left: 3px solid #10b981; padding: 12px 14px; border-radius: 6px; font-size: 0.85rem; color: #e2e8f0;">
                  <div style="display: flex; justify-content: space-between; align-items: center;">
                    <b style="color: #fff;">${idx + 1}. ${escapeHtml(exItem.name)}</b>
                    <span class="fearn-badge">${escapeHtml(exItem.prescription)}</span>
                  </div>
                  <div style="margin-top: 4px; font-size: 0.82rem; color: #cbd5e1;">
                    ${escapeHtml(cue)}
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Renamed Checkpoint -> Level-Up Progress Check (Phase Test) -->
          <div style="background: rgba(56, 189, 248, 0.08); border: 1px solid rgba(56, 189, 248, 0.25); padding: 14px; border-radius: 8px;">
            <div style="font-size: 0.85rem; font-weight: 700; color: #38bdf8; margin-bottom: 6px;">
              🎯 Level-Up Progress Check (Phase Test Standards):
            </div>
            <div style="display: flex; flex-direction: column; gap: 6px;">
              ${checkpoints.map((cp, idx) => `
                <div style="font-size: 0.82rem; color: var(--text-main); display: flex; justify-content: space-between; gap: 8px;">
                  <span><b>${idx + 1}. ${escapeHtml(cp.task)}</b></span>
                  <span style="color: var(--text-sub); text-align: right;">${escapeHtml(cp.standard)}</span>
                </div>
              `).join('')}
            </div>
            <div style="font-size: 0.76rem; color: var(--text-faint); margin-top: 8px;">
              Complete all mastery standards with clean form to log mastery and advance to the next physiological phase.
            </div>
          </div>
        </div>
      `;
    }

    wrapper.appendChild(card);
  }

  // -----------------------------------------------------------------------
  // Apex Stride Outdoor View
  // -----------------------------------------------------------------------
  function renderApexStrideView(wrapper, container) {
    const protocols = PROGRAM.APEX_STRIDE_PROTOCOLS || [];
    const activeProtId = getActiveApexProtocolId();
    const activeProt = protocols.find(p => p.id === activeProtId) || protocols[0];

    const card = document.createElement('div');
    card.className = 'fearn-card fearn-glass--strong';
    card.style.padding = '24px';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.gap = '18px';

    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
        <div>
          <div style="font-size: 1.25rem; font-weight: 800; color: var(--text-main);">
            🏃‍♂️ Apex Stride · Open Road, Turf & Track
          </div>
          <div style="font-size: 0.82rem; color: var(--text-sub);">
            High-cadence outdoor running protocols for midfoot rocker propulsion (178–184 SPM).
          </div>
        </div>
        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
          ${protocols.map(p => `
            <button class="fearn-btn ${p.id === activeProtId ? 'fearn-btn--primary' : ''}" data-prot-id="${p.id}" type="button" style="font-size: 0.78rem;">
              ${escapeHtml(p.name)}
            </button>
          `).join('')}
        </div>
      </div>

      <div style="background: rgba(0,0,0,0.3); border: 1px solid var(--glass-border); border-radius: var(--radius-md); padding: 20px; display: flex; flex-direction: column; gap: 14px;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
          <div>
            <div style="font-size: 1.15rem; font-weight: 800; color: #38bdf8;">${escapeHtml(activeProt.name)} (~${activeProt.durationMinutes} min)</div>
            <div style="font-size: 0.85rem; color: var(--text-sub); margin-top: 2px;">${escapeHtml(activeProt.subtitle || '')}</div>
          </div>
          <div class="fearn-badge">${escapeHtml(activeProt.intensity || 'Cardio')}</div>
        </div>

        <div style="background: rgba(255,255,255,0.05); padding: 14px; border-radius: 8px; font-size: 0.85rem; line-height: 1.5;">
          <b>Terrain & Cadence Focus:</b> ${escapeHtml(activeProt.focus)}<br/>
          <span style="font-size: 0.78rem; color: var(--text-sub);">Terrain: ${escapeHtml(activeProt.terrain || 'Open Ground')}</span>
        </div>

        <!-- Warmup -->
        ${activeProt.warmup ? `
          <div style="font-size: 0.82rem; color: #cbd5e1; background: var(--glass-bg-soft); padding: 10px 14px; border-radius: 6px;">
            <b>Dynamic Warm-Up:</b> ${Array.isArray(activeProt.warmup) ? activeProt.warmup.join(' · ') : activeProt.warmup}
          </div>
        ` : ''}

        <!-- Protocol Blocks -->
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--text-faint);">Protocol Training Blocks:</div>
          ${(activeProt.blocks || []).map((b, idx) => `
            <div style="background: var(--glass-bg-soft); padding: 12px 14px; border-radius: 6px; font-size: 0.85rem; display: flex; flex-direction: column; gap: 4px;">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <b>${idx + 1}. ${escapeHtml(b.name)}</b>
                <span class="fearn-badge">${escapeHtml(b.prescription)}</span>
              </div>
              <div style="font-size: 0.8rem; color: var(--text-sub);">${escapeHtml(b.cues)}</div>
            </div>
          `).join('')}
        </div>

        <!-- Cooldown -->
        ${activeProt.cooldown ? `
          <div style="font-size: 0.82rem; color: var(--text-sub); background: var(--glass-bg-soft); padding: 10px 14px; border-radius: 6px;">
            <b>Cool-Down:</b> ${Array.isArray(activeProt.cooldown) ? activeProt.cooldown.join(' · ') : activeProt.cooldown}
          </div>
        ` : ''}

        <button class="fearn-btn fearn-btn--primary" id="log-apex-run-btn" type="button" style="align-self: flex-start; margin-top: 6px;">
          ⚡ Log Outdoor Stride Session to Telemetry
        </button>
      </div>
    `;

    card.querySelectorAll('[data-prot-id]').forEach(btn => {
      btn.onclick = () => {
        setActiveApexProtocolId(btn.getAttribute('data-prot-id'));
        renderFitness(container);
      };
    });

    var logApex = card.querySelector('#log-apex-run-btn'); if (logApex) logApex.onclick = () => {
      if (FEARN.telemetry) {
        FEARN.telemetry.log({
          category: 'fitness',
          moduleId: 'fitness',
          action: 'log_apex_stride_run',
          details: 'Completed ' + activeProt.name + ' (' + activeProt.durationMinutes + ' min outdoor stride)'
        });
      }
      if (FEARN.streak) FEARN.streak.log('fitness');
      alert('Apex Stride session recorded into your streak and Daily Telemetry Journal!');
    };

    wrapper.appendChild(card);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // Register with FEARN engine
  FEARN.registerModule({
    id: 'fitness',
    name: 'Fitness',
    icon: '🏋️',
    render: renderFitness,
    getProgress: function () {
      let totalPhases = 0;
      let completedPhases = 0;
      PROGRAM.TRACKS.forEach((t) => {
        const roadmap = PROGRAM.getTrackRoadmap(t.id);
        totalPhases += (t.phaseCount || (roadmap ? roadmap.length : 0) || 0);
        const st = getTrackState(t.id);
        completedPhases += (st.completedPhaseIds ? st.completedPhaseIds.length : (st.currentPhaseIndex || 0));
      });
      return {
        completed: completedPhases,
        total: totalPhases,
        percent: totalPhases > 0 ? Math.round((completedPhases / totalPhases) * 100) : 0,
        streak: FEARN.streak.get('fitness'),
        nextLesson: {
          id: 'fitness-daily',
          title: "Today's Guided Workout",
          unit: 'Daily Training Split'
        }
      };
    }
  });

})(typeof window !== 'undefined' ? window : globalThis);
