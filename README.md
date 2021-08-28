# help-string
> Small js package I use to help me to dealing with strings

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![GitHub workflow status](https://img.shields.io/github/workflow/status/pnxdxt/help-string/CI)](https://github.com/pnxdxt/help-string)
[![npm bundle size](https://img.shields.io/bundlephobia/min/help-string)](https://bundlephobia.com/package/help-string)
[![npm downloads](https://img.shields.io/npm/dt/help-string)](https://www.npmjs.com/package/help-string)

## Install
```
$ npm install help-string
```
## Import

This package is pure [ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules). It cannot be `require()`'d from CommonJS.

Use `import foo from 'foo'` instead of `const foo = require('foo')` to import the package.

```js
// Load entire build
import * as helpString from 'help-string';

// Load by method
import {sliceText} from 'help-string';
```
If the package is used in an async context, you could use [`await import(…)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports) from CommonJS instead of `require(…)`.

**You also need to make sure you're on the latest minor version of Node.js. At minimum Node.js 12.20, 14.14, or 16.0.**

Read more here: [sindresorhus/esm-package](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)

## Usage

```js

helpString.isMail('');
//=> false

helpString.isEmpty('')
//=> true
```

`startsWith` : Checks if `string` starts with the given target string. 

`endsWith` : Checks if `string` ends with the given target string. 

`indexOf` : Find the index of a given string inside another.

`isEmpty` : Check if given string is undefined, null, or zero length.

`isImageUrl` : Checks if value is a valid image url. 

`isMail` : Checks if value is a valid mail. 

`isPhone` : Checks if value is a valid phone number. 

`isUrl` : Checks if value is a valid url. 

`random` : Generates a random string. 

`repeat` : Repeats the given string `n` times. 

`replace` : Replaces matches for `pattern` in `string` with `replacement`. 

`sliceText` : Split text and keep `n` many characters. 

## License

MIT © [Paul Nodet](https://pnodet.com)
