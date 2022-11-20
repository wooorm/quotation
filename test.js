import assert from 'node:assert/strict'
import test from 'node:test'
import {quotation} from './index.js'

test('quotation(url)', function () {
  assert.throws(
    function () {
      // @ts-ignore
      quotation(true)
    },
    /Error: Expected string or array of strings/,
    'should fail when given a boolean'
  )

  assert.throws(
    function () {
      // @ts-ignore
      quotation({})
    },
    /Error: Expected string or array of strings/,
    'should fail when given an object'
  )

  assert.equal(quotation('a'), '"a"', 'should quote a string')

  assert.deepEqual(
    quotation(['a', 'b']),
    ['"a"', '"b"'],
    'should quote an array'
  )

  assert.equal(
    quotation('a', "'"),
    "'a'",
    'should quote a string given `character`'
  )

  assert.deepEqual(
    quotation(['a', 'b'], "'"),
    ["'a'", "'b'"],
    'should quote an array given `character`'
  )

  assert.equal(
    quotation('a', '“', '”'),
    '“a”',
    'should quote a string given `open` and `close`'
  )

  assert.deepEqual(
    quotation(['a', 'b'], '“', '”'),
    ['“a”', '“b”'],
    'should quote an array given `open` and `close`'
  )
})
