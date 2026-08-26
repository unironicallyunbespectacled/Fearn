/* ==========================================================================
   FEARN — focus-noise.js
   Offline Synthesized Cabin Noise Canceller & Ambient Focus Engine.
   Zero network dependencies, pure Web Audio API synthesis.
   ========================================================================== */

(function (global) {
  'use strict';

  var audioCtx = null;
  var noiseNode = null;
  var gainNode = null;
  var isPlaying = false;
  var currentType = 'brown'; // 'brown', 'pink', 'white'

  function getAudioContext() {
    if (!audioCtx) {
      var AudioContext = global.AudioContext || global.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function createNoiseBuffer(ctx, type) {
    var bufferSize = ctx.sampleRate * 4; // 4 seconds looped buffer
    var buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    var output = buffer.getChannelData(0);
    
    var lastOut = 0.0;
    var b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

    for (var i = 0; i < bufferSize; i++) {
      var white = Math.random() * 2 - 1;

      if (type === 'brown') {
        // Brown noise (deep rumble, optimal for airplane cabin engine masking)
        output[i] = (lastOut + (0.02 * white)) / 1.02;
        lastOut = output[i];
        output[i] *= 3.5; // Gain compensation
      } else if (type === 'pink') {
        // Pink noise (balanced 1/f falloff)
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
        output[i] *= 0.11;
        b6 = white * 0.115926;
      } else {
        // Pure White Noise
        output[i] = white * 0.15;
      }
    }
    return buffer;
  }

  var FEARN_FOCUS = {
    start: function (type, volume) {
      var ctx = getAudioContext();
      if (!ctx) return;

      if (isPlaying) {
        FEARN_FOCUS.stop();
      }

      currentType = type || 'brown';
      var vol = (volume !== undefined) ? volume : 0.35;

      var buffer = createNoiseBuffer(ctx, currentType);
      noiseNode = ctx.createBufferSource();
      noiseNode.buffer = buffer;
      noiseNode.loop = true;

      // Low-pass filter for soothing acoustic profile
      var filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = currentType === 'brown' ? 420 : 1100;

      gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0.01, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(Math.max(0.01, vol), ctx.currentTime + 0.8);

      noiseNode.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);

      noiseNode.start(0);
      isPlaying = true;
    },

    stop: function () {
      if (!isPlaying || !gainNode || !audioCtx) return;
      try {
        gainNode.gain.setValueAtTime(gainNode.gain.value, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.5);
        setTimeout(function () {
          if (noiseNode) {
            noiseNode.stop();
            noiseNode.disconnect();
            noiseNode = null;
          }
          isPlaying = false;
        }, 550);
      } catch (e) {
        if (noiseNode) noiseNode.stop();
        isPlaying = false;
      }
    },

    toggle: function (type) {
      if (isPlaying) {
        FEARN_FOCUS.stop();
        return false;
      } else {
        FEARN_FOCUS.start(type || 'brown');
        return true;
      }
    },

    isPlaying: function () {
      return isPlaying;
    }
  };

  global.FEARN = global.FEARN || {};
  global.FEARN.focus = FEARN_FOCUS;

})(typeof window !== 'undefined' ? window : globalThis);
