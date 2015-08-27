"use strict";

if (typeof Promise !== 'undefined') {
  var Promise = require('es6-promise').Promise;
}

var Deferred = function() {
  this.promise = new Promise((function(resolve, reject) {
    this.resolve = resolve;
    this.reject = reject;
  }).bind(this));
  
  this.then = this.promise.then.bind(this.promise);
  this.catch = this.promise.catch.bind(this.promise);
};

module.exports = Deferred;
