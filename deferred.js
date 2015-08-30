"use strict";

var Promise = global.Promise || require('es6-promise').Promise;

function deferred () {
  var promise, resolver, rejecter;

  promise = new Promise(function (resolve, reject) {
    resolver = resolve;
    rejecter = reject;
  });

  return {resolve: resolver, reject: rejecter, promise: promise};
}

module.exports = deferred;
