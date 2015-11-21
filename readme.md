# es6-deferred

Deferred the ES2015 way.

[![npm](https://img.shields.io/npm/v/is-heroku-cli.svg?style=flat-square)](https://www.npmjs.com/package/is-heroku-cli)
[![Build Status](https://img.shields.io/travis/seangenabe/is-heroku-cli/es6-only.svg?style=flat-square)](https://travis-ci.org/seangenabe/is-heroku-cli)
[![Dependency Status](https://img.shields.io/david/seangenabe/is-heroku-cli.svg?style=flat-square)](https://david-dm.org/seangenabe/is-heroku-cli)
[![devDependency Status](https://img.shields.io/david/dev/seangenabe/is-heroku-cli.svg?style=flat-square)](https://david-dm.org/seangenabe/is-heroku-cli#info=devDependencies)
[![node](https://img.shields.io/node/v/es6-deferred.svg?style=flat-square)](https://nodejs.org/en/download/)

## Usage

````javascript
const Deferred = require('es6-deferred');
let d = new Deferred();
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
