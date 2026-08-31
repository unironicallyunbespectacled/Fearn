const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../../data/curricula/korean.js');
const curr = require(filePath);

const output = '// Korean curriculum\n(function(global){\n  \'use strict\';\n  var UNITS = ' + JSON.stringify(curr.units, null, 4) + ';\n  var LESSONS = ' + JSON.stringify(curr.lessons, null, 4) + ';\n  var CURRICULUM = { id: \'korean\', name: \'Korean\', units: UNITS, lessons: LESSONS };\n  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};\n  global.FEARN_CURRICULA[\'korean\'] = CURRICULUM;\n  if (typeof module !== \'undefined\' && module.exports) module.exports = CURRICULUM;\n})(typeof window !== \'undefined\' ? window : global);\n';

fs.writeFileSync(filePath, output, 'utf8');
console.log('Fixed Korean footer!');
