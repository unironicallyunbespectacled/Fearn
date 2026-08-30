const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const CURR_DIR = path.join(ROOT_DIR, 'data/curricula');

// Helper to save curriculum file
function saveCurriculum(subjKey, curriculumObj) {
  const filePath = path.join(CURR_DIR, subjKey + '.js');
  const code = '// ' + subjKey + ' curriculum — fully authored CEFR A1-C2 roadmap\n' +
    '(function (global) {\n' +
    '  \'use strict\';\n' +
    '  var UNITS = ' + JSON.stringify(curriculumObj.units, null, 4) + ';\n' +
    '  var LESSONS = ' + JSON.stringify(curriculumObj.lessons, null, 4) + ';\n' +
    '  var ROADMAP = ' + JSON.stringify(curriculumObj.roadmap || [], null, 4) + ';\n' +
    '  var SUBJECT = { units: UNITS, lessons: LESSONS, roadmap: ROADMAP };\n' +
    '  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};\n' +
    '  global.FEARN_CURRICULA[\'' + subjKey + '\'] = SUBJECT;\n' +
    '  if (typeof module !== \'undefined\' && module.exports) module.exports = SUBJECT;\n' +
    '})(typeof window !== \'undefined\' ? window : global);\n';

  fs.writeFileSync(filePath, code, 'utf8');
  console.log('[SAVED] Successfully wrote fully-authored curriculum: ' + subjKey + '.js (' + Object.keys(curriculumObj.lessons).length + ' lessons)');
}

module.exports = {
  CURR_DIR,
  saveCurriculum
};
