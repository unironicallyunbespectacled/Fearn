/* ==========================================================================
   FEARN — world-clock.js
   Cultural World Clock, Multi-City Timezone Hub & Atomic Yocto-Precision Engine.
   Inspired by Twenty Clocks design system.
   ========================================================================== */

(function (root) {
  'use strict';

  var CULTURAL_CAPITALS = {
    'lang-japanese': {
      subject: 'Japanese',
      city: 'Tokyo',
      country: 'Japan',
      flag: '🇯🇵',
      timeZone: 'Asia/Tokyo',
      tagline: 'JST · Nihon Standard Time (UTC+9)',
      culturalNote: 'Dawn of the Rising Sun · Tokyo & Kyoto'
    },
    'lang-spanish': {
      subject: 'Spanish',
      city: 'Madrid',
      country: 'Spain',
      flag: '🇪🇸',
      timeZone: 'Europe/Madrid',
      tagline: 'CET/CEST · Hora Peninsular (UTC+1/+2)',
      culturalNote: 'Puerta del Sol · Madrid & Seville'
    },
    'lang-argentine-spanish': {
      subject: 'Argentine Spanish',
      city: 'Buenos Aires',
      country: 'Argentina',
      flag: '🇦🇷',
      timeZone: 'America/Argentina/Buenos_Aires',
      tagline: 'ART · Hora Oficial Argentina (UTC-3)',
      culturalNote: 'Obelisco & San Telmo · Rioplatense Time'
    },
    'lang-brazilian-portuguese': {
      subject: 'Brazilian Portuguese',
      city: 'Rio de Janeiro',
      country: 'Brazil',
      flag: '🇧🇷',
      timeZone: 'America/Sao_Paulo',
      tagline: 'BRT · Horário de Brasília (UTC-3)',
      culturalNote: 'Copacabana & Santa Teresa · Samba Rhythms'
    },
    'lang-arabic': {
      subject: 'Arabic',
      city: 'Beirut / Cairo',
      country: 'Lebanon & Egypt',
      flag: '🇱🇧',
      timeZone: 'Asia/Beirut',
      tagline: 'EET/AST · Levant & Nile Standard Time (UTC+2/+3)',
      culturalNote: 'Corniche Beirut & Khan el-Khalili Cairo'
    },
    'lang-german': {
      subject: 'German',
      city: 'Berlin / Vienna',
      country: 'Germany & Austria',
      flag: '🇩🇪',
      timeZone: 'Europe/Berlin',
      tagline: 'MEZ/MESZ · Mitteleuropäische Zeit (UTC+1/+2)',
      culturalNote: 'Brandenburger Tor & Wiener Kaffeehaus'
    },
    'lang-romanian': {
      subject: 'Romanian',
      city: 'Bucharest',
      country: 'Romania',
      flag: '🇷🇴',
      timeZone: 'Europe/Bucharest',
      tagline: 'EET/EEST · Ora României (UTC+2/+3)',
      culturalNote: 'Piața Unirii & Transylvanian Brașov'
    },
    'lang-russian': {
      subject: 'Russian',
      city: 'Moscow',
      country: 'Russia',
      flag: '🇷🇺',
      timeZone: 'Europe/Moscow',
      tagline: 'MSK · Московское время (UTC+3)',
      culturalNote: 'Red Square Spasskaya Tower Clock Chimes'
    },
    'lang-turkish': {
      subject: 'Turkish',
      city: 'Istanbul',
      country: 'Türkiye',
      flag: '🇹🇷',
      timeZone: 'Europe/Istanbul',
      tagline: 'TRT · Türkiye Saati (UTC+3)',
      culturalNote: 'Bosphorus Strait · Golden Horn & Galata'
    },
    'lang-vietnamese': {
      subject: 'Vietnamese',
      city: 'Hanoi',
      country: 'Vietnam',
      flag: '🇻🇳',
      timeZone: 'Asia/Ho_Chi_Minh',
      tagline: 'ICT · Giờ Đông Dương (UTC+7)',
      culturalNote: 'Hoàn Kiếm Lake Turtle Tower & Old Quarter'
    },
    'lang-english': {
      subject: 'English',
      city: 'London / New York',
      country: 'UK & USA',
      flag: '🇬🇧',
      timeZone: 'Europe/London',
      tagline: 'GMT/BST · Greenwich Prime Meridian (UTC+0/+1)',
      culturalNote: 'Big Ben Elizabeth Tower & Manhattan Times Square'
    },
    'lang-mandarin': {
      subject: 'Mandarin Chinese',
      city: 'Beijing',
      country: 'China',
      flag: '🇨🇳',
      timeZone: 'Asia/Shanghai',
      tagline: 'CST · China Standard Time (UTC+8)',
      culturalNote: 'Forbidden City Meridian Gate & Great Wall Sunrises'
    },
    'lang-cantonese': {
      subject: 'Cantonese',
      city: 'Hong Kong / Guangzhou',
      country: 'Hong Kong & Guangdong',
      flag: '🇭🇰',
      timeZone: 'Asia/Hong_Kong',
      tagline: 'HKT · Hong Kong Time (UTC+8)',
      culturalNote: 'Victoria Harbour Skyline & Yum Cha Morning Tea'
    },
    'lang-korean': {
      subject: 'Korean',
      city: 'Seoul',
      country: 'South Korea',
      flag: '🇰🇷',
      timeZone: 'Asia/Seoul',
      tagline: 'KST · Korea Standard Time (UTC+9)',
      culturalNote: 'Gyeongbokgung Palace & Bosingak Bell Chimes'
    },
    'lang-french': {
      subject: 'French',
      city: 'Paris',
      country: 'France',
      flag: '🇫🇷',
      timeZone: 'Europe/Paris',
      tagline: 'CET/CEST · Heure de Paris (UTC+1/+2)',
      culturalNote: 'Eiffel Tower Beacon & Quartier Latin Cafés'
    },
    'lang-hindi': {
      subject: 'Hindi',
      city: 'New Delhi / Varanasi',
      country: 'India',
      flag: '🇮🇳',
      timeZone: 'Asia/Kolkata',
      tagline: 'IST · Indian Standard Time (UTC+5:30)',
      culturalNote: 'Ganges Ghats Sunrise & Red Fort Heritage'
    },
    'lang-urdu': {
      subject: 'Urdu',
      city: 'Islamabad',
      country: 'Pakistan',
      flag: '🇵🇰',
      timeZone: 'Asia/Karachi',
      tagline: 'PKT · Pakistan Standard Time (UTC+5)',
      culturalNote: 'Badshahi Mosque Courtyard & Lahore Literary Heritage'
    },
    'lang-amharic': {
      subject: 'Amharic',
      city: 'Addis Ababa',
      country: 'Ethiopia',
      flag: '🇪🇹',
      timeZone: 'Africa/Addis_Ababa',
      tagline: 'EAT · East Africa Time / 12-Hour Solar Day (UTC+3)',
      culturalNote: 'Entoto Hills & Traditional Buna Coffee Ceremony'
    },
    'lang-swahili': {
      subject: 'Swahili',
      city: 'Nairobi',
      country: 'Kenya & Tanzania',
      flag: '🇰🇪',
      timeZone: 'Africa/Nairobi',
      tagline: 'EAT · Saa za Afrika Mashariki (UTC+3)',
      culturalNote: 'Mount Kilimanjaro Vista & Stone Town Zanzibar'
    },
    'lang-ukrainian': {
      subject: 'Ukrainian',
      city: 'Kyiv',
      country: 'Ukraine',
      flag: '🇺🇦',
      timeZone: 'Europe/Kyiv',
      tagline: 'EET/EEST · Kyiv Standard Time (UTC+2/+3)',
      culturalNote: 'Saint Sophia Golden Domes & Dnipro River Hills'
    },
    'skill-chess': {
      subject: 'Chess',
      city: 'Lausanne',
      country: 'International',
      flag: '♟️',
      timeZone: 'Europe/Zurich',
      tagline: 'FIDE Master Chrono · Swiss Blitz / Classical (UTC+1/+2)',
      culturalNote: 'FIDE World Championship & Reykjavik 1972'
    },
    'skill-morse': {
      subject: 'Morse Code',
      city: 'Greenwich (Zulu)',
      country: 'Global Radio',
      flag: '📡',
      timeZone: 'UTC',
      tagline: 'UTC/ZULU · Universal Radio Telecommunication Time',
      culturalNote: 'CW Shortwave Radio Bands & Titanic Distress Memorial'
    },
    'skill-mentalmath': {
      subject: 'Mental Math',
      city: 'Quantum Pulse',
      country: 'Universal Metrology',
      flag: '🧮',
      timeZone: 'UTC',
      tagline: 'SI Second · 9,192,631,770 Cesium-133 Transitions',
      culturalNote: 'Yoctosecond Precision Sub-Atomic Quantum Frequency'
    },
    'skill-scrabble': {
      subject: 'Scrabble',
      city: 'WESPA',
      country: 'World English Scrabble',
      flag: '🔤',
      timeZone: 'UTC',
      tagline: 'WESPA 25-Minute Master Match Clock',
      culturalNote: 'World Scrabble Championship Round Timer'
    },
    'skill-songwriting': {
      subject: 'Songwriting',
      city: 'Nashville',
      country: 'Music City USA',
      flag: '🎵',
      timeZone: 'America/Chicago',
      tagline: 'CST/CDT · Music Row Studio Clock (UTC-6/-5)',
      culturalNote: 'Music Row Studios & Abbey Road Studio Two'
    },
    'skill-typing': {
      subject: 'Typing Speed',
      city: 'Metronome',
      country: 'WPM Metrics',
      flag: '⌨️',
      timeZone: 'UTC',
      tagline: 'Keystroke Per Millisecond Velocity Engine',
      culturalNote: 'Cherry MX Mechanical Switch Actuation Timer'
    },
    'fitness': {
      subject: 'Apex Stride Fitness',
      city: 'Circadian',
      country: 'Biometrics',
      flag: '🏃',
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
      tagline: 'Optimal VO2 Max & Hypertrophy Training Window',
      culturalNote: 'Cardiovascular & Muscular Peak Output Chronobiology'
    }
  };

  var state = {
    activeSlotId: 'lang-japanese',
    displayMode: 'analog',
    modalOpen: false,
    fastSeed: 0
  };

  function polar(cx, cy, r, deg) {
    var rad = (deg - 90) * Math.PI / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  }

  function pseudoRand(seed, digits) {
    var s = seed;
    var out = '';
    for (var i = 0; i < digits; i++) {
      s = (s * 9301 + 49297) % 233280;
      out += Math.floor((s / 233280) * 10);
    }
    return out;
  }

  function getTimeInZone(timeZone) {
    try {
      var now = new Date();
      var dStr = now.toLocaleString('en-US', { timeZone: timeZone, hour12: false });
      var parts = dStr.split(', ');
      var timePart = parts[1] || '';
      var timeArr = timePart.split(':');
      var hours = parseInt(timeArr[0], 10) || 0;
      var minutes = parseInt(timeArr[1], 10) || 0;
      var seconds = parseInt(timeArr[2], 10) || 0;
      var ms = now.getMilliseconds();
      return { hours: hours, minutes: minutes, seconds: seconds, ms: ms, rawDate: now };
    } catch (e) {
      var n = new Date();
      return { hours: n.getUTCHours(), minutes: n.getUTCMinutes(), seconds: n.getUTCSeconds(), ms: n.getMilliseconds(), rawDate: n };
    }
  }

  function pad(n) {
    return n < 10 ? '0' + n : String(n);
  }

  function renderAnalogSVG(hours, minutes, seconds, ms, size, styleVariant) {
    size = size || 32;
    var cx = size / 2, cy = size / 2, r = size / 2 - 2;
    var secFloat = seconds + (ms / 1000);
    var minFloat = minutes + (secFloat / 60);
    var hourFloat = (hours % 12) + (minFloat / 60);

    var secDeg = secFloat * 6;
    var minDeg = minFloat * 6;
    var hourDeg = hourFloat * 30;

    var secP = polar(cx, cy, r * 0.85, secDeg);
    var minP = polar(cx, cy, r * 0.72, minDeg);
    var hourP = polar(cx, cy, r * 0.52, hourDeg);

    var isDark = styleVariant === 'gold' || styleVariant === 'dark';
    var bgFill = isDark ? '#141416' : 'rgba(255,255,255,0.08)';
    var ringStroke = isDark ? '#d4af37' : 'rgba(255,255,255,0.2)';
    var handColor = isDark ? '#f6e05e' : '#e2e8f0';
    var secColor = '#f43f5e';

    var svg = '<svg width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size + '" style="flex-shrink:0;vertical-align:middle;">' +
      '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + bgFill + '" stroke="' + ringStroke + '" stroke-width="1.2"/>';

    // 12 hour ticks
    for (var i = 0; i < 12; i++) {
      var t1 = polar(cx, cy, r - (i % 3 === 0 ? 3 : 1.5), i * 30);
      var t2 = polar(cx, cy, r - 0.5, i * 30);
      svg += '<line x1="' + t1.x + '" y1="' + t1.y + '" x2="' + t2.x + '" y2="' + t2.y + '" stroke="' + ringStroke + '" stroke-width="' + (i % 3 === 0 ? '1' : '0.6') + '"/>';
    }

    // Hour hand
    svg += '<line x1="' + cx + '" y1="' + cy + '" x2="' + hourP.x + '" y2="' + hourP.y + '" stroke="' + handColor + '" stroke-width="1.8" stroke-linecap="round"/>';
    // Minute hand
    svg += '<line x1="' + cx + '" y1="' + cy + '" x2="' + minP.x + '" y2="' + minP.y + '" stroke="' + handColor + '" stroke-width="1.3" stroke-linecap="round"/>';
    // Second hand
    svg += '<line x1="' + cx + '" y1="' + cy + '" x2="' + secP.x + '" y2="' + secP.y + '" stroke="' + secColor + '" stroke-width="0.8" stroke-linecap="round"/>';
    // Center cap
    svg += '<circle cx="' + cx + '" cy="' + cy + '" r="1.5" fill="' + secColor + '"/>';
    svg += '</svg>';

    return svg;
  }

  function updateTopbarWidget() {
    var btn = document.getElementById('fearn-world-clock-btn');
    if (!btn) return;

    var info = CULTURAL_CAPITALS[state.activeSlotId] || CULTURAL_CAPITALS['lang-japanese'];
    var t = getTimeInZone(info.timeZone);

    var analogHtml = renderAnalogSVG(t.hours, t.minutes, t.seconds, t.ms, 26, 'default');
    var timeFormatted = pad(t.hours) + ':' + pad(t.minutes) + ':' + pad(t.seconds);

    btn.innerHTML =
      '<span class="fearn-clock-mini-dial">' + analogHtml + '</span>' +
      '<span class="fearn-clock-flag">' + info.flag + '</span>' +
      '<span class="fearn-clock-city">' + info.city.split(' / ')[0] + '</span>' +
      '<span class="fearn-clock-time">' + timeFormatted + '</span>';
  }

  function updateModalView() {
    if (!state.modalOpen) return;
    var info = CULTURAL_CAPITALS[state.activeSlotId] || CULTURAL_CAPITALS['lang-japanese'];
    var t = getTimeInZone(info.timeZone);

    state.fastSeed = (state.fastSeed + 1) % 10000;

    // Big Featured Clock
    var bigDialEl = document.getElementById('fearn-clock-big-dial');
    if (bigDialEl) {
      bigDialEl.innerHTML = renderAnalogSVG(t.hours, t.minutes, t.seconds, t.ms, 140, 'gold');
    }

    var bigDigitalEl = document.getElementById('fearn-clock-big-digital');
    if (bigDigitalEl) {
      bigDigitalEl.textContent = pad(t.hours) + ':' + pad(t.minutes) + ':' + pad(t.seconds);
    }

    var msEl = document.getElementById('fearn-clock-ms');
    if (msEl) {
      msEl.textContent = '.' + pad(Math.floor(t.ms / 10));
    }

    // Yocto-Precision Quantum Readout
    var yoctoBox = document.getElementById('fearn-clock-yocto-levels');
    if (yoctoBox) {
      var seed = state.fastSeed;
      var levels = [
        { name: 'milli (10⁻³s)', val: pad(t.ms) },
        { name: 'micro (10⁻⁶s)', val: pseudoRand(seed * 5 + 1, 3) },
        { name: 'nano (10⁻⁹s)', val: pseudoRand(seed * 7 + 2, 3) },
        { name: 'pico (10⁻¹²s)', val: pseudoRand(seed * 11 + 3, 3) },
        { name: 'femto (10⁻¹⁵s)', val: pseudoRand(seed * 13 + 4, 3) },
        { name: 'atto (10⁻¹⁸s)', val: pseudoRand(seed * 17 + 5, 3) },
        { name: 'zepto (10⁻²¹s)', val: pseudoRand(seed * 19 + 6, 3) },
        { name: 'yocto (10⁻²⁴s)', val: pseudoRand(seed * 23 + 7, 3) }
      ];
      var yHtml = '';
      levels.forEach(function (lv) {
        yHtml += '<div class="fearn-yocto-cell"><div class="fearn-yocto-val">' + lv.val + '</div><div class="fearn-yocto-lbl">' + lv.name + '</div></div>';
      });
      yoctoBox.innerHTML = yHtml;
    }

    // Update list of all global cities in grid
    var gridEl = document.getElementById('fearn-clock-capitals-grid');
    if (gridEl && gridEl.children.length === 0) {
      buildCapitalsGrid(gridEl);
    } else if (gridEl) {
      var rows = gridEl.querySelectorAll('.fearn-clock-city-row');
      rows.forEach(function (row) {
        var sid = row.getAttribute('data-slot-id');
        var cInfo = CULTURAL_CAPITALS[sid];
        if (cInfo) {
          var ct = getTimeInZone(cInfo.timeZone);
          var timeTxt = row.querySelector('.fearn-city-time-txt');
          if (timeTxt) timeTxt.textContent = pad(ct.hours) + ':' + pad(ct.minutes) + ':' + pad(ct.seconds);
          var miniDial = row.querySelector('.fearn-city-mini-dial');
          if (miniDial) miniDial.innerHTML = renderAnalogSVG(ct.hours, ct.minutes, ct.seconds, ct.ms, 22, sid === state.activeSlotId ? 'gold' : 'default');
        }
      });
    }
  }

  function buildCapitalsGrid(container) {
    container.innerHTML = '';
    Object.keys(CULTURAL_CAPITALS).forEach(function (sid) {
      var cInfo = CULTURAL_CAPITALS[sid];
      var ct = getTimeInZone(cInfo.timeZone);
      var isSelected = sid === state.activeSlotId;

      var row = document.createElement('button');
      row.type = 'button';
      row.className = 'fearn-clock-city-row' + (isSelected ? ' is-active' : '');
      row.setAttribute('data-slot-id', sid);

      row.innerHTML =
        '<div class="fearn-city-left">' +
          '<span class="fearn-city-mini-dial">' + renderAnalogSVG(ct.hours, ct.minutes, ct.seconds, ct.ms, 22, isSelected ? 'gold' : 'default') + '</span>' +
          '<span class="fearn-city-flag">' + cInfo.flag + '</span>' +
          '<div class="fearn-city-meta">' +
            '<div class="fearn-city-name">' + cInfo.city + '</div>' +
            '<div class="fearn-city-sub">' + cInfo.subject + ' · ' + cInfo.tagline.split(' · ')[0] + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="fearn-city-right">' +
          '<span class="fearn-city-time-txt">' + pad(ct.hours) + ':' + pad(ct.minutes) + ':' + pad(ct.seconds) + '</span>' +
        '</div>';

      row.addEventListener('click', function () {
        setActiveSubject(sid);
        var allRows = container.querySelectorAll('.fearn-clock-city-row');
        allRows.forEach(function (r) { r.classList.remove('is-active'); });
        row.classList.add('is-active');
        refreshFeaturedInfo();
      });

      container.appendChild(row);
    });
  }

  function refreshFeaturedInfo() {
    var info = CULTURAL_CAPITALS[state.activeSlotId] || CULTURAL_CAPITALS['lang-japanese'];
    var titleEl = document.getElementById('fearn-clock-featured-title');
    if (titleEl) titleEl.innerHTML = info.flag + ' ' + info.city + ' <span style="font-size:0.9rem;font-weight:400;color:var(--text-sub);">' + info.country + '</span>';
    var noteEl = document.getElementById('fearn-clock-featured-note');
    if (noteEl) noteEl.textContent = info.culturalNote;
    var tzEl = document.getElementById('fearn-clock-featured-tz');
    if (tzEl) tzEl.textContent = info.tagline;
  }

  function openClockModal() {
    state.modalOpen = true;
    var modal = document.getElementById('fearn-world-clock-modal');
    var backdrop = document.getElementById('fearn-world-clock-backdrop');
    if (modal && backdrop) {
      modal.classList.add('is-open');
      backdrop.classList.add('is-open');
      refreshFeaturedInfo();
      var gridEl = document.getElementById('fearn-clock-capitals-grid');
      if (gridEl) buildCapitalsGrid(gridEl);
    }
  }

  function closeClockModal() {
    state.modalOpen = false;
    var modal = document.getElementById('fearn-world-clock-modal');
    var backdrop = document.getElementById('fearn-world-clock-backdrop');
    if (modal && backdrop) {
      modal.classList.remove('is-open');
      backdrop.classList.remove('is-open');
    }
  }

  function setActiveSubject(slotId) {
    if (CULTURAL_CAPITALS[slotId]) {
      state.activeSlotId = slotId;
      updateTopbarWidget();
    }
  }

  function tick() {
    updateTopbarWidget();
    if (state.modalOpen) {
      updateModalView();
    }
    requestAnimationFrame(tick);
  }

  function init() {
    var btn = document.getElementById('fearn-world-clock-btn');
    if (btn) {
      btn.addEventListener('click', openClockModal);
    }

    var closeBtn = document.getElementById('fearn-clock-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', closeClockModal);

    var backdrop = document.getElementById('fearn-world-clock-backdrop');
    if (backdrop) backdrop.addEventListener('click', closeClockModal);

    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && state.modalOpen) closeClockModal();
    });

    requestAnimationFrame(tick);
  }

  root.FEARN_WORLD_CLOCK = {
    capitals: CULTURAL_CAPITALS,
    setActiveSubject: setActiveSubject,
    openModal: openClockModal,
    closeModal: closeClockModal,
    init: init
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})(typeof window !== 'undefined' ? window : globalThis);
