'use strict'

/*!
 * imports.
 */

var test = require('tape-catch')

/*!
 * imports (local).
 */

var token = require('./')

/*!
 * constants.
 */

var USER = 'Aladdin'
var PASS = 'open sesame'

/*!
 * parameters.
 */

var parameters = [
  { name: 'user:pass', args: [ USER, PASS ], expected: 'QWxhZGRpbjpvcGVuIHNlc2FtZQ==' },
  { name: 'user:', args: [ USER ], expected: 'QWxhZGRpbjo=' },
  { name: ':pass', args: [ '', PASS ], expected: 'Om9wZW4gc2VzYW1l' }
]

/*!
 * tests.
 */

test('token()', function (t) {
  t.plan(parameters.length)

  parameters.forEach(function (p) {
    t.equal(token.apply(null, p.args), p.expected, p.name)
  })
})
