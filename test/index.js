'use strict';

var wrapAsync = require('..');
var should = require('should');

describe('wrapAsync ::', function() {
  it('simple wrap', function(done) {
    var parse = wrapAsync(JSON.parse);
    parse('{\"a\":1}', function(err, result) {
      result.a.should.be.equal(1);
      done(err);
    });
  });

  it('wrap null', function(done) {
    var parse = wrapAsync(function() {
      return null;
    });

    parse('{\"a\":1}', function(err, result) {
      (!result).should.be.equal(true);
      done(err);
    });
  });

  it('wrap variable number of arguments', function(done) {
    wrapAsync(function(x, y, z) {
      (arguments.length === 3).should.be.equal(true);
      (x === 1).should.be.equal(true);
      (y === 2).should.be.equal(true);
      (z === 3).should.be.equal(true);
    })(1, 2, 3, function() {});
    done();
  });

  it('catch errors', function(done) {
    wrapAsync(function() {
      throw new Error('foo');
    })(function(err) {
      (!!err).should.be.equal(true);
      (err.message === 'foo').should.be.equal(true);
      done();
    });
  });

  it('dont catch errors in the callback', function(done) {
    try {
      wrapAsync(function() {})(function(err) {
        if (err) return test.done(new Error('should not get an error here'));
        throw new Error('callback error');
      });
    } catch (e) {
      (e.message === 'callback error').should.be.equal(true);
      done();
    }
  });
});
