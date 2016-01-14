# quotation [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

Quote a value.

## Installation

[npm][npm-install]:

```bash
npm install quotation
```

**quotation** is also available for [duo][duo-install], and as an
AMD, CommonJS, and globals module, [uncompressed and compressed][releases].

## Usage

```js
var quotation = require('quotation');

quotation('one'); // '"one"'
quotation(['one', 'two']); // ['"one"', '"two"']
quotation('one', '\''); // '\'one\''
quotation('one', '“', '”'); // '“one”'
```

## API

### `quotation(value)`

### `quotation(value, character)`

### `quotation(value, open, close)`

Quote a value.

**Parameters**

*   `value` (`string` or `Array.<string>`)
    — Value to wrap in quotes;

*   `character` (`string`, default: `"`)
    — Character to wrap `value` in;

*   `open` (`string`, default: `"`)
    — Character to add at start of `value`;

*   `close` (`string`, default: `"`)
    — Character to add at end of `value`.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/wooorm/quotation.svg

[travis]: https://travis-ci.org/wooorm/quotation

[codecov-badge]: https://img.shields.io/codecov/c/github/wooorm/quotation.svg

[codecov]: https://codecov.io/github/wooorm/quotation

[npm-install]: https://docs.npmjs.com/cli/install

[duo-install]: http://duojs.org/#getting-started

[releases]: https://github.com/wooorm/quotation/releases

[license]: LICENSE

[author]: http://wooorm.com
