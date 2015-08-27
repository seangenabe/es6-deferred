## Usage

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
