'use strict'

const keyExists = require('./lib/keyExists')
module.exports = keyExists

// const res = keyExists({a: {b: [1, 2, 3, {c: [[0, 1]]}]}}, 'a.b[3].c[0][25]')
// bconsole.log(res, '********************')


