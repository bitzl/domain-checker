'use strict';

const async = require('async'),
  lookup = require('dns').lookup,
  util = require('util');

function checkAll(words, tld, limit, callback) {
  const checker = function (word, callback2) {
    const domain = createDomain(word.word, tld);
    if (word.tld == null) {
      word.tld = {};
    }
    checkDomain(domain, function (available) {
      word.tld[tld] = available;
      callback2();
    });
  };
  async.eachLimit(words, limit, checker, function (error) {
    callback(error, words);
  });
}

// Returns true, if there domain can be resolved, false if not.
function checkDomain(domain, callback) {
  lookup(domain, function (err, address, family) {
    callback(err == null);
  });
}

function createDomain(base, tld) {
  return base + '.' + tld;
}

module.exports.checkAll = checkAll;
module.exports.checkDomain = checkDomain;
module.exports.createDomain = createDomain;
