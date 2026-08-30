# Prompt 6: Fix the Silent Speaker Button — Full Audio Investigation Across Fearn

Before touching anything, read `REPORTS/AIRTIGHT_PROMPT_FOR_ANTIGRAVITY_9_LANGUAGES.md`, `REPORTS/PROMPT_ADDENDUM_HARDENED_EVASIONS.md`, and `REPORTS/ANTI_GAMING_PROTOCOL_V2_GATE_TAMPERING.md`. The same no-scrimping standard applies: verify this is genuinely fixed by actually clicking the button in a real browser and hearing sound, not by reading the code and assuming it's fine.

## The bug report

Clicking the 🔊 speaker button anywhere in Fearn produces no sound. No error visible to the user, button just does nothing audible.

## What I found reading the code myself (a starting point, not the final answer — verify all of this live)

`FEARN.audio.speak(text, langKey)` in `engine.js` is the single implementation behind every speaker button in the app (wired via `FEARN.audio.createSpeakButton`, used in all 20 `modules/languages/*.js` files, both in the main lesson presentation examples and in the SRS warm-up review cards). Its current implementation:

```js
speak(text, langKey) {
  try {
    if (typeof window === 'undefined' || !window.speechSynthesis) return false;
    if (window.speechSynthesis.paused) window.speechSynthesis.resume();
    window.speechSynthesis.cancel();
    const langTag = AUDIO_LANG_TAGS[langKey] || langKey || 'en-US';
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = langTag;
    utter.rate = currentSpeechRate || 0.9;
    const bestVoice = findBestVoice(langTag);
    if (bestVoice) utter.voice = bestVoice;
    activeUtterances.add(utter);
    utter.onend = function () { activeUtterances.delete(utter); };
    utter.onerror = function () { activeUtterances.delete(utter); };
    setTimeout(function () {
      try {
        if (window.speechSynthesis.paused) window.speechSynthesis.resume();
        window.speechSynthesis.speak(utter);
      } catch (speakErr) { console.warn('FEARN.audio speak dispatch error:', speakErr); }
    }, 12);
    return true;
  } catch (err) { console.warn('FEARN.audio.speak error:', err); return false; }
}
```

Prime suspect: **the actual `window.speechSynthesis.speak(utter)` call is wrapped in a `setTimeout(..., 12)`.** Browsers commonly require Web Speech API calls to be made synchronously within the same call stack as a genuine user gesture (the click), as an anti-abuse/autoplay-policy measure. Deferring the real `speak()` call by even 12ms via `setTimeout` can break that synchronous chain, causing the browser to silently drop the speech request — no error thrown, `onerror` never fires, nothing in the console, exactly matching the reported symptom. The comment above this code claims the delay "prevents a Chromium cancel() race condition," so removing it naively may reintroduce whatever bug it was trying to paper over — this needs to be understood and fixed properly, not just deleted.

## Other real suspects to rule in or out, in order

1. **The setTimeout issue above** — test calling `window.speechSynthesis.speak(utter)` synchronously, directly inside the click handler, with no setTimeout at all. If that fixes it, figure out what the original "cancel() race condition" actually was and solve it a different way (e.g., checking `speechSynthesis.speaking`/`pending` state before cancel, rather than deferring the new speak call).
2. **`getVoices()` empty on first load.** `window.speechSynthesis.getVoices()` is often empty synchronously on page load and only populates after the async `voiceschanged` event fires. If `findBestVoice()` runs before voices are loaded, it may behave unexpectedly. Verify `populateVoices()` is actually being called and re-called on `onvoiceschanged`, and that a `speak()` call made before voices finish loading doesn't silently break (it generally shouldn't — speech should work with a default/null voice — but verify this is actually true in practice, in a real browser, not assumed).
3. **`cancel()` immediately followed by `speak()`.** Even with the timeout removed, verify that calling `cancel()` and then `speak()` back-to-back doesn't itself cause the browser to drop the utterance. Some Chromium versions have had bugs here; test on the actual browser(s) this app targets.
4. **No system TTS voices installed at all in the test/deployment environment.** Rule this out first, trivially: open DevTools console and run `speechSynthesis.getVoices().length` — if it's 0 in the browser being tested, that's an environment issue, not a code bug, and needs a different fix (report it, don't spend the investigation budget chasing a code bug that isn't there).
5. **Silent JS exception upstream of the button ever being wired correctly.** Confirm the button's `onclick` is actually attached and actually fires — add a temporary `console.log` at the very top of the click handler while debugging, confirm it fires, then confirm `FEARN.audio.speak` is actually reached and reaches the `window.speechSynthesis.speak()` line specifically.
6. **Autoplay/permissions policy** — check whether the browser's site permissions have blocked audio/autoplay for the page, distinct from a code bug.

## Separately: the Morse skill has its own, different audio system

`modules/skills/morse.js` has a "🔊 Tone" button that calls `window.FEARN_PLAY_MORSE(pattern)` — this is a completely separate implementation from `FEARN.audio.speak` (likely Web Audio API oscillator tones, not speech synthesis). Test this independently; it may or may not have the same bug, since it's different code. Report on it separately.

## What "fixed" means here — do not claim this without doing all of the following

1. **Actually run the app in a real browser** (not a Node.js sandbox — `speechSynthesis` does not exist in Node, so no amount of `node -e` testing can verify this; use the `run` skill or launch it directly and interact with a real browser instance).
2. **Click an actual speaker button on an actual lesson screen and confirm audio is genuinely heard** (or, if you cannot literally hear audio in your environment, confirm via DevTools that `speechSynthesis.speaking` becomes `true` after the click and an `onend` event eventually fires — that's the closest verifiable proxy to "it worked").
3. **Test this in more than one browser if possible** (Chrome and Firefox at minimum) since Web Speech API behavior differs meaningfully between them.
4. **Test across a few different language modules**, not just one — the bug might be language-agnostic (in the shared `FEARN.audio.speak`) or could interact differently per language depending on `findBestVoice` results for that language's `langTag`.
5. **Test the "leave the tab, switch language/unit/section/lesson" scenario too** — the user separately reported that navigating away while audio might be queued/playing leaves stale audio state; confirm `FEARN.audio.stop()` is actually being called on every navigation path (route change, unit change, lesson change — not just the `hashchange`/`popstate` listeners already added, if those don't cover every navigation method the app actually uses) and that switching contexts doesn't leave a broken `speechSynthesis` queue that blocks the next speak() call, which could itself explain silence on subsequent clicks even if the first click of a session works.
6. **Report exactly what the root cause was**, in plain terms, in the commit message — not just "fixed audio," but what was actually broken and why.

## What NOT to do

- Do not claim this is fixed based on reading the code and reasoning about what "should" work — this bug was reported by a real user clicking a real button in a real browser and hearing nothing; the fix has to be verified the same way.
- Do not paper over the symptom with a broader try/catch that swallows the real error — find and fix the actual cause.
- Do not touch unrelated code while doing this (curriculum content, the audit script, etc.) — this is a scoped, focused bug fix.
