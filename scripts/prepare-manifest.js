'use strict';
const fs = require('node:fs');
fs.copyFileSync('.homeycompose/app.json', 'app.json');
