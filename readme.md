# quotation

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Quote a value.

## Install

This package is ESM only: Node 12+ is needed to use it and it must be `import`ed
instead of `require`d.

[npm][]:

```sh
npm install quotation
```

## Use

```js
import {quotation} from 'quotation'

quotation('one') // => '"one"'
quotation(['one', 'two']) // => ['"one"', '"two"']
quotation('one', "'") // => '\'one\''
quotation('one', '“', '”') // => '“one”'
```

## API

This package exports the following identifiers: `quotation`.
There is no default export.

### `quotation(value[, open[, close]])`

Quote a value.

###### Parameters

*   `value` (`string` or `string[]`)
    — Value to wrap in quotes
*   `open` (`string`, default: `"`)
    — Character to add at start of `value`
*   `close` (`string`, default: `open` or `"`)
    — Character to add at end of `value`

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/wooorm/quotation/workflows/main/badge.svg

[build]: https://github.com/wooorm/quotation/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/quotation.svg

[coverage]: https://codecov.io/github/wooorm/quotation

[downloads-badge]: https://img.shields.io/npm/dm/quotation.svg

[downloads]: https://www.npmjs.com/package/quotation

[size-badge]: https://img.shields.io/bundlephobia/minzip/quotation.svg

[size]: https://bundlephobia.com/result?p=quotation

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com
