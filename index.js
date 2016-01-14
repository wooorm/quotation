/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module quotation
 * @fileoverview Quote a value.
 */

'use strict';

/* eslint-env commonjs */

/*
 * Constants.
 */

var C_DEFAULT = '"';

/**
 * Quote text.
 *
 * @example
 *   quotation('one');
 *   // '"one"'
 *
 * @example
 *   quotation(['one', 'two']);
 *   // ['"one"', '"two"']
 *
 * @example
 *   quotation('one', '\'');
 *   // '\'one\''
 *
 * @example
 *   quotation('one', '“', '”');
 *   // '“one”'
 *
 * @param {string|Array.<string>} value - One or more
 *   values to quote.
 * @param {string} [open='"'] - Opening quote.
 * @param {string} [close] - Closing quote, defaults to
 *   `open` or the default (`"`) when not given.
 * @return {string} - Quoted `value`.
 * @throws {Error} - When not given `string` or
 *   `Array.<string>`.
 */
function quotation(value, open, close) {
    var result;
    var index;
    var length;

    open = open || C_DEFAULT;
    close = close || open;

    if (typeof value === 'string') {
        return open + value + close;
    }

    if (typeof value !== 'object' || !('length' in value)) {
        throw new Error('Expected string or array of strings');
    }

    result = [];
    length = value.length;
    index = -1;

    while (++index < length) {
        result[index] = quotation(value[index], open, close);
    }

    return result;
}

/*
 * Expose.
 */

module.exports = quotation;
