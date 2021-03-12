export function quotation(value, open, close) {
  var start = open || '"'
  var end = close || start
  var result
  var index

  if (typeof value === 'string') {
    return start + value + end
  }

  if (typeof value !== 'object' || !('length' in value)) {
    throw new Error('Expected string or array of strings')
  }

  result = []
  index = -1

  while (++index < value.length) {
    result[index] = quotation(value[index], start, end)
  }

  return result
}
