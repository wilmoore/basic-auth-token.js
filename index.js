'use strict'

/*!
 * exports.
 */

module.exports = token

/*!
 * constants.
 */

var ENCODING = 'base64'

/**
 * Token generated by concatenating username and password with `:` character within a base64 encoded string.
 *
 * @param  {Function|*} user
 * User identifier.
 *
 * @param  {Array|*} pass
 * Password.
 *
 * @return {*}
 * Base64 encoded authentication token.
 */

function token (user, pass) {
  return base64([user, pass].join(':'))
}

/**
 * Base64 encode string.
 *
 * @param  {String} string
 * String input.
 *
 * @return {*}
 * Base64 encoded string.
 */

function base64 (string) {
  return new Buffer(string).toString(ENCODING)
}