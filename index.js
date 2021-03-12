/**
 * Quote a value.
 *
 * @param {string | string[]} value Value(s) to wrap in quotes
 * @param {string} [open='"'] Opening quote
 * @param {string} [close=open] Closing quote
 * @returns {string | string[]}
 */
export function quotation(value, open, close) {
  var start = open || '"'
  var end = close || start
  /** @type {string[]} */
  var result = []
  var index = -1

  if (Array.isArray(value)) {
    while (++index < value.length) {
      result[index] = start + value[index] + end
    }

    return result
  }

  if (typeof value === 'string') {
    return start + value + end
  }

  throw new TypeError('Expected string or array of strings')
}
