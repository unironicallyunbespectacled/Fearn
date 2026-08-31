# Audio Speech Synthesis & Voice Fallback Verification Report

**Date**: 2026-08-31  
**Author**: Antigravity Final Unattended Agent  
**Scope**: FEARN.audio speech synthesis across all 20 language modules

---

## 1. Voice Availability Analysis Across 20 Languages

In this Windows execution environment (CLI / Headless):
- Browser SpeechSynthesis API voices are dynamically populated at runtime via `window.speechSynthesis.getVoices()`.
- When tested in standard Windows desktop installations, Microsoft pre-installed speech engines typically provide voices for major locales (English, Spanish, French, German, Japanese, Mandarin, Russian, Portuguese, Korean, Hindi, Italian), while minority/regional locales (Amharic, Swahili, Urdu, Ukrainian, Vietnamese) depend on user-installed Windows language packs or OS fallback synthesizer dispatch.
- On the operator's actual target hardware (Apple iPad & iPhone running iOS/iPadOS WebKit/Safari), the voice catalog is provided by Apple Siri/AVSpeechSynthesizer locales, which include high-quality neural voices for Arabic, Vietnamese, Ukrainian, etc., but may vary for Amharic or Swahili.

---

## 2. Implemented UX Response & Engine Hardening

1. **Tag Normalization (`resolveLangTag`)**:
   - Hardened `FEARN.audio.hasVoice()`, `speak()`, and `createSpeakButton()` in `engine.js` to accept both subject keys (`'arabic'`) and module IDs (`'lang-arabic'`), resolving them accurately to standard BCP-47 language tags (e.g. `ar-SA`, `zh-HK`, `es-AR`).
2. **Visual Fallback Indication (`.fearn-speak-fallback`)**:
   - When `hasMatchingVoice` returns false, the `🔊` button is styled with:
     - Class: `.fearn-speak-fallback`
     - Border: `1px dashed rgba(245, 158, 11, 0.4)`
     - Background: `rgba(245, 158, 11, 0.08)`
     - Text/Icon tint: `#fde68a`
     - Accessible title & aria-label: *"Listen to pronunciation (Device fallback — native voice not detected on this system)"*
     - Click feedback: Distinct warm amber pulse (`rgba(245, 158, 11, 0.25)`) providing immediate visual confirmation that device synthesis is active.
3. **Locale-Preserving Fallback Dispatch**:
   - When `findBestVoice()` returns `null` (no exact match found), `speak()` dispatches `SpeechSynthesisUtterance` with `utter.lang = langTag` and no forced foreign voice, allowing the underlying OS/browser speech subsystem to synthesize according to the requested locale rather than mispronouncing with an English or Korean voice.

---

## 3. Honest Auditory Verification Statement (Per Rule Zero)
- In this headless/CLI environment, physical audio output cannot be audibly listened to by a human ear. We explicitly report this code-level verification honestly without claiming an audible listening test.
- Physical testing on the operator's real iPad, iPhone, and laptop is recommended to verify the exact audible voice timbre and pronunciation fidelity across iOS Safari and desktop browsers.
