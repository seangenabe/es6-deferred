
var chai = require('chai')
var expect = chai.expect
var Deferred = require('./')
chai.use(require('chai-as-promised'))

describe('Deferred', function() {

  this.timeout(200)

  var promises = []

  beforeEach(function() {
    promises = []
    expectedCount = 0
  })

  function plan(n) {
    promises = new Array(n)
  }

  function push(p, index) {
    promises[index] = p
  }

  afterEach(function() {
    var notCalled = []
    for (var i = 0, len = promises.length; i < len; i++) {
      var p = promises[i]
      if (p === undefined) {
        notCalled.push(i)
      }
      i++
    }
    if (notCalled.length) {
      this.currentTest.emit('error', new Error('assertions: ' + notCalled.join(',') + ' not called'))
    }
    return Promise.all(promises)
  })

  describe('#constructor()', function() {
    it('should be created without errors', function() {
      expect(Deferred).to.be.a('function')
      var d = new Deferred()
      expect(d).to.respondTo('resolve')
      expect(d).to.respondTo('reject')
      expect(d).to.have.property('promise')
        .that.respondTo('then')
    })
  })

  describe('#resolve() and #reject()', function() {
    it('should resolve to a value', function() {
      var d = new Deferred()
      setTimeout(function() {
        d.resolve(5)
      }, 100)
      return expect(d.promise).to.eventually.equal(5)
    })

    it('should reject with an error', function() {
      var d = new Deferred()
      setTimeout(function() {
        d.reject(new Error())
      }, 100)
      return expect(d.promise).to.be.rejected
    })

    it('should only resolve to the first value', function(cb) {
      var d = new Deferred()
      d.resolve(1)
      d.resolve(2)
      setTimeout(function() {
        expect(d.promise).to.eventually.equal(1)
        cb()
      }, 100)
    })
  })

  describe('#then', function() {
    it('should be called when resolved and return a thenable', function() {
      plan(5)
      var d = new Deferred()
      setTimeout(function() {
        d.resolve("foo")
      }, 100)
      push(expect(d).to.respondTo('then'), 0)
      var e = new Promise(function(resolve, reject) {
        var thenable = d.then(function(value) {
          push(expect(value).to.equal("foo"), 1)
          resolve("bar")
          return "egg"
        })
        push(expect(thenable).to.respondTo('then'), 2)
        push(expect(thenable).to.eventually.equal("egg"), 3)
      })
      push(expect(e).to.eventually.equal("bar"), 4)
    })

    it('should handle errors', function() {
      plan(4)
      var d = new Deferred()
      setTimeout(function() {
        d.reject(new Error("bacon"))
      }, 100)
      var e = new Promise(function(resolve, reject) {
        var thenable = d.then(null, function(error) {
          push(expect(error.message).to.equal("bacon"), 0)
          resolve("bar")
          return "egg"
        })
        push(expect(thenable).to.respondTo('then'), 1)
        push(expect(thenable).to.eventually.equal("egg"), 2)
      })
      push(expect(e).to.eventually.equal("bar"), 3)
    })
  })

  describe("catch", function() {
    it('should handle errors', function() {
      plan(4)
      var d = new Deferred()
      setTimeout(function() {
        d.reject(new Error("bacon"))
      }, 100)
      var e = new Promise(function(resolve, reject) {
        var thenable = d.catch(function(error) {
          push(expect(error.message).to.equal("bacon"), 0)
          resolve("bar")
          return "egg"
        })
        push(expect(thenable).to.respondTo('then'), 1)
        push(expect(thenable).to.eventually.equal("egg"), 2)
      })
      push(expect(e).to.eventually.equal("bar"), 3)
    })
  })

})
