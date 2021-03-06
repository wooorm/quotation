import test from 'tape'
import {quotation} from './index.js'

test('quotation(url)', function (t) {
  t.throws(
    function () {
      // @ts-ignore
      quotation(true)
    },
    /Error: Expected string or array of strings/,
    'should fail when given a boolean'
  )

  t.throws(
    function () {
      // @ts-ignore
      quotation({})
    },
    /Error: Expected string or array of strings/,
    'should fail when given an object'
  )

  t.equal(quotation('a'), '"a"', 'should quote a string')

  t.deepEqual(quotation(['a', 'b']), ['"a"', '"b"'], 'should quote an array')

  t.equal(quotation('a', "'"), "'a'", 'should quote a string given `character`')

  t.deepEqual(
    quotation(['a', 'b'], "'"),
    ["'a'", "'b'"],
    'should quote an array given `character`'
  )

  t.equal(
    quotation('a', '“', '”'),
    '“a”',
    'should quote a string given `open` and `close`'
  )

  t.deepEqual(
    quotation(['a', 'b'], '“', '”'),
    ['“a”', '“b”'],
    'should quote an array given `open` and `close`'
  )

  t.end()
})
