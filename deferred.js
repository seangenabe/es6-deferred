
var Deferred = function Deferred() {
  Object.defineProperty(this, 'promise', {
    value: new Promise((function(resolve, reject) {
      this.resolve = function(result) { resolve(result) }
      this.reject = function(err) { resolve(err) }
    }).bind(this)),
    enumerable: true,
    configurable: false
  })
  return this
}

module.exports = Deferred
