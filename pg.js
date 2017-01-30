// var path = require('path')
// var pgPath;
// //support both pg & pg.js
// //this will eventually go away when i break native bindings
// //out into their own module
// pgPath = path.dirname(require.resolve('pg'))
var pg = require('pg');
// module.exports.Result = require(path.join(pgPath, 'result.js'))
// module.exports.prepareValue = require(path.join(pgPath, 'utils.js')).prepareValue
module.exports.Result = require('pg/lib/result.js');
module.exports.prepareValue = require('pg/lib/utils.js').prepareValue;
