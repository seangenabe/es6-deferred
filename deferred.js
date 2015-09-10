'use strict'

module.exports = class Deferred {

  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve
      this.reject = reject
    })
  }

  then(resolved, rejected) {
    return this.promise.then(resolved, rejected)
  }

  catch(rejected) {
    return this.promise.catch(rejected)
  }

}
