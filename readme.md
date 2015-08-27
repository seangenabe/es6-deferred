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

### `d.then(fn)`

Appends a fulfullment handler to the promise.

### `d.catch(fn)`

Appends a rejection handler to the promise.

## License

MIT
