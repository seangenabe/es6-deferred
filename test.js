
var chai = require('chai');
var expect = chai.expect;
var Deferred = require('./');
chai.use(require('chai-as-promised'));

describe('Deferred', function() {

  describe('#constructor()', function() {
    it('should be created without errors', function() {
      expect(Deferred).to.be.a('function');
      var d = new Deferred();
      expect(d).to.respondTo('resolve');
      expect(d).to.respondTo('reject');
      expect(d).to.have.property('promise')
        .that.respondTo('then');
    });
  });

  describe('#resolve() and #reject()', function() {
    it('should resolve to a value', function() {
      this.timeout(200);
      var d = new Deferred();
      setTimeout(function() {
        d.resolve(5);
      }, 100);
      return expect(d.promise).to.eventually.equal(5);
    });

    it('should reject with an error', function() {
      this.timeout(200);
      var d = new Deferred();
      setTimeout(function() {
        d.reject(new Error());
      }, 100);
      return expect(d.promise).to.be.rejected;
    });

    it('should only resolve to the first value', function(cb) {
      this.timeout(200);
      var d = new Deferred();
      d.resolve(1);
      d.resolve(2);
      setTimeout(function() {
        expect(d.promise).to.eventually.equal(1);
        cb()
      }, 100);
    });
  });

  describe('#then() and #catch()', function () {
    it('should be called when the promise is resolved', function (cb) {
      this.timeout(200);
      var d = new Deferred();
      d.resolve(1);
      d.then(function (n) {
        expect(n).to.equal(1);
        cb();
      });
    });

    it('should be called when the promise is rejected', function (cb) {
      this.timeout(200);
      var d = new Deferred();
      d.reject(2);
      d.catch(function (n) {
        expect(n).to.equal(2);
        cb();
      });
    });
  });

});
