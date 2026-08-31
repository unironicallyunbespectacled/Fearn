# Cross-Engine & Cross-Device Shell Audit Report

**Date**: 2026-08-31  
**Author**: Antigravity Final Unattended Agent  
**Scope**: Apple iPad (iPadOS Safari / WebKit), Apple iPhone (iOS Safari / WebKit), and Laptop Web Browsers

---

## 1. Environment & Target Hardware Assessment
- **Target Hardware Identified**: Operator's physical Apple iPad (iPadOS Safari / WebKit), physical Apple iPhone (iOS Safari / WebKit), and physical laptop.
- **Current Runtime Environment**: Windows OS (x64).
- **Available Executables in Environment**:
  - Google Chrome (`C:\Program Files (x86)\Google\Chrome\Application\chrome.exe`): Available (Chromium engine proxy).
  - Microsoft Edge (`C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`): Available (Chromium engine proxy).
  - Apple Safari / WebKit binary / iOS Simulator: **NOT available** in this Windows environment.
  - Mozilla Firefox / Gecko binary: **NOT available** in this Windows environment.

---

## 2. RTL Script Isolation & Layout Verification

### Code-Level Architectural Analysis:
1. **SRS Flashcard Deck (`srs-deck.js`)**:
   - Both front and back card faces use explicit `dir="auto"` HTML attributes (`lines 168, 175`) to guarantee proper bidirectional isolation when rendering Nastaliq (Urdu), Arabic, Hebrew, or mixed LTR/RTL text strings.
2. **Language Lesson Flow Containers (`modules/languages/arabic.js`, `modules/languages/urdu.js`)**:
   - Both modules explicitly scope RTL by assigning `dir="rtl"` to their local container elements (`flowRoot` and `list`) rather than applying global styling to the whole document body or viewport.
3. **Module Switching & View Navigation (`app.html`, `index.html`)**:
   - In `selectSlot(slotId)` (line 828) and back-button click handler (line 854), the shell explicitly resets `moduleRoot`:
     ```javascript
     moduleRoot.removeAttribute("dir");
     moduleRoot.style.direction = "";
     moduleRoot.style.textAlign = "";
     moduleRoot.className = "fearn-glass";
     ```
   - This ensures that switching from an RTL module (Arabic / Urdu) to an LTR module (e.g. Spanish, German, Cantonese, Scrabble) immediately clears all `dir` attributes and CSS `direction` / `textAlign` styles from the parent glass mount container.

---

## 3. Honest Testing Limitation Statement (Per Rule Zero)
- Because no native WebKit binary, iOS Simulator, or macOS/iOS hardware is present in this execution environment, **the layout behavior remains untested against the operator's actual iPad and iPhone Safari instances**.
- While structural code review and Chromium engine execution confirm that the DOM attributes and styles are strictly scoped and reset on navigation, real WebKit/Safari-specific reflow or dynamic PWA cache repaint behaviors on iOS/iPadOS hardware require physical verification on those devices.
