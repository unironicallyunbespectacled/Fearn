// FEARN Modular Plugin — Command Palette (Ctrl+K / Cmd+K)
// 100% Self-Contained. Attaches on demand, zero modifications to core DOM layout.

(function (global) {
  'use strict';

  var ALL_MODULES = [
    { id: 'lang-spanish', name: 'Spanish', icon: '🇪🇸', cat: 'Language', level: 'C2 Native' },
    { id: 'lang-japanese', name: 'Japanese', icon: '🇯🇵', cat: 'Language', level: 'N1 Advanced' },
    { id: 'lang-mandarin', name: 'Mandarin Chinese', icon: '🇨🇳', cat: 'Language', level: 'HSK 6' },
    { id: 'lang-french', name: 'French', icon: '🇫🇷', cat: 'Language', level: 'DALF C2' },
    { id: 'lang-german', name: 'German', icon: '🇩🇪', cat: 'Language', level: 'C2 Mastery' },
    { id: 'lang-arabic', name: 'Arabic (MSA)', icon: '🇸🇦', cat: 'Language', level: 'C2 Classical' },
    { id: 'lang-russian', name: 'Russian', icon: '🇷🇺', cat: 'Language', level: 'TRKI 4' },
    { id: 'lang-brazilian-portuguese', name: 'Brazilian Portuguese', icon: '🇧🇷', cat: 'Language', level: 'Celpe-Bras' },
    { id: 'lang-korean', name: 'Korean', icon: '🇰🇷', cat: 'Language', level: 'TOPIK VI' },
    { id: 'lang-hindi', name: 'Hindi', icon: '🇮🇳', cat: 'Language', level: 'C2 Literary' },
    { id: 'lang-urdu', name: 'Urdu', icon: '🇵🇰', cat: 'Language', level: 'C2 Nastaliq' },
    { id: 'lang-cantonese', name: 'Cantonese', icon: '🇭🇰', cat: 'Language', level: 'Colloquial C2' },
    { id: 'lang-turkish', name: 'Turkish', icon: '🇹🇷', cat: 'Language', level: 'TYS C2' },
    { id: 'lang-vietnamese', name: 'Vietnamese', icon: '🇻🇳', cat: 'Language', level: 'C2 Fluency' },
    { id: 'lang-amharic', name: 'Amharic', icon: '🇪🇹', cat: 'Language', level: 'C2 Ge’ez' },
    { id: 'lang-swahili', name: 'Swahili', icon: '🇰🇪', cat: 'Language', level: 'C2 Sanifu' },
    { id: 'lang-ukrainian', name: 'Ukrainian', icon: '🇺🇦', cat: 'Language', level: 'C2 Academic' },
    { id: 'lang-romanian', name: 'Romanian', icon: '🇷🇴', cat: 'Language', level: 'C2 Fluency' },
    { id: 'lang-english', name: 'English', icon: '🇬🇧', cat: 'Language', level: 'C2 Oxford' },
    { id: 'lang-argentine-spanish', name: 'Argentine Spanish', icon: '🇦🇷', cat: 'Language', level: 'Porteño C2' },
    { id: 'skill-chess', name: 'Chess Strategy & Tactics', icon: '♞', cat: 'Skill', level: 'Master Class' },
    { id: 'skill-mentalmath', name: 'Mental Math & Speed Calc', icon: '🧮', cat: 'Skill', level: 'Trachtenberg' },
    { id: 'skill-morse', name: 'Morse Code (CW)', icon: '📡', cat: 'Skill', level: '25+ WPM' },
    { id: 'skill-typing', name: 'Touch Typing & Ergonomics', icon: '⌨️', cat: 'Skill', level: '120+ WPM' },
    { id: 'skill-scrabble', name: 'Scrabble & Anagram Lexicon', icon: '🔤', cat: 'Skill', level: 'Tournament' },
    { id: 'skill-songwriting', name: 'Songwriting & Music Theory', icon: '🎵', cat: 'Skill', level: 'Berklee Tier' },
    { id: 'skill-cs110', name: 'CS110: Algorithms & Data Structures', icon: '💻', cat: 'University', level: 'Elite Core' },
    { id: 'skill-b110', name: 'B110: Market Dynamics & Psych', icon: '📊', cat: 'University', level: 'Executive' },
    { id: 'skill-b111', name: 'B111: Financial Modeling & Valuation', icon: '📈', cat: 'University', level: 'Wall St Core' },
    { id: 'fitness', name: 'Adaptive Fitness & Movement', icon: '🏃', cat: 'Fitness', level: 'Periodized' }
  ];

  function openCommandPalette() {
    var existing = document.getElementById('fearn-command-palette-modal');
    if (existing && existing.parentNode) {
      existing.parentNode.removeChild(existing);
    }

    var overlay = document.createElement('div');
    overlay.id = 'fearn-command-palette-modal';
    overlay.style.cssText = 'position:fixed; inset:0; z-index:100000; background:rgba(0,0,0,0.75); backdrop-filter:blur(16px); display:flex; align-items:flex-start; justify-content:center; padding:12vh 20px 20px 20px;';

    var card = document.createElement('div');
    card.style.cssText = 'width:100%; max-width:640px; background:rgba(15,23,42,0.92); border:1.5px solid rgba(56,189,248,0.35); border-radius:24px; box-shadow:0 25px 60px rgba(0,0,0,0.8), 0 0 40px rgba(56,189,248,0.2); overflow:hidden; display:flex; flex-direction:column; max-height:75vh;';

    var header = document.createElement('div');
    header.style.cssText = 'padding:16px 20px; border-bottom:1px solid rgba(255,255,255,0.1); display:flex; align-items:center; gap:12px;';
    header.innerHTML = '<span style="font-size:1.2rem; color:#38bdf8;">🔍</span><input id="fearn-palette-input" type="text" placeholder="Jump to any subject (e.g. Swahili, Chess, CS110)..." style="flex:1; background:transparent; border:none; outline:none; font-size:1.05rem; font-weight:600; color:#f8fafc; font-family:inherit;" autocomplete="off" /><span style="font-size:0.75rem; color:#64748b; font-weight:700; background:rgba(255,255,255,0.06); padding:4px 8px; border-radius:6px;">ESC to close</span>';

    var list = document.createElement('div');
    list.id = 'fearn-palette-list';
    list.style.cssText = 'flex:1; overflow-y:auto; padding:10px; display:flex; flex-direction:column; gap:6px;';

    card.appendChild(header);
    card.appendChild(list);
    overlay.appendChild(card);
    document.body.appendChild(overlay);

    var input = document.getElementById('fearn-palette-input');
    if (input) input.focus();

    function renderItems(filterText) {
      list.innerHTML = '';
      var q = (filterText || '').toLowerCase().trim();
      var filtered = ALL_MODULES.filter(function (m) {
        return m.name.toLowerCase().includes(q) || m.cat.toLowerCase().includes(q) || m.id.toLowerCase().includes(q);
      });

      if (filtered.length === 0) {
        list.innerHTML = '<div style="padding:24px; text-align:center; color:#64748b; font-size:0.9rem;">No matching disciplines found.</div>';
        return;
      }

      filtered.forEach(function (m, idx) {
        var item = document.createElement('div');
        item.style.cssText = 'display:flex; align-items:center; justify-content:space-between; padding:10px 14px; border-radius:12px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); cursor:pointer; transition:all 0.15s ease;';
        item.innerHTML = '<div style="display:flex; align-items:center; gap:12px;"><span style="font-size:1.3rem;">' + m.icon + '</span><div><div style="font-size:0.92rem; font-weight:700; color:#f1f5f9;">' + m.name + '</div><div style="font-size:0.75rem; color:#94a3b8;">' + m.cat + ' · ' + m.level + '</div></div></div><span style="font-size:0.75rem; color:#38bdf8; font-weight:700; background:rgba(56,189,248,0.1); padding:4px 10px; border-radius:9999px;">Open ➔</span>';

        item.onmouseenter = function () {
          item.style.background = 'rgba(56,189,248,0.14)';
          item.style.borderColor = 'rgba(56,189,248,0.4)';
          item.style.transform = 'translateX(4px)';
        };
        item.onmouseleave = function () {
          item.style.background = 'rgba(255,255,255,0.03)';
          item.style.borderColor = 'rgba(255,255,255,0.06)';
          item.style.transform = 'translateX(0)';
        };
        item.onclick = function () {
          if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
          location.hash = '#module=' + encodeURIComponent(m.id);
        };
        list.appendChild(item);
      });
    }

    renderItems('');

    input.oninput = function () {
      renderItems(input.value);
    };

    overlay.onclick = function (e) {
      if (e.target === overlay) {
        if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      }
    };
  }

  window.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
      e.preventDefault();
      openCommandPalette();
    }
  });

  global.openCommandPalette = openCommandPalette;

})(window);
