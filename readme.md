# es6-deferred

Deferred the ES2015 way.

[![npm](https://img.shields.io/npm/v/is-heroku-cli.svg?style=flat-square)](https://www.npmjs.com/package/is-heroku-cli)
[![Build Status](https://img.shields.io/travis/seangenabe/is-heroku-cli/master.svg?style=flat-square)](https://travis-ci.org/seangenabe/is-heroku-cli)
[![Dependency Status](https://img.shields.io/david/seangenabe/is-heroku-cli.svg?style=flat-square)](https://david-dm.org/seangenabe/is-heroku-cli)
[![devDependency Status](https://img.shields.io/david/dev/seangenabe/is-heroku-cli.svg?style=flat-square)](https://david-dm.org/seangenabe/is-heroku-cli#info=devDependencies)

## It's not really ES2015 if it's just a polyfill...

**Deprecation notice**: Polyfill will be removed in due time.
Versions of node.js without the required features will **not** be supported.

## Usage

[![Greenkeeper badge](https://badges.greenkeeper.io/seangenabe/es6-deferred.svg)](https://greenkeeper.io/)

````javascript
var Deferred = require('es6-deferred');
var d = new Deferred();
````

### `d.promise`

The promise.

### `d.resolve(value)`

Resolves the promise with the given value.

### `d.reject(error)`

Rejects the promise with the given error.

### `d.then(onFulfilled, onRejected)`

Appends a fulfillment and rejection handler to the promise.

### `d.catch(onRejected)`

Appends a rejection handler to the promise.

## License

MIT
