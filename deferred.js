"use strict";

var Promise = global.Promise || require('es6-promise').Promise;

var Deferred = function() {
  this.promise = new Promise((function(resolve, reject) {
    this.resolve = resolve;
    this.reject = reject;
  }).bind(this));
};

module.exports = Deferred;
