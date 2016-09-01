'use strict';
var child_process = require('child_process');
module.exports.run = (command) => child_process.execSync(command,{stdio:[0,1,2]});